"use client";

import { useEffect, useState } from 'react';
import Filter from './components/Filter'
import ProductList from './components/product/ProductList';
import axios from 'axios';
import { sortByData } from './constant/data';

export default function Home() {

  const [loadingProduct, setLoadingProduct] = useState(true);
  const [loadingCategory, setLoadingCategory] = useState(true);
  const [productList, setProductList] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortBy, setSortBy] = useState("");

  useEffect(() => {
    getProductCategories();
    getProductList();
  }, []);

  useEffect(() => {
    getUpdateProductsByCategory();
  }, [selectedCategory]);

  useEffect(() => {

    let newArr = [];

    if(sortBy.code == "asc"){
      newArr = productList.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    } else {
      newArr = productList.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
    }

    setProductList(newArr)

  }, [sortBy]);

  const getUpdateProductsByCategory = () => {

    setLoadingProduct(true)

    axios.get(`https://dummyjson.com/products/category/${selectedCategory}?limit=24&`)
      .then((response) => {
        setProductList(response.data.products)
        setLoadingProduct(false)
      }).catch(error => {
        console.log(error);
      })

  }


  const getProductCategories = () => {

    axios.get("https://dummyjson.com/products/categories")
      .then(response => {
        const res = response.data;
        setCategories(res);
        setLoadingCategory(false)
      }).catch(error => {
        console.log(error);
      })

  }


  const getProductList = async () => {
    axios.get("https://dummyjson.com/products?limit=24")
      .then((response) => {
        setProductList(response.data.products)
        setLoadingProduct(false)
      }).catch(error => {
        console.log(error);
      })
  }


  return (
    <main className="">      
      <Filter loadingCategory={loadingCategory} selectedCategory={selectedCategory} categories={categories} setSelectedCategory={setSelectedCategory} sortBy={sortBy} setSortBy={setSortBy} />
      <ProductList loadingProduct={loadingProduct} productList={productList} />
    </main>
  )
}
