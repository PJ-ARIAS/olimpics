import {
  MapPin,
  Users,
  Coffee,
  Check,
  ArrowRight,
  Volleyball,
  Heart,
  Compass,
  Beer,
  MapPinned,
} from "lucide-react";
import meeting from "../../images/meetingpoint.webp";
import { Button } from "./ui/button";

export function AboutSection() {
  // 1. DECLARAMOS LAS FEATURES AQUÍ (Para que el .map funcione en este archivo)
  const features = [
    { icon: Volleyball, text: "Beaches" },
    { icon: Beer, text: "Night life" },
    { icon: Compass, text: "Gastronomy" },
    { icon: Heart, text: "Mediterranean Lifestyle" },
    { icon: MapPinned, text: "Local host" },
  ];

  const benefits = [
    "Local LGBTQ+ host team",
    "Guidance & assistance during your stay",
    "Official TBOV Meeting Point in El Carmen",
    "Restaurant booking assistance (up to 3)",
    "Personalized local recommendations",
    "Social atmosphere & local connections",
    "Local guidance during experiences",
  ];

  const meetingPointFeatures = [
    "Start experiences",
    "Meet other travelers",
    "Organize activities",
    "Receive assistance",
    "Discover Valencia with locals",
  ];

  return (
    <section id="about" className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ======================================================= */}
        {/* ENCABEZADO DE ABOUT US (CON TEXTOS Y BOTONES DEL HERO)  */}
        {/* ======================================================= */}
        <div className="text-center max-w-5xl mx-auto mb-20">
          {/* Título Principal */}

          {/* Subtítulos */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-4 text-pretty">
            <strong className="text-foreground">
              Discover Valencia Beyond the Games
            </strong>
          </p>
          <p className="text-base sm:text-lg text-foreground max-w-3xl mx-auto mb-10 text-pretty leading-relaxed">
            Spend your free time during the Games with locals. Experience
            Valencia with a local LGBTQ+ friendly team based in the heart of the
            city.
          </p>

          {/* Bloque de Features (Iconos horizontales) */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {features.map((feature) => (
              <div
                key={feature.text}
                className="flex items-center gap-2 text-card bg-muted px-4 py-2 rounded-full border border-muted"
              >
                <feature.icon className="w-4 h-4 text-card" />
                <span className="text-sm text-card font-semibold">
                  {feature.text}
                </span>
              </div>
            ))}
          </div>

          {/* Botones de Acción (CTA) */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="bg-muted text-card text-lg px-8 hover:bg-secondary hover:text-accent  font-bold rounded-full w-full sm:w-auto"
            >
              <a href="#packages">
                Discover Packages
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-lg px-8 border-border bg-accent text-card hover:bg-muted/30 hover:text-muted rounded-4xl"
            >
              <a href="#experiences">Explore experiences</a>
            </Button>
          </div>

          {/* Tagline */}
          <p className="mt-8 text-sm text-muted font-bold italic">
            {'"'}Help you experience Valencia like a local during the Gay Games.
            {'"'}
          </p>

          <hr className="mt-16 border-border opacity-50" />
        </div>

        {/* ======================================================= */}
        {/* DETALLE ADICIONAL: INTRODUCCIÓN BREVE A ABOUT US        */}
        {/* ======================================================= */}
        <div className="text-center mb-16">
          <span className="text-primary font-bold text-sm uppercase tracking-[0.2em]">
            About us
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground mt-2 mb-4 uppercase italic">
            Local LGBTQ+ Mediterranean Lifestyle Hosts
          </h3>
          <p className="text-base text-muted-foreground max-w-3xl mx-auto">
            At The Best of Valencia, we are more than a travel agency. We are a
            local incoming travel and lifestyle agency based in Valencia&apos;s
            historic center.
          </p>
        </div>

        {/* ======================================================= */}
        {/* BENTO GRID DE BENEFICIOS Y MEETING POINT               */}
        {/* ======================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card Grande - Our Role */}
          <div className="lg:col-span-2 bg-card-foreground rounded-2xl p-8 border border-border">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center">
                <Users className="w-6 h-6 text-card" />
              </div>
              <h3 className="text-xl font-bold text-foreground">
                During the Gay games we will enjoy...
              </h3>
            </div>
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-muted-foreground/60 rounded-xl">
                <Compass className="w-8 h-8 text-muted mx-auto mb-3" />
                <h4 className="font-semibold text-muted mb-1">Local Hosts</h4>
                <p className="text-sm text-foreground">
                  Local connection to Valencia
                </p>
              </div>
              <div className="text-center p-4 bg-muted-foreground/60 rounded-xl">
                <Coffee className="w-8 h-8 text-muted mx-auto mb-3" />
                <h4 className="font-semibold text-muted mb-1">
                  Lifestyle Guides
                </h4>
                <p className="text-sm text-foreground">
                  Mediterranean style guides
                </p>
              </div>
              <div className="text-center p-4 bg-muted-foreground/60 rounded-xl">
                <Users className="w-8 h-8 text-muted mx-auto mb-3" />
                <h4 className="font-semibold text-muted mb-1">
                  Insider Connection
                </h4>
                <p className="text-sm text-foreground">
                  Access to the Authentic
                </p>
              </div>
            </div>
          </div>

          {/* Card Mediana - Meeting Point */}
          <div className="relative overflow-hidden bg-zinc-950 rounded-2xl p-8 border border-primary/30 group">
            <img
              src={meeting}
              alt="TBOV Meeting Point"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/30 lg:bg-gradient-to-r lg:from-black/75 lg:via-black/25 lg:to-transparent" />

            <div className="relative z-10 flex flex-col justify-end h-full w-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/10 backdrop-blur-sm flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
              </div>
              <h3 className="text-2xl font-black text-white uppercase italic tracking-tight drop-shadow-md mb-1">
                TBOV Meeting Point
              </h3>
              <p className="text-primary font-bold text-sm uppercase tracking-wider mb-4 drop-shadow-sm">
                El Carmen Historic Center
              </p>
              <p className="text-zinc-200 text-sm md:text-base mb-4 leading-relaxed max-w-xl drop-shadow-sm">
                Our office in El Carmen becomes the official TBOV meeting point
                during the Gay Games.
              </p>
              <ul className="space-y-2.5 max-w-xl">
                {meetingPointFeatures.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-sm text-zinc-300 font-medium drop-shadow-sm"
                  >
                    <Check className="w-4 h-4 text-primary flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Card Ancha - All Packages Include */}
          <div className="lg:col-span-3 bg-card-foreground rounded-2xl p-6 md:p-8 border border-border">
            <h3 className="text-xl font-bold text-muted mb-6 text-center">
              All the packs include
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-start gap-3 p-3 bg-muted-foreground/50 rounded-xl transition-colors hover:bg-muted-foreground/60"
                >
                  <Check className="w-5 h-5 text-muted flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground leading-snug">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
