import { MapPin, Clock, Star } from "lucide-react";

const Location = () => {
  return (
    <section id="location" className="py-20 md:py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="text-left space-y-8">
            <h2 className="font-display text-6xl md:text-8xl text-foreground leading-[0.9]">
              WE'RE NOT <br />
              EVERYWHERE.<br />
              <span className="text-primary">WE'RE RIGHT HERE.</span>
            </h2>
            <div className="space-y-6 text-lg md:text-xl text-muted-foreground max-w-md">
              <div className="flex flex-col gap-4 pt-4">
                <div className="flex items-center gap-4">
                  <MapPin className="text-primary" />
                  <span className="font-display text-foreground text-2xl">Street-side café</span>
                </div>
                <div className="flex items-center gap-4">
                  <Clock className="text-primary" />
                  <span className="font-display text-foreground text-2xl">Fast service</span>
                </div>
                <div className="flex items-center gap-4">
                  <Star className="text-primary" />
                  <span className="font-display text-foreground text-2xl">Fresh food only</span>
                </div>
              </div>
            </div>
          </div>

          {/* Embedded Map Card */}
          <div className="relative">
            <div className="relative bg-foreground p-1 z-10 transition-transform hover:scale-[1.01] duration-500">
              <div className="aspect-square md:aspect-video bg-muted relative overflow-hidden group border-4 border-background">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14130.857353934944!2d85.3001402!3d23.3441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDIwJzM4LjgiTiA4NcKwMTgnMDAuNSJF!5e0!3m2!1sen!2sin!4v1635959562000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  className="grayscale hover:grayscale-0 transition-all duration-700"
                ></iframe>

                {/* Overlay Badge */}
                <div className="absolute bottom-4 left-4 right-auto bg-primary text-primary-foreground px-6 py-2 font-display text-xl skew-x-[-10deg] shadow-lg pointer-events-none">
                  GET DIRECTIONS
                </div>
              </div>
            </div>
            {/* Offset Decorative Border */}
            <div className="absolute top-4 left-4 right-0 bottom-0 bg-primary z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
