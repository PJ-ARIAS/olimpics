import { Package, Calendar, MessageSquare, CreditCard } from "lucide-react";

export function HowItWorksSection() {
  const steps = [
    {
      number: "1",
      title: "Choose your packages",
      description: "Package A, B or C. ",
      icon: Package,
    },
    {
      number: "2",
      title: "Select",
      description: "Choose your preferred activities and dates.",
      icon: Calendar,
    },
    {
      number: "3",
      title: "Send us your request ",
      description: "We customize your itinerary.",
      icon: MessageSquare,
    },
    {
      number: "4",
      title: "Confirm your reservation",
      description: "Easy online payment and confirmation.",
      icon: CreditCard,
    },
  ];

  return (
    <section className="py-24 bg-card-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-muted font-semibold text-lg uppercase tracking-wider">
            How to book
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4">
            How does it work ?
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
        <div className="mt-16 bg-muted-foreground rounded-2xl p-8 text-center border border-primary/30">
          <p className="text-3xl text-card font-bold uppercase mb-2">
            experience valencia like a local during the gay games.
          </p>
          <p className="text-2xl text-card font-semibold mb-2">
            Limited availability during the Gay Games period
          </p>
          <p className="text-card">Book early to secure your experiences.</p>
          <p className="text-card">
            Mediterranean Lifestyle-Beaches - Nightlife - Gastronomy - Local
            Connections
          </p>
        </div>
      </div>
    </section>
  );
}
