'use client';

import { useProducts } from '../../hooks';


export const ProductList = () => {
  const { data: products, isLoading, error } = useProducts();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading products</div>;

  return (
    <div>
      {products?.map((product) => (
        <div key={product.id}>{product.title}</div>
      ))}
    </div>
  );
};