import { Button } from "./ui/button";
import heroImage from "@/assets/hero-truck.jpg";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="Multi Transways Logistics" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(25_95%_53%/_0.75)] via-[hsl(25_95%_40%/_0.55)] to-transparent"></div>

      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center animate-fade-in">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
          Your one stop solution for
          <br />
          freight transportation
        </h1>
        <p className="text-xl md:text-2xl text-primary-foreground/90 mb-12 max-w-2xl mx-auto">
          Trusted logistics partner with 25+ years of experience in chemical, ODC, and specialized cargo transportation
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            onClick={() => scrollToSection("contact")}
            className="bg-background text-primary hover:bg-background/90 shadow-lg text-lg px-8 py-6 transition-transform hover:scale-105"
          >
            Contact Us
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollToSection("services")}
            className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8 py-6 transition-all hover:scale-105"
          >
            Our Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
