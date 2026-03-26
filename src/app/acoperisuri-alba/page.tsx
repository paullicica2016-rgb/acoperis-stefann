import type { Metadata } from "next";
import CountyLandingPage from "@/components/CountyLandingPage";

export const metadata: Metadata = {
  title: "Montaj Acoperișuri Alba Iulia & Alba – Țiglă Metalică, Reparații, Mansardări",
  description:
    "Montaj și reparații acoperișuri în Alba Iulia și județul Alba. Țiglă metalică BILKA & Lindab, țiglă ceramică, dulgherie, mansardări, hidroizolații. Peste 20 ani experiență, garanție scrisă pe lucrare, deviz gratuit. ☎ 0749 651 436",
  keywords: [
    "acoperisuri Alba", "acoperișuri Alba", "montaj acoperis Alba Iulia",
    "reparatii acoperis Alba", "acoperisuri Alba Iulia", "tigla metalica Alba",
    "mansardari Alba Iulia", "dulgherie Alba", "hidroizolatii Alba",
    "acoperisuri Sebes", "acoperisuri Aiud", "acoperisuri Blaj", "acoperisuri Cugir",
  ],
  alternates: { canonical: "https://acoperisuri-stefan.ro/acoperisuri-alba" },
};

export default function AlbaPage() {
  return (
    <CountyLandingPage
      county="Alba"
      city="Alba Iulia"
      description="Echipa Acoperișuri Ștefan acoperă întregul județ Alba cu servicii profesionale de montaj și reparații acoperișuri. De la Alba Iulia la Sebeș, Aiud, Blaj și Cugir — montăm țiglă metalică BILKA & Lindab, țiglă ceramică, realizăm mansardări și dulgherie de calitate. Garanție scrisă și deviz gratuit."
      cities={["Alba Iulia", "Sebeș", "Aiud", "Blaj", "Cugir", "Câmpeni", "Ocna Mureș", "Teiuș", "Zlatna", "Abrud", "Ciugud", "Ighiu"]}
    />
  );
}
