import {parseCurrency} from "../utils/currency";

import {Cart, CartItem, Checkout} from "./types";

export function getCartItemPrice(item: CartItem): number {
  const optionsPrice = item.options
    ? Object.values(item.options).reduce((price, option) => price + option?.[0]?.price, 0)
    : 0;

  return (optionsPrice + item.price) * item.quantity;
}

export function getCartTotal(cart: Cart): number {
  return Array.from(cart.values()).reduce((total, item) => total + getCartItemPrice(item), 0);
}

export function getCartItemOptionsSummary(options: CartItem["options"]): string {
  return Object.entries(options)
    .reduce((options, [category, option]) => options.concat(`${category}: ${option[0].title}`), [])
    .join(",");
}

/**
 * It takes a cart and a checkout object, and returns a string with the cart items, checkout fields and
 * total
 * @param {Cart} cart - {
 * @param {Checkout} checkout - {
 * @returns A string
 */
export function getCartMessage(cart: Cart, checkout: Checkout): string {
  const items = Array.from(cart.values())
    .map(
      (item) =>
        `${item.title}${item.quantity > 1 ? ` (X${item.quantity})` : ``}${
          item.options ? ` [${getCartItemOptionsSummary(item.options)}]` : ``
        } - ${parseCurrency(getCartItemPrice(item))}\n`,
    )
    .join("\n");
  const fields = Array.from(checkout.entries())
    .map(([key, value]) => `${key}: ${value}\n`)
    .join("\n");
  const total = `Total\nEn efectivo: ${parseCurrency(
    getCartTotal(cart),
  )}\nCon tarjeta: ${parseCurrency(getCartTotal(cart) * 1.075)} (7,5% de recargo)`;

  return `Hola, quisiera realizar la compra de:\n${items}${fields}\n${total} `;
}
