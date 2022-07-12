import * as React from "react";

import {parseCurrency} from "../utils/currency";

import {Cart, CartItem, Checkout} from "./types";
import {getCartMessage, getCartTotal} from "./utils";

interface Context {
  state: {
    cart: Cart;
    checkout: Checkout;
    total: string;
    quantity: number;
    message: string;
  };
  actions: {
    addItem: (id: string, value: CartItem) => void;
    removeItem: (id: string) => void;
    updateItem: (id: string, value: CartItem) => void;
    updateField: (id: string, value: string) => void;
  };
}

interface Props {
  children: React.ReactNode;
}

const CartContext = React.createContext({} as Context);

const CartProvider: React.VFC<Props> = (props) => {
  const [checkout, setCheckout] = React.useState<Checkout>(() => new Map());
  const [cart, setCart] = React.useState<Cart>(() => new Map());
  const total = React.useMemo(() => parseCurrency(getCartTotal(cart)), [cart]);
  const quantity = React.useMemo(
    () => Array.from(cart.values()).reduce((acc, item) => acc + item.quantity, 0),
    [cart],
  );
  const message = React.useMemo(() => getCartMessage(cart, checkout), [cart, checkout]);

  const addItem = React.useCallback(
    (id: string, value: CartItem) => {
      if (cart.has(value.id)) {
        const toUpdate = cart.get(value.id);

        return updateItem(id, {...toUpdate, quantity: toUpdate.quantity + 1});
      }
      cart.set(id, value);
      setCart(new Map(cart));
    },
    [cart],
  );

  const removeItem = React.useCallback(
    (id: string) => {
      cart.delete(id);

      setCart(new Map(cart));
    },
    [cart],
  );

  const updateItem = React.useCallback(
    (id: string, value: CartItem) => {
      cart.set(id, value);

      setCart(new Map(cart));
    },
    [cart],
  );

  const updateField = React.useCallback(
    (id: string, value: string) => {
      checkout.set(id, value);

      setCheckout(new Map(checkout));
    },
    [checkout],
  );

  const state = React.useMemo(() => ({checkout, cart, total, quantity, message}), [
    checkout,
    cart,
    total,
    quantity,
    message,
  ]);
  const actions = React.useMemo(() => ({updateItem, updateField, addItem, removeItem}), [
    updateItem,
    updateField,
    addItem,
    removeItem,
  ]);

  return <CartContext.Provider value={{state, actions}}>{props.children}</CartContext.Provider>;
};

export function useCart(): [Context["state"], Context["actions"]] {
  const {state, actions} = React.useContext(CartContext);
  const {quantity} = state;

  React.useEffect(() => {
    sessionStorage.setItem("cartQuantity", String(quantity));
  }, [quantity]);

  return [state, actions];
}

export default CartProvider;
