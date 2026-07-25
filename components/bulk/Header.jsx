import React from "react";
import Image from "next/image";
import { LuPhoneCall } from "react-icons/lu";

export default function Header() {
  return (
    <header className="bg-[#0F5D3F] py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        
        {/* Logo */}
        <Image
          src="/logo.webp"
          width={210}
          height={100}
          alt="Logo"
          className="object-contain w-[110px] sm:w-[140px] md:w-[160px] lg:w-[190px]"
        />

        {/* Right Side */}
        <div className="flex items-center gap-2 sm:gap-4 md:gap-6">
          
          {/* Phone */}
          <a
            href="tel:+918810422935"
            className="hidden sm:flex items-center gap-2 text-white hover:text-lime-300 transition text-sm md:text-base"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-lime-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 5a2 2 0 012-2h2.28a2 2 0 011.94 1.515l.517 2.067a2 2 0 01-.502 1.95L8.09 9.68a16.02 16.02 0 006.23 6.23l1.148-1.148a2 2 0 011.95-.502l2.067.517A2 2 0 0121 16.72V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>

            <span className="font-medium whitespace-nowrap">
              +91 88104 22935
            </span>
          </a>

          {/* Mobile Phone Icon Only */}
          <a
            href="tel:+918810422935"
            className="sm:hidden bg-white p-2 rounded-xl text-[#0F5D3F]"
          >
          <LuPhoneCall size={20} />

          </a>

          {/* Button */}
          <a
            href="#"
            className="bg-lime-400 text-[#0F5D3F] px-4 py-2 sm:px-6 sm:py-2.5 md:px-8 md:py-3 rounded-md sm:rounded-lg uppercase font-semibold tracking-wider text-xs sm:text-sm md:text-base hover:bg-white transition whitespace-nowrap"
          >
            Get Quote
          </a>
        </div>
      </div>
    </header>
  );
}