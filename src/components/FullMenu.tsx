import { useState } from "react";

const menuCategories = [
  {
    name: "CHICKEN MODE",
    emoji: "🐔",
    items: [
      { name: "Crunch Chicken Fried Rice", price: "₹129" },
      { name: "Spicy Chicken Noodles", price: "₹119" },
      { name: "Chicken Popcorn Crunch", price: "₹99" },
      { name: "Crispy Chicken Burger", price: "₹149" },
      { name: "Chicken Cheese Momos", price: "₹109" },
      { name: "Chicken Loaded Fries", price: "₹139" },
    ],
  },
  {
    name: "BURGER & PIZZA CLUB",
    emoji: "🍔",
    items: [
      { name: "Classic Crunch Burger", price: "₹129" },
      { name: "Double Patty Smash Burger", price: "₹179" },
      { name: "Cheese Burst Pizza", price: "₹199" },
      { name: "Peri Peri Paneer Pizza", price: "₹189" },
      { name: "Chicken BBQ Pizza", price: "₹219" },
      { name: "Mini Street Pizza Bites", price: "₹99" },
    ],
  },
  {
    name: "MOMO & WRAP ZONE",
    emoji: "🥟",
    items: [
      { name: "Veg Steam Momos", price: "₹79" },
      { name: "Fried Chicken Momos", price: "₹99" },
      { name: "Paneer Tikka Momos", price: "₹89" },
      { name: "Crunchy Chicken Wrap", price: "₹119" },
      { name: "Veg Masala Wrap", price: "₹99" },
    ],
  },
  {
    name: "PASTA & NOODLE LAB",
    emoji: "🍝",
    items: [
      { name: "White Sauce Pasta", price: "₹129" },
      { name: "Red Sauce Pasta", price: "₹119" },
      { name: "Masala Street Pasta", price: "₹139" },
      { name: "Chilli Garlic Noodles", price: "₹109" },
      { name: "Desi Chowmein Crunch", price: "₹99" },
    ],
  },
  {
    name: "SIDES & CHAOS",
    emoji: "🍟",
    items: [
      { name: "Peri Peri Fries", price: "₹79" },
      { name: "Cheese Loaded Fries", price: "₹99" },
      { name: "Chaat Bomb Bowl", price: "₹89" },
      { name: "Samosa Smash", price: "₹59" },
    ],
  },
  {
    name: "DRINKS",
    emoji: "🧃",
    items: [
      { name: "Cold Coffee Chaos", price: "₹79" },
      { name: "Oreo Shake", price: "₹99" },
      { name: "Chocolate Thick Shake", price: "₹109" },
      { name: "Lime Soda Reloaded", price: "₹49" },
    ],
  },
];

const FullMenu = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="menu" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-5xl md:text-7xl text-foreground text-center mb-4">
          THE <span className="text-primary">MENU</span>
        </h2>
        <p className="text-muted-foreground text-center text-lg md:text-xl mb-12">
          Pick your poison. No judgement.
        </p>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {menuCategories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(index)}
              className={`font-display text-sm md:text-base px-4 py-2 border-2 border-foreground transition-all duration-200 shake-hover ${
                activeCategory === index
                  ? "bg-primary text-primary-foreground"
                  : "bg-background text-foreground hover:bg-muted"
              }`}
              style={{
                boxShadow: activeCategory === index ? "4px 4px 0 0 hsl(var(--foreground))" : "none",
              }}
            >
              {category.emoji} {category.name}
            </button>
          ))}
        </div>

        {/* Menu items grid */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-foreground text-background p-8 md:p-12 border-4 border-foreground" style={{ boxShadow: "12px 12px 0 0 hsl(var(--primary))" }}>
            <h3 className="font-display text-3xl md:text-4xl text-primary mb-8 flex items-center gap-3">
              <span className="text-4xl">{menuCategories[activeCategory].emoji}</span>
              {menuCategories[activeCategory].name}
            </h3>

            <div className="space-y-4">
              {menuCategories[activeCategory].items.map((item, index) => (
                <div 
                  key={index}
                  className="flex items-center justify-between border-b border-background/20 pb-4 last:border-b-0 group"
                >
                  <div className="flex items-center gap-4">
                    <span className="font-display text-xl text-primary group-hover:scale-125 transition-transform">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="text-lg md:text-xl group-hover:text-primary transition-colors">
                      {item.name}
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="font-display text-xl text-primary">
                      {item.price}
                    </span>
                    <button className="opacity-0 group-hover:opacity-100 transition-opacity font-display text-xs bg-primary text-primary-foreground px-3 py-1">
                      ADD
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FullMenu;
