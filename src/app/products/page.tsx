"use client";

import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import QuickAddModal from "@/components/Modal/QuickAddModal";
import type { Product } from "@/types";
import ProductData from "@/json/ProductData";


export default function Product() {
  const products = ProductData(); 
  const [visibleProducts, setVisibleProducts] = useState(12);

  // State to track the selected product and modal visibility
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isQuickAddModalOpen, setIsQuickAddModalOpen] = useState(false);

  // Handle Quick Add button click
  const handleQuickAddClick = (product: Product) => {
    setSelectedProduct(product);
    setIsQuickAddModalOpen(true); // Open Quick Add Modal
  };


  // Handle see more click
  const handleSeeMoreClick = () => {
    setVisibleProducts((prev) => prev + 12);
  };

  return (
    <div className="container mx-auto">
      <h2 className="text-sm md:text-2xl font-bold mb-6">Our products</h2>

      {/* Responsive Grid Layout: 2 columns for mobile, 3 for tablets, 4 for desktops */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-8 w-full justify-center">
        {products.slice(0, visibleProducts).map((product, index) => (
          <ProductCard
            key={index}
            product={product}
            handleQuickAddClick={handleQuickAddClick}
                     />
        ))}
      </div>

      {/* See More Button */}
      {visibleProducts < products.length && (
        <div className="flex justify-center mt-8">
          <button
            onClick={handleSeeMoreClick}
            className="bg-my-blue text-white px-6 py-3 rounded-lg hover:bg-my-blue/80 text-xs font-medium transition-colors duration-300"
          >
            See More
          </button>
        </div>
      )}

    
    {/* Quick Add Modal */}
      {selectedProduct && (
        <QuickAddModal
          isOpen={isQuickAddModalOpen}
          onClose={() => setIsQuickAddModalOpen(false)}
          product={selectedProduct}
        />
      )}
    </div>
  );
}
