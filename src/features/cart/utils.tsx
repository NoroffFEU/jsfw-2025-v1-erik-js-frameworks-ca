import type { Product } from "../products/types";

export function calculatePriceItems(product: Product, quantity: number) {
  const price = product.price * quantity;
  const discountedPrice = product.discountedPrice * quantity;
  return { price, discountedPrice };
}

export function calculateTotalPrice(
  cartItems: { product: Product; quantity: number }[],
) {
  const totalPrice = cartItems.reduce((total, item) => {
    return total + item.product.price * item.quantity;
  }, 0);
  return totalPrice;
}

export function calculateTotalDiscountedPrice(
  cartItems: { product: Product; quantity: number }[],
) {
  const totalDiscountedPrice = cartItems.reduce((total, item) => {
    return total + item.product.discountedPrice * item.quantity;
  }, 0);
  return totalDiscountedPrice;
}
