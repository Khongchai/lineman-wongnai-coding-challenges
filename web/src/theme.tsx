import { extendTheme } from "@chakra-ui/react";

const newTheme = extendTheme({
  fonts: {
    body: "Noto Sans Thai, Noto Sans",
    heading: "Noto Sans Thai, Noto Sans",
  },
  colors: {
    mainBlue: "#2C9CDB",
    mainTextGrey: "#6b6b6b",
    brand: {
      100: "#f7fafc",
      // ...
      900: "#1a202c",
    },
  },
});

export default newTheme;
