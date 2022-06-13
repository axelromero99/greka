import React from "react";
import {Grid, GridItem, Stack, Center, Box, Image, Text} from "@chakra-ui/react";
import Link from "next/link";

const ImagesGrid: React.FC = () => {
  return (
    <Center bg="bg" h="100vh" margin={0}>
      <Stack width={["95%", "55%"]}>
        <Grid templateColumns="repeat(4, 1fr)" templateRows="repeat(2, 1fr)">
          <GridItem colSpan={2} height="40vh">
            <Link href="/categories/tops-remeras">
              <a>
                <Image
                  fit="cover"
                  h="100%"
                  src="https://images.pexels.com/photos/8929812/pexels-photo-8929812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=500&dpr=1"
                  w="100%"
                />
                <Box
                  alignContent="center"
                  display="flex"
                  h="100%"
                  justifyContent="center"
                  position="relative"
                  top="-100%"
                  w="100%"
                >
                  <Text
                    alignSelf="center"
                    color="#fff"
                    fontFamily="Georgia"
                    fontSize={["1rem", "2rem"]}
                    textAlign="center"
                    textShadow="2px 1px 1px #000"
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
                <Image
                  fit="cover"
                  height="100%"
                  src="https://media.istockphoto.com/photos/beautiful-woman-smiling-picture-id507904690?k=20&m=507904690&s=612x612&w=0&h=AyPWlWtfsIE7v-WXyamX2f_ggqzPn4yka1QRTyhhbok="
                  width="100%"
                />
                <Box
                  display="flex"
                  h="100%"
                  justifyContent="center"
                  position="relative"
                  top="-100%"
                  w="100%"
                >
                  <Text
                    alignSelf="center"
                    color="#fff"
                    fontFamily="Georgia"
                    fontSize={["1rem", "2rem"]}
                    textAlign="center"
                    textShadow="2px 1px 1px #000"
                  >
                    SHORTS Y POLLERAS
                  </Text>
                </Box>
              </a>
            </Link>
          </GridItem>
          <GridItem colSpan={4} height="40vh">
            <Link href="/categories/jeans">
              <a style={{height: "100%"}}>
                <Box h="100%" justifyContent="center" position="relative" w="100%">
                  <Image
                    align="center"
                    fit="cover"
                    height="100%"
                    position="absolute"
                    src="https://images.pexels.com/photos/2129970/pexels-photo-2129970.jpeg?auto=compress&cs=tinysrgb&w=1200&h=500&dpr=1"
                    width="100%"
                  />
                  <Text
                    alignSelf="center"
                    color="#fff"
                    fontFamily="Georgia"
                    fontSize="2rem"
                    left="50%"
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
          </GridItem>
        </Grid>
      </Stack>
    </Center>
  );
};

export default ImagesGrid;
