import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import chickenBurger from "@/assets/chicken-burger.png";
import cheesePizza from "@/assets/cheese-pizza.png";
import chaatBomb from "@/assets/chaat-bomb.png";
import crunchMaggi from "@/assets/crunch-maggi.png";

const menuCategories = [
  {
    name: "CHICKEN MODE",
    emoji: "🐔",
    items: [
      { name: "Crunch Chicken Fried Rice", price: "₹129", image: chickenBurger },
      { name: "Spicy Chicken Noodles", price: "₹119", image: crunchMaggi },
      { name: "Chicken Popcorn Crunch", price: "₹99", image: chickenBurger },
      { name: "Crispy Chicken Burger", price: "₹149", image: chickenBurger },
      { name: "Chicken Cheese Momos", price: "₹109", image: chaatBomb },
      { name: "Chicken Loaded Fries", price: "₹139", image: chaatBomb },
    ],
  },
  {
    name: "BURGER & PIZZA CLUB",
    emoji: "🍔",
    items: [
      { name: "Classic Crunch Burger", price: "₹129", image: chickenBurger },
      { name: "Double Patty Smash Burger", price: "₹179", image: chickenBurger },
      { name: "Cheese Burst Pizza", price: "₹199", image: cheesePizza },
      { name: "Peri Peri Paneer Pizza", price: "₹189", image: cheesePizza },
      { name: "Chicken BBQ Pizza", price: "₹219", image: cheesePizza },
      { name: "Mini Street Pizza Bites", price: "₹99", image: cheesePizza },
    ],
  },
  {
    name: "MOMO & WRAP ZONE",
    emoji: "🥟",
    items: [
      { name: "Veg Steam Momos", price: "₹79", image: chaatBomb },
      { name: "Fried Chicken Momos", price: "₹99", image: chaatBomb },
      { name: "Paneer Tikka Momos", price: "₹89", image: chaatBomb },
      { name: "Crunchy Chicken Wrap", price: "₹119", image: chickenBurger },
      { name: "Veg Masala Wrap", price: "₹99", image: chaatBomb },
    ],
  },
  {
    name: "PASTA & NOODLE LAB",
    emoji: "🍝",
    items: [
      { name: "White Sauce Pasta", price: "₹129", image: crunchMaggi },
      { name: "Red Sauce Pasta", price: "₹119", image: crunchMaggi },
      { name: "Masala Street Pasta", price: "₹139", image: crunchMaggi },
      { name: "Chilli Garlic Noodles", price: "₹109", image: crunchMaggi },
      { name: "Desi Chowmein Crunch", price: "₹99", image: crunchMaggi },
    ],
  },
  {
    name: "SIDES & CHAOS",
    emoji: "🍟",
    items: [
      { name: "Peri Peri Fries", price: "₹79", image: chaatBomb },
      { name: "Cheese Loaded Fries", price: "₹99", image: chaatBomb },
      { name: "Chaat Bomb Bowl", price: "₹89", image: chaatBomb },
      { name: "Samosa Smash", price: "₹59", image: chaatBomb },
    ],
  },
  {
    name: "DRINKS",
    emoji: "🧃",
    items: [
      { name: "Cold Coffee Chaos", price: "₹79", image: crunchMaggi },
      { name: "Oreo Shake", price: "₹99", image: crunchMaggi },
      { name: "Chocolate Thick Shake", price: "₹109", image: crunchMaggi },
      { name: "Lime Soda Reloaded", price: "₹49", image: crunchMaggi },
    ],
  },
];

const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-28 pb-16">
        <div className="container mx-auto px-4">
          {/* Back button */}
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft size={20} />
            <span>Back to Home</span>
          </Link>

          {/* Page Title */}
          <div className="text-center mb-12">
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-foreground mb-4">
              THE <span className="text-primary">MENU</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Pick your poison. No judgement.
            </p>
          </div>

          {/* Category tabs */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12">
            {menuCategories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(index)}
                className={`font-display text-xs md:text-sm px-3 md:px-5 py-2 border-2 border-foreground transition-all duration-200 ${
                  activeCategory === index
                    ? "bg-primary text-primary-foreground"
                    : "bg-background text-foreground hover:bg-muted"
                }`}
                style={{
                  boxShadow: activeCategory === index ? "3px 3px 0 0 hsl(var(--foreground))" : "none",
                }}
              >
                <span className="mr-1">{category.emoji}</span>
                <span className="hidden sm:inline">{category.name}</span>
              </button>
            ))}
          </div>

          {/* Category Title */}
          <div className="text-center mb-8">
            <h2 className="font-display text-3xl md:text-4xl text-foreground flex items-center justify-center gap-3">
              <span className="text-4xl">{menuCategories[activeCategory].emoji}</span>
              {menuCategories[activeCategory].name}
            </h2>
          </div>

          {/* Menu items grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {menuCategories[activeCategory].items.map((item, index) => (
              <div 
                key={index}
                className="group bg-foreground overflow-hidden transition-all duration-300 hover:-translate-y-1"
                style={{ 
                  boxShadow: "6px 6px 0 0 hsl(var(--primary))",
                }}
              >
                {/* Image */}
                <div className="h-40 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-display text-lg text-background mb-2 leading-tight">
                    {item.name}
                  </h3>
                  
                  <div className="flex items-center justify-between">
                    <span className="font-display text-2xl text-primary">
                      {item.price}
                    </span>
                    <button className="font-display text-xs bg-primary text-primary-foreground px-4 py-2 hover:bg-accent transition-colors">
                      ADD →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Full menu list below */}
          <div className="mt-20 max-w-3xl mx-auto">
            <h3 className="font-display text-2xl md:text-3xl text-center text-foreground mb-8">
              FULL MENU
            </h3>
            
            {menuCategories.map((category, catIndex) => (
              <div key={catIndex} className="mb-10">
                <h4 className="font-display text-xl text-primary mb-4 flex items-center gap-2">
                  <span>{category.emoji}</span>
                  {category.name}
                </h4>
                <div className="space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <div 
                      key={itemIndex}
                      className="flex items-center justify-between py-3 border-b border-border last:border-b-0"
                    >
                      <div className="flex items-center gap-3">
                        <span className="font-display text-muted-foreground text-sm w-6">
                          {String(itemIndex + 1).padStart(2, '0')}
                        </span>
                        <span className="text-foreground">{item.name}</span>
                      </div>
                      <span className="font-display text-primary">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MenuPage;
