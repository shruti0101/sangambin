"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const Certificates = () => {


  const certificates = [
    {
      id: 1,
      src: "/certificate/1.webp",
      alt: "Certificate 1",
    },
    {
      id: 2,
      src: "/certificate/2.webp",
      alt: "Certificate 2",
    },
    {
      id: 3,
      src: "/certificate/3.webp",
      alt: "Certificate 3",
    },

    {
      id: 4,
      src: "/certificate/4.webp",
      alt: "Certificate 3",
    },

    {
      id: 5,
      src: "/certificate/5.webp",
      alt: "Certificate 3",
    },

    {
      id: 6,
      src: "/certificate/6.webp",
      alt: "Certificate 3",
    },

    {
      id: 7,
      src: "/certificate/7.webp",
      alt: "Certificate 3",
    },

    {
      id: 8,
      src: "/certificate/8.webp",
      alt: "Certificate 3",
    },

    {
      id: 9,
      src: "/certificate/9.webp",
      alt: "Certificate 3",
    },

    // {
    //   id: 10,
    //   src: "/certificate/10.webp",
    //   alt: "Certificate 3",
    // },

    {
      id: 11,
      src: "/certificate/11.webp",
      alt: "Certificate 3",
    },

  ];



  return (
    <section className="w-full relative bg-white py-8 sm:py-10 px-4 sm:px-6 md:px-12">
      {/* Heading */}
      <h2 className="font-bold  relative text-3xl sm:text-4xl md:text-5xl mb-5 sm:mb-16 text-center text-gray-900">
        Our Certificates
        <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 sm:w-20 md:w-24 h-1 bg-[#147A4C] rounded-full"></span>
      </h2>

      <div className="grid gird-col-2 md:grid-cols-5 gap-5">
        {certificates.map((cert) => (
          <SwiperSlide key={cert.id}>
            <div className="flex justify-center">
              <div className="bg-white p-1 rounded-2xl shadow-lg border border-gray-200 transition duration-300 hover:shadow-2xl hover:border-yellow-400 hover:scale-105 w-full max-w-xs sm:max-w-sm md:max-w-md">
                <div className="relative w-full h-64">
                  <Image
                    src={cert.src}
                    alt={cert.alt}
                    fill
                    className="object-contain rounded-lg"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </div>
    </section>
  );
};

export default Certificates;


