import serviceExport from "@/assets/service-export.jpg";
import serviceIsoTank from "@/assets/service-iso-tank.jpg";
import serviceChemical from "@/assets/service-chemical.jpg";
import serviceOdc from "@/assets/service-odc.jpg";

const services = [
  {
    title: "Export & Import Logistics",
    description:
      "Comprehensive international shipping solutions with end to end transportation. We handle your cargo from origin to destination with complete reliability and efficiency across borders.",
    image: serviceExport,
  },
  {
    title: "ISO Tank Movement",
    description:
      "Specialized transportation of liquid chemicals and gases in ISO tank containers. Our expert team ensures safe handling, proper documentation, and timely delivery of your temperature-sensitive cargo.",
    image: serviceIsoTank,
  },
  {
    title: "Chemical Packed Goods Transport",
    description:
      "Safe and compliant transportation of hazardous and non-hazardous chemicals. With certified handling procedures and trained professionals, we ensure your chemical goods reach their destination securely.",
    image: serviceChemical,
  },
  {
    title: "ODC (Over Dimension Cargo) Movement",
    description:
      "Expert handling of oversized and heavy cargo with specialized equipment. From industrial machinery to large structures, we provide route surveys, permits, and safe transportation for your ODC requirements.",
    image: serviceOdc,
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-background to-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Services</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Delivering excellence in logistics with comprehensive transportation solutions across India
          </p>
        </div>

        <div className="space-y-24">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-8 lg:gap-12 items-center animate-slide-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="w-full lg:w-1/2 group">
                <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-500 hover:scale-105">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>

              {/* Content */}
              <div className="w-full lg:w-1/2 space-y-4">
                <h3 className="text-3xl font-bold text-foreground">{service.title}</h3>
                <div className="w-16 h-1 bg-primary" />
                <p className="text-lg text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
