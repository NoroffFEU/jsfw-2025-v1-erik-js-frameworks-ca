'use client';

import { useSearchParams } from 'next/navigation';
import { useProducts } from '../../features/products/hooks'; 
import { ProductCards } from '../../features/products/components/products/ProductCards';

export default function ProductsPage() {
  const { data, isLoading, error } = useProducts();
  const searchParams = useSearchParams();
  const search = searchParams.get('search') || '';

  if (isLoading)
    return <p className="text-center mt-8">Loading products...</p>;

  if (error)
    return <p className="text-center mt-8">Error loading products.</p>;

  const filteredProducts = (data ?? []).filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  if (filteredProducts.length === 0) {
    return <p className="text-center mt-8">No products found.</p>;
  }

  return <ProductCards products={filteredProducts} />;
}