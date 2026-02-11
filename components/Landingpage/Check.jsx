"use client";

const bins = [
  {
    title: "Clean & Durable",
    desc: "Strong, eco-friendly dustbins and household products built to last.",
    icon: "♻️",
  },
  {
    title: "Trusted Nationwide",
    desc: "Supplying quality plastic goods to homes, businesses, and institutions across India.",
    icon: "🏭",
  },
  {
    title: "Quality Assured",
    desc: "Manufactured with modern technology and strict quality control for long-term use.",
    icon: "✔️",
  },
];

export default function DustbinSection() {
  return (
    <section className="bg-gradient-to-b from-[#e5f4ea] to-[#f3f6f7] py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-end">

        {bins.map((bin, i) => (
          <div key={i} className="flex flex-col items-center">

            {/* ---- BIN LIP (TOP PART) ---- */}
            <div className="
              w-[260px] h-[22px] 
              bg-white 
              rounded-full 
              shadow-md
              relative z-10
            "></div>

            {/* ---- BIN BODY (TRAPEZOID SHAPE) ---- */}
            <div className="
              w-[240px] 
              h-[320px]
              bg-white 
              shadow-xl
              flex flex-col items-center justify-start
              pt-10 px-6 text-center
              relative
              clip-path-bin
            ">

              {/* ICON (green outline style) */}
              <div className="text-5xl mb-4 text-green-600">
                {bin.icon}
              </div>

              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {bin.title}
              </h3>

              <p className="text-sm text-gray-600 leading-relaxed">
                {bin.desc}
              </p>
            </div>

          </div>
        ))}

      </div>

   
    </section>
  );
}
