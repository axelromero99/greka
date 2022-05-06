import React from "react";
import {
  Box,
  Button,
  Heading,
  Flex,
  Grid,
  Image,
  Center,
  GridItem,
  Text,
  useColorModeValue,
  SlideFade,
} from "@chakra-ui/react";
import { BsFillCartFill } from "react-icons/bs";
import { FaMoneyBill } from "react-icons/fa";
import { BsExclamationTriangleFill } from "react-icons/bs";

import ImageSlider from "../cart/components/CartDrawer/ImageSlider";

const slideData = ["02.jpg", "03.jpg", "05.jpg"];

const index_copy: React.FC = () => {
  return (
    <>
      <Box bg={"body"} height="1px" width="100%" />
      <Flex
        // height={"100%"}
        // maxHeight={"200px"}
        height={"350px"}
        margin={0}
        style={{
          backgroundImage:
            "url(https://www.bergerpaints.com/colour-magazine/Upload/Posting/Image/colours-fashion-banner-feb15.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "right",
        }}
        width="100%"
      >
        <Box>
          <Heading
            as="h1"
            color="white"
            fontFamily={"header"}
            left={{ base: "10%", sm: "12%", md: "15%" }}
            position={"relative"}
            size="3xl"
            top={{ base: "10%", md: "17%" }}
            maxWidth={{ base: "300px", sm: "420px", md: "800px" }}
            textShadow={{ base: "1px 1px 2px rgba(1,1,1,0.8)" }}
          >
            Esto es una tienda <br />
            de articulos sexuales.
          </Heading>
          <Heading
            as="h3"
            color="white"
            fontWeight={500}
            left={{ base: "10%", sm: "12%", md: "15%" }}
            lineHeight={10}
            position={"relative"}
            textShadow={{ base: "1px 1px 2px rgba(1,1,1,0.6)" }}
            top={{ base: "20%", md: "27%" }}
          >
            Esto es un subtítulo.
            <br />
            <Text
              color={"rgba(255,114,114,1)"}
              display="inline-block"
              textShadow="2px 2px 1px white"
            >
              muy cringe.
            </Text>
          </Heading>
        </Box>
      </Flex>
      <Center backgroundColor={"bg"} margin={0}>
        <Grid
          overflow="hidden"
          padding={5}
          templateColumns={{
            base: "20px 85% 20px",
            sm: "20px 430px 20px",
            md: "20px 1fr 20px 1fr",
          }}
          templateRows={{
            base: "400px 350px",
            sm: "500px 300px",
            md: "30px 110px 110px 110px 110px 30px",
          }}
          maxWidth="900px"
        >
          <GridItem
            alignItems={"center"}
            colEnd={{ base: 3, md: 3 }}
            colStart={{ base: 2, md: 2 }}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            marginTop={"45px"}
            rowEnd={{ base: 2, md: 7 }}
            rowStart={{ base: 1, md: 1 }}
          >
            <ImageSlider slides={slideData} />
          </GridItem>
          <GridItem
            boxShadow={"2px 2px 8px rgba(1,1,1,0.3)"}
            colEnd={{ base: 4, md: 5 }}
            colStart={{ base: 1, md: 1 }}
            rowEnd={{ base: 3, md: 6 }}
            rowStart={{ base: 1, md: 2 }}
            w={"100%"}
          />
          <GridItem
            backgroundColor={"rgba(255,111,111,0.7)"}
            colEnd={4}
            colStart={1}
            rowEnd={{ base: 2, md: 6 }}
            rowStart={{ base: 1, md: 2 }}
            w={"100%"}
          />
          <GridItem
            alignItems={"start"}
            backgroundColor="white"
            colEnd={{ base: 3, md: 5 }}
            colStart={{ base: 2, md: 4 }}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"space-between"}
            padding={{ base: 3, md: 10 }}
            rowEnd={{ base: 3, md: 6 }}
            rowStart={{ base: 2, md: 2 }}
            w={"100%"}
          >
            <Heading
              as={"h3"}
              color={"#393939"}
              fontFamily={"header"}
              fontSize={"3xl"}
            >
              Corrientes Cripy resinoso 1700 los 10g 3700 los 25g
            </Heading>
            <Heading
              as={"h5"}
              color={"#555"}
              fontFamily={"navbar"}
              lineHeight={8}
              size={"sm"}
            >
              El argentino que compró el dominio de Google por menos de US$3
            </Heading>
            <Button
              _active={{
                bg: useColorModeValue("pink.50", "gray.900"),
                color: "rgba(255,111,111,0.75)",
              }}
              _hover={{
                bg:
                  "rgba(255,111,111,0.75)" ||
                  useColorModeValue("gray.300", "FF6F6F"),
                color: "white",
              }}
              bg={"rgba(255,111,111,0.95)"}
              color={"white"}
            >
              Sexo premarital
            </Button>
          </GridItem>
        </Grid>
      </Center>
      <Flex
        alignItems={"center"}
        backgroundColor="rgb(109 192 198)"
        color={"white"}
        justifyContent={"space-evenly"}
        minHeight={200}
        flexDirection={{ base: "row" }}
        flexWrap={"wrap"}
      >
        <Center
          alignItems={"center"}
          flexDirection={{ base: "column", md: "row" }}
          margin={5}
        >
          <Box border={"1px solid white"} borderRadius={"50%"} padding={3}>
            <BsFillCartFill size={40} />
          </Box>
          <Box
            marginTop={2}
            marginLeft={{ base: 0, md: 3 }}
            display={"flex"}
            flexDirection={"column"}
            alignItems={{ base: "center", md: "start" }}
          >
            <Text fontWeight={800}>Viene el PM</Text>
            <Text fontSize={"sm"} fontWeight={500}>
              Ordenen todo viejo
            </Text>
          </Box>
        </Center>
        <Center
          alignItems={"center"}
          flexDirection={{ base: "column", md: "row" }}
          margin={5}
        >
          <Box border={"1px solid white"} borderRadius={"50%"} padding={3}>
            <FaMoneyBill size={40} />
          </Box>
          <Box
            marginTop={2}
            marginLeft={{ base: 0, md: 3 }}
            display={"flex"}
            flexDirection={"column"}
            alignItems={{ base: "center", md: "start" }}
          >
            <Text fontWeight={800}>Part Time</Text>
            <Text fontSize={"sm"} fontWeight={500}>
              Desde casita
            </Text>
          </Box>
        </Center>
        <Center
          alignItems={"center"}
          flexDirection={{ base: "column", md: "row" }}
          marginY={5}
          marginX={10}
        >
          <Box border="1px solid white" borderRadius={"50%"} padding={3}>
            <BsExclamationTriangleFill size={40} />
          </Box>
          <Box
            marginTop={2}
            marginLeft={{ base: 0, md: 3 }}
            display={"flex"}
            flexDirection={"column"}
            alignItems={{ base: "center", md: "start" }}
          >
            <Text fontWeight={800}>Cuidado</Text>
            <Text fontSize={"sm"} fontWeight={500}>
              Flujo Tubular
            </Text>
          </Box>
        </Center>
      </Flex>
      <Box bg={"body"} height={"2px"} width={"100%"} />
    </>
  );
};

export default index_copy;
