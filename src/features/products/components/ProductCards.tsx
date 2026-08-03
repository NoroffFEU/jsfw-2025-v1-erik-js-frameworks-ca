'use client';

import { Product } from '../types';

interface ProductCardsProps {
  products: Product[];
  onAddToCart: (productId: string) => void;
}

export const ProductCards = ({ products, onAddToCart }: ProductCardsProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map((product) => (
        <div key={product.id} className="border p-4 rounded shadow">
          <h2 className="text-lg font-bold">{product.title}</h2>
          <p className="text-gray-600">{product.description}</p>
          <p className="text-gray-800 font-semibold">${product.price}</p>
          <button onClick={() => onAddToCart(product.id)} className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};