import type { Metadata } from "next";
import GalleryPageContent from "./GalleryPageContent";

export const metadata: Metadata = {
  title: "Galerie Lucrări Acoperișuri – Montaj Țiglă, Mansardări, Cabane Lemn",
  description:
    "Galeria noastră cu peste 200 de lucrări realizate: montaj acoperișuri țiglă metalică BILKA și Lindab, țiglă ceramică, mansardări locuibile, cabane din lemn, hidroizolații, reparații acoperișuri. Proiecte din Hunedoara, Cluj, Mureș, Alba, Sibiu, Bistrița-Năsăud.",
  alternates: {
    canonical: "https://acoperisuri-stefan.ro/galerie",
  },
};

export default function GaleriePage() {
  return <GalleryPageContent />;
}
