"use client";

import { useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import {
  Clock,
  Sun,
  Wine,
  Bike,
  Car,
  Sailboat,
  Moon,
  Utensils,
  ChevronLeft,
  ChevronRight,
  MousePointer2,
} from "lucide-react";
import { cn } from "../../lib/utils";

// Imágenes
import vlch from "../../images/toursus.webp";
import gbeach from "../../images/beachgood.webp";
import gpub from "../../images/pubsus.webp";
import tapas from "../../images/pubcambioojalafinal.webp";
import bike from "../../images/biketoursus.png";
import tuk from "../../images/tuktuksus.webp";
import cata from "../../images/catamaranestour.webp";
import night from "../../images/cañalestour.webp";

interface Experience {
  title: string;
  duration: string;
  icon: any;
  image: string;
  description: string;
  highlight: string;
}

export function ExperiencesSection() {
  const autoplayRef = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false }),
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { align: "start", loop: true, skipSnaps: false },
    [autoplayRef.current],
  );

  const experiences: Experience[] = [
    {
      title: "Valencia Historic Tour",
      duration: "4 Hours",
      icon: Sun,
      image: vlch,
      description:
        "Together, we will discover Valencia from our office in El Carmen, exploring hidden streets, local atmosphere, and the historic center before enjoying a traditional Valencian paella lunch.",
      highlight: "Lunch included",
    },
    {
      title: "Gay Beach Experience",
      duration: "5 Hours",
      icon: Sun,
      image: gbeach,
      description:
        "Together, we will escape to Valencia’s gay beach located just 20 minutes from the city center. Includes: Local hosts, Transfers, Restaurant lunch and afternoon vibes with plenty of new friends.",
      highlight: "Transfers included",
    },
    {
      title: "Tapas & Wine",
      duration: "3 Hours",
      icon: Wine,
      image: tapas,
      description:
        "Together, we will discover Valencia through tapas, wine, and Mediterranean lifestyle while visiting hidden spots around the Central Market area and El Carmen neighborhood.",
      highlight: "3 local venues",
    },
    {
      title: "LGBTQ+ Pub Crawl",
      duration: "5 Hours",
      icon: Moon,
      image: gpub,
      description:
        "Together, we will discover Valencia’s best LGBTQ+ nightlife areas in Ruzafa and El Carmen. A social nightlife experience with local friends. Optional: Disco entrance (+€50).",
      highlight: "+ 50€ disco entrance",
    },
    {
      title: "Bike Experience",
      duration: "4 Hours",
      icon: Bike,
      image: bike,
      description:
        "Together, we will bike from Valencia’s historic center to the beach while discovering Mediterranean neighborhoods, City of Arts and Sciences, and the authentic lifestyle.",
      highlight: "Scenic route",
    },
    {
      title: "Tuk Tuk Tour",
      duration: "3 Hours",
      icon: Car,
      image: tuk,
      description:
        "Together, we will discover Valencia aboard our fun tuk tuk experience, one of the easiest and most enjoyable ways to explore the city and its most important neighborhoods. We will visit vibrant areas, Mediterranean lifestyle spots, iconic landmarks, and hidden local corners together with our local hosts in a relaxed and social atmosphere.",
      highlight: "Private groups",
    },
    {
      title: "Catamaran Sunset",
      duration: "3 Hours",
      icon: Sailboat,
      image: cata,
      description:
        "Together, we will sail along Valencia’s coastline during sunset while enjoying music, drinks, sea breeze, and Mediterranean atmosphere. A true iconic experience.",
      highlight: "Drinks included",
    },
    {
      title: "Cabañal Night Experience",
      duration: "4 Hours",
      icon: Utensils,
      image: night,
      description:
        "Together, we will discover the nightlife atmosphere of Cabañal, Valencia’s historic fishermen’s neighborhood and one of the trendiest areas in the city today. We will enjoy tapas, local bars, Mediterranean atmosphere, and hidden local spots before finishing the evening in one of our favorite LGBTQ+ friendly venues in the city.",
      highlight: "Dinner included",
    },
  ];

  // Componente de Card optimizado (Sin icono y con reloj abajo)
  const ExperienceCard = ({
    exp,
    className,
  }: {
    exp: Experience;
    className?: string;
  }) => (
    <div
      className={cn(
        "group relative overflow-hidden rounded-3xl border border-border  transition-all duration-500 shadow-md",
        className,
      )}
    >
      <img
        src={exp.image}
        alt={exp.title}
        className="absolute inset-0 h-full w-full object-fill transition-transform duration-700 group-hover:scale-110"
      />

      {/* Estado Inicial */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/1 to-transparent opacity-100 group-hover:opacity-0 transition-opacity duration-500" />
      <div className="absolute bottom-6 left-6 right-6 transition-all duration-500 group-hover:translate-y-10 group-hover:opacity-0">
        <h3 className="text-xl font-bold text-white uppercase tracking-tight drop-shadow-2xl italic">
          {exp.title}
        </h3>
      </div>

      {/* Estado Hover */}
      <div className="absolute inset-0 bg-primary/95 p-6 flex flex-col opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out overflow-y-auto scrollbar-none">
        <h3 className="text-lg font-black text-white mb-2 uppercase leading-tight shrink-0 italic">
          {exp.title}
        </h3>

        <p className="text-white/95 text-xs md:text-sm mb-6 leading-relaxed font-medium">
          {exp.description}
        </p>

        {/* Footer del Hover: Reloj y Highlight juntos abajo */}
        <div className="mt-auto shrink-0 flex items-center justify-between gap-2">
          <div className="bg-white text-muted text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-tighter shadow-xl">
            {exp.highlight}
          </div>
          <span className="text-[10px] font-bold text-white bg-muted  px-3 py-1.5 rounded-full flex items-center gap-1 backdrop-blur-md">
            <Clock size={12} /> {exp.duration}
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <section id="experiences" className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-muted font-bold text-sm uppercase tracking-[0.3em]">
            Available Experiences
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-foreground mt-2 mb-4 uppercase italic">
            Mediterranean Lifestyle
          </h2>
        </div>

        {/* MOBILE CAROUSEL */}
        <div className="md:hidden">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {experiences.map((exp) => (
                <div key={exp.title} className="flex-[0_0_100%] min-w-0 px-2">
                  <ExperienceCard exp={exp} className="h-[450px]" />
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={() => emblaApi?.scrollPrev()}
              className="p-2 rounded-full bg-muted hover:bg-primary transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => emblaApi?.scrollNext()}
              className="p-2 rounded-full bg-muted hover:bg-primary transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* DESKTOP BENTO GRID */}
        <div className="hidden md:grid grid-cols-4 gap-4 auto-rows-[300px]">
          <ExperienceCard
            exp={experiences[0]}
            className="md:col-span-2 md:row-span-2"
          />
          <ExperienceCard
            exp={experiences[1]}
            className="md:col-span-2 md:row-span-1"
          />
          <ExperienceCard
            exp={experiences[2]}
            className="md:col-span-1 md:row-span-1"
          />
          <ExperienceCard
            exp={experiences[3]}
            className="md:col-span-1 md:row-span-1"
          />
          <ExperienceCard
            exp={experiences[4]}
            className="md:col-span-1 md:row-span-1"
          />
          <ExperienceCard
            exp={experiences[5]}
            className="md:col-span-1 md:row-span-1"
          />
          <ExperienceCard
            exp={experiences[6]}
            className="md:col-span-2 md:row-span-1"
          />
          <ExperienceCard
            exp={experiences[7]}
            className="md:col-span-4 md:row-span-1"
          />
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground text-sm">
            Can't find what you're looking for?{" "}
            <span className="text-primary font-bold underline cursor-pointer decoration-2 underline-offset-4">
              Let's build your custom plan.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
