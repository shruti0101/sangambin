'use client'

import React from 'react'
import Image from 'next/image'

import { motion } from 'framer-motion'
const Whychoose = () => {
  return (
    <div>





    <section className="relative w-full py-18 bg-gradient-to-b from-[#F9FAFB] to-[#EEF1F5] overflow-hidden">

  {/* BACKGROUND GLOW */}
  <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-[#D1D5DB]/30 blur-[120px] rounded-full"></div>

  <div className="max-w-7xl mx-auto px-4 relative z-10">
    <div className="grid lg:grid-cols-2 gap-14 items-center">

      {/* LEFT CONTENT */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-5"
      >

        <h2 className="text-[36px] md:text-[44px] font-semibold text-[#0B1324] leading-tight tracking-[-0.5px]">
          Are You Facing These
          <span className="text-green-600"> Procurement Risks?</span>
        </h2>

        {/* IMAGINE BLOCK */}
        <div className="bg-white/70 backdrop-blur-md border border-white/40 rounded-[18px] p-7 shadow-[0_10px_30px_rgba(16,24,40,0.06)] relative overflow-hidden">

          <div className="absolute left-0 top-0 h-full w-[4px] bg-green-600"></div>

          <p className="text-[25px] text-[#101828] font-semibold mb-3 tracking-wide">
            Imagine This:
          </p>

          <div className="space-y-2 text-black text-[20px] leading-[26px]">
            <p>You win a hospital or government tender.</p>
            <p>The quantities are high.</p>
            <p>The documentation must be precise.</p>
            <p>The delivery deadline is strict.</p>
          </div>
        </div>

        {/* SUPPLIER RISK BLOCK */}
        <div className="bg-[#377e36] text-white rounded-[18px] p-7 shadow-[0_15px_40px_rgba(2,6,23,0.35)] relative">

          <p className="text-[25px] font-semibold mb-3 text-[#F9FAFB] tracking-wide">
            But your supplier:
          </p>

          <div className="space-y-2 text-[20px] text-white leading-[26px]">
            <p>Delays dispatch</p>
            <p>Changes pricing at the last minute</p>
            <p>Sends inconsistent quality</p>
            <p>Fails to provide required compliance documents</p>
            <p>Puts your contract and margin at risk</p>
          </div>
        </div>

     

          <p className="text-[19px] text-black leading-[26px]">
            These are real challenges faced by procurement heads, tender bidders,
            and institutional buyers.
          </p>

        

      </motion.div>
      {/* RIGHT IMAGE */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="relative w-full h-[520px] rounded-md overflow-hidden "
      >
        <Image
          src="/360_F_1609953401_6dWzA4dA2akHJqMVSa2zDakv1etq8w3R.jpg"
          alt="Procurement Challenges"
          fill
          className="object-cover"
        />

      </motion.div>

    </div>
  </div>
</section>



<section 
className="relative text-white py-20"
style={{
  backgroundImage: `
    linear-gradient(rgba(26, 90, 165, 0.9), rgba(8, 80, 70, 0.95)),
    linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)
  `,
  backgroundSize: "100% 100%, 40px 40px, 40px 40px"
}}
>

             <Image alt="img" width={140} height={100}  className='absolute bottom-60 left-7 animate-pulse ' src="/dus1.png"></Image>


  <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">

    {/* ============ LEFT — STICKY ============ */}
    <div className="lg:sticky top-38 self-start space-y-6">

      <p className="text-yellow-400 tracking-[0.25em] text-sm">
        /// WHY CHOOSE US ♻
      </p>

      <h2 className="text-[40px] md:text-[64px] font-extrabold leading-[1.05]">
        SANGAM PLASTIC INDUSTRIES ♻
     
      </h2>

      <p className="text-white max-w-xl leading-relaxed">
        At Sangam Plastic Industries Pvt. Ltd., we combine decades of experience, 
        advanced manufacturing, and customer-centric solutions to deliver high-quality 
        plastic dustbins, hospital dustbins, and plastic pedal bins that you can rely on.
      </p>

      <button className="mt-6 border border-yellow-400 text-white 
      px-8 py-3 tracking-wider text-sm 
      hover:bg-yellow-400 hover:text-black transition">
        COMPANY PROFILE
      </button>
    </div>

    {/* ============ RIGHT — SCROLLING CARDS ============ */}
    <div className="space-y-10">

      {[
        {
          title: "50+ YEARS OF EXPERTISE",
          text: "Since 1988, we have been a trusted name in plastic manufacturing, supplying durable and hygienic waste management solutions across India."
        },
        {
          title: "QUALITY YOU CAN TRUST",
          text: "All products are made with premium-grade plastic and undergo strict quality checks for durability and safety."
        },
        {
          title: "MODERN INFRASTRUCTURE",
          text: "Our Delhi-based facilities are equipped with advanced machinery for large-scale production without quality compromise."
        },
        {
          title: "HYGIENE & SAFETY FOCUS",
          text: "Specialized hospital dustbins and pedal bins ensure hands-free, safe, and hygienic waste disposal."
        },
        {
          title: "CUSTOMIZABLE SOLUTIONS",
          text: "Available in multiple sizes, colors, and designs for homes, offices, hospitals, and industries."
        },
        {
          title: "NATIONWIDE RELIABILITY",
          text: "Trusted across India for timely delivery, strong support, and dependable service."
        }
      ].map((item, index) => (
        <div key={index}
          className="relative bg-white p-7 rounded-xl border border-[#0F766E]/40 backdrop-blur-md"
        >



          <span className="absolute top-0 left-0 w-6 h-6 border-t border-l border-black"></span>
          <span className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-yellow-400"></span>

          <div className="flex gap-5 items-start">
            <div className="bg-[#0F766E] p-4 rounded-lg">
            <span className='material-symbols-outlined '>eco</span>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2 uppercase text-[#0F766E]">
                {item.title}
              </h3>
              <p className="text-black">
                {item.text}
              </p>
            </div>
          </div>
        </div>
      ))}

    </div>
  </div>
</section>

    </div>
  )
}

export default Whychoose
