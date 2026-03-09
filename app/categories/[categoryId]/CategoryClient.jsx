import { categories } from "@/Data";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function CategoryPage({ params }) {
  const { categoryId } = params;
  const category = categories.find((c) => c.id === categoryId);

  if (!category) {
    return (
      <h2 className="text-center text-red-500 mt-10">Category not found</h2>
    );
  }

  return (
    <>
      {/* ========== PREMIUM CATALOG LAYOUT ========== */}
      <section className="bg-[#F8FAFC] py-24 md:py-32 lg:py-45 px-4 sm:px-6">
        <div className="pl-0 sm:pl-6 md:pl-10 max-w-[1600px] mx-auto">

          {/* HEADER */}
          <div className="mb-12 flex flex-col md:flex-row md:items-center md:justify-between gap-3">

            {/* Left Content */}
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mt-10 md:mt-0 text-[#0B2545]">
                Our Product Catalog
              </h1>

              <p className="mt-3 text-gray-800 text-base sm:text-lg md:text-2xl max-w-3xl">
                Discover our comprehensive range of high-quality plastic waste
                management solutions designed for industrial, commercial, and
                medical applications.
              </p>
            </div>

            {/* Right Button */}
            <div className="md:self-start">
              <a
                href="/products"
                className="inline-flex items-center gap-2 bg-[#0B2545] text-white text-base sm:text-lg md:text-xl mt-5 px-5 sm:px-6 py-3 sm:py-4 rounded-xl hover:bg-[#0A1F38] transition shadow-md"
              >
                Explore All Products
                <span>→</span>
              </a>
            </div>

          </div>

          {/* MAIN GRID: SIDEBAR + PRODUCTS */}
          <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-8 lg:gap-12">

            {/* ===== LEFT SIDEBAR ===== */}
            <div>
              <div className="bg-white h-[500px] md:h-[600px] lg:h-150 border border-gray-100 rounded-2xl p-5 sm:p-6 shadow-sm overflow-y-auto">

                <h3 className="text-xl sm:text-2xl md:text-3xl text-center font-semibold text-[#0B2545] mb-5">
                  Our  Categories
                </h3>

                <ul className="space-y-3">
                  {categories.map((cat) => (
                    <li
                      key={cat.id}
                      className={`flex items-center justify-between px-3 sm:px-4 py-2 sm:py-3 rounded-xl cursor-pointer transition ${
                        cat.id === categoryId
                          ? "bg-[#EEF3FF] text-[#2563EB] font-semibold"
                          : "hover:bg-gray-100"
                      }`}
                    >
                      <Link
                        href={`/categories/${cat.id}`}
                        className="w-full flex items-center gap-3 text-sm sm:text-base"
                      >
                        <span className="text-lg sm:text-xl material-symbols-outlined font-bold">
                          inventory_2
                        </span>
                        {cat.name}
                      </Link>

                      {cat.id === categoryId && (
                        <span className="text-blue-600 text-md">●</span>
                      )}
                    </li>
                  ))}
                </ul>

              </div>
            </div>

            {/* ===== RIGHT SIDE - PRODUCTS ===== */}
            <div>

              {/* TOP CONTROL BAR */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
                <p className="text-gray-700 font-medium text-sm sm:text-base">
                  Showing {category.products.length} of{" "}
                  {category.products.length} products
                </p>
              </div>

              {/* PRODUCT GRID */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {category.products.map((product, index) => (
                  <Link
                    key={product.id}
                    href={`/products/${product.id}`}
                    className="group bg-green-50 border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition"
                  >

                    <div className="relative bg-[#F1F5F9] p-4">

                      {/* BEST SELLER BADGE */}
                      {index === 0 && (
                        <span className="absolute top-4 right-4 bg-white text-blue-600 text-xs px-3 py-1 rounded-full shadow">
                          Best Seller
                        </span>
                      )}

                      {/* ARROW ICON */}
                      <div className="absolute top-4 left-4 bg-green-600 p-2 rounded-full opacity-0 group-hover:opacity-100 transition">
                        <ArrowUpRight className="w-4 h-4 text-white" />
                      </div>

                      <Image
                        src={product.image[0]?.src || "/placeholder.png"}
                        alt={product.image[0]?.alt || product.name}
                        title={product.name}
                        width={800}
                        height={800}
                        className="w-full h-[320px] sm:h-[250px] object-cover"
                      />
                    </div>

                    <div className="p-5 sm:p-6">
                      <h2 className="text-base sm:text-lg font-semibold text-[#0B2545]">
                        {product.name}
                      </h2>

                      <button className="mt-4 w-full bg-[#0B2545] text-white py-2 rounded-xl hover:bg-[#0A1F38] transition text-sm sm:text-base">
                        View Details
                      </button>
                    </div>

                  </Link>
                ))}
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}