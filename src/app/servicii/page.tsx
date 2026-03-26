import type { Metadata } from "next";
import ServicesPageContent from "./ServicesPageContent";

export const metadata: Metadata = {
  title: "Servicii",
  description:
    "Servicii complete de montaj și reparații acoperișuri: țiglă metalică BILKA & Lindab, țiglă ceramică, mansardări, hidroizolații, sisteme pluviale, cabane din lemn. Hunedoara, Mureș, Cluj, Alba, Sibiu, Bistrița-Năsăud.",
};

export default function ServiciiPage() {
  return <ServicesPageContent />;
}
