"use client";
import React, { useState } from "react";
import axios from "axios";

export default function PopupForm({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const phone = form.phone.value;
    const message = form.message.value;

    setLoading(true);
    setSuccessMessage("Sending...");

    try {
      const formData = {
        platform: "Plastic Dustbin Manufacturer Popup Form",
        platformEmail: "info@polywell.co.in",
        name,
        phone,
        email: "N/A",
        place: "N/A",
        product: "N/A",
        message,
      };

      const { data } = await axios.post("https://brandbnalo.com/api/form/add",
        formData
      );

      if (data?.success) {
        setSubmitted(true);
        setSuccessMessage("✅ Your enquiry has been submitted successfully!");

        const whatsappText = `Hi, I am ${name}. Message: ${message}Contact: ${phone}`;

        const waUrl = `https://wa.me/+919810057441?text=${encodeURIComponent(
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
    <div
      className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50 px-4"
      onClick={onClose} // outside click close
    >
      <div
        className="relative rounded-2xl shadow-[0_25px_70px_rgba(0,0,0,0.25)] p-8 md:p-10 w-full max-w-lg bg-white"
        onClick={(e) => e.stopPropagation()} // prevent inside click close
      >

        {/* Close Button */}
        <button
          className="absolute top-4 right-5 text-gray-400 hover:text-red-500 text-xl transition"
          onClick={onClose}
        >
          ✕
        </button>

        {/* Heading */}
        <h2 className="text-center text-2xl md:text-3xl font-semibold text-gray-800">
          Request a Callback
        </h2>

        <p className="text-center text-gray-500 mt-2 text-sm">
          Fill in your details and our team will contact you shortly.
        </p>

        <div className="w-20 h-[3px] bg-green-600 mx-auto mt-4 mb-8 rounded-full"></div>

        {!submitted ? (
          <form className="space-y-5" onSubmit={handleSubmit}>

            <input
              type="text"
              placeholder="Your Name"
              name="name"
              className="w-full p-3 rounded-lg text-gray-800 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
              required
              disabled={loading}
            />

            <input
              type="tel"
              name="phone"
              maxLength={10}
              minLength={10}
              placeholder="Phone Number"
              className="w-full p-3 rounded-lg text-gray-800 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
              required
              disabled={loading}
            />

            <textarea
              name="message"
              placeholder="Your Message"
              className="w-full p-3 rounded-lg text-gray-800 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 h-28 resize-none transition"
              required
              disabled={loading}
            ></textarea>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-green-700 hover:bg-green-800 transition rounded-lg font-semibold text-white text-md tracking-wide shadow-md hover:shadow-lg"
            >
              {loading ? "Sending..." : "Submit Request"}
            </button>

          </form>
        ) : (
          <p className="text-center font-medium text-lg text-green-700 py-6">
            {successMessage}
          </p>
        )}
      </div>
    </div>
  );
}