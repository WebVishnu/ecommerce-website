'use client'
import { useState, useEffect, useRef } from "react";
import {
  FiMenu,
  FiSearch,
  FiShoppingCart,
  FiUser,
  FiHeart,
  FiX,
} from "react-icons/fi";
import Image from "next/image";
import TopAnnouncementBar from "./TopAnnouncementBar";
import SearchBar from "./SearchBar";
import MobileMenu from "./MobileMenu";
import { Product } from "@/types";
import BottomTab from "./BottomTab";
import Link from "next/link";
import ProductData from "@/json/ProductData";
import SearchProductCard from "../SearchProductCard";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchOpen1, setSearchOpen1] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const searchRef = useRef<HTMLDivElement>(null); // Reference for the search container
  const debounceTimeout = useRef<NodeJS.Timeout | null>(null); // Debounce timeout ref

  const products = ProductData(); 

  // Update scroll state
  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 50) {
        setIsScrolled(true);
        setScrollDirection(currentScrollY < lastScrollY ? "up" : "down");
      } else {
        setIsScrolled(false);
      }
      lastScrollY = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle search query change with debounce
  useEffect(() => {
    // Clear the previous timeout if it's still running
    if (debounceTimeout.current) {
      clearTimeout(debounceTimeout.current);
    }

    // Set a new timeout for the debounce
    debounceTimeout.current = setTimeout(() => {
      if (searchQuery) {
        const filtered = products.filter((product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredProducts(filtered);
      } else {
        setFilteredProducts(products); // Show all if no search
      }
    }, 300); // Wait 300ms after the user stops typing

    return () => {
      // Cleanup the timeout on unmount or before next effect run
      if (debounceTimeout.current) {
        clearTimeout(debounceTimeout.current);
      }
    };
  }, [searchQuery, products]);

  // Close search box on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setSearchOpen1(false);
      }
    };

    // Add event listener for clicks outside the search box
    document.addEventListener("mousedown", handleClickOutside);
    
    // Clean up the event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [searchRef]);

  return (
    <header className="w-full fixed top-0 left-0 z-40 font-[family-name:var(--font-montserrat-regular)]">
      <div
        className={`transform transition-transform bg-white duration-500 ease-in-out ${
          isScrolled && scrollDirection === "down"
            ? "-translate-y-full"
            : "translate-y-0"
        }`}
      >
        {/* Top Announcement Bar */}
        {/* <TopAnnouncementBar /> */}
        <div className="container mx-auto px-4 lg:flex lg:items-center lg:justify-between py-3 hidden">
          {/* Logo and Contact Info */}
          <div className="lg:flex lg:items-center space-x-6">
            <Link href="/">
              <Image
                src="/vitco.png"
                alt="Logo"
                width={150}
                height={50}
                className="object-contain"
              />
            </Link>
            <div className="lg:flex flex-col hidden">
              <span className="text-my-blue lg:text-sm text-xs">
                Available 24/7 at
              </span>
              <span className="text-my-blue font-bold lg:text-sm text-xs">
                +91&nbsp;9917673301
              </span>
            </div>
          </div>

          {/* Search Bar */}
          <div className="relative w-[40%] hidden lg:flex items-center" ref={searchRef}>
            <input
              type="text"
              placeholder="Search the store"
              value={searchQuery}
              onFocus={() => setSearchOpen1(true)}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none"
            />
            {searchOpen1 ? (
              <button
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-my-blue"
                onClick={() => setSearchOpen1(false)}
              >
                <FiX size={24} />
              </button>
            ) : (
              <button
                title="Search"
                onClick={() => setSearchOpen1(true)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-my-blue"
              >
                <FiSearch size={20} />
              </button>
            )}
            {searchOpen1 && (
              <div className="absolute top-full left-0 w-full bg-white shadow-lg border mt-2 p-4 z-40">
                {/* Trending Section */}
                <div className="mb-4">
                  <h2 className="text-sm font-bold mb-2">TRENDING NOW</h2>
                  <div className="flex gap-2 flex-wrap">
                    {["dempus", "sample", "magnus"].map((trend, index) => (
                      <button
                        key={index}
                        className="bg-gray-100 px-4 py-2 rounded-full text-xs"
                        onClick={() => setSearchQuery(trend)}
                      >
                        <FiSearch className="inline mr-2" />
                        {trend}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Filtered Products Section */}
                <div>
                  <h2 className="text-sm font-bold mb-2">PRODUCTS</h2>
                  <div className="overflow-x-scroll px-2">
                    <div className="flex space-x-4" style={{ minWidth: "200%" }}>
                      {filteredProducts.map((product, index) => (
                        <div key={index} className="w-1/3">
                          <SearchProductCard
                            product={product}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* User and Cart Icons */}
          <div className="lg:flex items-center space-x-8 text-my-blue mr-10">
            <Link href="/wishlists" className="flex flex-col items-center">
              <FiHeart size={20} />
              <span className="text-xs">Wish Lists</span>
            </Link>

            <Link href="/sign-in" className="flex flex-col items-center">
              <FiUser size={20} />
              <span className="text-xs">Sign In</span>
            </Link>

            <Link href="/cart" className="flex flex-col items-center relative">
              <FiShoppingCart size={20} />
              <span className="text-xs">Cart</span>
              <div className="absolute -top-3 -right-2 bg-my-blue text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                0
              </div>
            </Link>
          </div>
        </div>

        {/* Navbar for Mobile */}
        <div className="lg:hidden bg-white py-3 w-full shadow-md">
          <div className="container mx-auto flex justify-between items-center px-4">
            <div className="flex items-center space-x-4">
              <button onClick={() => setMenuOpen(!menuOpen)}>
                <FiMenu size={24} />
              </button>
              <button
                title="search"
                onClick={() => setSearchOpen(true)}
                className="text-my-blue"
              >
                <FiSearch size={24} />
              </button>
            </div>

            <Image
              src="/vitco.png"
              alt="Logo"
              width={120}
              height={40}
              className="h-14 object-contain"
            />

            <div className="flex items-center space-x-4">
              <Link href="/sign-in">
                <FiUser size={24} />
              </Link>
              <Link href="/cart">
                <FiShoppingCart size={24} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      {/* Search Overlay */}
      <SearchBar
        products={products}
        searchOpen={searchOpen}
        setSearchOpen={setSearchOpen}
      />

      {/* Bottom Navigation Bar (for mobile view) */}
      <BottomTab setSearchOpen={setSearchOpen} />

    </header>
  );
};

export default Navbar;
