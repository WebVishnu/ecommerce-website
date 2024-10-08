import React, { useState } from "react";
import Image from "next/image";
import { Product } from "@/types";
import { useRouter } from "next/navigation";

interface SearchProductCardProps {
  product: Product;
  setIsDesktopSearchOpen?: (isOpen: boolean) => void;
}

const SearchProductCard: React.FC<SearchProductCardProps> = ({
  product,
  setIsDesktopSearchOpen,
}) => {
  const { images, name, onSale } = product;
  const [isImageHovered, setIsImageHovered] = useState(false); // Track if the image is being hovered
  const router = useRouter();

  return (
    <div
      className="border border-gray-300 p-2 rounded-md cursor-pointer"
      onMouseEnter={() => {
        setIsImageHovered(true);
      }}
      onMouseLeave={() => {
        setIsImageHovered(false);
      }}
      onClick={() => {
        if (setIsDesktopSearchOpen) setIsDesktopSearchOpen(false);
        router.push(`/products/${product.name}`);
      }}
    >
      <Image
        src={isImageHovered && images.length > 1 ? images[1] : images[0]} // Swap image on hover
        alt={name}
        width={700}
        height={700}
        className="h-32 w-full select-none  object-cover transform transition-transform duration-1000 hover:scale-105"
      />
      <h3 className="mt-4 text-wrap text-sm select-none hover:font-bold">
        {name}
      </h3>
    </div>
  );
};

export default SearchProductCard;
