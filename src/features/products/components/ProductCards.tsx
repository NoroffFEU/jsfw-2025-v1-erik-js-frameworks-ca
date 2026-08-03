"use client";

import { Product } from "../types";

interface ProductCardsProps {
  products: Product[];
  onAddToCart: (productId: string) => void;
}

export const ProductCards = ({ products, onAddToCart }: ProductCardsProps) => {
  const checkDiscount = (product: Product) => {
    if (product.discountedPrice === product.price) {
      return (
        <p className="text-gray-600">Price: ${product.price.toFixed(2)}</p>
      );
    } else {
      const discountPercentage =
        ((product.price - product.discountedPrice) / product.price) * 100;

      return (
        <div>
          <p className="text-gray-600 line-through">
            ${product.price.toFixed(2)}
          </p>
          <p className="text-green-600">
            ${product.discountedPrice.toFixed(2)} (
            {discountPercentage.toFixed(0)}% off)
          </p>
        </div>
      );
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map((product) => (
        <div key={product.id} className="border p-4 rounded shadow">
          <h2 className="text-lg font-bold">{product.title}</h2>
          <p className="text-gray-600">{product.description}</p>
          {checkDiscount(product)}
          <button
            onClick={() => onAddToCart(product.id)}
            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};
