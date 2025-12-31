const CTAStrip = () => {
  const scrollToMenu = () => {
    const element = document.getElementById("menu");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-primary py-12 md:py-16 border-y-4 border-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-display text-4xl md:text-6xl lg:text-7xl text-primary-foreground mb-8">
          READY FOR A FLAVOR ADVENTURE?
        </h2>
        <button 
          onClick={scrollToMenu}
          className="sticker-button bg-primary-foreground text-foreground text-xl md:text-2xl px-10 py-5"
        >
          COME GET CRUNCHD 🔥
        </button>
      </div>
    </section>
  );
};

export default CTAStrip;
