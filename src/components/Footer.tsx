import { Instagram, MessageCircle, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Logo & tagline */}
          <div>
            <h2 className="font-display text-3xl text-primary mb-2">CRUNCHD</h2>
            <p className="text-background/60 text-sm">Street Food. Extra Crunch.</p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <Link to="/" className="block text-background/80 hover:text-primary transition-colors mb-2">HOME</Link>
              <Link to="/menu" className="block text-background/80 hover:text-primary transition-colors mb-2">MENU</Link>
              <a href="#location" className="block text-background/80 hover:text-primary transition-colors">LOCATION</a>
            </div>
            <div>
              <a href="#reviews" className="block text-background/80 hover:text-primary transition-colors mb-2">REVIEWS</a>
              <a href="#" className="block text-background/80 hover:text-primary transition-colors mb-2">ABOUT US</a>
              <a href="#" className="block text-background/80 hover:text-primary transition-colors">CONTACT</a>
            </div>
          </div>

          {/* Social */}
          <div className="flex md:justify-end gap-4">
            <a href="#" className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
              <MessageCircle size={20} />
            </a>
            <a href="#" className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
              <MapPin size={20} />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-background/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-background/40 text-xs">
            CRUNCHD © {new Date().getFullYear()}. All rights reserved.
          </p>
          <p className="text-background/40 text-xs italic">
            Crunch responsibly.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
