import * as React from "react";
import {Box} from "@chakra-ui/react";
import type {BoxProps} from "@chakra-ui/react";
import Image from "next/image";

const ChakraNextImage: React.FC = ({
  src,
  ...props
}: {src: string; alt: string} & Omit<BoxProps, "as">) => {
  return (
    <Box position="relative" {...props}>
      <Image layout="fill" objectFit="cover" quality="100" src={src} />
    </Box>
  );
};

export default ChakraNextImage;
