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
import cata from "../../images/catamaransus.webp";
import night from "../../images/cabañalgood.webp";

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
        "Explore the heart of the city, Roman ruins and the authentic local lifestyle.",
      highlight: "Lunch included ",
    },
    {
      title: "Gay Beach Experience",
      duration: "5 Hours",
      icon: Sun,
      image: gbeach,
      description:
        "Expeience Valencia´s gay beach with local hosts, beach vibes a fun social beach day during the gay games surrounded by international travelers and Mediterranean lifestyle.",
      highlight: "Transfers included",
    },
    {
      title: "Tapas & Wine",
      duration: "3 Hours",
      icon: Wine,
      image: tapas,
      description:
        "Enjoy tapas, wine and Mediterranean atmosphere arounw the Central Market and El Carmen. The experience finishes in one of the favorite LGBTQ+ friendly venues in the historic center.",
      highlight: "3 local venues",
    },
    {
      title: "LGBTQ+ Pub Crawl",
      duration: "5 Hours",
      icon: Moon,
      image: gpub,
      description:
        "Discover Valencia's LGBTQ+ night life through Rusafa and El Carmen together with local hosts and new friends. Hiden bars, social spots, great atmosphere, and optional late-night disco entrance",
      highlight: "+ 50€ disco entrance",
    },
    {
      title: "Bike Experience",
      duration: "4 Hours",
      icon: Bike,
      image: bike,
      description:
        "Bike from Valencia’s historic center to the beach while discovering local neighborhoods and Mediterranean lifestyle.Includes stops along the route and lunch in a local restaurant by the beach.",
      highlight: "Scenic route",
    },
    {
      title: "Tuk Tuk Tour",
      duration: "3 Hours",
      icon: Car,
      image: tuk,
      description:
        "Explore Valencia by tuk tuk through iconic neighborhoods, hidden local corners, and Mediterranean lifestyle spots.A relaxed and social experience full of local stories, atmosphere, and insider recommendations.",
      highlight: "Private groups",
    },
    {
      title: "Catamaran Sunset",
      duration: "3 Hours",
      icon: Sailboat,
      image: cata,
      description:
        "Enjoy Valencia’s sunset from the sea with music, drinks, Mediterranean vibes, and great atmosphere.  One of the most iconic and relaxing experiences during the Gay Games.",
      highlight: "Drinks included",
    },
    {
      title: "Cabañal Night Experience",
      duration: "4 Hours",
      icon: Utensils,
      image: night,
      description:
        "Discover Valencia’s seaside nightlife through local bars, restaurants, and Mediterranean atmosphere in Cabañal.The evening finishes in one of our favorite LGBTQ+ friendly venues by the beach.",
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
        className="absolute inset-0 h-full w-full object-contain p-2 transition-transform duration-700 group-hover:scale-105"
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
          <span className="text-primary font-bold text-sm uppercase tracking-[0.3em]">
            Available Experiences
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-foreground mt-2 mb-4 uppercase italic">
            Mediterranean Lifestyle
          </h2>
          <div className="flex items-center justify-center gap-2 text-muted-foreground animate-bounce mt-4">
            <MousePointer2 size={16} className="text-primary" />
            <p className="text-[10px] font-black uppercase tracking-[0.2em]">
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
