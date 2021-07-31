import { Flex, Stack } from "@chakra-ui/react";
import React from "react";

export const StackContainer: React.FC<{ spacing: string }> = ({
  children,
  spacing,
}) => {
  return (
    <Flex
      justify="center"
      pr="1rem"
      pl="1rem"
      pb="5rem"
      maxWidth="100vw"
      minHeight="100vh"
      position="relative"
    >
      <Stack spacing={spacing} width="min(100%, 800px)">
        {children}
      </Stack>
    </Flex>
  );
};
