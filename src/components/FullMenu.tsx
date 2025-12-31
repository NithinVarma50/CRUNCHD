import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { toast } from "sonner";

const menuCategories = [
  {
    name: "CHICKEN MODE 🐔",
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
    name: "BURGER & PIZZA CLUB 🍔",
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
    name: "MOMO & WRAP ZONE 🥟",
    items: [
      { name: "Veg Steam Momos", price: "₹79" },
      { name: "Fried Chicken Momos", price: "₹99" },
      { name: "Paneer Tikka Momos", price: "₹89" },
      { name: "Crunchy Chicken Wrap", price: "₹119" },
      { name: "Veg Masala Wrap", price: "₹99" },
    ],
  },
  {
    name: "PASTA & NOODLE LAB 🍝",
    items: [
      { name: "White Sauce Pasta", price: "₹129" },
      { name: "Red Sauce Pasta", price: "₹119" },
      { name: "Masala Street Pasta", price: "₹139" },
      { name: "Chilli Garlic Noodles", price: "₹109" },
      { name: "Desi Chowmein Crunch", price: "₹99" },
    ],
  },
  {
    name: "SIDES & CHAOS 🍟",
    items: [
      { name: "Peri Peri Fries", price: "₹79" },
      { name: "Cheese Loaded Fries", price: "₹99" },
      { name: "Chaat Bomb Bowl", price: "₹89" },
      { name: "Samosa Smash", price: "₹59" },
    ],
  },
  {
    name: "DRINKS 🧃",
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
  const { addToCart } = useCart();

  const handleAddToCart = (item: { name: string; price: string }) => {
    addToCart(item);
    toast.success(`Added ${item.name} to cart!`);
  };

  return (
    <section id="menu" className="py-20 md:py-32 bg-background min-h-screen">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl md:text-8xl text-foreground">
            FULL MENU
          </h2>
          <p className="text-muted-foreground text-xl font-display uppercase tracking-widest text-primary">
            CRUNCHD EDITION
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          {/* Sidebar Categories (Desktop) / Horizontal Scroll (Mobile) */}
          <div className="w-full lg:w-1/4 flex lg:flex-col gap-2 overflow-x-auto pb-4 lg:pb-0 scrollbar-hide">
            {menuCategories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(index)}
                className={`text-left px-6 py-4 font-display text-xl transition-all duration-300 border-l-4 whitespace-nowrap ${activeCategory === index
                    ? "border-primary text-primary bg-primary/5 pl-8"
                    : "border-transparent text-muted-foreground hover:text-foreground hover:pl-8"
                  }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Menu Items Grid */}
          <div className="w-full lg:w-3/4">
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 key={activeCategory}">
              {menuCategories[activeCategory].items.map((item, index) => (
                <div key={index} className="group flex justify-between items-baseline border-b border-dashed border-muted-foreground/20 pb-2">
                  <div>
                    <h4 className="font-display text-lg text-foreground group-hover:text-primary transition-colors">
                      {item.name}
                    </h4>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="font-display text-xl text-primary">{item.price}</span>
                    <button
                      onClick={() => handleAddToCart(item)}
                      className="opacity-0 group-hover:opacity-100 transition-opacity text-xs bg-foreground text-background px-3 py-1 rounded-sm font-bold hover:bg-primary hover:text-primary-foreground"
                    >
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
