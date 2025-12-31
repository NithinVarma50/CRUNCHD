import chickenBurger from "@/assets/chicken-burger.png";
import cheesePizza from "@/assets/cheese-pizza.png";
import chaatBomb from "@/assets/chaat-bomb.png";
import crunchMaggi from "@/assets/crunch-maggi.png";

const signatureItems = [
  {
    name: "Crunch Chicken Burger",
    emoji: "🔥",
    image: chickenBurger,
    description: "Double crispy patty, cheese drip, secret sauce",
    price: "₹149",
  },
  {
    name: "Cheese Burst Pizza",
    emoji: "🧀",
    image: cheesePizza,
    description: "Stuffed crust, triple cheese, loaded toppings",
    price: "₹199",
  },
  {
    name: "Chaat Bomb",
    emoji: "🌶",
    image: chaatBomb,
    description: "Crispy papdi, tangy chutneys, flavor explosion",
    price: "₹89",
  },
  {
    name: "Crunch Maggi",
    emoji: "🍜",
    image: crunchMaggi,
    description: "Street-style, cheese loaded, crispy toppings",
    price: "₹79",
  },
];

const SignatureHits = () => {
  return (
    <section className="py-16 md:py-24 bg-primary wavy-border relative">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-5xl md:text-7xl text-primary-foreground text-center mb-4">
          SIGNATURE HITS
        </h2>
        <p className="text-primary-foreground/80 text-center text-lg md:text-xl mb-12 md:mb-16">
          The crowd favorites. The legends. The must-tries.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {signatureItems.map((item, index) => (
            <div 
              key={index}
              className="food-card bg-background border-4 border-foreground p-6 group"
              style={{ 
                boxShadow: "8px 8px 0 0 hsl(var(--foreground))",
              }}
            >
              {/* Emoji badge */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-2xl border-4 border-foreground z-10 group-hover:animate-pulse-scale">
                {item.emoji}
              </div>

              {/* Food image */}
              <div className="relative h-40 mb-4 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                />
                {/* Sauce splash on hover */}
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full blur-2xl" />
              </div>

              {/* Content */}
              <h3 className="font-display text-xl md:text-2xl text-foreground mb-2">
                {item.name}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                {item.description}
              </p>
              
              {/* Price and CTA */}
              <div className="flex items-center justify-between">
                <span className="font-display text-2xl text-primary">
                  {item.price}
                </span>
                <button className="font-display text-sm bg-foreground text-background px-4 py-2 hover:bg-primary hover:text-primary-foreground transition-colors">
                  ADD →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SignatureHits;
