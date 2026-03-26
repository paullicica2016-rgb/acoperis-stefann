import type { Metadata } from "next";
import { Playfair_Display, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { SITE_CONFIG } from "@/data/constants";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Montaj Acoperișuri Reparații Ștefan | Acoperișuri Transilvania",
    template: "%s | Montaj Acoperișuri Reparații Ștefan",
  },
  description:
    "Montaj și reparații acoperișuri cu 20 de ani experiență. Țiglă metalică BILKA & Lindab, țiglă ceramică, mansardări, hidroizolații. Lucrăm în Hunedoara, Mureș, Cluj, Alba, Sibiu, Bistrița-Năsăud.",
  keywords: [
    "acoperișuri",
    "montaj acoperiș",
    "reparații acoperiș",
    "țiglă metalică",
    "BILKA",
    "Lindab",
    "mansardări",
    "hidroizolații",
    "Hunedoara",
    "Mureș",
    "Cluj",
    "Alba",
    "Sibiu",
    "Bistrița-Năsăud",
    "Transilvania",
  ],
  openGraph: {
    title: "Montaj Acoperișuri Reparații Ștefan",
    description:
      "Acoperișuri de calitate cu 20 de ani experiență. Lucrăm în 6 județe din Transilvania.",
    type: "website",
    locale: "ro_RO",
  },
  robots: { index: true, follow: true },
};

// Schema.org LocalBusiness JSON-LD
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE_CONFIG.name,
  description:
    "Montaj și reparații acoperișuri cu 20 de ani experiență în Transilvania.",
  telephone: "+40749651436",
  areaServed: [
    "Hunedoara",
    "Mureș",
    "Cluj",
    "Alba",
    "Sibiu",
    "Bistrița-Năsăud",
  ],
  priceRange: "$$",
  openingHours: "Mo-Sa 07:00-19:00",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ro" className={`${playfair.variable} ${sourceSerif.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
