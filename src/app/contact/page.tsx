import type { Metadata } from "next";
import ContactPageContent from "./ContactPageContent";

export const metadata: Metadata = {
  title: "Contact – Montaj Acoperișuri Hunedoara, Cluj, Mureș, Alba, Sibiu",
  description:
    "Contactează Acoperișuri Ștefan pentru montaj și reparații acoperișuri. Telefon: 0749 651 436, WhatsApp disponibil. Deviz gratuit, fără obligații. Lucrăm în Hunedoara, Deva, Cluj-Napoca, Târgu-Mureș, Alba Iulia, Sibiu, Bistrița. Program: Luni-Sâmbătă 07:00-19:00.",
  alternates: {
    canonical: "https://acoperisuri-stefan.ro/contact",
  },
};

export default function ContactPage() {
  return <ContactPageContent />;
}
