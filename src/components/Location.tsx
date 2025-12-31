import { MapPin, Zap, Clock } from "lucide-react";

const Location = () => {
  return (
    <section id="location" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-5xl md:text-7xl text-foreground mb-4">
            WE'RE NOT <span className="text-primary">EVERYWHERE.</span>
          </h2>
          <p className="font-display text-3xl md:text-4xl text-foreground mb-12">
            WE'RE RIGHT HERE.
          </p>

          {/* Features */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 mb-12">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <MapPin className="text-primary-foreground" size={24} />
              </div>
              <span className="font-display text-lg text-foreground">Street-side café</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <Zap className="text-primary-foreground" size={24} />
              </div>
              <span className="font-display text-lg text-foreground">Fast service</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <Clock className="text-primary-foreground" size={24} />
              </div>
              <span className="font-display text-lg text-foreground">Fresh food only</span>
            </div>
          </div>

          {/* Map placeholder */}
          <div className="bg-foreground p-8 md:p-12 border-4 border-foreground" style={{ boxShadow: "12px 12px 0 0 hsl(var(--primary))" }}>
            <div className="aspect-video bg-muted flex items-center justify-center relative overflow-hidden">
              {/* Stylized map background */}
              <div className="absolute inset-0 opacity-20">
                <svg width="100%" height="100%" viewBox="0 0 400 300" fill="none" className="w-full h-full">
                  <path d="M0 150 Q100 100 200 150 T400 150" stroke="hsl(var(--primary))" strokeWidth="2" fill="none"/>
                  <path d="M50 0 L50 300" stroke="hsl(var(--foreground))" strokeWidth="1" strokeDasharray="10 5"/>
                  <path d="M150 0 L150 300" stroke="hsl(var(--foreground))" strokeWidth="1" strokeDasharray="10 5"/>
                  <path d="M250 0 L250 300" stroke="hsl(var(--foreground))" strokeWidth="1" strokeDasharray="10 5"/>
                  <path d="M350 0 L350 300" stroke="hsl(var(--foreground))" strokeWidth="1" strokeDasharray="10 5"/>
                  <path d="M0 75 L400 75" stroke="hsl(var(--foreground))" strokeWidth="1" strokeDasharray="10 5"/>
                  <path d="M0 225 L400 225" stroke="hsl(var(--foreground))" strokeWidth="1" strokeDasharray="10 5"/>
                </svg>
              </div>
              
              {/* Pin */}
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center animate-pulse-scale border-4 border-primary-foreground">
                  <MapPin className="text-primary-foreground" size={32} />
                </div>
                <div className="mt-4 bg-primary text-primary-foreground px-6 py-3 font-display text-lg">
                  📍 CRUNCHD HQ
                </div>
              </div>
            </div>

            <div className="mt-8 text-background text-center">
              <p className="font-display text-xl mb-2">Street Corner, Food Lane</p>
              <p className="text-background/70">Near Central Market • Open 11 AM - 11 PM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
