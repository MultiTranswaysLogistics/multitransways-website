import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";

import img1 from "@/assets/training/training-1.jpg";
import img2 from "@/assets/training/training-2.jpg";
import img3 from "@/assets/training/training-3.jpg";
import img7 from "@/assets/training/training-7.jpg";
import img8 from "@/assets/training/training-8.jpg";
import img9 from "@/assets/training/training-9.jpg";
import img12 from "@/assets/training/training-12.jpg";
import img14 from "@/assets/training/training-14.jpg";
import img16 from "@/assets/training/training-16.jpg";
import img17 from "@/assets/training/training-17.jpg";
import img18 from "@/assets/training/training-18.jpg";
import img19 from "@/assets/training/training-19.jpg";
import img20 from "@/assets/training/training-20.jpg";
import img21 from "@/assets/training/training-21.jpg";
import img22 from "@/assets/training/training-22.jpg";
import img24 from "@/assets/training/training-24.jpg";
import img25 from "@/assets/training/training-25.jpg";

const trainingImages = [
  { src: img1, label: "PPE & safety gear briefing" },
  { src: img2, label: "Pre-loading safety toolbox talk" },
  { src: img7, label: "Training employees on proper PPE usage during safety drills" },
  { src: img12, label: "Live Fire Extinguisher Training Demonstration" },
  { src: img16, label: "Chemical Spill Response & Neutralization Training" },
  { src: img18, label: "First Aid & Casualty Handling Training Session" },
  { src: img21, label: "Life-Saving CPR Practice Session" },
  { src: img3, label: "Night operation safety briefing" },
  { src: img8, label: "Safety training session with a fire extinguisher" },
  { src: img9, label: "Hands-on Fire Extinguisher Training" },
  { src: img14, label: "Practical Chemical Spill Control Training" },
  { src: img17, label: "Practical Exercise: Chemical Spill Cleanup Procedure" },
  { src: img19, label: "First-aid demonstration: assessing an unconscious person before performing CPR" },
  { src: img20, label: "CPR chest-compression training conducted under expert supervision" },
  { src: img22, label: "Rescue breathing demonstration as part of CPR training" },
  { src: img24, label: "Assisting the trainee into a safe sitting position after CPR practice." },
  { src: img25, label: "Post-CPR recovery guidance and hydration during first-aid training" },
];

const TrainingDrillsSection = () => {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  const previewImages = trainingImages.slice(0, 7);

  return (
    <section id="training" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Heading + safety text */}
        <div className="max-w-5xl mx-auto mb-16 text-center md:text-left animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Safety & Training Measures for Haz-Cargo
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto md:mx-0 mb-6" />
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            At Multi Transways Logistics, safety is not a checkbox – it is a non-negotiable part of
            every movement. We operate with strict SOPs for hazardous and sensitive cargo,
            covering PPE usage, route risk assessment, loading & unloading supervision, emergency
            response and documentation.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            Every driver, helper and ground staff member undergoes periodic classroom training and
            on-ground drills. Our teams are trained to handle chemical spills, leaks, fire situations,
            tanker operations and ODC cargo movement in line with client EHS guidelines and
            statutory norms.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            The drill photos below showcase our real training sessions conducted at our plants,
            yards and terminals, ensuring that safety is embedded in our culture – not just on paper.
          </p>
        </div>

        {/* Preview grid */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6 text-center md:text-left">
            Safety & Training Drill Gallery
          </h3>

          <div className="grid gap-4 md:gap-6 md:grid-cols-4">
            {previewImages.map((img, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setIsGalleryOpen(true)}
                className="group relative overflow-hidden rounded-xl bg-card shadow-md hover:shadow-xl transition-all duration-500"
              >
                <img
                  src={img.src}
                  alt={img.label}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-40 md:h-48 lg:h-52 object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* 🔥 ORANGE GRADIENT (fixed) */}
                <div
                  className="
                    absolute inset-0 
                    bg-gradient-to-t 
                    from-primary/90 
                    via-primary/40 
                    to-transparent 
                    opacity-0 
                    group-hover:opacity-100 
                    transition-opacity 
                    duration-500
                  "
                />

                <div className="absolute bottom-3 left-3 right-3 text-left">
                  <p className="text-xs font-semibold text-white uppercase tracking-wide">
                    Safety Drill
                  </p>
                  <p className="text-sm md:text-base font-semibold text-white line-clamp-2">
                    {img.label}
                  </p>
                </div>
              </button>
            ))}

            {/* See more */}
            <button
              type="button"
              onClick={() => setIsGalleryOpen(true)}
              className="flex flex-col items-center justify-center rounded-xl border border-dashed border-primary/60 bg-secondary/40 text-center p-4 md:p-6 hover:bg-primary/10 hover:border-primary shadow-inner transition-all duration-300"
            >
              <div className="text-4xl font-bold text-primary mb-2">+{trainingImages.length - 7}</div>
              <p className="font-semibold text-foreground mb-1">
                See more safety drills
              </p>
              <p className="text-xs text-muted-foreground max-w-[14rem]">
                Click to view all {trainingImages.length} training & safety drill photos in detail.
              </p>
            </button>
          </div>
        </div>
      </div>

      {/* FULL GALLERY POPUP */}
      <Dialog open={isGalleryOpen} onOpenChange={setIsGalleryOpen}>
        <DialogContent className="max-w-6xl max-h-[85vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Safety & Training Drill Gallery</DialogTitle>
            <DialogDescription>
              A detailed view of our safety, compliance and emergency response training activities.
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-4 md:gap-6 md:grid-cols-3">
            {trainingImages.map((img, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl bg-card shadow-md hover:shadow-xl transition-all duration-500"
              >
                <img
                  src={img.src}
                  alt={img.label}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-40 md:h-48 lg:h-52 object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* 🔥 ORANGE GRADIENT (popup version) */}
                <div
                  className="
                    absolute inset-0 
                    bg-gradient-to-t 
                    from-primary/90 
                    via-primary/40 
                    to-transparent 
                    opacity-0 
                    group-hover:opacity-100 
                    transition-opacity 
                    duration-500
                  "
                />

                <div className="absolute bottom-3 left-3 right-3 text-left">
                  <p className="text-[11px] font-semibold text-white uppercase tracking-wide">
                    Safety Drill #{index + 1}
                  </p>
                  <p className="text-sm font-semibold text-white line-clamp-2">
                    {img.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default TrainingDrillsSection;
