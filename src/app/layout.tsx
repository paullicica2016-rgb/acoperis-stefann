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
  metadataBase: new URL("https://acoperisuri-stefan.ro"),
  title: {
    default:
      "Montaj Acoperișuri și Reparații în Transilvania | Acoperișuri Ștefan",
    template: "%s | Acoperișuri Ștefan – Montaj și Reparații Acoperișuri",
  },
  description:
    "Montaj acoperișuri și reparații cu peste 20 de ani experiență în Hunedoara, Cluj, Mureș, Alba, Sibiu, Bistrița-Năsăud. Țiglă metalică BILKA & Lindab, țiglă ceramică, dulgherie, mansardări, hidroizolații. Echipă proprie de 10 meșteri. Garanție scrisă pe lucrare. Deviz gratuit. ☎ 0749 651 436",
  keywords: [
    // Servicii principale
    "montaj acoperis",
    "montaj acoperiș",
    "reparatii acoperis",
    "reparații acoperiș",
    "montaj tigla metalica",
    "montaj țiglă metalică",
    "montaj tigla ceramica",
    "montaj țiglă ceramică",
    "invelitoare acoperis",
    "învelitoare acoperiș",
    "dulgherie acoperis",
    "mansardari",
    "mansardări",
    "hidroizolatii",
    "hidroizolații",
    "sisteme pluviale",
    "jgheaburi burlane",
    "cabane lemn",
    "foisoare lemn",
    "foișoare lemn",
    "terase lemn",
    "vopsire acoperis",
    // Branduri
    "BILKA",
    "Lindab",
    "tigla BILKA",
    "tigla Lindab",
    // Județe - cu și fără diacritice
    "acoperisuri Hunedoara",
    "acoperișuri Hunedoara",
    "montaj acoperis Hunedoara",
    "reparatii acoperis Hunedoara",
    "acoperisuri Deva",
    "acoperișuri Deva",
    "acoperisuri Cluj",
    "acoperișuri Cluj",
    "montaj acoperis Cluj-Napoca",
    "acoperisuri Cluj-Napoca",
    "acoperisuri Mures",
    "acoperișuri Mureș",
    "montaj acoperis Targu Mures",
    "acoperisuri Targu-Mures",
    "acoperișuri Târgu-Mureș",
    "acoperisuri Alba",
    "acoperișuri Alba",
    "montaj acoperis Alba Iulia",
    "acoperisuri Alba Iulia",
    "acoperisuri Sibiu",
    "acoperișuri Sibiu",
    "montaj acoperis Sibiu",
    "acoperisuri Bistrita-Nasaud",
    "acoperișuri Bistrița-Năsăud",
    "montaj acoperis Bistrita",
    "acoperișuri Bistrița",
    // Zone
    "acoperisuri Transilvania",
    "acoperișuri Transilvania",
    "firma acoperisuri Transilvania",
    "firmă acoperișuri Transilvania",
    // Long-tail
    "montaj acoperis pret",
    "cat costa un acoperis",
    "firma montaj acoperis",
    "echipa montaj acoperis",
    "acoperis nou pret",
    "reparatie acoperis urgenta",
    "acoperis tigla metalica pret",
    "mansardare pret",
    "hidroizolatie acoperis",
  ],
  openGraph: {
    title: "Acoperișuri Ștefan – Montaj și Reparații Acoperișuri în Transilvania",
    description:
      "Peste 20 ani experiență, 200+ lucrări finalizate. Montaj țiglă metalică BILKA & Lindab, țiglă ceramică, mansardări, hidroizolații. Hunedoara, Cluj, Mureș, Alba, Sibiu, Bistrița-Năsăud. Deviz gratuit ☎ 0749 651 436",
    type: "website",
    locale: "ro_RO",
    siteName: "Acoperișuri Ștefan",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://acoperisuri-stefan.ro",
  },
};

// Schema.org — multiple structured data
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "RoofingContractor",
  "@id": "https://acoperisuri-stefan.ro/#business",
  name: SITE_CONFIG.name,
  alternateName: "Acoperișuri Ștefan",
  description:
    "Firmă specializată în montaj și reparații acoperișuri cu peste 20 de ani experiență în Transilvania. Țiglă metalică BILKA & Lindab, țiglă ceramică, dulgherie, mansardări, hidroizolații, cabane din lemn.",
  telephone: "+40749651436",
  url: "https://acoperisuri-stefan.ro",
  priceRange: "$$",
  currenciesAccepted: "RON",
  paymentAccepted: "Cash, Transfer bancar",
  openingHours: "Mo-Sa 07:00-19:00",
  foundingDate: "2004",
  numberOfEmployees: {
    "@type": "QuantitativeValue",
    value: 10,
  },
  areaServed: [
    {
      "@type": "County",
      name: "Hunedoara",
      containedInPlace: { "@type": "State", name: "Transilvania, România" },
    },
    {
      "@type": "County",
      name: "Cluj",
      containedInPlace: { "@type": "State", name: "Transilvania, România" },
    },
    {
      "@type": "County",
      name: "Mureș",
      containedInPlace: { "@type": "State", name: "Transilvania, România" },
    },
    {
      "@type": "County",
      name: "Alba",
      containedInPlace: { "@type": "State", name: "Transilvania, România" },
    },
    {
      "@type": "County",
      name: "Sibiu",
      containedInPlace: { "@type": "State", name: "Transilvania, România" },
    },
    {
      "@type": "County",
      name: "Bistrița-Năsăud",
      containedInPlace: { "@type": "State", name: "Transilvania, România" },
    },
  ],
  address: {
    "@type": "PostalAddress",
    addressRegion: "Hunedoara",
    addressCountry: "RO",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 45.88,
    longitude: 22.9,
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Servicii Acoperișuri",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Montaj Țiglă Metalică BILKA & Lindab",
          description: "Montaj profesional țiglă metalică cu garanție extinsă",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Montaj Țiglă Ceramică",
          description: "Montaj orice tip de țiglă ceramică pentru acoperișuri tradiționale",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Dulgherie și Mansardări",
          description: "Mansardări locuibile, terase și foișoare din lemn tratat premium",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Hidroizolații cu Membrană Bituminoasă",
          description: "Hidroizolații profesionale pentru acoperișuri terasă și fundații",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Reparații Acoperișuri de Urgență",
          description: "Intervenții rapide pentru infiltrații, țigle sparte, probleme după furtuni",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Sisteme Pluviale",
          description: "Montaj jgheaburi, burlane și accesorii din tablă, zinc sau PVC",
        },
      },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "200",
    bestRating: "5",
    worstRating: "1",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Acoperișuri Ștefan",
  url: "https://acoperisuri-stefan.ro",
  description: "Montaj și reparații acoperișuri în Transilvania",
  inLanguage: "ro",
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
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        <link rel="canonical" href="https://acoperisuri-stefan.ro" />
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
