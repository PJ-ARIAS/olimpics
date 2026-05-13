"use client";

import { useRef, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import {
  Clock,
  Utensils,
  Sun,
  Wine,
  Bike,
  Car,
  Sailboat,
  Moon,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export function ExperiencesSection() {
  const autoplayRef = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true }),
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: "start",
      loop: true,
      skipSnaps: false,
    },
    [autoplayRef.current],
  );

  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(false);

  const prevButtonRef = useRef<HTMLButtonElement>(null);
  const nextButtonRef = useRef<HTMLButtonElement>(null);

  const experiences = [
    {
      title: "Valencia Historic & Lifestyle Tour",
      duration: "4 Hours",
      icon: Sun,
      description:
        "Explore the historic center, Roman Valencia, hidden streets, and Mediterranean lifestyle areas. Ends with traditional Valencian paella lunch.",
      highlight: "Paella included",
    },
    {
      title: "Gay Beach Lifestyle Experience",
      duration: "5 Hours",
      icon: Sun,
      description:
        "Escape to Valencia's gay beach with lunch in a typical local restaurant. Spend the afternoon surrounded by good vibes and Mediterranean lifestyle.",
      highlight: "Transfers + Lunch included",
    },
    {
      title: "LGBTQ+ Pub Crawl & Social Circuit",
      duration: "5 Hours",
      icon: Moon,
      description:
        "Explore Valencia's best LGBTQ+ nightlife in Ruzafa and El Carmen. Discover bars, hidden venues, and authentic nightlife atmosphere.",
      highlight: "Optional: Late-night disco +50",
    },
    {
      title: "Tapas & Wine Experience",
      duration: "3 Hours",
      icon: Wine,
      description:
        "Discover Valencia through gastronomy. Visit three local spots around the Central Market with tapas, wine, and authentic Valencian atmosphere.",
      highlight: "3 local venues",
    },
    {
      title: "Valencia Bike & Lifestyle Experience",
      duration: "4 Hours",
      icon: Bike,
      description:
        "Bike from Torres de Serrano to the beach through Turia Gardens and Mediterranean neighborhoods. Discover how locals truly enjoy Valencia.",
      highlight: "Scenic route",
    },
    {
      title: "Tuk Tuk Lifestyle Experience",
      duration: "3 Hours",
      icon: Car,
      description:
        "Discover Valencia aboard our tuk tuk through vibrant neighborhoods, lifestyle areas, and iconic landmarks in a relaxed atmosphere.",
      highlight: "Small groups (max 4)",
    },
    {
      title: "Catamaran Sunset Experience",
      duration: "3 Hours",
      icon: Sailboat,
      description:
        "Sail along Valencia's coastline during sunset with music, drinks, and Mediterranean atmosphere. 2 exits during the Games.",
      highlight: "Drinks included",
    },
    {
      title: "Cabañal Night Life Experience",
      duration: "4 Hours",
      icon: Utensils,
      description:
        "Discover the authentic seaside neighborhood of Cabañal. Dinner in a traditional restaurant, then explore LGBTQ+ friendly venues by the beach.",
      highlight: "Dinner included",
    },
  ];

  useEffect(() => {
    const onSelect = () => {
      setPrevBtnDisabled(!emblaApi?.canScrollPrev());
      setNextBtnDisabled(!emblaApi?.canScrollNext());
    };

    if (emblaApi) {
      emblaApi.on("select", onSelect);
      onSelect();
    }

    return () => {
      emblaApi?.off("select", onSelect);
    };
  }, [emblaApi]);

  const onPrevClick = () => emblaApi?.scrollPrev();
  const onNextClick = () => emblaApi?.scrollNext();

  return (
    <section id="experiences" className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-muted font-semibold text-lg uppercase tracking-wider">
            Available Experiences
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4">
            Mediterranean Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Authentic local experiences combining beaches, nightlife,
            gastronomy, and Mediterranean lifestyle.
          </p>
        </div>

        {/* Mobile Carousel (visible only on mobile) */}
        <div className="md:hidden">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {experiences.map((exp) => (
                <div key={exp.title} className="flex-[0_0_100%] min-w-0 px-2">
                  <div className="group bg-secondary rounded-2xl p-6 border border-border hover:border-muted/90 transition-all hover:shadow-lg h-full">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center group-hover:bg-primary/90 transition-color ">
                        <exp.icon className="w-6 h-6 text-card" />
                      </div>
                      <span className="flex items-center gap-1 text-sm text-muted-foreground bg-primary-foreground/30 px-3 py-1 rounded-full">
                        <Clock className="w-4 h-4" />
                        {exp.duration}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {exp.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                      {exp.description}
                    </p>
                    <div className="inline-block px-3 py-1 bg-muted/30 text-primary text-xs font-semibold rounded-full">
                      {exp.highlight}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Navigation Buttons */}
          <div className="flex items-center justify-between mt-6">
            <button
              ref={prevButtonRef}
              onClick={onPrevClick}
              disabled={prevBtnDisabled}
              className="p-2 rounded-lg bg-muted hover:bg-muted/80 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              ref={nextButtonRef}
              onClick={onNextClick}
              disabled={nextBtnDisabled}
              className="p-2 rounded-lg bg-muted hover:bg-muted/80 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Desktop Bento Grid (visible only on desktop) */}
        <div className="hidden md:grid grid-cols-4 lg:grid-cols-5 gap-6">
          {experiences.map((exp, index) => (
            <div
              key={exp.title}
              className={`group bg-secondary rounded-2xl p-6 border border-border hover:border-muted/90 transition-all hover:shadow-lg ${
                index === 0 || index === 1 ? "lg:col-span-2" : ""
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center group-hover:bg-primary/90 transition-color ">
                  <exp.icon className="w-6 h-6 text-card" />
                </div>
                <span className="flex items-center gap-1 text-sm text-muted-foreground bg-primary-foreground/30 px-3 py-1 rounded-full">
                  <Clock className="w-4 h-4" />
                  {exp.duration}
                </span>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {exp.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                {exp.description}
              </p>
              <div className="inline-block px-3 py-1 bg-muted/30 text-primary text-xs font-semibold rounded-full">
                {exp.highlight}
              </div>
            </div>
          ))}
        </div>

        {/* More Experiences Note */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            <span className="text-foreground font-semibold">
              For more experiences, just ask!
            </span>{" "}
            We can customize your itinerary personally.
          </p>
        </div>
      </div>
    </section>
  );
}
