import {
  Box,
  Grid,
  Input,
  Stack,
  Text,
  Image,
  useColorModeValue,
  Flex,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import { ColorModeSwitcher } from "../../ColorModeSwitcher";
import { CustomHeading } from "../../Elements/CustomHeading";
import Background from "./Background";

interface HeaderSectionProps {
  setSearchData: React.Dispatch<React.SetStateAction<string>>;
  searchData: string;
}

const HeaderSection: React.FC<HeaderSectionProps> = ({
  setSearchData,
  searchData,
}) => {
  const bg = useColorModeValue("white", "black");
  const input = useRef(null);

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
            fontSize={["14px", null, null, "18px"]}
            opacity="0.8"
            fontWeight="bold"
            color="mainBlue"
          >
            ให้คุณค้นพบทริปสุดพิเศษตามที่ใช่สไตล์คุณ
          </Text>
        </Box>
        <Flex maxHeight="30px" marginTop="3rem !important" overflow="visible">
          <Flex top="-5px" width="100%">
            <Input
              filter="drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.15));"
              placeholder="หาที่เที่ยวแล้วไปกัน!"
              borderRadius="10px 0 0 10px"
              aria-label="search-destinations"
              pt="1.3rem !important"
              pb="1.3rem !important"
              bg="white"
              ref={input}
              onChange={(e) => {
                setSearchData(e.target.value);
              }}
              //Ensure single source of truth
              value={searchData}
              _placeholder={{
                color: "var(--chakra-colors-mainBlue)",
                opacity: 0.7,
              }}
              color="mainBlue"
              background={bg}
              outline="none"
            />
            <Flex
              align="center"
              pt="1.4rem !important"
              pb="1.3rem !important"
              filter="drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.15));"
              pl="10px"
              pr="10px"
              ml="1.7px"
              cursor="pointer"
              bg={bg}
              onClick={() => {
                (input.current as unknown as HTMLElement).focus();
              }}
              transition=".3s"
              borderRadius="0 10px 10px 0"
              zIndex="100"
            >
              <Image
                top="0"
                right="0"
                src="magnifying-glass.svg"
                width="20px"
              />
            </Flex>
          </Flex>
        </Flex>
      </Stack>
    </Grid>
  );
};

export default HeaderSection;
