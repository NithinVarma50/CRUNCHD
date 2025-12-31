import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface FloatingImageProps {
    src: string;
    alt: string;
    className: string;
}

interface FloatingFoodHeroProps {
    title: string;
    description: string;
    images: FloatingImageProps[];
    className?: string;
    children?: React.ReactNode;
}

const FloatingFoodHero: React.FC<FloatingFoodHeroProps> = ({
    title,
    description,
    images,
    className,
    children
}) => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!containerRef.current) return;
            const { clientX, clientY } = e;
            const moveX = (clientX - window.innerWidth / 2) * 0.02;
            const moveY = (clientY - window.innerHeight / 2) * 0.02;

            containerRef.current.style.setProperty("--move-x", `${moveX}px`);
            containerRef.current.style.setProperty("--move-y", `${moveY}px`);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section
            ref={containerRef}
            className={cn(
                'relative w-full min-h-[60vh] md:min-h-[85vh] bg-primary overflow-hidden flex items-center justify-center pt-16 md:pt-0',
                className
            )}
        >
            {/* Background Doodles */}
            <div className="absolute inset-0 opacity-10 pointer-events-none z-0">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="stickers" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                            <circle cx="20" cy="20" r="2" fill="currentColor" className="text-white" />
                            <path d="M50 50 L60 60 M60 50 L50 60" stroke="currentColor" strokeWidth="2" className="text-white" />
                            <rect x="80" y="20" width="10" height="10" stroke="currentColor" strokeWidth="2" fill="none" className="text-white" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#stickers)" />
                </svg>
            </div>

            {/* Render floating images */}
            <div className="absolute inset-0 z-10 pointer-events-none hidden sm:block">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image.src}
                        alt={image.alt}
                        className={cn('absolute object-contain', image.className)}
                        style={{
                            animationDelay: `${index * 300}ms`,
                            transform: `translate(var(--move-x), var(--move-y))` // Apply slight parallax if desired or let CSS animation handle it
                        }}
                    />
                ))}
            </div>

            {/* Content Container */}
            <div className="relative z-20 container px-4 md:px-6 text-center max-w-4xl flex flex-col items-center">
                {/* Main Title - Sticker Effect */}
                <div className="relative inline-block mb-4 md:mb-6 group">
                    <div className="absolute inset-0 bg-black translate-x-1 translate-y-1 md:translate-x-3 md:translate-y-3 rounded-sm"></div>
                    <h1 className="relative bg-white text-black font-display text-6xl md:text-9xl px-4 md:px-12 py-2 md:py-6 border-4 border-black transform transition-transform group-hover:-translate-y-2 group-hover:-translate-x-1 duration-300">
                        {title}
                    </h1>
                    {/* Crown/Sticker decoration */}
                    <div className="absolute -top-6 -right-6 md:-top-12 md:-right-12 animate-bounce">
                        <span className="text-4xl md:text-7xl">👑</span>
                    </div>
                </div>

                {/* Description - Reduced Padding on Mobile */}
                <p className="text-white font-body text-base md:text-2xl max-w-lg md:max-w-3xl mx-auto mb-6 md:mb-10 leading-relaxed md:leading-normal px-2">
                    {description}
                </p>

                {children}

                {/* CTA Buttons - Compact on Mobile */}
                {!children && (
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-6">
                        <Button
                            size="lg"
                            className="bg-black text-white hover:bg-white hover:text-black border-2 border-transparent hover:border-black text-lg md:text-xl px-8 md:px-10 py-4 md:py-6 h-auto font-display skew-x-[-6deg] transition-all shadow-[4px_4px_0px_#ffffff] hover:shadow-[2px_2px_0px_#000000]"
                            onClick={() => scrollToSection("menu")}
                        >
                            ORDER NOW 🍔
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            className="bg-transparent text-white border-2 border-white hover:bg-white hover:text-black text-lg md:text-xl px-8 md:px-10 py-4 md:py-6 h-auto font-display skew-x-[-6deg] transition-all"
                            onClick={() => scrollToSection("reviews")}
                        >
                            VIEW REVIEWS ⭐
                        </Button>
                    </div>
                )}
            </div>

            {/* Bottom Wave - Clean */}
            <div className="absolute bottom-0 inset-x-0 h-12 md:h-16 w-full wavy-separator bg-background transform translate-y-1 z-20"></div>
        </section>
    );
};

export default FloatingFoodHero;
