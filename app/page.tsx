'use client'

import ProductCard from "@/components/ProductCard";
import ProductModal from "@/components/ProductModal";
import { useEffect, useState } from "react";

interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
  description: string;
}

export default function Home() {
  const [products, setProducts] = useState([]);
  const [searchProduct, setSearchProduct] = useState('')
  const [selectProduct, setSelectProduct] = useState<Product | null>(null)


  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('api/products');
      const data = await response.json();
      setProducts(data);
    }
    fetchProducts();
  }, [])

  const filterProducts = products.filter((products: Product) =>
    products.title.toLocaleLowerCase().includes(searchProduct.toLowerCase())
  );

  const handleProductOpen = (product: Product) => {
    setSelectProduct(product);
  };

  const handleProductClose = () => {
    setSelectProduct(null);
  }


  return (
    <main className="container mx-auto mt-4">
      <div className="relative">
        <input
          type="search"
          value={searchProduct}
          onChange={(e) => setSearchProduct(e.target.value)}
          placeholder="Поиск товара..."
          className="w-full px-4 py-4 pl-12 rounded-full border-2 border-violet-600 focus:ring-4 focus:outline-none focus:ring-violet-400 transition-all duration-300"
        />
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="absolute top-1/2 left-4 -translate-y-1/2 w-5 h-5 ">
          <path fillRule="evenodd" clipRule="evenodd" d="M17.0392 15.6244C18.2714 14.084 19.0082 12.1301 19.0082 10.0041C19.0082 5.03127 14.9769 1 10.0041 1C5.03127 1 1 5.03127 1 10.0041C1 14.9769 5.03127 19.0082 10.0041 19.0082C12.1301 19.0082 14.084 18.2714 15.6244 17.0392L21.2921 22.707C21.6828 23.0977 22.3163 23.0977 22.707 22.707C23.0977 22.3163 23.0977 21.6828 22.707 21.2921L17.0392 15.6244ZM10.0041 17.0173C6.1308 17.0173 2.99087 13.8774 2.99087 10.0041C2.99087 6.1308 6.1308 2.99087 10.0041 2.99087C13.8774 2.99087 17.0173 6.1308 17.0173 10.0041C17.0173 13.8774 13.8774 17.0173 10.0041 17.0173Z" fill="#ffffff" />
        </svg>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-8">
        {filterProducts.map((product: Product) => (
          <ProductCard
            key={product.id}
            product={product}
            onClick={() => handleProductOpen(product)}
          />
        ))}
      </div>
      {selectProduct && (
        <ProductModal
          product={selectProduct}
          onClose={handleProductClose}
        />
      )}
    </main>
  );
}
