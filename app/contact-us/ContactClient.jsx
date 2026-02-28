"use client";
import React, { useState, useRef } from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import Link from "next/link";
import axios from "axios";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const formRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = formRef.current;

    const name = form.name.value;
    const phone = form.phone.value;
    const email = form.email.value;
    const product = form.products.value;
    const message = form.message.value;

    try {
      const payload = {
        platform: "Sangam Plastic Industries Contact Form",
        platformEmail: "info@sangamplastic.com",
        name,
        phone,
        email,
        place: "N/A",
        product,
        message,
      };

      const { data } = await axios.post(
        "https://brandbnalo.com/api/form/add",
        payload
      );

      if (data?.success) {
        setSubmitted(true);

        const whatsappText = `Hi, I am ${name}.
Email: ${email}
Product: ${product}

Message: ${message}

Contact: ${phone}`;

        const waUrl = `https://wa.me/+91XXXXXXXXXX?text=${encodeURIComponent(
          whatsappText
        )}`;

        setTimeout(() => {
          window.open(waUrl, "_blank");
        }, 1000);

        form.reset();
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Submission failed. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* ===== PREMIUM BANNER ===== */}
      <div
        className="relative bg-cover bg-center h-[50vh] md:h-[100vh] flex flex-col items-center justify-center text-center overflow-hidden"
        style={{
          backgroundImage: "url('/ctaimg.png')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-blue-400/70 via-[#0A3A49]/60 to-[#0A3A49]/60"></div>

        <div className="relative z-10 text-white">
          <Link
            href="/"
            className="text-lg md:text-xl font-semibold text-yellow-400 hover:text-yellow-300 transition underline"
          >
            Home / Contact Us
          </Link>
          <h1 className="text-5xl font-serif md:text-6xl font-extrabold tracking-tight drop-shadow-lg">
            Contact Sangam Plastic Industries
          </h1>
          <p className="text-white mt-4 max-w-2xl mx-auto text-sm md:text-lg">
            India’s trusted manufacturer of premium plastic dustbins, pedal bins,
            hospital bins, and commercial waste management solutions.
          </p>
        </div>
      </div>

      {/* ===== MAIN CONTACT SECTION ===== */}
      <section className="w-full bg-gradient-to-b from-white to-[#ECFEF2] py-16 relative">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-14 items-start">

          {/* ===== LEFT SIDE — FORM ===== */}
          <div className="bg-white shadow-xl rounded-2xl p-8 border border-gray-100">
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#0B2545] mb-8 leading-snug">
              Request a Quote or Product Enquiry
            </h2>

            {!submitted ? (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your Name"
                    className="p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#10B981]"
                  />

             <select
  name="products"
  className="p-3 rounded-md w-full bg-white/95 text-gray-800 outline-none border border-gray-300 focus:ring-2 focus:ring-[#F7C600]"
  defaultValue=""
>
  <option value="" disabled>
    Select Product
  </option>

  <option value="Bio Medical Waste Bins">Bio Medical Waste Bins</option>
  <option value="Wheeled Bins">Wheeled Bins</option>
  <option value="Plastic Pallets">Plastic Pallets</option>
  <option value="Industrial Plastic Pallets">Industrial Plastic Pallets</option>
  <option value="Pedal Dustbin">Pedal Dustbin</option>
  <option value="Bio Bins">Bio Bins</option>
  <option value="Waste Bin">Waste Bin</option>
  <option value="Litter Bin">Litter Bin</option>
  <option value="Garbage Dustbin">Garbage Dustbin</option>
  <option value="Outdoor Dustbin">Outdoor Dustbin</option>
  <option value="Plastic Dustbin">Plastic Dustbin</option>
  <option value="Wheeled Dustbin">Wheeled Dustbin</option>
  <option value="Plastic Waste Bin">Plastic Waste Bin</option>
</select>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Your Email"
                    className="p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#10B981]"
                  />

                  <input
                    type="text"
                    name="phone"
                    required
                    placeholder="Phone Number"
                    className="p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#10B981]"
                  />
                </div>

                <textarea
                  name="message"
                  rows="4"
                  required
                  placeholder="Tell us your requirement (quantity, size, color, etc.)"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#10B981]"
                ></textarea>

                <button
                  type="submit"
                  disabled={loading}
                  className="bg-[#10B981] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#0EA271]"
                >
                  {loading ? "Sending..." : "Send Enquiry"}
                </button>
              </form>
            ) : (
              <div className="text-center py-12">
                <h3 className="text-2xl font-bold text-[#0B2545]">
                  🎉 Thank you for your enquiry!
                </h3>
                <p className="text-gray-700">
                  Our sales team will contact you within 24 hours.
                </p>
              </div>
            )}
          </div>

          {/* ===== RIGHT SIDE — INFO ===== */}
          <div className="md:pl-6">
            <p className="text-gray-700 text-lg leading-relaxed mb-10 font-medium">
              <span className="block text-[#0B2545] text-2xl font-extrabold mb-4">
                Looking for high-quality plastic dustbins in bulk?
              </span>

              <span className="block mb-3 text-gray-800">
                We manufacture durable, hygienic, and long-lasting bins suitable for
                homes, hospitals, offices, schools, malls, and industrial use.
              </span>

              <span className="block text-gray-600">
                Fill out the enquiry form and our team will provide pricing,
                customization options, and bulk order details within
                <span className="text-[#10B981] font-semibold"> 24 hours.</span>
              </span>
            </p>

            <div className="space-y-8">

              <div className="flex items-start gap-4">
                <div className="bg-[#10B981]/10 p-4 rounded-xl">
                  <MapPin className="text-[#10B981] w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-[#0B2545] mb-1">
                    Address:
                  </h4>
                  <p className="text-black text-lg leading-snug">
                  Address - 110, Satya Bhawan, 36 Community Center, Wazirpur Industrial Area, New Delhi-110052
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#10B981]/10 p-4 rounded-xl">
                  <Phone className="text-[#0B2545] w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-[#0B2545] mb-1">
                    Phone:
                  </h4>
                  <a href="tel:+919810316441" className="text-lg text-black">
                    +91-9810316441
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#10B981]/10 p-4 rounded-xl">
                  <Mail className="text-[#0B2545] w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-[#0B2545] mb-1">
                    Email:
                  </h4>
                  <p className="text-lg text-black">
                 info@polywell.co.in
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      
       {/* map */}
<div className="mt-5 h-100">

<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2351.2848900849685!2d77.1662442!3d28.702004099999993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0223846e0903%3A0x6b8f0fbb73c40b4c!2sSangam%20Plastic%20Industries%20Pvt.%20Ltd.!5e1!3m2!1sen!2sin!4v1771318884119!5m2!1sen!2sin" className="w-full h-full" allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</div>
        
      </section>
    </>
  );
};

export default Contact;
