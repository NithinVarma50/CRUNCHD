import chickenBurger from "@/assets/chicken-burger.png";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative h-screen min-h-[800px] flex items-center overflow-hidden bg-background">
      {/* Background Graphic Stripe */}
      <div className="absolute top-0 right-0 w-[40%] h-full bg-primary/10 -skew-x-12 origin-top-right transform translate-x-1/4 hidden lg:block" />

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center h-full pt-20">

        {/* Left: Typography */}
        <div className="flex flex-col items-start text-left space-y-6 animate-in slide-in-from-left duration-700">

          <h1 className="font-display text-[5rem] sm:text-[7rem] md:text-[9rem] leading-[0.85] text-primary tracking-tighter uppercase drop-shadow-sm select-none">
            CRUNCHD
          </h1>

          <p className="font-display text-2xl sm:text-3xl md:text-5xl text-foreground mt-2">
            STREET FOOD. EXTRA CRUNCH.
          </p>

          <p className="font-body text-xl md:text-2xl text-muted-foreground max-w-md border-l-4 border-primary pl-4 italic">
            Built for cravings. Served loud. Gone fast.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <button
              onClick={() => scrollToSection("menu")}
              className="btn-poster-filled text-xl group flex items-center gap-2"
            >
              VIEW MENU <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollToSection("location")}
              className="btn-poster text-xl"
            >
              FIND US
            </button>
          </div>
        </div>

        {/* Right: Floating Sticker Graphic */}
        <div className="relative w-full h-[500px] lg:h-[700px] flex items-center justify-center">
          {/* Background Blob for Depth */}
          <div className="absolute w-[400px] h-[400px] bg-secondary rounded-full blur-3xl opacity-50 animate-pulse-scale"></div>

          {/* Sticker Burger */}
          <div className="relative z-10 w-full max-w-[550px] animate-float">
            <div className="relative transition-transform duration-300 hover:scale-105 cursor-pointer group">
              {/* Sticker White Border Effect using Filter */}
              <img
                src={chickenBurger}
                alt="The Chompo Burger"
                className="w-full h-auto object-contain transition-all duration-300"
                style={{
                  filter: "drop-shadow(0 0 10px white) drop-shadow(0 0 5px white) drop-shadow(8px 8px 0px rgba(0,0,0,0.2))"
                }}
              />
              {/* Comic Action Marks */}
              <div className="absolute -top-6 -right-6 text-6xl animate-bounce hidden md:block select-none opacity-0 group-hover:opacity-100 transition-opacity">💥</div>
              <div className="absolute bottom-6 -left-6 text-6xl animate-pulse hidden md:block select-none opacity-0 group-hover:opacity-100 transition-opacity">🤤</div>
            </div>
          </div>

          {/* Text Behind */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 whitespace-nowrap opacity-5 select-none pointer-events-none">
            <span className="font-display text-[15rem] leading-none text-foreground">TASTY</span>
          </div>
        </div>
      </div>

      {/* Bottom Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <div className="wavy-separator h-12 bg-repeat-x"></div>
      </div>
    </section>
  );
};

export default Hero;
