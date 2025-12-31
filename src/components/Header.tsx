import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

/**
 * Header Component
 * Full-width solid black bar for a cleaner "poster" look.
 */
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black py-4 shadow-lg border-b border-white/10">
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div
          className="bg-white px-3 py-1 -skew-x-6 cursor-pointer hover:scale-105 transition-transform"
          onClick={() => scrollToSection("hero")}
        >
          <h1 className="font-display text-4xl text-black tracking-wider skew-x-6 leading-none pt-1">
            CRUNCHD
          </h1>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          <button
            onClick={() => scrollToSection("menu")}
            className="font-display text-xl tracking-wide text-white hover:text-primary transition-colors relative group uppercase"
          >
            MENU
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
          </button>
          <button
            onClick={() => scrollToSection("reviews")}
            className="font-display text-xl tracking-wide text-white hover:text-primary transition-colors relative group uppercase"
          >
            REVIEWS
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
          </button>

          <button
            onClick={() => scrollToSection("location")}
            className="bg-white text-black font-display text-lg tracking-wider px-8 py-2 rounded-sm hover:bg-primary hover:text-white transition-colors uppercase border-2 border-transparent hover:border-white"
          >
            Find Location
          </button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white hover:text-primary transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div
        className={`md:hidden fixed inset-0 bg-black/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-300 ${isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <button
          onClick={() => scrollToSection("menu")}
          className="font-display text-5xl text-white hover:text-primary transition-colors"
        >
          MENU
        </button>
        <button
          onClick={() => scrollToSection("reviews")}
          className="font-display text-5xl text-white hover:text-primary transition-colors"
        >
          REVIEWS
        </button>
        <button
          onClick={() => scrollToSection("location")}
          className="font-display text-2xl bg-white text-black px-8 py-3 rounded-sm"
        >
          FIND LOCATION
        </button>
      </div>
    </header>
  );
};

export default Header;
