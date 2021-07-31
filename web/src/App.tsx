import { Box, Flex, Text, Image } from "@chakra-ui/react";
import * as React from "react";
import { useState } from "react";
import _HeaderSection from "./components/HeaderSection/HeaderSection";
import { HeartLoader } from "./components/LoadingAnimations/HeartLoader";
import TouristAttractionCard from "./components/TouristAttractionCard";
import { StackContainer } from "./Elements/BoxContainer";
import { TouristAttractionType } from "./types/TouristAttraction";
import { useDelayedFetch } from "./utils/hooks/useDelayedFetch";
import useLoadFromQueryParamOnLoad from "./utils/hooks/useLoadFromQueryParam";
import useReflectSearchToQueryParam from "./utils/hooks/useReflectSearchToQueryParam";

export const App = () => {
  const [searchData, setSearchData] = useState<string>("");
  const [fetching, setFetching] = useState(false);
  const [dataToDisplay, setDataToDisplay] = useState<TouristAttractionType[]>(
    []
  );

  useReflectSearchToQueryParam(searchData);
  useLoadFromQueryParamOnLoad(setSearchData);

  useDelayedFetch(searchData, 400, setFetching, setDataToDisplay);

  return (
    <>
      <Box position="relative">
        <_HeaderSection setSearchData={setSearchData} searchData={searchData} />
        <StackContainer spacing="0.75rem">
          {fetching ? (
            <Flex flexDir="column" align="center" justify="center" width="100%">
              กรุณารอสักครู่ <HeartLoader />
            </Flex>
          ) : dataToDisplay.length > 0 ? (
            <Flex>
              <TouristAttractionCard
                setSearchData={setSearchData}
                data={dataToDisplay}
              />
              {/* <Sidebar mainElemsClass="" /> */}
            </Flex>
          ) : (
            <Flex justify="center" align="center" flexDir="column" width="100%">
              <Text textAlign="center" mb="20px" whiteSpace="pre-wrap">
                ไม่พบข้อมูลที่คุณต้องการ
              </Text>
              <Image src="crying-face.png" w="50px" h="50px" />
            </Flex>
          )}
        </StackContainer>
      </Box>
    </>
  );
};
