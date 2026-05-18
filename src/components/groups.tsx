"use client";

import hotelImage from "../../images/headerimg.webp";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function Groups() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const accommodations = [
    {
      id: "acc-1",
      title: "Need accommodation in Valencia?",
      image: hotelImage,
      description:
        "Our team can help you find the best accommodation during the Gay Games.",
      features: [
        "Boutique hotels",
        "4* & 5* Premium hotels",
        "Apartments LGBTQ+ friendly",
        "Average rates during Games",
      ],
    },
    {
      id: "acc-2",
      title: "Premium Luxury Experience",
      image: hotelImage,
      description:
        "Stay in iconic buildings with high-end Mediterranean hospitality.",
      features: [
        "Rooftop terraces",
        "Fine dining on-site",
        "LGBTQ+ welcome kit",
        "Prime location",
      ],
    },
    {
      id: "acc-3",
      title: "Are you a group ? Need a custom plan?",
      image: hotelImage,
      description:
        "If you need a personalized plan or if you are traveling as a group, we also create tailor-made itineraries and hospitality programs in Valencia. Just tell us what you need, and we’ll make it happen.",
      features: [
        "Fully equipped kitchens",
        "Local guides",
        "High-speed Wi-Fi",
        "Ruzafa nightlife",
      ],
    },
    {
      id: "acc-4",
      title: "Customize  your package ana reserve",
      image: hotelImage,
      description:
        "More than just the Gay Games, this is your chance to experience Valencia  with new local friends. Discover Mediterranean lifestyle, authentic local atmosphere, new friends, and unforgettable experiences with a welcoming LGBTQ+ friendly team that will make you feel at home in Valencia.",
      features: [
        "Personalized service",
        "Unique design",
        "Quiet atmosphere",
        "Late checkout",
      ],
    },
  ];

  useEffect(() => {
    if (!sectionRef.current || !containerRef.current) return;

    const cards = cardsRef.current.filter(
      (card) => card !== null,
    ) as HTMLDivElement[];
    if (cards.length === 0) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${cards.length * 100}%`,
          pin: true,
          scrub: 1,
        },
      });

      cards.forEach((card, index) => {
        if (index !== 0) {
          tl.fromTo(
            card,
            { y: "100vh", rotate: index % 2 === 0 ? 5 : -5, scale: 0.9 },
            { y: 0, rotate: 0, scale: 1, duration: 1, ease: "power2.out" },
            index * 0.75,
          );
        }

        if (index < cards.length - 1) {
          tl.to(
            card,
            { scale: 0.92, opacity: 0.3, duration: 0.5 },
            (index + 1) * 0.75,
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="accommodation"
      className="relative h-screen w-full bg-card-foreground overflow-hidden flex items-center justify-center"
    >
      <div className="max-w-7xl mx-auto px-4 w-full h-full flex items-center justify-center">
        <div
          ref={containerRef}
          className="relative w-full max-w-5xl h-[550px] md:h-[600px] lg:h-[650px]"
        >
          {accommodations.map((item, index) => {
            // Variable de control para las tarjetas impares (row-reverse)
            const isAltCard = index % 2 !== 0;

            return (
              <div
                key={item.id}
                ref={(el) => {
                  cardsRef.current[index] = el;
                }}
                className={cn(
                  "absolute inset-0 w-full h-full flex flex-col lg:flex-row gap-8 items-center p-6 md:p-10 lg:p-12 border border-border rounded-[40px] shadow-2xl overflow-hidden",
                  // Estilos de contenedor condicionales
                  isAltCard
                    ? "lg:flex-row-reverse bg-muted shadow-primary/5"
                    : "bg-card shadow-black/50",
                )}
                style={{ zIndex: index }}
              >
                {/* LADO IMAGEN */}
                <div className="w-full lg:w-1/2 h-48 md:h-64 lg:h-full overflow-hidden rounded-[30px] flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                </div>

                {/* LADO TEXTO */}
                <div className="w-full lg:w-1/2 flex flex-col h-full justify-center text-left">
                  <h3
                    className={cn(
                      "text-2xl md:text-3xl lg:text-4xl font-black leading-tight mb-4 uppercase italic transition-colors",
                      // Texto blanco en tarjetas oscuras, color primario en las normales
                      isAltCard ? "text-card" : "text-muted",
                    )}
                  >
                    {item.title}
                  </h3>

                  <p
                    className={cn(
                      "text-sm md:text-lg italic mb-6 leading-relaxed",
                      // Texto gris claro en fondo oscuro
                      isAltCard ? "text-foreground" : "text-muted",
                    )}
                  >
                    {item.description}
                  </p>

                  <ul className="space-y-2 mb-8">
                    {item.features.map((feature, i) => (
                      <li
                        key={i}
                        className={cn(
                          "flex items-center gap-2 text-sm md:text-base font-medium",
                          isAltCard ? "text-card" : "text-foreground",
                        )}
                      >
                        {/* El guión también cambia de color */}
                        <span
                          className={
                            isAltCard
                              ? "text-primary font-bold"
                              : "text-primary font-bold"
                          }
                        >
                          -
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div
                    className={cn(
                      "border-t pt-6 transition-colors",
                      isAltCard ? "border-zinc-800" : "border-border",
                    )}
                  >
                    <p
                      className={cn(
                        "text-xl md:text-2xl font-black",
                        isAltCard ? "text-white" : "text-foreground",
                      )}
                    ></p>
                  </div>
                  <Button
                    asChild
                    className={cn(
                      "rounded-full font-bold uppercase tracking-wider text-xs px-8 py-6 h-auto shadow-xl transition-all hover:scale-105 active:scale-95",
                      isAltCard
                        ? "bg-card text-muted hover:bg-white hover:text-zinc-900"
                        : "bg-muted text-card hover:bg-muted/70",
                    )}
                  >
                    <a href="#contact">
                      Reserve Now
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function cn(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}
