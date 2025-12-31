import { Instagram, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background text-foreground py-16 border-t border-border/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
          {/* Brand */}
          <div className="space-y-2">
            <h1 className="font-display text-5xl text-primary leading-none">
              CRUNCHD ©
            </h1>
            <p className="font-body text-muted-foreground">
              Street Food. Extra Crunch.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-12 font-display text-xl text-foreground/80">
            <a href="#" className="hover:text-primary transition-colors flex items-center gap-2">
              <Instagram size={20} /> Instagram
            </a>
            <a href="#" className="hover:text-primary transition-colors flex items-center gap-2">
              <Phone size={20} /> WhatsApp
            </a>
            <a href="#location" className="hover:text-primary transition-colors flex items-center gap-2">
              <MapPin size={20} /> Location
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/5 text-center text-sm text-muted-foreground opacity-60 font-body">
          Crunch responsibly.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
