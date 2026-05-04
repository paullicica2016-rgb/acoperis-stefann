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
      "Montaj Acoperișuri și Reparații în Toată România | Acoperișuri România",
    template: "%s | Acoperișuri România – Montaj și Reparații Acoperișuri",
  },
  description:
    "Montaj acoperișuri și reparații în toată România — cu peste 20 de ani experiență. Țiglă metalică BILKA & Lindab, țiglă ceramică, dulgherie, mansardări, hidroizolații. Cluj, București, Timișoara, Iași, Brașov, Constanța și toate județele. Garanție scrisă. Deviz gratuit. ☎ 0749 651 436",
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
    "BILKA", "Lindab", "tigla BILKA", "tigla Lindab",
    // Transilvania
    "acoperisuri Cluj", "acoperișuri Cluj", "montaj acoperis Cluj-Napoca",
    "acoperisuri Hunedoara", "montaj acoperis Deva",
    "acoperisuri Mures", "montaj acoperis Targu Mures",
    "acoperisuri Alba", "montaj acoperis Alba Iulia",
    "acoperisuri Sibiu", "montaj acoperis Sibiu",
    "acoperisuri Bistrita", "montaj acoperis Bistrita-Nasaud",
    "acoperisuri Brasov", "montaj acoperis Brasov",
    "acoperisuri Covasna", "acoperisuri Harghita", "acoperisuri Salaj",
    // Moldova
    "acoperisuri Iasi", "montaj acoperis Iasi",
    "acoperisuri Bacau", "acoperisuri Suceava",
    "acoperisuri Neamt", "acoperisuri Botosani", "acoperisuri Vaslui",
    // Muntenia
    "acoperisuri Bucuresti", "montaj acoperis Bucuresti",
    "acoperisuri Prahova", "montaj acoperis Ploiesti",
    "acoperisuri Arges", "montaj acoperis Pitesti",
    "acoperisuri Dambovita", "acoperisuri Giurgiu",
    "acoperisuri Ilfov", "acoperisuri Teleorman",
    // Oltenia
    "acoperisuri Dolj", "montaj acoperis Craiova",
    "acoperisuri Gorj", "acoperisuri Valcea",
    "acoperisuri Olt", "acoperisuri Mehedinti",
    // Dobrogea
    "acoperisuri Constanta", "montaj acoperis Constanta",
    "acoperisuri Tulcea",
    // Banat
    "acoperisuri Timisoara", "montaj acoperis Timisoara",
    "acoperisuri Arad", "acoperisuri Caras-Severin",
    // Crisana & Maramures
    "acoperisuri Oradea", "montaj acoperis Oradea",
    "acoperisuri Baia Mare", "acoperisuri Satu Mare",
    // Câmpia Română
    "acoperisuri Galati", "acoperisuri Braila",
    "acoperisuri Buzau", "acoperisuri Vrancea",
    "acoperisuri Ialomita", "acoperisuri Calarasi",
    // General Romania
    "acoperisuri Romania", "acoperișuri România",
    "firma acoperisuri Romania", "firmă acoperișuri toată România",
    "acoperisuri Transilvania",
    // Long-tail
    "montaj acoperis pret", "cat costa un acoperis",
    "firma montaj acoperis", "echipa montaj acoperis",
    "acoperis nou pret", "reparatie acoperis urgenta",
    "acoperis tigla metalica pret", "mansardare pret",
    "hidroizolatie acoperis", "deviz gratuit acoperis",
  ],
  openGraph: {
    title: "Acoperișuri România – Montaj și Reparații Acoperișuri în Toată România",
    description:
      "Peste 20 ani experiență, 200+ lucrări finalizate. Montaj țiglă metalică BILKA & Lindab, țiglă ceramică, mansardări, hidroizolații. Lucrăm în toate județele din România. Deviz gratuit ☎ 0749 651 436",
    type: "website",
    locale: "ro_RO",
    siteName: "Acoperișuri România",
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
  alternateName: "Acoperișuri România",
  description:
    "Firmă specializată în montaj și reparații acoperișuri cu peste 20 de ani experiență. Lucrăm în toate județele din România. Țiglă metalică BILKA & Lindab, țiglă ceramică, dulgherie, mansardări, hidroizolații, cabane din lemn.",
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
  areaServed: {
    "@type": "Country",
    name: "România",
  },
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
  name: "Acoperișuri România",
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
