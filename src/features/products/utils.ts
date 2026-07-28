'use client';
import type { Product } from './types';
import { useProducts } from './hooks';
import {  useSearchParams } from 'next/navigation';

export function useFilteredProducts() {
  const { data, isLoading, error } = useProducts();
  const searchParams = useSearchParams();
  const search = searchParams.get('search') || '';

  const filteredProducts = (data ?? []).filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return { filteredProducts, isLoading, error };
}   

export function GetFilterList(data: Product[] ) {
  const filterList = (data ?? []).reduce((acc: string[], product) => {
    product.tags.forEach((tag) => {
      if (!acc.includes(tag)) {
        acc.push(tag);
      }
    });
    return acc;
  }, []);

  return { filterList };
}

