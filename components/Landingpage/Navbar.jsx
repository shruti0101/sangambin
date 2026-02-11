"use client";
import { useState, useEffect } from "react";
import { ChevronDown, MapPin, Mail, Phone, Menu, X } from "lucide-react";
import Image from "next/image";
import { FaPhone, FaWhatsapp, FaWhatsappSquare } from "react-icons/fa";
import Link from "next/link";
import { categories } from "@/Data";
import Enquiry from "@/components/Enquiry";

export default function Navbar() {
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
    { label: "Blogs", link: "#" },
    { label: "Contact Us", link: "/contact-us" },
  ];



return (
  <>
   <header
  className={`fixed top-0 left-0 w-full z-50 transition-all ${
    scrolled ? "shadow-lg bg-white" : "bg-white"
  }`}
>
  <div className="w-full mx-auto grid grid-cols-[260px_1fr] border-b border-gray-300">

    {/* ================= LEFT COLUMN : LOGO ================= */}
    <div className="flex items-center px-6 border-r border-gray-300 bg-white">
      <Link href="/" className="inline-flex flex-col items-start bg-green-800 py-4 px-2">
        <Image
          src="/logo.webp"
          width={190}
          height={70}
          alt="Logo"
          className="object-contain "
        />
        <p className="text-[10px] text-white">
          AN ISO 9001:2015 CERTIFIED COMPANY
        </p>
      </Link> 
    </div>

    {/* ================= RIGHT COLUMN ================= */}
    <div className="col-start-2">

      {/* ===== TOP STRIP (LIGHT BLUE) ===== */}
      <div className="bg-[#E6F4FF] h-[54px] flex items-center ml-5">
        <div className="w-full px-6 flex items-center justify-between text-md text-gray-800">

          {/* LEFT INFO */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span>Our Location</span>
            </div>

            <span className="text-gray-400">|</span>

            <div className="flex items-center gap-2">
              <Mail size={16} />
              <a href="mailto:sales@polywell.com">
                Email : sales@polywell.com
              </a>
            </div>


               <span className="ml-55 text-xl uppercase text-[#016630] font-medium">
              Distributor
            </span>
<a
  href="https://wa.me/918527557778"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-2"
>
  <span className="ml-15 text-[#016630] font-medium uppercase text-xl animate-pulse">
    Whatsapp Us Now
  </span>
  <FaWhatsappSquare className="w-8 text-green-600 h-8" />
</a>



         
          </div>

          {/* SOCIAL ICONS */}
          <div className="flex items-center">
            <a className="bg-[#1877F2] w-10 h-10 flex items-center justify-center text-white">f</a>
            <a className="bg-[#0A66C2] w-10 h-10 flex items-center justify-center text-white">in</a>
          </div>
        </div>
      </div>

      {/* ===== MAIN NAV (UNDER STRIP) ===== */}
      <nav className="bg-white   h-[68px] flex items-center">
        <div className="w-full px-6 flex items-center justify-between">

          {/* CENTER MENU */}
          <ul className="hidden lg:flex items-center gap-12 text-xl font-medium text-gray-800">
            {menuItems.map((item, idx) => (
              <li
                key={idx}
                className="relative"
                onMouseEnter={() =>
                  item.hasCategories && setOpenMenu("Products")
                }
                onMouseLeave={() => setOpenMenu(null)}
              >
                <Link
                  href={item.link}
                  className="flex items-center gap-1 hover:text-green-600"
                >
                  {item.label}
                  {item.hasCategories && <ChevronDown size={14} />}
                </Link>

                {item.hasCategories && openMenu === "Products" && (
                  <div className="absolute top-full pt-2 w-64 bg-white shadow-lg border rounded-lg">
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
          <div className="flex items-center gap-6 animate-pulse">
            <div className="text-green-600 text-xl leading-tight text-right">
              <span className="block font-semibold">Call us on:</span>
        <a href="tel:+918527557778" className="text-2xl font-bold">
  +91-85275 57778
</a>

            </div>

            <button
              onClick={() => setIsFormOpen(true)}
              className="bg-green-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-700 text-lg"
            >
              Get Quote
            </button>

            <button
              className="lg:hidden"
              onClick={() => setMobileNavOpen(true)}
            >
              <Menu size={28} />
            </button>
          </div>

        </div>
      </nav>
    </div>
  </div>

  {/* MOBILE MENU */}
  {mobileNavOpen && (
    <div className="fixed inset-0 bg-black/60 z-50">
      <div className="absolute right-0 top-0 w-80 h-full bg-white p-6">
        <button className="mb-6" onClick={() => setMobileNavOpen(false)}>
          <X size={28} />
        </button>

        <ul className="space-y-5 text-lg font-medium">
          {menuItems.map((item, idx) => (
            <li key={idx}>
              <Link
                href={item.link}
                onClick={() => setMobileNavOpen(false)}
              >
                {item.label}
              </Link>

              {item.hasCategories && (
                <div className="mt-2 ml-4 space-y-2 text-sm text-gray-600">
                  {categories.map((cat) => (
                    <Link
                      key={cat.id}
                      href={`/categories/${cat.id}`}
                      onClick={() => setMobileNavOpen(false)}
                    >
                      • {cat.name}
                    </Link>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )}

  {isFormOpen && (
    <Enquiry
      isOpen={isFormOpen}
      onClose={() => setIsFormOpen(false)}
    />
  )}
</header>


    {isFormOpen && (
      <Enquiry
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
      />
    )}
  </>
);




}
