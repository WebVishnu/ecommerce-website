import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';

const categories = [
  { name: 'Milk Analyzer', image: 'http://5.imimg.com/data5/SELLER/Default/2022/8/NP/KC/AN/12804014/v-bond-500x500.jpg' },
  { name: 'Khoya Making Machine', image: 'http://5.imimg.com/data5/SELLER/Default/2024/3/403260869/YM/IX/IC/12804014/khoya-making-machine-120-ltr-500x500.jpeg' },
  { name: 'Milk Vending Machine', image: 'http://5.imimg.com/data5/DW/AF/AN/SELLER-12804014/milk-vending-machine-500x500.jpg' },
  { name: 'Cream Separator Machine', image: 'http://5.imimg.com/data5/SELLER/Default/2023/5/310270409/DF/GN/OA/12804014/0i6a0578-500x500.jpeg' },
  { name: 'Milk Cooler', image: 'http://5.imimg.com/data5/SELLER/Default/2023/5/310270150/CU/PQ/VV/12804014/ss-bulk-milk-cooler-tank-500x500.jpeg' },
  { name: 'DEEP FREEZER', image: 'http://5.imimg.com/data5/SELLER/Default/2023/5/310270516/NF/MN/TG/12804014/deep-freezer-500x500.jpeg' },
  { name: 'Inverter Battery', image: 'http://5.imimg.com/data5/SELLER/Default/2024/3/400053328/FX/GW/UH/12804014/mini-v-bond-inbuilt-battery-24-ah-500x500.jpeg' },
  { name: 'Milking Machine', image: 'http://5.imimg.com/data5/SELLER/Default/2020/10/WE/SF/VM/12804014/img-20200519-wa0018-500x500.jpg' },
  { name: 'Can Scrubber', image: 'http://5.imimg.com/data5/SELLER/Default/2020/10/IL/SK/UL/12804014/can-scrubber-500x500.jpg' },
  { name: 'Dairy Products', image: 'http://5.imimg.com/data5/SELLER/Default/2024/1/377585162/JX/VG/HB/12804014/whatsapp-image-2024-01-16-at-12-39-59-pm-500x500.jpeg' },
];

const CategorySlider = () => {
  return (
    <div className="mx-auto">
      <div className="flex justify-between items-center mb-6">
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
