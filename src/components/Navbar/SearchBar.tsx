import React, { useState } from "react";
import { FiX } from "react-icons/fi";
import { Product } from "@/types";
import SearchProductCard from "../SearchProductCard";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

interface SearchBarProps {
  products: Product[];
  searchOpen: boolean;
  setSearchOpen: (open: boolean) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  products,
  searchOpen,
  setSearchOpen,
}) => {
  const trendingKeywords = ["dempus", "sample", "magnus", "lorem", "ipsum"];
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <>
      {searchOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40"
          onClick={() => setSearchOpen(false)} // Close menu when clicking outside
        ></div>
      )}
      <div
        className={`fixed top-0 left-0 h-full bg-white z-50 transition-transform transform duration-500 ease-in-out ${
          searchOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ width: "80%" }}
      >
        <div className="flex items-center justify-between px-4 py-4 border-b">
          <span className="text-xl font-bold">Search here</span>
          <button
            onClick={() => setSearchOpen(false)}
            className="text-2xl text-gray-600"
          >
            <FiX />
          </button>
        </div>

        <div className="px-2 my-2">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              console.log("form submitted");
            }}
          >
            <input
              type="text"
              onChange={(e) => {
                setSearchQuery(e.target.value);
              }}
              required
              value={searchQuery}
              placeholder="Search the store"
              className="w-full border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none"
            />
          </form>
        </div>
        {/* Products */}
        <div className="px-4 py-3 border-t  h-[calc(100vh-10em)] w-full overflow-y-auto overflow-x-hidden">
          <div className="masonry">
            {products.length > 0 ? (
              products
                .filter((product) =>
                  product.name.toLowerCase().includes(searchQuery.toLowerCase())
                )
                .map((product, index) => (
                  <div key={index} className="w-[120px] masonry-item">
                    <SearchProductCard product={product} />
                  </div>
                ))
            ) : (
              <p>No products found</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
