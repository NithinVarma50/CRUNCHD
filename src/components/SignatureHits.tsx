import chickenBurger from "@/assets/chicken-burger.png";
import cheesePizza from "@/assets/cheese-pizza.png";
import chaatBomb from "@/assets/chaat-bomb.png";
import crunchMaggi from "@/assets/crunch-maggi.png";

const signatureItems = [
  {
    title: "Turn Up The Flavor, Turn Up The Fun.",
    subtitle: "CRUNCHD",
    image: chickenBurger,
  },
  {
    title: "Snack Like You Mean It.",
    subtitle: "CRUNCHD",
    image: cheesePizza,
  },
  {
    title: "Street Food, But Make It Art.",
    subtitle: "CRUNCHD",
    image: chaatBomb,
  },
  {
    title: "Crunch O'Clock Is Now.",
    subtitle: "CRUNCHD",
    image: crunchMaggi,
  },
];

const SignatureHits = () => {
  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {signatureItems.map((item, index) => (
            <div 
              key={index}
              className="group relative bg-foreground overflow-hidden transition-transform duration-300 hover:-translate-y-1"
              style={{ 
                borderRadius: "8px",
              }}
            >
              {/* Food image */}
              <div className="aspect-square overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content overlay */}
              <div className="p-4">
                <p className="text-background text-sm md:text-base leading-tight mb-1">
                  {item.title}
                </p>
                <p className="font-display text-primary text-xs">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SignatureHits;
