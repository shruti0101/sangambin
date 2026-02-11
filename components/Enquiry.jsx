"use client";
import React, { useState } from "react";
import axios from "axios";

export default function ContactForm({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.name.value;
    const phone = form.phone.value;
    const email = form.email.value;
    const product = form.products.value;
    const message = form.message.value;

    setLoading(true);
    setSuccessMessage("Sending...");

    try {
      const formData = {
        platform: "Titanium Dioxide Wholesaler Enquiry Form",
        platformEmail: "sales@aanyaenterprise.com",
        name,
        phone,
        email,
        place: "N/A",
        product,
        message,
      };

      const { data } = await axios.post(
        "https://brandbnalo.com/api/form/add",
        formData
      );

      if (data?.success) {
        setSubmitted(true);
        setSuccessMessage("✅ Your enquiry has been submitted successfully!");

        const whatsappText = `Hi, I am ${name}.
Email: ${email}
Product: ${product}

Message: ${message}

Contact: ${phone}`;

        const waUrl = `https://wa.me/+918527557778?text=${encodeURIComponent(
          whatsappText
        )}`;

        setTimeout(() => {
          window.open(waUrl, "_blank");
        }, 1000);

        form.reset();

        setTimeout(() => {
          setSubmitted(false);
          onClose();
        }, 4000);
      } else {
        setSuccessMessage("❌ Failed to send. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setSuccessMessage("❌ Server error. Try again later.");
    } finally {
      setLoading(false);
    }
  };
return (
  <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50">
    <div className="relative rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.15)] p-8 md:p-10 w-[350px] md:w-[560px] bg-white">

      <button
        className="absolute top-4 right-5 text-gray-400 hover:text-red-500 text-xl transition"
        onClick={onClose}
      >
        ✕
      </button>

      <h2 className="text-center text-2xl md:text-3xl font-semibold text-gray-800 tracking-wide">
        Get In Touch With Us
      </h2>

      <div className="w-20 h-[3px] bg-green-600 mx-auto mt-3 mb-8 rounded-full"></div>

      {!submitted ? (
        <form className="space-y-5" onSubmit={handleSubmit}>

          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Your Name"
              name="name"
              className="flex-1 p-3 rounded-lg text-gray-800 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              required
              disabled={loading}
            />

            <select
              name="products"
              className="flex-1 p-3 rounded-lg text-gray-800 border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              defaultValue=""
              required
              disabled={loading}
            >
              <option value="" disabled hidden>
                Select Product
              </option>
              <option value="Titanium Dioxide (TiO₂)">plastic Dustbins</option>
              <option value="Titanium Dioxide Rutile">Bio Bins</option>
              <option value="Lithopone">Litter Bins</option>
             
            </select>
          </div>

          <input
            type="tel"
            name="phone"
            maxLength={10}
            minLength={10}
            placeholder="Phone Number"
            className="w-full p-3 rounded-lg text-gray-800 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            required
            disabled={loading}
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="w-full p-3 rounded-lg text-gray-800 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            required
            disabled={loading}
          />

          <textarea
            name="message"
            placeholder="Your Message"
            className="w-full p-3 rounded-lg text-gray-800 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 h-28 resize-none transition"
            required
            disabled={loading}
          ></textarea>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-green-700 hover:bg-green-800 transition rounded-lg font-semibold text-white text-md tracking-wide shadow-sm"
          >
            {loading ? "Submitting..." : "Send Message"}
          </button>

        </form>
      ) : (
        <p className="text-center font-medium text-lg text-green-700">
          {successMessage}
        </p>
      )}
    </div>
  </div>
);


}
