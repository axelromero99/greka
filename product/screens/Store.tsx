import * as React from "react";
import {Button, Flex, Grid, Stack, Text, Heading, Box} from "@chakra-ui/react";
import {BsCart4} from "react-icons/bs";

import type {Product} from "../types";
import ProductCard from "../components/ProductCard";
import CartDrawer from "../../cart/components/CartDrawer/CartDrawer";
import {useCart} from "../../cart/context";

interface Props {
  products: Product[];
  categoryType: string;
}

const dynamicBanners = {
  todos: "url(/assets/banner/banner.jpg)",
  "tops-remeras": "url(/assets/banner/remeras.jpg)",
  vestidos: "url(/assets/banner/vestido.jpg)",
  "shorts-polleras": "url(/assets/banner/polleras.jpg)",
  jeans: "url(/assets/banner/jeans.jpg)",
  abrigos: "url(/assets/banner/abrigos.jpg)",
};

const StoreScreen: React.FC<Props> = ({products, categoryType}) => {
  const [{total, quantity}, {addItem}] = useCart();
  const [isCartOpen, toggleCart] = React.useState<boolean>(false);
  const bgBanner = dynamicBanners[categoryType];

  return (
    <>
      <Box bg={"body"} height="1px" width="100%" />
      <Flex
        alignItems="center"
        height={"350px"}
        justifyContent="center"
        margin={0}
        style={{
          backgroundImage: bgBanner,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        width="100%"
        position={"relative"}
      >
        {/* This is the element that handles the background-image blur filter */}
      <Flex
        content=""
        position={"absolute"}
        top={0}
        left={0}
        right={0}
        bottom={0}
        width={"100%"}
        height={"100%"}
        backdropFilter={"blur(2px) brightness(90%)"}
      />
        <Heading
          color={"white"}
          fontFamily={"body"}
          textAlign={"center"}
          textShadow="2px 2px 1px rgba(205,64,64,1)"
          textTransform={"uppercase"}
          position="relative"
        >
          {categoryType}
        </Heading>
      </Flex>
      <Stack spacing={6}>
        {products?.length ? (
          <Grid
            gridGap={8}
            templateColumns={{
              base: "repeat(auto-fill, minmax(240px, 1fr))",
              sm: "repeat(auto-fill, minmax(360px, 1fr))",
            }}
          >
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAdd={(product: Product) => addItem(Symbol(), {...product, quantity: 1})}
              />
            ))}
          </Grid>
        ) : (
          <Stack height="50vh">
            <Text color="font" fontSize="lg" margin="auto">
              No tenemos stock por el momento
            </Text>
          </Stack>
        )}
        {Boolean(quantity) && !isCartOpen && (
          <Flex
            alignItems="center"
            bottom={4}
            justifyContent="center"
            position="sticky"
            zIndex="500"
          >
            <Button
              backgroundColor="bgSecondary"
              boxShadow="xl"
              colorScheme="gray"
              data-testid="show-cart"
              marginBottom={2}
              size="lg"
              width={{base: "100%", sm: "fit-content"}}
              onClick={() => toggleCart(true)}
            >
              <Stack alignItems="center" direction="row" spacing={6}>
                <Stack alignItems="center" direction="row" spacing={6}>
                  <BsCart4 size={"26"} />
                  <Text
                    alignSelf={"center"}
                    backgroundColor="rgba(0,0,0,0.1)"
                    borderRadius="sm"
                    color="#444"
                    fontSize="sm"
                    fontWeight="500"
                    paddingX={2}
                    paddingY={2}
                  >
                    Cantidad: {quantity}
                  </Text>
                </Stack>
                <Text fontSize="md">{total}</Text>
              </Stack>
            </Button>
          </Flex>
        )}
      </Stack>
      <CartDrawer isOpen={isCartOpen} onClose={() => toggleCart(false)} />
    </>
  );
};

export default StoreScreen;
