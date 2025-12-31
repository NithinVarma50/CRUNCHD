import { MapPin, Clock, Star } from "lucide-react";

const Location = () => {
  return (
    <section id="location" className="py-20 md:py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="text-left space-y-6 md:space-y-8 order-2 lg:order-1">
            <h2 className="font-display text-5xl md:text-6xl lg:text-8xl text-foreground leading-[0.9] tracking-tighter">
              WE'RE NOT <br />
              EVERYWHERE.<br />
              <span className="text-primary">WE'RE RIGHT HERE.</span>
            </h2>
            <div className="space-y-6 text-lg md:text-xl text-muted-foreground max-w-md">
              <p className="font-body text-base md:text-lg opacity-80">
                Finding good food shouldn't be a treasure hunt. We're planted right in the heart of Hyderabad.
              </p>
              <div className="flex flex-col gap-4 pt-4">
                <div className="flex items-center gap-4">
                  <MapPin className="text-primary h-6 w-6" />
                  <span className="font-display text-foreground text-xl md:text-2xl">Hyderabad, Telangana</span>
                </div>
                <div className="flex items-center gap-4">
                  <Clock className="text-primary h-6 w-6" />
                  <span className="font-display text-foreground text-xl md:text-2xl">Open 11 AM - 11 PM</span>
                </div>
                <div className="flex items-center gap-4">
                  <Star className="text-primary h-6 w-6" />
                  <span className="font-display text-foreground text-xl md:text-2xl">Fresh food only</span>
                </div>
              </div>
            </div>
          </div>

          {/* Embedded Map Card */}
          <div className="relative order-1 lg:order-2 mb-12 lg:mb-0">
            <div className="relative bg-foreground p-1 z-10 transition-transform hover:scale-[1.01] duration-500">
              <div className="aspect-square md:aspect-video lg:aspect-square bg-muted relative overflow-hidden group border-4 border-background">
                <iframe
                  title="Hyderabad Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.3163533885!2d78.2679586119102!3d17.41229980068307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1714486552000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale hover:grayscale-0 transition-all duration-700"
                ></iframe>

                {/* Overlay Badge */}
                <div className="absolute bottom-4 left-4 right-auto bg-primary text-primary-foreground px-4 md:px-6 py-2 font-display text-lg md:text-xl skew-x-[-10deg] shadow-lg pointer-events-none">
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
