const BrandStatement = () => {
  return (
    <section className="py-20 md:py-32 bg-black/95">
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

        {/* Spinning text decoration - White Theme */}
        <div className="relative mt-20 flex justify-center">
          <div className="spin-slow w-40 h-40 md:w-56 md:h-56 relative opacity-80 hover:opacity-100 transition-opacity">
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <defs>
                <path id="circlePath" d="M 100, 100 m -70, 0 a 70,70 0 1,1 140,0 a 70,70 0 1,1 -140,0" />
              </defs>
              <text className="font-display text-sm md:text-base fill-white">
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
