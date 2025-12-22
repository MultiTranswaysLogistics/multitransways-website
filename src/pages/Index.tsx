import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ClientCarousel from "@/components/ClientCarousel";
import AboutSection from "@/components/AboutSection";
import CertificatesSection from "@/components/CertificatesSection";
import GallerySection from "@/components/GallerySection";
import ContactSection from "@/components/ContactSection";
import FloatingActions from "@/components/FloatingActions";
import Footer from "@/components/Footer";
import TrainingDrillsSection from "@/components/TrainingDrillsSection"; // ⬅️ NEW IMPORT

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <TrainingDrillsSection /> {/* ⬅️ NEW SECTION, right after Services */}
      <ClientCarousel />
      <AboutSection />
      <CertificatesSection />
      <GallerySection />
      <ContactSection />
      <FloatingActions />
      <Footer />
    </div>
  );
};

export default Index;
