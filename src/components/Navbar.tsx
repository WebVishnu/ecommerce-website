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
  FiHome,
  FiGrid,
} from "react-icons/fi"; // Import additional icons
import { useRouter } from "next/navigation";
import ProductCard from "./ProductCard";
import { Product } from "@/types";
import ProductData from "@/json/ProductData";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchOpen1, setSearchOpen1] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([] as Product[]); // State to store filtered products

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

  const handleSignInClick = () => {
    router.push("/sign-in");
  };

  const handleWishlistClick = () => {
    router.push("/wishlists");
  };

  // const products = [
  //   {
  //     images: ["/products/p1.png", "/products/p2.jpg", "/products/p3.jpg"], // Array of product images
  //     name: "Sample - Computers & Accessories",
  //     originalPrice: 99.0,
  //     salePrice: 49.0,
  //     onSale: true,
  //     stock: 5, // Number of items left
  //     vendor: "Ella - Halothemes",
  //     availability: "In Stock",
  //     type: "Electronics",
  //     customersViewing: 283, // Example customer count
  //   },
  //   {
  //     images: ["/products/p2.jpg", "/products/p3.jpg", "/products/p4.jpg"], // Array of product images
  //     name: "Product - Computers & Accessories",
  //     originalPrice: 99.0,
  //     salePrice: 49.0,
  //     onSale: false,
  //     stock: 5, // Number of items left
  //     vendor: "Ella - Halothemes",
  //     availability: "In Stock",
  //     type: "Electronics",
  //     customersViewing: 283, // Example customer count
  //   },
  //   {
  //     images: ["/products/p5.jpeg", "/products/p1.png", "/products/p2.jpg"], // Array of product images
  //     name: "Sample - Computers & Accessories",
  //     originalPrice: 99.0,
  //     salePrice: 49.0,
  //     onSale: false,
  //     stock: 5, // Number of items left
  //     vendor: "Ella - Halothemes",
  //     availability: "In Stock",
  //     type: "Electronics",
  //     customersViewing: 283, // Example customer count
  //   },
  //   {
  //     images: ["/products/p1.png", "/products/p2.jpg", "/products/p3.jpg"], // Array of product images
  //     name: "Sample - Computers & Accessories",
  //     originalPrice: 99.0,
  //     salePrice: 49.0,
  //     onSale: true,
  //     stock: 5, // Number of items left
  //     vendor: "Ella - Halothemes",
  //     availability: "In Stock",
  //     type: "Electronics",
  //     customersViewing: 283, // Example customer count
  //   },
  //   {
  //     images: ["/products/p1.png", "/products/p2.jpg", "/products/p3.jpg"], // Array of product images
  //     name: "Sample - Computers & Accessories",
  //     originalPrice: 99.0,
  //     salePrice: 49.0,
  //     onSale: false,
  //     stock: 5, // Number of items left
  //     vendor: "Ella - Halothemes",
  //     availability: "In Stock",
  //     type: "Electronics",
  //     customersViewing: 283, // Example customer count
  //   },
  //   {
  //     images: ["/products/p5.jpeg", "/products/p1.png", "/products/p2.jpg"], // Array of product images
  //     name: "Sample - Computers & Accessories",
  //     originalPrice: 99.0,
  //     salePrice: 49.0,
  //     onSale: false,
  //     stock: 5, // Number of items left
  //     vendor: "Ella - Halothemes",
  //     availability: "In Stock",
  //     type: "Electronics",
  //     customersViewing: 283, // Example customer count
  //   },
  //   {
  //     images: ["/products/p1.png", "/products/p2.jpg", "/products/p3.jpg"], // Array of product images
  //     name: "Sample - Computers & Accessories",
  //     originalPrice: 99.0,
  //     salePrice: 49.0,
  //     onSale: true,
  //     stock: 5, // Number of items left
  //     vendor: "Ella - Halothemes",
  //     availability: "In Stock",
  //     type: "Electronics",
  //     customersViewing: 283, // Example customer count
  //   },
  //   {
  //     images: ["/products/p1.png", "/products/p2.jpg", "/products/p3.jpg"], // Array of product images
  //     name: "Sample - Computers & Accessories",
  //     originalPrice: 99.0,
  //     salePrice: 49.0,
  //     onSale: false,
  //     stock: 5, // Number of items left
  //     vendor: "Ella - Halothemes",
  //     availability: "In Stock",
  //     type: "Electronics",
  //     customersViewing: 283, // Example customer count
  //   },
  // ];

  // Effect to filter products when searchQuery changes
  useEffect(() => {
    const products = ProductData();
    if (searchQuery) {
      const filtered = products.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products); // If no search, show all products
    }
  }, [searchQuery]);
  return (
    <header className="w-full fixed top-0 left-0 z-50">
      <div
        className={`transition-all duration-500 ease-in-out ${
          isScrolled && scrollDirection === "down"
            ? "-translate-y-full opacity-0"
            : "translate-y-0 opacity-100"
        }`}
        style={{ transition: "all 0.5s ease" }}
      >
        {/* Top Announcement Bar */}
        {/* <div className="bg-blue-100 py-2 overflow-hidden relative">
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
        </div> */}

        {/* Main Navigation Bar */}
        <div className="bg-white py-3">
          <div className="container mx-auto flex justify-between items-center px-4">
            <div className=" lg:hidden flex items-center space-x-4 w-full justify-between">
              <div className="flex flex-row gap-x-4 md:gap-x-6">
                <div className="lg:hidden flex items-center ">
                  <button onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                  </button>
                </div>
                <button
                  title="search"
                  onClick={() => setSearchOpen(true)}
                  className="text-primary"
                >
                  <FiSearch size={24} />
                </button>
              </div>
              <Image
                src="/vitco.png"
                alt="Logo"
                width={1000}
                height={1000}
                className="w-[40%] h-14 object-contain"
              />

              <div className="flex flex-row gap-x-4 md:gap-x-6">
                <div className="text-primary text-sm">
                  <FiUser size={24} />
                </div>
                <Link
                  href="/cart"
                  className="flex flex-col items-center relative"
                >
                  <FiShoppingCart size={24} />
                  <div className="absolute -top-3 -right-2 bg-primary text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    0
                  </div>
                </Link>
              </div>
            </div>

            <div className="hidden lg:flex items-center space-x-4 w-[30%]">
              <Image
                src="/vitco.png"
                alt="Logo"
                width={1000}
                height={1000}
                className="w-[50%] h-20 object-contain"
              />
              <div className="hidden lg:flex flex-col">
                <span className="text-primary lg:text-sm text-xs">
                  Available&nbsp;24/7&nbsp;at
                </span>
                <span className="text-primary font-bold lg:text-sm text-xs">
                  +91&nbsp;9917673301
                </span>
              </div>
            </div>

            {/* Center Section: Search Bar */}
            <div className="relative w-[40%] hidden lg:flex items-center">
              <input
                type="text"
                placeholder="Search the store"
                value={searchQuery}
                onFocus={() => setSearchOpen1(true)} // Open search overlay on focus
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none"
              />
              <button
                title="Search"
                onClick={() => setSearchOpen1(true)} // Trigger search overlay
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-primary"
              >
                <FiSearch size={20} />
              </button>
              {searchOpen1 && (
                <div className="absolute top-full left-0 w-full bg-white shadow-lg border mt-2 p-4 z-40">
                  {/* Trending Section */}
                  <div className="mb-4">
                    <h2 className="text-sm font-bold mb-2">TRENDING NOW</h2>
                    <div className="flex gap-2 flex-wrap">
                      <button className="bg-gray-100 px-4 py-2 rounded-full text-xs">
                        <FiSearch className="inline mr-2" />
                        dempus
                      </button>
                      <button className="bg-gray-100 px-4 py-2 rounded-full text-xs">
                        <FiSearch className="inline mr-2" />
                        sample
                      </button>
                      <button className="bg-gray-100 px-4 py-2 rounded-full text-xs">
                        <FiSearch className="inline mr-2" />
                        magnus
                      </button>
                    </div>
                  </div>

                  {/* Filtered Products Section */}
                  <div>
                    <h2 className="text-sm font-bold mb-2">PRODUCTS</h2>
                    <div className="overflow-x-scroll px-2">
                      <div
                        className="flex space-x-4"
                        style={{ minWidth: "200%" }}
                      >
                        {filteredProducts.map((product, index) => (
                          <div key={index} className="w-1/3">
                            <ProductCard
                              product={product}
                              handleQuickAddClick={() => {}}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Right Section - Icons */}
            <div className="hidden lg:flex w-[15%] mr-4 justify-between items-center space-x-6 text-primary text-xs">
              <Link href="/wishlists" className="flex flex-col items-center">
                <FiHeart size={20} />
                <span className="hover:font-bold">Wish&nbsp;Lists</span>
              </Link>

              <Link href="/sign-in" className="flex flex-col items-center">
                <FiUser size={20} />
                <span className="hover:font-bold">Sign&nbsp;In</span>
              </Link>
              <Link
                href="/cart"
                className="flex flex-col items-center relative"
              >
                <FiShoppingCart size={20} />
                <span className="hover:font-bold">Cart</span>
                <div className="absolute -top-3 -right-2 bg-primary text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  0
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Dimmed Background Overlay */}
      {menuOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40"
          onClick={() => setMenuOpen(false)} // Close menu when clicking outside
        ></div>
      )}
      {/* Full-Screen Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-full bg-white z-50 transition-transform transform duration-500 ease-in-out ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ width: "80%" }} // 80% width as required
      >
        {/* Menu Header */}
        <div className="flex items-center justify-between px-4 py-4 border-b">
          <span className="text-xl font-bold">Menu</span>
          <button onClick={() => setMenuOpen(false)} className="text-2xl">
            <FiX />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col text-base font-medium text-gray-800">
          <Link
            href="/theme-demo"
            className="py-3 px-4 border-b"
            onClick={() => setMenuOpen(false)}
          >
            Theme Demo{" "}
            <span className="ml-2 bg-blue-100 text-blue-500 px-2 py-1 rounded text-xs">
              New
            </span>
          </Link>
          <Link
            href="/shop"
            className="py-3 px-4 border-b"
            onClick={() => setMenuOpen(false)}
          >
            Shop
          </Link>
          <Link
            href="/product"
            className="py-3 px-4 border-b"
            onClick={() => setMenuOpen(false)}
          >
            Product
          </Link>
          <Link
            href="/blog"
            className="py-3 px-4 border-b"
            onClick={() => setMenuOpen(false)}
          >
            Blog
          </Link>
          <Link
            href="/pages"
            className="py-3 px-4 border-b"
            onClick={() => setMenuOpen(false)}
          >
            Pages
          </Link>
          <Link
            href="/new-in"
            className="py-3 px-4 border-b"
            onClick={() => setMenuOpen(false)}
          >
            New In
          </Link>
          <Link
            href="/trend"
            className="py-3 px-4 border-b"
            onClick={() => setMenuOpen(false)}
          >
            Trend
          </Link>
          <Link
            href="/collections"
            className="py-3 px-4 border-b"
            onClick={() => setMenuOpen(false)}
          >
            Collections
          </Link>
        </nav>

        {/* User Links */}
        <div className="py-4  flex flex-col">
          <button
            className="py-3 px-4 flex items-center space-x-2 border-b"
            onClick={handleSignInClick}
          >
            <FiUser className="text-lg" />
            <span>Sign In</span>
          </button>
          <button
            className="py-3 px-4 flex items-center space-x-2 border-b"
            onClick={() => router.push("/create-account")}
          >
            <FiUser className="text-lg" />
            <span>Create an Account</span>
          </button>
          <button
            className="py-3 px-4 flex items-center space-x-2 border-b"
            onClick={handleWishlistClick}
          >
            <FiHeart className="text-lg" />
            <span>My Wish List</span>
          </button>
        </div>
      </div>

      <div
        className={`fixed top-0 left-0 h-full bg-white z-50 transition-transform transform duration-500 ease-in-out ${
          searchOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ width: "80%" }} // 80% width as required
      >
        <div className="flex items-center justify-between px-4 py-4 border-b">
          <span className="text-xl font-bold">Search</span>
          <button
            onClick={() => setSearchOpen(false)}
            className="text-2xl text-gray-600"
          >
            <FiX />
          </button>
        </div>

        {/* Search Input */}
        <div className="p-4 border-b">
          <div className="flex items-center border rounded-md">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 px-4 py-2 focus:outline-none"
            />
            <button
              onClick={handleSearch}
              className="px-4 py-2 text-primary"
              title="Search"
            >
              <FiSearch size={20} />
            </button>
          </div>
        </div>

        {/* Trending Section */}
        <div className="px-4 py-3">
          <h2 className="text-sm font-bold mb-2">TRENDING NOW</h2>
          <div className="flex gap-2 flex-wrap">
            <button className="bg-gray-100 px-4 py-2 rounded-full text-xs">
              <FiSearch className="inline mr-2" />
              dempus
            </button>
            <button className="bg-gray-100 px-4 py-2 rounded-full text-xs">
              <FiSearch className="inline mr-2" />
              sample
            </button>
            <button className="bg-gray-100 px-4 py-2 rounded-full text-xs">
              <FiSearch className="inline mr-2" />
              magnus
            </button>
          </div>
        </div>

        {/* Popular Products */}
        <div className="px-4 py-3 border-t">
          <h2 className="text-sm font-bold mb-2">PRODUCTS</h2>
          <div className="overflow-x-scroll px-2">
            <div className="flex space-x-4" style={{ minWidth: "200%" }}>
              {filteredProducts.map((product, index) => (
                <div key={index} className="w-1/3">
                  <ProductCard
                    product={product}
                    handleQuickAddClick={() => {}}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Navigation Bar */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-lg z-10">
        <div className="md:hidden flex justify-around items-center py-2">
          <Link href="/" className="flex flex-col items-center">
            <FiHome size={24} />
            <span className="text-xs">Home</span>
          </Link>

          <button
            onClick={() => setSearchOpen(true)}
            className="flex flex-col items-center"
          >
            <FiSearch size={24} />
            <span className="text-xs">Search</span>
          </button>

          <Link href="/collection" className="flex flex-col items-center">
            <FiGrid size={24} />
            <span className="text-xs">Collection</span>
          </Link>

          <Link href="/account" className="flex flex-col items-center">
            <FiUser size={24} />
            <span className="text-xs">Account</span>
          </Link>

          <Link href="/cart" className="flex flex-col items-center relative">
            <FiShoppingCart size={24} />
            <div className="absolute -top-2 -right-3 bg-primary text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              0
            </div>
            <span className="text-xs">Cart</span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
