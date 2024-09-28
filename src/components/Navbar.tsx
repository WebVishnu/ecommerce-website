"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FiChevronDown, FiMenu, FiX } from "react-icons/fi";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<string | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [language, setLanguage] = useState("EN");
  const [menuOpen, setMenuOpen] = useState(false); // State for mobile menu toggle

  const router = useRouter();

  // Track scroll direction and set scroll behavior
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

  // Dynamic navigation items
  const navItems = [
    { name: "HOME", href: "/" },
    {
      name: "SHOP",
      href: "#",
      dropdown: [
        { name: "Men", href: "/shop/men" },
        { name: "Women", href: "/shop/women" },
        { name: "Kids", href: "/shop/kids" },
      ],
    },
    {
      name: "PRODUCT",
      href: "#",
      dropdown: [
        { name: "New Arrivals", href: "/product/new-arrivals" },
        { name: "Best Sellers", href: "/product/bestsellers" },
        { name: "On Sale", href: "/product/sale" },
      ],
    },
    { name: "BLOG", href: "/blog" },
    { name: "PAGES", href: "/pages" },
    { name: "NEW IN", href: "/new-in" },
    { name: "TREND", href: "/trend" },
    { name: "COLLECTIONS", href: "/collections" },
  ];

  const toggleDropdown = (dropdown: string) => {
    setDropdownOpen(dropdownOpen === dropdown ? null : dropdown);
  };

  const handleSearch = () => {
    if (searchQuery.trim()) {
      router.push(`/search?q=${searchQuery}`);
    }
  };

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);
  };

  return (
    <header className="w-full fixed top-0 left-0 z-50">
      {/* Wrapper for both announcement bar and navbar */}
      <div
        className={`transition-all duration-500 ease-in-out ${
          isScrolled && scrollDirection === "down"
            ? "-translate-y-full opacity-0"
            : "translate-y-0 opacity-100"
        }`}
        style={{ transition: "all 0.5s ease" }} // Adding smooth transition effect
      >
        {/* Announcement bar */}
        <div className="bg-my-blue/20 py-2 overflow-hidden relative">
          <div className="flex items-center justify-start space-x-10 animate-marquee">
            <div className="marquee-content">
              <span className="text-my-blue text-xs md:text-sm">
                ⚡ Summer sale: Up to 70% off selected items ⚡
              </span>
              <span className="text-my-blue text-xs md:text-sm">
                ⚡ Limited time offer: Free shipping on orders above $50! ⚡
              </span>
              <span className="text-my-blue text-xs md:text-sm">
                ⚡ Special discount for new arrivals! ⚡
              </span>
            </div>
          </div>
        </div>

        {/* Main navigation bar */}
        <div
          className={`bg-white flex justify-between items-center px-4 py-3 md:px-8 lg:px-16 transition-all duration-500 ease-in-out ${
            isScrolled && scrollDirection === "down"
              ? "-translate-y-full opacity-0"
              : "translate-y-0 opacity-100"
          } ${isScrolled ? "shadow-md" : ""}`}
          style={{ transition: "all 0.5s ease" }} // Adding smooth transition effect
        >
          {/* Left Section (Logo) */}
          <div className="flex items-center">
            <Image src="/vitco.png" alt="Logo" width={80} height={40} />
          </div>

          {/* Center Section (Search) */}
          <div className="hidden md:flex flex-grow justify-center items-center space-x-4">
            <Select>
              <SelectTrigger className="w-[100px] font-[family-name:var(--font-montserrat-regular)]">
                <SelectValue placeholder="All" />
              </SelectTrigger>
              <SelectContent className="font-[family-name:var(--font-montserrat-regular)]">
                <SelectItem value="All">All</SelectItem>
                <SelectItem value="Shirt">Shirt</SelectItem>
                <SelectItem value="Pants">Pants</SelectItem>
                <SelectItem value="Shoes">Shoes</SelectItem>
              </SelectContent>
            </Select>

            <div className="relative w-full max-w-sm md:max-w-md lg:max-w-lg">
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-4 py-2 text-xs md:text-sm focus:outline-none focus:border-my-blue"
              />
              <button
                onClick={handleSearch}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-my-blue text-white px-2 py-1 md:px-4 md:py-1 rounded-md text-xs md:text-sm"
              >
                Search
              </button>
            </div>
          </div>

      
          {/* Right Section (Customer Service, Language, Sign In/Sign Up) */}
          <div className="hidden md:flex items-center space-x-4 md:space-x-6 text-xs md:text-sm">
            <div className="relative">
              <button
                onClick={() => toggleDropdown("language")}
                className="flex items-center space-x-1"
              >
                <span>{language}</span>
                <FiChevronDown />
              </button>
              {dropdownOpen === "language" && (
                <div className="absolute top-full left-0 mt-2 bg-white text-black rounded-lg shadow-lg animate-dropdown">
                  {["EN", "FR", "DE", "ES"].map((lang) => (
                    <button
                      key={lang}
                      onClick={() => handleLanguageChange(lang)}
                      className="block px-4 py-2 hover:bg-gray-200"
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <Link href="/sign-in" className="hover:underline">
              Sign In or Create an Account
            </Link>
          </div>

          {/* Menu Icon for Mobile */}
          <div className="flex md:hidden items-center">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? "" : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Full-Screen Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 z-50 flex flex-col justify-center items-center text-white transform transition-transform duration-700 ease-in-out ${
          menuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      >
        <button
        title="Close Menu"
          onClick={() => setMenuOpen(false)}
          className="absolute top-5 right-5 text-3xl"
        >
          <FiX />
        </button>
        <nav className="flex flex-col space-y-8 text-2xl">
          {navItems.map((item) => (
            <div key={item.name}>
              {item.dropdown ? (
                <>
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className="flex items-center space-x-2"
                  >
                    <span>{item.name}</span>
                    <FiChevronDown />
                  </button>
                  {dropdownOpen === item.name && (
                    <div className="flex flex-col space-y-4 ml-4 mt-2 animate-dropdown">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="hover:underline"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link href={item.href} className="hover:underline">
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </nav>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-dropdown {
          animation: slideDown 0.5s ease-in-out;
        }
      `}</style>

          <nav
        className={`bg-my-blue md:flex hidden items-center justify-center text-white py-2 px-2 sm:px-4 md:px-8 lg:px-16 transition-transform duration-500 ease-in-out ${
          isScrolled ? "fixed top-0 left-0 w-full shadow-lg translate-y-0" : ""
        }`}
        style={{ transition: "transform 0.5s ease, opacity 0.5s ease" }}
      >
        <ul className="flex justify-center space-x-2 sm:space-x-4 md:space-x-6 text-xs md:text-sm">
          {navItems.map((item) => (
            <li key={item.name} className="relative">
              {item.dropdown ? (
                <>
                  <button
                    // on hover dropdown 
                    onMouseEnter={() => setDropdownOpen(item.name)}
                    onMouseLeave={() => setDropdownOpen(null)}
                    className="flex items-center space-x-1"
                  >
                    <span>{item.name}</span>
                    <FiChevronDown />
                  </button>
                  {dropdownOpen === item.name && (
                    <div className="absolute top-full left-0 mt-2 bg-white text-black   shadow-lg">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-2 hover:bg-gray-200"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link href={item.href} className="flex items-center space-x-1">
                  <span>{item.name}</span>
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
