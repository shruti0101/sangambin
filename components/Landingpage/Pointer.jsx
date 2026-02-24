"use client";

import Image from "next/image";
import { motion } from "framer-motion";

function MediaStatCard({ title, desc, imgSrc }) {
  return (
    <div className="bg-white rounded-[12px] border border-[#E5E7EB] shadow-[0_1px_2px_rgba(16,24,40,0.04)] overflow-hidden">
      <div className="relative h-[120px] sm:h-[150px] w-full">
        <Image
          src={imgSrc}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4 sm:p-6 text-center">
        {/* Mobile font added, md unchanged */}
        <h3 className="text-[18px] sm:text-[22px] md:text-[32px] font-semibold text-[#101828] leading-tight">
          {title}
        </h3>
        <p className="mt-2 sm:mt-3 text-black text-[13px] sm:text-[14px] md:text-[15px] leading-[20px] md:leading-[22px]">
          {desc}
        </p>
      </div>
    </div>
  );
}

function StatCardLeft({ title, desc }) {
  return (
    <div className="bg-white rounded-[12px] border border-[#E5E7EB] shadow-[0_1px_2px_rgba(16,24,40,0.04)] p-2 sm:p-6 text-center md:text-left">
      <h3 className="text-[15px] sm:text-[22px] md:text-[32px] font-semibold text-[#101828] leading-tight">
        {title}
      </h3>
      <p className="mt-2 sm:mt-3 text-black text-[12px] sm:text-[15px] md:text-[16px]  md:leading-[22px]">
        {desc}
      </p>
    </div>
  );
}

export default function PolywellTrustStatsSection() {
  return (
    <section className="w-full py-10 bg-[#F5F6F8]">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center mb-8 md:mb-10"
        >
          {/* Mobile font added, md untouched */}
          <h2 className="text-[22px] sm:text-[26px] md:text-[40px] font-semibold text-[#101828]">
            Why Government & Institutional Buyers Trust Polywell
          </h2>
          <p className="text-black mt-2 text-[14px] sm:text-[16px] md:text-[20px]">
            Delivering scale, compliance, and execution certainty since 1988.
          </p>
        </motion.div>

        {/* TOP ROW */}
        {/* Changed only mobile grid to 2 columns */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 mb-6">
          <MediaStatCard
            imgSrc="/pointer1.jpeg"
            title="50+ Years of Industry Experience"
            desc="Serving government institutions, healthcare procurement teams, traders, and bulk buyers with consistent manufacturing reliability."
          />
          <MediaStatCard
            imgSrc="/pointer2.jpeg"
            title="1,20,000+ sq. ft. Manufacturing Infrastructure"
            desc="High-capacity production facility engineered for institutional-grade and tender-based bulk supply."
          />
          <MediaStatCard
            imgSrc="/pointer3.jpeg"
            title="1.8 Million+ Units Supplied Annually"
            desc="From hospital dustbins and biomedical waste bins to garbage bags and sanitation products — manufactured and delivered in bulk volumes."
          />
          <MediaStatCard
            imgSrc="/pointer4.jpeg"
            title="7,600+ Distributors & Partners"
            desc="A strong Pan-India supply ecosystem ensuring smooth availability and regional dispatch coordination."
          />
        </div>

        <div className="h-px w-full bg-[#E5E7EB] my-3 md:my-1" />

        {/* MIDDLE ROW */}
        {/* Mobile 2 columns */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 mb-6 md:mb-3">
          <StatCardLeft
            title="99%+ On-Time Tender Fulfillment Rate"
            desc="Aligned production scheduling and dispatch planning to meet strict government and institutional deadlines."
          />
          <StatCardLeft
            title="100% Tender-Ready Documentation Support"
            desc="GST billing, specification compliance, and procurement paperwork assistance for smooth order processing."
          />
          <StatCardLeft 
            title="1,000+ Institutional & Government Orders Executed"
            desc="Supplying to municipal corporations, healthcare institutions, procurement contractors, and wholesale distributors."
          />

            <StatCardLeft
            title="150+ OEM & Custom Tender Projects Executed"
            desc="Customized manufacturing support based on tender specifications and institutional requirements."
          />
          <StatCardLeft
            title="GeM Approved Products"
            desc="Our products are listed and compliant for procurement through the Government e-Marketplace (GeM), making institutional purchasing seamless and transparent."
          />
          <StatCardLeft
            title="Pan-India Supply Across 28+ States & UTs"
            desc="Strong logistics coordination supporting large-scale deliveries nationwide."
          />
        </div>

 


      
        
        </div>
     
    </section>
  );
}