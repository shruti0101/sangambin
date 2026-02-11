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
                    required
                    className="p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#10B981]"
                  >
                    <option value="">Select Product Category</option>
                    <option value="Pedal Dustbins">Pedal Dustbins</option>
                    <option value="Hospital Waste Bins">Hospital Waste Bins</option>
                    <option value="Swing Top Bins">Swing Top Bins</option>
                    <option value="Commercial Dustbins">Commercial Dustbins</option>
                    <option value="Outdoor Garbage Bins">Outdoor Garbage Bins</option>
                    <option value="Custom Bulk Orders">Custom Bulk Orders</option>
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
                    Sangam Plastic Industries Pvt. Ltd. <br />
                    Industrial Area, Delhi, India
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
                  <a href="tel:+91XXXXXXXXXX" className="text-lg text-black">
                    +91-XXXXXXXXXX
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
                    info@sangamplastic.com <br />
                    sales@sangamplastic.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* MAP */}
        <div className="w-full h-[450px] overflow-hidden mt-16">
          <iframe
            loading="lazy"
            src="https://maps.google.com/maps?q=Delhi%20Industrial%20Area&t=m&z=14&output=embed"
            title="Sangam Plastic Industries Location"
            className="w-full h-full border-0"
            allowFullScreen
          ></iframe>
        </div>
      </section>
    </>
  );
};

export default Contact;
