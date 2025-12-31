import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

/**
 * Header Component
 * Black background as requested, with white text/logo.
 */
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-4 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-0`}
    >
      <div className={`container mx-auto px-6 py-4 rounded-xl flex items-center justify-between transition-all duration-300 shadow-xl ${scrolled ? "bg-black/95 backdrop-blur-sm" : "bg-black"
        }`}>
        {/* Logo */}
        <div
          className="bg-white px-2 py-0.5 -skew-x-6 cursor-pointer hover:scale-105 transition-transform"
          onClick={() => scrollToSection("hero")}
        >
          <h1 className="font-display text-3xl md:text-4xl text-black tracking-wider skew-x-6">
            CRUNCHD
          </h1>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection("menu")}
            className="font-display text-lg tracking-wide text-white hover:text-primary transition-colors relative group"
          >
            MENU
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
          </button>
          <button
            onClick={() => scrollToSection("reviews")}
            className="font-display text-lg tracking-wide text-white hover:text-primary transition-colors relative group"
          >
            REVIEWS
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
          </button>

          <button
            onClick={() => scrollToSection("location")}
            className="bg-white text-black font-display text-sm tracking-wider px-6 py-2 rounded-sm hover:bg-primary hover:text-white transition-colors uppercase border-2 border-transparent hover:border-white"
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
          className="font-display text-4xl text-white hover:text-primary transition-colors"
        >
          MENU
        </button>
        <button
          onClick={() => scrollToSection("reviews")}
          className="font-display text-4xl text-white hover:text-primary transition-colors"
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
