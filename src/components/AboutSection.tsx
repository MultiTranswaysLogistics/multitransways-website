import { CheckCircle2, TruckIcon, Shield, Clock, Network, Award } from "lucide-react";
import directorAmit from "@/assets/director-amit.jpg";
import directorRohit from "@/assets/director-rohit.jpg";

const AboutSection = () => {
  const features = [
    { icon: Network, text: "Pan-India network with extensive coverage" },
    { icon: Award, text: "25+ years of industry experience" },
    { icon: Shield, text: "Reliability & safety as top priorities" },
    { icon: TruckIcon, text: "Specialised chemical & ODC handling expertise" },
    { icon: Clock, text: "Timely delivery with real-time tracking" },
  ];

  const directors = [
    {
      name: "Amit Agarwal",
      experience: "25 years experience",
      phone: "+91 9820626363",
      image: directorAmit,
    },
    {
      name: "Rohit Aggarwal",
      experience: "25 years experience",
      phone: "+91 9871201818",
      image: directorRohit,
    },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">

        {/* About Company */}
        <div className="max-w-4xl mx-auto text-center mb-20 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">About Us</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8" />
          <p className="text-lg text-muted-foreground leading-relaxed">
            Multi Transways Logistics is a leading freight transportation and logistics company with over 25 years of
            excellence in the industry. We specialize in handling complex logistics requirements including chemical
            transportation, ISO tank movements, and oversized cargo. Our commitment to safety, reliability, and
            customer satisfaction has made us the trusted partner for India's leading corporations.
          </p>
        </div>

        {/* Why Choose Us */}
        <div className="mb-20 animate-slide-up">
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">Why Choose Us</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 rounded-lg bg-secondary hover:bg-secondary/80 transition-all duration-300 hover:shadow-lg hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <p className="text-foreground font-medium mt-2">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Directors */}
        <div className="animate-slide-up">
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">Meet Our Directors</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {directors.map((director, index) => (
              <div
                key={director.name}
                className="group bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative overflow-hidden h-96 bg-muted flex items-center justify-center">
  <img
    src={director.image}
    alt={director.name}
    className="w-full h-full object-contain p-3 transition-transform duration-700 group-hover:scale-105"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
</div>


                <div className="p-8 bg-card">
                  <h4 className="text-2xl font-bold text-foreground mb-2">{director.name}</h4>
                  <p className="text-primary font-semibold mb-2">{director.experience}</p>

                  {/* CLICKABLE PHONE LINK */}
                  {director.phone && (
                    <a
                      href={`tel:${director.phone.replace(/\s+/g, "")}`}
                      className="text-foreground font-medium mb-2 hover:text-primary transition-colors inline-flex items-center gap-2"
                    >
                      📞 <span>{director.phone}</span>
                    </a>
                  )}

                  <p className="text-muted-foreground mt-2">
                    Leading with expertise and dedication to deliver world-class logistics solutions
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
