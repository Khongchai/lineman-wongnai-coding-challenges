import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

interface TagsProps {
  tags: string[];
  setSearchData: React.Dispatch<React.SetStateAction<string>>;
}

export const Tags: React.FC<TagsProps> = ({ tags, setSearchData }) => {
  return (
    <Flex color="mainTextGrey">
      <Text>หมวด: </Text>
      <Flex flexWrap="wrap" css={{ "> *": { marginLeft: "0.5rem" } }}>
        {tags.map((tag, i) => {
          return (
            <Box height="fit-content" key={tag}>
              {i == tags.length - 1 ? <Text display="inline">และ </Text> : null}
              <Text
                onClick={(e) =>
                  setSearchData((e.target as HTMLElement).innerHTML)
                }
                cursor="pointer"
                textDecor="underline"
                display="inline"
              >
                {tag}
              </Text>
            </Box>
          );
        })}
      </Flex>
    </Flex>
  );
};
