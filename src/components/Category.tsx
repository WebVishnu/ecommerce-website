import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';

const categories = [
  { name: 'Mobile Phones', image: '/products/p1.png' },
  { name: 'Laptops & Tablets', image: '/products/p2.jpg' },
  { name: 'Televisions', image: '/products/p3.jpg' },
  { name: 'PCs & Accessories', image: '/products/p4.jpg' },
  { name: 'Audio & Video', image: '/products/p5.jpeg' },
  { name: 'Mobile Phones', image: '/products/p1.png' },
  { name: 'Laptops & Tablets', image: '/products/p2.jpg' },
  { name: 'Televisions', image: '/products/p3.jpg' },
  { name: 'PCs & Accessories', image: '/products/p4.jpg' },
  { name: 'Audio & Video', image: '/products/p5.jpeg' },
];

const CategorySlider = () => {
  return (
    <div className="py-8 max-w-[1200px] mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-sm md:text-2xl font-bold">Shop By Categories</h2>
        <Link href="/all-categories" className="text-blue-500">
        View all
        </Link>
      </div>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={2}
        navigation
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 5,
          },
          1280: {
            slidesPerView: 6,
          },
        }}
        className="category-slider"
      >
        {categories.map((category, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center">
              <div className="w-28 h-28 bg-white rounded-full overflow-hidden mb-2">
                <Image
                  src={category.image}
                  alt={category.name}
                  width={112} // 28*4 for large images
                  height={112}
                  objectFit="contain"
                />
              </div>
              <p className="text-center text-sm font-medium">{category.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CategorySlider;
