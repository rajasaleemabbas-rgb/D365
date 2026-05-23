import HeroSection from "@/components/home/HeroSection";
import TrustSection from "@/components/home/TrustSection";
import ServicesGrid from "@/components/home/ServicesGrid";
import IndustriesSection from "@/components/home/IndustriesSection";
import ProcessSection from "@/components/home/ProcessSection";
import CaseStudiesSection from "@/components/home/CaseStudiesSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CTASection from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustSection />
      <ServicesGrid />
      <IndustriesSection />
      <ProcessSection />
      <CaseStudiesSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
