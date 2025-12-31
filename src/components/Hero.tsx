import chickenBurger from "@/assets/chicken-burger.png";
import cheesePizza from "@/assets/cheese-pizza.png";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen bg-primary pt-24 pb-16 overflow-hidden wavy-border">
      {/* Hand-drawn doodles */}
      <div className="absolute top-32 left-4 md:left-12 text-primary-foreground opacity-60">
        <svg width="60" height="40" viewBox="0 0 60 40" fill="none" className="bounce-slow">
          <path d="M5 35 Q30 5 55 25" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round"/>
          <path d="M45 15 L55 25 L45 30" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <div className="absolute top-40 right-8 md:right-20 text-primary-foreground opacity-60">
        <svg width="80" height="50" viewBox="0 0 80 50" fill="none" className="animate-float">
          <ellipse cx="40" cy="25" rx="35" ry="20" stroke="currentColor" strokeWidth="2" fill="none" strokeDasharray="8 4"/>
        </svg>
      </div>

      {/* Floating food images */}
      <img 
        src={chickenBurger} 
        alt="Crispy chicken burger" 
        className="absolute -right-20 md:right-10 top-1/3 w-48 md:w-72 lg:w-96 animate-float opacity-90 rotate-12 hidden sm:block"
      />
      <img 
        src={cheesePizza} 
        alt="Cheese burst pizza" 
        className="absolute -left-16 md:left-10 bottom-32 w-40 md:w-64 lg:w-80 animate-float opacity-90 -rotate-12 hidden sm:block"
        style={{ animationDelay: "1s" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center pt-12 md:pt-24">
          {/* Main Title */}
          <h1 className="font-display text-7xl sm:text-8xl md:text-9xl lg:text-[12rem] text-primary-foreground leading-none tracking-tight">
            CRUNCHD
          </h1>
          
          {/* Tagline */}
          <p className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-primary-foreground mt-4 md:mt-6">
            STREET FOOD. EXTRA CRUNCH.
          </p>

          {/* Subtext */}
          <p className="text-primary-foreground/80 text-lg md:text-xl mt-6 md:mt-8 font-body italic max-w-md mx-auto">
            "Built for cravings. Served loud. Gone fast."
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10 md:mt-14">
            <button 
              onClick={() => scrollToSection("menu")}
              className="sticker-button bg-primary-foreground text-foreground text-xl"
            >
              VIEW MENU
            </button>
            <button 
              onClick={() => scrollToSection("location")}
              className="sticker-button bg-transparent text-primary-foreground border-primary-foreground text-xl"
            >
              FIND US
            </button>
          </div>

          {/* Bite mark decoration */}
          <div className="absolute bottom-10 left-1/4 text-primary-foreground/40 hidden lg:block">
            <svg width="80" height="60" viewBox="0 0 80 60" fill="currentColor">
              <path d="M10 30 Q20 10 40 20 Q60 30 70 15 L65 45 Q45 55 25 50 Q10 45 10 30Z"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
