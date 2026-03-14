"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const slides = [

  {
    src: "/product/660L Bio Bins/3.webp",
    alt: "Bio Medical Waste Bins",
    cat: "Bio Medical Waste Bins",
    link: "/categories/bio-bins",
  },

  {
    src: "/product/660L Bio Bins/1.webp",
    alt: "Wheeled Bins",
    cat: "Wheeled Bins",
    link: "/categories/wheeled-bins",
  },
  {
    src: "/product/130mm Hdpe Industrial Pallet/1.webp",
    alt: "Industrial Plastic Pallets",
    cat: "Industrial Plastic Pallets",
    link: "/categories/industrial-plastic-pallets",
  },
  {
    src: "/product/15L Plastic Pedal Bin/1.webp",
    alt: "Pedal Dustbin",
    cat: "Pedal Dustbin",
    link: "/categories/pedal-dustbin",
  },
  {
    src: "/product/biobin/20ltr bio bin 2.webp",
    alt: "Bio Bins",
    cat: "Bio Bins ",
    link: "/categories/bio-bins",
  },




    {
    src: "/product/new plastic dustbin products/100L Public Litter Bins/1.webp",
    alt: "Litter Bins",
    cat: "Litter Bins ",
    link: "/categories/litter-bin",
  },


   {
    src: "/product/1100L Pedal Garbage Bins/1.webp",
    alt: "Garbage Dustbin",
    cat: "Garbage Dustbin",
    link: "/categories/garbage-dustbin",
  },




  {
    src: "/product/15l Plastic Dustbin/1.webp",
    alt: "Plastic Dustbin",
    cat: "Plastic Dustbin",
    link: "/categories/plastic-dustbin",
  },




];

export default function ProductCategorySection() {
  const [startIndex, setStartIndex] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(4);

  useEffect(() => {
    const updateVisibleSlides = () => {
      if (window.innerWidth < 640) setVisibleSlides(1);
      else if (window.innerWidth < 1024) setVisibleSlides(2);
      else setVisibleSlides(4);
    };

    updateVisibleSlides();
    window.addEventListener("resize", updateVisibleSlides);
    return () => window.removeEventListener("resize", updateVisibleSlides);
  }, []);

  const prevSlide = () => {
    setStartIndex((prev) =>
      prev === 0 ? slides.length - visibleSlides : prev - 1
    );
  };

  const nextSlide = () => {
    setStartIndex((prev) =>
      prev >= slides.length - visibleSlides ? 0 : prev + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3500);

    return () => clearInterval(interval);
  }, [visibleSlides]);

  return (
    <section className="relative py-10 bg-gradient-to-b from-[#ECF6EF] to-[#FFFFFF]">
      {/* Subtle green wash */}
      <div className="absolute inset-0 bg-gradient-to-b from-green-50/30 to-transparent pointer-events-none"></div>

     
      

      <div className="w-full mx-auto px-8 relative">

        {/* TWO COLUMN LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-center">

          {/* LEFT: TEXT + ARROWS */}
          <div>
            <p className="uppercase tracking-widest text-md md:text-2xl text-yellow-500">
              Explore Our Category ♻
            </p>

            <h2 className="text-lg sm:text-4xl lg:text-5xl font-bold text-[#0B6B42] mt-3 leading-tight">
         Our Waste Management & Industrial Solutions 
Complete Range of Plastic & Sanitation Products
            </h2>


            <p className="mt-4 text-gray-700 leading-relaxed max-w-xl">
            Our product range includes a comprehensive selection of plastic dustbins, hospital waste solutions, pedal bins, sharp containers, needle destroyers, and plastic pallets, designed to meet the needs of residential, healthcare, commercial, and industrial sectors.
            </p>

<Image alt="gif" width={140} height={100} style={{ filter: "brightness(0) saturate(100%) invert(46%) sepia(82%) saturate(500%) hue-rotate(85deg)" }} className='hidden md:block absolute left-70 rotate-slow' src="/recycle.webp"></Image>

            <Link
              href="/products"
              className="
                inline-block mt-6 
                bg-[#0B6B42] 
                text-white 
                font-semibold 
                px-6 py-3 
                rounded-lg 
                shadow-lg 
                hover:scale-105 
                transition-transform
              "
            >
              Browse All Categories →
            </Link>

            {/* ARROWS */}
            <div className="flex gap-4 mt-8">
              <button
                onClick={prevSlide}
                className="
                  w-12 h-12 rounded-full 
                  border border-[#0B6B42] text-[#0B6B42] 
                  flex items-center justify-center 
                  hover:bg-[#0B6B42] hover:text-white transition
                "
              >
                ←
              </button>
              <button
                onClick={nextSlide}
                className="
                  w-12 h-12 rounded-full 
                  border border-[#0B6B42] text-[#0B6B42] 
                  flex items-center justify-center 
                  hover:bg-[#0B6B42] hover:text-white transition
                "
              >
                →
              </button>
            </div>
          </div>

          {/* RIGHT: IMAGE SLIDER PANEL */}
          <div className="grid  grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-[900px]">

            {slides
              .slice(startIndex, startIndex + visibleSlides)
              .map((slide, i) => (
                <Link
                  key={i}
                  href={slide.link}
                  className="
                    group relative overflow-hidden rounded-xl 
                    shadow-lg bg-white w-full max-w-[420px]
                     transition-colors duration-300
                  "
                >

                  {/* IMAGE */}
                  <div className="relative w-full h-[370px] overflow-hidden">
                    <Image
                      src={slide.src}
                      alt={slide.alt}
                      width={1000}
                      height={1000}
                      className="
                        object-contain 
                        
                      "
                    />
                  </div>

                 

                  {/* TITLE STRIP */}
                  <div className="absolute bottom-0 left-0 w-full bg-white py-2 text-center">
                    <p className="font-semibold bg-blue-100 p-2 text-[#0B6B42] uppercase tracking-wide text-base md:text-xl">
                      {slide.cat}
                    </p>
                  </div>
                </Link>
              ))}

          </div>

        </div>
      </div>
    </section>
  );
}
