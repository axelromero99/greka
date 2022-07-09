import React from "react";
import {Box} from "@chakra-ui/react";
import {GetServerSideProps} from "next";

import productApi from "../product/api";
import HomeBanner from "../home/components/HomeBanner";
import ImagesGrid from "../home/components/ImagesGrid";
import InfoSection from "../home/components/InfoSection";
import OffersSlider from "../home/components/OffersSlider";

const index: React.FC<{offersImages: string[]}> = ({offersImages}) => {
  return (
    <>
      <Box bg={"body"} width="100%" />
      <HomeBanner />
      <ImagesGrid />
      <InfoSection />
      {offersImages && <OffersSlider offersImages={offersImages} />}
      <Box bg={"body"} height="1px" width={"100%"} />
    </>
  );
};

// HERO HEADER COMPONENT
//Debería implementar props orientadas a la propagación de animaciones en children

// const heroHeaderVariants1 = {
//   hidden: {
//     opacity: 0,
//     y: 100,
//   },
//   visible1: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.6,
//       ease: "easeOut",
//     },
//   },
// };

// const heroHeaderVariants2 = {
//   hidden: {
//     opacity: 0,
//     y: 70,
//   },
//   visible2: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.6,
//       delay: 0.45,
//       ease: "easeOut",
//     },
//   },
// };

// const heroHeaderVariants3 = {
//   hidden: {
//     opacity: 0,
//     y: 70,
//   },
//   visible3: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.6,
//       delay: 0.6,
//       ease: "easeOut",
//     },
//   },
// };

// const HeroHeader: React.FC = () => {
//   const {ref, inView} = useInView({triggerOnce: true, delay: 200});

//   return (
//     <Flex
//       height={"350px"}
//       margin={0}
//       style={{
//         backgroundImage: `url(/assets/banner/homebanner.jpg)`,
//         backgroundRepeat: "no-repeat",
//         backgroundSize: "cover",
//         backgroundPosition: "right",
//       }}
//       width="100%"
//     >
//       <Box>
//         <Heading
//           animate={inView ? "visible1" : ""}
//           as={motion.h1}
//           color="white"
//           fontFamily={"header"}
//           initial="hidden"
//           left={{
//             base: "10%",
//             sm: "12%",
//             md: "15%",
//           }}
//           maxWidth={{
//             base: "300px",
//             sm: "420px",
//             md: "800px",
//           }}
//           position={"relative"}
//           size="3xl"
//           textShadow={{
//             base: "1px 1px 2px rgba(1,1,1,0.8)",
//           }}
//           top={{
//             base: "10%",
//             md: "17%",
//           }}
//           variants={heroHeaderVariants1}
//         >
//           Fucking Grikas
//         </Heading>
//         <Heading
//           animate={inView ? "visible2" : ""}
//           as={motion.h3}
//           color="white"
//           fontWeight={500}
//           initial="hidden"
//           left={{
//             base: "10%",
//             sm: "12%",
//             md: "15%",
//           }}
//           lineHeight={10}
//           position={"relative"}
//           textShadow={{
//             base: "1px 1px 2px rgba(1,1,1,0.6)",
//           }}
//           top={{
//             base: "20%",
//             md: "27%",
//           }}
//           variants={heroHeaderVariants2}
//         >
//           Conseguí tu primera
//           <br />
//           <Text
//             ref={ref}
//             animate={inView ? "visible3" : ""}
//             as={motion.p}
//             color={"rgba(255,114,114,1)"}
//             display="inline-block"
//             initial="hidden"
//             textShadow="2px 2px 1px white"
//             variants={heroHeaderVariants3}
//           >
//             Motomel Blitz 0km.
//           </Text>
//         </Heading>
//       </Box>
//     </Flex>
//   );
// };

// SLIDER COMPONENT

// const gridVariants = {
//   hidden: {opacity: 0},
//   visible: {
//     opacity: 1,
//     transition: {
//       duration: 1,
//       ease: "easeInOut",
//     },
//   },
// };

// const SliderGrid: React.FC<{offersImages: string[]}> = ({offersImages}) => {
//   const {ref, inView} = useInView({triggerOnce: true, delay: 200});

//   return (
//     <Center backgroundColor={"bg"} margin={0}>
//       <Grid
//         animate={inView ? "visible" : ""}
//         as={motion.div}
//         initial="hidden"
//         maxWidth="900px"
//         overflow="hidden"
//         padding={5}
//         templateColumns={{
//           base: "0px 100% 0px",
//           sm: "0px 430px 0px",
//           md: "20px 1fr 20px 1fr",
//         }}
//         templateRows={{
//           base: "390px 200px",
//           sm: "400px 230px",
//           md: "30px 110px 110px 110px 110px 30px",
//         }}
//         variants={gridVariants}
//       >
//         <GridItem
//           alignItems="center"
//           colEnd={{base: 3, md: 3}}
//           colStart={{base: 2, md: 2}}
//           display={"flex"}
//           flexDirection="column"
//           justifyContent="center"
//           rowEnd={{base: 2, md: 7}}
//           rowStart={{base: 1, md: 1}}
//         >
//           <ImageSlider slides={offersImages} />
//         </GridItem>
//         <GridItem
//           boxShadow={"2px 2px 12px rgba(1,1,1,0.3)"}
//           colEnd={{base: 4, md: 5}}
//           colStart={{base: 1, md: 1}}
//           rowEnd={{base: 3, md: 6}}
//           rowStart={{base: 1, md: 2}}
//           width="100%"
//         />
//         <GridItem
//           backgroundColor={"rgba(255,111,111,0.7)"}
//           boxShadow={"2px 2px 12px rgba(1,1,1,0.3)"}
//           colEnd={4}
//           colStart={1}
//           rowEnd={{base: 2, md: 6}}
//           rowStart={{base: 1, md: 2}}
//           width="100%"
//         />
//         <GridItem
//           alignItems="center"
//           backgroundColor="white"
//           colEnd={{base: 3, md: 5}}
//           colStart={{base: 2, md: 4}}
//           display="flex"
//           flexDirection="column"
//           justifyContent="space-between"
//           padding={{base: 6, md: 10}}
//           rowEnd={{base: 3, md: 6}}
//           rowStart={{base: 2, md: 2}}
//           w="100%"
//         >
//           <Heading alignSelf="center" as="h3" fontFamily="header" fontSize="2xl">
//             ¿Buscas descuentos?
//           </Heading>
//           <Heading ref={ref} as={"h5"} fontFamily={"navbar"} lineHeight={2} size={"sm"}>
//             Hasta 30% off en estas prendas!
//           </Heading>
//           <Button
//             _hover={{
//               bg: "bgContactMe",
//               color: "button",
//               border: "2px",
//             }}
//             bg={"button"}
//             color={"bgContactMe"}
//             width="200px"
//           >
//             <Link href="/categories/todos">
//               <a>Ver productos</a>
//             </Link>
//           </Button>
//         </GridItem>
//       </Grid>
//     </Center>
//   );
// };

// const InfoSection: React.FC = () => {
//   const {ref, inView} = useInView({triggerOnce: true, delay: 300});

//   return (
//     <>
//       <Flex
//         alignItems="center"
//         backgroundColor="rgb(109 192 198)"
//         color="white"
//         flexDirection={{base: "row"}}
//         flexWrap="wrap"
//         justifyContent="space-evenly"
//         minHeight="200"
//       >
//         {/* vale la pena juntar la data en un array y renderizar estos 3 con un .map() ? */}
//         <IconWithText
//           Icon={BsFillCartFill}
//           animateIn={inView}
//           delayValue={0}
//           description="Dentro de las 4 avenidas"
//           title="Envios"
//         />
//         <IconWithText
//           Icon={FaMoneyBill}
//           animateIn={inView}
//           delayValue={0.4}
//           description="Transferencia o Mercado Pago"
//           title="Aceptamos pagos online"
//         />
//         <IconWithText
//           Icon={BsExclamationTriangleFill}
//           animateIn={inView}
//           delayValue={0.8}
//           description="Válidos por 7 dias"
//           title="Cambios y devoluciones"
//         />
//       </Flex>
//       <div ref={ref} style={{margin: "0px"}} />
//     </>
//   );
// };

//Animaciones del componente IconWithText
//La animación "visible" recibe el valor de la prop delayValue

// const IconWithTextVariants = {
//   hidden: {
//     opacity: 0,
//     y: 50,
//   },
//   visible: (delayValue: number) => ({
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.6,
//       delay: delayValue,
//       ease: "easeOut",
//     },
//   }),
// };

// interface IconWithTextPropTypes {
//   title: string;
//   description: string;
//   Icon: React.FC<{size: number}>;
//   animateIn: boolean;
//   delayValue: number;
// }

// const IconWithText: React.FC<IconWithTextPropTypes> = ({
//   title,
//   description,
//   Icon,
//   animateIn,
//   delayValue,
// }) => {
//   return (
//     <Center
//       alignItems={"center"}
//       animate={animateIn ? "visible" : ""}
//       as={motion.div}
//       custom={delayValue}
//       flexDirection={{
//         base: "column",
//         md: "row",
//       }}
//       initial="hidden"
//       marginX={10}
//       marginY={5}
//       variants={IconWithTextVariants}
//     >
//       <Box border="1px solid white" borderRadius={"50%"} padding={3}>
//         <Icon size={40} />
//       </Box>
//       <Box
//         alignItems={{
//           base: "center",
//           md: "start",
//         }}
//         display={"flex"}
//         flexDirection={"column"}
//         marginLeft={{
//           base: 0,
//           md: 3,
//         }}
//         marginTop={2}
//       >
//         <Text fontWeight={800}>{title}</Text>
//         <Text fontSize={"sm"} fontWeight={500}>
//           {description}
//         </Text>
//       </Box>
//     </Center>
//   );
// };

export const getServerSideProps: GetServerSideProps = async () => {
  const productsOffers = await productApi.listOffers();

  const offersImages = productsOffers.map((product) => {
    return product.image;
  });

  return {
    props: {
      offersImages,
    },
  };
};

export default index;
