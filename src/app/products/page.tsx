"use client";

import ProductCard from "@/components/ProductCard";

export default function ProductsPage() {
 
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
    

  return (
    <div className="container mx-auto py-8 bg-gray-50">
      <h1 className="text-4xl text-gray-800 font-[family-name:var(--font-montserrat-bold)] mb-8 text-center">
        All Products
      </h1>

      <div className="flex flex-wrap flex-row items-center justify-center gap-6">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
}
