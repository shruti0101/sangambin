"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";

import { Autoplay, FreeMode } from "swiper/modules";
import Link from "next/link";

const products = [
  {
    title: "Garbage Bag",
    image: "/Garbage-Bag.webp",
    href: "https://garbagebagmanufacturer.in/",
  },
  {
    title: "Litter Bin",
    image: "/new/litter.webp",
    href: "https://sharpcontainermanufacturer.com/",
  },
  {
    title: "Wheeled Bin",
    image: "/new/wheel.webp",
    href: "https://sharpcontainermanufacturer.com/",
  },
  {
    title: "Outdoor Dustbin",
    image: "/new/1.webp",
    href: "https://wringertrolleymanufacturer.com/",
  },
];

const categories = [
  {
    icon: "⏱",
    text: "Delivery timelines that slip past your deadline",
  },
  {
    icon: "⚠️",
    text: "Quality that varies from batch to batch",
  },
  {
    icon: "📦",
    text: "Shipments that arrive incomplete",
  },
  {
    icon: "💲",
    text: "Prices that move after you've already quoted your client",
  },
];

export default function WhyChoose() {
  return (
    <section className="bg-[#f4f6f3] py-15 px-4 md:px-8">
      <div className="max-w-6xl mx-auto px-2 sm:px-4">
  
  {/* 2 Column Layout */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-start">
    
    {/* LEFT SIDE (Heading) */}
    <div>
      <p className="text-[10px] sm:text-xs md:text-sm tracking-[0.15em] md:tracking-[0.2em] text-[#a67c52] mb-3 sm:mb-4 uppercase">
        — WHY PROCUREMENT TEAMS SWITCH SUPPLIERS
      </p>

      <h1 className="
        text-2xl 
        sm:text-3xl 
        md:text-5xl 
        font-bold 
        text-[#1e2d24] 
        leading-snug md:leading-tight
      ">
        You won the tender. Now you need a supplier who won't cost you the contract.
      </h1>

      <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-[#1e2d24] font-medium">
        Polywell exists to remove these risks from your supply chain.
      </p>
    </div>

    {/* RIGHT SIDE */}
    <div className="w-full">
      
      {/* Desktop Grid */}
      <div className="hidden md:grid grid-cols-1 gap-5">
        {categories.map((item, i) => (
          <div
            key={i}
            className="flex items-start gap-4 bg-white rounded-2xl p-4 md:p-5 border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
          >
            <div className="w-9 h-9 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-[#fceae6] text-base md:text-lg shrink-0">
              {item.icon}
            </div>

            <p className="text-gray-700 mt-1 text-sm md:text-base leading-relaxed">
              {item.text}
            </p>
          </div>
        ))}
      </div>

      {/* Mobile Slider */}

<div className="md:hidden mt-6">
  <Swiper
    slidesPerView={1}
    spaceBetween={12}
    loop={true}
    grabCursor={true}
    modules={[Autoplay]}
    
    autoplay={{
      delay: 2500, // 2.5 sec
      disableOnInteraction: false, // keeps autoplay after swipe
      pauseOnMouseEnter: true, // optional (desktop hover pause)
    }}
  >
    {categories.map((item, i) => (
      <SwiperSlide key={i}>
        <div className="bg-white rounded-2xl p-4 border border-gray-200 shadow-sm h-full">
          <div className="flex items-start gap-3">
            
            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#fceae6] text-sm shrink-0">
              {item.icon}
            </div>

            <p className="text-gray-700 mt-1 text-sm leading-relaxed">
              {item.text}
            </p>

          </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</div>

    </div>
  </div>

</div>






    <section className="bg-[#f4f6f3] pt-16 px-4 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-2xl md:text-4xl font-bold text-[#1e2d24] mb-8">
          Our Categories
        </h2>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-4 gap-6">
          {products.map((item, i) => (
            <a
              key={i}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-xl overflow-hidden shadow-sm border hover:shadow-md transition"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition"
                />
              </div>
              <div className="p-3 bg-[#0f5d3f] text-center">
                <p className="font-medium text-lg text-white">{item.title}</p>
              </div>
            </a>
          ))}
        </div>

        {/* Mobile Slider */}
        <div className="md:hidden">
          <Swiper
            slidesPerView={1.3}
            spaceBetween={12}
            freeMode={true}
            modules={[FreeMode]}
          >
            {products.map((item, i) => (
              <SwiperSlide key={i}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-white rounded-xl overflow-hidden shadow-sm border"
                >
                  <div className="aspect-square">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-3 text-center">
                    <p className="text-sm font-medium">{item.title}</p>
                  </div>
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
       
      </div>

       <div className=" mt-4 flex justify-center items-center">
                  <Link
                    href="https://wa.link/5alazl"
                    className="bg-green-500 py-3 bg-gray-50 text-white whitespace-nowrap px-12 font-semibold rounded-full shadow hover:bg-green-600  transition hover:border "
                  >
                    Check Bulk Prices Instantly
                  </Link>
                </div>
    </section>
 
    </section>
  );
}