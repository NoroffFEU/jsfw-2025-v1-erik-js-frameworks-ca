'use client';

import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import { useState } from 'react';


export function Header() {
const searchParams = useSearchParams();
const pathname = usePathname();
const router = useRouter();
const [search, setSearch] = useState(searchParams.get('search') || '');


const handleSearchChange = (value: string) => {
    setSearch(value); 

    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set('search', value);
    } else {
      params.delete('search'); 
    }

    router.replace(`${pathname}?${params.toString()}`);
  console.log('parm value changed:', params.toString());
  };

  return (
    <header className="py-4">
      <div className="container mx-auto justify-between flex items-center">
        <h1 className="text-2xl font-bold">FrameShop</h1>
        <input
          type="text"
          value={search}
          onChange={(e) => handleSearchChange(e.target.value)}
          placeholder="Search products..."
          className="mt-4 p-2 rounded text-black"
        />
      </div>
    </header>
  );
}
