import { MapPin, Zap, Clock } from "lucide-react";

const Location = () => {
  return (
    <section id="location" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
            WE'RE NOT <span className="text-primary">EVERYWHERE.</span>
          </h2>
          <p className="font-display text-2xl md:text-3xl text-foreground mb-10">
            WE'RE RIGHT HERE.
          </p>

          {/* Features */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 mb-10">
            <div className="flex items-center gap-3">
              <MapPin className="text-primary" size={24} />
              <span className="text-foreground">Street-side café</span>
            </div>
            <div className="flex items-center gap-3">
              <Zap className="text-primary" size={24} />
              <span className="text-foreground">Fast service</span>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="text-primary" size={24} />
              <span className="text-foreground">Fresh food only</span>
            </div>
          </div>

          {/* Map area */}
          <div className="bg-foreground p-6 md:p-8">
            <div className="aspect-video bg-muted/20 flex items-center justify-center relative">
              <div className="text-center">
                <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-scale">
                  <MapPin className="text-primary-foreground" size={28} />
                </div>
                <p className="font-display text-xl text-background">📍 CRUNCHD HQ</p>
              </div>
            </div>
            <div className="mt-6 text-background text-center">
              <p className="font-display text-lg">Street Corner, Food Lane</p>
              <p className="text-background/60 text-sm mt-1">Near Central Market • Open 11 AM - 11 PM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
