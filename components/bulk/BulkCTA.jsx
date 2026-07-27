"use client"
import ContactForm from "../Enquiry";
import { useState } from "react";
import EnquiryBulkForm from "./EnquiryBulkForm";




export default function BulkCTA() {
      const [isOpen, setIsOpen] = useState(false);
    


  return (
    <section className="bg-[#0f5d3f] py-8  md:py-14 px-4 md:px-10 text-center">
      <div className="max-w-5xl mx-auto">
        
        {/* Heading */}
        <h2 className="text-white font-extrabold leading-tight text-3xl  md:text-5xl">
          Ready to quote your <br className="hidden sm:block" />
          next bulk order?
        </h2>

        {/* Subtext */}
        <p className="text-white mt-6 text-sm sm:text-base md:text-lg max-w-3xl mx-auto">
          Factory-direct pricing for municipalities, hospitals, industries &
          distributors. Minimum order 100 units.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
          
          {/* Primary Button */}
          <button onClick={() => setIsOpen(true)} className="bg-yellow-600 hover:bg-yellow-700 text-black font-semibold px-8 py-3 rounded-md transition w-full sm:w-auto">
            GET BULK PRICING ↑
          </button>

          {/* Call Button */}
          <a
            href="tel:+918810422935"
            className="border border-white text-white px-8 py-3 rounded-md hover:bg-white hover:text-black transition w-full sm:w-auto text-center"
          >
            CALL +91 88104 22935
          </a>
        </div>
      </div>

              <EnquiryBulkForm isOpen={isOpen} onClose={() => setIsOpen(false)} />


    </section>
  );
}