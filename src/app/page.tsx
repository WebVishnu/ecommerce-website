"use client";

import Navbar from "@/components/Navbar";
import Product from "@/components/screens/Product";
import Hero from "@/components/screens/Hero";

export default function Page() {
  return (
    <div className="min-h-screen text-[#2a4494] bg-white overflow-hidden font-[family-name:var(--font-montserrat-regular)]">
      {/* Navbar Component */}
      <Navbar />

      {/* Add padding to the top to account for the fixed navbar */}
      <div className="pt-20">
        <Hero />
      </div>

      {/* Product Section */}
      <div className="px-4">
        <Product />
      </div>
    </div>
  );
}
