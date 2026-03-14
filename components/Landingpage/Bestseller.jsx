"use client";

import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Link from "next/link";
import { FaChevronUp } from "react-icons/fa";

import "swiper/css";
import "swiper/css/navigation";


/* Map service titles to URLs (from navbar) */


/* Carousel data */
const services = [
  { title: "120L PP Central Wheeled Bio Bin", image: "/product/120L PP Central Wheeled Pedal Bio Bin/1.webp" ,link:"/products/120l-pp-central-wheeled-bio-bin" },

  { title: "120l large foot operated wheeled dustbin", image: "/product/120L Large Wheeled Pedal Dustbins/2.webp", link:"/products/120l-large-foot-operated-wheeled-dustbin" },

  { title: "240l plastic wheeled dustbin", image: "/product/Plastic Wheeled Dustbins 240l/2.webp",link:"/products/240l-plastic-wheeled-dustbin" },

  { title: "240l PP foot operated wheeled bin", image: "/product/120L PP Pedal Bio Bin/1.webp",link:"/products/240l-pp-foot-operated-wheeled-bin" },

  { title: "660L Four Wheel Plastic Dustbin", image: "/product/1100L Pedal Garbage Bins/1.webp", link:"/products/660l-four-wheel-plastic-dustbin" },

  { title: "1100L PP Wheeled Bio Bin", image: "/product/1100L PP Wheeled Bio Bin/3.webp",link:"/products/1100l-pp-wheeled-bio-bin" },

];

const ServicesCarousel = () => {


  return (
    <section className="py-3 mt-10 bg-gradient-to-br from-white to-blue-50">
      {/* Heading */}
      <div
        className="text-center max-w-3xl mx-auto mb-8 px-4"
      
      >
         <div className="flex items-center  justify-center">
          <div className="w-10 h-1 bg-sky-500 mr-3 rounded-full" />
          <h3 className="text-sky-600 font-bold uppercase tracking-[0.15em] text-sm sm:text-base">
            Our Bestsellers
          </h3>
          <div className="w-10 h-1 bg-sky-500 ml-3 rounded-full" />
        </div>

        <h2 className="relative inline-block font-bold text-[#1E2939] text-3xl sm:text-3xl md:text-5xl leading-snug group">
          Our Featured Product
      
        </h2>
      </div>

      {/* Carousel */}
      <div className="md:max-w-7xl mx-auto px-4">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          autoplay={{ delay: 4000 }}
          loop
          spaceBetween={20}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 1.2 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {services.map((service, index) => (
         <SwiperSlide key={index}>
  <Link href={service.link}>
    <div className="relative h-[420px] sm:h-[440px] border border-black  w-full max-w-sm mx-auto rounded-xl overflow-hidden shadow-lg cursor-pointer">

      {/* Product Image */}
      <img
        src={service.image}
        alt={service.title}
        className="w-full h-full object-contain"
      />

      {/* Product Name Bottom */}
      <div className="absolute bottom-0 left-0 w-full bg-stone-300 py-4 px-3 text-center">
        <h3 className="text-lg md:text-xl font-semibold capitalize text-gray-800">
          {service.title}
        </h3>
      </div>

    </div>
  </Link>
</SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ServicesCarousel;
