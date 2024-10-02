"use client";

import Navbar from "@/components/Navbar";
import Product from "@/components/screens/Product";
import Hero from "@/components/screens/Hero";
import Footer from "@/components/Footer";
import VideoPlayer from "@/components/screens/Video";
import PromoBanner from "@/components/PromoCode";
import CategorySlider from "@/components/Category";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="min-h-screen text-[#2a4494] bg-white overflow-hidden font-[family-name:var(--font-montserrat-regular)]">
      {/* Navbar Component */}
      <Navbar />

      <div className="pt-20">
        <Hero />
      </div>

      <div className="max-w-[1200px] mx-auto flex flex-col space-y-12">
        <VideoPlayer />

        {/* <PromoBanner /> */}
        <div>
          <CategorySlider />
        </div>
        {/* Product Section */}
        <Product />
      </div>

      <Footer />
      <Link href={"https://wa.me/919917673301"} target="_blank" className="fixed bottom-10 right-10 z-10 rounded-full overflow-hidden cursor-pointer">
        <Image
          src={"/whatsapp-icon.png"}
          height={70}
          width={70}
          alt="whatsapp"
        />
      </Link>
    </div>
  );
}
