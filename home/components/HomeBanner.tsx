import React from "react";
import {Box, Heading, Flex, Text} from "@chakra-ui/react";
import {useInView} from "react-intersection-observer";
import {motion} from "framer-motion";

const HomeBanner: React.FC = () => {
  const {ref, inView} = useInView({triggerOnce: true, delay: 200});

  const bannerVariants1 = {
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

  const bannerVariants2 = {
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

  const bannerVariants3 = {
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
          animate={inView ? "visible1" : ""}
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
          variants={bannerVariants1}
        >
          Fucking Grikas
        </Heading>
        <Heading
          animate={inView ? "visible2" : ""}
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
          variants={bannerVariants2}
        >
          Conseguí tu primera
          <br />
          <Text
            ref={ref}
            animate={inView ? "visible3" : ""}
            as={motion.p}
            color={"rgba(255,114,114,1)"}
            display="inline-block"
            initial="hidden"
            textShadow="2px 2px 1px white"
            variants={bannerVariants3}
          >
            Motomel Blitz 0km.
          </Text>
        </Heading>
      </Box>
    </Flex>
  );
};

export default HomeBanner;
