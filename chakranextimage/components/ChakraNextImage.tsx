import * as React from "react";
import {Box} from "@chakra-ui/react";
// import type {BoxProps} from "@chakra-ui/react";
import Image from "next/image";

const ChakraNextImage: any = ({src, ...props}) => {
  return (
    <Box position="relative" {...props}>
      <Image layout="fill" objectFit="cover" quality="100" src={src} />
    </Box>
  );
};

export default ChakraNextImage;
