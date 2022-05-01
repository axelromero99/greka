import {extendTheme, theme} from "@chakra-ui/react";

export default extendTheme({
  colors: {
    primary: theme.colors[process.env.NEXT_PUBLIC_COLOR || "teal"],
    background_primary: "#FCD7D7",
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
