import type { Metadata } from "next";
import CountyLandingPage from "@/components/CountyLandingPage";

export const metadata: Metadata = {
  title: "Montaj Acoperișuri Sibiu – Țiglă Metalică BILKA & Lindab, Reparații, Mansardări",
  description:
    "Montaj și reparații acoperișuri în Sibiu și județul Sibiu. Țiglă metalică BILKA & Lindab, țiglă ceramică, dulgherie, mansardări, hidroizolații. 20+ ani experiență, 200+ lucrări. Garanție scrisă, echipă proprie, deviz gratuit. ☎ 0749 651 436",
  keywords: [
    "acoperisuri Sibiu", "acoperișuri Sibiu", "montaj acoperis Sibiu",
    "reparatii acoperis Sibiu", "tigla metalica Sibiu", "mansardari Sibiu",
    "dulgherie Sibiu", "hidroizolatii Sibiu", "acoperis nou Sibiu",
    "acoperisuri Medias", "acoperisuri Cisnadie", "acoperisuri Avrig",
  ],
  alternates: { canonical: "https://acoperisuri-stefan.ro/acoperisuri-sibiu" },
};

export default function SibiuPage() {
  return (
    <CountyLandingPage
      county="Sibiu"
      city="Sibiu"
      description="Acoperișuri Ștefan oferă servicii complete de montaj și reparații acoperișuri în municipiul Sibiu și toate localitățile din județ. Montăm țiglă metalică BILKA & Lindab, țiglă ceramică, realizăm mansardări locuibile și hidroizolații profesionale. Peste 200 de lucrări finalizate cu garanție scrisă."
      cities={["Sibiu", "Mediaș", "Cisnădie", "Avrig", "Agnita", "Dumbrăveni", "Tălmaciu", "Copșa Mică", "Ocna Sibiului", "Șelimbăr", "Cristian", "Păltiniș"]}
    />
  );
}
