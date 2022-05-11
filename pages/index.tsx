import React, {useEffect} from "react";
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
import Link from "next/link";
import { BsFillCartFill } from "react-icons/bs";
import { FaMoneyBill } from "react-icons/fa";
import { BsExclamationTriangleFill } from "react-icons/bs";
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import ImageSlider from "../cart/components/CartDrawer/ImageSlider";

const slideData = ["02.jpg", "03.jpg", "05.jpg"];

// HERO HEADER COMPONENT

//Debería implementar props orientadas a la propagación de animaciones en children

const heroHeaderVariants1 = {
  hidden: { opacity: 0, y: 100 },
  visible1: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" }}
}

const heroHeaderVariants2 = {
  hidden: { opacity: 0, y: 70 },
  visible2: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.45, ease: "easeOut" }},
}

const heroHeaderVariants3 = {
  hidden: { opacity: 0, y: 70 },
  visible3: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.6, ease: "easeOut" }}
}

const HeroHeader: React.FC = () => {
  const {ref, inView} = useInView({triggerOnce: true, delay: 200});
  const controls = useAnimation();

  useEffect(() => {
    if (inView){
      controls.start("visible1");
      controls.start("visible2");
      controls.start("visible3");
    }
  }, [inView])

  return (
    <Flex
    // height={"100%"}
    // maxHeight={"200px"}
    height={"350px"}
    margin={0}
    style={{
      backgroundImage: `url(/assets/banner/homebanner.jpg)`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "right",
    }}
    width="100%"
  >
    <Box>
      <Heading
        as={motion.h1}
        animate={controls}
        initial="hidden"
        variants={heroHeaderVariants1}

        color="white"
        fontFamily={"header"}
        left={{ base: "10%", sm: "12%", md: "15%" }}
        position={"relative"}
        size="3xl"
        top={{ base: "10%", md: "17%" }}
        maxWidth={{ base: "300px", sm: "420px", md: "800px" }}
        textShadow={{ base: "1px 1px 2px rgba(1,1,1,0.8)" }}

      >
        Fucking Grikas
      </Heading>
      <Heading
        as={motion.h3}
        animate={controls}
        initial="hidden"
        variants={heroHeaderVariants2}

        color="white"
        fontWeight={500}
        left={{ base: "10%", sm: "12%", md: "15%" }}
        lineHeight={10}
        position={"relative"}
        textShadow={{ base: "1px 1px 2px rgba(1,1,1,0.6)" }}
        top={{ base: "20%", md: "27%" }}
      >
        Conseguí tu primera
        <br />
        <Text
          as={motion.p}
          animate={controls}
          initial="hidden"
          variants={heroHeaderVariants3}

          ref={ref}
          color={"rgba(255,114,114,1)"}
          display="inline-block"
          textShadow="2px 2px 1px white"
        >
          Motomel Blitz 0km.
        </Text>
      </Heading>
    </Box>
  </Flex>
  )
}

// SLIDER COMPONENT
const gridVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: {duration: 1, ease: "easeInOut"}}
}

const SliderGrid: React.FC = () => {
  const {ref, inView} = useInView({triggerOnce: true, delay: 200});
  const controls = useAnimation();

  useEffect(() => {
    if (inView){
      controls.start("visible");
    }
  }, [inView]);

  return (
    <Center backgroundColor={"bg"} margin={0}>
      <Grid
        as={motion.div}
        animate={controls}
        initial="hidden"
        variants={gridVariants}

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
          alignItems={"center"}º
          colEnd={{ base: 3, md: 3 }}
          colStart={{ base: 2, md: 2 }}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          marginTop={"15px"}
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
            ref={ref}
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
            <Link  href="/categories/todos">
              <a>Ver productos</a>
            </Link>
          </Button>
        </GridItem>
      </Grid>
  </Center>
  )
}

//FOOTER SECTION COMPONENT
//Modularizar en componente individual cada item de la sección
const footerItemVariants1 = {
  hidden: { opacity: 0, y: 50},
  visible1: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" }}
}

const footerItemVariants2 = {
  hidden: { opacity: 0, y: 50},
  visible2: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.4, ease: "easeOut" }}
}

const footerItemVariants3 = {
  hidden: { opacity: 0, y: 50},
  visible3: { opacity: 1, y: 0, transition: { duration: 0.6,  delay: 0.8, ease: "easeOut" }}
}



const FooterSection: React.FC = () => {
  const {ref, inView} = useInView({triggerOnce: true, delay: 300});
  const controls = useAnimation();

  useEffect(() => {
    if (inView){
      controls.start("visible1");
      controls.start("visible2");
      controls.start("visible3");
    }
  }, [inView]);

  return (
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
      as={motion.div}
      animate={controls}
      initial="hidden"
      variants={footerItemVariants1}

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
        <Text ref={ref} fontSize={"sm"} fontWeight={500}>
          Ordenen todo viejo
        </Text>
      </Box>
    </Center>
    <Center
      as={motion.div}
      animate={controls}
      initial="hidden"
      variants={footerItemVariants2}

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
      as={motion.div}
      animate={controls}
      initial="hidden"
      variants={footerItemVariants3}
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
  )
}

const index_copy: React.FC = () => {
  return (
    <>
      <Box bg={"body"} height="1px" width="100%" />
      <HeroHeader />
      <SliderGrid />
      <FooterSection />
      <Box bg={"body"} height={"2px"} width={"100%"} />
    </>
  );
};

export default index_copy;
