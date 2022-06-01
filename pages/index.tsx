import React, {useEffect} from "react";
import {
  Box,
  Button,
  Heading,
  Flex,
  Grid,
  Center,
  GridItem,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Link from "next/link";
import {BsFillCartFill} from "react-icons/bs";
import {FaMoneyBill} from "react-icons/fa";
import {BsExclamationTriangleFill} from "react-icons/bs";
import {useInView} from "react-intersection-observer";
import {motion, useAnimation} from "framer-motion";

import ImageSlider from "../cart/components/CartDrawer/ImageSlider";

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

// HERO HEADER COMPONENT
//Debería implementar props orientadas a la propagación de animaciones en children

const heroHeaderVariants1 = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible1: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const heroHeaderVariants2 = {
  hidden: {
    opacity: 0,
    y: 70,
  },
  visible2: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.45,
      ease: "easeOut",
    },
  },
};

const heroHeaderVariants3 = {
  hidden: {
    opacity: 0,
    y: 70,
  },
  visible3: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.6,
      ease: "easeOut",
    },
  },
};

const HeroHeader: React.FC = () => {
  const {ref, inView} = useInView({triggerOnce: true, delay: 200});
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible1");
      controls.start("visible2");
      controls.start("visible3");
    }
  }, [inView]);

  return (
    <Flex
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
          animate={controls}
          as={motion.h1}
          color="white"
          fontFamily={"header"}
          initial="hidden"
          left={{
            base: "10%",
            sm: "12%",
            md: "15%",
          }}
          maxWidth={{
            base: "300px",
            sm: "420px",
            md: "800px",
          }}
          position={"relative"}
          size="3xl"
          textShadow={{
            base: "1px 1px 2px rgba(1,1,1,0.8)",
          }}
          top={{
            base: "10%",
            md: "17%",
          }}
          variants={heroHeaderVariants1}
        >
          Fucking Grikas
        </Heading>
        <Heading
          animate={controls}
          as={motion.h3}
          color="white"
          fontWeight={500}
          initial="hidden"
          left={{
            base: "10%",
            sm: "12%",
            md: "15%",
          }}
          lineHeight={10}
          position={"relative"}
          textShadow={{
            base: "1px 1px 2px rgba(1,1,1,0.6)",
          }}
          top={{
            base: "20%",
            md: "27%",
          }}
          variants={heroHeaderVariants2}
        >
          Conseguí tu primera
          <br />
          <Text
            ref={ref}
            animate={controls}
            as={motion.p}
            color={"rgba(255,114,114,1)"}
            display="inline-block"
            initial="hidden"
            textShadow="2px 2px 1px white"
            variants={heroHeaderVariants3}
          >
            Motomel Blitz 0km.
          </Text>
        </Heading>
      </Box>
    </Flex>
  );
};

// SLIDER COMPONENT
const gridVariants = {
  hidden: {opacity: 0},
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const slideData = [
  "/assets/homeGallery/02.jpg",
  "/assets/homeGallery/03.jpg",
  "/assets/homeGallery/05.jpg",
];

const SliderGrid: React.FC = () => {
  const {ref, inView} = useInView({triggerOnce: true, delay: 200});
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView]);

  return (
    <Center backgroundColor={"bg"} margin={0}>
      <Grid
        animate={controls}
        as={motion.div}
        initial="hidden"
        maxWidth="900px"
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
        variants={gridVariants}
      >
        <GridItem
          alignItems={"center"}
          colEnd={{base: 3, md: 3}}
          colStart={{base: 2, md: 2}}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          marginTop={"15px"}
          rowEnd={{base: 2, md: 7}}
          rowStart={{base: 1, md: 1}}
        >
          <ImageSlider slides={slideData} />
        </GridItem>
        <GridItem
          boxShadow={"2px 2px 8px rgba(1,1,1,0.3)"}
          colEnd={{base: 4, md: 5}}
          colStart={{base: 1, md: 1}}
          rowEnd={{base: 3, md: 6}}
          rowStart={{base: 1, md: 2}}
          w={"100%"}
        />
        <GridItem
          backgroundColor={"rgba(255,111,111,0.7)"}
          colEnd={4}
          colStart={1}
          rowEnd={{base: 2, md: 6}}
          rowStart={{base: 1, md: 2}}
          w={"100%"}
        />
        <GridItem
          alignItems={"start"}
          backgroundColor="white"
          colEnd={{base: 3, md: 5}}
          colStart={{base: 2, md: 4}}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"space-between"}
          padding={{base: 3, md: 10}}
          rowEnd={{base: 3, md: 6}}
          rowStart={{base: 2, md: 2}}
          w={"100%"}
        >
          <Heading as={"h3"} color={"#393939"} fontFamily={"header"} fontSize={"3xl"}>
            ¿Buscas descuentos?
          </Heading>
          <Heading
            ref={ref}
            as={"h5"}
            color={"#555"}
            fontFamily={"navbar"}
            lineHeight={8}
            size={"sm"}
          >
            Hasta 30% off en estas prendas!
          </Heading>
          <Button
            _hover={{
              bg: "bgContactMe",
              color: "button",
              border: "2px",
            }}
            bg={"button"}
            color={"bgContactMe"}
            width="100%"
          >
            <Link href="/categories/todos">
              <a>Ver productos</a>
            </Link>
          </Button>
        </GridItem>
      </Grid>
    </Center>
  );
};

//FOOTER SECTION COMPONENT
//Modularizar en componente individual cada item de la sección
const footerItemVariants1 = {
  hidden: {opacity: 0, y: 50},
  visible1: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const footerItemVariants2 = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible2: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.4,
      ease: "easeOut",
    },
  },
};

const footerItemVariants3 = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible3: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.8,
      ease: "easeOut",
    },
  },
};

const FooterSection: React.FC = () => {
  const {ref, inView} = useInView({triggerOnce: true, delay: 300});
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
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
      flexDirection={{base: "row"}}
      flexWrap={"wrap"}
      justifyContent={"space-evenly"}
      minHeight={200}
    >
      <Center
        alignItems={"center"}
        animate={controls}
        as={motion.div}
        flexDirection={{
          base: "column",
          md: "row",
        }}
        initial="hidden"
        margin={5}
        variants={footerItemVariants1}
      >
        <Box border={"1px solid white"} borderRadius={"50%"} padding={3}>
          <BsFillCartFill size={40} />
        </Box>
        <Box
          alignItems={{
            base: "center",
            md: "start",
          }}
          display={"flex"}
          flexDirection={"column"}
          marginLeft={{
            base: 0,
            md: 3,
          }}
          marginTop={2}
        >
          <Text fontWeight={800}>Viene el PM</Text>
          <Text ref={ref} fontSize={"sm"} fontWeight={500}>
            Ordenen todo viejo
          </Text>
        </Box>
      </Center>
      <Center
        alignItems={"center"}
        animate={controls}
        as={motion.div}
        flexDirection={{
          base: "column",
          md: "row",
        }}
        initial="hidden"
        margin={5}
        variants={footerItemVariants2}
      >
        <Box border={"1px solid white"} borderRadius={"50%"} padding={3}>
          <FaMoneyBill size={40} />
        </Box>
        <Box
          alignItems={{
            base: "center",
            md: "start",
          }}
          display={"flex"}
          flexDirection={"column"}
          marginLeft={{
            base: 0,
            md: 3,
          }}
          marginTop={2}
        >
          <Text fontWeight={800}>Part Time</Text>
          <Text fontSize={"sm"} fontWeight={500}>
            Desde casita
          </Text>
        </Box>
      </Center>
      <Center
        alignItems={"center"}
        animate={controls}
        as={motion.div}
        flexDirection={{
          base: "column",
          md: "row",
        }}
        initial="hidden"
        marginX={10}
        marginY={5}
        variants={footerItemVariants3}
      >
        <Box border="1px solid white" borderRadius={"50%"} padding={3}>
          <BsExclamationTriangleFill size={40} />
        </Box>
        <Box
          alignItems={{
            base: "center",
            md: "start",
          }}
          display={"flex"}
          flexDirection={"column"}
          marginLeft={{
            base: 0,
            md: 3,
          }}
          marginTop={2}
        >
          <Text fontWeight={800}>Cuidado</Text>
          <Text fontSize={"sm"} fontWeight={500}>
            Flujo Tubular
          </Text>
        </Box>
      </Center>
    </Flex>
  );
};

export default index_copy;
