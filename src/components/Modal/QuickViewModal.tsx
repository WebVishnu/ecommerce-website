import { Product } from "@/types";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { FiHeart, FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";

interface QuickViewModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product;
}

const QuickViewModal: React.FC<QuickViewModalProps> = ({
  isOpen,
  onClose,
  product,
}) => {
  const [quantity, setQuantity] = useState(1);
  const [mainImage, setMainImage] = useState(product.images[0]); // Use the first image as the default main image
  const [isLiked, setIsLiked] = useState(false); // State for heart button
  const [currentIndex, setCurrentIndex] = useState(0); // Track the current index for thumbnails

  const handleLikeButtonClick = () => {
    setIsLiked(!isLiked); // Toggle the like state
  };

  // Update the main image whenever the currentIndex changes
  useEffect(() => {
    setMainImage(product.images[currentIndex]); // Change main image based on current index
  }, [currentIndex, product.images]);

  const handleIncreaseQuantity = () => setQuantity(quantity + 1);
  const handleDecreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleThumbnailClick = (image: string, index: number) => {
    setMainImage(image); // Change the main image when clicking on a thumbnail
    setCurrentIndex(index); // Update current index for thumbnails
  };

  const scrollThumbnails = (direction: string) => {
    if (direction === "left" && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1); // Decrease the index
    } else if (
      direction === "right" &&
      currentIndex < product.images.length - 1
    ) {
      setCurrentIndex(currentIndex + 1); // Increase the index
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 p-4">
      {/* Modal Overlay: Click to close */}
      <div className="absolute inset-0" onClick={onClose}></div>
      <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg relative w-[90%] md:max-w-4xl max-h-[90%] h-auto overflow-y-auto mx-auto">
        {/* Close Button */}
        <button
          className="absolute top-0 right-0 bg-black text-white p-2 rounded-bl-xl rounded-tr-lg z-50 "
          onClick={onClose}
        >
          <FiX size={24} />
        </button>

        {/* Product Details */}
        <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6">
          {/* Product Image and Thumbnails */}
          <div className="flex flex-col w-full md:w-1/2 items-center">
            {/* Main Product Image */}
            <div className="w-full">
              <Image
                src={mainImage}
                alt={product.name}
                height={500}
                width={500}
                className="rounded-lg w-full h-48 sm:h-64 md:h-72 object-cover"
              />
            </div>

            {/* Thumbnails as Horizontal Scroll */}
            <div className="relative mt-4 w-full flex items-center justify-center">
              {/* Left Arrow */}
              {currentIndex > 0 && (
                <button
                  onClick={() => scrollThumbnails("left")}
                  className="absolute left-0 z-10 bg-gray-200 p-2 rounded-full shadow-md"
                >
                  <FiChevronLeft size={20} />
                </button>
              )}

              {/* Thumbnails */}
              <div className="flex overflow-x-scroll space-x-2 w-[80%] px-4">
                {product.images.map((image: string, index: number) => (
                  <div key={index} className="min-w-[20%] cursor-pointer">
                    <Image
                      src={image}
                      alt={product.name}
                      className={`rounded-lg w-full h-16 sm:h-24 object-cover transition-transform duration-200 ${
                        currentIndex === index ? "border-2 border-blue-500" : ""
                      }`}
                      height={500}
                      width={500}
                      onClick={() => handleThumbnailClick(image, index)}
                    />
                  </div>
                ))}
              </div>

              {/* Right Arrow */}
              {currentIndex < product.images.length - 1 && (
                <button
                  onClick={() => scrollThumbnails("right")}
                  className="absolute right-0 z-10 bg-gray-200 p-2 rounded-full shadow-md"
                >
                  <FiChevronRight size={20} />
                </button>
              )}
            </div>
          </div>

          {/* Product Information */}
          <div className="w-full md:w-1/2">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              {product.name}
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 mb-2">
              Vendor: {product.vendor}
            </p>
            <p className="text-xs sm:text-sm text-gray-600 mb-2">
              Availability: {product.availability}
            </p>
            <p className="text-xs sm:text-sm text-gray-600 mb-4">
              Product Type: {product.type}
            </p>

            {/* Price */}
            <div className="flex items-center mb-2">
              {product.salePrice ? (
                <>
                  <span className="line-through text-gray-500 text-sm sm:text-base mr-2">
                    ₹{product.originalPrice}
                  </span>
                  <span className="text-red-500 text-lg sm:text-xl font-bold">
                    ₹{product.salePrice}
                  </span>
                </>
              ) : (
                <span className="text-red-500 text-lg sm:text-xl font-bold">
                  ₹{product.originalPrice}
                </span>
              )}
            </div>

            {/* Hurry Up Notification */}
            <p className="text-xs sm:text-sm text-red-500 mb-4">
              Hurry up! Only {product.stock} left
            </p>

            {/* Quantity Selector */}
            <div className="flex items-center mb-4">
              <span className="mr-4 text-xs sm:text-sm">Quantity:</span>
              <div className="flex items-center border border-gray-300 rounded-md">
                <button
                  className="px-2 py-1 text-lg sm:text-xl"
                  onClick={handleDecreaseQuantity}
                >
                  −
                </button>
                <span className="px-4 py-1 text-sm sm:text-base">
                  {quantity}
                </span>
                <button
                  className="px-2 py-1 text-lg sm:text-xl"
                  onClick={handleIncreaseQuantity}
                >
                  +
                </button>
              </div>
            </div>

            {/* Subtotal */}
            <p className="mb-4 text-sm sm:text-base">
              Subtotal: ₹
              {(
                (typeof product.salePrice === "number"
                  ? product.salePrice
                  : typeof product.originalPrice === "number"
                  ? product.originalPrice
                  : 0) * quantity
              ).toFixed(2)}
            </p>

            {/* Add To Cart Button */}
            <div className="flex flex-row gap-x-2 sm:gap-x-4 mb-2 w-full items-center">
              {/* Add To Cart Button */}
              <button className="bg-black text-white w-full py-2 sm:py-3 duration-500 hover:bg-transparent hover:border-black border hover:text-black rounded-full text-xs sm:text-sm">
                Add To Cart
              </button>

              {/* Heart Like Button */}
              <div className="flex w-[20%]">
                <button
                  className={`${
                    isLiked ? "bg-blue-100" : "bg-white"
                  } text-gray-500 border border-gray-300 rounded-full p-2 sm:p-3 shadow transition-colors duration-300`}
                  onClick={handleLikeButtonClick}
                >
                  <FiHeart size={20} />
                </button>
              </div>
            </div>

            {/* Checkbox and Terms */}
            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                id="terms"
                className="mr-2 cursor-pointer"
              />
              <label
                htmlFor="terms"
                className="text-xs sm:text-sm text-gray-600"
              >
                I agree with Terms & Conditions
              </label>
            </div>

            {/* More Payment Options */}
            <p className="text-xs sm:text-sm text-blue-500 cursor-pointer mb-4">
              More payment options
            </p>

            {/* Customer Viewing Info */}
            <p className="text-xs sm:text-sm text-gray-600">
              👁️ {product.customersViewing ? product.customersViewing : 0}
              customers are viewing this product
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickViewModal;

