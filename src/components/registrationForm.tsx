import { useState } from "react";
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

export function RegistrationForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
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

  // Definir límites por paquete
  const packageLimits: Record<string, number> = {
    a: 2, // Paquete A: Máximo 3 experiencias
    b: 3, // Paquete B: Máximo 5 experiencias
    c: 4, // Paquete C: pueden ser todas
  };

  const currentLimit = packageLimits[selectedPackage] || 0;

  const handleToggle = (exp: string) => {
    if (!selectedPackage) return; // No permitir seleccionar si no hay paquete

    setSelectedExperiences((prev) => {
      const isSelected = prev.includes(exp);

      // Si ya está seleccionado, lo quitamos
      if (isSelected) return prev.filter((e) => e !== exp);

      // Si no está seleccionado, revisamos el límite
      if (prev.length < currentLimit) {
        return [...prev, exp];
      }

      // Si llegamos al límite, no añadimos más
      return prev;
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <section className="py-24 text-center">
        <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
          <Check className="w-10 h-10 text-primary" />
        </div>
        <h2 className="text-3xl font-bold mb-4">¡Gracias!</h2>
        <p className="text-muted-foreground">
          Tu solicitud ha sido enviada con éxito.
        </p>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 bg-card">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-5xl font-bold text-foreground">
            Request Your Package
          </h2>
          <p className="mt-4 text-muted-foreground">
            Personalize your Valencia experience
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-card-foreground/50 rounded-2xl p-8 border border-muted"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* --- COLUMNA 1: Datos Personales --- */}
            <div className="space-y-4">
              <h3 className="font-bold text-lg border-muted pb-2">
                Personal Information
              </h3>
              <div>
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  required
                  placeholder="John Doe"
                  className="mt-1.5 bg-card"
                />
              </div>
              <div>
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  placeholder="john@example.com"
                  className="mt-1.5 bg-card"
                />
              </div>
              <div>
                <Label htmlFor="phone">Phone (WhatsApp preferred) *</Label>
                <Input
                  id="phone"
                  type="tel"
                  required
                  placeholder="+34 000 000 000"
                  className="mt-1.5 bg-card"
                />
              </div>
              <div>
                <Label htmlFor="country">Country *</Label>
                <Input
                  id="country"
                  required
                  placeholder="Your country"
                  className="mt-1.5 bg-card"
                />
              </div>
            </div>

            {/* --- COLUMNA 2: Detalles del Viaje --- */}
            <div className="space-y-4">
              <h3 className="font-bold text-lg border-b pb-2">Trip Details</h3>
              <div>
                <Label>Preferred Package *</Label>
                <Select
                  required
                  onValueChange={(value) => {
                    setSelectedPackage(value);
                    setSelectedExperiences([]); // Resetear experiencias al cambiar paquete
                  }}
                >
                  <SelectTrigger className="mt-1.5 bg-card">
                    <SelectValue placeholder="Select a package" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="a">
                      Package A (Max 3 experiences)
                    </SelectItem>
                    <SelectItem value="b">
                      Package B (Max 5 experiences)
                    </SelectItem>
                    <SelectItem value="c">Package C (Full Access)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>Number of Travelers *</Label>
                <Select required>
                  <SelectTrigger className="mt-1.5 bg-card">
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
                <Select required>
                  <SelectTrigger className="mt-1.5 bg-card">
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
                  type="date"
                  required
                  className="mt-1.5 bg-card"
                />
              </div>
            </div>
          </div>

          {/* --- SECCIÓN EXPERIENCIAS CON LÍMITE --- */}
          <div className="mb-8">
            <div className="flex justify-between items-end mb-4">
              <Label className="text-foreground block font-semibold text-lg">
                Experiences of Interest
              </Label>
              {selectedPackage && (
                <span
                  className={cn(
                    "text-sm font-medium px-3 py-1 rounded-full",
                    selectedExperiences.length === currentLimit
                      ? "bg-orange-100 text-orange-700"
                      : "bg-primary/10 text-primary",
                  )}
                >
                  Selected: {selectedExperiences.length} / {currentLimit}
                </span>
              )}
            </div>

            {!selectedPackage && (
              <div className="flex items-center gap-2 p-4 bg-amber-50 text-amber-700 rounded-lg mb-4 text-sm">
                <AlertCircle size={18} />
                Please select a package first to unlock experiences.
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
                      "group flex items-center gap-3 p-3 rounded-lg border transition-all select-none",
                      !selectedPackage
                        ? "opacity-50 cursor-not-allowed"
                        : "cursor-pointer",
                      isSelected
                        ? "border-muted bg-muted/10"
                        : isMaxed
                          ? "opacity-60 bg-card/20 border-dashed"
                          : "bg-background border-muted hover:border-muted/50",
                    )}
                  >
                    <div
                      className={cn(
                        "flex size-4 shrink-0 items-center justify-center rounded-sm border shadow-sm transition-colors",
                        isSelected
                          ? "bg-primary border-muted text-primary-foreground"
                          : "border-input bg-background",
                      )}
                    >
                      {isSelected && (
                        <Check className="size-3 text-card" strokeWidth={4} />
                      )}
                    </div>

                    <span
                      className={cn(
                        "text-sm transition-colors",
                        isSelected
                          ? "text-foreground font-medium"
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

          <div className="mb-8">
            <Label htmlFor="message">Additional Comments</Label>
            <textarea
              id="message"
              rows={4}
              placeholder="Tell us about your flight schedule, dietary requirements, or any special requests..."
              className="mt-1.5 w-full px-3 py-2 bg-card border border-muted rounded-md focus:ring-2 focus:ring-primary outline-none"
            />
          </div>

          <Button
            type="submit"
            size="lg"
            disabled={selectedExperiences.length === 0}
            className="w-full bg-primary hover:bg-muted text-card font-bold disabled:opacity-50"
          >
            <Send className="w-5 h-5 mr-2" />
            Request Custom Itinerary
          </Button>
        </form>
      </div>
    </section>
  );
}
