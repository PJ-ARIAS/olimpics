"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { cn } from "../../lib/utils";

// Tus imágenes
import img1 from "../../images/lesArts.jpg";
import img2 from "../../images/beach.jpg";
import img3 from "../../images/pub.jpg";
import img4 from "../../images/tapas.jpg";
import img5 from "../../images/bike.jpg";
import img6 from "../../images/tuk.jpg";
// TEAM IMAGES

// import team4 from "../../images/pug.webp";

export function Gallery() {
  const autoplayRef = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false }),
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      containScroll: "trimSnaps",
    },
    [autoplayRef.current],
  );

  // Estados para los puntos de navegación
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  // Función para ir a un punto específico
  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi],
  );

  // Sincronizar los puntos con el carrusel
  const onInit = useCallback((emblaApi: any) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: any) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on("reInit", onInit);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);

  const images = [img1, img2, img3, img4, img5, img6];
  // const teamImages = [team1, team2, team3];

  return (
    <section id="gallery" className="py-16 bg-card-foreground">
      <div className="max-w-7xl mx-auto px-4 mb-10 text-center">
        <h2 className="text-3xl font-black uppercase italic tracking-tighter text-foreground">
          Lifestyle Gallery
        </h2>
        <p className="text-muted-foreground text-sm uppercase tracking-widest mt-2">
          Experience Valencia with us
        </p>
      </div>
      {/* CONTENEDOR EQUIPO BOV  */}
      <div className="max-w-7xl mx-auto px-4 mb-16">
        <p className="text-center text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-6">
          Meet Our Team
        </p>

        {/* Tira horizontal en móvil (scrollable) y Grid exacto de 5 columnas en Escritorio */}
      </div>

      {/* Contenedor del Carrusel */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex -ml-4">
          {images.map((img, index) => (
            <div
              key={index}
              className={cn(
                "min-w-0 pl-4",
                "flex-[0_0_80%] md:flex-[0_0_40%] lg:flex-[0_0_30%]",
              )}
            >
              <div className="relative h-[250px] md:h-[350px] rounded-3xl overflow-hidden border border-border group">
                <img
                  src={img}
                  alt={`Gallery ${index}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Puntos de Navegación e Indicador */}
      <div className="mt-10 flex flex-col items-center gap-4">
        {/* Puntos (Dots) */}
        <div className="flex gap-2">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => scrollTo(index)}
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                index === selectedIndex
                  ? "w-8 bg-primary"
                  : "w-2 bg-primary/20 hover:bg-primary/40",
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Contador de Imágenes */}
        <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground bg-secondary px-4 py-1 rounded-full border border-border">
          <span className="text-primary">{selectedIndex + 1}</span> /{" "}
          {images.length} Images
        </div>
      </div>
    </section>
  );
}
