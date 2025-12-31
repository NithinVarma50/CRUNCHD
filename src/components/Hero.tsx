import { Button } from "@/components/ui/button";

const Hero = () => {
    return (
        <section className="min-h-[80vh] flex flex-col justify-center items-center text-center p-6 relative overflow-hidden">
            <div className="z-10 space-y-6 max-w-4xl animate-fade-in-up">
                <h1 className="font-display text-6xl md:text-8xl lg:text-9xl text-primary leading-[0.9]">
                    STREET FOOD <br />
                    <span className="text-foreground">EXTRA CRUNCH</span>
                </h1>
                <p className="font-body text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
                    Bold flavors. Big crunch. Burgers, pizzas, momos, and more.
                    Built for cravings. Served loud. Gone fast.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                    <Button size="lg" className="text-xl px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground font-display tracking-wide">
                        ORDER NOW
                    </Button>
                    <Button size="lg" variant="outline" className="text-xl px-8 py-6 border-2 font-display tracking-wide">
                        VIEW MENU
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
