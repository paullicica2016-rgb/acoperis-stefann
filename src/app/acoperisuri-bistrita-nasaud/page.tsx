import type { Metadata } from "next";
import CountyLandingPage from "@/components/CountyLandingPage";

export const metadata: Metadata = {
  title: "Montaj Acoperișuri Bistrița-Năsăud – Țiglă Metalică, Reparații, Mansardări",
  description:
    "Montaj și reparații acoperișuri în Bistrița și județul Bistrița-Năsăud. Țiglă metalică BILKA & Lindab, țiglă ceramică, dulgherie, mansardări, hidroizolații. 20+ ani experiență, garanție scrisă, deviz gratuit. ☎ 0749 651 436",
  keywords: [
    "acoperisuri Bistrita-Nasaud", "acoperișuri Bistrița-Năsăud", "montaj acoperis Bistrita",
    "reparatii acoperis Bistrita", "acoperisuri Bistrita", "acoperișuri Bistrița",
    "tigla metalica Bistrita", "mansardari Bistrita", "dulgherie Bistrita",
    "acoperisuri Nasaud", "acoperisuri Beclean", "acoperisuri Sangeorz-Bai",
  ],
  alternates: { canonical: "https://acoperisuri-stefan.ro/acoperisuri-bistrita-nasaud" },
};

export default function BistritaNasaudPage() {
  return (
    <CountyLandingPage
      county="Bistrița-Năsăud"
      city="Bistrița"
      description="Oferim servicii profesionale de montaj și reparații acoperișuri în Bistrița și toate localitățile din județul Bistrița-Năsăud. Echipa noastră lucrează cu materiale premium BILKA & Lindab, asigurând durabilitate și estetică. Garanție scrisă pe fiecare lucrare, deviz gratuit."
      cities={["Bistrița", "Năsăud", "Beclean", "Sângeorz-Băi", "Lechința", "Prundu Bârgăului", "Feldru", "Tiha Bârgăului", "Livezile", "Budești", "Josenii Bârgăului", "Dumitra"]}
    />
  );
}
