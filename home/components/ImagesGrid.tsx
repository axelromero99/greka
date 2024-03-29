import React from "react";
import {Grid, GridItem, Stack, Center, Box, Text} from "@chakra-ui/react";
import Link from "next/link";
import {useInView} from "react-intersection-observer";
import {motion} from "framer-motion";

import ChakraNextImage from "../../chakranextimage/components/ChakraNextImage";

const gridVariants = {
  hidden: {opacity: 0},
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeInOut",
      delay: 1,
    },
  },
};

const ImagesGrid: React.FC = () => {
  const {ref, inView} = useInView({triggerOnce: true, delay: 200});

  return (
    <Center bg="bg" h={{base: "90vh", sm: "100vh"}} margin={0}>
      <Stack
        ref={ref}
        animate={inView ? "visible" : ""}
        as={motion.div}
        boxShadow="rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px"
        initial="hidden"
        variants={gridVariants}
        width={["95%", "55%"]}
      >
        <Grid
          boxShadow="rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px"
          templateColumns="repeat(4, 1fr)"
          templateRows="repeat(2, 1fr)"
        >
          <GridItem bg="black" colSpan={2} height="40vh">
            <Link href="/categories/tops-remeras">
              <a>
                <Box
                  bg="black"
                  h="100%"
                  justifyContent="center"
                  overflow="hidden"
                  position="relative"
                  w="100%"
                >
                  <ChakraNextImage
                    _hover={{opacity: "0.7", transform: "scale(1.1)"}}
                    filter="brightness(0.8)"
                    fit="cover"
                    h="100%"
                    src="https://res.cloudinary.com/dxgrn0qtx/image/upload/c_scale,q_70,w_824/v1657597231/topss_pesa9q.png"
                    transition="all 0.5s ease-out"
                    w="100%"
                  />

                  <Text
                    color="#fff"
                    fontFamily="header"
                    fontSize={{base: "1.5rem", md: "2rem"}}
                    left="50%"
                    pointerEvents="none"
                    position="absolute"
                    textAlign="center"
                    textShadow="2px 1px 1px #000"
                    top="50%"
                    transform="translate(-50%, -50%)"
                  >
                    TOPS Y REMERAS
                  </Text>
                </Box>
              </a>
            </Link>
          </GridItem>

          <GridItem colSpan={2} height="40vh">
            <Link href="/categories/shorts-polleras">
              <a>
                <Box
                  bg="black"
                  h="100%"
                  justifyContent="center"
                  overflow="hidden"
                  position="relative"
                  w="100%"
                >
                  <ChakraNextImage
                    _hover={{opacity: "0.7", transform: "scale(1.1)"}}
                    filter="brightness(0.8)"
                    fit="cover"
                    height="100%"
                    src="https://res.cloudinary.com/dxgrn0qtx/image/upload/c_scale,q_70,w_901/v1657596976/pollerass_hc2ykn.png"
                    transition="all 0.5s ease-out"
                    width="100%"
                  />

                  <Text
                    alignSelf="center"
                    color="#fff"
                    fontFamily="header"
                    fontSize={{base: "1.5rem", md: "2rem"}}
                    left="50%"
                    pointerEvents="none"
                    position="absolute"
                    textShadow="2px 1px 1px #000"
                    top="50%"
                    transform="translate(-50%, -50%)"
                  >
                    SHORTS Y POLLERAS
                  </Text>
                </Box>
              </a>
            </Link>
          </GridItem>
          <GridItem colSpan={4} height="40vh">
            <Box h="100%" justifyContent="center" position="relative" w="100%">
              <Link href="/categories/pantalones">
                <a style={{height: "100%"}}>
                  <Box
                    bg="black"
                    h="100%"
                    justifyContent="center"
                    overflow="hidden"
                    position="relative"
                    w="100%"
                  >
                    <ChakraNextImage
                      _hover={{opacity: "0.7", transform: "scale(1.1)"}}
                      align="center"
                      filter="brightness(0.8)"
                      fit="cover"
                      height="100%"
                      position="absolute"
                      src="https://res.cloudinary.com/dxgrn0qtx/image/upload/c_scale,q_100,w_1784/v1658250960/jeanss_qojnp2.png"
                      transition="all 0.5s ease-out"
                      width="100%"
                      z-index="-1"
                    />
                    <Text
                      alignSelf="center"
                      color="#fff"
                      fontFamily="header"
                      fontSize={{base: "1.5rem", md: "2rem"}}
                      left="50%"
                      pointerEvents="none"
                      position="absolute"
                      textShadow="2px 1px 1px #000"
                      top="50%"
                      transform="translate(-50%, -50%)"
                    >
                      PANTALONES
                    </Text>
                  </Box>
                </a>
              </Link>
            </Box>
          </GridItem>
        </Grid>
      </Stack>
    </Center>
  );
};

export default ImagesGrid;
