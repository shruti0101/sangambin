"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
} from "lucide-react";

const products = [
  { name: "Plastic Dustbins", href: "/categories/plastic-dustbin" },
 
  { name: "Plastic Pedal Bins", href: "/categories/pedal-dustbin" },
  { name: "Bio-Medical Bins", href: "/categories/bio-medical-waste-bins" },
  { name: "Wheeled Bins", href: "/categories/wheeled-dustbin" },
  { name: "Plastic Pallets", href: "/categories/plastic-pallets" },
  { name: "Bio Bins", href: "/categories/bio-bins" },
  { name: "Garbage Dustbins", href: "/categories/garbage-dustbin" },
];

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <footer
      className="relative text-gray-300 pt-16 pb-8 bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.6)), url(/try.png)`,
      }}
    >
      {/* Top Accent Line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#0B6B42] via-green-500 to-[#0B6B42]"></div>

      <div className="relative w-full mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 md:gap-7">

          {/* COLUMN 1 — ABOUT */}
          <div>
            <Image
              src="/logo.webp"
              alt="Sangam Plastic Logo"
              width={160}
              height={50}
              className="mb-6"
            />
            <h3 className="text-white font-semibold text-xl mb-4 font-serif">
              About Sangam Plastic
            </h3>
            <p className="text-base md:text-lg text-gray-200 leading-relaxed">
              Sangam Plastic Industries Pvt. Ltd. is a leading manufacturer of
              high-quality plastic waste management solutions for homes,
              hospitals, industries, and commercial spaces across India.
              We are committed to durability, hygiene, and sustainability.
            </p>
          </div>

          {/* COLUMN 2 — EXPLORE */}
          <div>
            <h3 className="text-white font-semibold text-xl mb-4 font-serif">
              Explore Links
            </h3>
            <ul className="space-y-2 text-base md:text-lg text-white">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about-us" },
                { name: "Our Products", href: "/products" },
                { name: "Our Blog", href: "/blogs" },
                { name: "Contact Us", href: "/contact-us" },
              ].map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="hover:text-[#0B6B42] transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3 — PRODUCTS */}
          <div>
            <h3 className="text-white font-semibold text-xl mb-4 font-serif">
              Our Products
            </h3>
            <ul className="space-y-2 text-base md:text-lg text-white">
              {products.map((p, i) => (
                <li key={i}>
                  <Link
                    href={p.href}
                    className="hover:text-[#0B6B42] transition-colors duration-300"
                  >
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 4 — CONTACT */}
          <div>
            <h3 className="text-white font-semibold text-xl mb-4 font-serif">
              Contact Us
            </h3>
            <div className="flex items-start gap-3 mb-4">
              <MapPin className="w-11 h-11 text-[#0B6B42]" />
              <p className="text-base md:text-lg text-gray-200 leading-relaxed">
              Address - 110, Satya Bhawan, 36 Community Center, Wazirpur Industrial Area, New Delhi-110052
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-[#0B6B42]" />
                <a href="tel:+919810026034" className="text-white underline">
               +91-9810026034
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-[#0B6B42]" />
                <a href="tel:+919810316441" className="text-white underline">
              +91-9810316441
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-[#0B6B42]" />
                <a href="mailto:sales@sangamplastic.com">
                info@polywell.co.in
                </a>
              </div>
            
            </div>
          </div>

          {/* COLUMN 5 — TRUST BADGE */}
          <div className="px-2 items-center md:pb-8">
            <h3 className="text-xl font-serif text-white font-semibold mb-3">
              Trust Elite Certificate
            </h3>
            <p className="text-base text-white leading-relaxed mb-3">
              Recognizing our commitment to quality, customer satisfaction,
              and ethical manufacturing standards in plastic waste solutions.
            </p>

            <div className="flex justify-center md:justify-end">
              <img
                src="https://res.cloudinary.com/dzbkxqqo9/image/upload/v1759726401/trustseal_vltgii.webp"
                alt="Trust Elite"
                className="w-28 h-28 object-contain cursor-pointer hover:scale-105 transition"
                onClick={() => setIsModalOpen(true)}
              />

              {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
                  <div className="relative">
                    <button
                      className="absolute top-2 right-2 text-white text-2xl font-bold"
                      onClick={() => setIsModalOpen(false)}
                    >
                      ✕
                    </button>
                    <img
                      src="/certificate.webp"
                      alt="Trust Elite Full"
                      className="max-w-[90vw] max-h-[90vh] rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="relative border-t px-2 border-gray-600 md:mt-12 pt-4 text-center text-sm md:text-base text-gray-300">
        <p>
          Copyright © 2025 Sangam Plastic Industries Pvt. Ltd. All Rights Reserved.
        </p>
        <p className="mt-1">
          Website Designed By{" "}
          <a
            href="https://promozionebranding.com/"
            className="text-[#0B6B42] underline font-serif"
          >
            Promozione Branding Pvt. Ltd.
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
