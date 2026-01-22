import { ConnoisseurStackInteractor } from "@/components/ui/connoisseur-stack-interactor";

const menuItems = [
  {
    num: "01",
    name: "Gourmet Burgers",
    clipId: "clip-original",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  },
  {
    num: "02",
    name: "Fresh Desserts",
    clipId: "clip-hexagons",
    image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  },
  {
    num: "03",
    name: "Artisan Waffles",
    clipId: "clip-pixels",
    image: "https://images.unsplash.com/photo-1562376552-0d160a2f238d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  }
];

const BrandStatement = () => {
  return (
    <>
      {/* Part 1: Text Blocks (Black Background) */}
      <section className="py-20 md:py-32 bg-black">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 items-start">
            {/* Statement 1 */}
            <div className="text-center md:text-left">
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white leading-[0.9] tracking-[-0.06em]">
                WE DON'T DO<br />
                <span className="text-primary">BORING FOOD.</span>
              </h2>
              <p className="font-display text-2xl md:text-3xl text-white/90 mt-4 leading-relaxed tracking-tight">
                WE DO CRUNCH.
              </p>
            </div>

            {/* Statement 2 */}
            <div className="text-center">
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white leading-[0.9] tracking-[-0.06em]">
                STREET FOOD,<br />
                <span className="text-primary">BUT BUILT</span>
              </h2>
              <p className="font-display text-2xl md:text-3xl text-white/90 mt-4 leading-relaxed tracking-tight">
                DIFFERENT.
              </p>
            </div>

            {/* Statement 3 */}
            <div className="text-center md:text-right">
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary leading-[0.9] tracking-[-0.06em]">
                FAST.<br />
                LOUD.
              </h2>
              <p className="font-display text-2xl md:text-3xl text-white/90 mt-4 leading-relaxed tracking-tight">
                UNAPOLOGETIC.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Part 2: Interactive GSAP Animation (Cream/Default Background) */}
      <section className="py-16 bg-background border-b border-border/10">
        <ConnoisseurStackInteractor items={menuItems} />
      </section>
    </>
  );
};

export default BrandStatement;
