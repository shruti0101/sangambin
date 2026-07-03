"use client";
import { useState, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import { FaWhatsappSquare } from "react-icons/fa";
import Link from "next/link";
import { categories } from "@/Data";
import Enquiry from "@/components/Enquiry";
import TranslateButton from "../GoogleTranslate";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Home", link: "/" },
    { label: "About Us", link: "/about-us" },
    { label: "Products", link: "/products", hasCategories: true },
    { label: "Blogs", link: "/blogs" },
    { label: "Contact Us", link: "/contact-us" },
  ];

  const translateToHindi = () => {
    const select = document.querySelector(".goog-te-combo");

    if (select) {
      select.value = "hi";
      select.dispatchEvent(new Event("change"));
    }
  };

  if (pathname === "/inquiry") {
    return null;
  }

  return (
    <>
     <header
  className={`fixed top-0 left-0 w-full z-[9999] transition-all duration-300 ${
          scrolled ? "shadow-lg bg-white" : "bg-white"
        }`}
      >
        <div className="w-full mx-auto lg:grid lg:grid-cols-[240px_1fr] xl:grid-cols-[260px_1fr] border-b border-gray-300">
          {/* ================= LEFT COLUMN : LOGO ================= */}
          <div className="flex items-center justify-between px-3 sm:px-5 lg:px-4 border-b lg:border-b-0 lg:border-r border-gray-300 bg-white min-h-[80px]">
            <Link
              href="/"
              className="inline-flex flex-col items-start bg-green-800 py-2 px-2 max-w-[75%] sm:max-w-full"
            >
              <Image
                src="/logo.webp"
                width={210}
                height={100}
                alt="Logo"
                className="object-contain w-[130px] sm:w-[170px] lg:w-[190px] xl:w-[210px] h-auto"
              />

              <p className="text-[8px] sm:text-[9px] xl:text-[10px] text-white leading-tight">
                AN ISO 9001:2015 CERTIFIED COMPANY
              </p>
            </Link>

            {/* MOBILE ACTIONS */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={translateToHindi}
                className="px-2 sm:px-3 bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg font-semibold whitespace-nowrap text-xs sm:text-sm"
              >
                हिंदी
              </button>

              <button onClick={() => setMobileNavOpen(true)}>
                <Menu size={28} />
              </button>
            </div>
          </div>

          {/* ================= RIGHT COLUMN ================= */}
     <div className="hidden lg:block overflow-visible">
            {/* ===== TOP STRIP ===== */}
            <div className="bg-[#E6F4FF] border-b border-gray-200">
              <div className="w-full px-4 xl:px-6 flex flex-col xl:flex-row xl:items-center xl:justify-between gap-3 py-2">
                {/* LEFT CONTENT */}
                <div className="flex flex-wrap items-center justify-center xl:justify-start gap-3 xl:gap-8 2xl:gap-14 min-w-0">
                  <span className="text-red-500 font-bold font-serif text-sm lg:text-base xl:text-lg 2xl:text-2xl animate-pulse text-center xl:text-left leading-snug">
                    India's Only Integrated Waste Management Products
                    Manufacturer
                  </span>

                  <Link
                    href="https://wa.me/918810422935?text=Hi%20Polywell%2C%20I%20need%20the%20wholesale%20price%20list%20and%20catalog%20for%20your%20dustbins.%20Please%20share%20details."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 whitespace-nowrap text-[#016630] font-medium"
                  >
                    <span className="capitalize text-sm lg:text-base xl:text-lg animate-pulse">
                      Whatsapp Now
                    </span>

                    <FaWhatsappSquare className="w-5 h-5 xl:w-6 xl:h-6 text-green-600" />
                  </Link>

                  <button
                    onClick={translateToHindi}
                    className="text-white text-sm font-semibold bg-red-500 hover:bg-red-600 px-3 py-2 rounded-md whitespace-nowrap"
                  >
                    हिंदी में देखें
                  </button>
                </div>

               
              </div>
            </div>

            {/* ===== MAIN NAV ===== */}
        <nav className="relative bg-white min-h-[68px] flex items-center overflow-visible">
              <div className="w-full px-4 xl:px-6 flex items-center justify-between gap-4">
                {/* CENTER MENU */}
                <ul className="flex items-center gap-4 xl:gap-8 2xl:gap-10 text-base xl:text-lg 2xl:text-xl font-medium text-gray-800 flex-wrap">
                  {menuItems.map((item, idx) => (
                    <li
                      key={idx}
                      className="relative z-50"
                      onMouseEnter={() =>
                        item.hasCategories && setOpenMenu("Products")
                      }
                      onMouseLeave={() => setOpenMenu(null)}
                    >
                      <Link
                        href={item.link}
                        className="flex items-center gap-1 hover:text-green-600 whitespace-nowrap transition-colors"
                      >
                        {item.label}

                        {item.hasCategories && <ChevronDown size={14} />}
                      </Link>

                      {item.hasCategories && openMenu === "Products" && (
                 <div
  className="
    absolute
    left-0
    top-full
    
    w-72
    max-h-[400px]
    overflow-y-auto
    rounded-lg
    border
    bg-white
    shadow-2xl
    z-[99999]
  "
>
                          {categories.map((cat) => (
                            <Link
                              key={cat.id}
                              href={`/categories/${cat.id}`}
                              className="block px-4 py-3 hover:bg-gray-100"
                            >
                              {cat.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </li>
                  ))}
                </ul>

                {/* RIGHT CALL + BUTTON */}
                <div className="hidden xl:flex items-center gap-5 shrink-0">
                  <div className="text-green-600 text-right whitespace-nowrap">
                    <span className="block text-sm font-semibold">
                      Call us on:
                    </span>

                    <a
                      href="tel:+918810422935"
                      className="text-lg 2xl:text-xl font-bold"
                    >
                      +91-8810422935
                    </a>
                  </div>

                  <button
                    onClick={() => setIsFormOpen(true)}
                    className="bg-green-600 text-white px-5 2xl:px-6 py-2 rounded-full font-semibold hover:bg-green-700 whitespace-nowrap"
                  >
                    Get Quote
                  </button>
                </div>
              </div>
            </nav>
          </div>
        </div>

        {/* ================= MOBILE MENU ================= */}
        {mobileNavOpen && (
          <div className="fixed inset-0 bg-black/60 z-50 lg:hidden">
            <div className="absolute right-0 top-0 w-[88%] sm:w-[360px] h-full bg-white p-5 overflow-y-auto">
              {/* TOP */}
              <div className="flex items-center justify-between mb-8">
                <Image
                  src="/logo.webp"
                  width={140}
                  height={60}
                  alt="Logo"
                  className="object-contain h-auto"
                />

                <button onClick={() => setMobileNavOpen(false)}>
                  <X size={28} />
                </button>
              </div>

              {/* MENU */}
              <ul className="space-y-5 text-lg font-medium ">
                {menuItems.map((item, idx) => (
                  <li key={idx}>
                    {/* NORMAL LINKS */}
                    {!item.hasCategories && (
                      <Link
                        href={item.link}
                        onClick={() => setMobileNavOpen(false)}
                        className="block"
                      >
                        {item.label}
                      </Link>
                    )}

                    {/* PRODUCTS DROPDOWN */}
                    {item.hasCategories && (
                      <>
                        <button
                          onClick={() =>
                            setMobileProductsOpen(!mobileProductsOpen)
                          }
                          className="flex items-center justify-between w-full"
                        >
                          {item.label}

                          <ChevronDown
                            size={18}
                            className={`transition-transform duration-300 ${
                              mobileProductsOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        {mobileProductsOpen && (
                          <div className="mt-3 space-y-2 max-h-[350px] overflow-y-auto pr-2">
                            {categories.map((cat) => (
                              <Link
                                key={cat.id}
                                href={`/categories/${cat.id}`}
                                onClick={() => setMobileNavOpen(false)}
                                className="block text-sm sm:text-base text-red-700 py-2 hover:text-green-600"
                              >
                                {cat.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </>
                    )}
                  </li>
                ))}
              </ul>

              {/* ACTION BUTTONS */}
              <div className="mt-8 pt-6 border-t">
                <a
                  href="tel:+918810422935"
                  className="block bg-green-600 text-white text-center py-3 rounded-lg mb-4 font-medium"
                >
                  Call Now
                </a>

                <button
                  onClick={() => {
                    setIsFormOpen(true);
                    setMobileNavOpen(false);
                  }}
                  className="block w-full bg-black text-white text-center py-3 rounded-lg font-medium"
                >
                  Get Quote
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ENQUIRY MODAL */}
        {isFormOpen && (
          <Enquiry isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
        )}

        <TranslateButton />
      </header>
    </>
  );
}