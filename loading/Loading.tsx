import React from "react";
import { Image } from "@chakra-ui/react";

const Loading = () => {
  return (
    <Image
      position={"absolute"}
      top={"43vh"}
      left={"45%"}
      src={"/assets/loading.svg"}
    />
  );
};

export default Loading;
