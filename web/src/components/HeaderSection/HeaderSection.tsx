import {
  Box,
  Grid,
  Input,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { ColorModeSwitcher } from "../../ColorModeSwitcher";
import { CustomHeading } from "../../Elements/CustomHeading";
import { Background } from "./Background";

interface HeaderSectionProps {
  setSearchData: React.Dispatch<React.SetStateAction<string>>;
  searchData: string;
}

const HeaderSection: React.FC<HeaderSectionProps> = ({
  setSearchData,
  searchData,
}) => {
  const bg = useColorModeValue("white", "black");

  return (
    <Grid placeItems="center" mb="5rem">
      <Box width="100%" height="100%" gridArea="1/-1">
        <Background />
      </Box>
      <Stack
        spacing="2rem"
        textAlign="center"
        width="min(800px, 100%)"
        gridArea="1/-1"
        pr="1rem"
        pl="1rem"
        pt="5rem"
      >
        <Box margin="0 auto">
          <ColorModeSwitcher />
        </Box>
        <Box>
          <CustomHeading>เที่ยวไหนดี</CustomHeading>
          <Text
            mt="0.25rem"
            fontSize={["14px", null, null, "18px"]}
            opacity="0.8"
            fontWeight="bold"
            color="mainBlue"
          >
            ให้คุณค้นพบทริปสุดพิเศษตามที่ใช่สไตล์คุณ
          </Text>
        </Box>
        <Box maxHeight="30px" overflow="visible">
          <Input
            filter="drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.15));"
            placeholder="หาที่เที่ยวแล้วไปกัน!"
            pt="1.3rem !important"
            pb="1.3rem !important"
            onChange={(e) => {
              setSearchData(e.target.value);
            }}
            //Ensure single source of truth
            value={searchData}
            _placeholder={{
              color: "var(--chakra-colors-mainBlue)",
              opacity: 0.7,
            }}
            top="-5px"
            width="100%"
            color="mainBlue"
            background={bg}
            outline="none"
          />
        </Box>
      </Stack>
    </Grid>
  );
};

export default HeaderSection;
