import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-md border-b border-border/10 py-3 shadow-sm" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <h1 
          className="font-display text-4xl text-primary cursor-pointer tracking-wider hover:scale-105 transition-transform"
          onClick={() => scrollToSection("hero")}
        >
          THE CHOMPO
        </h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          <button 
            onClick={() => scrollToSection("menu")}
            className="font-display text-lg tracking-wide hover:text-primary transition-colors relative group"
          >
            MENU
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
          </button>
          <button 
            onClick={() => scrollToSection("reviews")}
            className="font-display text-lg tracking-wide hover:text-primary transition-colors relative group"
          >
            REVIEWS
             <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
          </button>
          <button 
            onClick={() => scrollToSection("location")}
            className="btn-poster bg-transparent border-2 border-foreground hover:bg-foreground hover:text-background text-sm px-6 py-2"
          >
            FIND LOCATION
          </button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-foreground hover:text-primary transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div 
        className={`md:hidden fixed inset-0 bg-background z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button 
          onClick={() => scrollToSection("menu")}
          className="font-display text-4xl hover:text-primary transition-colors"
        >
          MENU
        </button>
        <button 
          onClick={() => scrollToSection("reviews")}
          className="font-display text-4xl hover:text-primary transition-colors"
        >
          REVIEWS
        </button>
        <button 
          onClick={() => scrollToSection("location")}
          className="btn-poster bg-foreground text-background text-xl px-10 py-4"
        >
          FIND LOCATION
        </button>
      </div>
    </header>
  );
};

export default Header;
