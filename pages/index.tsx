import React from "react";
import {Box, Button, Heading, Flex} from "@chakra-ui/react";

import ImageSlider from "../cart/components/CartDrawer/ImageSlider";

const slideData = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"];

const index_copy: React.FC = () => {
  return (
    <>
      <Flex
        bgGradient={"linear-gradient(90deg, rgba(255,180,209,1) 0%, rgba(249,108,137,1) 100%)"}
        height={600}
      >
        <Flex
          // alignItems={"start"}
          alignItems={"center"}
          backgroundColor={"transparent"}
          flexDirection={"row"}
          justifyContent={"center"}
          margin={0}
          paddingX={"7"}
        >
          <Box display={"flex"} flexDirection={"column"}>
            <Heading fontFamily={"body"} marginBottom={50} maxWidth={"760px"}>
              My name is Grikas and I'm a front-end developer.
            </Heading>
            <Heading
              as="h3"
              color="#333"
              fontFamily={"body"}
              lineHeight={7}
              maxWidth={"500px"}
              size="md"
            >
              Se necesitan donadores de sangre de cualquier grupo y factor para Isabel Chávez que se
              encuentra internada en el Hospital Vidal. Los que puedan donar, acercarse al Banco de
              Sangre de 7 a 22hs mencionar que es para ella por favor.
            </Heading>
          </Box>
        </Flex>
        <ImageSlider slides={slideData} />
      </Flex>
    </>
  );
};

export default index_copy;
