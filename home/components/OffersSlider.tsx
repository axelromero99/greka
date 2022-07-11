import React from "react";
import {Button, Heading, Grid, Center, GridItem} from "@chakra-ui/react";
import Link from "next/link";
import {useInView} from "react-intersection-observer";
import {motion} from "framer-motion";

import ImageSlider from "../../imageslider/components/ImageSlider";

const OffersSlider: React.FC<{offersImages: string[]}> = ({offersImages}) => {
  const {ref, inView} = useInView({triggerOnce: true, delay: 200});

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

  return (
    <Center backgroundColor={"bg"} margin={0}>
      <Grid
        animate={inView ? "visible" : ""}
        as={motion.div}
        initial="hidden"
        maxWidth="900px"
        overflow="hidden"
        padding={5}
        templateColumns={{
          base: "0px 100% 0px",
          sm: "0px 430px 0px",
          md: "20px 1fr 20px 1fr",
        }}
        templateRows={{
          base: "390px 200px",
          sm: "400px 230px",
          md: "30px 110px 110px 110px 110px 30px",
        }}
        variants={gridVariants}
      >
        <GridItem
          alignItems="center"
          colEnd={{base: 3, md: 3}}
          colStart={{base: 2, md: 2}}
          display={"flex"}
          flexDirection="column"
          justifyContent="center"
          overflow="hidden"
          rowEnd={{base: 2, md: 7}}
          rowStart={{base: 1, md: 1}}
        >
          <ImageSlider slides={offersImages} />
        </GridItem>
        <GridItem
          ref={ref} 
          colEnd={{base: 4, md: 5}}
          colStart={{base: 1, md: 1}}
          rowEnd={{base: 3, md: 6}}
          rowStart={{base: 1, md: 2}}
          width="100%"
        />
        <GridItem
          backgroundColor={"rgba(255,111,111,0.7)"}
          boxShadow={"2px 2px 12px rgba(1,1,1,0.3)"}
          colEnd={4}
          colStart={1}
          rowEnd={{base: 2, md: 6}}
          rowStart={{base: 1, md: 2}}
          width="100%"
        />
        <GridItem
          alignItems="center"
          backgroundColor="white"
          colEnd={{base: 3, md: 5}}
          colStart={{base: 2, md: 4}}
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          padding={{base: 6, md: 10}}
          rowEnd={{base: 3, md: 5}}
          rowStart={{base: 2, md: 3}}
          w="100%"
        >
          <Heading alignSelf="center" as="h3" fontFamily="header" fontSize="2xl">
            ¿Buscas descuentos?
          </Heading>
          <Heading as={"h5"} fontFamily={"navbar"} lineHeight={2} size={"sm"}>
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
            width="200px"
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

export default OffersSlider;
