import type { Metadata } from "next";
import CountyLandingPage from "@/components/CountyLandingPage";

export const metadata: Metadata = {
  title: "Montaj Acoperișuri Cluj-Napoca & Cluj – Țiglă Metalică, Reparații, Mansardări",
  description:
    "Montaj și reparații acoperișuri în Cluj-Napoca și județul Cluj. Țiglă metalică BILKA & Lindab, țiglă ceramică, dulgherie, mansardări, hidroizolații. Peste 20 ani experiență, echipă proprie de 10 meșteri. Garanție scrisă pe lucrare, deviz gratuit. ☎ 0749 651 436",
  keywords: [
    "acoperisuri Cluj", "acoperișuri Cluj", "montaj acoperis Cluj-Napoca",
    "reparatii acoperis Cluj", "acoperisuri Cluj-Napoca", "tigla metalica Cluj",
    "mansardari Cluj", "dulgherie Cluj", "hidroizolatii Cluj",
    "acoperis nou Cluj-Napoca", "firma acoperisuri Cluj",
    "acoperisuri Turda", "acoperisuri Dej", "acoperisuri Câmpia Turzii",
  ],
  alternates: { canonical: "https://acoperisuri-stefan.ro/acoperisuri-cluj" },
};

export default function ClujPage() {
  return (
    <CountyLandingPage
      county="Cluj"
      city="Cluj-Napoca"
      description="Oferim servicii profesionale de montaj și reparații acoperișuri în Cluj-Napoca și toate localitățile din județul Cluj. Echipa noastră de 10 meșteri cu experiență lucrează cu materiale premium BILKA & Lindab, asigurând calitatea și durabilitatea fiecărui acoperiș. Deviz gratuit, garanție scrisă."
      cities={["Cluj-Napoca", "Turda", "Dej", "Câmpia Turzii", "Gherla", "Huedin", "Apahida", "Florești", "Baciu", "Gilău", "Feleacu", "Borșa"]}
    />
  );
}
