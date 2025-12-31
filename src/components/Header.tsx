import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary border-b-4 border-foreground">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <h1 
          className="font-display text-3xl md:text-4xl text-primary-foreground cursor-pointer"
          onClick={() => scrollToSection("hero")}
        >
          CRUNCHD
        </h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <button 
            onClick={() => scrollToSection("menu")}
            className="font-display text-lg text-primary-foreground hover:underline underline-offset-4 transition-all"
          >
            MENU
          </button>
          <button 
            onClick={() => scrollToSection("reviews")}
            className="font-display text-lg text-primary-foreground hover:underline underline-offset-4 transition-all"
          >
            REVIEWS
          </button>
          <button 
            onClick={() => scrollToSection("location")}
            className="sticker-button bg-primary-foreground text-foreground"
          >
            FIND US
          </button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-primary-foreground"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <nav className="md:hidden bg-primary border-t-4 border-foreground py-6 px-4 flex flex-col gap-4">
          <button 
            onClick={() => scrollToSection("menu")}
            className="font-display text-2xl text-primary-foreground text-left hover:underline"
          >
            MENU
          </button>
          <button 
            onClick={() => scrollToSection("reviews")}
            className="font-display text-2xl text-primary-foreground text-left hover:underline"
          >
            REVIEWS
          </button>
          <button 
            onClick={() => scrollToSection("location")}
            className="font-display text-2xl text-primary-foreground text-left hover:underline"
          >
            FIND US
          </button>
        </nav>
      )}
    </header>
  );
};

export default Header;
