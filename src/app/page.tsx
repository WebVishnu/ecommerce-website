"use client";

import Navbar from "@/components/Navbar";
import Product from "@/components/screens/Product";
import Hero from "@/components/screens/Hero";
import Footer from "@/components/Footer";
import VideoPlayer from "@/components/screens/Video";
import PromoBanner from "@/components/PromoCode";

export default function Page() {
  return (
    <div className="min-h-screen text-[#2a4494] bg-white overflow-hidden font-[family-name:var(--font-montserrat-regular)]">
      {/* Navbar Component */}
      <Navbar />

      <div className="pt-20"> 
        <Hero />
      </div>

      <VideoPlayer />

<PromoBanner />
      {/* Product Section */}
      <div className="px-4">
        <Product />
      </div>
      
      <Footer />
    </div>
  );
}
