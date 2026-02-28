"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { PhoneCall, Send } from "lucide-react";

export default function OneStopWasteSolutionSection() {
  return (
    <section className="w-full py-6  bg-white">
      {/* Added mobile padding only, md stays px-10 exactly same */}
      <div className="px-4 sm:px-6 md:px-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">

          {/* LEFT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="relative w-full h-[260px] sm:h-[340px] md:h-[420px] md:h-[520px]"
          >
            <Image
              src="/Biomedical-Waste-collection-solution-scaled.jpg"
              alt="Waste Management"
              fill
              className="object-contain rounded-[12px]"
            />
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            {/* Mobile font added, md untouched */}
            <h2 className="text-[24px] sm:text-[28px] md:text-[40px] font-semibold text-[#101828] leading-tight">
              One Stop Solution for Complete Waste Management Across India
            </h2>

            <p className="mt-4 text-[15px] sm:text-[16px] md:text-[18px] text-black leading-relaxed">
              Supporting Government Healthcare, Procurement Teams, Tender Contractors & Bulk Buyers.
              For over 50+ years, Sangam Plastic Industries Pvt. Ltd. has been manufacturing and supplying high-quality waste management products for hospitals, laboratories, municipal bodies, distributors, and institutional projects.
            </p>

            <div className="mt-4 md:mt-3 space-y-2 md:space-y-1">
              <p className="text-[16px] sm:text-[18px] md:text-[20px] text-[#101828]">
                •We don’t just manufacture.
              </p>
              <p className="text-[16px] sm:text-[18px] md:text-[20px] text-[#101828]">
                •We support tenders.
              </p>
              <p className="text-[16px] sm:text-[18px] md:text-[20px] text-[#101828]">
                •We support procurement teams.
              </p>
              <p className="text-[16px] sm:text-[18px] md:text-[20px] text-[#101828]">
                •We support bulk buyers.
              </p>
            </div>

            <div className="mt-6">
              <p className="mt-2 text-[15px] sm:text-[16px] md:text-[18px] font-medium text-[#101828] leading-[24px] md:leading-[28px]">
                We are a procurement-ready supply partner for tender bidders,
                healthcare institutions, and bulk buyers.
              </p>
            </div>

            {/* Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="/contact-us"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#101828] text-white text-[14px] font-medium hover:opacity-90 transition"
              >
                <Send size={18} />
                Submit Bulk Inquiry
              </a>

              <a
                href="tel:+919810316441"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-[#101828] text-[#101828] text-[14px] font-medium hover:bg-[#101828] hover:text-white transition"
              >
                <PhoneCall size={18} />
                Speak to Sales Team
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}