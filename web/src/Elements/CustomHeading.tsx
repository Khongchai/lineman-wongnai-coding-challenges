import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import { Airplane } from "../BannerSVGs/Airplane";

export const CustomHeading: React.FC = ({ children }) => {
  return (
    <Box position="relative" width="fit-content" m="0 auto">
      <Heading
        color="mainBlue"
        fontSize={["3.25rem", null, null, "4.75rem"]}
        fontWeight="bold"
        position="relative"
        zIndex="100"
      >
        {children}
      </Heading>
      <Box
        top="-48px"
        right="-85px"
        display={["none", null, "block"]}
        position="absolute"
      >
        <Airplane />
      </Box>
    </Box>
  );
};
