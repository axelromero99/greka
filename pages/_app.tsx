import * as React from "react";
import Head from "next/head";
import {ChakraProvider, Text, Image, Container, Link, Flex, Stack} from "@chakra-ui/react";
import {AppProps} from "next/app";

import WithSubnavigation from "../navbar/components/navbar";
import theme from "../theme";

const App: React.FC<AppProps> = ({Component, pageProps}) => {
  return (
    <>
      <Head>
        <title>Greka Showroom</title>
        <meta content="initial-scale=1.0, width=device-width" name="viewport" />
        {/* Inicio de meta tags de licencia - Cambiar el contenido de los mismos viola el contenido de los terminos de licencia */}
        <meta content="showroom" name="greka" />
        <meta content="Greka Showroom" name="copyright" />
        {/* Fin de meta tags de licencia */}
      </Head>
      <ChakraProvider theme={theme}>
        <WithSubnavigation />
        <Container
          // bgGradient="linear-gradient(90deg, rgba(255,180,209,1) 0%, rgba(249,108,137,1) 100%)"
          backgroundColor={"white"}
          maxWidth="100%"
          padding={0}
        >
          <Stack>
            <Component {...pageProps} />
          </Stack>
        </Container>
        <Container borderRadius="sm" maxHeight={10} padding={4}>
          <Flex alignItems={"center"} justifyContent={"center"}>
            <Text color={"#444"} fontFamily={"body"} fontWeight={500} textAlign="center">
              © Copyright {new Date().getFullYear()}. GREKA SHOWROOM
            </Text>

            <Flex position={"absolute"} right={6}>
              <Link isExternal href={"https://www.instagram.com/grekashowroom/"} marginX={2}>
                <Flex
                  alignItems="center"
                  backgroundColor={"transparent"}
                  borderRadius={9999}
                  // color="#555"
                  height={8}
                  justifyContent="center"
                  width={8}
                >
                  <Image src={"/assets/icons/instagram.svg"} />
                </Flex>
              </Link>
              <Link
                isExternal
                href={
                  "https://mail.google.com/mail/?view=cm&source=mailto&to=grekashowroom@gmail.com"
                }
              >
                <Flex
                  alignItems="center"
                  backgroundColor={"transparent"}
                  borderRadius={9999}
                  // color="#555"
                  height={8}
                  justifyContent="center"
                  width={8}
                >
                  <Image src={"/assets/icons/envelope.svg"} />
                </Flex>
              </Link>
            </Flex>
          </Flex>
        </Container>
      </ChakraProvider>
    </>
  );
};

export default App;
