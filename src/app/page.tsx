import type { Metadata } from "next";
import HeroSlider from "@/components/HeroSlider";
import ServicesPreview from "@/components/ServicesPreview";
import RecentProjects from "@/components/RecentProjects";
import WhyChooseUs from "@/components/WhyChooseUs";
import DiscountCTA from "@/components/DiscountCTA";
import CoveredZones from "@/components/CoveredZones";
import Testimonials from "@/components/Testimonials";
import AboutPreview from "@/components/AboutPreview";
import QuickContactForm from "@/components/QuickContactForm";

export const metadata: Metadata = {
  title:
    "Montaj Acoperișuri și Reparații în Hunedoara, Cluj, Mureș, Alba, Sibiu | Acoperișuri Ștefan",
  description:
    "Montaj acoperișuri și reparații profesionale în Hunedoara, Cluj-Napoca, Târgu-Mureș, Alba Iulia, Sibiu, Bistrița. Țiglă metalică BILKA & Lindab, țiglă ceramică, dulgherie, mansardări, hidroizolații. 20+ ani experiență, 200+ lucrări, garanție scrisă. Deviz gratuit ☎ 0749 651 436",
  alternates: {
    canonical: "https://acoperisuri-stefan.ro",
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <ServicesPreview />
      <RecentProjects />
      <WhyChooseUs />
      <DiscountCTA />
      <CoveredZones />
      <Testimonials />
      <AboutPreview />
      <QuickContactForm />
    </>
  );
}
