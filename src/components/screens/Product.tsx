"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; // useRouter to programmatically navigate
import ProductCard from "../ProductCard";

export default function Product() {
  const router = useRouter();

  const products = [
    {
      images: ['/products/p1.png', '/products/p2.jpg', '/products/p3.jpg'], // Array of product images
      name: 'Sample - Computers & Accessories',
      originalPrice: 99.00,
      salePrice: 49.00,
      onSale: true,
      stock: 5, // Number of items left
      vendor: 'Ella - Halothemes',
      availability: 'In Stock',
      type: 'Electronics',
      customersViewing: 283, // Example customer count
    },
    {
      images: ['/products/p2.jpg', '/products/p3.jpg', '/products/p4.jpg'], // Array of product images
      name: 'Sample - Computers & Accessories',
      originalPrice: 99.00,
      salePrice: 49.00,
      onSale: false,
      stock: 5, // Number of items left
      vendor: 'Ella - Halothemes',
      availability: 'In Stock',
      type: 'Electronics',
      customersViewing: 283, // Example customer count
    },
    {
      images: ['/products/p5.jpeg', '/products/p1.png', '/products/p2.jpg'], // Array of product images
      name: 'Sample - Computers & Accessories',
      originalPrice: 99.00,
      salePrice: 49.00,
      onSale: false,
      stock: 5, // Number of items left
      vendor: 'Ella - Halothemes',
      availability: 'In Stock',
      type: 'Electronics',
      customersViewing: 283, // Example customer count
    },
    {
      images: ['/products/p1.png', '/products/p2.jpg', '/products/p3.jpg'], // Array of product images
      name: 'Sample - Computers & Accessories',
      originalPrice: 99.00,
      salePrice: 49.00,
      onSale: true,
      stock: 5, // Number of items left
      vendor: 'Ella - Halothemes',
      availability: 'In Stock',
      type: 'Electronics',
      customersViewing: 283, // Example customer count
    },
    {
      images: ['/products/p1.png', '/products/p2.jpg', '/products/p3.jpg'], // Array of product images
      name: 'Sample - Computers & Accessories',
      originalPrice: 99.00,
      salePrice: 49.00,
      onSale: false,
      stock: 5, // Number of items left
      vendor: 'Ella - Halothemes',
      availability: 'In Stock',
      type: 'Electronics',
      customersViewing: 283, // Example customer count
    },
    {
      images: ['/products/p5.jpeg', '/products/p1.png', '/products/p2.jpg'], // Array of product images
      name: 'Sample - Computers & Accessories',
      originalPrice: 99.00,
      salePrice: 49.00,
      onSale: false,
      stock: 5, // Number of items left
      vendor: 'Ella - Halothemes',
      availability: 'In Stock',
      type: 'Electronics',
      customersViewing: 283, // Example customer count
    },
    {
      images: ['/products/p1.png', '/products/p2.jpg', '/products/p3.jpg'], // Array of product images
      name: 'Sample - Computers & Accessories',
      originalPrice: 99.00,
      salePrice: 49.00,
      onSale: true,
      stock: 5, // Number of items left
      vendor: 'Ella - Halothemes',
      availability: 'In Stock',
      type: 'Electronics',
      customersViewing: 283, // Example customer count
    },
    {
      images: ['/products/p1.png', '/products/p2.jpg', '/products/p3.jpg'], // Array of product images
      name: 'Sample - Computers & Accessories',
      originalPrice: 99.00,
      salePrice: 49.00,
      onSale: false,
      stock: 5, // Number of items left
      vendor: 'Ella - Halothemes',
      availability: 'In Stock',
      type: 'Electronics',
      customersViewing: 283, // Example customer count
    },
  ];

  // State to show only first 10 products initially
  const [visibleProducts, setVisibleProducts] = useState(12);

  console.log(setVisibleProducts)
  // Handle see more click
  const handleSeeMoreClick = () => {
    router.push("/products"); // Navigate to /products page
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-8 text-center font-[family-name:var(--font-montserrat-bold)]">
        Featured Products
      </h1>

      <div className="flex flex-row gap-x-4 justify-center  flex-wrap w-full gap-8">
        {products.slice(0, visibleProducts).map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>


      {visibleProducts < products.length && (
        <div className="flex justify-center mt-8">
          <button
            onClick={handleSeeMoreClick}
            className="bg-my-blue text-white px-6 py-3 rounded-lg hover:bg-my-blue/80 text-xs font-[family-name:var(--font-montserrat-regular)] transition-colors duration-300"
          >
            See More
          </button>
        </div>
      )}
    </div>
  );
}
