"use client";
import React, { useState } from "react";
import { categories } from "@/Data";
import Image from "next/image";
import Head from "next/head";
import Enquiry from "@/components/Enquiry";
import { ArrowUpRight } from "lucide-react";

import axios from "axios";

export default function ProductPage({ params }) {
  const { productId } = React.use(params);
  const allProducts = categories.flatMap((c) => c.products);
  const product = allProducts.find((p) => p.id === productId);
  const [activeImage, setActiveImage] = useState(product?.image[0]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
const [successMessage, setSuccessMessage] = useState("");
const [loading, setLoading] = useState(false);


  if (!product) {
    return (
      <h2 className="text-center text-red-500 mt-10">Product not found</h2>
    );
  }


const files = {
  brochure: "/pdf/product-brochure.pdf",
  manual: "/pdf/user-manual.pdf",
  iso: "/pdf/iso-certificate.pdf",
};



return (
  <>
    <Head>
      <title>{product.metaTitle || product.name}</title>
      <meta
        name="description"
        content={product.metaDescription || product.name}
      />
    </Head>

<section className="bg-[#F6F6F8] py-10 mt-30">
  <div className="max-w-7xl mx-auto  space-y-12">

    {/* -------- BREADCRUMB -------- */}
    <div className="text-xl text-gray-600">
      Home &gt; Industrial Products &gt; Cleaning Equipment &gt;
      <span className="text-black font-medium ml-1">{product.name}</span>
    </div>

    {/* -------- TOP 3-COLUMN GRID (THIS IS THE KEY MATCH) -------- */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

      {/* ========== COLUMN 1 — IMAGE GALLERY (LEFT) ========== */}
      <div>
        <div className="relative bg-white border-1 border-gray-300 overflow-hidden h-[500px] flex items-center justify-center">
          <Image
            src={activeImage.src}
            alt={activeImage.alt}
            width={920}
            height={720}
            className="object-cover h-full"
            
          />

       

      
        </div>

        {/* THUMBNAILS STRIP */}
        <div className="flex gap-4 mt-4  p-3 ">
          {product.image.map((img, i) => (
            <div
              key={i}
              onClick={() => setActiveImage(img)}
              className={`w-24 h-24 border rounded-xl overflow-hidden cursor-pointer ${
                activeImage.src === img.src
                  ? "border-blue-600"
                  : "border-gray-300"
              }`}
            >
              <Image
                src={img.src}
                width={120}
                height={120}
                alt={img.alt}
                className="object-cover w-full h-full"
                
              />
            </div>
          ))}
        </div>
      </div>

      {/* ========== COLUMN 2 — PRODUCT INFO (MIDDLE) ========== */}
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-[#0B2545]">
          {product.name}
        </h1>

        <p className="text-sm text-gray-600">
          SKU: {product.sku || "SP-WR-30L"}
        </p>

      

        <p className="text-black text-xl  leading-relaxed">
          {product.excerpt}
        </p>

        <ul className="space-y-4 text-lg">
          <li className="flex items-start gap-2">
            <span className="text-blue-600">✔</span>
            High-efficiency side press wringer lasts 50,000 cycles.
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-600">✔</span>
            360-degree non-marking castor wheels for silent movement.
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-600">✔</span>
            Ergonomic handle designed to reduce back strain.
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-600">✔</span>
            Chemical resistant PP body suitable for industrial cleaners.
          </li>
        </ul>

       <div className="flex gap-3 items-center pt-4">
        <div className="flex justify-center items-center gap-1">
          <span class="material-symbols-outlined text-[20px] text-blue-500">verified</span>

  <span className=" bg-white px-3 py-1 rounded-lg shadow text-md">
    ISO 9001:2015
  </span>
        </div>

        <div className="flex justify-center items-center gap-1">

          <span class="material-symbols-outlined text-[20px] text-green-500">eco</span>

  <span className=" bg-[#F0FDF4] px-3 py-1 rounded-lg shadow text-md">
    Eco-Friendly
  </span>
        </div>

        <div className="flex justify-center items-center gap-1 ">

<span class="material-symbols-outlined text-[20px] text-red-500">flag</span>

  <span className="bg-white px-3 py-1 rounded-lg shadow text-md">
    Made in India
  </span>
        </div>



</div>

{/* ===== ACTION BUTTONS (INSIDE TOP SECTION) ===== */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">

  <a
    href="tel:+918527557778"
    className="text-center px-5 py-3 bg-blue-600 text-white rounded-2xl font-semibold shadow-md hover:bg-blue-700 transition"
  >
    Call Now
  </a>

  <a
    href={`https://wa.me/+918527557778?text=Hello, I am interested in ${encodeURIComponent(
      product.name
    )}`}
    target="_blank"
    rel="noopener noreferrer"
    className="text-center px-5 py-3 bg-green-600 text-white rounded-2xl font-semibold shadow-md hover:bg-green-700 transition"
  >
    WhatsApp Us
  </a>

  <button
    onClick={() => setIsFormOpen(true)}
    className="text-center px-5 py-3 bg-indigo-600 text-white rounded-2xl font-semibold shadow-md hover:bg-indigo-700 transition"
  >
    Enquire Now
  </button>
</div>


      </div>

  
    </div>







    {/* -------- TECHNICAL SPECIFICATIONS (MATCHING YOUR IMAGE) -------- */}
  <div className="max-w-7xl mx-auto px-6 mt-20">
  <h2 className="text-4xl font-bold text-[#0B2545] mb-6">
    Technical Specifications
  </h2>

  {/* SPEC TABLE (TWO COLUMN GRID LIKE YOUR IMAGE) */}
  <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
    <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x">
      {product.specs?.map((spec, i) => (
        <div
          key={i}
          className="grid grid-cols-2 gap-4 p-5 border-b border-gray-100 last:border-b-0"
        >
          <span className="text-gray-600 text-xl">{spec.label}</span>

          {/* Special case for Available Colors */}
          {spec.label === "Available Colors" ? (
            <div className="flex gap-2 items-center">
              <span className="w-4 h-4 rounded-full bg-yellow-400"></span>
              <span className="w-4 h-4 rounded-full bg-blue-500"></span>
              <span className="w-4 h-4 rounded-full bg-red-500"></span>
              <span className="w-4 h-4 rounded-full bg-green-500"></span>
            </div>
          ) : (
            <span className="font-medium text-lg text-[#0B2545]">
              {spec.value}
            </span>
          )}
        </div>
      ))}
    </div>
  </div>
</div>


  </div>
</section>

    {/* ===== DOCUMENT DOWNLOADS ===== */}
  <section className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-6">


<a
  href={files.brochure}
  download
  className="bg-white p-5 rounded-xl border border-blue-100 shadow-sm flex items-center justify-between hover:shadow-md transition"
>
  <div className="flex items-center gap-3">
    <div className="w-13 h-13 bg-red-50 rounded-lg flex items-center justify-center">
      <span className="material-symbols-outlined text-red-500 text-5xl">
        picture_as_pdf
      </span>
    </div>
    <div>
      <h4 className="font-semibold text-[#0B2545] text-xl">
        Product Brochure
      </h4>
      <p className="text-xs text-gray-500">PDF • 2.4 MB</p>
    </div>
  </div>

  <span className="material-symbols-outlined text-gray-400 hover:text-blue-600 transition">
    download
  </span>
</a>


 

  {/* ISO Certificate */}
 <a
  href={files.iso}
  download
  className="bg-white p-5 rounded-xl border border-blue-100 shadow-sm flex items-center justify-between hover:shadow-md transition"
>
  <div className="flex items-center gap-3">
    <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center">
      <span className="text-green-600 font-semibold">✔</span>
    </div>
    <div>
      <h4 className="font-semibold text-[#0B2545] text-xl">
        ISO Certificate
      </h4>
      <p className="text-xs text-gray-500">PDF • 0.8 MB</p>
    </div>
  </div>

  <span className="material-symbols-outlined text-gray-400 hover:text-blue-600 transition">
    download
  </span>
</a>

</section>


     <section className="  px-14 md:mt-10 mb-18">
        <h2 className="text-2xl sm:text-3xl md:text-5xl  font-semibold text-[#155DFC] mb-6 border-b pb-5">
          Product Description
        </h2>

        <div className="space-y-6 text-base sm:text-lg leading-relaxed text-gray-800">
          {(Array.isArray(product.description) ? product.description : []).map(
            (block, i) => {
              switch (block.type) {
                case "h2":
                  return (
                    <h2
                      key={i}
                      className="text-xl sm:text-2xl md:text-3xl font-semibold mt-6"
                    >
                      {block.text}
                    </h2>
                  );
                case "p":
                  return (
                    <p key={i} className="leading-relaxed mt-2">
                      {block.text}
                    </p>
                  );
                case "ul":
                  return (
                    <ul
                      key={i}
                      className="list-disc ml-5 sm:ml-6 space-y-2 mt-2 text-gray-800"
                    >
                      {block.items.map((item, j) => (
                        <li key={j}>{item}</li>
                      ))}
                    </ul>
                  );
                default:
                  return null;
              }
            }
          )}
        </div>
      </section>

    {/* ===== RELATED PRODUCTS (YOU ALREADY HAVE — KEPT) ===== */}
    <section className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-[#0B2545] mb-6">
        Related Products
      </h2>

      <div className="border-1 border-black mb-3"></div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {(() => {
          const categoryObj = categories.find((c) =>
            c.products.some((p) => p.id === product.id)
          );

          const related = categoryObj
            ? categoryObj.products.filter((p) => p.id !== product.id)
            : [];

          return related.slice(0, 4).map((relatedProduct) => (
            <div
              key={relatedProduct.id}
              className="bg-green-50 rounded-xl shadow-md p-4 text-center"
            >
              <div className="w-full h-52 relative overflow-hidden rounded-lg">
                <Image
                  src={relatedProduct.image[0]?.src}
                  alt={relatedProduct.name}
                  fill
                  className="object-cover bg-blue-100"
                />
              </div>
              <h3 className="mt-4 text-lg font-semibold">
                {relatedProduct.name}
              </h3>
              <a
                href={`/products/${relatedProduct.id}`}
                className="text-blue-600 mt-2 inline-block"
              >
                View Details →
              </a>
            </div>
          ));
        })()}
      </div>
    </section>

    {isFormOpen && (
      <Enquiry isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    )}
  </>
);

}
