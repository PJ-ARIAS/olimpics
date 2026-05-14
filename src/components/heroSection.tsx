import { Button } from "./ui/button";
import { ArrowRight, MapPin, Heart, Compass } from "lucide-react";
import ggoli from "../../images/gaygamesLogo.png";

export function HeroSection() {
  const features = [
    { icon: MapPin, text: "Beaches" },
    { icon: Heart, text: "Night life" },
    { icon: Compass, text: "Gastronomy" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="../../images/valencia-games.jpg"
          alt="Ciudad de las Artes y las Ciencias de Valencia"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/80 to-background" />
      </div>

      {/* Animated accent */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] opacity-10 blur-3xl">
        <div className="w-full h-full rounded-full bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-primary animate-pulse" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted-foreground/20 border border-primary/30 mb-8 mt-10">
          <img src={ggoli} alt="" className="h-30" />
        </div>

        {/* Main heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground mb-6 leading-tight text-balance">
          Experience Packages
          <span className="block text-muted">in Valencia</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-4 text-pretty">
          <strong className="text-foreground">
            Discover Valencia Beyond the Games
          </strong>
        </p>
        <p className="text-base sm:text-lg text-foreground max-w-3xl mx-auto mb-8 text-pretty">
          Spend your free time during the Games with locals. Experience Valencia
          with a local LGBTQ+ friendly team based in the heart of the city.
        </p>

        {/* Features */}
        <div className="flex flex-wrap justify-center gap-6 mb-10">
          {features.map((feature) => (
            <div
              key={feature.text}
              className="flex items-center gap-2 text-muted-foreground"
            >
              <feature.icon className="w-5 h-5 text-muted" />
              <span className="text-md text-foreground font-medium">
                {feature.text}
              </span>
            </div>
          ))}
          <div className="flex items-center gap-2 text-muted-foreground">
            <span className="text-md text-foreground font-medium">
              Mediterranean Lifestyle
            </span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <span className="text-md text-foreground font-medium">
              Authentic Local Experiences
            </span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            size="lg"
            className="bg-muted text-secondary text-lg px-8 hover:bg-secondary hover:text-accent  "
          >
            <a href="#packages">
              Packages
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="text-lg px-8 border-border bg-accent text-card hover:bg-muted/30 hover:text-muted"
          >
            <a href="#experiences">Check the experience</a>
          </Button>
        </div>

        {/* Tagline */}
        <p className="mt-12 text-md text-muted italic">
          {'"'}Help you experience Valencia like a local during the Gay Games.
          {'"'}
        </p>
      </div>
    </section>
  );
}
