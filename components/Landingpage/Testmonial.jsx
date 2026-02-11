"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Dr. Mehta",
    location: "Delhi — Hospital Administrator",
    avatar: "/avatar.jpg",
    quote:
      "Sangam Plastic Industries Pvt. Ltd. has been our trusted supplier of hospital dustbins for over a decade. Their products are durable, hygienic, and fully compliant with medical standards. Highly recommended!",
  },
  {
    name: "Mr. Sharma",
    location: "Mumbai — Office Manager",
    avatar: "/avatar.jpg",
    quote:
      "We installed plastic pedal bins from Sangam Plastic Industries Pvt. Ltd. in our offices, and they have made waste management so much easier. The quality and durability are outstanding.",
  },
  {
    name: "Mrs. Kapoor",
    location: "Bangalore — Homeowner",
    avatar: "/avatar.jpg",
    quote:
      "I purchased household plastic dustbins from Sangam Plastic Industries Pvt. Ltd., and I’m extremely satisfied. They are sturdy, easy to clean, and eco-friendly. Truly a reliable manufacturer.",
  },
  {
    name: "Mr. Reddy",
    location: "Hyderabad — School Administrator",
    avatar: "/avatar.jpg",
    quote:
      "We needed durable and safe dustbins for our school campus, and Sangam Plastic Industries Pvt. Ltd. delivered exactly what we wanted. Excellent products and timely delivery.",
  },
  {
    name: "Dr. Singh",
    location: "Chennai — Clinic Owner",
    avatar: "/avatar.jpg",
    quote:
      "The bio-medical waste bins we received from Sangam Plastic Industries Pvt. Ltd. are top-quality and easy to maintain. Their customer support is also very responsive and helpful.",
  },
];


export default function ZigzagShowcase() {
  return (
    <section
      style={{ backgroundImage: "url(/try.png)" }}
      className="relative w-full h-screen bg-contain bg-center  bg-no-repeat bg-[#296EB1] overflow-hidden"
    >
      {/* TOP ZIGZAG */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="#FFFFFF"
        viewBox="0 0 1000 100"
        preserveAspectRatio="none"
        className="absolute top-0 left-0 w-full"
      >
        <path d="M761.9,44.1L643.1,27.2L333.8,98L0,3.8V0l1000,0v3.9"></path>
      </svg>

      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 h-full items-center">

        {/* 🔥 LEFT = TESTIMONIAL SLIDER */}
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          className="w-full max-w-4xl text-white"
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <div className="flex flex-col justify-center space-y-6 py-20">

             <h2 className="text-5xl  font-bold leading-tight mt-20">
  Why Clients Choose <br />
  Sangam Plastic <br />
  Industries Pvt. Ltd.
</h2>

                <p className="text-white/85 max-w-xl italic">
                  “{t.quote}”
                </p>

                <div className="flex items-center gap-4 mt-6">
                  <div className="w-10 h-10 rounded-full overflow-hidden border border-white">
                    <Image
                      src={t.avatar}
                      width={40}
                      height={40}
                      alt={t.name}
                    />
                  </div>
                  <div>
                    <p className="font-semibold">{t.name}</p>
                    <p className="text-sm text-white/80">{t.location}</p>
                  </div>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* RIGHT SIDE — (kept empty for your images / collage) */}
        <div></div>

      </div>

    
    </section>
  );
}
