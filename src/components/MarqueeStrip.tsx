const items = [
  { emoji: "🍔", text: "BURGER" },
  { emoji: "🥪", text: "SANDWICH" },
  { emoji: "🍕", text: "PIZZA" },
  { emoji: "🍟", text: "FRIES" },
  { emoji: "🍗", text: "CHICKEN LEG" },
  { emoji: "🥟", text: "MOMOS" },
  { emoji: "🍜", text: "NOODLES" },
  { emoji: "🌶", text: "SPICY" },
];

const MarqueeStrip = () => {
  return (
    <div className="bg-foreground py-4 overflow-hidden border-y-4 border-foreground">
      <div className="marquee-track flex gap-8 whitespace-nowrap">
        {[...items, ...items, ...items, ...items].map((item, index) => (
          <span key={index} className="flex items-center gap-2 font-display text-lg md:text-xl text-background">
            <span className="text-2xl">{item.emoji}</span>
            <span>{item.text}</span>
            <span className="text-primary mx-4">•</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default MarqueeStrip;
