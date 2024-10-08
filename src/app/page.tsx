"use client";

import Product from "@/components/screens/Product";
import Hero from "@/components/screens/Hero";
import Footer from "@/components/Footer";
import VideoPlayer from "@/components/screens/Video";
import CategorySlider from "@/components/Category";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar/Navbar";
import { Metadata } from "next";



export default function Page() {
  return (
    <div className="min-h-screen text-[#2a4494] bg-white overflow-hidden font-[family-name:var(--font-montserrat-regular)]">
      

      <div className="">
        <Hero />
      </div>

      <div className="max-w-[1200px] mx-auto flex flex-col space-y-12 md:px-0 px-5">
        <VideoPlayer />

        {/* <PromoBanner /> */}
        <div>
          <CategorySlider />
        </div>
        {/* Product Section */}
        <Product />
      </div>

      <Footer />
      <Link
        href={"https://wa.me/919917673301"}
        target="_blank"
        className="fixed bottom-20 right-5 z-10 rounded-full overflow-hidden cursor-pointer"
      >
        <Image
          src={"/whatsapp-icon.png"}
          height={60}
          width={60}
          alt="whatsapp"
          className="md:h-full w-12 md:w-full h-12"
        />
      </Link>
    </div>
  );
}
