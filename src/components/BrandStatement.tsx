const BrandStatement = () => {
  return (
    <>
      {/* Part 1: Text Blocks (Black Background) */}
      <section className="py-20 md:py-32 bg-black">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 items-start">
            {/* Statement 1 */}
            <div className="text-center md:text-left">
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white leading-tight">
                WE DON'T DO<br />
                <span className="text-primary">BORING FOOD.</span>
              </h2>
              <p className="font-display text-2xl md:text-3xl text-white/90 mt-4 leading-relaxed">
                WE DO CRUNCH.
              </p>
            </div>

            {/* Statement 2 */}
            <div className="text-center">
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white leading-tight">
                STREET FOOD,<br />
                <span className="text-primary">BUT BUILT</span>
              </h2>
              <p className="font-display text-2xl md:text-3xl text-white/90 mt-4 leading-relaxed">
                DIFFERENT.
              </p>
            </div>

            {/* Statement 3 */}
            <div className="text-center md:text-right">
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary leading-tight">
                FAST.<br />
                LOUD.
              </h2>
              <p className="font-display text-2xl md:text-3xl text-white/90 mt-4 leading-relaxed">
                UNAPOLOGETIC.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Part 2: Spinning Text (Cream/Default Background) */}
      <section className="py-16 bg-background flex justify-center border-b border-border/10">
        <div className="spin-slow w-48 h-48 md:w-64 md:h-64 relative opacity-90 hover:opacity-100 transition-opacity">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <defs>
              <path id="circlePath" d="M 100, 100 m -70, 0 a 70,70 0 1,1 140,0 a 70,70 0 1,1 -140,0" />
            </defs>
            {/* Text updated to Primary (Red) for contrast on Cream */}
            <text className="font-display text-sm md:text-base fill-primary tracking-widest">
              <textPath href="#circlePath">
                CRUNCHD • CRUNCHD • CRUNCHD • CRUNCHD • CRUNCHD •
              </textPath>
            </text>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-6xl">🔥</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default BrandStatement;
