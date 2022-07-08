import * as React from "react";
import {useState} from "react";
import Head from "next/head";
import {ChakraProvider, Text, Image, Container, Link, Flex, Stack} from "@chakra-ui/react";
import Router from "next/router";
import {AppProps} from "next/app";
import NProgress from "nprogress";

import Footer from "../footer/Footer";
import WithSubnavigation from "../navbar/components/navbar";
import theme from "../theme";
import Loading from "../loading/Loading";
NProgress.configure({showSpinner: false});

const App: React.FC<AppProps> = ({Component, pageProps}) => {
  const [loading, setLoading] = useState<boolean>(false);

  Router.events.on("routeChangeStart", () => {
    NProgress.start();
    setLoading(true);
  });
  Router.events.on("routeChangeComplete", () => {
    NProgress.done();
    setLoading(false);
  });

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
        {loading ? (
          <Container maxWidth="100vw" minHeight="100vh" padding={0}>
            <Loading />
          </Container>
        ) : (
          <>
            <Container maxWidth="100vw" minHeight="100vh" padding={0}>
              <Stack>
                <Component {...pageProps} />
              </Stack>
            </Container>
            <Footer />
          </>
        )}
      </ChakraProvider>
    </>
  );
};

export default App;
