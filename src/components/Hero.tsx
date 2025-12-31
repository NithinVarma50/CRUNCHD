import { Link } from "react-router-dom";
import cafeIllustration from "@/assets/cafe-illustration.png";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen bg-primary pt-28 pb-0 overflow-hidden">
      {/* Hand-drawn cloud doodles */}
      <div className="absolute top-32 right-8 md:right-16 text-primary-foreground/40">
        <svg width="80" height="40" viewBox="0 0 80 40" fill="none">
          <ellipse cx="25" cy="25" rx="20" ry="12" stroke="currentColor" strokeWidth="2" fill="none"/>
          <ellipse cx="45" cy="20" rx="18" ry="10" stroke="currentColor" strokeWidth="2" fill="none"/>
          <ellipse cx="60" cy="25" rx="15" ry="10" stroke="currentColor" strokeWidth="2" fill="none"/>
        </svg>
      </div>
      <div className="absolute top-40 left-8 text-primary-foreground/40">
        <svg width="60" height="30" viewBox="0 0 60 30" fill="none">
          <ellipse cx="20" cy="18" rx="15" ry="10" stroke="currentColor" strokeWidth="2" fill="none"/>
          <ellipse cx="40" cy="15" rx="12" ry="8" stroke="currentColor" strokeWidth="2" fill="none"/>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        {/* THE subtitle */}
        <p className="font-display text-2xl md:text-3xl text-primary-foreground mb-2">
          THE
        </p>
        
        {/* Main Title */}
        <h1 className="font-display text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] xl:text-[12rem] text-primary-foreground leading-[0.85] tracking-tight">
          CRUNCHD
        </h1>
        
        {/* Tagline */}
        <p className="font-display text-lg sm:text-xl md:text-2xl text-primary-foreground/90 mt-4 md:mt-6 tracking-wide">
          THE AMAZING FOOD YOU EVER TASTED
        </p>

        {/* Cafe Illustration */}
        <div className="mt-8 md:mt-12 relative max-w-2xl mx-auto">
          <img 
            src={cafeIllustration} 
            alt="CRUNCHD Cafe" 
            className="w-full h-auto max-h-[300px] md:max-h-[400px] object-contain filter brightness-0 invert opacity-90"
          />
        </div>

        {/* CTA Button */}
        <div className="mt-8 pb-24">
          <Link 
            to="/#location"
            className="inline-block font-display text-base md:text-lg bg-primary-foreground text-primary px-8 py-3 border-2 border-foreground hover:bg-foreground hover:text-background transition-all duration-200"
            style={{ boxShadow: "4px 4px 0 0 hsl(var(--foreground))" }}
          >
            FIND LOCATION
          </Link>
        </div>
      </div>

      {/* Drip border at bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg 
          viewBox="0 0 1440 80" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path 
            d="M0 0H1440V40C1440 40 1400 80 1350 40C1300 0 1260 80 1200 40C1140 0 1100 80 1050 40C1000 0 960 80 900 40C840 0 800 80 750 40C700 0 660 80 600 40C540 0 500 80 450 40C400 0 360 80 300 40C240 0 200 80 150 40C100 0 60 80 0 40V0Z" 
            fill="hsl(42, 67%, 95%)"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
