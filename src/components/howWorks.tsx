import { Package, Calendar, MessageSquare, CreditCard } from "lucide-react";

export function HowItWorksSection() {
  const steps = [
    {
      number: "1",
      title: "Choose your package",
      description:
        "Package A, B or C based on your preferences and available time.",
      icon: Package,
    },
    {
      number: "2",
      title: "Select your experiences",
      description:
        "Choose your preferred activities and dates from our available experiences.",
      icon: Calendar,
    },
    {
      number: "3",
      title: "Contact our team",
      description:
        "Send us your request. We customize your itinerary personally.",
      icon: MessageSquare,
    },
    {
      number: "4",
      title: "Confirm your reservation",
      description: "Easy online payment and confirmation. You are all set!",
      icon: CreditCard,
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-muted font-semibold text-lg uppercase tracking-wider">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4">
            Cómo Reservar
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Simple process to secure your Mediterranean experience during the
            Gay Games.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-muted/50 to-transparent -translate-x-4" />
              )}

              <div className="text-center">
                <div className="relative inline-flex items-center justify-center mb-6">
                  <div className="w-24 h-24 rounded-2xl bg-secondary border border-muted flex items-center justify-center">
                    <step.icon className="w-10 h-10 text-accent" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-8 h-8 bg-muted/90 text-primary text-sm font-bold rounded-full flex items-center justify-center">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Urgency Banner */}
        <div className="mt-16 bg-gradient-to-r from-muted/20 via-accent/20 to-muted/20 rounded-2xl p-8 text-center border border-primary/30">
          <p className="text-lg text-foreground font-semibold mb-2">
            Limited availability during the Gay Games period
          </p>
          <p className="text-muted-foreground">
            Book early to secure your experiences. Mediterranean Lifestyle -
            Beaches - Nightlife - Gastronomy - Local Connections
          </p>
        </div>
      </div>
    </section>
  );
}
