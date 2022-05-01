import * as React from "react";
import Head from "next/head";
import {
  ChakraProvider,
  Heading,
  Text,
  Image,
  Container,
  Stack,
  Divider,
  Link,
  Box,
  Flex,
} from "@chakra-ui/react";
import {AppProps} from "next/app";

import WithSubnavigation from "../navbar/components/navbar";
import theme from "../theme";

const INFORMATION = {
  banner: "/assets/banner.jpg",
  phone: `5491141414141`,
  social: [
    {
      name: "instagram",
      url: `https://instagram.com/goncy.js`,
    },
    {
      name: "whatsapp",
      url: `https://wa.me/5491141414141`,
    },
  ],
};

const App: React.FC<AppProps> = ({Component, pageProps}) => {
  return (
    <>
      <Head>
        <title>Mi tienda online - Almacency</title>
        <meta content="initial-scale=1.0, width=device-width" name="viewport" />
        {/* Inicio de meta tags de licencia - Cambiar el contenido de los mismos viola el contenido de los terminos de licencia */}
        <meta content="goncy" name="author" />
        <meta content="Gonzalo Pozzo" name="copyright" />
        {/* Fin de meta tags de licencia */}
      </Head>
      <ChakraProvider theme={theme}>
        <Container
          backgroundColor="background_primary"
          borderRadius="sm"
          maxWidth="container.xl"
          padding={4}
        >
          <Stack spacing={8}>
            <Stack marginBottom={4} spacing={4}>
              <Image
                borderRadius="lg"
                height="100%"
                maxHeight={64}
                objectFit="cover"
                src={INFORMATION.banner}
              />
              <Stack
                alignItems="center"
                direction={{base: "column", sm: "row"}}
                spacing={{base: 3, sm: 6}}
              >
                <Container maxWidth="90ch" position="relative" top="-38">
                  <WithSubnavigation />
                  {/* <Stack direction="row">
                    {INFORMATION.social.map((social) => (
                      <Link key={social.name} isExternal href={social.url}>
                        <Flex
                          alignItems="center"
                          backgroundColor="primary.500"
                          borderRadius={9999}
                          color="white"
                          height={10}
                          justifyContent="center"
                          width={10}
                        >
                          <Image
                            src={`https://icongr.am/fontawesome/${social.name}.svg?size=24&color=ffffff`}
                          />
                        </Flex>
                      </Link>
                    ))}
                  </Stack> */}
                </Container>
              </Stack>
            </Stack>
            <Component {...pageProps} />
          </Stack>
          <Divider marginY={4} />
          {/* Inicio de copyright - Cambiar el contenido de los mismos viola el contenido de los terminos de licencia */}
        </Container>
        <Container
          backgroundColor="background_secondary"
          borderRadius="sm"
          maxWidth="container.xl"
          padding={4}
        >
          <Text textAlign="center">© Copyright {new Date().getFullYear()}. GREKA SHOWROOM</Text>
          {/* Fin de copyright */}
        </Container>
      </ChakraProvider>
    </>
  );
};

export default App;
