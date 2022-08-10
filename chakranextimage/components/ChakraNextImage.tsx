import * as React from "react";
import {Box} from "@chakra-ui/react";
import Image from "next/image";

const ChakraNextImage: any = ({src, index, ...props}) => {
  return (
    <Box height="100%" position="relative" width="100%" {...props}>
      <Image layout="fill" objectFit="cover" priority={index < 3} quality="100" src={src} />
    </Box>
  );
};

export default ChakraNextImage;
