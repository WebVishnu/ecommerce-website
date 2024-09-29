import { useState } from 'react';
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaPinterestP, FaSnapchatGhost, FaTwitter, FaPlus, FaMinus } from 'react-icons/fa';

export default function Footer() {
  // State to manage the open sections in the accordion
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <footer className="bg-gray-100 text-gray-800 px-6 py-8 md:px-10 md:py-12">
      <div className="container mx-auto">
        {/* Accordion for mobile */}
        <div className="md:hidden">
          {/* Shop Section */}
          <div className="mb-4">
            <button
              onClick={() => toggleSection('shop')}
              className="flex justify-between items-center w-full text-left font-bold text-lg py-2 border-b border-gray-300"
            >
              <span>SHOP</span>
              {openSection === 'shop' ? <FaMinus size={20} /> : <FaPlus size={20} />}
            </button>
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                openSection === 'shop' ? 'max-h-96' : 'max-h-0'
              }`}
            >
              <ul className="mt-2 space-y-2">
                {[
                  'Electronics',
                  'Computers & Laptops',
                  'Smartphones & Tablets',
                  'Cameras',
                  'Video Games & Systems',
                  'Home Furniture',
                  'Weekly Special',
                ].map((item) => (
                  <li key={item}>
                    <Link href="#" className="hover:text-my-blue transition duration-300">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Top Brands Section */}
          <div className="mb-4">
            <button
              onClick={() => toggleSection('brands')}
              className="flex justify-between items-center w-full text-left font-bold text-lg py-2 border-b border-gray-300"
            >
              <span>TOP BRANDS</span>
              {openSection === 'brands' ? <FaMinus size={20} /> : <FaPlus size={20} />}
            </button>
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                openSection === 'brands' ? 'max-h-96' : 'max-h-0'
              }`}
            >
              <ul className="mt-2 space-y-2">
                {['Coco Lee', 'Anna', 'French Connection', 'Jimmy Choo', 'Chanel', 'Collette', 'View All'].map(
                  (item) => (
                    <li key={item}>
                      <Link href="#" className="hover:text-my-blue transition duration-300">
                        {item}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>

          {/* Further Info Section */}
          <div className="mb-4">
            <button
              onClick={() => toggleSection('info')}
              className="flex justify-between items-center w-full text-left font-bold text-lg py-2 border-b border-gray-300"
            >
              <span>FURTHER INFO.</span>
              {openSection === 'info' ? <FaMinus size={20} /> : <FaPlus size={20} />}
            </button>
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                openSection === 'info' ? 'max-h-96' : 'max-h-0'
              }`}
            >
              <ul className="mt-2 space-y-2">
                {['About Us', 'Contact Us', 'Shipping & Return', 'Privacy Policy', 'Terms & Conditions', 'Blog'].map(
                  (item) => (
                    <li key={item}>
                      <Link href="#" className="hover:text-my-blue transition duration-300">
                        {item}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>

          {/* Customer Service Section */}
          <div className="mb-4">
            <button
              onClick={() => toggleSection('service')}
              className="flex justify-between items-center w-full text-left font-bold text-lg py-2 border-b border-gray-300"
            >
              <span>CUSTOMER SERVICE</span>
              {openSection === 'service' ? <FaMinus size={20} /> : <FaPlus size={20} />}
            </button>
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                openSection === 'service' ? 'max-h-96' : 'max-h-0'
              }`}
            >
              <ul className="mt-2 space-y-2">
                {[
                  'Search Terms',
                  'Advanced Search',
                  'Orders And Returns',
                  'Contact Us',
                  'Theme FAQs',
                  'Consultant',
                  'Store Locations',
                ].map((item) => (
                  <li key={item}>
                    <Link href="#" className="hover:text-my-blue transition duration-300">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Regular grid layout for desktop */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Shop Column */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-my-blue">SHOP</h3>
            <ul className="space-y-2">
              {['Electronics', 'Computers & Laptops', 'Smartphones & Tablets', 'Cameras', 'Video Games & Systems', 'Home Furniture', 'Weekly Special'].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-my-blue transition duration-300">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Top Brands Column */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-my-blue">TOP BRANDS</h3>
            <ul className="space-y-2">
              {['Coco Lee', 'Anna', 'French Connection', 'Jimmy Choo', 'Chanel', 'Collette', 'View All'].map(
                (item) => (
                  <li key={item}>
                    <Link href="#" className="hover:text-my-blue transition duration-300">
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Further Info Column */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-my-blue">FURTHER INFO.</h3>
            <ul className="space-y-2">
              {['About Us', 'Contact Us', 'Shipping & Return', 'Privacy Policy', 'Terms & Conditions', 'Blog'].map(
                (item) => (
                  <li key={item}>
                    <Link href="#" className="hover:text-my-blue transition duration-300">
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Customer Service Column */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-my-blue">CUSTOMER SERVICE</h3>
            <ul className="space-y-2">
              {[
                'Search Terms',
                'Advanced Search',
                'Orders And Returns',
                'Contact Us',
                'Theme FAQs',
                'Consultant',
                'Store Locations',
              ].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-my-blue transition duration-300">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info and Social Media */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center border-t border-gray-300 pt-8">
          {/* Contact Info */}
          <div className="mb-4 lg:mb-0 space-y-2">
            <p>
              <strong>Address:</strong> 685 Market Street, San Francisco, CA 94105, US
            </p>
            <p>
              <strong>Phone:</strong> (415) 555-5555
            </p>
            <p>
              <strong>Email:</strong> vitco@domain.com
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4">
            {[
              { icon: <FaFacebookF size={20} />, label: 'Facebook' },
              { icon: <FaInstagram size={20} />, label: 'Instagram' },
              { icon: <FaPinterestP size={20} />, label: 'Pinterest' },
              { icon: <FaSnapchatGhost size={20} />, label: 'Snapchat' },
              { icon: <FaTwitter size={20} />, label: 'Twitter' },
            ].map((social) => (
              <Link
                key={social.label}
                href="#"
                className="bg-white text-gray-600 hover:text-white hover:bg-my-blue p-2 rounded-full transition duration-300 ease-in-out"
                aria-label={social.label}
              >
                {social.icon}
              </Link>
            ))}
          </div>
        </div>

        {/* Copyright and Payment Methods */}
        <div className="mt-8 flex flex-col lg:flex-row justify-between items-start lg:items-center border-t border-gray-300 pt-8">
          <p className="text-sm text-gray-600">&copy; 2024, Vitco. All Rights Reserved. Themes By Vitco</p>
        </div>
      </div>
    </footer>
  );
}
