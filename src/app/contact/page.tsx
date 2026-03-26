import type { Metadata } from "next";
import ContactPageContent from "./ContactPageContent";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactează-ne pentru montaj și reparații acoperișuri. Telefon: 0749 651 436, WhatsApp disponibil. Lucrăm în Hunedoara, Mureș, Cluj, Alba, Sibiu, Bistrița-Năsăud.",
};

export default function ContactPage() {
  return <ContactPageContent />;
}
