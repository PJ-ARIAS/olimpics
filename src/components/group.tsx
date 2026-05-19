"use client";

import hotelImage from "../../images/grupos.webp";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export function Group() {
  const groupData = {
    id: "acc-3",
    title: "Are you a group? Need a custom plan?",
    image: hotelImage,
    description:
      "If you need a personalized plan or if you are traveling as a group, we also create tailor-made itineraries and hospitality programs in Valencia. Just tell us what you need, and we’ll make it happen.",
  };

  return (
    <section
      id="groups"
      // Eliminamos h-screen para que fluya con el resto del contenido
      className="relative py-24 w-full bg-card-foreground flex items-center justify-center"
    >
      {/* max-w-7xl asegura que el ancho coincida con el resto de tus secciones */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center justify-center">
        {/* Ajustado a max-w-7xl para igualar el ancho de los otros componentes */}
        <div className="relative w-full max-w-7xl bg-card border border-border rounded-[40px] shadow-2xl overflow-hidden flex flex-col lg:flex-row items-center p-6 md:p-10 lg:p-12 gap-12">
          {/* LADO IMAGEN (IZQUIERDA) - Ajustado ancho para mayor impacto */}
          <div className="w-full lg:w-1/2 h-64 md:h-80 lg:h-[500px] overflow-hidden rounded-[30px] flex-shrink-0">
            <img
              src={groupData.image}
              alt={groupData.title}
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>

          {/* LADO TEXTO (DERECHA) */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center text-left">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-6 uppercase italic text-muted">
              {groupData.title}
            </h3>

            <p className="text-base md:text-xl italic mb-8 leading-relaxed text-foreground">
              {groupData.description}
            </p>

            {/* <ul className="space-y-3 mb-10">
              {groupData.features.map((feature, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-sm md:text-lg font-medium text-foreground"
                >
                  <span className="text-primary font-bold">-</span>
                  {feature}
                </li>
              ))}
            </ul> */}

            <div className="border-t border-border pt-8">
              <Button
                asChild
                className="rounded-4xl font-bold uppercase tracking-widest text-md px-5 py-3 h-auto shadow-xl bg-muted text-card hover:bg-muted/70 transition-all hover:scale-105 active:scale-95"
              >
                <a href="#contact">
                  Contact Us
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
