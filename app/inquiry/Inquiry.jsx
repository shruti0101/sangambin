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
import Certificates from "@/components/Landingpage/Certificates";
import ZigzagShowcase from "@/components/Landingpage/Testmonial";
import Otherpro from "@/components/Landingpage/Otherpro";
import PopupForm from "@/components/Popup2";
import ServiceProcess from "@/components/Landingpage/Industries";
import Image from "next/image";

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
              href="#"
              className="text-red-600 font-medium hover:text-black transition"
            >
              Home
            </a>
            <a
              href="#product"
              className="text-red-600 font-medium hover:text-black transition"
            >
              Product
            </a>
            <a
              href="#aboutus"
              className="text-red-600 font-medium hover:text-black transition"
            >
              About Us
            </a>
            <a
              href="#certificates"
              className="text-red-600 font-medium hover:text-black transition"
            >
              Certificates
            </a>
            <a
              href="#contactus"
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
            href="tel:+918810422935"
            className="mr-2 items-center gap-3 text-white animate-pulse px-3 py-3 font-bold text-center transition-all duration-300 border rounded-lg bg-green-600 md:hidden text-sm lg:hidden"
          >
            Get Bulk Quote Today!
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
            <a href="#" className="text-red-600 font-medium">
              Home
            </a>
            <a href="#product" className="text-red-600 font-medium">
              Product
            </a>
            <a href="#aboutus" className="text-red-600 font-medium">
              About Us
            </a>
            <a href="#certificates" className="text-red-600 font-medium">
              Certificates
            </a>
            <a href="#contactus" className="text-red-600 font-medium">
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
      <div
        className="relative min-h-[600px] items-center mt-18 bg-no-repeat bg-cover  md:bg-center lg:bg-[position:75%_center] hidden md:flex"
        style={{ backgroundImage: "url('/banner.webp')" }}
      >
        <div className="container mx-auto px-4 lg:px-20">
          <div className="max-w-2xl text-left">
            <h1 className="text-3xl md:text-5xl mb-4 font-bold">
              50+ Years of Manufacturing Experiance
            </h1>

            <p className="text-xl md:text-2xl font-semibold leading-tight mb-4 text-black">
              Trusted Manufacturer & Supplier of Durable Plastic Dustbins for
              Hospitals, Offices, Municipalities & Industries Across India
              {/* Municipalities, Hospitals और Offices के लिए बेहतरीन क्वालिटी के
              डस्टबिन्स - पूरे भारत में सप्लाई उपलब्ध */}
            </p>

            <ul className="text-xl mb-6 text-black font-semibold space-y-1">
              <li>Desiged for Institutional Procurement</li>
              <li>High-Volume Production Capacity</li>
              <li>Tender Documentation Support</li>
              <li>Pan-India Bulk Dispatch</li>
            </ul>

            <button
              onClick={() => setIsOpen(true)}
              className="bg-gray-900 text-white lg:px-20 px-15 py-4 font-semibold rounded-full shadow hover:bg-white hover:text-[#0A3A49] transition hover:border"
            >
              Get Product Details & Price
            </button>
          </div>
        </div>
      </div>

      {/* hero section form phone  */}
      <div className="relative md:hidden flex items-center flex-col gap-5 mt-14 mb-5">
        <Image
          src="/garbage image.webp"
          width="1000"
          height="1000"
          alt="phone-banner"
        />
        <button
          onClick={() => setIsOpen(true)}
          className="bg-green-500 text-white lg:px-20 px-8 py-4 font-semibold rounded-full shadow hover:bg-green-600 hover:text-gray-500 transition hover:border "
        >
          Get Product Details & Price
        </button>
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

          <div className="bg-gray-50 border border-gray-200 lg:p-8 p-4 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-bold mb-4 text-center">
              Request a Quote
            </h2>
            <Form />
          </div>
        </div>
      </div>

      {/* features */}
      <ServiceProcess />

      {/* Introducing */}
      <section className="py-8 bg-gradient-to-t from-gray-100 to-gray-50">
        <div className="container mx-auto px-6 lg:px-20 grid lg:grid-cols-2 lg:gap-12 gap-5 items-center">
          <div className="relative">
            <img
              src="/ctaimg.png"
              alt="Polywell Manufacturing"
              className="w-full lg:h-[450px] object-cover rounded-2xl shadow-lg"
            />
            <div className="absolute inset-0 bg-black/10 rounded-2xl"></div>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              Introducing Polywell Manufacturer
            </h2>

            <p className="text-lg text-gray-900 mb-6">
              We manufacture and supply high quality plastic dustbins designed
              for durability, hygiene and efficient waste management. Available
              in multiple sizes, colours and models for hospitals, offices,
              municipalities and industries. Our dustbins are built with durable
              plastic material to ensure long lasting performance, easy
              maintenance and efficient waste collection, making them ideal for
              commercial spaces, public areas and industrial environments.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-[#0A3A49]/10 flex items-center justify-center text-[#0A3A49]">
                  ✓
                </span>
                <p>Experienced Plastic Dustbin Manufacturer</p>
              </div>

              <div className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-[#0A3A49]/10 flex items-center justify-center text-[#0A3A49]">
                  ✓
                </span>
                <p>Designed for Commercial & Industrial Waste Management</p>
              </div>

              <div className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-[#0A3A49]/10 flex items-center justify-center text-[#0A3A49]">
                  ✓
                </span>
                <p>Strong, Durable & Easy to Maintain Products</p>
              </div>

              <div className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-[#0A3A49]/10 flex items-center justify-center text-[#0A3A49]">
                  ✓
                </span>
                <p>Wide Range of Plastic Waste Bins</p>
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
              className="bg-green-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-700 transition"
            >
              Build a Stronger Supply Chain with Us
            </button>
          </div>
        </div>
      </section>

      {/* Product */}
      <div id="product">
        <Otherpro inquiry={true} setIsOpen={setIsOpen1} />
      </div>

      {/* Why us */}
      <section className="py-8 bg-gray-100">
        <div className="container mx-auto px-4 lg:px-20">
          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Why Buyers Count on Polywell
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {features.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition group"
              >
                <div
                  className={`mb-4 w-12 h-12 flex items-center justify-center rounded-lg ${item.color}`}
                >
                  {item.icon}
                </div>

                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>

                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="py-8 bg-white" id="aboutus">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-1">
          Common Problems – Your Challenges, Our Understanding
        </h2>
        <p className="md:text-lg text-base text-gray-900 mb-4 text-center">
          Are you facing these hurdles in your procurement process?
        </p>

        <div className="container mx-auto px-4 lg:px-20 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gray-900 mb-4 leading-relaxed text-lg">
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

            <p className="text-gray-900 font-medium mb-4">
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

          <button
            onClick={() => setIsOpen(true)}
            className="bg-white text-[#0A3A49] font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-gray-100 transition"
          >
            Let’s Begin a Conversation
          </button>
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

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {benefits.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition group"
                >
                  <div
                    className={`w-12 h-12 flex items-center justify-center rounded-lg mb-4 ${item.color}`}
                  >
                    <Icon size={24} />
                  </div>

                  <h3 className="font-semibold text-lg">{item.title}</h3>
                </div>
              );
            })}
          </div>
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
        <div className="container mx-auto px-6 lg:px-20 grid lg:grid-cols-2 gap-5 items-center">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-bold mb-4 text-center">
              Request a Quote
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

      <ContactForm isOpen={isOpen} onClose={() => setIsOpen(false)} />
      <PopupForm isOpen={isOpen1} onClose={() => setIsOpen1(false)} />
    </>
  );
}
