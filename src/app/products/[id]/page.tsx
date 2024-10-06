'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Toaster, toast } from 'sonner';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { FiHeart, FiTruck, FiX } from 'react-icons/fi';
import ProductCard from '@/components/ProductCard';
import ProductDataJson from '@/json/ProductData';
import { Product } from '@/types';
import QuickAddModal from '@/components/Modal/QuickAddModal';
import Footer from '@/components/Footer';

// Sample product data
const ProductData = {
  id: '1',
  images: [
    "http://5.imimg.com/data5/SELLER/Default/2024/3/400053328/FX/GW/UH/12804014/mini-v-bond-inbuilt-battery-24-ah-500x500.jpeg",
    "http://5.imimg.com/data5/SELLER/Default/2024/3/400054179/HR/GB/RX/12804014/mini-v-bond-inbuilt-battery-24-ah-500x500.jpeg",
    "http://5.imimg.com/data5/SELLER/Default/2023/9/342417515/VC/OR/RT/12804014/mini-v-bond-inbuilt-battery-24-ah-500x500.jpg",
  ],
  desc: "Nam tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque diam dolor, elementum etos lobortis...",
  name: 'Product 1 - Electronics Device',
  originalPrice: 999.99,
  salePrice: 899.99,
  onSale: true,
  stock: 20,
  vendor: 'TechCorp',
  availability: 'In Stock',
  type: 'Electronics',
  customersViewing: 3,
};

export default function ProductPage() {
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [isLiked, setIsLiked] = useState(false); // State for Like button
  const [selectedVariant, setSelectedVariant] = useState<string | null>(null); // State for Selected Variant
  const [isShippingModalOpen, setIsShippingModalOpen] = useState(false); // State for Shipping Modal

  const router = useRouter();
  

  const product = ProductData;
  
  const handleQuantityChange = (type: string) => {
    if (type === 'decrease' && quantity > 1) {
      setQuantity(quantity - 1);
    } else if (type === 'increase') {
      setQuantity(quantity + 1);
    }
  };

  const handleAddToCart = () => {
    toast.success('Added to cart');
    setAddedToCart(true);
  };

  const handleGoToCart = () => {
    router.push('/cart');
  };

  const handleLikeButtonClick = () => {
    setIsLiked(!isLiked); // Toggle liked state
  };

  const handleShippingClick = () => {
    setIsShippingModalOpen(true); // Open shipping modal
  };

  const handleModalClose = () => {
    setIsShippingModalOpen(false); // Close shipping modal
  };

  const handleVariantClick = (variant: string) => {
    setSelectedVariant(variant); // Set the selected variant
  };

  const priceToDisplay = product.onSale && product.salePrice ? product.salePrice : product.originalPrice;
  const subtotal = (priceToDisplay * quantity).toFixed(2);

  const products = ProductDataJson(); 

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isQuickAddModalOpen, setIsQuickAddModalOpen] = useState(false);

  const handleQuickAddClick = (product: Product) => {
    setSelectedProduct(product);
    setIsQuickAddModalOpen(true); // Open Quick Add Modal
  };

  return (
    <>
      <div className="container mx-auto max-w-7xl py-10 px-4 lg:px-0 font-[family-name:var(--font-montserrat-regular)]">
        <Toaster position="top-center" />
        <nav className="text-sm text-gray-500 mb-5">
          <Link href="/">Home</Link> / <Link href="/products">Product</Link> / {product.name}
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Product Image Section */}
          <div className="flex flex-col justify-center items-center">
            <Image
              src={product.images[currentImage]}
              alt={product.name}
              width={500}
              height={500}
              className="rounded-lg mb-4 h-[300px] md:h-[400px] lg:h-[500px] w-full object-cover"
            />
            {/* Thumbnail Gallery */}
            <div className="flex space-x-4">
              {product.images.map((url, index) => (
                <button key={index} onClick={() => setCurrentImage(index)} className="focus:outline-none">
                  <Image
                    src={url}
                    alt={`Thumbnail ${index + 1}`}
                    width={80}
                    height={80}
                    className={`rounded-lg border-2 object-cover h-12 w-12 md:h-16 md:w-16 lg:h-20 lg:w-20 ${
                      index === currentImage ? 'border-yellow-500' : 'border-gray-300'
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details Section */}
          <div className="bg-white rounded-lg">
            <h1 className="text-2xl lg:text-3xl font-semibold mb-4 text-gray-900">{product.name}</h1>
            <p className="text-gray-700 mb-6 text-sm leading-relaxed">{product.desc}</p>
            <p className="text-gray-700 mb-6 leading-relaxed">Product Type: {product.type}</p>

            <div className="mb-4 text-gray-600">
              {product.vendor && <p className="text-sm">Vendor: {product.vendor}</p>}
              <p className="text-sm">Availability: {product.availability || 'In Stock'}</p>
            </div>

            {/* Variant Selection */}
            <div className="mb-4">
              <div className="flex items-center">
                <span className="text-gray-600 text-sm mr-4">Variant:</span>
                <div className="flex items-center space-x-4">
                  {['S', 'M', 'L', 'XL'].map((variant) => (
                    <button
                      key={variant}
                      onClick={() => handleVariantClick(variant)}
                      className={`px-4 py-2 transition duration-300 ${
                        selectedVariant === variant ? 'bg-my-blue text-white' : 'bg-gray-100 hover:bg-gray-200'
                      }`}
                    >
                      {variant}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="mb-6">
              {product.onSale && product.salePrice ? (
                <>
                  <span className="line-through text-gray-400 text-lg">₹{product.originalPrice.toFixed(2)}</span>
                  <span className="ml-2 text-red-500 text-3xl lg:text-4xl font-bold">₹{product.salePrice.toFixed(2)}</span>
                </>
              ) : (
                <span className="text-3xl lg:text-4xl font-bold text-gray-900">₹{product.originalPrice.toFixed(2)}</span>
              )}
            </div>

            {product.stock !== undefined && (
              <div className="mb-6 text-red-500 text-sm font-semibold">
                <p className="flex items-center">
                  <span className="mr-2">🔥</span> Only {product.stock} left in stock
                </p>
              </div>
            )}

            {/* Shipping Button with Modal */}
            <div className="mb-4" onClick={handleShippingClick}>
              <button className="flex items-center text-gray-600 cursor-pointer hover:text-gray-800 transition-colors">
                <FiTruck size={20} className="mr-2" />
                Free Shipping
              </button>
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center mb-6">
              <span className="text-gray-600 text-sm mr-4">Quantity:</span>
              <div className="flex items-center border rounded-md">
                <button
                  onClick={() => handleQuantityChange('decrease')}
                  className="px-4 py-2 bg-gray-100 hover:bg-gray-200 transition duration-300"
                >
                  -
                </button>
                <input
                  type="text"
                  value={quantity}
                  readOnly
                  className="w-12 text-center border-t border-b py-2"
                />
                <button
                  onClick={() => handleQuantityChange('increase')}
                  className="px-4 py-2 bg-gray-100 hover:bg-gray-200 transition duration-300"
                >
                  +
                </button>
              </div>
            </div>

            <div className="flex justify-between items-center mb-8">
              <span className="text-lg font-semibold text-gray-600">Subtotal:</span>
              <span className="text-2xl font-bold text-gray-800">₹{subtotal}</span>
            </div>

            {/* Add to Cart / Go to Cart Button */}
            <div className="flex gap-x-3 items-center">
              {addedToCart ? (
                <button
                  className="w-full bg-green-500 text-white font-semibold py-3 rounded-md hover:bg-green-600 transition duration-300"
                  onClick={handleGoToCart}
                >
                  Go to Cart
                </button>
              ) : (
                <button
                  className="w-full bg-my-blue text-white font-semibold py-3 rounded-md hover:bg-sky-900 transition duration-500"
                  onClick={handleAddToCart}
                >
                  Add To Cart
                </button>
              )}

              <div className="flex justify-start items-center">
                <button
                  className={`${
                    isLiked ? 'bg-blue-100' : 'bg-white'
                  } text-gray-500 border border-gray-300 rounded-full p-2 shadow transition-colors duration-300`}
                  onClick={handleLikeButtonClick}
                >
                  <FiHeart size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="mt-8">
          <h2 className="text-lg font-semibold mb-2">Description</h2>
          <p className="text-gray-500 text-sm">
            Nam tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque diam dolor, elementum etos lobortis des mollis ut risus.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8">
          {/* Unordered List */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Sample Unordered List</h2>
            <ul className="text-sm list-disc pl-5 space-y-2">
              <li>Comodous in tempor ullamcorper miaculis.</li>
              <li>Pellentesque vitae neque mollis urna mattis laoreet.</li>
              <li>Divamus sit amet purus justo.</li>
              <li>Proin molestie egestas orci ac suscipit risus posuere.</li>
            </ul>
          </div>

          {/* Ordered List */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Sample Ordered List</h2>
            <ol className="text-sm list-decimal pl-5 space-y-2">
              <li>Comodous in tempor ullamcorper miaculis.</li>
              <li>Pellentesque vitae neque mollis urna mattis laoreet.</li>
              <li>Divamus sit amet purus justo.</li>
              <li>Proin molestie egestas orci ac suscipit risus posuere loremous.</li>
            </ol>
          </div>
        </div>

        <h1 className="text-2xl font-semibold mt-10 mb-4">Related Products</h1>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.slice(0, 4).map((product, index) => (
            <ProductCard
              key={index}
              product={product}
              handleQuickAddClick={handleQuickAddClick}
            />
          ))}
        </div>

        {/* Quick Add Modal */}
        {selectedProduct && (
          <QuickAddModal
            isOpen={isQuickAddModalOpen}
            onClose={() => setIsQuickAddModalOpen(false)}
            product={selectedProduct}
          />
        )}

        {/* Modal for Shipping Info */}
        {isShippingModalOpen && (
          <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
            <div className="bg-white relative p-8 rounded-md shadow-lg max-w-md w-full">
              <h2 className="text-xl font-semibold mb-4">Free Shipping</h2>
              <p className="text-gray-600">
                We can ship to virtually any address in the world. Note that some restrictions apply, and some products cannot be shipped to international destinations.
              </p>
              <button
                className="text-white p-2 absolute top-0 right-0 bg-black  transition-colors"
                onClick={handleModalClose}
              >
                <FiX size={24} />
              </button>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}
