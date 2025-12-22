import { useState } from "react";
import { ChevronLeft, ChevronRight, FileText } from "lucide-react";

// 👉 Replace these imports with your actual images / filenames
// Put your files in: src/assets/certificates/
import certificateMain from "@/assets/certificates/BASF Training Certificate.jpg";
import policy1 from "@/assets/certificates/Safety Policy.jpg";
import policy2 from "@/assets/certificates/Security Policy.jpg";
import policy3 from "@/assets/certificates/Quality Policy.jpg";
import policy4 from "@/assets/certificates/Drugs And Alcohol Policy.jpg";
import policy5 from "@/assets/certificates/Spill Prevention And Control Policy.jpg";
import policy6 from "@/assets/certificates/Clean Up And Disposal Policy.jpg";

type Slide = {
  title: string;
  type: "Certificate" | "Policy";
  description: string;
  image: string;
};

const slides: Slide[] = [
  {
    type: "Certificate",
    title: "BASF Logistics Safety & Behavioral-Based Training Certificate",
    description:
      "This certificate acknowledges that sister concern company Bombay Andhra Roadways Pvt. Ltd. successfully completed BASF’s Logistics Safety and Behavioral-Based Training Workshop conducted in May 2025. The certification reflects our commitment to continuous improvement in logistics safety, compliance, and industry best practices.",
    image: certificateMain,
  },
  {
    type: "Policy",
    title: "Company Safety Policy",
    description:
      "This policy outlines our commitment to safe logistics operations. It ensures the secure delivery of materials, promotes a healthy working environment, mandates statutory compliance for all vehicles, prioritizes eco-friendly transportation practices, and requires regular inspection of vehicle health and mechanical conditions.",
    image: policy1,
  },
  {
    type: "Policy",
    title: "Company Security Policy",
    description:
      "This policy highlights our commitment to ensuring the security of our drivers, staff, and vehicles—considered our most valuable operational assets. It outlines the procedures we follow for vehicle tracking, communication discipline, route safety compliance, and daily reporting to minimize risks and maintain secure logistics operations.",
    image: policy2,
  },
  {
    type: "Policy",
    title: "Company Quality Policy",
    description:
      "Our Quality Policy outlines our commitment to delivering goods safely, on time, and with consistent reliability. It emphasizes providing efficient service at fair prices, deploying trained and responsible drivers, maintaining effective communication with customers through route tracking, and ensuring all vehicles remain in excellent working condition for every transportation assignment.",
    image: policy3,
  },
  {
    type: "Policy",
    title: "Company Drugs and Alcohol Policy",
    description:
      "Our Drugs and Alcohol Policy ensures that all drivers remain sober, alert, and fully responsible while operating company vehicles. Supervisors verify that no driver has consumed alcohol or drugs before dispatch, and regular route check-ins help monitor driver condition. Smoking inside the cabin is strictly prohibited. If any driver is found using alcohol or drugs, immediate replacement and rehabilitation efforts are initiated—continued violation results in termination.",
    image: policy4,
  },
  {
    type: "Policy",
    title: "Company Spill Prevention and Control Policy",
    description:
      "Our Spill Prevention and Control Policy ensures that all vehicles and cargo are inspected thoroughly before loading to avoid leakage, contamination, or unsafe conditions. Supervisors verify vehicle cleanliness, drum sealing, and proper packing. In case of any spill during loading or transit, trained staff immediately contain it using sand or protective equipment, collect the material safely, and deliver it to the designated location. This policy ensures safe handling of hazardous materials and prevents risk to the environment, public, and operational personnel.",
    image: policy5,
  },
  {
    type: "Policy",
    title: "Company Clean-Up and Disposal Policy",
    description:
      "Our Clean-Up and Disposal Policy ensures that all vehicles are thoroughly cleaned, inspected, and maintained before and after every operation. Supervisors verify vehicle hygiene, remove foreign objects, and ensure that no hazardous residues remain. In case of chemical leakage inside the vehicle or on the road, the spill is immediately covered with sand, collected using PPE, and safely transferred into designated containers for proper disposal. We also responsibly dispose of old tyres, damaged parts, and scrap materials through authorized vendors to maintain a safe, clean, and hazard-free work environment.",
    image: policy6,
  },
];

const CertificatesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentSlide = slides[currentIndex];

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const goPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section id="certificates" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Certificates & Policies
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6" />
          <p className="text-lg text-muted-foreground">
            Our certifications and company policies on safety, compliance and quality
            reflect the standards we follow in every movement of your cargo.
          </p>
        </div>

        {/* Slider */}
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
          {/* Image + arrows */}
          <div className="relative bg-card rounded-xl shadow-lg overflow-hidden animate-slide-in-left">
            <div className="relative">
              <img
                src={currentSlide.image}
                alt={currentSlide.title}
                loading="lazy"
                className="w-full h-[380px] md:h-[440px] object-contain bg-muted"
              />

              {/* Left Arrow */}
              <button
                type="button"
                onClick={goPrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background rounded-full p-2 shadow-md transition-transform hover:scale-105"
                aria-label="Previous policy or certificate"
              >
                <ChevronLeft className="w-6 h-6 text-foreground" />
              </button>

              {/* Right Arrow */}
              <button
                type="button"
                onClick={goNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background rounded-full p-2 shadow-md transition-transform hover:scale-105"
                aria-label="Next policy or certificate"
              >
                <ChevronRight className="w-6 h-6 text-foreground" />
              </button>

              {/* Small badge at top-left */}
              <div className="absolute top-3 left-3 inline-flex items-center gap-2 bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold shadow-md">
                <FileText className="w-3 h-3" />
                <span>{currentSlide.type}</span>
              </div>
            </div>

            {/* Slide indicator dots */}
            <div className="flex items-center justify-center gap-2 py-3 bg-card/80">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    idx === currentIndex ? "bg-primary w-6" : "bg-muted"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Text content */}
          <div className="animate-slide-in-right">
            <p className="text-sm font-semibold text-primary mb-2 uppercase tracking-wide">
              {currentSlide.type}
            </p>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              {currentSlide.title}
            </h3>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6 text-justify">
              {currentSlide.description}
            </p>

            <div className="inline-flex items-center gap-3 text-sm text-muted-foreground">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-semibold">
                {currentIndex + 1}
              </span>
              <span>
                Document {currentIndex + 1} of {slides.length}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
