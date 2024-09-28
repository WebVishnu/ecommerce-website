"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; // useRouter to programmatically navigate
import ProductCard from "../ProductCard";

export default function Product() {
  const router = useRouter();

  const products = [
    {
      name: "(Product 1) Sample - Clothing And Accessory Boutiques For Sale",
      brand: "SODLING",
      price: 86.0,
      image: "/products/p1.png", // Replace with actual image path
      badge: "Bundle",
    },
    {
      name: "(Product 2) Sample - Clothing And Accessory Boutiques For Sale",
      brand: "TOMORROW",
      price: 16.99,
      oldPrice: 22.99,
      image: "/products/p2.jpg", // Replace with actual image path
      sale: true,
      discount: 40,
    },
    {
      name: "(Product 3) Sample - Clothing And Accessory Boutiques For Sale",
      brand: "PAUL SMITH",
      price: 86.0,
      image: "/products/p3.jpg", // Replace with actual image path
    },
    {
      name: "(Product 4) Sample - Clothing And Accessory Boutiques For Sale",
      brand: "MANGO",
      price: 59.0,
      oldPrice: 86.0,
      image: "/products/p4.jpg", // Replace with actual image path
      sale: true,
      discount: 40,
    },
    {
      name: "(Product 5) Sample - Clothing And Accessory Boutiques For Sale",
      brand: "MANGO",
      price: 59.0,
      oldPrice: 86.0,
      image: "/products/p5.jpeg", // Replace with actual image path
      sale: true,
      discount: 40,
    },
    {
      name: "(Product 6) Sample - Clothing And Accessory Boutiques For Sale",
      brand: "BRAND X",
      price: 99.0,
      image: "/products/p4.jpg", // Replace with actual image path
    },
    {
      name: "(Product 1) Sample - Clothing And Accessory Boutiques For Sale",
      brand: "SODLING",
      price: 86.0,
      image: "/products/p1.png", // Replace with actual image path
      badge: "Bundle",
    },
    {
      name: "(Product 2) Sample - Clothing And Accessory Boutiques For Sale",
      brand: "TOMORROW",
      price: 16.99,
      oldPrice: 22.99,
      image: "/products/p2.jpg", // Replace with actual image path
      sale: true,
      discount: 40,
    },
    {
      name: "(Product 3) Sample - Clothing And Accessory Boutiques For Sale",
      brand: "PAUL SMITH",
      price: 86.0,
      image: "/products/p3.jpg", // Replace with actual image path
    },
    {
      name: "(Product 4) Sample - Clothing And Accessory Boutiques For Sale",
      brand: "MANGO",
      price: 59.0,
      oldPrice: 86.0,
      image: "/products/p4.jpg", // Replace with actual image path
      sale: true,
      discount: 40,
    },
    {
      name: "(Product 1) Sample - Clothing And Accessory Boutiques For Sale",
      brand: "SODLING",
      price: 86.0,
      image: "/products/p1.png", // Replace with actual image path
      badge: "Bundle",
    },
    {
      name: "(Product 2) Sample - Clothing And Accessory Boutiques For Sale",
      brand: "TOMORROW",
      price: 16.99,
      oldPrice: 22.99,
      image: "/products/p2.jpg", // Replace with actual image path
      sale: true,
      discount: 40,
    },
    {
      name: "(Product 3) Sample - Clothing And Accessory Boutiques For Sale",
      brand: "PAUL SMITH",
      price: 86.0,
      image: "/products/p3.jpg", // Replace with actual image path
    },
    {
      name: "(Product 4) Sample - Clothing And Accessory Boutiques For Sale",
      brand: "MANGO",
      price: 59.0,
      oldPrice: 86.0,
      image: "/products/p4.jpg", // Replace with actual image path
      sale: true,
      discount: 40,
    },
    {
      name: "(Product 1) Sample - Clothing And Accessory Boutiques For Sale",
      brand: "SODLING",
      price: 86.0,
      image: "/products/p1.png", // Replace with actual image path
      badge: "Bundle",
    },
    {
      name: "(Product 2) Sample - Clothing And Accessory Boutiques For Sale",
      brand: "TOMORROW",
      price: 16.99,
      oldPrice: 22.99,
      image: "/products/p2.jpg", // Replace with actual image path
      sale: true,
      discount: 40,
    },
    {
      name: "(Product 3) Sample - Clothing And Accessory Boutiques For Sale",
      brand: "PAUL SMITH",
      price: 86.0,
      image: "/products/p3.jpg", // Replace with actual image path
    },
    {
      name: "(Product 4) Sample - Clothing And Accessory Boutiques For Sale",
      brand: "MANGO",
      price: 59.0,
      oldPrice: 86.0,
      image: "/products/p4.jpg", // Replace with actual image path
      sale: true,
      discount: 40,
    },
    {
      name: "(Product 1) Sample - Clothing And Accessory Boutiques For Sale",
      brand: "SODLING",
      price: 86.0,
      image: "/products/p1.png", // Replace with actual image path
      badge: "Bundle",
    },
    {
      name: "(Product 2) Sample - Clothing And Accessory Boutiques For Sale",
      brand: "TOMORROW",
      price: 16.99,
      oldPrice: 22.99,
      image: "/products/p2.jpg", // Replace with actual image path
      sale: true,
      discount: 40,
    },
    {
      name: "(Product 3) Sample - Clothing And Accessory Boutiques For Sale",
      brand: "PAUL SMITH",
      price: 86.0,
      image: "/products/p3.jpg", // Replace with actual image path
    },
    {
      name: "(Product 4) Sample - Clothing And Accessory Boutiques For Sale",
      brand: "MANGO",
      price: 59.0,
      oldPrice: 86.0,
      image: "/products/p4.jpg", // Replace with actual image path
      sale: true,
      discount: 40,
    },
    {
      name: "(Product 1) Sample - Clothing And Accessory Boutiques For Sale",
      brand: "SODLING",
      price: 86.0,
      image: "/products/p1.png", // Replace with actual image path
      badge: "Bundle",
    },
    {
      name: "(Product 2) Sample - Clothing And Accessory Boutiques For Sale",
      brand: "TOMORROW",
      price: 16.99,
      oldPrice: 22.99,
      image: "/products/p2.jpg", // Replace with actual image path
      sale: true,
      discount: 40,
    },
    {
      name: "(Product 3) Sample - Clothing And Accessory Boutiques For Sale",
      brand: "PAUL SMITH",
      price: 86.0,
      image: "/products/p3.jpg", // Replace with actual image path
    },
    {
      name: "(Product 4) Sample - Clothing And Accessory Boutiques For Sale",
      brand: "MANGO",
      price: 59.0,
      oldPrice: 86.0,
      image: "/products/p4.jpg", // Replace with actual image path
      sale: true,
      discount: 40,
    },
    // Add more products up to 20-30 here...
  ];

  // State to show only first 10 products initially
  const [visibleProducts, setVisibleProducts] = useState(12);

  // Handle see more click
  const handleSeeMoreClick = () => {
    router.push("/products"); // Navigate to /products page
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center font-[family-name:var(--font-montserrat-bold)]">
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
