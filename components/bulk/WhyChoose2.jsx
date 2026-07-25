"use client";

import {
  HiOutlineDocumentText,
  HiOutlineShieldCheck,
} from "react-icons/hi";
import { FiTruck } from "react-icons/fi";
import {
  AiOutlineBarChart,
  AiOutlineCheckCircle,
} from "react-icons/ai";
import { BsPatchCheck } from "react-icons/bs";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

export default function WhyChoose2() {
  const data = [
    {
      icon: <HiOutlineDocumentText  />,
      title: "Tender-Ready Documentation",
      desc: "Specification compliance & procurement paperwork handled for you.",
    },
    {
      icon: <HiOutlineShieldCheck />,
      title: "GeM Listed",
      desc: "Products listed and compliant on the Government e-Marketplace.",
    },
    {
      icon: <FiTruck />,
      title: "Pan-India Logistics",
      desc: "Coordinated dispatch supporting large-scale deliveries nationwide.",
    },
    {
      icon: <AiOutlineBarChart />,
      title: "OEM & Custom Manufacturing",
      desc: "150+ custom tender projects executed to institutional specification.",
    },
    {
      icon: <AiOutlineCheckCircle />,
      title: "99%+ On-Time Fulfillment",
      desc: "Aligned production & dispatch planning to meet tender deadlines.",
    },
    {
      icon: <BsPatchCheck />,
      title: "Certified Quality",
      desc: "ISO 9001 · BMW Compliance · Q2 Certified manufacturing.",
    },
  ];

  return (
    <section className="bg-[#0c2b22] text-white py-16 px-6 md:px-12 lg:px-20">
      
      {/* Top Label */}
      <p className="text-xs tracking-[0.3em] text-yellow-500 mb-6 uppercase">
        — Why Institutional Buyers Choose Polywell
      </p>

      {/* Heading */}
      <h2 className="text-3xl md:text-5xl font-extrabold leading-tight max-w-3xl mb-12">
        Scale, compliance and execution certainty since 1988.
      </h2>

      {/* 🔥 Desktop Grid */}
      <div className="hidden sm:grid grid-cols-2 lg:grid-cols-3 gap-10">
        {data.map((item, i) => (
          <div key={i} className="space-y-2">
            <div className="text-yellow-500 text-5xl">
              {item.icon}
            </div>
            <h3 className="font-semibold text-lg">{item.title}</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      {/* 🔥 Mobile Slider */}
      <div className="sm:hidden">
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          spaceBetween={16}
          slidesPerView={1}
          loop={true}
        >
          {Array.from({ length: Math.ceil(data.length / 2) }).map((_, i) => (
            <SwiperSlide key={i}>
              <div className="grid grid-cols-2 gap-6">
                {data.slice(i * 2, i * 2 + 2).map((item, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="text-yellow-500 ">
                      {item.icon}
                    </div>
                    <h3 className="font-semibold text-sm">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 text-xs leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}