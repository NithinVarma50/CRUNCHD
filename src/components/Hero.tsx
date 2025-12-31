import FloatingFoodHero from '@/components/ui/hero-section-7';
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const heroImages = [
    {
      src: 'https://b.zmtcdn.com/data/o2_assets/110a09a9d81f0e5305041c1b507d0f391743058910.png',
      alt: 'A delicious cheeseburger',
      className: 'w-40 sm:w-56 md:w-64 lg:w-72 top-12 left-4 sm:left-10 md:top-24 md:left-24 animate-float',
    },
    {
      src: 'https://b.zmtcdn.com/data/o2_assets/b4f62434088b0ddfa9b370991f58ca601743060218.png',
      alt: 'A bamboo steamer with dumplings',
      className: 'w-24 sm:w-32 md:w-44 top-12 right-4 sm:right-8 md:top-20 md:right-20 animate-float',
    },
    {
      src: 'https://b.zmtcdn.com/data/o2_assets/316495f4ba2a9c9d9aa97fed9fe61cf71743059024.png',
      alt: 'A slice of pizza',
      className: 'w-28 sm:w-36 md:w-52 bottom-20 right-5 sm:right-10 md:bottom-24 md:right-24 animate-float',
    },
    {
      src: 'https://b.zmtcdn.com/data/o2_assets/70b50e1a48a82437bfa2bed925b862701742892555.png',
      alt: 'A basil leaf',
      className: 'w-6 sm:w-10 top-1/3 left-[20%] animate-float opacity-80',
    },
    {
      src: 'https://b.zmtcdn.com/data/o2_assets/9ef1cc6ecf1d92798507ffad71e9492d1742892584.png',
      alt: 'A slice of tomato',
      className: 'w-6 sm:w-8 top-1/2 right-[20%] animate-float opacity-80',
    },
    {
      src: 'https://b.zmtcdn.com/data/o2_assets/9ef1cc6ecf1d92798507ffad71e9492d1742892584.png',
      alt: 'A slice of tomato',
      className: 'w-6 sm:w-8 top-2/3 left-[25%] animate-float opacity-80',
    },
  ];

  return (
    <FloatingFoodHero
      title="CRUNCHD"
      description="STREET FOOD. EXTRA CRUNCH. Built for cravings. Served loud. Gone fast."
      images={heroImages}
      className="bg-background min-h-screen"
    >
      <div className="flex flex-wrap justify-center gap-4 pt-6">
        <button
          onClick={() => scrollToSection("menu")}
          className="btn-poster-filled text-lg px-8 py-3 flex items-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"
        >
          VIEW MENU <ArrowRight size={20} />
        </button>
        <button
          onClick={() => scrollToSection("location")}
          className="btn-poster text-lg px-8 py-3 hover:bg-foreground/5"
        >
          FIND US
        </button>
      </div>
    </FloatingFoodHero>
  );
};

export default Hero;
