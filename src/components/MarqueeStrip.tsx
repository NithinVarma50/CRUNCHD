const items = [
  { text: "BURGER" },
  { text: "SANDWICH" },
  { text: "PIZZA" },
  { text: "FRIES" },
  { text: "CHICKEN" },
  { text: "MOMOS" },
  { text: "NOODLES" },
  { text: "SPICY" },
];

const MarqueeStrip = () => {
  return (
    <div className="bg-foreground py-6 overflow-hidden">
      <div className="marquee-track flex gap-12 whitespace-nowrap">
        {[...items, ...items, ...items, ...items].map((item, index) => (
          <span key={index} className="flex items-center gap-4 font-display text-2xl md:text-4xl text-background tracking-widest opacity-80">
            <span>{item.text}</span>
            <span className="text-primary text-xl relative top-0.5">●</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default MarqueeStrip;
