"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";


const desktopImages = ["/hero2.webp","/hero2.jpeg"];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 15000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="
         w-full overflow-hidden
        h-[320px] sm:h-[370px] md:h-[80vh] xl:h-[105vh] md:mt-25
      "
    >
      <AnimatePresence mode="sync">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className=""
        >
          {/* ✅ Next Image Responsive */}
          <Image
            src={desktopImages[index % desktopImages.length]}
            alt="Hero banner"
            width={2000}
            height={800}
            className="max-w-full h-110 md:h-auto object-contain md:object-cover"
          />

        </motion.div>
      </AnimatePresence>
    </section>
  );
}
