"use client";

import Image from "next/image";
import { useState } from "react";

interface Product {
  image: string;
  name: string;
  badge?: string;
  sale?: boolean;
  discount?: number;
  brand: string;
  oldPrice?: number;
  price: number;
}

const ProductCard = ({ product }: { product: Product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [quantity, setQuantity] = useState(0);

  const addToCart = () => {
    setQuantity(1);
  };

  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 0));
  };

  return (
    <div
      className="bg-white border border-gray-200 rounded-md overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 ease-in-out relative font-[family-name:var(--font-montserrat-regular)] w-56"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image and Badges */}
      <div className="relative">
        <Image
          src={product.image}
          alt={product.name}
          width={500}
          height={500}
          className="w-full h-44 object-cover" // Slightly larger height for image
        />

        {/* Product Badge */}
        {product.badge && (
          <span className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded font-[family-name:var(--font-montserrat-bold)]">
            {product.badge}
          </span>
        )}

        {/* Sale Badge */}
        {product.sale && (
          <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded font-[family-name:var(--font-montserrat-bold)]">
            {product.discount}% OFF
          </span>
        )}
      </div>

      {/* Product Details */}
      <div className="p-4 flex flex-col justify-between h-full">
        <div>
          <h3 className="text-sm font-bold text-gray-900 font-[family-name:var(--font-montserrat-bold)] truncate">
            {product.brand}
          </h3>
          <p className="text-xs text-gray-500 mb-3 truncate font-[family-name:var(--font-montserrat-regular)]">
            {product.name}
          </p>

          <div className="flex items-center justify-between mb-2">
            {product.oldPrice && (
              <span className="text-xs line-through text-gray-400">
                ₹{product.oldPrice}
              </span>
            )}
            <span className="text-lg font-semibold text-red-600 font-[family-name:var(--font-montserrat-bold)]">
              ₹{product.price}
            </span>
          </div>
        </div>
      </div>

      {/* Add to Cart and Quantity Adjustment */}
      {quantity === 0 ? (
        <button
          className={`absolute bottom-0 left-0 w-full py-3 bg-my-blue text-white text-xs font-bold rounded-none transition-transform transform ${
            isHovered ? "translate-y-0" : "translate-y-full"
          } duration-300 ease-in-out font-[family-name:var(--font-montserrat-bold)]`}
          onClick={addToCart}
        >
          Add to Cart
        </button>
      ) : (
        <div className="absolute bottom-0 left-0 w-full  bg-my-blue text-white text-xs font-bold rounded-none flex justify-center items-center space-x-4 py-2">
          <button
            onClick={decreaseQuantity}
            className="text-white px-3 py-1    transition duration-200 ease-in-out"
          >
            -
          </button>
          <span className="text-sm font-bold">{quantity}</span>
          <button
            onClick={increaseQuantity}
            className="text-white px-3 py-1    transition duration-200 ease-in-out"
          >
            +
          </button>
        </div>
      )}

      {/* Like Button */}
      <button
        title="Like"
        className={`absolute top-10 right-0 transform -translate-y-1/2 bg-white border border-gray-300 hover:bg-gray-100 text-gray-600 p-2 rounded-full shadow-sm transition-transform duration-300 ease-in-out ${
          isHovered ? "-translate-x-2" : "translate-x-full"
        }`}
      >
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      </button>

      {/* Compare Checkbox */}
      <div className="flex items-center p-3 border-t border-gray-100">
        <input
          id="compare"
          type="checkbox"
          className="w-3 h-3 text-black border-gray-300 rounded"
        />
        <label
          htmlFor="compare"
          className="ml-2 text-xs text-gray-600 font-[family-name:var(--font-montserrat-regular)]"
        >
          Compare
        </label>
      </div>
    </div>
  );
};

export default ProductCard;
