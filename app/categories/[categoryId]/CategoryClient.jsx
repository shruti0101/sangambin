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
      {/* ========== HERO BANNER (YOUR ORIGINAL - KEPT) ========== */}
      {/* <section
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dzbkxqqo9/image/upload/v1759831101/banner_lklwmi.webp')",
        }}
        className="w-full bg-cover bg-center h-[50vh] md:h-[90vh] relative"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#F7C600]/30 via-[#00537B]/50 to-[#F7C600]/40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="max-w-4xl font-serif text-center rounded-md text-[#B57E1F] bg-white text-2xl md:text-5xl font-bold z-10 p-2">
            {category.name}
          </h2>
        </div>
      </section> */}

      {/* ========== PREMIUM CATALOG LAYOUT ========== */}
      <section className="bg-[#F8FAFC] py-45 px-6">
        <div className="pl-10 mx-auto">

     {/* HEADER */}
<div className="mb-12 flex flex-col md:flex-row md:items-center md:justify-between gap-3">

  {/* Left Content */}
  <div>
    <h1 className="text-3xl md:text-5xl font-bold text-[#0B2545]">
      Our Product Catalog
    </h1>
    <p className="mt-3 text-gray-800 text-2xl max-w-3xl">
      Discover our comprehensive range of high-quality plastic waste
      management solutions designed for industrial, commercial, and
      medical applications.
    </p>
  </div>

  {/* Right Button */}
  <div className="md:self-start">
    <a
      href="/products"
      className="inline-flex items-center gap-2 bg-[#0B2545] text-white text-xl mt-5 px-6 py-4 rounded-xl hover:bg-[#0A1F38] transition shadow-md"
    >
      Explore All Products
      <span>→</span>
    </a>
  </div>

</div>


          {/* MAIN GRID: SIDEBAR + PRODUCTS */}
          <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-12">

            {/* ===== LEFT SIDEBAR ===== */}
            <div>
              <div className=" bg-white h-150 border border-gray-100 rounded-2xl p-6 shadow-sm  overflow-y-auto ">
                <h3 className="text-3xl text-center font-semibold text-[#0B2545] mb-5">
                Our  Categories
                </h3>
         

                <ul className="space-y-3">
                  {categories.map((cat) => (
                    <li
                      key={cat.id}
                      className={`flex items-center justify-between px-4 py-3 rounded-xl cursor-pointer transition ${
                        cat.id === categoryId
                          ? "bg-[#EEF3FF] text-[#2563EB] font-semibold"
                          : "hover:bg-gray-100"
                      }`}
                    >
                      <Link
                        href={`/categories/${cat.id}`}
                        className="w-full flex items-center gap-3"
                      >
                        <span className="text-xl material-symbols-outlined  font-bold">inventory_2</span>
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
                <p className="text-gray-700 font-medium">
                  Showing {category.products.length} of{" "}
                  {category.products.length} products
                </p>

               
              </div>

              {/* PRODUCT GRID (PREMIUM CARDS) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
                        className="w-full h-[250px] object-cover"
                        
                      />
                    </div>

                    <div className="p-6">
                      <h2 className="text-lg font-semibold text-[#0B2545]">
                        {product.name}
                      </h2>

                      <button className="mt-4 w-full bg-[#0B2545] text-white py-2 rounded-xl hover:bg-[#0A1F38] transition">
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
