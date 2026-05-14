import { useState } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import logo from "../../images/logo1.png";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "About us", href: "#about" },
    { label: "Packages", href: "#packages" },
    { label: "Experiences", href: "#experiences" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card-foreground/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Eliminamos h-16 y añadimos py-2 o py-4 para que el alto sea dinámico */}
        <div className="flex items-center justify-between py-3 md:py-4">
          {/* Logo Container */}
          <a href="#" className="flex-shrink-0">
            <img
              src={logo}
              alt="The best of valencia logo"
              // Ajusta h-12 o h-14 según qué tan grande quieras el logo
              className="h-20 w-auto object-contain transition-all"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-semibold text-muted hover:text-accent transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              asChild
              className="bg-muted hover:bg-accent text-card font-bold"
            >
              <a href="#contact">Book now</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t border-border animate-in slide-in-from-top-2 duration-300">
          <nav className="flex flex-col px-4 py-6 gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-foreground font-medium py-2 text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button
              asChild
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground mt-2"
            >
              <a href="#contact" onClick={() => setIsMenuOpen(false)}>
                Book now
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
