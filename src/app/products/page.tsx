'use client';

import { useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { useProducts } from '../../features/products/hooks'; 
import { ProductCards } from '../../features/products/components/ProductCards';
import { ProductFilter } from '../../features/products/components/ProductFilter';
import { GetFilterList } from '../../features/products/utils';
import { useCartStore } from '../../features/cart/store';


export default function ProductsPage() {
  const { data, isLoading, error } = useProducts();
  const searchParams = useSearchParams();
  const search = searchParams.get('search') || '';
  const { filterList } = GetFilterList(data ?? []);
const [selectedTags, setSelectedTags] = useState<string[]>([]);
const addItem = useCartStore((state) => state.addItem);

  const handleTagSelect = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
    console.log('Selected Tags:', selectedTags);
  };


  if (isLoading)
    return <p className="text-center mt-8">Getting your products...</p>;

  if (error)
    return <p className="text-center mt-8">Sorry! We got an error while loading your products.</p>;

  const filteredProducts = (data ?? []).filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

const filteredByTags = filteredProducts.filter((product) =>
  selectedTags.length === 0 || selectedTags.some((tag) => product.tags.includes(tag))
);


 if (filteredByTags.length === 0) {
  return <p className="text-center mt-8">Sorry. Empty. </p>;
}
 return (
  <>
    <ProductFilter tags={filterList} selectedTags={selectedTags} onTagSelect={handleTagSelect} onClearFilters={() => setSelectedTags([])} />
    <ProductCards products={filteredByTags} onAddToCart={addItem} />
  </>
  );
}