import chickenBurger from "@/assets/chicken-burger.png";
import cheesePizza from "@/assets/cheese-pizza.png";
import chaatBomb from "@/assets/chaat-bomb.png";
import crunchMaggi from "@/assets/crunch-maggi.png";

const signatureItems = [
  {
    name: "Crunch Chicken Burger",
    image: chickenBurger,
    description: "Double crispy patty, cheese drip, secret sauce",
    price: "₹149",
  },
  {
    name: "Cheese Burst Pizza",
    image: cheesePizza,
    description: "Stuffed crust, triple cheese, loaded toppings",
    price: "₹199",
  },
  {
    name: "Chaat Bomb",
    image: chaatBomb,
    description: "Crispy papdi, tangy chutneys, flavor explosion",
    price: "₹89",
  },
  {
    name: "Crunch Maggi",
    image: crunchMaggi,
    description: "Street-style, cheese loaded, crispy toppings",
    price: "₹79",
  },
];

const SignatureHits = () => {
  return (
    <section className="py-20 md:py-32 bg-primary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 inset-x-0 h-16 w-full wavy-separator rotate-180 transform -translate-y-1 bg-background z-10"></div>

      <div className="container mx-auto px-6 relative z-20">
        <div className="text-center mb-16 md:mb-24 space-y-4">
          <h2 className="font-display text-5xl md:text-8xl text-primary-foreground tracking-tighter">
            SIGNATURE HITS
          </h2>
          <p className="text-primary-foreground/90 font-body text-xl md:text-2xl max-w-2xl mx-auto border-b-2 border-primary-foreground/20 pb-4 inline-block">
            The crowd favorites. The legends. The must-tries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {signatureItems.map((item, index) => (
            <div
              key={index}
              className="group relative bg-background p-6 transition-all duration-300 hover:-translate-y-2"
            >
              {/* Card Border Effect */}
              <div className="absolute inset-0 border-2 border-foreground translate-x-1 translate-y-1 transition-transform group-hover:translate-x-2 group-hover:translate-y-2 pointer-events-none"></div>

              {/* Image Area */}
              <div className="relative h-48 mb-6 flex items-center justify-center">
                <div className="absolute inset-0 bg-secondary/50 rounded-full scale-75 blur-xl group-hover:scale-100 transition-transform duration-500"></div>
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-contain drop-shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
                />
              </div>

              {/* Content */}
              <div className="text-center space-y-2">
                <h3 className="font-display text-2xl text-foreground leading-none">
                  {item.name}
                </h3>
                <div className="pt-4 flex items-center justify-center gap-4">
                  <button className="btn-poster-filled text-xs px-4 py-2 hover:scale-105 transition-transform">
                    ADD TO PLATE →
                  </button>
                  {/* Hover Splash Effect handled via CSS utility or just implicit in the button style */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 inset-x-0 h-16 w-full wavy-separator bg-background transform translate-y-1 z-10"></div>
    </section>
  );
};

export default SignatureHits;
