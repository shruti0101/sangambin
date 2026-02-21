"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";  // ✅ FIXED LINE

import "swiper/css";
import "swiper/css/pagination";

const products = [
  {
    id: 1,
    title: "Plastic Dustbins",
    desc: "Heavy-duty 120L & 240L bins with wheels",
    img: "/catimg/15l Plastic Dustbin/1.webp",
  },
  {
    id: 2,
    title: "Bio-Medical Bins",
    desc: "Color-coded safe disposal containers",
    img: "/catimg/660L Bio Bins/2.webp",
  },

  {
    id: 3,
    title: "Garbage Bins",
    desc: "Tear-resistant, biodegradable liners",
    img: "/catimg/10L Blue Plastic Garbage Bin/1.webp",
  },

  {
    id: 4,
    title: "Plastic Wheeled Dustbins",
    desc: "Efficient floor cleaning systems",
    img: "/catimg/Plastic Wheeled Dustbins 240l/1.webp",
  },

   {
    id: 5,
    title: " Large Wheeled Pedal Dustbins",
    desc: "Efficient floor cleaning systems",
    img: "/catimg/120L Large Wheeled Pedal Dustbins/1.webp",
  },

   {
    id: 6,
    title: "Litter Bins",
    desc: "Efficient floor cleaning systems",
    img: "/catimg/litterbins.jpeg",
  },
];

export default function OurProducts() {
  return (
  <section
  style={{ backgroundImage: "url(/try1.png)" }}
  className="relative bg-center bg-cover py-17 px-6 overflow-hidden"
>

  
  {/* Dark green overlay for contrast */}
  <div className="absolute inset-0 bg-[#0b3d26]/30 backdrop-blur-[1px]"></div>

  <div className="w-full md:px-10 mx-auto relative z-10">


     

    {/* Heading + Description */}
    <div className="text-center mb-12 max-w-5xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-white">
        Our Premium Products
      </h2>

      <div className="w-24 h-1 bg-blue-500 mx-auto mt-3 rounded-full"></div>

      <p className="mt-6 text-white text-xs md:text-lg text-justify md:text-center leading-relaxed ">
        At <span className="font-semibold">Sangam Plastic Industries Pvt. Ltd</span>, 
        we offer a wide range of high-quality plastic waste management solutions 
        designed to meet the needs of homes, hospitals, offices, and commercial spaces. 
        As a trusted plastic dustbin manufacturer, hospital dustbin manufacturer, and 
        plastic pedal bins manufacturer, we ensure every product is durable, hygienic, 
        and reliable.
      </p>
    </div>

    {/* Swiper Slider */}
    <Swiper
      modules={[Autoplay, Pagination]}
      spaceBetween={16}
      slidesPerView={1}
      autoplay={{ delay: 2500 }}
      pagination={{ clickable: true }}
      breakpoints={{
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
        1280: { slidesPerView: 3 },
      }}
      className="pb-12"
    >
      {products.map((item) => (
        <SwiperSlide key={item.id} className="!flex justify-center">
          <div
            className="
              w-full max-w-[400px]
              backdrop-blur-xl 
              bg-white/20
              border border-white/30
              rounded-2xl
              shadow-lg
              overflow-hidden
              transition-all duration-300
              hover:-translate-y-2
              hover:shadow-xl
              group
            "
          >
            {/* Image */}
            <div className="p-4 overflow-hidden rounded-2xl">
              <Image
                src={item.img}
                width={400}
                height={300}
                alt={item.title}
                className="
                  w-full 
                  h-[260px] 
                  object-contain 
                  rounded-xl
                  transition-transform duration-500
                  group-hover:scale-105 bg-white
                "
              />
            </div>

            {/* Text */}
            <div className="px-5 pb-6 pt-2 text-white">
              <h3 className="text-lg font-semibold mb-1">
                {item.title}
              </h3>
              <p className="text-sm text-white/80 leading-relaxed">
                {item.desc}
              </p>

              {/* Animated underline */}
              <div className="mt-3 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>

    {/* VIEW ALL PRODUCTS BUTTON */}
    <div className="text-center relative mt-8">


      <button
        className="
          px-8 py-3 
          bg-white 
          text-black 
          font-medium 
          rounded-full
          shadow-lg
          transition-all duration-300
          hover:bg-gray-100
          hover:scale-105
        "
      >
        View All Products →
      </button>
    </div>

  </div>
</section>

  );
}
