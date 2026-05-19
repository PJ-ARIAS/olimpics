"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser"; // Importación de EmailJS
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Send, Check, AlertCircle } from "lucide-react";
import { cn } from "../../lib/utils";
import { trackGA4Event } from "../utils/analytics";

export function RegistrationForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Estado para evitar múltiples envíos
  const [selectedExperiences, setSelectedExperiences] = useState<string[]>([]);
  const [selectedPackage, setSelectedPackage] = useState<string>("");

  const experiences = [
    "Valencia Historic & Lifestyle Tour",
    "Gay Beach Lifestyle Experience",
    "LGBTQ+ Pub Crawl & Social Circuit",
    "Tapas & Wine Experience",
    "Valencia Bike & Lifestyle Experience",
    "Tuk Tuk Lifestyle Experience",
    "Catamaran Sunset Experience",
    "Cabañal Night Life Experience",
    "Premium Xàbia Mediterranean Escape",
  ];

  const packageLimits: Record<string, number> = {
    a: 3,
    b: 4,
    c: 5,
  };

  const currentLimit = packageLimits[selectedPackage] || 0;

  const handleToggle = (exp: string) => {
    if (!selectedPackage) return;
    setSelectedExperiences((prev) => {
      const isSelected = prev.includes(exp);
      if (isSelected) return prev.filter((e) => e !== exp);
      if (prev.length < currentLimit) {
        return [...prev, exp];
      }
      return prev;
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    // 1. Recopilar datos del formulario
    const formData = new FormData(e.currentTarget);

    // 2. Parámetros para EmailJS
    const templateParams = {
      from_name: formData.get("name"),
      reply_to: formData.get("email"), // IMPORTANTE: Para que funcione el Auto-Reply
      phone: formData.get("phone"),
      country: formData.get("country"),
      package: selectedPackage.toUpperCase(),
      experiences: selectedExperiences.join(", "),
      arrival_date: formData.get("arrival"),
      travelers: formData.get("travelers"),
      accommodation: formData.get("accommodation"),
      message: formData.get("message") || "No additional comments",
    };

    try {
      // 3. Envío vía EmailJS (Esto dispara el template principal y el Auto-Reply configurado)
      await emailjs.send(
        "service_x2xiuku", // SERVICE ID
        "template_cr8bpcb", //TEMPLATE ID PRINCIPAL
        templateParams,
        "0D2_RTpDkgCusGQIy", //PUBLIC KEY
      );

      // 4. TRACKING GA4
      trackGA4Event("generate_lead_gay_games", {
        package_type: selectedPackage,
        experience_count: selectedExperiences.length,
        experiences: selectedExperiences.join(", "),
        location: "registration_form_footer",
      });

      // 5. TRACKING GOOGLE ADS
      if (typeof window !== "undefined" && (window as any).gtag) {
        (window as any).gtag("event", "conversion", {
          send_to: "AW-16594563469",
          value: 1.0,
          currency: "EUR",
        });
      }

      setIsSubmitted(true);
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      alert("Something went wrong. Please try again or contact us directly.");
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <section className="py-24 text-center animate-in fade-in zoom-in duration-500">
        <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
          <Check className="w-10 h-10 text-primary" />
        </div>
        <h2 className="text-3xl font-black uppercase italic mb-4">
          Thank you!
        </h2>
        <p className="text-muted-foreground max-w-md mx-auto italic text-pretty">
          Your request for{" "}
          <strong className="text-foreground">
            Package {selectedPackage.toUpperCase()}
          </strong>{" "}
          has been sent. Our local team will contact you shortly to finalize
          your Mediterranean experience.
        </p>
        <Button
          variant="outline"
          className="mt-8 rounded-full px-8"
          onClick={() => (window.location.href = "/")}
        >
          Back to Home
        </Button>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 bg-card">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-primary font-bold text-sm uppercase tracking-[0.3em]">
            Booking
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-foreground mt-2 mb-4 uppercase italic">
            Request Your Package
          </h2>
          <p className="text-muted-foreground italic">
            Personalize your Valencia experience with our local LGBTQ+ hosts
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-card-foreground/50 rounded-[40px] p-8 md:p-12 border border-muted shadow-2xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* --- 1. Personal Info --- */}
            <div className="space-y-4">
              <h3 className="font-black text-xl uppercase italic border-b border-muted pb-2 text-primary">
                1. Personal Info
              </h3>
              <div>
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  name="name"
                  required
                  placeholder="John Doe"
                  className="mt-1.5 bg-card rounded-xl"
                />
              </div>
              <div>
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="john@example.com"
                  className="mt-1.5 bg-card rounded-xl"
                />
              </div>
              <div>
                <Label htmlFor="phone">WhatsApp / Phone *</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  placeholder="+34 000 000 000"
                  className="mt-1.5 bg-card rounded-xl"
                />
              </div>
              <div>
                <Label htmlFor="country">Country *</Label>
                <Input
                  id="country"
                  name="country"
                  required
                  placeholder="Your country"
                  className="mt-1.5 bg-card rounded-xl"
                />
              </div>
            </div>

            {/* --- 2. Trip Details --- */}
            <div className="space-y-4">
              <h3 className="font-black text-xl uppercase italic border-b border-muted pb-2 text-primary">
                2. Trip Details
              </h3>
              <div>
                <Label>Preferred Package *</Label>
                <Select
                  name="package_selection"
                  required
                  onValueChange={(value) => {
                    setSelectedPackage(value);
                    setSelectedExperiences([]);
                  }}
                >
                  <SelectTrigger className="mt-1.5 bg-card rounded-xl">
                    <SelectValue placeholder="Select a package" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="a">
                      Package A (Max 3 experiences)
                    </SelectItem>
                    <SelectItem value="b">
                      Package B (Max 4 experiences)
                    </SelectItem>
                    <SelectItem value="c">
                      Package C (Max 5 experiences)
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>Number of Travelers *</Label>
                <Select name="travelers" required>
                  <SelectTrigger className="mt-1.5 bg-card rounded-xl">
                    <SelectValue placeholder="How many people?" />
                  </SelectTrigger>
                  <SelectContent>
                    {[1, 2, 3, 4, 5, "6+"].map((num) => (
                      <SelectItem key={num} value={num.toString()}>
                        {num}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>Need Accommodation? *</Label>
                <Select name="accommodation" required>
                  <SelectTrigger className="mt-1.5 bg-card rounded-xl">
                    <SelectValue placeholder="Select option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="yes">Yes, please</SelectItem>
                    <SelectItem value="no">No, I have mine</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="arrival">Arrival Date *</Label>
                <Input
                  id="arrival"
                  name="arrival"
                  type="date"
                  required
                  className="mt-1.5 bg-card rounded-xl"
                />
              </div>
            </div>
          </div>

          {/* --- 3. Experiences --- */}
          <div className="mb-8 p-6 bg-background/50 rounded-3xl border border-muted/50">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
              <Label className="text-foreground block font-black text-xl uppercase italic">
                3. Select Experiences
              </Label>
              {selectedPackage && (
                <span
                  className={cn(
                    "text-xs font-black uppercase tracking-widest px-4 py-2 rounded-full transition-colors",
                    selectedExperiences.length === currentLimit
                      ? "bg-primary text-white"
                      : "bg-primary/10 text-primary",
                  )}
                >
                  {selectedExperiences.length} / {currentLimit} Selected
                </span>
              )}
            </div>

            {!selectedPackage && (
              <div className="flex items-center gap-2 p-4 bg-primary/5 text-primary rounded-xl mb-4 text-sm font-medium border border-primary/10">
                <AlertCircle size={18} />
                Please select a package first to unlock the experiences.
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {experiences.map((exp) => {
                const isSelected = selectedExperiences.includes(exp);
                const isMaxed =
                  selectedExperiences.length >= currentLimit && !isSelected;
                return (
                  <div
                    key={exp}
                    onClick={() => handleToggle(exp)}
                    className={cn(
                      "group flex items-center gap-3 p-3 rounded-xl border transition-all duration-300 select-none",
                      !selectedPackage
                        ? "opacity-40 cursor-not-allowed"
                        : "cursor-pointer",
                      isSelected
                        ? "border-muted bg-muted/15 ring-1 ring-muted"
                        : isMaxed
                          ? "opacity-50 grayscale"
                          : "bg-card border-muted hover:border-primary/50",
                    )}
                  >
                    <div
                      className={cn(
                        "flex size-5 shrink-0 items-center justify-center rounded-lg border transition-colors",
                        isSelected
                          ? "bg-muted border-muted text-white"
                          : "border-muted bg-background",
                      )}
                    >
                      {isSelected && (
                        <Check className="size-3.5" strokeWidth={4} />
                      )}
                    </div>
                    <span
                      className={cn(
                        "text-xs font-semibold leading-tight",
                        isSelected
                          ? "text-foreground"
                          : "text-muted-foreground",
                      )}
                    >
                      {exp}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mb-10">
            <Label htmlFor="message">Additional Comments (Optional)</Label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Any special requests or dietary requirements?"
              className="mt-1.5 w-full px-4 py-3 bg-card border border-muted rounded-2xl focus:ring-2 focus:ring-primary outline-none transition-all"
            />
          </div>

          <Button
            type="submit"
            size="lg"
            disabled={selectedExperiences.length === 0 || isLoading}
            className="w-full bg-primary hover:bg-zinc-900 text-white font-black uppercase italic tracking-widest py-8 rounded-full shadow-xl shadow-primary/20 disabled:opacity-30 transition-all"
          >
            {isLoading ? (
              "Sending..."
            ) : (
              <>
                <Send className="w-5 h-5 mr-2" /> Request Custom Itinerary
              </>
            )}
          </Button>
        </form>
      </div>
    </section>
  );
}
