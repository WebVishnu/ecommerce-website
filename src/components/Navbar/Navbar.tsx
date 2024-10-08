"use client";
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
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import Components
import TopAnnouncementBar from "./TopAnnouncementBar";
import SearchBar from "./SearchBar";
import MobileMenu from "./MobileMenu";
import BottomTab from "./BottomTab";
import SearchProductCard from "../SearchProductCard";

// Import Data and Types
import ProductData from "@/json/ProductData";
import { Product } from "@/types";

const Navbar = () => {
  // State variables for UI behavior
  const [isScrolled, setIsScrolled] = useState(false); // To check if page is scrolled
  const [scrollDirection, setScrollDirection] = useState<string | null>(null); // Scroll direction (up/down)
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Mobile menu state
  const [isSearchBarOpen, setIsSearchBarOpen] = useState(false); // Mobile search bar state
  const [isDesktopSearchOpen, setIsDesktopSearchOpen] = useState(false); // Desktop search state
  const [searchQuery, setSearchQuery] = useState(""); // Search query input
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]); // Filtered products based on search
  const searchContainerRef = useRef<HTMLDivElement>(null); // Reference for the search box container
  const debounceTimeout = useRef<NodeJS.Timeout | null>(null); // For debounce handling

  // Load products from data
  const products = ProductData();

  // Handle page scroll event for sticky navbar behavior
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show or hide navbar based on scroll direction
      if (currentScrollY > 50) {
        setIsScrolled(true);
        setScrollDirection(currentScrollY < lastScrollY ? "up" : "down");
      } else {
        setIsScrolled(false);
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup scroll event listener on unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Debounce search query to avoid excessive filtering on every keystroke
  useEffect(() => {
    if (debounceTimeout.current) {
      clearTimeout(debounceTimeout.current);
    }

    // Set a delay of 300ms after the user stops typing to update the product list
    debounceTimeout.current = setTimeout(() => {
      if (searchQuery) {
        const results = products.filter((product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredProducts(results);
      } else {
        setFilteredProducts(products); // Show all products if query is empty
      }
    }, 300);

    // Cleanup debounce timeout on unmount or before next update
    return () => {
      if (debounceTimeout.current) {
        clearTimeout(debounceTimeout.current);
      }
    };
  }, [searchQuery, products]);

  // Close desktop search when clicking outside the search container
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target as Node)
      ) {
        setIsDesktopSearchOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="w-full fixed top-0 left-0 z-40">
      {/* Navbar container that hides when scrolling down */}
      <div
        className={`transform transition-transform bg-white duration-500 ease-in-out ${
          isScrolled && scrollDirection === "down"
            ? "-translate-y-full"
            : "translate-y-0"
        }`}
      >
        {/* Top section of Navbar for desktop */}
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
              <span className="text-primary lg:text-sm text-xs">
                Available 24/7 at
              </span>
              <span className="text-primary font-bold lg:text-sm text-xs">
                +91 9917673301
              </span>
            </div>
          </div>

          {/* Search Bar for desktop */}
          <div
            className="relative w-[40%] hidden lg:flex items-center"
            ref={searchContainerRef}
          >
            <input
              type="text"
              placeholder="Search the store"
              value={searchQuery}
              onFocus={() => setIsDesktopSearchOpen(true)}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none"
            />
            {isDesktopSearchOpen ? (
              <button
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-primary"
                onClick={() => setIsDesktopSearchOpen(false)}
              >
                <FiX size={24} />
              </button>
            ) : (
              <button
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-primary"
                onClick={() => setIsDesktopSearchOpen(true)}
              >
                <FiSearch size={20} />
              </button>
            )}
            {isDesktopSearchOpen && (
              <div className="absolute top-full left-0 w-full bg-white shadow-lg border mt-2 p-4 z-40">
                {/* Filtered Product List */}
                <div>
                  <h2 className="text-sm font-bold mb-2">
                    {searchQuery
                      ? `Search Results for: ${searchQuery}`
                      : "Products"}
                  </h2>
                  <div className="overflow-x-scroll px-2">
                    <Swiper
                      modules={[Navigation, Pagination]}
                      spaceBetween={20}
                      slidesPerView={3}
                      navigation
                      className="products-slider"
                    >
                      {filteredProducts.map((product, index) => (
                        <SwiperSlide key={index}>
                          <SearchProductCard
                            product={product}
                            setIsDesktopSearchOpen={setIsDesktopSearchOpen}
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* User account and cart icons */}
          <div className="lg:flex items-center space-x-8 text-primary mr-10">
            <Link href="/wishlists">
              <FiHeart size={20} />
              <span className="text-xs">Wish Lists</span>
            </Link>
            <Link href="/sign-in">
              <FiUser size={20} />
              <span className="text-xs">Sign In</span>
            </Link>
            <Link href="/cart">
              <FiShoppingCart size={20} />
              <span className="text-xs">Cart</span>
              <div className="absolute -top-3 -right-2 bg-primary text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                0
              </div>
            </Link>
          </div>
        </div>

        {/* Mobile Navbar */}
        <div className="lg:hidden bg-white py-3 w-full shadow-md">
          <div className="container mx-auto flex justify-between items-center px-4">
            <div className="flex items-center space-x-4">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <FiMenu size={24} />
              </button>
              <button
                onClick={() => setIsSearchBarOpen(true)}
                className="text-primary"
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

      {/* Mobile Menu Component */}
      <MobileMenu menuOpen={isMenuOpen} setMenuOpen={setIsMenuOpen} />

      {/* Mobile Search Bar Component */}
      <SearchBar
        products={products}
        searchOpen={isSearchBarOpen}
        setSearchOpen={setIsSearchBarOpen}
      />

      {/* Bottom Tab Navigation for Mobile */}
      <BottomTab setSearchOpen={setIsSearchBarOpen} />
    </header>
  );
};

export default Navbar;
