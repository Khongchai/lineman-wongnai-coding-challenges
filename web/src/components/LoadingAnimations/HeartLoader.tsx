import { Box, useColorModeValue } from "@chakra-ui/react";
import React from "react";

export const HeartLoader: React.FC = ({}) => {
  return (
    <Box className="lds-heart" opacity="0.7">
      <div></div>
    </Box>
  );
};
