"use client";

import { useEffect, useState, memo } from "react";
import Image from "next/image";

const desktopImages = [
  "/hero2.webp",
  "/hero2.jpeg",
];

const mobileImages = [
  "/mobbanner1.png",
  "/mobbanner2.jpeg",
];

function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => prev + 1);
    }, 15000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* Desktop */}
   <section className="relative hidden md:block mt-28 h-screen overflow-hidden z-0 isolate">
        {desktopImages.map((image, index) => (
          <Image
            key={image}
            src={image}
            alt={`Hero ${index + 1}`}
            fill
            priority={index === 0}
            fetchPriority={index === 0 ? "high" : "auto"}
            loading={index === 0 ? "eager" : "lazy"}
            sizes="100vw"
            className={`absolute inset-0 object-cover transition-opacity duration-1000 ease-in-out ${
              current % desktopImages.length === index
                ? "opacity-100"
                : "opacity-0"
            }`}
          />
        ))}
      </section>

      {/* Mobile */}
      <section className="relative md:hidden mt-22 h-[60vh] overflow-visible">
        {mobileImages.map((image, index) => (
          <Image
            key={image}
            src={image}
            alt={`Mobile Hero ${index + 1}`}
            fill
            priority={index === 0}
            fetchPriority={index === 0 ? "high" : "auto"}
            loading={index === 0 ? "eager" : "lazy"}
            sizes="100vw"
            className={`absolute inset-0 object-cover transition-opacity duration-1000 ease-in-out ${
              current % mobileImages.length === index
                ? "opacity-100"
                : "opacity-0"
            }`}
          />
        ))}
      </section>
    </>
  );
}

export default memo(Hero);