import { Outfit } from "next/font/google";
import "./globals.css";
import LayoutWrapper from "@/components/LayoutWrapper";
import Script from "next/script";
import Whatsapp from "@/components/Whatsapp";
import Popup from "@/components/Popup"
const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Titanium Dioxide Wholesaler | Aanya Enterprise",
  description:
    "Aanya Enterprise is a leading Titanium Dioxide Wholesaler. Get bulk, high-quality TiO2 for your industry needs. Reliable supply and competitive pricing. Contact us today!",
  icons: {
    icon: "/logo.webp",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet" />

        <link
          href="https://cdn.jsdelivr.net/npm/daisyui@5"
          rel="stylesheet"
          type="text/css"
        />
      </head>
      <body className={`${outfit.variable} antialiased`}>

        <Whatsapp></Whatsapp>
       
        <main>
           <Popup></Popup>
          <LayoutWrapper>{children}</LayoutWrapper>
        </main>

        {/* ✅ Use Next.js Script component instead of <script> */}
        <Script
          src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
