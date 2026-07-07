"use client";
import ContactForm from "@/components/Enquiry";
import Form from "@/components/Form";
import React, { useState } from "react";
import {
  Calendar1,
  Phone,
  Factory,
  Truck,
  PackageCheck,
  CheckCircle,
  Settings,
  FileCheck,
  Building2,
  ShieldCheck,
  Zap,
  BadgeCheck,
  FileText,
  IndianRupee,
  Menu,
  X,
  Award,
  Users,
  PhoneCall,
} from "lucide-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Certificates from "@/components/Landingpage/Certificates";
import ZigzagShowcase from "@/components/Landingpage/Testmonial";
import Otherpro from "@/components/Landingpage/Otherpro";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import Pointer from "@/components/Landingpage/Pointer";
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";
import FooterInquiry from "@/components/Landingpage/FooterInquiry";

export default function Inquiry() {
  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const features = [
    {
      icon: <Calendar1 size={28} />,
      color: "text-blue-600 bg-blue-100",
      title: "High Quality Plastic",
      desc: "Durable plastic dustbins designed for long lasting use.",
    },
    {
      icon: <Factory size={28} />,
      color: "text-purple-600 bg-purple-100",
      title: "Multiple Sizes Available",
      desc: "Different sizes and colour options for various waste management needs.",
    },
    {
      icon: <Truck size={28} />,
      color: "text-green-600 bg-green-100",
      title: "Strong & Durable Design",
      desc: "Built for regular use in hospitals, offices and public areas.",
    },
    {
      icon: <PackageCheck size={28} />,
      color: "text-orange-600 bg-orange-100",
      title: "Bulk Supply Available",
      desc: "Reliable bulk supply for municipalities, industries and commercial buyers.",
    },
    {
      icon: <CheckCircle size={28} />,
      color: "text-emerald-600 bg-emerald-100",
      title: "Easy to Clean",
      desc: "Smooth design for hygienic and easy maintenance.",
    },
    {
      icon: <Settings size={28} />,
      color: "text-red-600 bg-red-100",
      title: "Trusted Manufacturer & Supplier",
      desc: "Providing reliable plastic dustbins for multiple industries across India.",
    },
    {
      icon: <FileCheck size={28} />,
      color: "text-indigo-600 bg-indigo-100",
      title: "100% Certification Coverage",
      desc: "ISO 9001 | BMW Compliance | Q2 Certified.",
    },
    {
      icon: <Building2 size={28} />,
      color: "text-teal-600 bg-teal-100",
      title: "1,000+ Government Contracts",
      desc: "Trusted by municipal corporations and hospitals.",
    },
  ];

  const benefits = [
    {
      title: "Nationwide Delivery",
      icon: Truck,
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "Durable Materials",
      icon: ShieldCheck,
      color: "bg-green-100 text-green-600",
    },
    {
      title: "OEM Capability",
      icon: Factory,
      color: "bg-purple-100 text-purple-600",
    },
    {
      title: "Fast Dispatch",
      icon: Zap,
      color: "bg-yellow-100 text-yellow-600",
    },
    {
      title: "Tender-ready Documentation",
      icon: FileText,
      color: "bg-indigo-100 text-indigo-600",
    },
    {
      title: "Customisation Options",
      icon: Settings,
      color: "bg-pink-100 text-pink-600",
    },
    {
      title: "Certified Products",
      icon: BadgeCheck,
      color: "bg-teal-100 text-teal-600",
    },
    {
      title: "Transparent Pricing",
      icon: IndianRupee,
      color: "bg-orange-100 text-orange-600",
    },
  ];

  const services = [
    {
      title: "120L PP Central Wheeled Bio Bin",
      image: "/product/120L PP Central Wheeled Pedal Bio Bin/1.webp",
      link: "/products/120l-pp-central-wheeled-bio-bin",
    },

    {
      title: "120l large foot operated wheeled dustbin",
      image: "/product/120L Large Wheeled Pedal Dustbins/2.webp",
      link: "/products/120l-large-foot-operated-wheeled-dustbin",
    },

    {
      title: "240l plastic wheeled dustbin",
      image: "/product/Plastic Wheeled Dustbins 240l/2.webp",
      link: "/products/240l-plastic-wheeled-dustbin",
    },

    {
      title: "240l PP foot operated wheeled bin",
      image: "/product/120L PP Pedal Bio Bin/1.webp",
      link: "/products/240l-pp-foot-operated-wheeled-bin",
    },

    {
      title: "660L Four Wheel Plastic Dustbin",
      image: "/product/1100L Pedal Garbage Bins/1.webp",
      link: "/products/660l-four-wheel-plastic-dustbin",
    },

    {
      title: "1100L PP Wheeled Bio Bin",
      image: "/product/1100L PP Wheeled Bio Bin/3.webp",
      link: "/products/1100l-pp-wheeled-bio-bin",
    },
  ];

  return (
    <>
      {/* Nav */}
      <div className="fixed top-0 z-50 w-full bg-[#e3fff1] lg:bg-white shadow-md">
        <div className="mx-auto flex items-center justify-between h-18">
          {/* Logo */}
          <div className="flex items-center bg-green-700">
            <img
              src="/logo.webp"
              alt="logo"
              className="h-18 w- object-contain w-50"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-6 text-xl">
            <a
              href="/"
              className="text-red-600 font-medium hover:text-black transition"
            >
              Home
            </a>
            <a
              href="/products"
              className="text-red-600 font-medium hover:text-black transition"
            >
              Product
            </a>
            <a
              href="/aboutus"
              className="text-red-600 font-medium hover:text-black transition"
            >
              About Us
            </a>

            <a
              href="/contactus"
              className="text-red-600 font-medium hover:text-black transition"
            >
              Contact Us
            </a>
          </div>

          {/* Phone (Desktop only) */}
          <a
            href="tel:+918810422935"
            className="mr-2 hidden lg:flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
          >
            <span className="flex items-center justify-center bg-white/20 p-2 rounded-full">
              <PhoneCall size={20} />
            </span>

            <span className="font-semibold tracking-wide"> +91-8810422935</span>
          </a>

          <a
            href="https://wa.link/5alazl"
            className="mr-2 ml-1 items-center gap-3 text-white animate-pulse px-2 py-3 font-bold text-center transition-all duration-300 border rounded-lg bg-green-600 md:hidden text-sm lg:hidden"
          >
            Get Instant Quote <br />
            in 2 Mins
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-red-600 mr-4"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="lg:hidden bg-white shadow-md px-6 py-4 flex flex-col gap-4">
            <a href="/" className="text-red-600 font-medium">
              Home
            </a>
            <a href="/products" className="text-red-600 font-medium">
              Product
            </a>
            <a href="/aboutus" className="text-red-600 font-medium">
              About Us
            </a>

            <a href="/contactus" className="text-red-600 font-medium">
              Contact Us
            </a>

            <a
              href="tel:+918810422935"
              className="flex items-center gap-3 pt-2"
            >
              <Phone size={20} className="text-red-600" />
              <span className="font-semibold"> +91-8810422935</span>
            </a>
          </div>
        )}
      </div>

      {/* Hero Section */}
      <div className="relative min-h-[100vh] mt-18 hidden md:flex items-center overflow-hidden">
        <Image
          src="/polywell banner landscape.webp"
          alt="Polywell Banner"
          fill
          priority
          className="object-cover md:object-center lg:object-[75%_center]"
        />
      </div>

      {/* hero section form phone  */}
      <div className="relative bg-gray-50 md:hidden py-1 flex items-center flex-col gap-5 mt-14 ">
        <Image
          src="/garbage image.webp"
          width="1000"
          height="1000"
          alt="phone-banner"
        />
        <Link
          href="https://wa.me/918810422935?text=Hi%20Polywell%2C%20I%20need%20the%20wholesale%20price%20list%20and%20catalog%20for%20your%20dustbins.%20Please%20share%20details."
          className="bg-green-500 bg-gray-50 text-white whitespace-nowrap px-12 py-4 font-semibold rounded-full shadow hover:bg-green-600 hover:text-gray-500 transition hover:border "
        >
          Get Factory Price List on WhatsApp
        </Link>
      </div>

      {/* Form Section */}
      <div className="py-8 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-18 grid lg:grid-cols-2 gap-5 items-center">
          <div className="relative">
            <img
              src="/mobbanner2.jpeg"
              alt="Contact"
              className="w-full h-full lg:h-[500px] object-cover lg:object-[50%_40%] rounded-2xl shadow-xl"
            />
          </div>

          <div className="bg-gray-50 border border-2 border-green-500 lg:p-8 p-4 rounded-2xl shadow-lg">
            <h2 className="text-[15px] md:text-xl font-bold mb-4 text-center">
              हॉस्पिटल, फैक्ट्री, सोसाइटी, पार्क, रिटेलर्स etc. के लिए ,<br />
              Plastic Dustbins — डायरेक्ट फैक्ट्री रेट पर!
            </h2>
            <Form />
          </div>
        </div>
      </div>

      <section className="py-3 mt-10 bg-gradient-to-br from-white to-blue-50">
        <div className="text-center max-w-3xl mx-auto mb-8 px-4">
          <div className="flex items-center  justify-center">
            <div className="w-10 h-1 bg-sky-500 mr-3 rounded-full" />
            <h3 className="text-sky-600 font-bold uppercase tracking-[0.15em] text-sm sm:text-base">
              Our Bestsellers
            </h3>
            <div className="w-10 h-1 bg-sky-500 ml-3 rounded-full" />
          </div>

          <h2 className="relative inline-block font-bold text-[#1E2939] text-3xl sm:text-3xl md:text-5xl leading-snug group">
            Our Featured Product
          </h2>
        </div>

        <div className="px-4 md:px-10 relative">
          {/* LEFT ARROW */}
          <div className="custom-prev absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow cursor-pointer">
            <ChevronLeft size={24} />
          </div>

          {/* RIGHT ARROW */}
          <div className="custom-next absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow cursor-pointer">
            <ChevronRight size={24} />
          </div>

          <Swiper
            modules={[Autoplay, Navigation]}
            navigation={{
              prevEl: ".custom-prev",
              nextEl: ".custom-next",
            }}
            autoplay={{ delay: 4000 }}
            loop
            spaceBetween={20}
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
          >
            {services.map((service, index) => (
              <SwiperSlide key={index}>
                <div
                  onClick={() => setIsOpen(true)}
                  className="relative border h-[320px] border-black w-full max-w-sm mx-auto rounded-xl overflow-hidden shadow-lg cursor-pointer"
                >
                  <div className="h-60">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <div className="w-full bg-stone-300 py-4 px-1 h-full text-center">
                    <h3 className="text-lg md:text-xl font-semibold capitalize h-full text-gray-800">
                      {service.title}
                    </h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className=" mt-7 flex justify-center items-center">
          <Link
            href="https://wa.link/5alazl"
            className="bg-green-500 py-3 md:py-2 bg-gray-50 text-lg text-white whitespace-nowrap px-12  font-semibold rounded-full shadow hover:bg-green-600  transition hover:border "
          >
            Ask for Color & Size Options
          </Link>
        </div>
      </section>

      {/* Introducing */}
      <section className="py-8 bg-gradient-to-t from-gray-100 to-gray-50">
        <div className="container mx-auto px-6 lg:px-20 grid lg:grid-cols-2 lg:gap-12 gap-5 items-center">
          <div className="relative">
            <img
              src="/ctaimg.webp"
              alt="Polywell Manufacturing"
              className="w-full lg:h-[450px] object-cover rounded-2xl shadow-lg"
            />
            <div className="absolute inset-0 bg-black/10 rounded-2xl"></div>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              Plastic Dustbin Manufacturer in India
            </h2>

            <p className="text-lg text-gray-900 mb-6">
              We manufacture and supply high quality plastic dustbins at best
              price, designed for durability, hygiene and efficient waste
              management. Available in multiple sizes, colours and models for
              hospitals, offices, municipalities and industries with bulk supply
              across India.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-[#0A3A49]/10 flex items-center justify-center text-[#0A3A49]">
                  ✓
                </span>
                <p>Direct Manufacturer Pricing </p>
              </div>

              <div className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-[#0A3A49]/10 flex items-center justify-center text-[#0A3A49]">
                  ✓
                </span>
                <p>Strong & Durable Plastic</p>
              </div>

              <div className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-[#0A3A49]/10 flex items-center justify-center text-[#0A3A49]">
                  ✓
                </span>
                <p>All Sizes Available (120L, 240L, 1100L)</p>
              </div>

              <div className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-[#0A3A49]/10 flex items-center justify-center text-[#0A3A49]">
                  ✓
                </span>
                <p>Fast Delivery Across India</p>
              </div>

              <div className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-[#0A3A49]/10 flex items-center justify-center text-[#0A3A49]">
                  ✓
                </span>
                <p>Bulk Orders Accepted</p>
              </div>

              <div className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-[#0A3A49]/10 flex items-center justify-center text-[#0A3A49]">
                  ✓
                </span>
                <p>Serving Businesses & Institutions Across India</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(true)}
              className="bg-green-600 hidden md:block text-white whitespace-nowrap px-12 py-3 rounded-full font-semibold hover:bg-green-700 transition"
            >
              Build a Stronger Supply Chain with Us
            </button>
            <div className=" md:hidden mt-7 flex justify-center items-center">
              <Link
                href="https://wa.link/5alazl"
                className="bg-green-500 py-3 text-lg bg-gray-50 text-white whitespace-nowrap px-12  font-semibold rounded-full shadow hover:bg-green-600  transition hover:border "
              >
                Ask Our Dustbin Expert
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Product */}
      <div id="product">
        <Otherpro inquiry={true} setIsOpen={setIsOpen1} />
        <div className=" mb-4 flex justify-center items-center">
          <Link
            href="https://wa.link/5alazl"
            className="bg-green-500 py-3 bg-gray-50 text-white whitespace-nowrap px-12 font-semibold rounded-full shadow hover:bg-green-600  transition hover:border "
          >
            Check Wholesale Prices Instantly
          </Link>
        </div>
      </div>

      <Pointer></Pointer>

      {/* About Us */}
      <section className=" md:hidden bg-[#F5F6F8] pb-2" id="aboutus">
        <div className="  flex justify-center text-center items-center">
          <Link
            href="https://wa.link/5alazl"
            className="bg-green-500 w-[90%]  bg-gray-50 text-white whitespace-nowrap px-12 py-4 font-semibold rounded-full shadow hover:bg-green-600  transition hover:border "
          >
            Get Bulk Quote
          </Link>
        </div>
      </section>
      <section className="hidden md:block py-8 bg-white" id="aboutus">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-1">
          Common Problems – Your Challenges, Our Understanding
        </h2>
        <p className="md:text-lg text-base text-gray-900 mb-4 text-center">
          Are you facing these hurdles in your procurement process?
        </p>

        <div className="container mx-auto px-4 lg:px-20 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gray-900 mb-4 leading-relaxed text-lg lg:block hidden">
              Imagine this: <br />
              You secured a government tender for supplying dustbins and
              hospital bins. The deadline is tight, the documentation needs to
              be precise, and the quantities are large. You place the order with
              your existing supplier — but now you are:
            </p>

            <ul className="space-y-4 mb-4">
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 flex items-center justify-center rounded-full bg-green-100 text-green-600 font-bold">
                  ✓
                </span>
                <p>Chasing updates and delivery timelines</p>
              </li>

              <li className="flex items-start gap-3">
                <span className="w-6 h-6 flex items-center justify-center rounded-full bg-green-100 text-green-600 font-bold">
                  ✓
                </span>
                <p>
                  Receiving inconsistent quality that puts your contract at risk
                </p>
              </li>

              <li className="flex items-start gap-3">
                <span className="w-6 h-6 flex items-center justify-center rounded-full bg-green-100 text-green-600 font-bold">
                  ✓
                </span>
                <p>
                  Scrambling to meet client expectations with incomplete or
                  delayed shipments
                </p>
              </li>

              <li className="flex items-start gap-3">
                <span className="w-6 h-6 flex items-center justify-center rounded-full bg-green-100 text-green-600 font-bold">
                  ✓
                </span>
                <p>
                  Losing margin due to last-minute price changes and hidden
                  costs
                </p>
              </li>
            </ul>

            <p className="text-gray-900 font-medium mb-4 lg:block hidden">
              These are not just scenarios — they’re real situations our clients
              faced before they partnered with{" "}
              <span className="text-[#0A3A49] font-semibold">Polywell</span>.
            </p>

            <button
              onClick={() => setIsOpen(true)}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 font-semibold rounded-full shadow transition"
            >
              Partner with Polywell for Bulk Supply
            </button>
          </div>

          <div className="relative lg:block hidden">
            <img
              src="/form.png"
              alt="Procurement challenges"
              className="w-full h-[450px] object-cover rounded-2xl shadow-lg"
            />

            {/* overlay */}
            {/* <div className="absolute inset-0 bg-black/20 rounded-2xl"></div> */}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="hidden md:block py-8 bg-gray-100 ">
        <div className="container mx-auto px-4 lg:px-20">
          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Why Buyers Count on Polywell
            </h2>
          </div>

          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
            breakpoints={{
              320: {
                slidesPerView: 1, // mobile
              },
              768: {
                slidesPerView: 2, // tablet
              },
              1024: {
                slidesPerView: 4, // desktop
              },
            }}
          >
            {features.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="bg-white p-6 rounded-xl h-50 shadow-sm hover:shadow-lg transition group flex flex-col items-center gap-">
                    <div
                      className={`w-12 h-12 flex items-center justify-center rounded-lg mb-2 ${item.color}`}
                    >
                      {item.icon}
                    </div>

                    <h3 className="font-semibold text-lg text-center mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 text-center mt-auto">
                      {item.desc}
                    </p>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </section>

      {/* CTA */}
      <section className="py-8 bg-gradient-to-r from-[#0A3A49] to-[#024353] text-white">
        <div className="container mx-auto px-6 lg:px-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's Talk — Partner With Polywell
          </h2>

          <p className="max-w-2xl mx-auto text-gray-200 mb-6">
            Looking to streamline your waste management supply chain? Need a
            reliable manufacturer for your next tender or hospital supply
            contract? Let’s begin a conversation — we would be happy to
            understand your requirements.
          </p>

          <div className="flex justify-center items-center">
            <button
              onClick={() => setIsOpen(true)}
              className="bg-white hidden md:block text-[#0A3A49] font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-gray-100 transition"
            >
              Let’s Begin a Conversation
            </button>
          </div>
          <Link
            href="https://wa.link/5alazl"
            className="bg-white md:hidden text-[#0A3A49] font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-gray-100 transition"
          >
            Let’s Begin a Conversation
          </Link>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-8 bg-gray-100">
        <div className="container mx-auto px-4 lg:px-20">
          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-1">
              Key Features / Benefits (Polywell Advantage)
            </h2>
            <p className="text-gray-900 text-lg">
              Why Bulk Buyers Choose Polywell
            </p>
          </div>

          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
            breakpoints={{
              320: {
                slidesPerView: 2, // mobile
              },
              768: {
                slidesPerView: 2, // tablet
              },
              1024: {
                slidesPerView: 4, // desktop
              },
            }}
          >
            {benefits.map((item, index) => {
              const Icon = item.icon;

              return (
                <SwiperSlide key={index}>
                  <div className="bg-white p-6 h-[168px] rounded-xl shadow-sm hover:shadow-lg transition group flex flex-col items-center gap-">
                    <div
                      className={`w-12 h-12 flex items-center justify-center rounded-lg mb-4 ${item.color}`}
                    >
                      <Icon size={24} />
                    </div>

                    <h3 className="font-semibold text-lg text-center">
                      {item.title}
                    </h3>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </section>

      {/* Details */}
      <section className="py-6 bg-gradient-to-b from-[#DCFAEA] to-[#cdf5df]">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-5 text-center">
          {/* Experience */}
          <div className="flex flex-col items-center gap-2">
            <div className="bg-green-600 text-white p-3 rounded-full shadow-md">
              <Award size={40} />
            </div>
            <p className="text-2xl font-bold text-gray-900">50+ Years</p>
            <p className="text-base text-gray-700">Industry Experience</p>
          </div>

          {/* Manufacturing */}
          <div className="flex flex-col items-center gap-2">
            <div className="bg-green-600 text-white p-3 rounded-full shadow-md">
              <Factory size={40} />
            </div>
            <p className="text-2xl font-bold text-gray-900">73,800+ sq.ft</p>
            <p className="text-base text-gray-700">
              Manufacturing Infrastructure
            </p>
          </div>

          {/* Units Supplied */}
          <div className="flex flex-col items-center gap-2">
            <div className="bg-green-600 text-white p-3 rounded-full shadow-md">
              <PackageCheck size={40} />
            </div>
            <p className="text-2xl font-bold text-gray-900">5.5M+</p>
            <p className="text-base text-gray-700">Units Supplied Annually</p>
          </div>

          {/* Distributors */}
          <div className="flex flex-col items-center gap-2">
            <div className="bg-green-600 text-white p-3 rounded-full shadow-md">
              <Users size={40} />
            </div>
            <p className="text-2xl font-bold text-gray-900">7,600+</p>
            <p className="text-base text-gray-700">Distributors & Partners</p>
          </div>
        </div>
      </section>

      {/* Certificates */}
      <div id="certificates">
        <Certificates />
      </div>

      {/* Testimonials */}
      <ZigzagShowcase />

      {/* Contact Us */}
      <div className="py-8 bg-gray-50" id="contactus">
        <div className="container mx-auto px-6 lg:px-20 grid lg:grid-cols-2 gap-5 items-center  ">
          <div className="bg-white p-4 md:p-8 rounded-2xl shadow-lg border-2 border-green-500">
            <h2 className="text-[15px] md:text-xl font-bold mb-4 text-center">
              हॉस्पिटल, फैक्ट्री, सोसाइटी, पार्क, रिटेलर्स etc. के लिए <br />{" "}
              Plastic Dustbins — डायरेक्ट फैक्ट्री रेट पर!
            </h2>
            <Form />
          </div>

          <div className="relative lg:block hidden">
            <img
              src="/nurse-organizing-supplies-stockcake.webp"
              alt="Contact"
              className="w-full h-[500px] object-cover rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center p-3 md:p-6 bg-gray-100">
        <div className="w-full max-w-6xl rounded-2xl bg-[#0c234a] text-white shadow-xl overflow-hidden">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 px-5 py-6 md:px-10 md:py-8">
            {/* LEFT CONTENT */}
            <div className="text-center w-full">
              <h2 className="text-lg sm:text-2xl text-center md:text-4xl font-extrabold uppercase leading-snug">
                Bulk Enquiry? Instant Factory Direct Rates
              </h2>

              {/* ICON + TEXT ROW */}
              <div className="flex sm:flex-row items-center justify-center md:justify-center gap-2 md:gap-4 mt-5">
                {/* Phone */}
                <a href="tel:+918810422935">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-green-500 flex items-center justify-center shadow-lg shrink-0">
                    <PhoneCall className="w-6 h-6 md:w-7 md:h-7 text-white" />
                  </div>
                </a>

                {/* Text */}
                <span className="text-base hidden md:block sm:text-xl md:text-3xl whitespace-nowrap font-bold text-center">
                  👉 ASK OUR DUSTBIN EXPERT 👈
                </span>

                <span className="text-base md:hidden sm:text-xl md:text-3xl whitespace-nowrap font-bold text-center">
                  ASK OUR DUSTBIN EXPERT
                </span>

                {/* WhatsApp */}
                <a
                  href="https://wa.link/5alazl"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-green-500 flex items-center justify-center shadow-lg shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 32 32"
                      fill="white"
                      className="w-6 h-6 md:w-7 md:h-7"
                    >
                      <path d="M16.01 3C8.83 3 3 8.82 3 16c0 2.53.74 4.98 2.13 7.08L3 29l6.11-2.03A12.93 12.93 0 0 0 16.01 29C23.18 29 29 23.18 29 16S23.18 3 16.01 3zm0 23.67c-2.13 0-4.22-.57-6.05-1.66l-.43-.25-3.63 1.2 1.18-3.54-.28-.45A10.6 10.6 0 0 1 5.34 16c0-5.88 4.79-10.67 10.67-10.67S26.68 10.12 26.68 16 21.89 26.67 16.01 26.67zm5.85-7.96c-.32-.16-1.9-.94-2.19-1.05-.29-.11-.5-.16-.71.16s-.82 1.05-1 1.27c-.18.21-.37.24-.69.08-.32-.16-1.34-.49-2.55-1.56-.94-.84-1.58-1.87-1.76-2.18-.18-.32-.02-.49.14-.65.14-.14.32-.37.48-.55.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.71-1.71-.97-2.34-.26-.62-.52-.53-.71-.54h-.61c-.21 0-.56.08-.85.4-.29.32-1.11 1.08-1.11 2.64s1.13 3.06 1.29 3.27c.16.21 2.22 3.39 5.38 4.75.75.32 1.34.51 1.79.65.75.24 1.43.21 1.97.13.6-.09 1.9-.78 2.17-1.53.27-.75.27-1.39.19-1.53-.08-.13-.29-.21-.61-.37z" />
                    </svg>
                  </div>
                </a>
              </div>

              <p className="mt-4 text-xs sm:text-sm md:text-lg text-gray-200 tracking-wide">
                GET WHOLESALE QUOTE IN 2 MINUTES
              </p>
            </div>

            {/* CTA BUTTON */}
            {/* <div className="w-full md:w-auto">
              <button className="w-full md:w-auto bg-green-600 hover:bg-green-700 transition-all duration-300 text-white font-semibold px-6 py-3 rounded-xl text-sm md:text-lg shadow-lg">
                Your Requirements...
              </button>
            </div> */}
          </div>
        </div>
      </div>

      <ContactForm isOpen={isOpen} onClose={() => setIsOpen(false)} />

      <FooterInquiry />
    </>
  );
}
