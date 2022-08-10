import React from "react";
import {useColorModeValue, Stack, Center, Box, Heading, Text} from "@chakra-ui/react";

import {parseCurrency} from "../../utils/currency";
import {CartItem} from "../../cart/types";
import {Product} from "../types";
import CartItemDrawer from "../../cart/components/CartItemDrawer";
import ChakraNextImage from "../../chakranextimage/components/ChakraNextImage";

interface Props {
  product: Product;
  index: number;
  onAdd: (product: Product) => void;
}

const ProductCard: React.FC<Props> = ({product, index, onAdd}) => {
  const [isModalOpen, toggleModal] = React.useState(false);
  const [isShown, setIsShown] = React.useState(false);

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
              transition: "all .3s linear",
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
            alignItems={"center"}
            cursor={"pointer"}
            display={"flex"}
            flexDirection={"column"}
            height={"230px"}
            justifyContent={"center"}
            mt={-12}
            pos={"relative"}
            rounded={"lg"}
            style={{borderRadius: "15px"}}
            onClick={() => (product.options ? toggleModal(true) : onAdd(cartItem))}
            onMouseOut={() => setIsShown(false)}
            onMouseOver={() => setIsShown(true)}
          >
            <Box
              color="white"
              opacity={isShown ? "1" : "0.3"}
              pos={"absolute"}
              top={isShown ? "45%" : "52%"}
              transition={"all .2s ease-in-out"}
              visibility={isShown ? "visible" : "hidden"}
              zIndex={2}
            >
              🔍 Ver
            </Box>
            <ChakraNextImage
              filter={isShown ? "blur(3px)" : ""}
              height={230}
              index={index}
              objectFit="cover"
              src={product.image}
              style={{borderRadius: "9px", overflow: "hidden"}}
              transition="all .3s linear"
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
              <Text fontSize={"lg"} fontWeight={650}>
                {product.discount
                  ? parseCurrency(Number(product.discount))
                  : parseCurrency(product.price)}
              </Text>
              {product.discount && (
                <Text
                  color={"gray.500"}
                  fontSize={"sm"}
                  fontWeight={500}
                  textDecoration={"line-through"}
                >
                  ${product.price}
                </Text>
              )}
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
