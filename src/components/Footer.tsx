import { Instagram, MessageCircle, MapPin, ArrowUpRight } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background pt-20 pb-10 overflow-hidden relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-background/10 pb-16">

          {/* Brand Column */}
          <div className="md:col-span-6 space-y-6">
            <h2 className="font-display text-[5rem] md:text-[8rem] leading-[0.8] text-primary select-none">
              CHOMPO
            </h2>
            <p className="text-background/60 text-xl max-w-md">
              Street food reimagined. Bold flavors, fresh ingredients, and zero apologies.
            </p>
          </div>

          {/* Links Column */}
          <div className="md:col-span-3 space-y-6 pt-4">
            <h3 className="font-display text-2xl text-background">EXPLORE</h3>
            <ul className="space-y-4 text-background/80 font-medium">
              <li><a href="#menu" className="hover:text-primary transition-colors">Our Menu</a></li>
              <li><a href="#story" className="hover:text-primary transition-colors">Our Story</a></li>
              <li><a href="#locations" className="hover:text-primary transition-colors">Locations</a></li>
              <li><a href="#franchise" className="hover:text-primary transition-colors">Franchise</a></li>
            </ul>
          </div>

          {/* Social / Contact */}
          <div className="md:col-span-3 space-y-6 pt-4">
            <h3 className="font-display text-2xl text-background">CONNECT</h3>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 border border-background/20 rounded-full flex items-center justify-center hover:bg-primary hover:border-primary hover:text-foreground transition-all group">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-12 h-12 border border-background/20 rounded-full flex items-center justify-center hover:bg-primary hover:border-primary hover:text-foreground transition-all group">
                <MessageCircle size={20} />
              </a>
              <a href="#" className="w-12 h-12 border border-background/20 rounded-full flex items-center justify-center hover:bg-primary hover:border-primary hover:text-foreground transition-all group">
                <MapPin size={20} />
              </a>
            </div>
            <a href="mailto:hello@chompo.com" className="inline-flex items-center gap-2 text-background/60 hover:text-primary transition-colors">
              hello@chompo.com <ArrowUpRight size={16} />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 text-sm text-background/40">
          <p>© {currentYear} THE CHOMPO CO.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-background transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-background transition-colors">Terms of Service</a>
          </div>
          <p className="font-display tracking-widest text-primary">MADE FRESH DAILY</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
