import React from 'react'
import Image from 'next/image'
const Whychoose = () => {
  return (
    <div>

<section 
className="relative text-white py-20"
style={{
  backgroundImage: `
    linear-gradient(rgba(26, 90, 165, 0.9), rgba(8, 80, 70, 0.95)),
    linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)
  `,
  backgroundSize: "100% 100%, 40px 40px, 40px 40px"
}}
>

             <Image alt="img" width={140} height={100}  className='absolute bottom-60 left-7 animate-pulse ' src="/dus1.png"></Image>


  <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">

    {/* ============ LEFT — STICKY ============ */}
    <div className="lg:sticky top-38 self-start space-y-6">

      <p className="text-yellow-400 tracking-[0.25em] text-sm">
        /// WHY CHOOSE US ♻
      </p>

      <h2 className="text-[40px] md:text-[64px] font-extrabold leading-[1.05]">
        SANGAM PLASTIC INDUSTRIES ♻
     
      </h2>

      <p className="text-white max-w-xl leading-relaxed">
        At Sangam Plastic Industries Pvt. Ltd., we combine decades of experience, 
        advanced manufacturing, and customer-centric solutions to deliver high-quality 
        plastic dustbins, hospital dustbins, and plastic pedal bins that you can rely on.
      </p>

      <button className="mt-6 border border-yellow-400 text-white 
      px-8 py-3 tracking-wider text-sm 
      hover:bg-yellow-400 hover:text-black transition">
        COMPANY PROFILE
      </button>
    </div>

    {/* ============ RIGHT — SCROLLING CARDS ============ */}
    <div className="space-y-10">

      {[
        {
          title: "30+ YEARS OF EXPERTISE",
          text: "Since 1988, we have been a trusted name in plastic manufacturing, supplying durable and hygienic waste management solutions across India."
        },
        {
          title: "QUALITY YOU CAN TRUST",
          text: "All products are made with premium-grade plastic and undergo strict quality checks for durability and safety."
        },
        {
          title: "MODERN INFRASTRUCTURE",
          text: "Our Delhi-based facilities are equipped with advanced machinery for large-scale production without quality compromise."
        },
        {
          title: "HYGIENE & SAFETY FOCUS",
          text: "Specialized hospital dustbins and pedal bins ensure hands-free, safe, and hygienic waste disposal."
        },
        {
          title: "CUSTOMIZABLE SOLUTIONS",
          text: "Available in multiple sizes, colors, and designs for homes, offices, hospitals, and industries."
        },
        {
          title: "NATIONWIDE RELIABILITY",
          text: "Trusted across India for timely delivery, strong support, and dependable service."
        }
      ].map((item, index) => (
        <div key={index}
          className="relative bg-white p-7 rounded-xl border border-[#0F766E]/40 backdrop-blur-md"
        >



          <span className="absolute top-0 left-0 w-6 h-6 border-t border-l border-black"></span>
          <span className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-yellow-400"></span>

          <div className="flex gap-5 items-start">
            <div className="bg-[#0F766E] p-4 rounded-lg">
            <span className='material-symbols-outlined '>eco</span>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2 uppercase text-[#0F766E]">
                {item.title}
              </h3>
              <p className="text-black">
                {item.text}
              </p>
            </div>
          </div>
        </div>
      ))}

    </div>
  </div>
</section>

    </div>
  )
}

export default Whychoose
