import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FiHeart } from "react-icons/fi";
import QuickViewModal from "./Modal/QuickViewModal";
import { FaEye } from "react-icons/fa";
import QuickAddModal from "./Modal/QuickAddModal";
import { Product } from "@/types";

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const { images, name, originalPrice, salePrice, onSale } = product;
  const [showLikeButton, setShowLikeButton] = useState(false);
  const [isLiked, setIsLiked] = useState(false); // New state for heart button
  const [isImageHovered, setIsImageHovered] = useState(false); // Track if the image is being hovered
  const [isModalOpen, setIsModalOpen] = useState(false); // Manage QuickView modal state
  const [isQuickAddModalOpen, setIsQuickAddModalOpen] = useState(false); // Manage QuickAdd modal state

  const handleQuickAddClick = () => {
    setIsQuickAddModalOpen(true); // Open Quick Add modal
  };

  const handleLikeButtonClick = () => {
    setIsLiked(!isLiked); // Toggle like state
  };

  const handleQuickViewClick = () => {
    setIsModalOpen(true); // Open Quick View modal
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Close Quick View modal
  };

  // Disable background scroll when modal is open
  useEffect(() => {
    if (isModalOpen || isQuickAddModalOpen) {
      document.body.classList.add("no-scroll"); // Add class to disable scrolling
    } else {
      document.body.classList.remove("no-scroll"); // Remove class to enable scrolling
    }

    return () => {
      document.body.classList.remove("no-scroll"); // Cleanup in case of component unmount
    };
  }, [isModalOpen, isQuickAddModalOpen]);

  return (
    <div
      className="relative border-2 rounded-lg p-4 sm:p-6 transition-transform duration-700 overflow-hidden group"
      onMouseEnter={() => setShowLikeButton(true)} // Show heart button when hovering over the card
      onMouseLeave={() => setShowLikeButton(false)} // Hide heart button when leaving the card
    >
      {/* Sale Badge */}
      {onSale && (
        <span className="absolute top-2 left-2 bg-red-100 z-10 text-red-500 font-light italic px-2 py-1 rounded">
          Sale
        </span>
      )}

      {/* Image with Scale Animation and Hover Image Swap */}
      <div
        className="overflow-hidden rounded-lg relative"
        onMouseEnter={() => setIsImageHovered(true)} // Trigger hover on the image
        onMouseLeave={() => setIsImageHovered(false)} // Reset hover state when mouse leaves the image
      >
        <Image
          src={isImageHovered && images.length > 1 ? images[1] : images[0]} // Swap image on hover
          alt={name}
          width={1000}
          height={1000}
          className="w-full h-36 sm:h-64 object-cover transform transition-transform duration-1000 hover:scale-105"
        />

        {/* Quick View Button (visible on image hover, centered on image for desktop) */}
        <button
          onClick={handleQuickViewClick}
          className="hidden md:flex absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-100 text-sm text-gray-900 px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 group-hover:top-1/2 transition-all duration-500 ease-out"
        >
          Quick View
        </button>
      </div>

      {/* Product Name with Hover Effect */}
      <h3 className="mt-4 text-md sm:text-md cursor-pointer hover:font-bold font-medium transition-colors duration-300 hover:text-my-blue text-center">
        {name}
      </h3>

      {/* Pricing */}
      <div className="flex items-center justify-center mt-2">
        {salePrice && (
          <>
            <span className="text-gray-500 line-through mr-2">
              ₹{originalPrice}
            </span>
            <span className="text-red-500 font-bold">₹{salePrice} / Piece</span>
          </>
        )}
        {!salePrice && (
          <span className="text-gray-500 mr-2">₹{originalPrice} / Piece</span>
        )}
      </div>

      {/* Quick Add Button and Heart Button */}
      <div className="flex flex-row w-full mt-4 items-center justify-between">
        <button
          className="w-[70%] bg-white text-sm md:text-base text-my-blue font-medium hover:text-white py-2 rounded-full hover:bg-my-blue transition-colors duration-700 border-[1px] border-my-blue"
          onClick={handleQuickAddClick}
        >
          Buy now
        </button>

        {/* Animated Like Button */}
        <button
          className={`${
            isLiked ? "bg-blue-100" : "bg-white"
          } text-gray-500 hidden md:flex  border border-gray-300 rounded-full p-2 shadow transition-colors duration-300`}
          onClick={handleLikeButtonClick}
        >
          <FiHeart size={20} />
        </button>

        {/* Mobile Like Button (always visible) */}
        <div className="w-[30%] md:hidden flex justify-end">
          <button
            className={`${
              isLiked ? "bg-blue-100" : "bg-white"
            } text-gray-500 border border-gray-300 rounded-full p-2 shadow transition-colors duration-300`}
            onClick={handleLikeButtonClick}
          >
            <FiHeart size={16} />
          </button>
        </div>
      </div>

      {/* Quick View Button for Mobile */}
      <button
        className="text-black md:hidden flex absolute top-8 right-8"
        onClick={handleQuickViewClick}
      >
        <FaEye size={24} />
      </button>

      {/* Quick View Modal */}
      <QuickViewModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        product={product}
      />

      {/* Quick Add Modal */}
      <QuickAddModal
        isOpen={isQuickAddModalOpen}
        onClose={() => setIsQuickAddModalOpen(false)}
        product={product}
      />
    </div>
  );
};

export default ProductCard;
