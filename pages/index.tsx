import React from "react";
import {Box, Button, Heading, Flex, Grid, Image, Center, GridItem, Text} from "@chakra-ui/react";

import ImageSlider from "../cart/components/CartDrawer/ImageSlider";

const slideData = ["02.jpg", "03.jpg", "05.jpg"];

const index_copy: React.FC = () => {
  return (
    <>
      <Flex
        // height={"100%"}
        // maxHeight={"200px"}
        height={"350px"}
        style={{
          backgroundImage:
            "url(https://www.bergerpaints.com/colour-magazine/Upload/Posting/Image/colours-fashion-banner-feb15.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        width="100%"
      >
        <Heading as="h1" color="black" left={"40%"} position={"relative"} size="4xl" top={"17%"} />
      </Flex>
      <Center backgroundColor="white">
        <Grid
          maxWidth="70%"
          minWidth="900px"
          overflow="hidden"
          padding={5}
          templateColumns="20px 1fr 20px 1fr"
          templateRows="30px 125px 125px 125px 125px 30px"
        >
          <GridItem
            alignItems={"center"}
            colEnd={3}
            colStart={2}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            marginTop="45px"
            rowEnd={7}
            rowStart={1}
          >
            <ImageSlider slides={slideData} />
          </GridItem>
          <GridItem
            boxShadow={"2px 2px 8px rgba(1,1,1,0.4)"}
            colEnd={5}
            colStart={1}
            rowEnd={6}
            rowStart={2}
            w="100%"
          />
          <GridItem
            backgroundColor={"#F4A5A5"}
            colEnd={4}
            colStart={1}
            rowEnd={6}
            rowStart={2}
            w="100%"
          />
          <GridItem
            alignItems={"center"}
            backgroundColor="white"
            colEnd={5}
            colStart={4}
            display="flex"
            flexDirection={"column"}
            fontFamily={"navbar"}
            justifyContent={"space-between"}
            padding={10}
            rowEnd={6}
            rowStart={2}
            w="100%"
          >
            <Heading as="h3" color="#333">
              Choose your bitch
            </Heading>
            <Heading as="h5" color="#555" lineHeight={9} size="md">
              No les parece una mierd@ el final de SNK? ¿Qué mierda fue eso? ¿Tan amigos se
              volvieron de Gabi y Annie para sacrificarse por ellos? Y el prota terminó siendo una
              paloma... Joder
            </Heading>
            <Button>Quiero ser donador</Button>
          </GridItem>
        </Grid>
      </Center>
    </>
  );
};

export default index_copy;
