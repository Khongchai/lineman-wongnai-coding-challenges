import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import { Airplane } from "../SVGs/Airplane";

export const CustomHeading: React.FC = ({ children }) => {
  return (
    <Box position="relative" width="fit-content" m="0 auto">
      <Heading
        color="mainBlue"
        fontSize={["3rem", null, null, "4rem"]}
        fontWeight="bold"
        position="relative"
        zIndex="100"
      >
        {children}
      </Heading>
      <Box
        top="0"
        right="-100px"
        display={["none", null, null, "block"]}
        position="absolute"
      >
        <Airplane />
      </Box>
    </Box>
  );
};
