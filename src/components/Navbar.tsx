"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FiMenu,
  FiX,
  FiHeart,
  FiUser,
  FiShoppingCart,
  FiSearch,
} from "react-icons/fi"; // Import additional icons
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const router = useRouter();

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 50) {
        setIsScrolled(true);
        if (currentScrollY < lastScrollY) {
          setScrollDirection("up");
        } else {
          setScrollDirection("down");
        }
      } else {
        setIsScrolled(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSearch = () => {
    if (searchQuery.trim()) {
      router.push(`/search?q=${searchQuery}`);
    }
  };

  return (
    <header className="w-full fixed top-0 left-0 z-50 ">
      <div
        className={`transition-all duration-500 ease-in-out ${
          isScrolled && scrollDirection === "down"
            ? "-translate-y-full opacity-0"
            : "translate-y-0 opacity-100"
        }`}
        style={{ transition: "all 0.5s ease" }}
      >
        {/* Top Announcement Bar */}
        <div className="bg-blue-100 py-2 overflow-hidden relative">
          <div className="flex items-center justify-start space-x-10 animate-marquee">
            <div className="marquee-content">
              <span className="text-blue-500 text-xs lg:text-sm">
                ⚡ Summer sale: Up to 70% off selected items ⚡
              </span>
              <span className="text-blue-500 text-xs lg:text-sm">
                ⚡ Limited time offer: Free shipping on orders above $50! ⚡
              </span>
              <span className="text-blue-500 text-xs lg:text-sm">
                ⚡ Special discount for new arrivals! ⚡
              </span>
            </div>
          </div>
        </div>

        {/* Main Navigation Bar */}
        <div className="bg-white py-3">
          <div className="container mx-auto flex justify-between items-center px-4">
            <div className=" lg:hidden flex items-center space-x-4 w-full justify-between">
              <div className="flex flex-row  gap-x-4 md:gap-x-6">
                <div className="lg:hidden flex items-center ">
                  <button onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
                  </button>
                </div>
                <button onClick={handleSearch} className=" text-my-blue">
                  <FiSearch size={28} />
                </button>
              </div>
              <Image
                src="/vitco.png"
                alt="Logo"
                width={1000}
                height={1000}
                className="w-[40%] h-20 object-contain"
              />

              <div className="flex flex-row  gap-x-4 md:gap-x-6">
                <div className=" text-my-blue text-sm">
                  <FiUser size={28} />
                </div>
                <Link
                  href="/cart"
                  className="flex flex-col items-center relative"
                >
                  <FiShoppingCart size={28} />
                  <div className="absolute -top-3 -right-2 bg-my-blue text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    0
                  </div>
                </Link>
              </div>
            </div>

            <div className="hidden lg:flex items-center space-x-4  w-[30%]">
              <Image
                src="/vitco.png"
                alt="Logo"
                width={1000}
                height={1000}
                className="w-[50%] h-20 object-contain"
              />
              <div className="hidden lg:flex flex-col">
                <span className="text-my-blue text-sm">Available 24/7 at</span>
                <span className="text-my-blue font-bold text-sm">
                  091 234-Vitco
                </span>
              </div>
            </div>

            {/* Center Section: Search Bar */}
            <div className="relative w-[40%] hidden lg:flex items-center">
              <input
                type="text"
                placeholder="Search the store"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none"
              />
              <button
                onClick={handleSearch}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-my-blue"
              >
                <FiSearch size={20} />
              </button>
            </div>

            {/* Right Section - Icons */}
            <div className="hidden lg:flex w-[15%] mr-4 justify-between items-center space-x-6 text-my-blue text-sm">
              <Link href="/wishlists" className="flex flex-col items-center">
                <FiHeart size={20} />
                <span>Wish Lists</span>
              </Link>

              <Link href="/sign-in" className="flex flex-col items-center">
                <FiUser size={20} />
                <span>Sign In</span>
              </Link>
              <Link
                href="/cart"
                className="flex flex-col items-center relative"
              >
                <FiShoppingCart size={20} />
                <span>Cart</span>
                <div className="absolute -top-3 -right-2 bg-my-blue text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  0
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Full-Screen Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-white bg-opacity-90 z-50 flex flex-col justify-center items-center text-my-blue transform transition-transform duration-700 ease-in-out ${
          menuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      >
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-5 right-5 text-3xl"
        >
          <FiX />
        </button>
        {/* Mobile Navigation items */}
        <nav className="flex flex-col space-y-8 text-2xl">
          <Link
            href="/"
            className="hover:underline"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/shop"
            className="hover:underline"
            onClick={() => setMenuOpen(false)}
          >
            Shop
          </Link>
          <Link
            href="/product"
            className="hover:underline"
            onClick={() => setMenuOpen(false)}
          >
            Product
          </Link>
          <Link
            href="/blog"
            className="hover:underline"
            onClick={() => setMenuOpen(false)}
          >
            Blog
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
