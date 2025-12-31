import { Link } from "react-router-dom";

const FlavorAdventure = () => {
  return (
    <section className="relative bg-primary py-16 md:py-24 overflow-hidden">
      {/* Decorative drip at top */}
      <div className="absolute top-0 left-0 right-0 transform rotate-180">
        <svg 
          viewBox="0 0 1440 40" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path 
            d="M0 0H1440V20C1400 40 1350 0 1300 20C1250 40 1200 0 1150 20C1100 40 1050 0 1000 20C950 40 900 0 850 20C800 40 750 0 700 20C650 40 600 0 550 20C500 40 450 0 400 20C350 40 300 0 250 20C200 40 150 0 100 20C50 40 0 20 0 20V0Z" 
            fill="hsl(42, 67%, 95%)"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="font-display text-4xl md:text-6xl lg:text-7xl text-primary-foreground leading-tight mb-4">
          READY FOR A<br />
          FLAVOR<br />
          ADVENTURE
        </h2>
        <p className="text-primary-foreground/80 text-base md:text-lg max-w-md mx-auto mb-8">
          Dive into bold tastes and playful bites crafted just for you.
        </p>
        <Link 
          to="/menu"
          className="inline-flex items-center gap-2 font-display text-base bg-foreground text-background px-8 py-3 hover:bg-background hover:text-foreground transition-colors border-2 border-foreground"
        >
          DISCOVER NOW
          <span className="text-lg">~~→</span>
        </Link>
      </div>
    </section>
  );
};

export default FlavorAdventure;
