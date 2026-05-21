import { MapPin, Mail } from "lucide-react";
import logo from "../../public/logo1.png";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card-foreground border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              {/* logo footer */}
              <img src={logo} alt="Logo" className="h-20" />
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Local LGBTQ+ Mediterranean lifestyle hosts. Your connection to
              authentic Valencia during the Gay Games 2026.
            </p>
            {/* <div className="flex gap-4"> en caso de gregar algo aca debajo del logo</div> */}
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-muted font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#about"
                  className="text-muted-foreground hover:text-muted transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#packages"
                  className="text-muted-foreground hover:text-muted transition-colors"
                >
                  Packages
                </a>
              </li>
              <li>
                <a
                  href="#experiences"
                  className="text-muted-foreground hover:text-muted transition-colors"
                >
                  Experiences
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-muted-foreground hover:text-muted transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-muted font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-muted flex-shrink-0 mt-0.5" />
                <span>Calle Zapateros 13, 46003</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-5 h-5 text-muted flex-shrink-0" />
                <a
                  href="mailto:info@thebestofvalencia.com"
                  className="hover:text-primary transition-colors"
                >
                  info@thebestofvalencia.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            {currentYear} The Best of Valencia. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Experience Valencia like a local during the Gay Games
          </p>
        </div>
      </div>
    </footer>
  );
}
