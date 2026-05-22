"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Clock, ChevronLeft, ChevronRight, MousePointer2 } from "lucide-react";
import { cn } from "../../lib/utils";

// Imágenes
import vlch from "../../images/toursus.webp";
import gbeach from "../../images/beachgood.webp";
import gpub from "../../images/pubsus.webp";
import tapas from "../../images/pubcambioojalafinal.webp";
import bike from "../../images/biketoursus.png";
import tuk from "../../images/tuktuksus.webp";
import cata from "../../images/catamaranestour.webp";
import night from "../../images/cabanalcuadrado.webp";

const experiences = [
  {
    title: "Valencia Historic Tour",
    duration: "4 Hours",
    image: vlch,
    description:
      "Together, we will discover Valencia from our office in El Carmen, exploring hidden streets, local atmosphere, and the historic center before enjoying a traditional Valencian paella lunch.",
    highlight: "Lunch included",
  },
  {
    title: "Gay Beach Experience",
    duration: "5 Hours",
    image: gbeach,
    description:
      "Together, we will escape to Valencia’s gay beach located just 20 minutes from the city center. Before heading to the beach, we will enjoy lunch together in a local restaurant  close to the beach  and then spend the afternoon surrounded by good vibes, Mediterranean atmosphere, and plenty of new friends.  Includes: Local hosts Transfers Restaurant lunch",
    highlight: "Transfers included",
  },
  {
    title: "Tapas & Wine",
    duration: "3 Hours",
    image: tapas,
    description:
      "Together, we will discover Valencia through tapas, wine, local atmosphere, and Mediterranean lifestyle while visiting hidden spots around the Central Market area, finishing the experience in one of our favorite LGBTQ+ friendly venues in El Carmen neighborhood.",
    highlight: "3 local venues",
  },
  {
    title: "LGBTQ+ Pub Crawl",
    duration: "5 Hours",
    image: gpub,
    description:
      "Together, we will discover Valencia’s best LGBTQ+ nightlife areas in Ruzafa and El Carmen alongside local hosts, exploring bars, hidden spots, and the city’s authentic nightlife atmosphere during the Gay Games. More than a pub crawl, this is a social local nightlife experience with local friends. Optional Add-On: Late-night disco entrance after 1 AM (+€50)",
    highlight: "+ 50€ disco entrance",
  },
  {
    title: "Bike Experience",
    duration: "4 Hours",
    image: bike,
    description:
      "Together, we will bike from Valencia’s historic center to the beach while discovering Mediterranean neighborhoods, hidden local spots, the City of Arts and Sciences, and the authentic lifestyle of the city with our friendly local guide.",
    highlight: "Scenic route",
  },
  {
    title: "Tuk Tuk Tour",
    duration: "3 Hours",
    image: tuk,
    description:
      "Together, we will discover Valencia aboard our fun tuk tuk experience, one of the easiest and most enjoyable ways to explore the city and its most important neighborhoods. We will visit vibrant areas, Mediterranean lifestyle spots, iconic landmarks, and hidden local corners together with our local hosts in a relaxed and social atmosphere.",
    highlight: "Private groups",
  },
  {
    title: "Catamaran Sunset",
    duration: "3 Hours",
    image: cata,
    description:
      " Together, we will sail along Valencia’s coastline during sunset while enjoying music, drinks, sea breeze, and Mediterranean atmosphere. We will relax, socialize, take photos, and enjoy one of the most iconic experiences in Valencia. A true Mediterranean sunset experience during the Gay Games. We will have 2 exits during the games.",
    highlight: "Drinks included",
  },
  {
    title: "Cabañal Night",
    duration: "4 Hours",
    image: night,
    description:
      " Together, we will discover the nightlife atmosphere of Cabañal, Valencia’s historic fishermen’s neighborhood and one of the trendiest areas in the city today. We will enjoy tapas, local bars, Mediterranean atmosphere, and hidden local spots before finishing the evening in one of our favorite LGBTQ+ friendly venues in the city.",
    highlight: "Dinner included",
  },
];

export function ExperiencesSection() {
  const autoplayRef = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true }),
  );
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", skipSnaps: false },
    [autoplayRef.current],
  );
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi],
  );

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    const onSnap = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSnap);
    return () => {
      emblaApi.off("select", onSnap);
    };
  }, [emblaApi]);

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
              Explore our tours
            </p>
          </div>
        </div>

        {/* CAROUSEL */}
        <div className="relative group/carousel">
          <div className="overflow-hidden rounded-[2.5rem]" ref={emblaRef}>
            <div className="flex -ml-4 md:-ml-6">
              {" "}
              {/* Gutters correctos */}
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-4 md:pl-6"
                >
                  {/* CARD CONTAINER con overflow-hidden para la imagen */}
                  <div className="group/card relative h-[400px] w-full overflow-hidden rounded-[2.5rem] border border-border bg-zinc-950 shadow-xl">
                    {/* IMAGEN: object-cover evita el estiramiento y llena el contenedor */}
                    <img
                      src={exp.image}
                      alt={exp.title}
                      className="absolute inset-0 w-full h-full object-fill transition-transform duration-1000 group-hover/card:scale-110"
                    />

                    {/* Overlay inicial (Degradado para legibilidad) */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-100 group-hover/card:opacity-0 transition-opacity duration-500" />

                    {/* Título en reposo */}
                    <div className="absolute bottom-8 left-8 right-8 z-10 transition-all duration-500 group-hover/card:translate-y-10 group-hover/card:opacity-0">
                      <h3 className="text-2xl font-black text-white uppercase italic tracking-tighter drop-shadow-lg">
                        {exp.title}
                      </h3>
                    </div>

                    {/* Estado HOVER (Rojo TBOV) */}
                    <div className="absolute inset-0 bg-primary/95 p-8 flex flex-col opacity-0 group-hover/card:opacity-100 transition-all duration-500 ease-in-out z-20 overflow-y-auto scrollbar-none">
                      <h3 className="text-2xl font-black text-white mb-4 uppercase italic leading-tight">
                        {exp.title}
                      </h3>
                      <p className="text-white/95 text-sm md:text-base mb-6 leading-relaxed font-medium">
                        {exp.description}
                      </p>

                      <div className="mt-auto flex items-center justify-between gap-2">
                        <div className="bg-white text-primary text-[10px] font-black px-4 py-2 rounded-full uppercase tracking-tighter shadow-lg">
                          {exp.highlight}
                        </div>
                        <span className="text-[10px] font-bold text-white bg-black/40 px-3 py-2 rounded-full flex items-center gap-1 backdrop-blur-md border border-white/10">
                          <Clock size={12} /> {exp.duration}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Controles de navegación */}
          <button
            onClick={scrollPrev}
            className="absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white text-primary shadow-xl flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 transition-all z-30 hover:bg-zinc-100 active:scale-90"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={scrollNext}
            className="absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white text-primary shadow-xl flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 transition-all z-30 hover:bg-zinc-100 active:scale-90"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Dots de navegación */}
        <div className="flex justify-center gap-3 mt-12">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={cn(
                "h-2 transition-all duration-300 rounded-full",
                index === selectedIndex
                  ? "w-10 bg-primary"
                  : "w-2 bg-muted-foreground/30",
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
