import { Link } from "react-router-dom";

const FuelUp = () => {
  return (
    <section className="bg-foreground py-16 md:py-20 relative overflow-hidden">
      {/* Decorative cloud */}
      <div className="absolute top-8 right-8 text-background/20">
        <svg width="100" height="60" viewBox="0 0 100 60" fill="none">
          <ellipse cx="30" cy="35" rx="25" ry="15" stroke="currentColor" strokeWidth="2" fill="none"/>
          <ellipse cx="55" cy="30" rx="22" ry="12" stroke="currentColor" strokeWidth="2" fill="none"/>
          <ellipse cx="75" cy="35" rx="18" ry="12" stroke="currentColor" strokeWidth="2" fill="none"/>
        </svg>
      </div>

      <div className="container mx-auto px-4 text-center">
        <p className="text-background/60 text-sm md:text-base tracking-wider mb-2">
          JOIN THE FLAVOR REVOLUTION!
        </p>
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-background mb-8">
          FUEL UP WITH<br />
          <span className="text-primary">CRUNCHD!</span>
        </h2>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/menu"
            className="inline-block font-display text-base bg-primary text-primary-foreground px-8 py-3 hover:bg-accent transition-colors"
          >
            VIEW MENU
          </Link>
          <a 
            href="#location"
            className="inline-block font-display text-base bg-transparent text-background px-8 py-3 border-2 border-background hover:bg-background hover:text-foreground transition-colors"
          >
            FIND US
          </a>
        </div>
      </div>
    </section>
  );
};

export default FuelUp;
