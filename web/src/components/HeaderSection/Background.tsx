import { Box, Flex, useColorMode, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import Bush from "../../BannerSVGs/Bush";
import CarAndBicycle from "../../BannerSVGs/CarAndBicycle";
import Clouds from "../../BannerSVGs/Clouds";
import GuyAndGirl from "../../BannerSVGs/GuyAndGirl";
import MoonAndStars from "../../BannerSVGs/MoonAndStars";
import { Mountain } from "../../BannerSVGs/Mountain";
import SmokeThing from "../../BannerSVGs/SmokeThing";

const Background: React.FC = ({}) => {
  const bg = useColorModeValue(
    "linear-gradient(180deg, rgba(44, 156, 219, 0.58) -5.1%, rgba(202, 240, 255, 0) 161.21%);",
    "linear-gradient(180deg, #0a0a0a -5.1%, rgba(0, 0, 0, 0.013) 161.19%, rgba(27, 27, 27, 0) 161.21%);"
  );
  const { colorMode } = useColorMode();

  const darkensInNightMode = {
    filter: colorMode === "dark" ? "brightness(0.7)" : "brightness(1)",
  };
  const onlyVisibleDuringDay = {
    opacity: colorMode === "light" ? "1" : "0",
    top: colorMode === "light" ? ["-20px", null, null, "40px"] : "-100px",
  };
  const onlyVisibleDuringNight = {
    opacity: colorMode === "dark" ? "1" : "0",
    top: colorMode === "dark" ? ["-20px", null, null, "40px"] : "-100px",
  };
  const onGround = {
    bottom: "-15px",
  };

  return (
    <Box
      pointerEvents="none"
      background={bg}
      width="100%"
      height="100%"
      transition="background var(--chakra-transition-duration-normal)"
      position="relative"
      id="scene-composer"
      overflow="hidden"
      opacity="0.9"
      css={{ "> *": { transition: ".3s" } }}
    >
      <Flex
        width="100%"
        justify="center"
        position="absolute"
        {...onlyVisibleDuringDay}
      >
        <Clouds />
      </Flex>
      <Flex
        {...onlyVisibleDuringNight}
        justify="center"
        width="100%"
        pos="absolute"
      >
        <MoonAndStars />
      </Flex>
      <Flex
        {...onlyVisibleDuringDay}
        jusitfy="center"
        width="100%"
        pos="absolute"
      >
        <SmokeThing />
      </Flex>
      <Box
        display={["none", null, "block"]}
        position="absolute"
        bottom="0"
        right="0"
        {...darkensInNightMode}
      >
        <Bush />
      </Box>
      <Box
        position="absolute"
        right={["-100px", null, "-10px", null, "100px"]}
        display={["none", null, null, "block"]}
        {...onGround}
      >
        <GuyAndGirl />
      </Box>

      <Box display={["none", null, null, null, "block"]}>
        <Box pos="absolute" {...onGround} left="-100px" {...darkensInNightMode}>
          <Mountain />
        </Box>
        <Box left="100px" position="absolute" {...onGround}>
          <CarAndBicycle />
        </Box>
      </Box>
    </Box>
  );
};

export default React.memo(Background) as React.FC;
