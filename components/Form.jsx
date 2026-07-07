"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
// import {
//   RecaptchaVerifier,
//   signInWithPhoneNumber,
// } from "firebase/auth";
// import { auth } from "@/utils/firebase";

export default function Form() {
  // const recaptchaId = "firebase-recaptcha-form";

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  // FORM
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [product, setProduct] = useState("");
  const [place, setPlace] = useState("");
  const [message, setMessage] = useState("");
  const [company, setCompany] = useState("");

  // OTP
  // const [otp, setOtp] = useState("");
  // const [showOtpBox, setShowOtpBox] = useState(false);
  // const [confirmationResult, setConfirmationResult] =
  //   useState(null);

  // INIT RECAPTCHA
  // useEffect(() => {
  //   if (typeof window === "undefined") return;

  //   const initRecaptcha = async () => {
  //     try {
  //       if (!window.recaptchaVerifier) {
  //         window.recaptchaVerifier =
  //           new RecaptchaVerifier(
  //             auth,
  //             recaptchaId,
  //             {
  //               size: "invisible",
  //             }
  //           );

  //         await window.recaptchaVerifier.render();
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   initRecaptcha();

  //   return () => {
  //     if (window.recaptchaVerifier) {
  //       window.recaptchaVerifier.clear();
  //       window.recaptchaVerifier = null;
  //     }
  //   };
  // }, []);

  // SEND OTP
  // const sendOTP = async () => {
  //   try {
  //     setLoading(true);

  //     if (!/^[6-9]\d{9}$/.test(phone)) {
  //       toast.error("Enter valid phone number");
  //       return;
  //     }

  //     const appVerifier =
  //       window.recaptchaVerifier;

  //     const result =
  //       await signInWithPhoneNumber(
  //         auth,
  //         `+91${phone}`,
  //         appVerifier
  //       );

  //     setConfirmationResult(result);

  //     setShowOtpBox(true);

  //     toast.success(
  //       "OTP Sent Successfully"
  //     );
  //   } catch (error) {
  //     console.log(error);

  //     toast.error(
  //       error?.message ||
  //         "Failed to Send OTP"
  //     );

  //     try {
  //       if (window.recaptchaVerifier) {
  //         window.recaptchaVerifier.clear();
  //         window.recaptchaVerifier =
  //           null;

  //         const verifier =
  //           new RecaptchaVerifier(
  //             auth,
  //             recaptchaId,
  //             {
  //               size:
  //                 "invisible",
  //             }
  //           );

  //         await verifier.render();

  //         window.recaptchaVerifier =
  //           verifier;
  //       }
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // SUBMIT FORM
  const submitForm = async () => {
    try {
      setLoading(true);

      const formData = {
        platform: "Plastic Dustbin Manufacturer Landing Page Form",
        platformEmail: "shaanpolywell@gmail.com",
        name,
        phone,
        place,
        email,
        product,
        message: `Company Name: ${company || "N/A"} ,"Message :"

${message}`,
      };

      const { data } = await axios.post(
        "https://brandbnalo.com/api/form/add",
        formData,
      );

      if (!data?.success) {
        throw new Error();
      }

      setSubmitted(true);
      setSuccessMessage("✅ Your enquiry has been submitted successfully!");

      toast.success("Form Submitted Successfully");

      const whatsappText = `Hi, I am ${name}

Company Name: ${company || "N/A"}

Email: ${email}
Product: ${product}

Message: ${message}

Location: ${place}

Contact: ${phone}`;

      setTimeout(() => {
        window.open(
          `https://wa.me/918810422935?text=${encodeURIComponent(whatsappText)}`,
          "_blank",
        );
      }, 1000);

      // Reset form
      setName("");
      setCompany("");
      setPhone("");
      setPlace("");
      setEmail("");
      setProduct("");
      setMessage("");

      setTimeout(() => {
        setSubmitted(false);
        setSuccessMessage("");
      }, 4000);
    } catch (error) {
      console.error(error);

      setSuccessMessage("❌ Server error. Try again later.");
      toast.error("Failed to submit form");
    } finally {
      setLoading(false);
    }
  };

  // VERIFY OTP
  // const verifyOTP = async () => {
  //   try {
  //     if (!confirmationResult) {
  //       toast.error(
  //         "Send OTP first"
  //       );
  //       return;
  //     }

  //     if (otp.length !== 6) {
  //       toast.error(
  //         "Enter valid OTP"
  //       );
  //       return;
  //     }

  //     setLoading(true);

  //     await confirmationResult.confirm(
  //       otp
  //     );

  //     toast.success(
  //       "Phone Verified Successfully"
  //     );

  //     await submitForm();
  //   } catch (error) {
  //     console.log(error);

  //     toast.error("Invalid OTP");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // HANDLE SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !phone || !email || !product || !message) {
      toast.error("Please fill all fields");

      return;
    }

    // await sendOTP();
    await submitForm();
  };

  return (
    <>
      {!submitted ? (
        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* NAME */}
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
            required
            disabled={loading}
            className="w-full p-3 rounded-lg border"
          />

          {/* PHONE */}
          <div className="flex justify-between gap-5">
            {" "}
            <input
              type="tel"
              maxLength={10}
              value={phone}
              onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
              placeholder="Phone Number"
              required
              disabled={loading}
              className="w-full p-3 rounded-lg border"
            />
            <input
              type="text"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              placeholder="Company"
              required
              disabled={loading}
              className="w-full p-3 rounded-lg border"
            />
          </div>

          {/* PRODUCT */}
          <div className="flex justify-between gap-5">
            <select
              value={product}
              onChange={(e) => setProduct(e.target.value)}
              required
              disabled={loading}
              className="w-full p-3 rounded-lg border"
            >
              <option value="" disabled>
                Select Product
              </option>

              {[
                "Bio Medical Waste Bins",
                "Wheeled Bins",
                "Plastic Pallets",
                "Industrial Plastic Pallets",
                "Pedal Dustbin",
                "Bio Bins",
                "Waste Bin",
                "Litter Bin",
                "Garbage Dustbin",
                "Outdoor Dustbin",
                "Plastic Dustbin",
              ].map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>

            {/* EMAIL */}
            <input
              type="place"
              value={place}
              onChange={(e) => setPlace(e.target.value)}
              placeholder="Place"
              required
              disabled={loading}
              className="w-full p-3 rounded-lg border"
            />
          </div>

          {/* EMAIL */}
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
            disabled={loading}
            className="w-full p-3 rounded-lg border"
          />

          {/* MESSAGE */}
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your Message"
            required
            disabled={loading}
            className="w-full p-3 rounded-lg border h-28"
          />

          {/* RECAPTCHA */}
          {/* <div id={recaptchaId}></div> */}

          {/* OTP BELOW TEXTAREA */}
          {/* {showOtpBox && (
            <div className="space-y-3">
              <input
                type="text"
                maxLength={6}
                value={otp}
                onChange={(e) =>
                  setOtp(
                    e.target.value.replace(
                      /\D/g,
                      ""
                    )
                  )
                }
                placeholder="Enter OTP"
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-700"
              />
            </div>
          )} */}

          {/* SINGLE BUTTON */}
          {/* {showOtpBox ? (
            <button
              type="button"
              onClick={verifyOTP}
              disabled={
                loading ||
                otp.length !==
                  6
              }
              className="w-full py-3 bg-green-700 hover:bg-green-800 transition rounded-lg font-semibold text-white"
            >
              {loading
                ? "Verifying..."
                : "Verify & Submit"}
            </button>
          ) : ( */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-green-700 hover:bg-green-800 transition rounded-lg font-semibold text-white"
          >
            {loading ? "Loading..." : "Get Wholesale Price List & Catalogue"}
          </button>
          {/* )} */}

          {successMessage && (
            <p className="text-center text-green-700">{successMessage}</p>
          )}
        </form>
      ) : (
        <div className="text-center py-10">
          <h2 className="text-3xl font-bold">🎉 Thank You!</h2>

          <p className="mt-3 text-gray-600">{successMessage}</p>
        </div>
      )}
    </>
  );
}
