const CTAStrip = () => {
  const scrollToMenu = () => {
    const element = document.getElementById("menu");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-primary py-24 relative overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-black to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <h2 className="font-display text-5xl md:text-7xl lg:text-9xl text-primary-foreground mb-12 tracking-tighter leading-none">
          READY TO<br />CRUNCH?
        </h2>
        <button
          onClick={scrollToMenu}
          className="btn-poster bg-background text-foreground border-2 border-background hover:bg-transparent hover:text-background text-xl md:text-2xl px-12 py-6"
        >
          ORDER NOW
        </button>
      </div>
    </section>
  );
};

export default CTAStrip;
