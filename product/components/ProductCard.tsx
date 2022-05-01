import React from "react";
import {
  useColorModeValue,
  Stack,
  Button,
  Center,
  Box,
  Heading,
  Text,
  Image,
} from "@chakra-ui/react";

import {parseCurrency} from "../../utils/currency";
import {CartItem} from "../../cart/types";
import {Product} from "../types";
import CartItemDrawer from "../../cart/components/CartItemDrawer";

interface Props {
  product: Product;
  onAdd: (product: Product) => void;
}

const ProductCard: React.FC<Props> = ({product, onAdd}) => {
  const [isModalOpen, toggleModal] = React.useState(false);
  const cartItem = React.useMemo<CartItem>(() => ({...product, quantity: 1}), [product]);

  return (
    <>
      <Center py={12}>
        <Box
          bg={useColorModeValue("white", "gray.800")}
          boxShadow={"2xl"}
          maxW={"400px"}
          p={6}
          pos={"relative"}
          role={"group"}
          rounded={"lg"}
          w={"full"}
          zIndex={1}
        >
          <Box
            _after={{
              transition: "all .3s ease",
              content: '""',
              w: "full",
              h: "full",
              pos: "absolute",
              top: 5,
              left: 0,
              backgroundImage: `url(${product.image})`,
              filter: "blur(15px)",
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: "blur(20px)",
              },
            }}
            height={"230px"}
            mt={-12}
            pos={"relative"}
            rounded={"lg"}
          >
            <Image
              height={230}
              objectFit={"cover"}
              rounded={"lg"}
              src={product.image}
              width={360}
            />
          </Box>
          <Stack align={"center"} pt={10}>
            <Text color={"gray.500"} fontSize={"sm"} textTransform={"uppercase"}>
              {product.category}
            </Text>
            <Heading fontFamily={"body"} fontSize={"2xl"} fontWeight={500}>
              {product.title}
            </Heading>
            <Stack align={"center"} direction={"row"}>
              <Text fontSize={"xl"} fontWeight={800}>
                {product.discount ? parseCurrency(product.discount) : parseCurrency(product.price)}
              </Text>
              {product.discount && (
                <Text color={"gray.600"} textDecoration={"line-through"}>
                  {product.price}
                </Text>
              )}
              <Button
                size="xs"
                onClick={() => (product.options ? toggleModal(true) : onAdd(cartItem))}
              >
                Agregar
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Center>
      {isModalOpen && (
        <CartItemDrawer
          isOpen
          item={cartItem}
          onClose={() => toggleModal(false)}
          onSubmit={(item: CartItem) => {
            onAdd(item);
            toggleModal(false);
          }}
        />
      )}
    </>
  );
};

export default ProductCard;
