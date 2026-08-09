"use client";

import { Product } from "../../products/types";
import { calculatePriceItems } from "../utils";
import Image from "next/image";

interface CartItemProps {
  product: Product;
  quantity: number;
  onRemove: (productId: string) => void;
  onUpdateQuantity: (productId: string, newQuantity: number) => void;
}

function CartItem({
  product,
  quantity,
  onRemove,
  onUpdateQuantity,
}: CartItemProps) {
  const lineTotal = calculatePriceItems(product, quantity).discountedPrice;
  const lineTotalWithoutDiscount = calculatePriceItems(product, quantity).price;
  const savedAmount = lineTotalWithoutDiscount - lineTotal;

  return (
    <>
      <div className="sm:hidden flex gap-3 border-b border-gray-200 py-4">
        <button
          onClick={() => onRemove(product.id)}
          className="text-sm text-white bg-red-400 px-2 py-1 rounded hover:bg-red-700"
        >
          x
        </button>
        <Image
          src={product.image.url}
          alt={product.title}
          className="w-16 h-16 object-cover rounded shrink-0"
          width={64}
          height={64}
        />
        <div className="flex flex-1 flex-col gap-2">
          <div className="flex items-center justify-between">
            <h3 className="text-sm text-gray-700 font-bold">{product.title}</h3>
          </div>
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center flex-col gap-2">
              {savedAmount > 0 && (
                <span className="text-red-600 text-sm  line-through">
                  ${lineTotalWithoutDiscount.toFixed(2)}
                </span>
              )}
              <span className="text-green-600 text-sm font-semibold">
                ${lineTotal.toFixed(2)}
              </span>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={() => onUpdateQuantity(product.id, quantity - 1)}
                className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
              >
                -
              </button>
              <span className="w-6 text-center">{quantity}</span>
              <button
                onClick={() => onUpdateQuantity(product.id, quantity + 1)}
                className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden sm:grid sm:grid-cols-[64px_2fr_1fr_1fr_80px] gap-4 items-center px-4 py-3 border-b border-gray-200 bg-gray-100">
        <Image
          src={product.image.url}
          alt={product.title}
          className="w-16 h-16 object-cover rounded"
          width={64}
          height={64}
        />
        <h3 className="text-base text-gray-700 font-bold truncate">
          {product.title}
        </h3>
        <div className="flex items-center justify-center gap-2">
          <button
            onClick={() => onUpdateQuantity(product.id, quantity - 1)}
            className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
          >
            -
          </button>
          <span className="w-6 text-center">{quantity}</span>
          <button
            onClick={() => onUpdateQuantity(product.id, quantity + 1)}
            className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
          >
            +
          </button>
        </div>
        <span className="text-gray-600 text-center">
          ${lineTotal.toFixed(2)}
        </span>
        <div className="flex justify-center">
          <button
            onClick={() => onRemove(product.id)}
            className="self-start text-sm text-white bg-red-400 px-2 py-1 rounded hover:bg-red-700"
          >
            -
          </button>
        </div>
      </div>
    </>
  );
}

export default CartItem;
