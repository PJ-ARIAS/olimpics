import { Button } from "./ui/button";
import {
  // ArrowRight,
  // Volleyball,
  // Heart,
  // Compass,
  // Beer,
  // MapPinned,
  CheckCircle2, // Cambiado para el icono de los botones según la imagen
} from "lucide-react";
import back from "../../images/herosectoinfit.webp";
import backMobile from "../../images/herosectionlast.webp";

export function HeroSection() {
  return (
    // bg-[#2589D8] para el azul de la imagen
    <section className="relative min-h-[600px] md:h-[80vh] flex items-center justify-center bg-[#2589D8] py-12 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LADO IZQUIERDO: IMAGEN ESTILO POSTER */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[550px] aspect-square rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white/10">
              <picture>
                <source media="(min-width: 768px)" srcSet={back} />
                <img
                  src={backMobile}
                  alt="Valencia Gay Games Experiences"
                  className="w-150 h-137 object-fill "
                  loading="eager"
                />
              </picture>
            </div>
          </div>

          {/* LADO DERECHO: TEXTO Y BOTONES SEGÚN REFERENCIA */}
          <div className="text-white space-y-6 lg:pl-8">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight max-w-md">
              Discover Valencia Beyond the Games.
            </h1>

            <p className="text-lg opacity-90 max-w-lg leading-relaxed">
              Spend your free time during the Games with locals. Experience
              Valencia with a local LGBTQ+ friendly team based in the heart of
              the city.
            </p>

            {/* BOTONES ESTILO PILL (CÁPSULA) */}
            <div className="flex flex-col gap-4 pt-4 items-center">
              <Button
                asChild
                className="w-100 bg-white text-[#2589D8] hover:bg-zinc-100 rounded-full px-8 py-6 text-sm font-bold uppercase tracking-wider shadow-lg"
              >
                <a href="#packages" className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5" />
                  Discover Packages
                </a>
              </Button>

              <Button
                asChild
                className="w-100 bg-white text-[#2589D8] hover:bg-zinc-100 rounded-full px-8 py-6 text-sm font-bold uppercase tracking-wider shadow-lg"
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
