import {extendTheme, theme} from "@chakra-ui/react";

export default extendTheme({
  styles: {
    global: {
      body: {
        bg: "#F4A5A5",
      },
    },
  },
  colors: {
    primary: theme.colors["orange"],
    // background_primary: "#FCD7D7",
    background_primary:
      "linear-gradient(to right top, #fcd7d7, #ffc1cf, #ffabd4, #ff96e4, #f888fd)",
    background_secondary: "#F4A5A5",
  },
  components: {
    Radio: {
      parts: ["label"],
      baseStyle: {
        label: {
          width: "100%",
        },
      },
    },
  },
});
