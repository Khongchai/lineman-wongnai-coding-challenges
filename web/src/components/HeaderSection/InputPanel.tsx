import { Flex, Input, useColorModeValue, Image, Box } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { RecommendedList } from "../../types/RecommendedList";
import { RecommendedPanel } from "./RecommendedPanel";

interface InputPanelProps {
  setSearchData: React.Dispatch<React.SetStateAction<string>>;
  searchData: string;
}

export const InputPanel: React.FC<InputPanelProps> = ({
  searchData,
  setSearchData,
}) => {
  const bg = useColorModeValue("white", "black");
  const input = useRef(null);
  const magnifyingGlass = useRef(null);

  return (
    <Flex top="-5px" width="100%">
      <Box width="100%" pos="relative">
        <Input
          filter="drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.15));"
          placeholder="หาที่เที่ยวแล้วไปกัน!"
          borderRadius="10px 0 0 10px"
          id="search-destinations"
          aria-label="search-destinations"
          pt="1.3rem !important"
          pb="1.3rem !important"
          color="mainBlue"
          bg="white"
          background={bg}
          value={searchData}
          ref={input}
          onChange={(e) => {
            setSearchData(e.target.value);
          }}
          //Ensures single source of truth
          _placeholder={{
            color: "var(--chakra-colors-mainBlue)",
            opacity: 0.7,
          }}
        />
      </Box>
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
        ref={magnifyingGlass}
        transition=".3s"
        borderRadius="0 10px 10px 0"
        zIndex="100"
      >
        <Image top="0" right="0" src="magnifying-glass.svg" width="20px" />
      </Flex>
    </Flex>
  );
};
