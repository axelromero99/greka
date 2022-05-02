import {extendTheme, theme} from "@chakra-ui/react";

export default extendTheme({
  fonts: {
    body: "Rosario, sans-serif",
    footer: "Ruda, sans-serif",
    navbar: "Rosario, sans-serif",
  },
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
    background_content: "linear-gradient(90deg, rgba(255,180,209,1) 0%, rgba(249,108,137,1) 100%)",
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
