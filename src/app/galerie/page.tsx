import type { Metadata } from "next";
import GalleryPageContent from "./GalleryPageContent";

export const metadata: Metadata = {
  title: "Galerie",
  description:
    "Galeria noastră cu lucrări realizate: montaj acoperișuri, mansardări, cabane din lemn, hidroizolații și reparații. Peste 200 de proiecte finalizate în Transilvania.",
};

export default function GaleriePage() {
  return <GalleryPageContent />;
}
