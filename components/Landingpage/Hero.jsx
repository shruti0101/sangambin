"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const desktopImages = ["/hero2.webp", "/hero2.jpeg"];
const mobileImages = ["/mobbanner1.png" ,"/mobbanner2.jpeg"]; // mobile images

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // detect screen size
  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  // slider timer
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 15000);

    return () => clearInterval(timer);
  }, []);

  const images = isMobile ? mobileImages : desktopImages;

  return (
    <section
      className="
        w-full overflow-hidden
        h-[430px] md:h-[110vh] mt-25
      "
    >
      <AnimatePresence mode="sync">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <Image
            src={images[index % images.length]}
            alt="Hero banner"
            width={1000}
            height={800}
            className="w-full  md:h-auto object-cover"
            priority
          />
        </motion.div>
      </AnimatePresence>
    </section>
  );
}