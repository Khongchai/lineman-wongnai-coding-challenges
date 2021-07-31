import { Image, Box, Flex, Heading, Text, Stack, Link } from "@chakra-ui/react";
import React from "react";
import { TouristAttractionType } from "../../types/TouristAttraction";
import { Images } from "../Images";
import { Description } from "./Description";
import { Tags } from "./Tags";

const TouristAttractionCard: React.FC<{
  data: TouristAttractionType[];
  setSearchData: React.Dispatch<React.SetStateAction<string>>;
}> = ({ data, setSearchData }) => {
  return (
    <Stack spacing="2.25rem">
      {data.map((card) => (
        <Flex
          key={card.title}
          // maxHeight={["unset", null, null, "550px"]}
          // minHeight="550px"
          width={["100%", null, null, "unset"]}
          flexDir="column"
          as={Stack}
          spacing="0.5rem"
        >
          <Heading
            fontSize={["lg", null, null, "xl"]}
            as={Link}
            href={card.url}
            target="_blank"
          >
            {card.title}
          </Heading>
          <Tags setSearchData={setSearchData} tags={card.tags} />
          <Images
            //Target requires fixed size array, pass members explicitly.
            bigImgUrl={card.photos[0]}
            tinyImgUrls={[card.photos[1], card.photos[2], card.photos[3]]}
          />
          <Description description={card.description} link={card.url} />
        </Flex>
      ))}
    </Stack>
  );
};

export default TouristAttractionCard;
