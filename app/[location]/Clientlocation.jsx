"use client";
import Image from "next/image";
import Products from "@/components/Landingpage/Products";
import Link from "next/link";
import { useParams } from "next/navigation";
import Citieskeywords from "@/components/Citieskeyword";
 import Form from "@/components/Landingpage/Form"
 import Cta from "@/components/Landingpage/Cta";
import ProductCategorySection from "@/components/Landingpage/Categories";
import Certificates from "@/components/Landingpage/Certificates";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import {
  Home,
  Building2,
  Hospital,
  Utensils,
  GraduationCap,
  Factory,
  Trees,
} from "lucide-react";
import { Boxes, IndianRupee } from "lucide-react";

import {
  ShieldCheck,
  
  Layers,
  Settings,
  Leaf,
  Truck,
  BadgeCheck,
  Sparkles,
} from "lucide-react";


export default function HomePage() {
  const params = useParams();
  const city = params.location?.split("-in-")?.[1];



const points = [
    {
      title: "Material Quality",
      desc: "Ensure the dustbin is made from 100% virgin plastic for long-lasting durability.",
    },
    {
      title: "Manufacturing Process",
      desc: "Check if it is rotomolded or blow-moulded; rotomoulded dustbins are stronger and more reliable.",
    },
    {
      title: "Size & Design",
      desc: "Choose the right size and design for household, commercial, or industrial use, with options for lids and compartments.",
    },
    {
      title: "Eco-Friendly & Reliable Brand",
      desc: `Select dustbins that support proper waste management from a trusted Plastic Dustbin Manufacturer in ${city}.`,
    },
  ];


   const features = [
    {
      icon: <Boxes size={40} />,
      title: "Diverse Product Range",
      desc: `Explore our extensive selection of products, including Plastic Dustbins manufacturer in ${city}, Hospital Dustbin Manufacturer and Plastic Pedal Bins etc. designed to meet residential, commercial, and industrial requirements.`,
    },
    {
      icon: <IndianRupee size={40} />,
      title: "Competitive Pricing",
      desc: "We provide competitive pricing without compromising on quality, making it easy to choose the right product that fits your budget.",
    },
    {
      icon: <BadgeCheck size={40} />,
      title: "Quality Assurance",
      desc: "Each product undergoes strict quality checks to ensure durability, reliability, and long-lasting performance, giving you peace of mind with every purchase.",
    },
  ];


  const reasons = [
    {
      icon: <Factory size={36} />,
      title: `Trusted Plastic Dustbin Manufacturer in ${city}`,
      desc: "Years of experience in producing high-quality, durable, and eco-friendly dustbins for homes, offices, and industries.",
    },
    {
      icon: <ShieldCheck size={36} />,
      title: "Premium-Grade Materials",
      desc: "We use strong, long-lasting plastics that are resistant to wear, ensuring durability and reliable performance.",
    },
    {
      icon: <Layers size={36} />,
      title: "Wide Range of Products",
      desc: "Household dustbins, commercial waste bins, industrial dustbins, and recycling solutions in various sizes and designs.",
    },
    {
      icon: <Settings size={36} />,
      title: "Custom Solutions Available",
      desc: "Tailored options in size, color, and design to meet specific client requirements.",
    },
    {
      icon: <Leaf size={36} />,
      title: "Eco-Friendly & Sustainable",
      desc: "Our dustbins support proper waste management and environmental responsibility.",
    },
    {
      icon: <Truck size={36} />,
      title: "Timely Delivery & Customer Support",
      desc: "Prompt delivery, competitive pricing, and professional assistance for every order.",
    },
    {
      icon: <BadgeCheck size={36} />,
      title: "Quality Assurance",
      desc: "Strict quality control at every stage ensures products that last and perform efficiently.",
    },
    {
      icon: <Sparkles size={36} />,
      title: "Modern & Functional Designs",
      desc: "Dustbins crafted for convenience, easy maintenance, and long-term usability.",
    },
  ];


  const industries = [
    {
      icon: <Home size={36} />,
      title: "Residential Sector",
      desc: "Durable and stylish dustbins for apartments, houses, and gated communities to maintain cleanliness and hygiene.",
    },
    {
      icon: <Building2 size={36} />,
      title: "Commercial Offices & Workspaces",
      desc: "Office dustbins in various sizes and designs, ensuring clean and organized work environments.",
    },
    {
      icon: <Hospital size={36} />,
      title: "Hospitals & Healthcare Facilities",
      desc: "Specially designed bins for safe disposal of medical and general waste.",
    },
    {
      icon: <Utensils size={36} />,
      title: "Hotels & Restaurants",
      desc: "High-quality dustbins for kitchens, lobbies, and guest areas, supporting cleanliness and sanitation standards.",
    },
    {
      icon: <GraduationCap size={36} />,
      title: "Educational Institutions",
      desc: "Dustbins suitable for schools, colleges, and universities to encourage proper waste disposal.",
    },
    {
      icon: <Factory size={36} />,
      title: "Manufacturing Units",
      desc: "Large-capacity dustbins and industrial waste solutions for factories, warehouses, and production facilities.",
    },
    {
      icon: <Trees size={36} />,
      title: "Public Spaces & Municipal ",
      desc: "Eco-friendly dustbins for parks, streets, and public areas, supporting city cleanliness initiatives.",
    },
  ];


    const faqs = [
    {
      "question": `1. Who is the leading Plastic Dustbin Manufacturer in ${city}?`,
      "answer": `Sangam Plastic Industries Private Limited is a trusted Plastic Dustbin Manufacturer in ${city}, providing high-quality, durable, and eco-friendly dustbins for residential, commercial, and industrial use.`
    },
    {
      "question": "2. What types of plastic dustbins do you manufacture?",
      "answer": "We manufacture a wide range of plastic dustbins including household bins, commercial waste bins, industrial bins, and recycling bins in various sizes, shapes, and colors."
    },
    {
      "question": "3. Can I get custom-designed plastic dustbins?",
      "answer": `Yes, as a reliable Plastic Dustbin Manufacturer, we offer customized dustbins based on size, color, design, and branding requirements for clients across ${city}.`
    },
    {
      "question": "4. Are your plastic dustbins eco-friendly?",
      "answer": "Absolutely! Our plastic dustbins are made from high-quality, recyclable, and eco-friendly materials, ensuring durability while supporting sustainable waste management."
    },
    {
      "question": "5. What is the durability of your plastic dustbins?",
      "answer": "Our dustbins are manufactured with premium-grade plastic, making them long-lasting, resistant to wear and tear, and easy to maintain even in heavy-duty industrial environments."
    },
    {
      "question": "6. Do you supply plastic dustbins in bulk?",
      "answer": `Yes, we cater to bulk orders for commercial and industrial clients and can ensure timely delivery across ${city} and nearby regions.`
    },
    {
      "question": "7. How can I place an order with Sangam Plastic Industries?",
      "answer": `You can place an order by contacting us via phone, email, or visiting our ${city} office. Our team will guide you through product selection, customization, and delivery options.`
    },
    {
      "question": "8. Are your plastic dustbins suitable for outdoor use?",
      "answer": "Yes, our dustbins are designed to withstand outdoor conditions such as sun exposure, rain, and rough handling, making them ideal for both indoor and outdoor use."
    },
    {
      "question": "9. What makes Sangam Plastic Industries a trusted Plastic Dustbin Manufacturer?",
      "answer": `We combine years of industry experience, high-quality materials, customization options, and a commitment to customer satisfaction, making us one of the top Plastic Dustbin Manufacturers in ${city}.`
    },
    {
      "question": "10. Do you offer maintenance or replacement services?",
      "answer": "While our plastic dustbins are highly durable, we provide guidance on maintenance and offer support for replacement in case of manufacturing defects or damage."
    }
  ]

  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => setOpenIndex(openIndex === index ? null : index);

  // Split the FAQ list into two columns
  const half = Math.ceil(faqs.length / 2);
  const col1 = faqs.slice(0, half);
  const col2 = faqs.slice(half);

  return (
    <main className="bg-[#f7f8fa] text-slate-800">
      {/* hero section  */}
      <section
        className="relative h-screen bg-cover bg-center"
        style={{
          backgroundImage:
            "url(/ctaimg.png)",
        }}
      >
        {/* overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A3A49]/70 via-[#0A3A49]/60 to-[#0A3A49]/90"></div>

        {/*  CONTENT */}
        <div className="relative z-10 flex h-full items-center justify-center px-6 text-center text-white">
          <div>
            <h1 className="text-3xl md:text-6xl px-5 font-serif font-extrabold tracking-tight drop-shadow-lg capitalize leading-snug">
            Plastic Dustbin Manufacturer in {city}
            </h1>
          </div>
        </div>
      </section>

      {/* about */}
      <section className="py-18 bg-[#FFFEF7]">
        <div className="w-full mx-auto px-16 grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-3xl  md:text-4xl font-bold mb-8">
             Plastic Dustbin Manufacturer in <span className="text-[#0A3A49] capitalize">{city}</span> – Sangam Plastic Industries Private Limited
            </h2>

            <p className="mb-6 text-md text-black leading-relaxed">
             Looking for a <strong>reliable Plastic Dustbin Manufacturer in {city}?</strong>  Sangam Plastic Industries Private Limited is a trusted name in producing high-quality, durable, and eco-friendly plastic dustbins. Our products are designed to meet the needs of homes, offices, commercial spaces, and industrial facilities, offering long-lasting performance and easy maintenance. With years of expertise in the plastic manufacturing industry, we ensure every dustbin is made from premium-grade materials that are both strong and environmentally safe.
As a leading <strong>Plastic Dustbin Manufacturer,</strong>  we offer a wide range of dustbins, including household bins, commercial waste bins, industrial dustbins, and recycling solutions. We also provide customized options to match specific requirements in size, color, and design. With a focus on quality, timely delivery, and customer satisfaction, <strong>Sangam Plastic Industries Private Limited  is your go-to Plastic Dustbin Manufacturer in {city} </strong> for all waste management needs.
            </p>

          </div>
<div className="">

  <Image src="/form.png" width={600} height={400} alt="About Us" />


 

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
  


      {/* ================= PRODUCTS ================= */}

      <Products></Products>
      {/* sec 3 */}

     <section className="py-18  bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
          Key Points to Check Before Buying a Plastic Dustbin
        </h2>

        {/* Subtitle */}
        <p className="max-w-3xl mx-auto text-black text-lg mb-16">
          Opt for a high-quality, durable, and eco-friendly dustbin from a trusted 
          <span className="font-semibold text-gray-900">
            {" "}Plastic Dustbin Manufacturer in {city}.
          </span>
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {points.map((item, index) => (
            <div
              key={index}
              className="relative bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition duration-300"
            >
              {/* Corner Design */}
              <span className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-gray-200 rounded-tl-xl"></span>
              <span className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-gray-200 rounded-br-xl"></span>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {item.title}
              </h3>

              <p className="text-black leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

{/* category */}

<ProductCategorySection></ProductCategorySection>


{/* form */}

<Form></Form>

  {/* feature */}

 <section className="py-16  bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Best Features
          </h2>

          <p className=" mx-auto text-gray-600 text-lg leading-relaxed">
            At <span className="font-semibold text-gray-900">Sangam Plastic Industries Private Limited</span>, 
            we offer a diverse range of high-quality plastic products including Plastic Dustbins, 
            Storage Water Tanks, Chemical Tanks, and Bio-Gas Plants. 
            With our competitive range, we ensure you find the perfect solution 
            for your home, office, or industrial needs.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-xl transition duration-300 border border-green-500"
            >
              <div className="text-green-600 mb-6 group-hover:scale-110 transition duration-300">
                {feature.icon}
              </div>

              <h3 className="text-xl font-semibold text-black mb-4">
                {feature.title}
              </h3>

              <p className="text-black leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

<Cta></Cta>
{/* why choose us */}

 <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
            Why Choose Sangam Plastic Industries as Your <br className="hidden md:block" />
            Plastic Dustbin Manufacturer in <span className="capitalize">{city}</span> ?
          </h2>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((item, index) => (
            <div
              key={index}
              className="group bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition duration-300"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-yellow-50 text-green-600 mb-5 group-hover:scale-110 transition duration-300">
                {item.icon}
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {item.title}
              </h3>

              <p className="text-black text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

      {/* ================= CTA ================= */}
      <section  className="py-24 bg-[#016630]  text-white text-center">
        <h2 className="text-3xl text-white md:text-5xl font-bold capitalize">
        Get High-Quality Plastic Dustbins Today in {city}
        </h2>
        <p className="mt-6 text-xl text-white max-w-5xl mx-auto">
        Ready to upgrade your waste management solutions? Contact Sangam Plastic Industries Private Limited, the trusted Plastic Dustbin Manufacturer in {city}, for durable, eco-friendly, and customizable dustbins. Whether it’s for home, office, or industrial use, we have the perfect solution for you.
        </p>
        <div className="mt-10">
          <a href="tel:8675756455"
           
            className=" bg-white text-black px-12 py-4 rounded-2xl font-semibold shadow-xl  transition"
          >
            Get in Touch 
          </a>
        </div>
      </section>

<Certificates></Certificates>

    
    {/* industries */}

    <section className="py-16  bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Industries We Serve – Sangam Plastic Industries
            <br className="hidden md:block" />
            Plastic Dustbin Manufacturer in {city}
          </h2>

          <p className="max-w-4xl mx-auto text-gray-600 text-lg leading-relaxed">
            As a leading Plastic Dustbin Manufacturer in {city}, Sangam Plastic Industries Private Limited caters to a wide range of industries, providing durable and high-quality dustbins tailored to diverse requirements. Our products are designed to support efficient waste management, hygiene, and sustainability across multiple sectors.
          </p>
        </div>

        {/* Industry Grid */}
        <div className="relative">
      <Swiper
        modules={[Autoplay, Navigation]}
        spaceBetween={24}
        slidesPerView={1}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
        className="pb-12"
      >
        {industries.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="group bg-green-50 p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition duration-300 h-full">
              
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-yellow-50 text-green-600 mb-6 group-hover:scale-110 transition duration-300">
                {item.icon}
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {item.title}
              </h3>

              <p className="text-black text-md leading-relaxed">
                {item.desc}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>

        {/* Bottom Paragraph */}
        <div className="mt-10 text-center">
          <p className="max-w-4xl mx-auto text-black text-lg leading-relaxed">
            By serving these industries, Sangam Plastic Industries Private Limited ensures that clients across {city} and nearby regions receive reliable, long-lasting, and environmentally friendly waste management solutions from a trusted Plastic Dustbin Manufacturer in {city}.
          </p>
        </div>

      </div>
    </section>










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


   
      <Citieskeywords></Citieskeywords>

</main>
  );
}