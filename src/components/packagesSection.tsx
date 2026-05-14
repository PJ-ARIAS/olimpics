import { Button } from "./ui/button";
import { Check, Star, Crown, Sparkles, Building } from "lucide-react";

export function PackagesSection() {
  const packages = [
    {
      name: "Package A",
      subtitle: "Basic Experience Package",
      price: "950€",
      experiences: 3,
      description:
        "Valencia Historic & Lifestyle Tour + Choose 2 additional experiences",
      perfectFor: ["Short stays", "First-time visitors", "Limited free time"],
      icon: Star,
      popular: false,
    },
    {
      name: "Package B",
      subtitle: "Mediterranean Experience Package",
      price: "1,200€",
      experiences: 4,
      description:
        "Valencia Historic & Lifestyle Tour + Choose 3 additional experiences",
      perfectFor: [
        "Mediterranean lifestyle travelers",
        "Social travelers",
        "Complete Valencia experience",
      ],
      icon: Crown,
      popular: true,
    },
    {
      name: "Package C",
      subtitle: "Full Gay Games Experience",
      price: "1,500€",
      experiences: 5,
      description:
        "Valencia Historic & Lifestyle Tour + Choose 4 additional experiences",
      perfectFor: [
        "The ultimate Mediterranean lifestyle experience during the Gay Games",
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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4">
            Choose your package
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Mediterranean lifestyle packages specially designed for visitors
            attending the Gay Games.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative rounded-2xl p-8 border transition-all hover:scale-105 ${
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
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center ${pkg.popular ? "bg-secondary" : "bg-secondary"}`}
                >
                  <pkg.icon
                    className={`w-6 h-6 ${pkg.popular ? "text-muted" : "text-muted"}`}
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground">
                    {pkg.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {pkg.subtitle}
                  </p>
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
                <p className="text-sm text-muted font-medium mt-1">
                  {pkg.experiences} Experiences
                </p>
              </div>

              <p className="text-sm text-muted-foreground mb-6">
                {pkg.description}
              </p>

              {/* <div className="space-y-3 mb-8">
                <p className="text-sm font-semibold text-foreground">
                  Perfect for:
                </p>
                {pkg.perfectFor.map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      {item}
                    </span>
                  </div>
                ))}
              </div> */}

              <Button
                asChild
                className={`w-full ${pkg.popular ? "bg-muted text-card hover:bg-secondary hover:text-accent" : "hover:bg-secondary hover:text-accent text-card bg-muted/80"}`}
              >
                <a href="#contact">Select package</a>
              </Button>
            </div>
          ))}
        </div>

        {/* Premium Add-on */}
        <div className="bg-muted-foreground rounded-2xl p-8 border border-accent/30">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-1">
              <span className="inline-block px-3 py-1 bg-muted text-card text-sm font-semibold rounded-full mb-4">
                Premium Add-On
              </span>
              <h3 className="text-2xl font-bold text-card mb-2">
                Premium Xàbia Mediterranean Escape
              </h3>
              <p className="text-card mb-4">
                Full Day Experience - 6 July. Travel to Dénia and Xàbia during a
                scenic Mediterranean route to discover spectacular beaches,
                hidden coves, crystal-clear water, and incredible landscapes.
              </p>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-foreground">
                  From 500€
                </span>
                <span className="text-card font-bold">per person</span>
              </div>
            </div>
            <Button
              asChild
              size="lg"
              className="bg-muted hover:bg-secondary hover:text-accent text-card"
            >
              <a href="#contact">Add package</a>
            </Button>
          </div>
        </div>

        {/* Accommodation Section */}
        <div className="mt-12 bg-card rounded-2xl p-8 border border-border">
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
              "4 hotels",
              "5 premium hotels",
              "Apartments",
              "LGBTQ+ friendly",
            ].map((type) => (
              <div
                key={type}
                className="flex items-center gap-2 text-lg text-foreground"
              >
                <Check className="w-4 h-4 text-primary" />
                {type}
              </div>
            ))}
          </div>
          <div className="bg-muted-foreground/50 rounded-xl p-4 inline-block">
            <p className="text-sm text-muted">
              Average rates during Gay Games:
            </p>
            <p className="text-xl font-bold text-foreground">
              150€ - 250€{" "}
              <span className="text-sm font-semibold text-foreground">
                per night (double room)
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
