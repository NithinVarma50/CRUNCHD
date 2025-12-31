import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="bg-foreground mx-4 md:mx-8 mt-4 rounded-sm">
        <div className="px-6 py-4 flex items-center justify-between">
          <Link to="/" className="font-display text-2xl md:text-3xl text-background">
            CRUNCHD
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-2">
            <Link 
              to="/menu"
              className="font-display text-base bg-background text-foreground px-6 py-2 hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              MENU
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-background"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <nav className="md:hidden border-t border-background/20 py-4 px-6 flex flex-col gap-3">
            <Link 
              to="/menu"
              onClick={() => setIsMenuOpen(false)}
              className="font-display text-xl text-background hover:text-primary transition-colors"
            >
              MENU
            </Link>
            <Link 
              to="/#reviews"
              onClick={() => setIsMenuOpen(false)}
              className="font-display text-xl text-background hover:text-primary transition-colors"
            >
              REVIEWS
            </Link>
            <Link 
              to="/#location"
              onClick={() => setIsMenuOpen(false)}
              className="font-display text-xl text-background hover:text-primary transition-colors"
            >
              FIND US
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
