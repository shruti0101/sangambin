import React from "react";
import Image from "next/image";
const ServiceProcess = () => {
  return (
    <section className="relative py-16 text-white"
      style={{
        background: "linear-gradient(120deg, #0A5F3A, #1B8F5A)"
      }}
    >
      <div className="w-full mx-auto px-15 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* ---------- LEFT CONTENT ---------- */}
        <div className="space-y-5">
          <div className="inline-flex items-center bg-[#1c9661] px-4 py-2 rounded-full text-sm font-medium">
            <span className="mr-2">♻</span> Trusted Process
          </div>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Trusted Service Process <br />
            for Every Client
          </h2>

          <p className="text-gray-100 max-w-xl">
            At Sangam Plastic Industries Pvt. Ltd., we follow a streamlined process to ensure
            high-quality products, transparent dealings, and timely delivery to all our clients.
          </p>

          <div className="space-y-6 mt-6">

            <div className="flex gap-3 items-start">
              <span className="text-blue-300 text-xl">✔</span>
              <div>
                <h4 className="font-semibold text-xl">Premium Quality Products</h4>
                <p className="text-gray-100 text-md">
                  We manufacture all our plastic dustbins, hospital dustbins, pedal bins, and crates
                  using high-grade materials to ensure durability, safety, and long-term performance.
                </p>
              </div>
            </div>

            <div className="flex gap-3 items-start">
              <span className="text-blue-300 text-xl">✔</span>
              <div>
                <h4 className="font-semibold text-xl">Transparent Dealings</h4>
                <p className="text-gray-100 text-md">
                  We believe in honest and clear communication with our clients, ensuring every order
                  is handled professionally from inquiry to delivery.
                </p>
              </div>
            </div>

            <div className="flex gap-3 items-start">
              <span className="text-blue-300 text-xl">✔</span>
              <div>
                <h4 className="font-semibold text-xl">Easy Payment Modes</h4>
                <p className="text-gray-100 text-md">
                  Our flexible and secure payment options make transactions simple and convenient for
                  all our customers, whether small businesses or bulk buyers.
                </p>
              </div>
            </div>

            <div className="flex gap-3 items-start">
              <span className="text-blue-300 text-xl">✔</span>
              <div>
                <h4 className="font-semibold text-xl">Timely Delivery</h4>
                <p className="text-gray-100 text-md">
                  We value your time. Our efficient logistics system ensures that every order is
                  delivered on schedule, across India.
                </p>
              </div>
            </div>

          </div>
        </div>

      {/* ---------- RIGHT VISUAL BLOCK (With Image on Top) ---------- */}
<div className="flex flex-col items-center lg:items-end gap-6">

  {/* TOP IMAGE */}
  <div className="w-full   overflow-hidden ">
    <Image
      src="/form.png"      
      width={600}
      height={400}
      alt="Sustainability visual"
      className="w-full h-[380px] object-contain "
    />
  </div>

  {/* Leaf Icon Block */}
  {/* <div className="bg-[#0B6B42] p-6 rounded-2xl w-28 h-28 flex items-center justify-center shadow-lg">
    <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#A7F3D0" strokeWidth="2">
      <path d="M12 2C8 6 6 10 6 14a6 6 0 0012 0c0-4-2-8-6-12z"/>
      <path d="M12 2v20"/>
    </svg>
  </div> */}

  {/* Stats Row */}
  <div className="grid grid-cols-2 gap-4 w-full ">

    <div className="bg-[#2cb479] p-5 rounded-xl text-center shadow-md text-white">
      <h3 className="text-3xl font-bold">6500+</h3>
      <p className="text-sm text-gray-200">CLIENTS SERVED</p>
    </div>

      <div className="bg-[#2cb479] p-5 rounded-xl text-center shadow-md text-white">
      <h3 className="text-3xl font-bold">38+</h3>
      <p className="text-sm text-gray-200">Years of Experience</p>
    </div>
       <div className="bg-[#2cb479] p-5 rounded-xl text-center shadow-md text-white">
      <h3 className="text-3xl font-bold">Pan-India</h3>
      <p className="text-sm text-gray-200">Delivery Network</p>
    </div>

    <div className="bg-[#2cb479] p-5 rounded-xl text-center shadow-md text-white">
      <h3 className="text-3xl font-bold">500+</h3>
      <p className="text-sm text-gray-200">Team Members</p>
    </div>

  </div>
</div>

      </div>
    </section>
  );
};

export default ServiceProcess;
