import React, { useState } from 'react';
import { FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

interface QuickAddModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: any;
}

const QuickAddModal: React.FC<QuickAddModalProps> = ({ isOpen, onClose, product }) => {
  const [quantity, setQuantity] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // Track the current image index

  if (!isOpen) return null;

  const handleIncreaseQuantity = () => setQuantity(quantity + 1);
  const handleDecreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  // Handle image navigation in the carousel
  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? product.images.length - 1 : prevIndex - 1));
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === product.images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg relative w-[90%] md:max-w-4xl mx-auto">
        {/* Close Button */}
        <button className="absolute top-0 z-10 rounded-tr-lg right-0 bg-black text-white p-2" onClick={onClose}>
          <FiX size={24} />
        </button>

        {/* Product Details */}
        <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6">
          {/* Product Image Carousel */}
          <div className="flex flex-col w-full md:w-1/2 items-center relative">
            {/* Main Product Image */}
            <div className="w-full">
              <img
                src={product.images[currentImageIndex]} // Display the current image based on index
                alt={product.name}
                className="rounded-lg w-full h-48 sm:h-64 md:h-72 object-cover"
              />
            </div>

            {/* Carousel Navigation Buttons */}
            <button
              onClick={handlePrevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-300 text-gray-600 p-2 rounded-full hover:bg-gray-400"
            >
              <FiChevronLeft size={24} />
            </button>

            <button
              onClick={handleNextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-300 text-gray-600 p-2 rounded-full hover:bg-gray-400"
            >
              <FiChevronRight size={24} />
            </button>

            {/* Image Indicator Dots */}
            <div className="flex justify-center mt-4 space-x-2">
              {product.images.map((_: any, index: number) => (
                <span
                  key={index}
                  className={`w-2 h-2 rounded-full cursor-pointer ${
                    currentImageIndex === index ? 'bg-blue-500' : 'bg-gray-300'
                  }`}
                  onClick={() => setCurrentImageIndex(index)} // Change image on dot click
                ></span>
              ))}
            </div>
          </div>

          {/* Product Information */}
          <div className="w-full md:w-1/2">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">{product.name}</h2>
            <div className="flex items-center mb-2">
              <span className="line-through text-gray-500 text-sm sm:text-base mr-2">₹{product.originalPrice}</span>
              <span className="text-red-500 text-lg sm:text-xl font-bold">₹{product.salePrice}</span>
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center mb-4">
              <span className="mr-4 text-xs sm:text-sm">Quantity:</span>
              <div className="flex items-center border border-gray-300 rounded-md">
                <button className="px-2 py-1 text-lg sm:text-xl" onClick={handleDecreaseQuantity}>
                  −
                </button>
                <span className="px-4 py-1 text-sm sm:text-base">{quantity}</span>
                <button className="px-2 py-1 text-lg sm:text-xl" onClick={handleIncreaseQuantity}>
                  +
                </button>
              </div>
            </div>

            {/* Subtotal */}
            <p className="mb-4 text-sm sm:text-base">Subtotal: ₹{(product.salePrice * quantity).toFixed(2)}</p>

            {/* Add To Cart Button */}
            <button className="bg-my-blue text-white w-full py-2 sm:py-3 rounded-full">Add To Cart</button>

            {/* View Full Details Button */}
            <button className="mt-4 bg-white text-my-bbg-my-blue w-full py-2 sm:py-3 rounded-full border border-my-bbg-my-blue">
              View Full Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickAddModal;
