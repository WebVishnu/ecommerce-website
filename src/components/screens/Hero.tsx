import React from 'react'
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from 'next/navigation';

function Hero() {
  const router = useRouter();
  return (
    <div className="container mx-auto px-4 relative">
        <main className="flex flex-col md:flex-row items-center justify-between py-16">
          <motion.div
            className="md:w-1/2 relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-full overflow-hidden flex justify-center items-center">
              <Image
                src="/main.jpg"
                alt="Happy couple shopping online"
                width={1000}
                height={1000}
                className="object-contain w-[450px] h-auto"
                priority={true}
              />
            </div>
          </motion.div>

          <motion.div
            className="md:w-1/2 mt-8 md:mt-0 md:pl-12"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-my-blue mb-6 font-[family-name:var(--font-montserrat-bold)] leading-tight">
              SHOP ONLINE
            </h1>
            <h2 className="text-2xl md:text-4xl font-light italic mb-6 font-[family-name:var(--font-montserrat-regular)]">
              Made easy!
            </h2>
            <p className="mb-8 text-lg font-[family-name:var(--font-montserrat-regular)] text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation.
            </p>
            <button onClick={
              () => {
                router.push('/auth')
              }
            } className="bg-my-blue text-white hover:bg-[#306d90] duration-300 px-8 py-3 text-lg font-[family-name:var(--font-montserrat-bold)] rounded-lg flex items-center shadow-lg">
              Shop Now
              <svg
                className="w-6 h-6 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </motion.div>
        </main>
      </div>
  )
}

export default Hero