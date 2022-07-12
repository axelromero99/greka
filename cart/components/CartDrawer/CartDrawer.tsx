import React, {useEffect} from "react";
import {
  Text,
  Image,
  CloseButton,
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  DrawerProps,
  Stack,
  DrawerFooter,
  Button,
  Link,
  DrawerBody,
  Divider,
} from "@chakra-ui/react";

import {useCart} from "../../context";
import {CartItem} from "../../types";

import Details from "./Details";

const CartDrawer: React.FC<Omit<DrawerProps, "children">> = ({onClose, isOpen, ...props}) => {
  const [{total, message, cart}, {removeItem, updateItem}] = useCart();

  function handleUpdateCart(id: string, item: CartItem) {
    if (!item.quantity) {
      return removeItem(id);
    }

    return updateItem(id, item);
  }

  useEffect(() => {
    if (!cart.size) {
      onClose();
    }
  }, [cart.size, onClose]);

  return (
    <Drawer isOpen={isOpen} placement="right" size="sm" onClose={onClose} {...props}>
      <DrawerOverlay>
        <DrawerContent paddingTop={4} {...props}>
          <DrawerHeader paddingX={4}>
            <Stack alignItems="center" direction="row" justifyContent="space-between">
              <Stack alignItems="center" direction="row">
                <Text fontSize={{base: "2xl", sm: "3xl"}} fontWeight="500">
                  Tu pedido
                </Text>
              </Stack>
              <CloseButton onClick={onClose} />
            </Stack>
          </DrawerHeader>
          <DrawerBody data-testid="cart" paddingX={4}>
            <Details cart={cart} onChange={handleUpdateCart} />
          </DrawerBody>
          <DrawerFooter paddingX={4}>
            <Stack spacing={4} width="100%">
              <Divider />
              <Stack
                alignItems="center"
                direction="row"
                fontSize="lg"
                fontWeight="500"
                justifyContent="space-between"
              >
                <Text>Total</Text>
                <Text>{total}</Text>
              </Stack>
              <Button
                isExternal
                _hover={{textDecoration: "none"}}
                as={Link}
                colorScheme="pink"
                data-testid="complete-order"
                href={`https://wa.me/5493794348353?text=${encodeURIComponent(message)}`}
                leftIcon={
                  <Image
                    paddingBottom={0.5}
                    src="https://icongr.am/fontawesome/whatsapp.svg?size=24&color=ffffff"
                  />
                }
                size="lg"
                width="100%"
              >
                <Text>Completar pedido</Text>
              </Button>
            </Stack>
          </DrawerFooter>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};

export default CartDrawer;
