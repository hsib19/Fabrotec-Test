"use client";

import Filter from './components/Filter'
import ProductList from './components/product/ProductList';

export default function Home() {
  return (
    <main className="">      
      <Filter />
      <ProductList />
    </main>
  )
}
