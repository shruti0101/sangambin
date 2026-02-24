import React from "react";
import Image from "next/image";

import {
  Building2,
  Stethoscope,
  ShoppingCart,
  Store,
  Warehouse,
} from "lucide-react";

import Pointer from "@/components/Landingpage/Pointer";
const ServiceProcess = () => {



  // who we work with data

  const partners = [
  {
    title: "Government Hospital Tenders Bidders & Project Contractors",
    icon: Building2,
  },
  {
    title: "Private Hospital Purchase & Procurement Teams",
    icon: Stethoscope,
  },
  {
    title: "GeM Portal Buyers",
    icon: ShoppingCart,
  },
  {
    title: "Retailers & Wholesale Distributors",
    icon: Store,
  },
  {
    title: "Municipal Corporations & Urban Local Bodies",
    icon: Warehouse,
  },
];






  return (

    <>
    
{/* who we work with section*/}


<section className="bg-white relative  sm:py-14 md:py-16 px-4 sm:px-6">
  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
    
    {/* LEFT: TEXT */}
    <div className="order-2 lg:order-1">
      
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B2545] mb-4 sm:mb-6 leading-tight">
        Who We Work With
      </h2>

      <p className="text-base sm:text-lg md:text-xl text-black leading-relaxed mb-3">
        Supporting Institutional Buyers, Healthcare Facilities & Bulk Procurement Partners
      </p>

      <p className="text-base sm:text-lg md:text-xl text-black leading-relaxed">
        We proudly supply to:
      </p>

      <ul className="mt-5 sm:mt-6 space-y-3 sm:space-y-4">
        {partners.map((partner, index) => (
          <li
            key={index}
            className="flex items-start gap-3"
          >
            <partner.icon className="w-5 h-5 sm:w-6 sm:h-6 text-green-700 mt-1 flex-shrink-0" />
            <span className="text-base sm:text-lg md:text-xl font-medium text-black">
              {partner.title}
            </span>
          </li>
        ))}
      </ul>

      <div className="mt-6 sm:mt-7">
        <button
          className="
            w-full sm:w-auto
            px-6 sm:px-8 py-3
            bg-green-600
            text-white
            text-sm sm:text-base
            font-medium
            rounded-full
            shadow-md
            transition-all duration-300
            hover:bg-green-700
            hover:scale-105
          "
        >
          Know More →
        </button>
      </div>
    </div>

    {/* RIGHT: IMAGE */}
    <div className="order-1 lg:order-2">
      <div className="overflow-hidden rounded-xl">
        <Image
          src="/whowework.webp"
          alt="Sangam Plastic Vision"
          width={900}
          height={900}
          className="w-full h-auto object-cover rounded-xl"
          priority
        />
      </div>
    </div>

  </div>
</section>



<Pointer></Pointer>

    <section className="relative py-16 text-white"
      style={{
        background: "linear-gradient(120deg, #0A5F3A, #1B8F5A)"
      }}
    >
      <div className="w-full mx-auto px-15 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* ---------- LEFT CONTENT ---------- */}
        <div className="space-y-5">
          <div className="inline-flex items-center bg-[#1c9661] px-4 py-2 rounded-full text-sm font-medium">
            <span className="mr-2">♻</span> Trusted Process
          </div>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Trusted Service Process <br />
            for Every Client
          </h2>

          <p className="text-gray-100 max-w-xl">
            At Sangam Plastic Industries Pvt. Ltd., we follow a streamlined process to ensure
            high-quality products, transparent dealings, and timely delivery to all our clients.
          </p>

          <div className="space-y-6 mt-6">

            <div className="flex gap-3 items-start">
              <span className="text-blue-300 text-xl">✔</span>
              <div>
                <h4 className="font-semibold text-xl">Premium Quality Products</h4>
                <p className="text-gray-100 text-md">
                  We manufacture all our plastic dustbins, hospital dustbins, pedal bins, and crates
                  using high-grade materials to ensure durability, safety, and long-term performance.
                </p>
              </div>
            </div>

            <div className="flex gap-3 items-start">
              <span className="text-blue-300 text-xl">✔</span>
              <div>
                <h4 className="font-semibold text-xl">Transparent Dealings</h4>
                <p className="text-gray-100 text-md">
                  We believe in honest and clear communication with our clients, ensuring every order
                  is handled professionally from inquiry to delivery.
                </p>
              </div>
            </div>

            <div className="flex gap-3 items-start">
              <span className="text-blue-300 text-xl">✔</span>
              <div>
                <h4 className="font-semibold text-xl">Easy Payment Modes</h4>
                <p className="text-gray-100 text-md">
                  Our flexible and secure payment options make transactions simple and convenient for
                  all our customers, whether small businesses or bulk buyers.
                </p>
              </div>
            </div>

            <div className="flex gap-3 items-start">
              <span className="text-blue-300 text-xl">✔</span>
              <div>
                <h4 className="font-semibold text-xl">Timely Delivery</h4>
                <p className="text-gray-100 text-md">
                  We value your time. Our efficient logistics system ensures that every order is
                  delivered on schedule, across India.
                </p>
              </div>
            </div>

          </div>
        </div>

      {/* ---------- RIGHT VISUAL BLOCK (With Image on Top) ---------- */}
<div className="flex flex-col items-center lg:items-end gap-6">

  {/* TOP IMAGE */}
  <div className="w-full   overflow-hidden ">
    <Image
      src="/form.png"      
      width={600}
      height={400}
      alt="Sustainability visual"
      className="w-full h-[380px] object-contain "
    />
  </div>

  {/* Leaf Icon Block */}
  {/* <div className="bg-[#0B6B42] p-6 rounded-2xl w-28 h-28 flex items-center justify-center shadow-lg">
    <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#A7F3D0" strokeWidth="2">
      <path d="M12 2C8 6 6 10 6 14a6 6 0 0012 0c0-4-2-8-6-12z"/>
      <path d="M12 2v20"/>
    </svg>
  </div> */}

  {/* Stats Row */}
  <div className="grid grid-cols-2 gap-4 w-full ">

    <div className="bg-[#2cb479] p-5 rounded-xl text-center shadow-md text-white">
      <h3 className="text-3xl font-bold">6500+</h3>
      <p className="text-sm text-gray-200">CLIENTS SERVED</p>
    </div>

      <div className="bg-[#2cb479] p-5 rounded-xl text-center shadow-md text-white">
      <h3 className="text-3xl font-bold">38+</h3>
      <p className="text-sm text-gray-200">Years of Experience</p>
    </div>
       <div className="bg-[#2cb479] p-5 rounded-xl text-center shadow-md text-white">
      <h3 className="text-3xl font-bold">Pan-India</h3>
      <p className="text-sm text-gray-200">Delivery Network</p>
    </div>

    <div className="bg-[#2cb479] p-5 rounded-xl text-center shadow-md text-white">
      <h3 className="text-3xl font-bold">500+</h3>
      <p className="text-sm text-gray-200">Team Members</p>
    </div>

  </div>
</div>

      </div>
    </section>









    </>

  );
};

export default ServiceProcess;
