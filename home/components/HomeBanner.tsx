import React from "react";
import {Heading, Flex} from "@chakra-ui/react";
import {useInView} from "react-intersection-observer";
import {motion} from "framer-motion";

const HomeBanner: React.FC = () => {
  const {ref, inView} = useInView({triggerOnce: true, delay: 200});

  //Variantes de animaciones del Banner
  const headingVariants = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const secondaryHeadingVariants = {
    hidden: {
      opacity: 0,
      y: 70,
    },
    visible: (extraDelay = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.45 + extraDelay,
        ease: "easeOut",
      },
    }),
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
      <Flex
        align="center"
        direction="column"
        gap="2"
        ml={{base: "-44px", md: 0}}
        mt={{base: 20, sm: 16}}
      >
        <Heading
          animate={inView ? "visible" : ""}
          as={motion.h3}
          color="white"
          fontFamily={"header"}
          fontSize={{base: "34px", md: "44px", lg: "48px"}}
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
          textAlign="center"
          textShadow={{
            base: "1px 1px 2px rgba(1,1,1,0.8)",
          }}
          top={{
            base: "10%",
            md: "17%",
          }}
          variants={headingVariants}
        >
          GREKA SHOWROOM
        </Heading>
        <Heading
          ref={ref}
          animate={inView ? "visible" : ""}
          as={motion.h1}
          color={"button"}
          custom={0.15}
          display="inline-block"
          fontSize={{base: "22px", md: "24px"}}
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
          textAlign="center"
          textShadow="2px 2px 1px white"
          top={{
            base: "10%",
            md: "17%",
          }}
          variants={secondaryHeadingVariants}
        >
          CATÁLOGO ONLINE
        </Heading>
      </Flex>
      {/* <Box>
        <Heading
          animate={inView ? "visible" : ""}
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
          top={{
            base: "10%",
            md: "17%",
          }}
          textShadow={{
            base: "1px 1px 2px rgba(1,1,1,0.8)",
          }}
          variants={headingVariants}
        >
          Greka Showroom
        </Heading>
        <Heading
          animate={inView ? "visible" : ""}
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
          variants={secondaryHeadingVariants}
        >
          Te vestimos
          <br />
          <Text
            ref={ref}
            animate={inView ? "visible" : ""}
            as={motion.p}
            color={"button"}
            custom={0.15}
            display="inline-block"
            initial="hidden"
            textShadow="2px 2px 1px white"
            variants={secondaryHeadingVariants}
          >
            Como nadie más.
          </Text>
        </Heading>
      </Box> */}
    </Flex>
  );
};

export default HomeBanner;
