import { Box, Link, List, ListItem, Stack, Image } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

type SidebarProps = {
  backgroundColor?: string;
  /**
   * Defaults to 1000
   */
  zIndex?: number;
} & (
  | {
      mainElemsTag: string;
      mainElemsClass?: never;
    }
  | {
      mainElemsTag?: never;
      mainElemsClass: string;
    }
);

const Sidebar: React.FC<SidebarProps> = ({
  backgroundColor,
  zIndex,
  mainElemsClass,
  mainElemsTag,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [mainTopics, setMainTopics] = useState<any[]>([]);

  useEffect(() => {
    const mainElems = mainElemsClass
      ? document.getElementsByClassName(mainElemsClass)
      : document.getElementsByTagName(mainElemsTag ? mainElemsTag : "");
    if (mainElems.length > 0) {
      let tmp = [];
      for (let i = 0, length = mainElems.length; i < length; i++) {
        tmp.push(mainElems[i].innerHTML);
        mainElems[i].id = mainElems[i].innerHTML;
      }
      setMainTopics(tmp);
      monitorScroll(mainElems);
    }
  }, []);

  return (
    <Box position="sticky" top="0" h="fit-content" ml="2rem">
      Hello
    </Box>
  );
};

function monitorScroll(mainElems: HTMLCollectionOf<Element>) {
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.6,
  };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.innerHTML + "-sidebar-item";
        const sidenavItem = document.getElementById(id);
        sidenavItem?.classList.add("sidebar-inview");
      } else {
        const id = entry.target.innerHTML + "-sidebar-item";
        const sidenavItem = document.getElementById(id);
        sidenavItem?.classList.remove("sidebar-inview");
      }
    });
  }, observerOptions);

  for (let i = 0, length = mainElems.length; i < length; i++) {
    if (mainElems[i]) {
      observer.observe(mainElems[i]);
    }
  }
}

export default Sidebar;
