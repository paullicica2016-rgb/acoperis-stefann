import type { Metadata } from "next";
import CountyLandingPage from "@/components/CountyLandingPage";

export const metadata: Metadata = {
  title: "Montaj Acoperișuri Hunedoara & Deva – Țiglă Metalică, Reparații, Mansardări",
  description:
    "Montaj și reparații acoperișuri în Hunedoara și Deva. Țiglă metalică BILKA & Lindab, țiglă ceramică, dulgherie, mansardări, hidroizolații. Peste 20 ani experiență, 200+ lucrări finalizate în județul Hunedoara. Garanție scrisă, deviz gratuit. ☎ 0749 651 436",
  keywords: [
    "acoperisuri Hunedoara", "acoperișuri Hunedoara", "montaj acoperis Hunedoara",
    "reparatii acoperis Hunedoara", "acoperisuri Deva", "montaj acoperis Deva",
    "tigla metalica Hunedoara", "mansardari Hunedoara", "dulgherie Hunedoara",
    "hidroizolatii Hunedoara", "acoperis nou Hunedoara", "firma acoperisuri Hunedoara",
    "acoperisuri Brad", "acoperisuri Petrosani", "acoperisuri Lupeni", "acoperisuri Orastie",
  ],
  alternates: { canonical: "https://acoperisuri-stefan.ro/acoperisuri-hunedoara" },
};

export default function HunedoaraPage() {
  return (
    <CountyLandingPage
      county="Hunedoara"
      city="Deva"
      description="Echipa Acoperișuri Ștefan oferă servicii complete de montaj și reparații acoperișuri în tot județul Hunedoara. Cu sediul în zona Deva, acoperim rapid toate localitățile din județ — de la Deva și Hunedoara, la Petroșani, Brad, Orăștie și Lupeni. Folosim țiglă metalică BILKA & Lindab, țiglă ceramică, și oferim garanție scrisă pe fiecare lucrare."
      cities={["Deva", "Hunedoara", "Petroșani", "Brad", "Orăștie", "Lupeni", "Vulcan", "Hațeg", "Simeria", "Călan", "Petrila", "Geoagiu"]}
    />
  );
}
