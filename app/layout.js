import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://lacteokrafts.com"),

  title: {
    default:
      "Lacteo Krafts | Handcrafted Ornaments & Gifts from Milk-Derived Materials",
    template: "%s | Lacteo Krafts",
  },

  description:
    "Lacteo Krafts creates handcrafted ornaments, gifts, and accessories using a unique milk-derived biobased material — blending thoughtful design, craftsmanship, and sustainability.",

  keywords: [
    "Lacteo Krafts",
    "handcrafted ornaments",
    "handmade gifts",
    "handmade jewelry",
    "milk derived material",
    "biobased crafts",
    "eco friendly gifts",
    "artisan accessories",
  ],

  openGraph: {
    title:
      "Lacteo Krafts | Handcrafted Ornaments & Gifts from Milk-Derived Materials",
    description:
      "Thoughtfully crafted ornaments, gifts, and accessories made from a unique milk-derived biobased material.",
    url: "https://lacteokrafts.com",
    siteName: "Lacteo Krafts",
    type: "website",
    locale: "en_IN",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col bg-[#FAF8F5]`}
      >
        <Navbar />
        <main className="grow pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
