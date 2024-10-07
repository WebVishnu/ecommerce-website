import React, { useState } from "react";
import Image from "next/image";
import { Product } from "@/types";

interface SearchProductCardProps {
  product: Product;
}

const SearchProductCard: React.FC<SearchProductCardProps> = ({ product }) => {
  const { images, name, onSale } = product;
  const [isImageHovered, setIsImageHovered] = useState(false); // Track if the image is being hovered

  return (
    <div className="relative border-2 rounded-lg p-4 sm:p-6 transition-transform duration-700 overflow-hidden group">
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
          width={800}
          height={800}
          className="w-full h-36 sm:h-64 object-cover transform transition-transform duration-1000 hover:scale-105"
        />
      </div>

      {/* Product Name with Hover Effect - Responsive Font */}
      <h3 className="mt-4 text-sm sm:text-base md:text-lg lg:text-xl cursor-pointer hover:font-bold font-medium transition-colors duration-300 hover:text-my-blue text-center break-words">
        {name}
      </h3>
    </div>
  );
};

export default SearchProductCard;
