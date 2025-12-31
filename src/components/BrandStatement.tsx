const BrandStatement = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Statement 1 */}
          <div className="text-center md:text-left">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight">
              WE DON'T DO<br />
              <span className="text-primary">BORING FOOD.</span>
            </h2>
            <p className="font-display text-3xl md:text-4xl text-foreground mt-2">
              WE DO CRUNCH.
            </p>
          </div>

          {/* Statement 2 */}
          <div className="text-center">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight">
              STREET FOOD,<br />
              <span className="text-primary">BUT BUILT</span>
            </h2>
            <p className="font-display text-3xl md:text-4xl text-foreground mt-2">
              DIFFERENT.
            </p>
          </div>

          {/* Statement 3 */}
          <div className="text-center md:text-right">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary leading-tight">
              FAST.<br />
              LOUD.
            </h2>
            <p className="font-display text-3xl md:text-4xl text-foreground mt-2">
              UNAPOLOGETIC.
            </p>
          </div>
        </div>

        {/* Spinning text decoration */}
        <div className="relative mt-16 md:mt-24 flex justify-center">
          <div className="spin-slow w-48 h-48 md:w-64 md:h-64 relative">
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <defs>
                <path id="circlePath" d="M 100, 100 m -70, 0 a 70,70 0 1,1 140,0 a 70,70 0 1,1 -140,0" />
              </defs>
              <text className="font-display text-sm md:text-base fill-foreground">
                <textPath href="#circlePath">
                  CRUNCHD • CRUNCHD • CRUNCHD • CRUNCHD • CRUNCHD •
                </textPath>
              </text>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-5xl">🔥</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStatement;
