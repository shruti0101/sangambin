"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import { SiWhatsapp } from "react-icons/si";
import Link from "next/link";
import ContactForm from "../Enquiry";
import { useState } from "react";

const products = [
  {
    title: "Pedel Dustbins",
    desc: "65L high-capacity, hands-free waste management solution.",
    image: "/new/pedel.webp",
  },
  {
    title: "60 L Foot Operated Dustbin",
    desc: "60L hands-free dustbin for clean, hygienic waste disposal.",
    image: "/new/foot.webp",
  },
  {
    title: "Garbage Stations (Roto)",
    desc: "Durable roto-moulded stations for efficient waste segregation.",
    image: "/new/4.webp",
  },
  {
    title: "Garbage Bins",
    desc: "Strong, durable bins for everyday waste management use.",
    image: "/Garbage-Bag.webp",
  },
  {
    title: "50L Red Plastic Pedal Dustbin",
    desc: "50L pedal bin for hygienic, hands-free waste disposal.",
    image: "/new/red.webp",
  },
  {
    title: "Biomedical Waste Bin (Roto)",
    desc: "Safe, hygienic bin for biomedical waste disposal use.",
    image: "/new/5.webp",
  },
];
export default function ProductsSection() {
  return (
    <section className="bg-white py-6 md:py-14 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <p className="text-orange-500 text-sm tracking-widest mb-3">
          — WHAT WE MANUFACTURE
        </p>

        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-10 leading-tight">
          Built for institutions. <br /> Supplied at scale.
        </h2>

        {/* ✅ DESKTOP GRID */}
        <div className="hidden md:grid grid-cols-3 gap-6">
          {products.map((item, i) => (
            <Card key={i} item={item} />
          ))}
        </div>

        {/* ✅ MOBILE SLIDER */}
        <div className="md:hidden">
          <Swiper
            slidesPerView={2}
            spaceBetween={12}
            loop={true}
            modules={[Autoplay]}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
          >
            {products.map((item, i) => (
              <SwiperSlide key={i}>
                <Card item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

/* 🔹 Reusable Card */
function Card({ item }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        className="bg-[#0F5D3F] rounded-2xl overflow-hidden border h-full"
      >
        {/* Image */}
        <div className="relative w-full h-40 md:h-94 bg-white">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover p-3 md:p-4"
          />
        </div>

        {/* Content */}
        <div className="p-4 md:p-5   text-white bg-[#0F5D3F]">
          <div className="h-14 md:h-20">
            <h3 className="font-semibold text-sm md:text-lg mb-2 md:mb-2">
              {item.title}
            </h3>

            <p className="hidden md:block text-xs md:text-sm text-white mb-3 md:mb-4">
              {item.desc}
            </p>
          </div>

          <div className=" flex flex-col mt-auto lg:flex-row gap-3">
            <span className="inline-block text-[10px] text-center md:text-sm font-bold border px-2 py-1 md:px-3 md:py-1 rounded-full">
              MIN. ORDER: 100 UNITS
            </span>
            <a
  href="https://wa.link/5alazl"
  target="_blank"
  rel="noopener noreferrer"
   onClick={(e) => e.stopPropagation()}
  className="flex justify-evenly md:justify-between items-center md:gap-2 text-[10px] md:text-sm font-bold border px-2 py-1 md:px-3 md:py-1 rounded-full"
>
  WhatsApp Now <SiWhatsapp size={18} />
</a>
          </div>
        </div>
      </div>
      <ContactForm isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
