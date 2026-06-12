"use client";
import Image from "next/image";
import Link from "next/link";

const products = [
  {
    title: "Garbage Bag",
    image: "/Garbage-Bag.webp",
    href: "https://garbagebagmanufacturer.in/"
  },
  {
    title: "Sharp Container",
    image: "/Sharp-Container.webp",
    href: "https://sharpcontainermanufacturer.com/"
  },
  {
    title: "Needle Cutter",
    image: "/Needle-Cutter.webp",
    href: "https://sharpcontainermanufacturer.com/"
  },
  {
    title: "Wringer Trolley",
    image: "/18-L-Double-Bucket-Wringer-Trolley.webp",
    href: "https://wringertrolleymanufacturer.com/"
  },
];

export default function ProductsManufacturing({ inquiry, setIsOpen }) {

  const whatsappNumber = "+918810422935"; 

  return (
    <section className="py-7 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <h2 className="text-center text-4xl md:text-5xl font-extrabold mb-6">
          <span className="text-black">OUR </span>
          <span className="text-green-600">PRODUCTS MANUFACTURING</span>
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((item, index) => {

            const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hi, I'm interested in ${item.title}`;

            return inquiry ? (
              <div
                key={index}
                onClick={() => setIsOpen(true)}
                className="cursor-pointer border border-green-600 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition duration-300 bg-white"
              >
                {/* Image Area */}
                <div className="bg-white flex items-center justify-center">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={500}
                    height={400}
                    className="object-cover h-full w-full"
                  />
                </div>

                {/* Bottom */}
                <div className="bg-green-600 text-white text-center py-4 px-3">
                  <h3 className="text-lg font-semibold mb-3">
                    {item.title}
                  </h3>

                  {/* WhatsApp Button */}
                  <a
                                href="https://wa.link/5alazl"

                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-block bg-white text-green-600 font-semibold px-4 py-2 rounded-md hover:bg-green-100 transition"
                  >
                     WhatsApp Now
                  </a>
                </div>
              </div>
            ) : (
              <div
                key={index}
                className="border border-green-600 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition duration-300 bg-white"
              >
                <Link href={item.href}>
                  {/* Image Area */}
                  <div className="bg-white flex items-center justify-center">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={500}
                      height={400}
                      className="object-cover h-full w-full"
                    />
                  </div>
                </Link>

                {/* Bottom */}
                <div className="bg-green-600 text-white text-center py-4 px-3">
                  <h3 className="text-lg font-semibold mb-3">
                    {item.title}
                  </h3>

                  {/* WhatsApp Button */}
                  <a
                    href="https://wa.link/5alazl"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-white text-green-600 font-semibold px-4 py-2 rounded-md hover:bg-green-100 transition"
                  >
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}