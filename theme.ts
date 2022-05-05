import {extendTheme, theme} from "@chakra-ui/react";

export default extendTheme({
  fonts: {
    body: "Montserrat, sans-serif",
    footer: "Montserrat, sans-serif",
    navbar: "Montserrat, sans-serif",
    header: "Georgia",
  },
  styles: {
    global: {
      body: {
        // bgGradient: "linear-gradient(90deg, rgba(255,180,209,1) 0%, rgba(249,108,137,1) 100%)",
        bg: "linear-gradient(90deg, rgba(255,180,209,1) 0%, rgba(249,108,137,1) 100%)",
      },
    },
  },
  colors: {
    primary: "#F4A5A5",
    bg: "#eee",
    bgSecondary: "#75CED4",
    tertiary: "#0ba9b3",
    // background_contact: "linear-gradient(90deg, rgba(59,205,214,1) 0%, rgba(119,208,214,1) 100%)",
    // background_contact2: "linear-gradient(270deg, rgba(59,205,214,1) 0%, rgba(119,208,214,1) 100%)",
    // primary: theme.colors["orange"],
    // background_primary: "#FCD7D7",
    // background_primary:
    //   "linear-gradient(to right top, #fcd7d7, #ffc1cf, #ffabd4, #ff96e4, #f888fd)",
    // background_content: "linear-gradient(90deg, rgba(255,180,209,1) 0%, rgba(249,108,137,1) 100%)",
    // background_secondary: "#F4A5A5",
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
