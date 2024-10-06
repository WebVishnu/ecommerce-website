import React from 'react';
import { FiX } from 'react-icons/fi';
import { Product } from '@/types';
import SearchProductCard from '../SearchProductCard';

interface SearchBarProps {
  products: Product[];
  searchOpen: boolean;
  setSearchOpen: (open: boolean) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ products, searchOpen, setSearchOpen }) => {

  const trendingKeywords = ['dempus', 'sample', 'magnus', 'lorem', 'ipsum'];

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
          searchOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{ width: '80%' }}
      >
        <div className="flex items-center justify-between px-4 py-4 border-b">
          <span className="text-xl font-bold">Products</span>
          <button
            onClick={() => setSearchOpen(false)}
            className="text-2xl text-gray-600"
          >
            <FiX />
          </button>
        </div>

        {/* Trending Section */}
        <div className="px-4 py-3">
          <h2 className="text-sm font-bold mb-2">TRENDING NOW</h2>
          <div className="flex gap-2 flex-wrap">
            {trendingKeywords.map((keyword, index) => (
              <button
                key={index}
                className="bg-gray-100 px-4 py-2 rounded-full text-xs"
              >
                {keyword}
              </button>
            ))}
          </div>
        </div>

        {/* Products */}
        <div className="px-4 py-3 border-t">
          <h2 className="text-sm font-bold mb-2">PRODUCTS</h2>
          <div className="overflow-x-scroll px-2">
            <div className="flex space-x-4" style={{ minWidth: '200%' }}>
              {products.length > 0 ? (
                products.map((product, index) => (
                  <div key={index} className="w-1/3">
                    <SearchProductCard
                      product={product}
                    
                    />
                  </div>
                ))
              ) : (
                <p>No products found</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
