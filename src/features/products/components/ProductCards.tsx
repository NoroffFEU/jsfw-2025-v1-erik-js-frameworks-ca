'use client';

import { Product } from '../types';

interface ProductCardsProps {
  products: Product[];
}

export const ProductCards = ({ products }: ProductCardsProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map((product) => (
        <div key={product.id} className="border p-4 rounded shadow">
          <h2 className="text-lg font-bold">{product.title}</h2>
          <p className="text-gray-600">{product.description}</p>
          <p className="text-gray-800 font-semibold">${product.price}</p>
        </div>
      ))}
    </div>
  );
};