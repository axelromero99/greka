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
import {BsFillCartFill} from "react-icons/bs";
import {FaMoneyBill} from "react-icons/fa";
import {BsExclamationTriangleFill} from "react-icons/bs";

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
        }}
        width="100%"
      >
        <Box>
          <Heading
            as="h1"
            color="white"
            fontFamily={"header"}
            left={"15%"}
            position={"relative"}
            size="3xl"
            top={"22%"}
          >
            <SlideFade in={true}>
              Mochila nueva de <br />
              PedidosYa.
            </SlideFade>
          </Heading>
          <Heading
            as="h3"
            color="white"
            fontWeight={500}
            left={"15%"}
            lineHeight={10}
            position={"relative"}
            top={"32%"}
          >
            Siempre has querido obtenerla.
            <br />
            Nosotros{" "}
            <Text
              color={"rgba(255,114,114,1)"}
              display="inline-block"
              textShadow="2px 2px 1px white"
            >
              la tenemos larga (la pija).
            </Text>
          </Heading>
        </Box>
      </Flex>
      <Center backgroundColor={"bg"} margin={0}>
        <Grid
          overflow="hidden"
          padding={5}
          templateColumns="20px 1fr 20px 1fr"
          templateRows="30px 110px 110px 110px 110px 30px"
          width="900px"
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
            boxShadow={"2px 2px 8px rgba(1,1,1,0.3)"}
            colEnd={5}
            colStart={1}
            rowEnd={6}
            rowStart={2}
            w="100%"
          />
          <GridItem
            backgroundColor={"rgba(255,111,111,0.7)"}
            colEnd={4}
            colStart={1}
            rowEnd={6}
            rowStart={2}
            w="100%"
          />
          <GridItem
            alignItems={"start"}
            backgroundColor="white"
            colEnd={5}
            colStart={4}
            display="flex"
            flexDirection={"column"}
            justifyContent={"space-between"}
            padding={10}
            rowEnd={6}
            rowStart={2}
            w="100%"
          >
            <Heading as="h3" color="#393939" fontFamily={"header"} fontSize="3xl">
              Ibai reacciona a Willyrex
            </Heading>
            <Heading as="h5" color="#555" fontFamily={"navbar"} lineHeight={8} size="sm">
              HOLA SOY TERESA FIDALGO HOY CUMPLO 27 AÑOS DE MUERTA SI NO PASAS ESTO A 20 PERSONAS
              DORMIRE A TU LADO PARA SIEMPRE SI NO CREES ESTO BUSCALO EN GOOGLE TERESA FIDALGO MANDA
              ESTO A 20 PERSONAS UNA NIÑA LO IGNORO Y SU MAMA MURIO A LOS 20 DÍAS
            </Heading>
            <Button
              _active={{
                bg: useColorModeValue("pink.50", "gray.900"),
                color: "rgba(255,111,111,0.75)",
              }}
              _hover={{
                bg: "rgba(255,111,111,0.75)" || useColorModeValue("gray.300", "FF6F6F"),
                color: "white",
              }}
              bg={"rgba(255,111,111,0.95)"}
              color="white"
            >
              Ver Catálogo de penes
            </Button>
          </GridItem>
        </Grid>
      </Center>
      <Flex
        alignItems={"center"}
        backgroundColor="rgb(109 192 198)"
        color="white"
        justifyContent="space-evenly"
        minHeight={200}
      >
        <Center>
          <Box border="1px solid white" borderRadius={"50%"} padding={3}>
            <BsFillCartFill size={40} />
          </Box>
          <Box marginLeft={3}>
            <Text fontWeight={800}>Laburo</Text>
            <Text fontSize={"sm"} fontWeight={500}>
              Denme uno por favor
            </Text>
          </Box>
        </Center>
        <Center>
          <Box border="1px solid white" borderRadius={"50%"} padding={3}>
            <FaMoneyBill size={40} />
          </Box>
          <Box marginLeft={3}>
            <Text fontWeight={800}>Part Time</Text>
            <Text fontSize={"sm"} fontWeight={500}>
              Desde casita
            </Text>
          </Box>
        </Center>
        <Center>
          <Box border="1px solid white" borderRadius={"50%"} padding={3}>
            <BsExclamationTriangleFill size={40} />
          </Box>
          <Box marginLeft={3}>
            <Text fontWeight={800}>Cuidado</Text>
            <Text fontSize={"sm"} fontWeight={500}>
              Devs muy buenos trabajando
            </Text>
          </Box>
        </Center>
      </Flex>
      <Box bg={"body"} height="2px" width="100%" />
    </>
  );
};

export default index_copy;
