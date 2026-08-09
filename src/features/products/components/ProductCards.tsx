"use client";

import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import { Product } from "../types";

interface ProductCardsProps {
  products: Product[];
  onAddToCart: (productId: string) => void;
}

export const ProductCards = ({ products, onAddToCart }: ProductCardsProps) => {
  const hasDiscount = (product: Product) =>
    product.discountedPrice !== product.price;

  const discountPercentage = (product: Product) =>
    Math.round(
      ((product.price - product.discountedPrice) / product.price) * 100,
    );

  const beenRated = (product: Product) => product.rating > 0;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 gap-y-8">
      {products.map((product) => (
        <div
          key={product.id}
          className="group flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md"
        >
          <Link href={`/products/${product.id}`} className="cursor-pointer">
            <div className="relative aspect-square w-full overflow-hidden bg-gray-100">
              <Image
                src={product.image.url}
                alt={product.image.alt}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
              {hasDiscount(product) && (
                <span className="absolute left-2 top-2 rounded-full bg-orange-600 px-2 py-1 text-xs font-bold text-white">
                  {discountPercentage(product)}% off
                </span>
              )}
              {beenRated(product) && (
                <span className="absolute right-2 top-2 rounded-full bg-black flex flex-row items-center p-2 text-xs font-bold text-white">
                  <Star
                    size={14}
                    className="fill-yellow-400 text-yellow-400 mr-1"
                  />
                  {product.rating.toFixed(1)}
                </span>
              )}
            </div>

            <div className="p-4 flex flex-1 flex-col gap-2">
              <h2 className="line-clamp-1 text-base font-semibold text-gray-900">
                {product.title}
              </h2>

              <div className="mt-auto flex items-baseline gap-2">
                {hasDiscount(product) ? (
                  <>
                    <span className="text-lg font-bold text-gray-900">
                      ${product.discountedPrice.toFixed(2)}
                    </span>
                    <span className="text-sm text-gray-400 line-through">
                      ${product.price.toFixed(2)}
                    </span>
                  </>
                ) : (
                  <span className="text-lg font-bold text-gray-900">
                    ${product.price.toFixed(2)}
                  </span>
                )}
              </div>
            </div>
          </Link>

          <button
            onClick={() => onAddToCart(product.id)}
            className="rounded-b-lg bg-green-800 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-green-700 font-bold"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};
