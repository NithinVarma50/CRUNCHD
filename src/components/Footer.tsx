import { Instagram, MessageCircle, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="text-center md:text-left">
            <h2 className="font-display text-4xl md:text-5xl text-primary mb-2">
              CRUNCHD
            </h2>
            <p className="text-background/70">Street Food. Extra Crunch.</p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-6">
            <a 
              href="#" 
              className="w-12 h-12 bg-primary rounded-full flex items-center justify-center hover:bg-accent transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={24} className="text-primary-foreground" />
            </a>
            <a 
              href="#" 
              className="w-12 h-12 bg-primary rounded-full flex items-center justify-center hover:bg-accent transition-colors"
              aria-label="WhatsApp"
            >
              <MessageCircle size={24} className="text-primary-foreground" />
            </a>
            <a 
              href="#" 
              className="w-12 h-12 bg-primary rounded-full flex items-center justify-center hover:bg-accent transition-colors"
              aria-label="Location"
            >
              <MapPin size={24} className="text-primary-foreground" />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-background/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-background/50 text-sm">
            CRUNCHD © {new Date().getFullYear()}. All rights reserved.
          </p>
          <p className="text-background/50 text-sm italic">
            Crunch responsibly. 🔥
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
