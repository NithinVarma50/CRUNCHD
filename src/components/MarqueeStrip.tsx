const items = [
  { emoji: "🍔", text: "BURGER" },
  { emoji: "🥪", text: "SANDWICH" },
  { emoji: "🍕", text: "PIZZA" },
  { emoji: "🍟", text: "FRIES" },
  { emoji: "🍗", text: "CHICKEN LEG" },
  { emoji: "🥟", text: "MOMOS" },
  { emoji: "🍜", text: "NOODLES" },
];

const MarqueeStrip = () => {
  return (
    <div className="bg-primary py-3 overflow-hidden border-y-2 border-foreground">
      <div className="marquee-track flex gap-12 whitespace-nowrap">
        {[...items, ...items, ...items, ...items].map((item, index) => (
          <span key={index} className="flex items-center gap-3 font-display text-sm md:text-base text-primary-foreground">
            <span className="text-xl">{item.emoji}</span>
            <span>{item.text}</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default MarqueeStrip;
