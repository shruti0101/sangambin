"use client";
import { Phone, MessageCircle, ArrowDown } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { useState } from "react";
import ContactForm from "../Enquiry";
import EnquiryBulkForm from "./EnquiryBulkForm";

export default function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="bg-[#F5F6EF] py-8 lg:py-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Left Content */}
          <div>
            {/* Top Label */}
            <div className="mb-6 flex items-center gap-3 text-sm uppercase tracking-[0.3em] text-amber-700">
              <span className="h-[2px] w-10 bg-amber-700"></span>
              <span>Plastic Dustbin Manufacturer • Est. 1988</span>
            </div>

            {/* Heading */}
            <h1 className="text-3xl font-black lg:leading-12 text-[#16241F]  lg:text-5xl">
              Bulk Plastic Dustbins.
              <br />
              <span className="text-lime-700">Factory-Direct</span>{" "}
              <span className="text-[#16241F]">Pricing.</span>
            </h1>

            {/* Description */}
            <p className="mt-4 lg:mt-6 max-w-xl text-lg md:leading-9 text-slate-600">
              We manufacture premium plastic dustbins and waste-management
              solutions for municipalities, hospitals, industries and
              distributors across India. GeM-approved, tender-ready and built
              for large-scale supply.
            </p>

            {/* Notice Card */}
            <div className="mt-10 rounded-xl border border-neutral-300 bg-white shadow-sm">
              <div className="border-l-4 border-lime-700 p-4 lg:p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center p-2 justify-center rounded-lg bg-amber-100 text-xl">
                    📦
                  </div>

                  <div>
                    <p className="text-lg font-bold text-[#16241F]">
                      Minimum order: 100 units
                    </p>

                    <p className="mt-2 text-slate-600">
                      Bulk & institutional supply only. Not available for
                      single-piece retail purchase.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <button
                onClick={() => setIsOpen(true)}
                className="flex items-center justify-center gap-2 rounded-lg bg-lime-700 px-8 py-4 font-semibold uppercase tracking-wider text-white transition hover:bg-lime-900"
              >
                Get Bulk Pricing
                <ArrowDown size={18} />
              </button>

              <a
                href="https://wa.link/5alazl"
                className="flex items-center justify-center gap-2 rounded-lg bg-[#16241F] px-8 py-4 font-semibold uppercase tracking-wider text-white transition hover:bg-[#23362f]"
              >
                WhatsApp Bulk
                <SiWhatsapp size={18} />
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            {/* Shadow Card */}
            <div className="absolute inset-4   lg:w-[590px] right-2  lg:h-[505px] top-6 rounded-2xl bg-[#24443A]"></div>

            <div className="relative overflow-hidden rounded-3xl bg-white shadow-2xl">
              <img
                src="/ctaimg.webp"
                alt="Plastic Dustbins"
                className="h-[300px] w-full object-cover sm:h-[450px] lg:h-[500px]"
              />
            </div>
          </div>
        </div>
      </div>

      <EnquiryBulkForm isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </section>
  );
}
