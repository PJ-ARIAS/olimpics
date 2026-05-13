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
import { Send, Check } from "lucide-react";
import { cn } from "../../lib/utils"; 

export function RegistrationForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedExperiences, setSelectedExperiences] = useState<string[]>([]);

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

  const handleToggle = (exp: string) => {
    setSelectedExperiences((prev) =>
      prev.includes(exp) ? prev.filter((e) => e !== exp) : [...prev, exp]
    );
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
        <p className="text-muted-foreground">Tu solicitud ha sido enviada con éxito.</p>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 bg-card">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-5xl font-bold text-foreground">Request Your Package</h2>
        </div>

        <form onSubmit={handleSubmit} className="bg-secondary rounded-2xl p-8 border border-border">
          {/* Inputs de texto y Selects */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="space-y-4">
              <div>
                <Label htmlFor="name">Full Name *</Label>
                <Input id="name" required placeholder="Your name" className="mt-1.5 bg-background" />
              </div>
              <div>
                <Label htmlFor="email">Email *</Label>
                <Input id="email" type="email" required placeholder="your@email.com" className="mt-1.5 bg-background" />
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <Label>Preferred Package *</Label>
                <Select required>
                  <SelectTrigger className="mt-1.5 bg-background">
                    <SelectValue placeholder="Select a package" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="a">Package A</SelectItem>
                    <SelectItem value="b">Package B</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Sección de Experiencias - RECONSTRUIDA PARA EVITAR BUCLES */}
          <div className="mb-8">
            <Label className="text-foreground mb-4 block font-semibold">
              Experiences of Interest (select all that apply)
            </Label>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {experiences.map((exp) => {
                const isSelected = selectedExperiences.includes(exp);
                return (
                  <div
                    key={exp}
                    onClick={() => handleToggle(exp)}
                    className={cn(
                      "group flex items-center gap-3 p-3 rounded-lg border transition-all cursor-pointer select-none",
                      isSelected 
                        ? "border-primary bg-primary/10" 
                        : "bg-background border-muted hover:border-primary/50"
                    )}
                  >
                    {/* Checkbox Custom Manual (Sin Radix para evitar el error) */}
                    <div className={cn(
                      "flex size-4 shrink-0 items-center justify-center rounded-sm border shadow-sm transition-colors",
                      isSelected ? "bg-primary border-primary text-primary-foreground" : "border-input bg-background"
                    )}>
                      {isSelected && <Check className="size-3" strokeWidth={4} />}
                    </div>
                    
                    <span className={cn(
                      "text-sm transition-colors",
                      isSelected ? "text-foreground font-medium" : "text-muted-foreground"
                    )}>
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
              placeholder="Your preferences..."
              className="mt-1.5 w-full px-3 py-2 bg-background border border-muted rounded-md focus:ring-2 focus:ring-primary outline-none"
            />
          </div>

          <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-accent font-bold">
            <Send className="w-5 h-5 mr-2" />
            Send Request
          </Button>
        </form>
      </div>
    </section>
  );
}