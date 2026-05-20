import { Button } from "./ui/button";
import { Check, Star, Crown, Sparkles, Building } from "lucide-react";
import xabia from "../../images/bestHavea.webp";
import { ExperiencesSection } from "./experienceSection";
import { trackGA4Event } from "../utils/analytics";

export function PackagesSection() {
  const benefits = [
    "Local LGBTQ+ host team",
    "Guidance & assistance during your stay",
    "Official TBOV Meeting Point in El Carmen",
    "Restaurant booking assistance (up to 3)",
    "Personalized local recommendations",
    "Social atmosphere & local connections",
    "Local guidance during experiences",
  ];
  const packages = [
    {
      name: "Package A",
      subtitle: "Basic Experience Package",
      price: "950€",
      experiences: 2,
      description: "Basic entry to the Mediterranean lifestyle",
      features: [
        "Choose Valencia Historic & Lifestyle tour or Bike tour",
        "Choose 2 additional experiences",
        "Meeting point, local host and guidance",
      ],
      icon: Star,
      popular: false,
    },
    {
      name: "Package B",
      subtitle: "Mediterranean Experience Package",
      price: "1,200€",
      experiences: 3,
      description: "The most balanced local experience",
      features: [
        "Choose Valencia Historic & Lifestyle tour or Bike tour",
        "Choose 3 additional experiences",
        "Meeting point, local host and guidance",
        "Restaurant booking service",
      ],
      icon: Crown,
      popular: true,
    },
    {
      name: "Package C",
      subtitle: "Full Gay Games Experience",
      price: "1,500€",
      experiences: 4,
      description: "The ultimate immersion in Valencia",
      features: [
        "Choose Valencia Historic & Lifestyle tour or Bike tour",
        "Choose 4 additional experiences",
        "Meeting point, local host and guidance",
        "Restaurant booking service",
      ],
      icon: Sparkles,
      popular: false,
    },
  ];

  return (
    <section id="packages" className="py-24 bg-card-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Experience Packages
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase text-pretty text-foreground mt-2 mb-4">
            Choose your package
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Mediterranean lifestyle packages specially designed for visitors
            attending the Gay Games.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative rounded-2xl p-8 border transition-all hover:scale-105 flex flex-col ${
                pkg.popular
                  ? "bg-gradient-to-b from-muted/30 to-card border-primary shadow-lg shadow-primary/20"
                  : "bg-card border-muted hover:border-primary/50"
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-muted text-foreground text-sm font-semibold rounded-full uppercase">
                  Most popular
                </div>
              )}

              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-secondary">
                  <pkg.icon className="w-6 h-6 text-muted" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground">
                    {pkg.name}
                  </h3>
                  <p className="text-sm text-foreground">{pkg.subtitle}</p>
                </div>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-foreground">
                    {pkg.price}
                  </span>
                  <span className="text-lg text-muted-foreground">
                    per person
                  </span>
                </div>
              </div>

              {/* Lista de información solicitada */}
              <div className="space-y-4 mb-8 flex-grow">
                {pkg.features.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text'foreground leading-snug">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <Button
                asChild
                className={`w-full py-6 font-bold uppercase tracking-wider ${
                  pkg.popular
                    ? "bg-muted text-card hover:bg-secondary hover:text-accent"
                    : "hover:bg-secondary hover:text-accent text-card bg-muted/80"
                }`}
              >
                <a href="#contact">Select package</a>
              </Button>
            </div>
          ))}
        </div>

        <div className="lg:col-span-3 bg-card-foreground rounded-2xl p-6 md:p-5 border border-border">
          <h3 className="text-xl font-bold text-muted mb-4 text-center">
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

        {/* SECCION DE EXPERIENCIAS */}
        <ExperiencesSection />

        {/* Premium Add-on */}
        <div className="mt-16 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 bg-card rounded-[2.5rem] overflow-hidden border border-border shadow-2xl">
            {/* LADO IZQUIERDO: IMAGEN FORMATO TARJETA */}
            <div className="relative h-[350px] lg:h-auto min-h-[450px] overflow-hidden">
              <img
                src={xabia}
                alt="Dénia & Xàbia Mediterranean Experience"
                className="w-full h-full object-fill transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
              {/* Overlay sutil para que combine con el diseño */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent lg:hidden" />
            </div>

            {/* LADO DERECHO: TEXTO Y BOTÓN */}
            <div className="flex flex-col justify-center p-8 md:p-12 lg:p-16 text-left bg-card">
              <span className="inline-block w-fit px-4 py-1 bg-primary/10 text-muted text-xs font-bold uppercase tracking-widest rounded-full mb-6">
                Premium Add-On
              </span>

              <h3 className="text-3xl md:text-4xl font-black text-foreground mb-4 uppercase italic leading-[0.9] tracking-tight">
                Xàbia Mediterranean
                <br />
                <span className="text-muted">July 6th</span>
              </h3>

              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8 text-pretty">
                Full Day.Together, we will travel to Cala Clemence in Portitxol
                (Xàbia), one of the most spectacular Mediterranean spots on our
                coast. Crystal-clear waters, breathtaking landscapes,
                Mediterranean atmosphere, music, and sunset DJ sessions in a
                spectacular cliffside restaurant overlooking the sea make this
                the perfect escape from Valencia to discover another side of the
                Mediterranean lifestyle. Includes: Local host. Transportation
                (approx. 1h30 round trip) Paella lunch with sangría. One of
                those places you simply never forget.
                <span className="block mt-2 font-semibold text-muted">
                  Includes: Local host, Transportation, Paella lunch & Sangría.
                </span>
              </p>

              {/* Precio y Botón alineados */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mt-auto">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-foreground">
                    From 400€
                  </span>
                  <span className="text-muted-foreground text-sm font-medium">
                    per person
                  </span>
                </div>

                <Button
                  onClick={() => {
                    trackGA4Event("click_add_package", {
                      package_name: "Dénia & Xàbia Mediterranean Experience",
                      value: 400,
                      currency: "EUR",
                    });
                  }}
                  asChild
                  size="lg"
                  className="bg-muted text-white hover:bg-zinc-900 px-10 py-7 rounded-full font-black uppercase italic tracking-widest shadow-xl shadow-primary/20 transition-all w-full sm:w-auto"
                >
                  <a href="#contact">Add package</a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Accommodation Section */}
        <div className="mt-10 bg-card rounded-2xl p-8 border mb-0 border-border">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center">
              <Building className="w-6 h-6 text-card" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground">
                Need Accommodation?
              </h3>
              <p className="text-muted-foreground">
                Our team can help you find the best accommodation during the Gay
                Games.
              </p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
            {[
              "Boutique hotels",
              "4* hotels",
              "5* premium hotels",
              "Apartments",
              "LGBTQ+ friendly",
            ].map((type) => (
              <div
                key={type}
                className="flex items-center gap-2 text-foreground font-medium"
              >
                <Check className="w-4 h-4 text-primary" />
                {type}
              </div>
            ))}
          </div>
          <div className="bg-muted-foreground/20 rounded-xl p-4 inline-block border border-border">
            <p className="text-xs text-muted-foreground uppercase tracking-widest font-bold mb-1">
              Average rates during Gay Games:
            </p>
            <p className="text-2xl font-black text-foreground">
              150€ - 250€{" "}
              <span className="text-sm font-semibold text-muted-foreground">
                / night (double room)
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
