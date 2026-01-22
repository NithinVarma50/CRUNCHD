import { cn } from "@/lib/utils";
import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";

interface MenuItem {
  num: string;
  name: string;
  clipId: string;
  image: string;
}

const defaultItems: MenuItem[] = [
  {
    num: "01",
    name: "Gourmet Burgers",
    clipId: "clip-original",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  },
  {
    num: "02",
    name: "Fresh Desserts",
    clipId: "clip-hexagons",
    image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  },
  {
    num: "03",
    name: "Artisan Waffles",
    clipId: "clip-pixels",
    image: "https://images.unsplash.com/photo-1562376552-0d160a2f238d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  }
];

export const ConnoisseurStackInteractor = ({
  items = defaultItems,
  className
}: { items?: MenuItem[]; className?: string }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<SVGImageElement>(null);
  const mainGroupRef = useRef<SVGGElement>(null);
  const masterTl = useRef<gsap.core.Timeline | null>(null);

  const createLoop = (index: number) => {
    const item = items[index];
    const selector = `#${item.clipId} .path`;

    if (masterTl.current) masterTl.current.kill();

    if (imageRef.current) imageRef.current.setAttribute("href", item.image);
    if (mainGroupRef.current) mainGroupRef.current.setAttribute("clip-path", `url(#${item.clipId})`);
    
    gsap.set(selector, { scale: 0, transformOrigin: "50% 50%" });

    const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

    // 1. IN (Expo Out)
    tl.to(selector, {
      scale: 1,
      duration: 0.8,
      stagger: { amount: 0.4, from: "random" },
      ease: "expo.out",
    })
    // 2. IDLE (Sine Breath)
    .to(selector, {
      scale: 1.05,
      duration: 1.5,
      yoyo: true,
      repeat: 1,
      ease: "sine.inOut",
      stagger: { amount: 0.2, from: "center" }
    })
    // 3. OUT (Expo In)
    .to(selector, {
      scale: 0,
      duration: 0.6,
      stagger: { amount: 0.3, from: "edges" },
      ease: "expo.in",
    });

    masterTl.current = tl;
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      createLoop(0);
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const handleItemHover = (index: number) => {
    if (index === activeIndex) return;
    setActiveIndex(index);
    createLoop(index);
  };

  return (
    <div 
      ref={containerRef}
      className={cn("w-full flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 p-6", className)}
    >
      {/* LEFT SIDE: HIGH CONTRAST MENU */}
      <div className="w-full lg:w-1/2 flex items-center justify-center">
        <div className="w-full max-w-md">
          <div className="flex flex-col gap-1">
            {items.map((item, index) => (
              <div
                key={item.num}
                onMouseEnter={() => handleItemHover(index)}
                className="group cursor-pointer"
              >
                <div className="flex items-baseline gap-4 py-2">
                  {/* Numbers: Increased visibility for non-hover state */}
                  <span className={cn(
                    "font-display text-sm transition-all duration-300",
                    activeIndex === index ? "text-primary" : "text-muted-foreground"
                  )}>
                    {item.num}
                  </span>
                  
                  {/* Main Text: Enhanced visibility logic */}
                  <div className="flex flex-col">
                    <span className={cn(
                      "font-display text-2xl md:text-3xl lg:text-4xl tracking-tight transition-all duration-300",
                      activeIndex === index ? "text-foreground" : "text-muted-foreground/60"
                    )}>
                      {item.name.split(' ')[0]}
                    </span>
                    <span className={cn(
                      "font-display text-xl md:text-2xl lg:text-3xl tracking-tight transition-all duration-300",
                      activeIndex === index ? "text-primary" : "text-muted-foreground/40"
                    )}>
                      {item.name.split(' ')[1]}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* RIGHT SIDE: SQUARE GRID (Sharp Squares) */}
      <div className="w-full lg:w-1/2 flex items-center justify-center">
        <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
          <svg viewBox="0 0 300 300" className="w-full h-full">
            <defs>
              <clipPath id="clip-original">
                <rect className="path" x="0" y="0" width="100" height="100" rx="4" />
                <rect className="path" x="100" y="0" width="100" height="100" rx="4" />
                <rect className="path" x="200" y="0" width="100" height="100" rx="4" />
                <rect className="path" x="0" y="100" width="100" height="100" rx="4" />
                <rect className="path" x="200" y="100" width="100" height="100" rx="4" />
              </clipPath>

              <clipPath id="clip-hexagons">
                <rect className="path" x="100" y="0" width="100" height="100" rx="4" />
                <rect className="path" x="0" y="100" width="100" height="100" rx="4" />
                <rect className="path" x="100" y="100" width="100" height="100" rx="4" />
                <rect className="path" x="200" y="100" width="100" height="100" rx="4" />
                <rect className="path" x="0" y="200" width="100" height="100" rx="4" />
                <rect className="path" x="200" y="200" width="100" height="100" rx="4" />
              </clipPath>

              {/* Grid Squares with rx="4" as requested */}
              <clipPath id="clip-pixels">
                {Array.from({ length: 9 }).map((_, i) => (
                  <rect
                    key={i}
                    className="path"
                    x={(i % 3) * 100}
                    y={Math.floor(i / 3) * 100}
                    width="100"
                    height="100"
                    rx="4"
                  />
                ))}
              </clipPath>
            </defs>

            <g ref={mainGroupRef} clipPath="url(#clip-original)">
              <image 
                ref={imageRef} 
                href={items[0].image} 
                width="300" 
                height="300" 
                preserveAspectRatio="xMidYMid slice" 
              />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};
