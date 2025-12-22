import { useState } from "react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import gallery7 from "@/assets/gallery-7.jpg";
import gallery8 from "@/assets/gallery-8.jpg";

const galleryItems = [
  { image: gallery1, title: "ODC Movement", description: "ODC Movement through XL tractor" },
  { image: gallery2, title: "ODC Movement", description: "Specialized movement of large industrial equipment mounted on a multi-axle trailer" },
  { image: gallery3, title: "Import Export Containers", description: "Container loading operation using a reach stacker for safe and efficient handling." },
  { image: gallery4, title: "Import Export Containers", description: "Safe and efficient movement of export container" },
  { image: gallery5, title: "ISO Tank Movement", description: "Safe and compliant transportation of an ISO chemical tanker," },
  { image: gallery6, title: "ISO Tank Movement", description: "A securely mounted ISO tank being transported on a multi-axle trailer." },
  { image: gallery7, title: "Transportation of Industrial Cable Reels", description: "Transporting heavy-duty cable reels securely on a flatbed trailer for industrial delivery." },
  { image: gallery8, title: "Industrial Tank Movement via Flatbed Trailer", description: "Multiple stainless-steel processing tanks safely mounted on a high-capacity flatbed trailer." },
];

const GallerySection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Gallery</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A glimpse into our operations, fleet, and commitment to excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer h-64 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div
                className={`absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/60 to-transparent flex flex-col justify-end p-6 transition-opacity duration-500 ${
                  hoveredIndex === index ? "opacity-100" : "opacity-0"
                }`}
              >
                <h3 className="text-primary-foreground font-bold text-xl mb-2">{item.title}</h3>
                <p className="text-primary-foreground/90 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
