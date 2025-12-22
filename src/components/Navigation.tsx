import companyLogo from "../assets/logo/logo.jpg";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ["home", "services", "about", "gallery", "contact"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "services", label: "Services" },
    { id: "about", label: "About Us" },
    { id: "gallery", label: "Gallery" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background shadow-md" : "bg-background/95 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">

          {/* LOGO + COMPANY NAME */}
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => scrollToSection("home")}
          >
            <div className="w-12 h-12 overflow-hidden bg-white shadow">
              <img
                src={companyLogo}
                alt="Company Logo"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex flex-col">
              <span className="font-bold text-foreground text-lg leading-tight">
                Multi Transways Logistics LLP.
              </span>
              <span className="font-bold text-foreground text-lg leading-tight">Unit of Bombay Andhra Roadways Pvt. Ltd.</span>
            </div>
          </div>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Button
  key={item.id}
  variant="ghost"
  onClick={() => scrollToSection(item.id)}
  className={`transition-colors text-lg font-bold ${
    activeSection === item.id
      ? "text-primary"
      : "text-foreground"
  }`}
>
  {item.label}
</Button>

            ))}
          </div>

          {/* MOBILE MENU BUTTON */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* MOBILE DROPDOWN */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 animate-fade-in">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  variant="ghost"
                  onClick={() => scrollToSection(item.id)}
                  className={`justify-start text-lg font-bold ${
  activeSection === item.id
    ? "text-primary bg-primary/10"
    : "text-foreground"
}`}

                >
                  {item.label}
                </Button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
