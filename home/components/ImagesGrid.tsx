import React from "react";
import {Grid, GridItem, Stack, Center, Box, Image, Text} from "@chakra-ui/react";
import Link from "next/link";

const ImagesGrid: React.FC = () => {
  return (
    <Center bg="bg" h={{base: "90vh", sm: "100vh"}} margin={0}>
      <Stack
        boxShadow="rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px"
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
                  <Image
                    _hover={{opacity: "0.7", transform: "scale(1.1)"}}
                    fit="cover"
                    h="100%"
                    src="https://images.pexels.com/photos/8929812/pexels-photo-8929812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=500&dpr=1"
                    transition="all 0.5s ease-out"
                    w="100%"
                  />

                  <Text
                    // alignSelf="center"
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
                  <Image
                    _hover={{opacity: "0.7", transform: "scale(1.1)"}}
                    fit="cover"
                    height="100%"
                    src="https://media.istockphoto.com/photos/beautiful-woman-smiling-picture-id507904690?k=20&m=507904690&s=612x612&w=0&h=AyPWlWtfsIE7v-WXyamX2f_ggqzPn4yka1QRTyhhbok="
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
              <Link href="/categories/jeans">
                <a style={{height: "100%"}}>
                  <Box
                    bg="black"
                    h="100%"
                    justifyContent="center"
                    overflow="hidden"
                    position="relative"
                    w="100%"
                  >
                    <Image
                      _hover={{opacity: "0.7", transform: "scale(1.1)"}}
                      align="center"
                      fit="cover"
                      height="100%"
                      position="absolute"
                      src="https://images.pexels.com/photos/2129970/pexels-photo-2129970.jpeg?auto=compress&cs=tinysrgb&w=1200&h=500&dpr=1"
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
                      JEANS
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
