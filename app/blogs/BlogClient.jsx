"use client"; 

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { client } from "@/lib/sanity";

async function getBlogs() {
  return client.fetch(
    `*[_type == "blog"] | order(date desc){
      title,
      slug,
      date,
      excerpt,
      "imageUrl": image.asset->url
    }`
  );
}

export default function BlogsPage() {
  const [blogs, setBlogs] = useState([]);
  const [visibleCount, setVisibleCount] = useState(6); // ✅ initially show 6 blogs

  useEffect(() => {
    async function fetchBlogs() {
      const data = await getBlogs();
      setBlogs(data);
    }
    fetchBlogs();
  }, []);

  return (
    <>
      {/* ===== Banner Section ===== */}
          <div
            className="relative bg-cover bg-center h-[40vh] md:h-[80vh] flex flex-col items-center justify-center text-center overflow-hidden"
            style={{
              backgroundImage:
                "url('https://res.cloudinary.com/dzbkxqqo9/image/upload/v1759728776/aboutbg_xoifk1.webp')",
            }}
          >
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0A3A49]/70 via-[#0A3A49]/60 to-[#0A3A49]/90"></div>
    
            {/* Content */}
            <div className="relative z-10 text-white">
              <Link
                href="/"
                className="text-lg md:text-xl font-semibold text-yellow-400 hover:text-yellow-300 transition underline"
              >
                Home / Blogs
              </Link>
              <h1 className="text-5xl font-serif md:text-6xl font-extrabold  tracking-tight drop-shadow-lg">
                Blogs
              </h1>
             
            </div>
          </div>

      {/* Blog Listing */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.slice(0, visibleCount).map((b) => (
            <article
              key={b.slug?.current || b.title}
              className="bg-white border rounded-lg shadow"
            >
              {b.imageUrl && (
                <Image
                  src={b.imageUrl}
                  alt={b.title}
                  width={1200}
                  height={600}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              )}
              <div className="p-4">
                <h2 className="text-lg font-semibold mb-2">{b.title}</h2>
                <p className="text-sm text-gray-500 mb-3">
                  {b.date
                    ? new Date(b.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })
                    : "No date"}
                </p>

                <p className="text-gray-700 text-sm">{b.excerpt}</p>
                <Link
                  href={`/blogs/${b.slug.current}`}
                  className="text-blue-600 font-medium hover:underline mt-3 block"
                >
                  Read More →
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* ✅ Load More Button */}
        {visibleCount < blogs.length && (
          <div className="text-center mt-10">
            <button
              onClick={() => setVisibleCount((prev) => prev + 6)} // load +6 blogs each click
              className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-md shadow hover:bg-blue-700 transition"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </>
  );
}

