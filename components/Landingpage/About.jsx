'use client'
import React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

const About = () => {

  const sliderImages = [
  {
    id: 1,
    src: "/use1.jpg",
    alt: "Recycling bins illustration",
  },
  {
    id: 2,
    src: "/use2.jpg",
    alt: "Dustbin image",
  },
  {
    id: 3,
    src: "/test3.png",
    alt: "Hospital dustbin",
  },

   {
    id: 4,
    src: "/test1.png",
    alt: "Hospital dustbin",
  },

   {
    id: 5,
    src: "/test2.png",
    alt: "Hospital dustbin",
  },

     
];








  return (
    <>




        <section className="bg-[#DBF0F7] blueprint-bg py-16 relative">
      <div className="w-full  mx-auto px-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

     

<Image alt='gif' width={140} height={100} style={{ filter: "brightness(0) saturate(100%) invert(46%) sepia(82%) saturate(500%) hue-rotate(85deg)" }} className='absolute top-4 right-7 rotate-slow' src="/recycle.webp"></Image>


 <Image alt='gif2' width={240} height={200} style={{ filter: "brightness(0) saturate(100%) invert(46%) sepia(82%) saturate(500%) hue-rotate(85deg)" }}  className='absolute -top-20 right-25 ' src="/11.gif"></Image> 

        {/* LEFT CONTENT */}
        <div className="space-y-5">
          <span className="text-green-700 font-semibold tracking-widest text-lg uppercase">
            Since 1988 ♻
          </span>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
            Your Trusted Plastic Dustbin, 
            Pedal Bin & Hospital Dustbin Manufacturer
          </h2>

          <p className="text-black  text-base md:text-lg leading-relaxed">
            Established in 1988, Sangam Plastic Industries Private Limited has been a leading 
            manufacturer, exporter, and trader of premium-quality plastic dustbins, hospital 
            dustbins, plastic pedal bins, and other plastic waste management solutions. 
            Based in Delhi, India, our state-of-the-art production facilities are equipped with 
            modern machinery, allowing us to meet bulk production demands while maintaining 
            stringent quality standards.
          </p>

          <p className="text-black text-base md:text-lg leading-relaxed">
            Over the past three decades, we have earned the trust of households, businesses, 
            hospitals, and institutions across India and abroad by consistently delivering 
            products that are durable, hygienic, eco-friendly, and affordable. Our team of 
            dedicated professionals, guided by our mentor <strong>Mr. Hansraj Harbhajanka</strong>, 
            drives innovation and quality in every product we create.
          </p>

          <div className="flex gap-4 pt-4">
            <button className="bg-green-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-800 transition">
              Know More
            </button>

            <button className="border border-green-700 text-green-700 px-6 py-3 rounded-lg font-medium hover:bg-green-700 hover:text-white transition">
              Contact Us
            </button>
          </div>
        </div>

 {/* RIGHT IMAGE WITH SWIPER */}
<div className="relative  bg-white">
  <div className="p-4">
    <Swiper
      modules={[Navigation, Autoplay]}
      navigation
      autoplay={{ delay: 2500 }}
      loop={true}
      className="rounded-xl"
    >

      {sliderImages.map((item) => (
        <SwiperSlide key={item.id}>
          <Image
            src={item.src}
            width={700}
            height={500}
            alt={item.alt}
            className="rounded-xl w-full"
          />
        </SwiperSlide>
      ))}

    </Swiper>
  </div>
</div>



      </div>


    </section>

    





   










        <div className="w-full  mx-auto  bg-[#DCFAEA] rounded-2xl py-8 ">
      <div className="max-w-7xl mx-auto grid grid-cols-5 gap-6 text-center">

     
        <div className="flex flex-col items-center gap-2">
          <img src="/3.webp" className="h-18 w-18" />
          <p className="font-semibold text-gray-900 text-xl">ISO 50001</p>
          <p className="text-gray-800 text-lg">Certification</p>
        </div>

        <div className="flex flex-col items-center gap-2">
          <img src="/5.webp" className="h-18 w-18" />
          <p className="font-semibold text-gray-900 text-xl">Lower Carbon</p>
          <p className="text-gray-800 text-lg">Emission</p>
        </div>

    
        <div className="flex flex-col items-center gap-2">
          <img src="/4.webp" className="h-18 w-18" />
          <p className="font-semibold text-gray-900 text-xl">Renewable</p>
          <p className="text-gray-800 text-lg">Power Usage</p>
        </div>

    
        <div className="flex flex-col items-center gap-2">
          <img src="/2.webp" className="h-18 w-18" />
          <p className="font-semibold text-gray-900 text-xl">Waste</p>
          <p className="text-gray-800 text-lg">Management</p>
        </div>

    
        <div className="flex flex-col items-center gap-2">
          <img src="/5.webp" className="h-18 w-18" />
          <p className="font-semibold text-gray-900 text-xl">CII Certified</p>
          <p className="text-gray-800 text-lg">Green Products</p>
        </div>

      </div>
    </div>
  


    
  
    </>
  )
}

export default About