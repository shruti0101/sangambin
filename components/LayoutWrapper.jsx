"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Landingpage/Navbar";
import Footer from "@/components/Landingpage/Footer";

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();

  // Hide Navbar/Footer on /studio routes
  const hideLayout =
    pathname.startsWith("/studio") ||
    pathname.startsWith("/login") ||
    pathname.startsWith("/inquiry");
  return (
    <>
      {!hideLayout && <Navbar />}
      {children}
      {!hideLayout && <Footer />}
    </>
  );
}
