import type { Metadata } from "next";
import ServicesPageContent from "./ServicesPageContent";

export const metadata: Metadata = {
  title: "Servicii Montaj Acoperișuri – Țiglă Metalică, Ceramică, Mansardări, Hidroizolații",
  description:
    "Servicii complete de montaj și reparații acoperișuri: țiglă metalică BILKA & Lindab, țiglă ceramică, dulgherie și mansardări locuibile, hidroizolații membrană bituminoasă, sisteme pluviale, cabane din lemn. Lucrăm în Hunedoara, Cluj, Mureș, Alba, Sibiu, Bistrița-Năsăud. Prețuri corecte, garanție scrisă.",
  alternates: {
    canonical: "https://acoperisuri-stefan.ro/servicii",
  },
};

export default function ServiciiPage() {
  return <ServicesPageContent />;
}
