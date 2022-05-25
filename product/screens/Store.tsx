import * as React from "react";
import {Button, Flex, Grid, Stack, Text, Heading, Box} from "@chakra-ui/react";
import {BsCart4} from "react-icons/bs";

import type {Product} from "../types";
import ProductCard from "../components/ProductCard";
import CartDrawer from "../../cart/components/CartDrawer/CartDrawer";
import {useCart} from "../../cart/context";
import {Field} from "../../cart/types";

interface Props {
  products: Product[];
  fields: Field[];
  categoryType: string;
}

const dynamicBanners = {
  todos: "url(/assets/banner.jpg)",
  "tops-remeras": "url(/assets/banner/tops.jpg)",
  vestidos: "url(/assets/banner/vestido.jpg)",
  "shorts-polleras": "url(/assets/banner/remeras2.jpg)",
  jeans: "url(/assets/banner/jeans.jpg)",
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
        }}
        width="100%"
      >
        <Heading
          color={"white"}
          fontFamily={"body"}
          textAlign={"center"}
          textShadow="2px 2px 1px rgba(255,114,114,1)"
          textTransform={"uppercase"}
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
          <Text color="gray.500" fontSize="lg" margin="auto">
            No hay productos
          </Text>
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
