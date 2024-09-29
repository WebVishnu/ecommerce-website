import React from 'react';
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

function Hero() {
  return (
    <div className="relative w-full h-[30vh] md:h-[70vh] lg:h-[90vh]"> {/* Responsive height based on screen size */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 5000 }}
        pagination={{ clickable: true }}
        className="w-full h-full"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="relative w-full h-full pt-10 md:pt-20">
            <Image
              src="/main.jpg"
              alt="Main Image 1"
              layout="fill"  // Makes the image cover the entire slide
              objectFit="cover"  // Ensures the image scales correctly
              quality={100}  // High image quality
              priority={true}  // Ensures image is preloaded for better performance
              className="w-full h-full object-contain md:object-cover"  // Tailwind utility classes for full cover
            />
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="relative w-full h-full">
            <Image
              src="/main1.jpg"
              alt="Main Image 2"
              layout="fill"
              objectFit="cover"
              quality={100}
              className="w-full h-full object-contain md:object-cover"  // Tailwind utility classes for full cover
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Hero;
