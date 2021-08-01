import { Box, Flex, Grid, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { ColorModeSwitcher } from "../../ColorModeSwitcher";
import { CustomHeading } from "../../Elements/CustomHeading";
import { RecommendedList } from "../../types/RecommendedList";
import Background from "./Background";
import { InputPanel } from "./InputPanel";

interface HeaderSectionProps {
  setSearchData: React.Dispatch<React.SetStateAction<string>>;
  searchData: string;
}

const HeaderSection: React.FC<HeaderSectionProps> = ({
  setSearchData,
  searchData,
}) => {
  return (
    <Grid placeItems="center" mb="5rem">
      <Box width="100%" height="100%" gridArea="1/-1">
        <Background />
      </Box>
      <Stack
        spacing="2.25rem"
        textAlign="center"
        width="min(511px, 100%)"
        gridArea="1/-1"
        pr="1rem"
        pl="1rem"
        pt="4.25rem"
      >
        <Box margin="0 auto">
          <ColorModeSwitcher />
        </Box>
        <Box>
          <CustomHeading>เที่ยวไหนดี</CustomHeading>
          <Text
            mt="0.25rem"
            fontSize={["15px", null, null, "22.5px"]}
            opacity="0.8"
            fontWeight="bold"
            color="mainBlue"
          >
            ให้คุณค้นพบทริปสุดพิเศษตามที่ใช่สไตล์คุณ
          </Text>
        </Box>
        <Flex maxHeight="30px" marginTop="3rem !important" overflow="visible">
          <InputPanel setSearchData={setSearchData} searchData={searchData} />
        </Flex>
      </Stack>
    </Grid>
  );
};

export default HeaderSection;
