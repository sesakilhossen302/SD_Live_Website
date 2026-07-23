import Hero from "@/components/Hero";
import FeaturesGrid from "@/components/FeaturesGrid";
import StatsSection from "@/components/StatsSection";
import DownloadSection from "@/components/DownloadSection";
import AboutSection from "@/components/AboutSection";
import FAQSection from "@/components/FAQSection";
import PrivacySummarySection from "@/components/PrivacySummarySection";
import ContactSection from "@/components/ContactSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturesGrid />
      <StatsSection />
      <AboutSection />
      <FAQSection />
      <PrivacySummarySection />
      <ContactSection />
      <DownloadSection />
    </>
  );
}
