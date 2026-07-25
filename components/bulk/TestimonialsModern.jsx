"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

export default function TestimonialsModern() {
  const testimonials = [
    {
      text: "Sangam Plastic Industries has been our trusted supplier of hospital dustbins for over a decade. Their products are durable, hygienic, and fully compliant with medical standards.",
      name: "Dr. Mehta",
      role: "Hospital Administrator",
      location: "Delhi",
    },
    {
      text: "We installed plastic pedal bins across our offices, and they've made waste management so much easier. Quality and durability are outstanding.",
      name: "Mr. Sharma",
      role: "Office Manager",
      location: "Mumbai",
    },
    {
      text: "We needed durable, safe dustbins for our school campus, and Sangam delivered exactly what we wanted — excellent products and timely delivery.",
      name: "Mr. Reddy",
      role: "School Administrator",
      location: "Hyderabad",
    },
    {
      text: "The bio-medical waste bins we received are top-quality and easy to maintain. Their customer support is also very responsive and helpful.",
      name: "Dr. Singh",
      role: "Clinic Owner",
      location: "Chennai",
    },
  ];

  return (
    <section className="bg-[#f5f6f2] py-8 px-6 md:px-12 lg:px-20">
      
      {/* Label */}
      <p className="text-xs tracking-[0.25em] text-amber-600 mb-6 uppercase">
        — Trusted by institutions across India
      </p>

      {/* Heading */}
      <h2 className="text-3xl md:text-5xl font-extrabold text-[#1b2a24] leading-tight max-w-3xl mb-14">
        Why buyers choose <br />
        Sangam Plastic Industries.
      </h2>

      {/* 🔥 Desktop Grid */}
      <div className="hidden md:grid grid-cols-2 gap-8">
        {testimonials.map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-xl border border-gray-200 p-6 md:p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            <div className="w-10 h-[3px] bg-[#0c2b22] mb-5"></div>

            <p className="text-gray-700 leading-relaxed mb-6">
              {item.text}
            </p>

            <div className="text-sm">
              <span className="font-semibold text-[#1b2a24]">
                {item.name}
              </span>
              <span className="text-gray-500">
                {" "}
                — {item.role}, {item.location}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* 🔥 Mobile Slider */}
      <div className="md:hidden">
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          spaceBetween={16}
          slidesPerView={1}
          loop={true}
        >
          {testimonials.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                
                <div className="w-10 h-[3px] bg-[#0c2b22] mb-5"></div>

                <p className="text-gray-700 text-sm leading-relaxed mb-6">
                  {item.text}
                </p>

                <div className="text-xs">
                  <span className="font-semibold text-[#1b2a24]">
                    {item.name}
                  </span>
                  <span className="text-gray-500">
                    {" "}
                    — {item.role}, {item.location}
                  </span>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}