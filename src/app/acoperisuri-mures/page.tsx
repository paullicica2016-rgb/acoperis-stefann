import type { Metadata } from "next";
import CountyLandingPage from "@/components/CountyLandingPage";

export const metadata: Metadata = {
  title: "Montaj Acoperișuri Mureș & Târgu-Mureș – Țiglă Metalică, Reparații, Mansardări",
  description:
    "Montaj și reparații acoperișuri în Târgu-Mureș și județul Mureș. Țiglă metalică BILKA & Lindab, țiglă ceramică, dulgherie, mansardări, hidroizolații. 20+ ani experiență, 200+ lucrări finalizate. Garanție scrisă, deviz gratuit. ☎ 0749 651 436",
  keywords: [
    "acoperisuri Mures", "acoperișuri Mureș", "montaj acoperis Targu-Mures",
    "reparatii acoperis Mures", "acoperisuri Targu-Mures", "acoperișuri Târgu-Mureș",
    "tigla metalica Mures", "mansardari Mures", "dulgherie Mures",
    "acoperisuri Sighisoara", "acoperisuri Reghin", "acoperisuri Luduș",
  ],
  alternates: { canonical: "https://acoperisuri-stefan.ro/acoperisuri-mures" },
};

export default function MuresPage() {
  return (
    <CountyLandingPage
      county="Mureș"
      city="Târgu-Mureș"
      description="Acoperișuri Ștefan oferă servicii de montaj și reparații acoperișuri în Târgu-Mureș și toate localitățile din județul Mureș. Lucrăm cu țiglă metalică BILKA & Lindab, țiglă ceramică, realizăm mansardări și hidroizolații. Experiență de peste 20 de ani și peste 200 de lucrări finalizate."
      cities={["Târgu-Mureș", "Sighișoara", "Reghin", "Luduș", "Iernut", "Sovata", "Cristuru Secuiesc", "Sângeorgiu de Mureș", "Corunca", "Ungheni", "Ernei", "Band"]}
    />
  );
}
