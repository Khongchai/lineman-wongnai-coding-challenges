import { Box, Link, Text } from "@chakra-ui/react";
import React from "react";
import { useMemo } from "react";

export const Description: React.FC<{ description: string; link: string }> = ({
  description,
  link,
}) => {
  const cutDescription = useMemo(
    () => cutDescAndConcatLink(description, link),
    [description]
  );

  /**
   * Text comes separated by an inline char, separate into two sections
   * and limit the length of the second one.
   */
  function cutDescAndConcatLink(desc: string, link: string) {
    const textCharLimit = 150;

    return (
      <>
        <Text mt="0.65rem" whiteSpace="pre-wrap" color="mainTextGrey" mb="1rem">
          {desc.substring(0, textCharLimit)}
          {desc.length > textCharLimit ? " ..." : null}
          <Link href={link} fontWeight="bold" target="_blank" color="mainBlue">
            {" "}
            อ่านต่อ
          </Link>
        </Text>
      </>
    );
  }
  return <Box>{cutDescription}</Box>;
};
