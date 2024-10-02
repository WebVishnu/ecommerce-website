"use client";

import ProductCard from "@/components/ProductCard";

export default function ProductsPage() {
 
  
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
