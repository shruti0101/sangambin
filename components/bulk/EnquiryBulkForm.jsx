"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";


export default function EnquiryBulkForm({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // FORM STATES
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [product, setProduct] = useState("");
  const [place, setPlace] = useState("");
  const [message, setMessage] = useState("");
  const [company, setCompany] = useState("");

  const [businessType, setBusinessType] = useState("");
  const [quantity, setQuantity] = useState("");



  if (!isOpen) return null;


  // SUBMIT FORM
   const submitForm = async () => {
    try {
      setLoading(true);

      const formData = {
        platform: "Plastic Dustbin Manufacturer Popup Form",
        platformEmail: "shaanpolywell@gmail.com",
        name:company,
        phone,
        email :email || "NA",
        place: place,
        product,
        message: `Company Name: ${company || "N/A"}, Bussiness Type : ${businessType} , Quantity: ${quantity} `,
      };
      console.log(formData);

      const { data } = await axios.post(
        "https://brandbnalo.com/api/form/add",
        formData,
      );

      if (data?.success) {
        setSubmitted(true);

        setSuccessMessage("✅ Your enquiry has been submitted successfully!");

        toast.success("Form Submitted Successfully");

        const whatsappText = `Hi, I am ${name}.
  Email: ${email}
  Product: ${product}
  
  Message: ${message}
  
  Contact: ${phone}`;

        const waUrl = `https://wa.me/+918810422935?text=${encodeURIComponent(
          whatsappText,
        )}`;

        setTimeout(() => {
          window.open(waUrl, "_blank");
        }, 1000);

        // RESET
        setName("");
        setPhone("");
        setEmail("");
        setProduct("");
        setMessage("");
        setPlace("");
        setCompany("");
        setBusinessType("")
        setQuantity("")
        // setOtp("");

        // setShowOtpBox(false);
        // setIsPhoneVerified(false);

        setTimeout(() => {
          setSubmitted(false);
          onClose();
        }, 4000);
      } else {
        setSuccessMessage("❌ Failed to send. Please try again.");
      }
    } catch (error) {
      console.log(error);

      setSuccessMessage("❌ Server error. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  // HANDLE SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!phone || phone.length !== 10) {
      return toast.error("Enter Valid Phone Number");
    }

   
    await submitForm();
  };

  return (
    <div onClick={onClose} className="fixed inset-0  flex items-center justify-center bg-black/40 backdrop-blur-sm z-9999">
    <div onClick={(e)=>{e.stopPropagation()}} className="bg-white max-w-90 md:max-w-3xl rounded-2xl p-6 md:p-8 shadow-lg">
          <div className="relative flex justify-between items-center mb-6">
            <h3 className="font-semibold text-xl text-center tracking-wide">
              BULK SUPPLY ENQUIRY
            </h3>

            <button
          className=" absolute top-0 right-5 text-black hover:text-red-500 text-xl transition"
          onClick={onClose}
        >
          ✕
        </button>

            
          </div>

          <form
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              submitForm();
            }}
          >
            
        
            {/* Company */}
            <div>
              <label className="text-xs text-gray-500">
                01 — COMPANY / ORGANISATION NAME
              </label>
              <input
                value={company}
                onChange={(e)=>setCompany(e.target.value)}
                required
                disabled={loading}
                type="text"
                placeholder="e.g. Nagar Nigam, Apollo Hospitals"
                className="w-full mt-1 border rounded-lg px-3 py-2 text-sm"
              />
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-gray-500">
                  02 — BUSINESS TYPE
                </label>
                <select
                  value={businessType}
                  onChange={(e) => setBusinessType(e.target.value)}
                  className="p-3 rounded-md w-full bg-white/95 text-gray-800 outline-none border border-gray-300 focus:ring-2 focus:ring-[#F7C600]"
                  required
                  disabled={loading}
                >
                  <option value="" disabled>
                    Select Range
                  </option>

                  <option value="Hospital / Clinic">Hospital / Clinic</option>

                  <option value="Municipal Corporation / Govt. Department">
                    Municipal Corporation / Govt. Department
                  </option>

                  <option value="Distributor / Wholesaler">
                    Distributor / Wholesaler
                  </option>

                  <option value="Retailer">Retailer</option>
                  <option value="Factory / Industrial Unit">
                    Factory / Industrial Unit
                  </option>
                  <option value="Housing Society / Facility Management">
                    Housing Society / Facility Management
                  </option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="text-xs text-gray-500">
                  03 — PRODUCT REQUIRED
                </label>

                <select
                  value={product}
                  onChange={(e) => setProduct(e.target.value)}
                  className="p-3 rounded-md w-full bg-white/95 text-gray-800 outline-none border border-gray-300 focus:ring-2 focus:ring-[#F7C600]"
                  required
                  disabled={loading}
                >
                  <option value="" disabled>
                    Select Product
                  </option>

                  <option value="Bio Medical Waste Bins">
                    Bio Medical Waste Bins
                  </option>

                  <option value="Wheeled Bins">Wheeled Bins</option>

                  <option value="Plastic Pallets">Plastic Pallets</option>

                  <option value="Industrial Plastic Pallets">
                    Industrial Plastic Pallets
                  </option>

                  <option value="Pedal Dustbin">Pedal Dustbin</option>

                  <option value="Bio Bins">Bio Bins</option>

                  <option value="Waste Bin">Waste Bin</option>

                  <option value="Litter Bin">Litter Bin</option>

                  <option value="Garbage Dustbin">Garbage Dustbin</option>

                  <option value="Outdoor Dustbin">Outdoor Dustbin</option>

                  <option value="Plastic Dustbin">Plastic Dustbin</option>
                </select>
              </div>
            </div>

            {/* Row 3 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-gray-500">
                  04 — QUANTITY REQUIRED
                </label>
                <select
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  className="p-3 rounded-md w-full bg-white/95 text-gray-800 outline-none border border-gray-300 focus:ring-2 focus:ring-[#F7C600]"
                  required
                  disabled={loading}
                >
                  <option value="" disabled>
                    Select Range
                  </option>

                  <option value="100-249">100-249 Units</option>

                  <option value="250-499">250-499 Units</option>

                  <option value="500-999">500-999 Units</option>

                  <option value="1000+">1000+ Units</option>
                </select>
              </div>

              <div>
                <label className="text-xs text-gray-500">
                  05 — CITY / STATE
                </label>
                <input
                value={place}
                onChange={(e)=>setPlace(e.target.value)}
                required
                disabled={loading}
                  type="text"
                  placeholder="e.g. Pune, Maharashtra"
                  className="w-full mt-1 border rounded-lg px-3 py-2 text-sm"
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label className="text-xs text-gray-500">06 — PHONE NUMBER</label>
            <input
  value={phone}
  onChange={(e) => {
    const value = e.target.value.replace(/\D/g, ""); // remove non-numbers
    if (value.length <= 10) {
      setPhone(value);
    }
  }}
  required
  disabled={loading}
  type="tel"
  inputMode="numeric"
  placeholder="10-digit mobile number"
  className="w-full mt-1 border rounded-lg px-3 py-2 text-sm"
/>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-lime-800 text-white py-3 rounded-lg mt-2 hover:bg-[#0f5d3f] transition"
            >
              {loading ? " SUBMITTING BULK ENQUIRY..." :"REQUEST BULK QUOTE →"}
            </button>

            <p className="text-xs text-center text-gray-500 mt-2">
              Minimum order quantity: <strong>100 units</strong>. Our team
              responds within one business day.
            </p>
          </form>

           {submitted && (
  <p className="text-green-600 text-sm text-center mt-2 font-medium">
    {successMessage}
  </p>
)}
        </div>

       
    </div>
  );
}