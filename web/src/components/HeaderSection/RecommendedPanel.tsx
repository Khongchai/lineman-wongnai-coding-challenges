import { Box, Flex, List, ListItem } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { RecommendedList } from "../../types/RecommendedList";
import removeDuplicatesFromArray from "../../utils/removeDuplicatesFromArray";

interface RecommendedPanelProps {
  input: HTMLElement | null;
  magnifyingGlass: HTMLElement | null;
  recommendedList: RecommendedList;
  setSearchData: React.Dispatch<React.SetStateAction<string>>;
}

var setEventListenerAlready = false;
var setHeightAlready = false;
export const RecommendedPanel: React.FC<RecommendedPanelProps> = ({
  input,
  recommendedList,
  magnifyingGlass,
  setSearchData,
}) => {
  const container = useRef(null);
  const [list, setList] = useState<string[]>();
  const [showList, setShowList] = useState(false);
  useEffect(() => {
    if (input && container.current && !setHeightAlready) {
      const thisElem = container.current as unknown as HTMLElement;
      const thisElemHeight = thisElem.getBoundingClientRect().top;
      const inputHeight = input.getBoundingClientRect().bottom;
      const newHeight = inputHeight - thisElemHeight;
      const extraMarginPx = 5;

      thisElem.style.transform = `translateY(${newHeight + extraMarginPx}px)`;
      setHeightAlready = true;
    }
    setList(removeDuplicatesFromArray(recommendedList) as string[]);
  }, [recommendedList[0]]);

  useEffect(() => {
    if (
      magnifyingGlass &&
      input &&
      container.current &&
      !setEventListenerAlready
    ) {
      window.addEventListener("click", (e) => {
        if (
          e.target == magnifyingGlass ||
          e.target == input ||
          e.target == container.current
        ) {
          setShowList(true);
        } else {
          setShowList(false);
        }
      });
      setEventListenerAlready = true;
    }
  }, [magnifyingGlass, input, container.current]);

  return (
    <Box
      filter="drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.15))"
      height="200px"
      width="100%"
      padding="1.5rem"
      paddingTop="0 !important"
      ref={container}
      transition=".3s"
      pos="absolute"
      top="0"
      background="rgba(255, 255, 255, 0.9)"
      zIndex="200"
      pointerEvents={showList ? "auto" : "none"}
      opacity={showList && recommendedList[0] !== undefined ? 1 : 0}
    >
      <List flexDir="column">
        {list?.map((topic) => {
          return (
            <ListItem
              mt="15px"
              _hover={{ color: "mainBlue" }}
              cursor="pointer"
              transition=".3s"
              onClick={() => {
                setSearchData(topic);
              }}
            >
              {topic}
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};
