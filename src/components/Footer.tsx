import { Instagram, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16 border-t-8 border-primary">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center justify-between">
          {/* Brand */}
          <div className="space-y-4 text-center md:text-left">
            <h1 className="font-display text-6xl md:text-8xl text-primary leading-none">
              CRUNCHD ©
            </h1>
            <p className="font-display text-2xl md:text-3xl text-background/80">
              Street Food. Extra Crunch.
            </p>
            <div className="flex gap-4 justify-center md:justify-start pt-4">
              <a href="#" className="hover:text-primary transition-colors"><Instagram size={32} /></a>
              <a href="#" className="hover:text-primary transition-colors"><Phone size={32} /></a>
              <a href="#" className="hover:text-primary transition-colors"><MapPin size={32} /></a>
            </div>
          </div>

          {/* Links / Small Text */}
          <div className="text-center md:text-right space-y-4">
            <div className="flex flex-col md:flex-row gap-6 md:gap-8 justify-center md:justify-end font-display text-xl text-background/60">
              <a href="#menu" className="hover:text-primary transition-colors">Instagram</a>
              <a href="#location" className="hover:text-primary transition-colors">WhatsApp</a>
              <a href="#location" className="hover:text-primary transition-colors">Location</a>
            </div>
            <p className="text-sm font-body opacity-40 mt-12">
              (Crunch responsibly.)
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
