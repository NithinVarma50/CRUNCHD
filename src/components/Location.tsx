import { MapPin, Clock, Star } from "lucide-react";

const Location = () => {
  return (
    <section id="location" className="py-20 md:py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="text-left space-y-8">
            <h2 className="font-display text-6xl md:text-8xl text-foreground leading-[0.9]">
              WE'RE <br />
              <span className="text-primary">HERE.</span>
            </h2>
            <div className="space-y-6 text-lg md:text-xl text-muted-foreground max-w-md">
              <p>
                No hidden kitchens. No ghost stores. We are right here on the corner, flipping burgers and tossing pizzas live.
              </p>
              <div className="flex flex-col gap-4 pt-4">
                <div className="flex items-center gap-4">
                  <Clock className="text-primary" />
                  <span className="font-display text-foreground">OPEN DAILY: 11 AM - 11 PM</span>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="text-primary" />
                  <span className="font-display text-foreground">STREET CORNER, FOOD LANE</span>
                </div>
                <div className="flex items-center gap-4">
                  <Star className="text-primary" />
                  <span className="font-display text-foreground">4.8/5 ON GOOGLE REVIEWS</span>
                </div>
              </div>
            </div>
          </div>

          {/* Visual/Map Card */}
          <div className="relative">
            <div className="relative bg-foreground p-1 z-10">
              <div className="aspect-square md:aspect-video bg-muted relative overflow-hidden group">
                {/* Abstract Map Background */}
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]"></div>

                {/* Center Pin */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <div className="absolute -inset-4 bg-primary/20 rounded-full animate-ping"></div>
                    <div className="relative bg-primary text-primary-foreground p-6 rounded-full shadow-xl transform transition-transform group-hover:scale-110">
                      <MapPin size={40} />
                    </div>
                  </div>
                </div>

                {/* Location Badge */}
                <div className="absolute bottom-6 left-6 right-6 bg-background/90 backdrop-blur text-foreground p-4 border border-foreground/10">
                  <p className="font-display text-xl">CRUNCHD HQ</p>
                  <p className="text-xs text-muted-foreground">Get Directions →</p>
                </div>
              </div>
            </div>
            {/* Offset Decorative Border */}
            <div className="absolute top-4 left-4 right-0 bottom-0 border-2 border-primary z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
