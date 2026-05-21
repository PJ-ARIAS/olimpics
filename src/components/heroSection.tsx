import { Button } from "./ui/button";
import { CheckCircle2 } from "lucide-react";
import back from "../../images/herosectoinfit.webp";
import backMobile from "../../images/herosectoinfit.webp";

export function HeroSection() {
  return (
    <section className="relative min-h-[600px] md:h-[80vh] flex items-center justify-center bg-[#2589D8] py-12 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LADO IZQUIERDO: IMAGEN ESTILO POSTER */}
          <div className="flex justify-center lg:justify-end">
            {/* Eliminamos aspect-square si la imagen no es cuadrada. 
              Usamos max-h para que en PC no se desborde y mantenga su proporción.
            */}
            <div className="relative w-full max-w-[550px] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white/10 bg-white/5">
              <picture>
                <source media="(min-width: 768px)" srcSet={back} />
                <img
                  src={backMobile}
                  alt="Valencia Gay Games Experiences"
                  // object-contain evita estiramientos y cortes.
                  // w-full h-auto permite que la imagen mande sobre la altura del contenedor.
                  className="w-full h-auto object-contain transition-transform duration-500 hover:scale-105"
                  loading="eager"
                />
              </picture>
            </div>
          </div>

          {/* LADO DERECHO: TEXTO Y BOTONES */}
          <div className="text-white space-y-6 lg:pl-8 text-center lg:text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight max-w-md mx-auto lg:mx-0">
              Discover Valencia Beyond the Games.
            </h1>

            <p className="text-lg opacity-90 max-w-lg leading-relaxed mx-auto lg:mx-0">
              Discover Valencia beyond the games with authentic locals and
              LGBTIQ+ friendly experiences designed to help you live the city in
              a different way. Choose your experiences, create your own package
              and enjoy Valencia like a true insider.
            </p>

            {/* BOTONES ESTILO PILL */}
            <div className="flex flex-col gap-4 pt-4 items-center lg:items-start">
              <Button
                asChild
                className="w-full max-w-[300px] bg-white text-[#2589D8] hover:bg-zinc-100 rounded-full px-8 py-6 text-sm font-bold uppercase tracking-wider shadow-lg transition-transform active:scale-95"
              >
                <a href="#packages" className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5" />
                  Discover Packages
                </a>
              </Button>

              <Button
                asChild
                className="w-full max-w-[300px] bg-white text-[#2589D8] hover:bg-zinc-100 rounded-full px-8 py-6 text-sm font-bold uppercase tracking-wider shadow-lg transition-transform active:scale-95"
              >
                <a href="#experiences" className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5" />
                  See Experiences
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
