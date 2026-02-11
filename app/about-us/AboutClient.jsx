"use client";

export const dynamic = "force-dynamic";
import React from "react";

import Link from "next/link";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

const AboutPage = () => {

  const sliderImages = [
  
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
    <div>
      {/* ===== Banner Section ===== */}
      <div
        className="relative bg-cover bg-center h-[50vh] md:h-[100vh] flex flex-col items-center justify-center text-center overflow-hidden"
        style={{
          backgroundImage:
            "url('/ctaimg.png ')",
        }}
      >
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 text-white">
          <Link
            href="/"
            className="text-lg md:text-xl font-semibold text-yellow-400 hover:text-yellow-300 transition underline"
          >
            Home / About Us
          </Link>
          <h1 className="text-5xl font-serif md:text-6xl font-extrabold  tracking-tight drop-shadow-lg">
            About Us
          </h1>
          <p className="text-white mt-4 max-w-2xl mx-auto text-sm md:text-lg">
         Partner with Sangam Plastic Industries, your trusted plastic dustbin, hospital dustbin, and pedal bin manufacturer.
          </p>
        </div>
      </div>

  
    <main className="bg-[#F1F5F9] text-gray-900">

      {/* HERO SECTION */}
      <section className="relative  text-white py-18 px-16">
        <div className=" mx-auto grid md:grid-cols-2 gap-10 items-center">

          <div>
            <h1 className="text-4xl text-black font-bold leading-tight">
              About Us – Sangam Plastic Industries
            </h1>

            <p className="mt-4 text-lg text-blue-500 font-semibold ">
              Committed to Quality Plastic Dustbins, Hospital Dustbins & Pedal Bins Since 1988
            </p>

            <p className="mt-3 text-xl text-justify text-black leading-relaxed">
              Established in 1988, Sangam Plastic Industries has grown into a leading manufacturer, exporter, and supplier of high-quality plastic waste management solutions across India. With decades of experience, we specialize in producing plastic dustbins, hospital dustbins, plastic pedal bins, wheeled bins, bio-medical waste bins, and plastic pallets for various industries. Our focus on quality, innovation, and customer satisfaction has earned us a reputation as a trusted name in the plastics industry. We serve a wide range of clients, including homes, hospitals, offices, educational institutions, hotels, and industrial sectors, delivering products that are durable, hygienic.
            </p>

          </div>

         
          {/* RIGHT IMAGE WITH SWIPER */}
         <div className="relative bg-white">
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



      {/* VISION */}
  {/* VISION (TEXT LEFT + IMAGE RIGHT) */}
<section className="bg-white relative py-16 px-6">
  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">


    {/* LEFT: TEXT */}
    <div>
      <h2 className="text-3xl md:text-4xl font-bold text-[#0B2545] mb-6">
        Our Vision
      </h2>

      <p className="text-lg text-black leading-relaxed mb-2">
        At Sangam Plastic Industries, our vision is to be recognized as India’s most trusted and innovative manufacturer of plastic dustbins, hospital dustbins, and plastic pedal bins. We aim to provide durable, hygienic, and environmentally responsible waste management solutions that cater to homes, hospitals, offices, educational institutions, hotels, and industrial facilities.
      </p>

      <p className="text-lg text-black leading-relaxed">
        We aspire to lead the industry by combining quality, sustainability, and innovation, setting new standards in plastic waste management solutions. Our goal is to make eco-friendly and high-performance products accessible to businesses and households nationwide, empowering a cleaner, safer, and healthier environment.
      </p>
    </div>

    {/* RIGHT: IMAGE */}
    <div className=" overflow-hidden ">
      <Image
        src="/vision.png"   
        alt="Sangam Plastic Vision"
        width={900}
        height={900}
        className="w-full h-auto object-cover"
      />
    </div>

  </div>
</section>


      {/* MISSION */}
      <section className="max-w-7xl relative mx-auto py-16 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0B2545] mb-6">
          Our Mission
        </h2>

        <Image className="absolute hidden md:block -top-20 -right-20 animate-pulse" width={260} height={260} src="/eco.png"></Image>


        <p className="text-lg text-black mb-6">
          Our mission guides every decision at Sangam Plastic Industries. We are committed to:
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "Delivering High-Quality Products",
              text: "We specialize in producing plastic dustbins, hospital dustbins, plastic pedal bins, bio-medical waste bins, wheeled bins, and plastic pallets using premium-grade, eco-friendly materials. Every product is designed for durability, hygiene, and long-term usability, meeting the highest industry standards."
            },
            {
              title: "Ensuring Customer Satisfaction",
              text: "Our customers are at the heart of everything we do. We provide personalized solutions, bulk order capabilities, timely delivery, and responsive after-sales support, ensuring that every client’s requirements are met efficiently and reliably."
            },
            {
              title: "Promoting Sustainability",
              text: "As an environmentally responsible manufacturer, we prioritize recyclable materials, eco-safe dyes, and long-lasting products. By reducing waste and encouraging sustainable practices, we contribute to a cleaner planet while maintaining product quality."
            },
            {
              title: "Fostering Innovation",
              text: "Innovation is central to our growth. We continually improve product designs, manufacturing processes, and waste management solutions to meet evolving market demands and provide customers with practical, reliable, and advanced products."
            }
          ].map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
              <h3 className="text-2xl font-bold text-[#266913]">
                {item.title}
              </h3>
              <p className="mt-2 text-black">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="bg-[#1a3e6a] text-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Our Core Values
          </h2>

          <ul className="space-y-4 text-gray-200 text-xl ">
            <li> Quality Excellence: We prioritize durability, reliability, and safety in all our products. Rigorous quality checks ensure that our dustbins and bins meet both commercial and healthcare standards.</li>
            <li> Customer-Centric Approach: We strive to provide transparent dealings, responsive communication, and solutions tailored to individual client needs, ensuring maximum satisfaction and long-term relationships.</li>
            <li> Integrity & Trust: Ethical business practices, honest communication, and consistent reliability form the foundation of our company. Clients trust us to deliver on our promises every time.</li>
            <li> Innovation & Progress: We embrace modern technologies, new product designs, and continuous process improvements to stay at the forefront of the plastic waste management industry.</li>
            <li> Sustainability & Responsibility: Environmental responsibility is embedded in our operations. We focus on eco-friendly materials, recyclable products, and minimizing environmental impact while manufacturing solutions for every sector.</li>
          </ul>
        </div>
      </section>

      {/* CTA SECTION */}
    <section
  style={{ backgroundImage: "url(/ctaimg.png)" }}
  className="bg-center bg-fixed bg-cover py-20 px-6 relative"
>
  {/* Dark gradient overlay for better readability */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/75"></div>

  <div className="relative max-w-7xl mx-auto text-center text-white">
    <h2 className="text-3xl md:text-6xl font-bold tracking-wide">
      Get in Touch
    </h2>

    <p className="mt-5 text-2xl max-w-5xl mx-auto opacity-90 leading-relaxed">
      Partner with <span className="font-semibold">Sangam Plastic Industries</span>,  
      your trusted manufacturer of plastic dustbins, hospital bins, and pedal bins.  
      Whether you need bulk orders, custom solutions, or expert guidance —  
      we’re ready to support your business.
    </p>

    <p className="mt-6 font-semibold text-xl tracking-wide">
      Take Action Today
    </p>

    <div className="flex flex-wrap justify-center gap-4 mt-8">
      <button className="bg-[#155DFC] hover:bg-[#0f4ed8] text-white px-8 py-3 rounded-xl font-semibold shadow-lg transition-all">
        Request a Quote
      </button>

      <button className="bg-white hover:bg-gray-100 text-[#0B2545] px-8 py-3 rounded-xl font-semibold shadow-lg transition-all">
        Explore Products
      </button>

      <button className="bg-black hover:bg-gray-900 text-white px-8 py-3 rounded-xl font-semibold shadow-lg transition-all">
        Contact Us
      </button>
    </div>
  </div>
</section>


    </main>


    </div>
  );
};

export default AboutPage;
