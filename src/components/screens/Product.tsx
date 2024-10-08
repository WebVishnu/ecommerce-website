"use client";

import { useState } from "react";
import ProductCard from "../ProductCard";
import QuickAddModal from "../Modal/QuickAddModal"; // Import Quick Add Modal
import type { Product } from "@/types";
import ProductData from "@/json/ProductData";

export default function Product() {
  const products = ProductData(); // Get product data from JSON

  // State to show only first 12 products initially
  const [visibleProducts, setVisibleProducts] = useState(12);
  const [loadingMore, setLoadingMore] = useState(false); // State to manage loading spinner when showing more products

  // State to manage selected product and modals
  const [modalState, setModalState] = useState<{
    selectedProduct: Product | null;
    isQuickAddModalOpen: boolean;
  }>({
    selectedProduct: null,
    isQuickAddModalOpen: false,
  });

  // Handle Quick Add button click
  const handleQuickAddClick = (product: Product) => {
    setModalState({
      ...modalState,
      selectedProduct: product,
      isQuickAddModalOpen: true,
    });
  };

  // Handle see more click with loading spinner
  const handleSeeMoreClick = () => {
    setLoadingMore(true); // Start loading spinner
    setTimeout(() => {
      setVisibleProducts((prev) => prev + 12); // Show 12 more products after delay
      setLoadingMore(false); // Stop loading spinner
    }, 1000); // Simulate a network request delay
  };

  return (
    <div className="container mx-auto">
      <h2 className="text-center text-lg md:text-2xl font-bold mb-6">Our Products</h2>

      {/* Responsive Grid Layout */}
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
          {loadingMore ? (
            <div className="flex items-center space-x-2">
              <svg
                className="animate-spin h-5 w-5 text-primary"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                ></path>
              </svg>
              <span className="text-sm text-primary">Loading...</span>
            </div>
          ) : (
            <button
              onClick={handleSeeMoreClick}
              className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/80 text-xs font-medium transition-colors duration-300"
            >
              See More
            </button>
          )}
        </div>
      )}

     
      {/* Quick Add Modal */}
      {modalState.selectedProduct && (
        <QuickAddModal
          isOpen={modalState.isQuickAddModalOpen}
          onClose={() =>
            setModalState({ ...modalState, isQuickAddModalOpen: false })
          }
          product={modalState.selectedProduct}
        />
      )}
    </div>
  );
}
