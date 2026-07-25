"use client";

export default function BulkEnquiry() {
  return (
    <section className="bg-[#0f5d3f] py-12 px-4 md:px-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        {/* LEFT CONTENT */}
        <div className="text-white">
          <p className="text-orange-400 tracking-widest text-sm mb-4">
            — BULK SUPPLY ENQUIRY
          </p>

          <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            Tell us what you need. We'll quote it at scale.
          </h2>

          <p className="text-white mb-6">
            Share your requirement and our bulk order team will respond with
            factory-direct pricing, lead times and tender documentation —
            usually within one business day.
          </p>

          <ul className="space-y-3 text-sm md:text-base">
            <li>✔ Slab-wise pricing on every quantity tier</li>
            <li>✔ Tender-ready documentation on request</li>
            <li>✔ Pan-India dispatch & logistics support</li>
          </ul>
        </div>

        {/* RIGHT FORM */}
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-semibold text-xl tracking-wide">
              BULK SUPPLY ENQUIRY
            </h3>
            
          </div>

          <form className="space-y-4">
            {/* Company */}
            <div>
              <label className="text-xs text-gray-500">
                01 — COMPANY / ORGANISATION NAME
              </label>
              <input
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
                <select className="w-full mt-1 border rounded-lg px-3 py-2 text-sm">
                  <option>Select one</option>
                </select>
              </div>

              <div>
                <label className="text-xs text-gray-500">
                  03 — PRODUCT REQUIRED
                </label>
                <select className="w-full mt-1 border rounded-lg px-3 py-2 text-sm">
                  <option>Select (optional)</option>
                </select>
              </div>
            </div>

            {/* Row 3 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-gray-500">
                  04 — QUANTITY REQUIRED
                </label>
                <select className="w-full mt-1 border rounded-lg px-3 py-2 text-sm">
                  <option>Select range</option>
                </select>
              </div>

              <div>
                <label className="text-xs text-gray-500">
                  05 — CITY / STATE
                </label>
                <input
                  type="text"
                  placeholder="e.g. Pune, Maharashtra"
                  className="w-full mt-1 border rounded-lg px-3 py-2 text-sm"
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label className="text-xs text-gray-500">
                06 — PHONE NUMBER
              </label>
              <input
                type="text"
                placeholder="10-digit mobile number"
                className="w-full mt-1 border rounded-lg px-3 py-2 text-sm"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-lime-800 text-white py-3 rounded-lg mt-2 hover:bg-[#0f5d3f] transition"
            >
              REQUEST BULK QUOTE →
            </button>

            <p className="text-xs text-center text-gray-500 mt-2">
              Minimum order quantity: <strong>100 units</strong>. Our team
              responds within one business day.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}