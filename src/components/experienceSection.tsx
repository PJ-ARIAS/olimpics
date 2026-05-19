"use client";

import { useRef, useEffect } from "react";
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
import tapas from "../../images/pug.webp";
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
  // highlight2?: string;
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
      highlight: "Lunch included ",
    },
    {
      title: "Gay Beach Experience",
      duration: "5 Hours",
      icon: Sun,
      image: gbeach,
      description:
        "Together, we will escape to Valencia’s gay beach located just 20 minutes from the city center. Before heading to the beach, we will enjoy lunch together in a local restaurant  close to the beach  and then spend the afternoon surrounded by good vibes, Mediterranean atmosphere, and plenty of new friends.  Includes: Local hosts Transfers Restaurant lunch",
      highlight: "Transfers included",
    },
    {
      title: "Tapas & Wine",
      duration: "3 Hours",
      icon: Wine,
      image: tapas,
      description:
        "Together, we will discover Valencia through tapas, wine, local atmosphere, and Mediterranean lifestyle while visiting hidden spots around the Central Market area, finishing the experience in one of our favorite LGBTQ+ friendly venues in El Carmen neighborhood.",
      highlight: "3 local venues",
    },
    {
      title: "LGBTQ+ Pub Crawl",
      duration: "5 Hours",
      icon: Moon,
      image: gpub,
      description:
        "Together, we will discover Valencia’s best LGBTQ+ nightlife areas in Ruzafa and El Carmen alongside local hosts, exploring bars, hidden spots, and the city’s authentic nightlife atmosphere during the Gay Games. More than a pub crawl, this is a social local nightlife experience with local friends. Optional Add-On: Late-night disco entrance after 1 AM (+€50)",
      highlight: "+ 50€ disco entrance",
    },
    {
      title: "Bike Experience",
      duration: "4 Hours",
      icon: Bike,
      image: bike,
      description:
        "Together, we will bike from Valencia’s historic center to the beach while discovering Mediterranean neighborhoods, hidden local spots, the City of Arts and Sciences, and the authentic lifestyle of the city with our friendly local guide.",
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
        "Together, we will sail along Valencia’s coastline during sunset while enjoying music, drinks, sea breeze, and Mediterranean atmosphere. We will relax, socialize, take photos, and enjoy one of the most iconic experiences in Valencia. A true Mediterranean sunset experience during the Gay Games. We will have 2 exits during the games.",
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

  useEffect(() => {
    if (!emblaApi) return;
  }, [emblaApi]);

  // Componente Reutilizable para la Card
  const ExperienceCard = ({
    exp,
    className,
  }: {
    exp: Experience;
    className?: string;
  }) => (
    <div
      className={cn(
        "group relative overflow-hidden rounded-3xl border border-border bg-zinc-950 transition-all duration-500 shadow-md",
        className,
      )}
    >
      <img
        src={exp.image}
        alt={exp.title}
        className="absolute inset-0 h-full w-full object-fill   transition-transform duration-700 group-hover:scale-105"
      />

      {/* Overlay sutil para no interferir con la imagen completa */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-100 group-hover:opacity-0 transition-opacity duration-500" />

      {/* Título visible por defecto */}
      <div className="absolute bottom-6 left-6 right-6 transition-all duration-500 group-hover:translate-y-10 group-hover:opacity-0">
        <h3 className="text-xl font-bold text-white uppercase tracking-tight drop-shadow-2xl">
          {exp.title}
        </h3>
      </div>

      {/* Información al hacer Hover */}
      <div className="absolute inset-0 bg-primary/95 p-8 flex flex-col justify-end translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
        <div className="flex items-center justify-between mb-4">
          <div className="p-2 bg-white/20 rounded-lg">
            <exp.icon className="w-6 h-6 text-white" />
          </div>
          <span className="text-[10px] font-bold text-white bg-black/40 px-3 py-1 rounded-full flex items-center gap-1 backdrop-blur-md">
            <Clock size={12} /> {exp.duration}
          </span>
        </div>
        <h3 className="text-xl font-bold text-white mb-2 uppercase leading-tight">
          {exp.title}
        </h3>
        <p className="text-white/90 text-sm mb-4 line-clamp-4 leading-relaxed">
          {exp.description}
        </p>
        <div className="mt-auto self-start bg-white text-primary text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-tighter">
          {exp.highlight}
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
          <div className="flex items-center justify-center gap-2 text-muted-foreground animate-bounce mt-4">
            <MousePointer2 size={16} className="text-muted" />
            <p className="text-[12px] font-black uppercase tracking-[0.2em]">
              Hover to explore
            </p>
          </div>
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
              className="p-2 rounded-full bg-muted hover:bg-primary hover:text-white transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => emblaApi?.scrollNext()}
              className="p-2 rounded-full bg-muted hover:bg-primary hover:text-white transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* DESKTOP BENTO GRID */}
        <div className="hidden md:grid grid-cols-4 gap-4 auto-rows-[300px]">
          {/* Card Grande Vertical */}
          <ExperienceCard
            exp={experiences[0]}
            className="md:col-span-2 md:row-span-2"
          />
          {/* Card Ancha */}
          <ExperienceCard
            exp={experiences[1]}
            className="md:col-span-2 md:row-span-1"
          />
          {/* Cards Cuadradas */}
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
          {/* Card Ancha Final */}
          <ExperienceCard
            exp={experiences[6]}
            className="md:col-span-2 md:row-span-1"
          />
          <ExperienceCard
            exp={experiences[7]}
            className="md:col-span-4 md:row-span-1"
          />
        </div>

        {/* Footer Note */}
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
