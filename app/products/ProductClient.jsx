"use client";
import React, { useState } from "react";
import { categories } from "@/Data";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
const Page = () => {
  const itemsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);

  // Flatten all products from all categories
  const allProducts = categories.flatMap((cat) =>
    cat.products.map((p) => ({ ...p, categoryId: cat.id }))
  );

  const totalPages = Math.ceil(allProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = allProducts.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: "smooth" }); // optional smooth scroll to top
    }
  };

  return (
    <div>
       {/* ===== Banner Section ===== */}
      <div
        className="relative bg-cover bg-center h-[50vh] md:h-[90vh] flex flex-col items-center justify-center text-center overflow-hidden"
        style={{
          backgroundImage:
            "url('use6.jpg')",
        }}
      >
        {/* Overlay Gradient */}
    <div className="absolute inset-0 bg-black/40"></div>
        {/* Content */}
        <div className="relative z-10 text-white">
          <Link
            href="/"
            className="text-lg md:text-xl font-semibold text-yellow-400 hover:text-yellow-300 transition underline"
          >
            Home / All Products
          </Link>
          <h1 className="text-5xl font-serif md:text-6xl  font-extrabold mt-4 tracking-tight drop-shadow-lg">
       All Products
          </h1>
  
        </div>
      </div>

      {/* Products Grid */}
      <section className="bg-gradient-to-b from-white to-[#F6DB9C] w-full">


      <div className="max-w-7xl  px-10 py-10 mx-auto">
        <div className=" grid grid-cols-2 md:grid-cols-4 gap-8">
          {currentProducts.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              className="border bg-white rounded-lg overflow-hidden hover:scale-105 shadow-sm hover:shadow-md transition "
            >
                     <div className="absolute top-3 right-3 bg-[#F8CC19] p-2 rounded-full transition-opacity group-hover:opacity-100 opacity-90">
                                <ArrowUpRight className="w-4 h-4 text-white" />
                              </div>
              <Image
                src={product.image[0]?.src || "/placeholder.png"}
                alt={product.image[0]?.alt || product.name}
                title={product.name} 
                width={400}
                height={200}
                className="  object-contain"
              />
              <div className="p-3">

                
                <h2 className="md:text-lg font-semibold">{product.name}</h2>
               
              </div>

          
            </Link>
          ))}
         
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-3 mt-10 flex-wrap">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded-md border ${
                currentPage === 1
                  ? "text-gray-400 border-[#00537B] cursor-not-allowed"
                  : "text-black  border-[#00537B] hover:bg-[#00537B] cursor-pointer hover:text-white transition"
              }`}
            >
              Previous
            </button>

            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => handlePageChange(index + 1)}
                className={`px-4 py-2 rounded-md border ${
                  currentPage === index + 1
                    ? "bg-[#00537B] text-white border-[#00537B]"
                    : "border-[#00537B] text-white hover:bg-[#00537B]"
                }`}
              >
                {index + 1}
              </button>
            ))}

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded-md border ${
                currentPage === totalPages
                  ? "text-gray-400 border-gray-300 cursor-not-allowed"
                  : "text-black border-[#00537B] hover:bg-[#00537B] hover:text-white transition"
              }`}
            >
              
              Next
            </button>
          </div>
        )}
      </div>
      </section>
    </div>
  );
};

export default Page;
