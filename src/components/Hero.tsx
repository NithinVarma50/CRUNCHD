import chickenBurger from "@/assets/chicken-burger.png";
import { ArrowMax, ArrowRight } from "lucide-react";

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
        <div className="flex flex-col items-start text-left space-y-6">
          <div className="inline-block bg-primary text-primary-foreground px-4 py-1 font-display tracking-widest text-sm rotate-2">
            THE AMAZING FOOD YOU EVER TASTED
          </div>

          <h1 className="font-display text-[5rem] sm:text-[7rem] md:text-[9rem] leading-[0.85] text-primary tracking-tighter uppercase drop-shadow-sm">
            THE <br />
            <span className="text-foreground">CHOMPO</span>
          </h1>

          <p className="font-body text-xl md:text-2xl text-muted-foreground max-w-md border-l-4 border-primary pl-4">
            Crave, the chompo way. Get ready to crunch.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <button
              onClick={() => scrollToSection("menu")}
              className="btn-poster-filled text-xl group flex items-center gap-2"
            >
              ORDER NOW <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollToSection("location")}
              className="btn-poster text-xl"
            >
              VIEW MENU
            </button>
          </div>
        </div>

        {/* Right: Blended Image Composition */}
        <div className="relative w-full h-[500px] lg:h-[700px] flex items-center justify-center">
          {/* Main Hero Image with Blending */}
          <div className="relative z-10 w-full max-w-[600px] hover:scale-105 transition-transform duration-700 ease-out">
            <img
              src={chickenBurger}
              alt="The Chompo Burger"
              className="w-full h-auto object-contain drop-shadow-2xl"
            />
            {/* Blending overlay gradient at the bottom to merge with background/content below */}
            <div className="absolute -bottom-10 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-20 pointer-events-none"></div>
          </div>

          {/* Decorative blended text behind the burger */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 whitespace-nowrap opacity-10 select-none pointer-events-none">
            <span className="font-display text-[12rem] text-primary image-blend-multiply">CRUNCHY</span>
          </div>

          {/* Floating Illustration Elements (keeping it organized, not random) */}
          <div className="absolute top-10 right-10 w-24 h-24 border-4 border-foreground rounded-full flex items-center justify-center animate-spin-slow opacity-20 hidden lg:flex">
            <span className="font-display text-xs">EST 2024</span>
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
