import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { FiHeart } from 'react-icons/fi';
import QuickViewModal from './Modal/QuickViewModal';
import { FaEye } from 'react-icons/fa';
import QuickAddModal from './Modal/QuickAddModal';
import { Product } from '@/types';


const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const { images, name, originalPrice, salePrice, onSale } = product;
  const [showLikeButton, setShowLikeButton] = useState(false);
  const [isLiked, setIsLiked] = useState(false); // New state for heart button
  const [isImageHovered, setIsImageHovered] = useState(false); // Track if the image is being hovered
  const [isModalOpen, setIsModalOpen] = useState(false); // Manage modal state
  const [isModalOpen1, setIsModalOpen1] = useState(false); // Manage modal state

  const handleQuickAddClick = () => {
    setIsModalOpen1(true); // Open the modal
  };

  const handleLikeButtonClick = () => {
    setIsLiked(!isLiked); // Toggle the like state
  };

  const handleQuickViewClick = () => {
    setIsModalOpen(true); // Open the modal
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  // Disable background scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add('no-scroll'); // Add class to disable scrolling
    } else {
      document.body.classList.remove('no-scroll'); // Remove class to enable scrolling
    }

    return () => {
      document.body.classList.remove('no-scroll'); // Cleanup in case of component unmount
    };
  }, [isModalOpen]);

  return (
    <div
      className="relative border rounded-lg p-6 shadow-lg transition-transform duration-700 overflow-hidden group"
      onMouseEnter={() => {
        setShowLikeButton(true); // Show heart button when hovering over the card
      }}
      onMouseLeave={() => {
        setShowLikeButton(false); // Hide heart button when leaving the card
      }}
    >
      {/* Sale Badge */}
      <div className="relative">
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
            src={isImageHovered ? images[1] : images[0]} // Swap image on hover
            alt={name}
            width={1000}
            height={1000}
            className="w-full h-80 transform transition-transform duration-1000 object-cover hover:scale-105"
          />

          {/* Quick View Button (visible on image hover, centered on image) */}
          <button
            onClick={handleQuickViewClick}
            className="absolute md:flex hidden top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-100 text-sm text-gray-900 px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 group-hover:top-1/2 transition-all duration-500 ease-out"
          >
            Quick View
          </button>
        </div>
      </div>

      {/* Product Name with Hover Effect */}
      <h3 className="mt-4 text-lg font-medium transition-colors duration-300 hover:text-my-blue">
        {name}
      </h3>

      {/* Pricing */}
      <div className="flex items-center mt-2">
        <span className="text-gray-500 line-through mr-2">₹{originalPrice}</span>
        <span className="text-red-500 font-bold">₹{salePrice}</span>
      </div>

      {/* Quick Add Button and Heart Button */}
      <div className="flex flex-row w-full mt-4 items-center justify-between">
        <button className="w-[80%] bg-white text-my-blue font-medium hover:text-white py-2 rounded-full hover:bg-my-blue transition-colors duration-700 border-[1px] border-my-blue"
                  onClick={handleQuickAddClick}
>
          Quick Add
        </button>

        {/* Animated Like Button */}
        <div
          className={`w-[20%] hidden md:flex justify-end transition-transform duration-500 ${
            showLikeButton ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <button
            className={`${
              isLiked ? 'bg-blue-100' : 'bg-white'
            } text-gray-500 border border-gray-300 rounded-full p-2 shadow transition-colors duration-300`}
            onClick={handleLikeButtonClick}
          >
            <FiHeart size={20} />
          </button>
        </div>

        <div className="w-[20%] md:hidden flex justify-end">
          <button
            className={`${
              isLiked ? 'bg-blue-100' : 'bg-white'
            } text-gray-500 border border-gray-300 rounded-full p-2 shadow transition-colors duration-300`}
            onClick={handleLikeButtonClick}
          >
            <FiHeart size={20} />
          </button>
        </div>
      </div>

      {/* Quick View Button for Mobile */}
      <button className="text-black md:hidden flex absolute top-8 right-8" onClick={handleQuickViewClick}>
        <FaEye size={24} />
      </button>

      {/* Modal */}
      <QuickViewModal isOpen={isModalOpen} onClose={handleCloseModal} product={product} />
      <QuickAddModal isOpen={isModalOpen1} onClose={() => setIsModalOpen1(false)} product={product} />
    </div>
  );
};

export default ProductCard;

