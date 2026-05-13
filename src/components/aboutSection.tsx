import { MapPin, Users, Compass, Coffee, Check } from "lucide-react";

export function AboutSection() {
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
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-muted font-semibold text-lg uppercase tracking-wider">
            About us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4">
            Local LGBTQ+ Mediterranean Lifestyle Hosts
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            At The Best of Valencia, we are more than a travel agency. We are a
            local incoming travel and lifestyle agency based in Valencia&apos;s
            historic center.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Our Role Card - Large */}
          <div className="lg:col-span-2 bg-secondary rounded-2xl p-8 border border-border">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center">
                <Users className="w-6 h-6 text-card" />
              </div>
              <h3 className="text-xl font-bold text-foreground">
                During the Gay games we will...
              </h3>
            </div>
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-background/50 rounded-xl">
                <Compass className="w-8 h-8 text-primary mx-auto mb-3" />
                <h4 className="font-semibold text-foreground mb-1">
                  Local Hosts
                </h4>
                <p className="text-sm text-muted-foreground">
                  Local connection to Valencia
                </p>
              </div>
              <div className="text-center p-4 bg-background/50 rounded-xl">
                <Coffee className="w-8 h-8 text-accent mx-auto mb-3" />
                <h4 className="font-semibold text-foreground mb-1">
                  Lifestyle Guides
                </h4>
                <p className="text-sm text-muted-foreground">
                  Mediterranean style guides
                </p>
              </div>
              <div className="text-center p-4 bg-background/50 rounded-xl">
                <Users className="w-8 h-8 text-primary mx-auto mb-3" />
                <h4 className="font-semibold text-foreground mb-1">
                  Insider Connection
                </h4>
                <p className="text-sm text-muted-foreground">
                  Access to the Authentic
                </p>
              </div>
            </div>
          </div>

          {/* Meeting Point Card */}
          <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl p-8 border border-primary/30">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center">
                <MapPin className="w-6 h-6 text-card" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">
              TBOV Meeting Point
            </h3>
            <p className="text-muted font-semibold mb-4">
              El Carmen Historic Center
            </p>
            <p className="text-sm text-muted-foreground mb-4">
              Our office in El Carmen becomes the official TBOV meeting point
              during the Gay Games.
            </p>
            <ul className="space-y-2">
              {meetingPointFeatures.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <Check className="w-4 h-4 text-accent flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* All Packages Include - Full Width */}
          <div className="lg:col-span-3 bg-secondary rounded-2xl p-8 border border-border">
            <h3 className="text-xl font-bold text-foreground mb-6 text-center">
              All the packs include
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-start gap-3 p-3 bg-background/50 rounded-xl"
                >
                  <Check className="w-5 h-5 text-muted flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
