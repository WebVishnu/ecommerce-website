"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; // useRouter to programmatically navigate
import ProductCard from "../ProductCard";

export default function Product() {
  const router = useRouter();

  const products = [
    {
      images: [
        "http://5.imimg.com/data5/SELLER/Default/2022/4/HZ/VL/MN/12804014/beautyplus-20220415114958100-save-500x500.jpg",
        "http://5.imimg.com/data5/SELLER/Default/2022/8/RU/JO/YM/12804014/v-bond-500x500.jpg",
        "http://5.imimg.com/data5/SELLER/Default/2022/4/ZG/CG/XW/12804014/beautyplus-20220414145955062-save-500x500.jpg",
      ], // Array of product images
      name: "240 V BLUE VITCO V-BOND MILK ANALYZER",
      originalPrice: "46,000",
      stock: 100, // Number of items left
      vendor: "Vitco",
      availability: "In Stock",
      type: "Electronics",
    },
    {
      images: [
        "http://5.imimg.com/data5/SELLER/Default/2023/9/342364195/AL/CJ/PJ/12804014/vitco-bond-milk-analyzer-500x500.jpeg",
        "http://5.imimg.com/data5/SELLER/Default/2023/9/342364357/MX/TJ/DC/12804014/vitco-bond-milk-analyzer-500x500.jpeg",
        "http://5.imimg.com/data5/SELLER/Default/2023/9/342364264/AA/FH/ND/12804014/vitco-bond-milk-analyzer-500x500.jpeg",
      ], // Array of product images
      name: "VITCO BOND MILK ANALYZER IN - BUILT BATTERY",
      originalPrice: "55,000",
      stock: 100, // Number of items left
      vendor: "Vitco",
      availability: "In Stock",
      type: "Electronics",
    },
    {
      images: [
        "http://5.imimg.com/data5/SELLER/Default/2022/8/NP/KC/AN/12804014/v-bond-500x500.jpg",
        "http://5.imimg.com/data5/SELLER/Default/2022/8/QA/ZU/BB/12804014/v-bond-milk-analyzer-500x500.jpg",
      ], // Array of product images
      name: "METAL V BOND MILK ANALYZER, For Laboratory Use",
      originalPrice: "45,000",
      stock: 5, // Number of items left
      vendor: "Vitco",
      availability: "In Stock",
      type: "Electronics",
    },
    {
      images: [
        "http://5.imimg.com/data5/SELLER/Default/2023/4/303607164/VB/XC/FU/12804014/mini-v-bond-500x500.jpg",
        "http://5.imimg.com/data5/SELLER/Default/2023/4/303607732/AW/RF/YN/12804014/mini-v-bond-500x500.jpg",
      ], // Array of product images
      name: "MILK TESTING V BOND MINI Machine",
      originalPrice: "33,000",
      stock: 100, // Number of items left
      vendor: "Vitco",
      availability: "In Stock",
      type: "Electronics",
    },
    {
      images: [
        "http://5.imimg.com/data5/BE/GX/IF/SELLER-12804014/dahi-machine-500x500.jpg",
        "http://5.imimg.com/data5/ER/HK/TK/SELLER-12804014/img-20190403-wa0015-500x500.jpg",
        "http://5.imimg.com/data5/LK/IB/YQ/SELLER-12804014/dahi-machine-500x500.jpg",
      ], // Array of product images
      name: "Sample - Computers & Accessories",
      originalPrice: "1,18,000",
      stock: 5, // Number of items left
      vendor: "Vitco",
      availability: "In Stock",
      type: "Electronics",
    },
    {
      images: [
        "http://5.imimg.com/data5/SELLER/Default/2021/12/QQ/WQ/JV/12804014/ultrasonic-milk-analyzer-set-500x500.jpg",
        "http://5.imimg.com/data5/SELLER/Default/2021/12/TO/TF/SW/12804014/ultrasonic-milk-analyzer-set-500x500.jpg",
        "http://5.imimg.com/data5/SELLER/Default/2021/12/TA/WN/JT/12804014/ultrasonic-milk-analyzer-set-500x500.jpg",
      ], // Array of product images
      name: "ULTRASONIC MILK ANALYZER SET",
      originalPrice: "45,000",
      stock: 5, // Number of items left
      vendor: "Vitco",
      availability: "In Stock",
      type: "Electronics",
    },
    {
      images: [
        "http://5.imimg.com/data5/SELLER/Default/2024/1/379661480/DL/IA/IB/12804014/ultraplus-milk-analyzer-inbuilt-battery-24-ah-500x500.jpg",
        "http://5.imimg.com/data5/SELLER/Default/2023/9/342416303/SY/DJ/EN/12804014/ultraplus-milk-analyzer-inbuilt-battery-24-ah-500x500.jpeg",
      ], // Array of product images
      name: "ULTRAPLUS MILK ANALYZER",
      originalPrice: "30,000",
      stock: 5, // Number of items left
      vendor: "Vitco",
      availability: "In Stock",
      type: "Electronics",
    },
    {
      images: [
        "http://5.imimg.com/data5/SELLER/Default/2021/3/FB/BV/KD/12804014/0i6a0594-500x500.JPG",
      ], // Array of product images
      name: "VITCO Shagun DPU",
      originalPrice: "9,500",
      vendor: "Vitco",
      availability: "In Stock",
      type: "Electronics",
    },
    {
      images: [
        "http://5.imimg.com/data5/SELLER/Default/2024/3/403260869/YM/IX/IC/12804014/khoya-making-machine-120-ltr-500x500.jpeg",
        "http://5.imimg.com/data5/SELLER/Default/2024/3/403262453/HN/PK/OY/12804014/khoya-making-machine-120-ltr-500x500.jpg",
      ], // Array of product images
      name: "Khoya Making Machine 120 Ltr",
      originalPrice: "65,000",
      vendor: "Vitco",
      availability: "In Stock",
      type: "Electronics",
    },
    {
      images: [
        "http://5.imimg.com/data5/OA/YR/ZZ/SELLER-12804014/steam-boiler-500x500.jpg",
        "http://5.imimg.com/data5/MC/NU/HE/SELLER-12804014/steam-boiler-500x500.jpg",
      ], // Array of product images
      name: "VITCO STEAM BOILER KETTLE 60 Ltr",
      originalPrice: "56,000",
      vendor: "Vitco",
      availability: "In Stock",
      type: "Electronics",
    },
    {
      images: [
        "http://5.imimg.com/data5/SELLER/Default/2024/3/400053328/FX/GW/UH/12804014/mini-v-bond-inbuilt-battery-24-ah-500x500.jpeg",
        "http://5.imimg.com/data5/SELLER/Default/2024/3/400054179/HR/GB/RX/12804014/mini-v-bond-inbuilt-battery-24-ah-500x500.jpeg",
        "http://5.imimg.com/data5/SELLER/Default/2023/9/342417515/VC/OR/RT/12804014/mini-v-bond-inbuilt-battery-24-ah-500x500.jpg",
      ], // Array of product images
      name: "MINI V BOND INBUILT BATTERY 24 AH",
      originalPrice: "38,750",
      vendor: "Vitco",
      availability: "In Stock",
      type: "Electronics",
    },
  ];

  // State to show only first 12 products initially
  const [visibleProducts, setVisibleProducts] = useState(12);

  // Handle see more click
  const handleSeeMoreClick = () => {
    router.push("/products"); // Navigate to /products page
  };

  return (
    <div className="container mx-auto">
      <h2 className="text-sm md:text-2xl font-bold mb-6">Our products</h2>

      {/* Responsive Grid Layout: 2 columns for mobile, 3 for tablets, 4 for desktops */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-8 w-full justify-center">
        {products.slice(0, visibleProducts).map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>

      {/* See More Button */}
      {visibleProducts < products.length && (
        <div className="flex justify-center mt-8">
          <button
            onClick={handleSeeMoreClick}
            className="bg-my-blue text-white px-6 py-3 rounded-lg hover:bg-my-blue/80 text-xs font-[family-name:var(--font-montserrat-regular)] transition-colors duration-300"
          >
            See More
          </button>
        </div>
      )}
    </div>
  );
}
