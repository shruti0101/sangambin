"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const faqs = [
  {
    question: "1. What products does Sangam Plastic Industries Pvt. Ltd. manufacture?",
    answer:
      "We manufacture a wide range of plastic dustbins, hospital dustbins, plastic pedal bins, bio-medical waste bins, wheeled bins, plastic pallets, crates, and sanitation products. Our products serve residential, commercial, industrial, and healthcare sectors across India.",
  },
  {
    question: "2. Are you a certified plastic dustbin manufacturer in India?",
    answer:
      "Yes, we are a trusted plastic dustbin manufacturer in India with decades of experience. Our products are manufactured using high-grade materials, modern machinery, and strict quality control processes.",
  },
  {
    question: "3. Do you manufacture hospital dustbins for medical waste disposal?",
    answer:
      "Yes, we are a leading hospital dustbin manufacturer offering bio-medical waste bins designed for hospitals, clinics, and healthcare institutions. Our bins ensure safe disposal, hygiene compliance, and contamination prevention.",
  },
  {
    question: "4. What makes your plastic pedal bins hygienic?",
    answer:
      "Our plastic pedal bins feature a hands-free foot pedal mechanism, reducing direct contact and improving hygiene. They are ideal for hospitals, kitchens, offices, restaurants, and laboratories.",
  },
  {
    question: "5. What materials are used in your dustbins and sanitation products?",
    answer:
      "We use virgin plastic, recyclable plastic, food-grade plastic, UV-resistant plastic, stainless steel, mild steel, and impact-resistant materials. All materials are selected to ensure durability, hygiene, and environmental safety.",
  },
  {
    question: "6. Are your products eco-friendly and recyclable?",
    answer:
      "Yes, our products are manufactured using eco-friendly, recyclable materials and non-toxic dyes. We actively promote sustainable manufacturing and responsible waste management.",
  },
  {
    question: "7. Do you provide customized dustbins and bins?",
    answer:
      "Yes, we offer custom sizes, colors, branding, labeling, and design modifications based on customer requirements. Customization is available for corporates, municipalities, hospitals, and bulk buyers.",
  },
  {
    question: "8. Do you handle bulk and wholesale orders?",
    answer:
      "Yes, we specialize in bulk manufacturing and wholesale supply. We serve government bodies, hospitals, schools, corporate offices, hotels, factories, and municipal organizations across India.",
  },
  {
    question: "9. How do you ensure product durability and quality?",
    answer:
      "Every product undergoes strict quality inspections at multiple production stages. We use high-strength materials, advanced molding techniques, and durability testing to ensure long-lasting performance.",
  },
  {
    question: "10. Are your hospital bins compliant with healthcare safety standards?",
    answer:
      "Yes, our hospital bins are designed according to healthcare waste management guidelines, ensuring safe segregation, disposal, hygiene, and infection control.",
  },
];


export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => setOpenIndex(openIndex === index ? null : index);

  // Split the FAQ list into two columns
  const half = Math.ceil(faqs.length / 2);
  const col1 = faqs.slice(0, half);
  const col2 = faqs.slice(half);

  return (
    <section style={{backgroundImage:"url(/ctaimg.png)"}} className="py-12 md:py-20 relative bg-center bg-cover bg-fixed overflow-hidden">


 {/* Dark gradient overlay for better readability */}
  <div className="absolute inset-0 bg-black/50 "></div>

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Floating Decor Images */}
        <motion.div
          className="hidden md:block absolute top-0 right-0 z-0 "
          animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            src="/33.gif"
            width={200}
            height={200}
            alt="Decor"
          />
        </motion.div>


    <motion.div
          className="hidden md:block absolute top-30 -left-30 z-0 "
          animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            src="/33.gif"
            width={200}
            height={200}
            alt="Decor"
          />
        </motion.div>
        {/* Title */}
       <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-10 ">
  Frequently Asked Questions for  Sangam Plastic Industries Pvt. Ltd.
 
</h2>


        {/* FAQ Two Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[col1, col2].map((col, colIndex) => (
            <div key={colIndex} className="space-y-4">
              {col.map((faq, index) => {
                const actualIndex = colIndex === 0 ? index : index + half;
                const isOpen = openIndex === actualIndex;
                return (
                  <div
                    key={faq.question}
                    className={`rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer overflow-hidden ${
                      isOpen ? "bg-[#f1ffed]" : "bg-white"
                    }`}
                  >
                    <button
                      className="w-full flex justify-between items-center px-5 py-4 text-left"
                      onClick={() => toggleFAQ(actualIndex)}
                    >
                      <span className="text-base md:text-lg font-medium text-gray-900">
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-gray-700 transform transition-transform duration-300 ${
                          isOpen ? "rotate-180 text-[#F7C600]" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`px-5 overflow-hidden transition-all duration-500 ${
                        isOpen ? "max-h-[500px] pb-4" : "max-h-0"
                      }`}
                    >
                      <p className="text-black text-sm whitespace-pre-line leading-relaxed font-serif">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
