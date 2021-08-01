import React from "react";
import { screen, waitFor } from "@testing-library/react";
import { render } from "./test-utils";
import { App } from "./App";
import { TouristAttractionType } from "./types/TouristAttraction";

import { rest } from "msw";
import { setupServer } from "msw/node";
import TouristAttractionCard from "./components/TouristAttractionCard";
import HeaderSection from "./components/HeaderSection/HeaderSection";

const server = setupServer(
  rest.get("/api", (req, rest, ctx) => {
    return rest(ctx.json({ greeting: "hello" }));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

const fixture: TouristAttractionType = {
  title:
    "เที่ยวสิ้นปี บ้านอีต่องเหมืองปิล็อก ชมหมอก กินหมูกระทะ ล่าทางช้างเผือก",
  eid: "4",
  url: "https://www.wongnai.com/trips/travel-at-etong-pilok",
  description:
    "จังหวะ จะเที่ยว “บ้านอีต่อง เหมืองปิล็อก” ตามล่าทะเลหมอกหน้าหนาว เดินเที่ยวหมู่บ้านเหมืองเก่าน่ารัก กินหมูกระทะท้าลมหนาว รอดูทางช้างเผือก แล้วปิดทริปที่น้ำตก",
  photos: [
    "https://img.wongnai.com/p/1600x0/2019/12/25/183af5673b074e55a3842aca97676220.jpg",
    "https://img.wongnai.com/p/1600x0/2019/12/25/54961e4326954765a80cd20e2044083d.jpg",
    "https://img.wongnai.com/p/1600x0/2019/12/25/9bbcb032afc145d19e485defcf2067c1.jpg",
    "https://img.wongnai.com/p/1600x0/2019/12/25/2974828fdb16492da0e8f35f627ade7a.jpg",
  ],
  tags: [
    "จุดถ่ายรูป",
    "หมู่บ้าน",
    "ภูเขา",
    "ธรรมชาติ",
    "ถ่ายรูปสวย",
    "บ้านอีต่องเหมืองปิล็อก",
    "กาญจนบุรี",
  ],
};
const mockHook = (text: string) => console.log(text);

/**
 * Unit
 */
test("Render main page", async () => {
  render(<App />);
  const welcomeText = screen.getByText(/เที่ยวไหนดี/i);
  expect(welcomeText).toBeInTheDocument();
});

test("Check that typing in input box would reflect the value into the query param", async () => {
  //TODO
  render(<HeaderSection searchData="" setSearchData={() => console.log()} />);
  const input = screen.getByRole("textbox", { name: "search-destinations" });
  expect(input).toBeVisible();
});

test("Test data displayed with fixture", async () => {
  render(
    <TouristAttractionCard data={[fixture]} setSearchData={mockHook as any} />
  );
  await waitFor(() => screen.getByText(fixture.title));
  expect(screen.getAllByRole("link")).toHaveLength(2);
});

/**
 * Integration
 */
// test("check that clicking on a link is reflected in the search bar", async () => {
//   render(
//     <TouristAttractionCard data={[fixture]} setSearchData={mockHook as any} />
//   );
//   await waitFor(() => screen.getByText(fixture.title));
//   expect(screen.getAllByRole("link")).toHaveLength(2);
// });
