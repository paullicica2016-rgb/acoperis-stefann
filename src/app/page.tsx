import HeroSlider from "@/components/HeroSlider";
import ServicesPreview from "@/components/ServicesPreview";
import RecentProjects from "@/components/RecentProjects";
import WhyChooseUs from "@/components/WhyChooseUs";
import DiscountCTA from "@/components/DiscountCTA";
import CoveredZones from "@/components/CoveredZones";
import Testimonials from "@/components/Testimonials";
import AboutPreview from "@/components/AboutPreview";
import QuickContactForm from "@/components/QuickContactForm";

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
