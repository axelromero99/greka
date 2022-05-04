import * as React from "react";
import {Button, Flex, Grid, Stack, Text, Heading, Image} from "@chakra-ui/react";

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

const StoreScreen: React.FC<Props> = ({products, fields, categoryType}) => {
  const [{total, quantity}, {addItem}] = useCart();
  const [isCartOpen, toggleCart] = React.useState<boolean>(false);

  return (
    <>
      <Image height="100%" maxHeight={"350px"} objectFit="cover" src={"/assets/banner.jpg"} />
      <Heading color={"white"} fontFamily={"body"} textAlign={"center"} textTransform={"uppercase"}>
        {categoryType}
      </Heading>
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
        {Boolean(quantity) && (
          <Flex
            alignItems="center"
            bottom={4}
            justifyContent="center"
            position="sticky"
            zIndex="popover"
          >
            <Button
              backgroundColor="#F1A07C"
              boxShadow="xl"
              colorScheme="primary"
              data-testid="show-cart"
              margin={1}
              size="lg"
              width={{base: "100%", sm: "fit-content"}}
              onClick={() => toggleCart(true)}
            >
              <Stack alignItems="center" direction="row" spacing={6}>
                <Stack alignItems="center" direction="row" spacing={3}>
                  <Text fontSize="md" lineHeight={6}>
                    Ver pedido
                  </Text>
                  <Text
                    backgroundColor="rgba(0,0,0,0.25)"
                    borderRadius="sm"
                    color="gray.100"
                    fontSize="xs"
                    fontWeight="500"
                    paddingX={2}
                    paddingY={1}
                  >
                    Cantidad: {quantity}
                  </Text>
                </Stack>
                <Text fontSize="md" lineHeight={6}>
                  {total}
                </Text>
              </Stack>
            </Button>
          </Flex>
        )}
      </Stack>
      <CartDrawer fields={fields} isOpen={isCartOpen} onClose={() => toggleCart(false)} />
    </>
  );
};

export default StoreScreen;
