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
      "Lacteokrafts (Lacteo Krafts) | Handcrafted Ornaments & Gifts from Milk-Derived Materials",
    template: "%s | Lacteokrafts",
  },

  description:
    "Lacteokrafts (Lacteo Krafts) creates handcrafted ornaments, gifts, and accessories using a unique milk-derived biobased material — blending thoughtful design, craftsmanship, and sustainability.",

  keywords: [
    "Lacteokrafts",
    "Lacteo Krafts",
    "Lacteo Kraft",
    "lacteokrafts",
    "lactocraft",
    "lactokraft",
    "lacto craft",
    "jwelery",
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
      "Lacteokrafts | Handcrafted Ornaments & Gifts from Milk-Derived Materials",
    description:
      "Lacteokrafts - Thoughtfully crafted ornaments, gifts, and accessories made from a unique milk-derived biobased material.",
    url: "https://lacteokrafts.com",
    siteName: "Lacteokrafts",
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