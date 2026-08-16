"use client";

import { useCartStore } from "../store";
import { useProducts } from "../../products/hooks";
import CartItem from "./CartItem";
import { calculateTotalPrice, calculateTotalDiscountedPrice } from "../utils";
import { useToastStore } from "../../toast/toast";

export const ListCartItems = () => {
  const cartItems = useCartStore((state) => state.items);
  const removeItem = useCartStore((state) => state.removeItem);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const addToast = useToastStore((state) => state.addToast);

  const { data: products, isLoading } = useProducts();

  if (isLoading) {
    return <p className="text-center mt-8">Loading your cart!</p>;
  }

  const cartItemsWithProducts = cartItems.map((item) => {
    const product = products?.find((p) => p.id === item.productId);
    return { product: product!, quantity: item.quantity };
  });
  const totalPrice = calculateTotalPrice(cartItemsWithProducts);
  const totalDiscountedPrice = calculateTotalDiscountedPrice(
    cartItemsWithProducts,
  );
  const totalSavings = totalPrice - totalDiscountedPrice;

  const handleRemoveItem = (productId: string) => {
    const product = products?.find((p) => p.id === productId);
    removeItem(productId);
    if (product) addToast(`${product.title} removed from your cart`);
  };

  return (
    <div className="space-y-4">
      <div className="hidden sm:grid sm:grid-cols-[64px_2fr_1fr_1fr_80px] gap-4 bg-gray-100 px-4 py-3 font-bold text-sm">
        <span></span>
        <span>Product</span>
        <span className="text-center">Quantity</span>
        <span className="text-center">Price</span>
        <span className="text-center">Remove</span>
      </div>
      {cartItems.length === 0 && (
        <p className="text-gray-600 text-center">Your cart is empty.</p>
      )}
      {cartItemsWithProducts.map(({ product, quantity }) => (
        <CartItem
          key={product.id}
          product={product}
          quantity={quantity}
          onRemove={handleRemoveItem}
          onUpdateQuantity={updateQuantity}
        />
      ))}
      {totalPrice > 0 && (
        <div className="mt-4 px-4 py-2 bg-gray-100 text-sm space-y-1">
          <div className="flex justify-between">
            <span>Total:</span>
            <span className="line-through text-red-500">
              ${totalPrice.toFixed(2)}
            </span>
          </div>

          <div className="flex justify-between">
            <span>Savings:</span>
            <span className="text-green-600">${totalSavings.toFixed(2)}</span>
          </div>

          <div className="flex justify-between pt-2 font-semibold text-lg text-gray-700">
            <span>Total to pay:</span>
            <span className="underline">
              ${totalDiscountedPrice.toFixed(2)}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
