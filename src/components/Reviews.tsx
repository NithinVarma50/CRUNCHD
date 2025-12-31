import chickenBurger from "@/assets/chicken-burger.png";

const reviews = [
  {
    text: "I love how CRUNCHD keeps things simple but so flavorful. The fries are crispy and the burgers? Perfection!",
    author: "ARJUN S.",
    rating: 5,
    rotation: -8,
  },
  {
    text: "This is not just food — it's an experience. Every order from CRUNCHD is always fast and the taste is incredible.",
    author: "PRIYA M.",
    rating: 5,
    rotation: 3,
  },
  {
    text: "CRUNCHD breaks the spot every time — bold flavors, fresh ingredients, and friendly service. Definitely my go-to!",
    author: "RAHUL K.",
    rating: 5,
    rotation: -5,
  },
];

const Reviews = () => {
  return (
    <section id="reviews" className="py-16 md:py-24 bg-background relative overflow-hidden">
      {/* Diagonal text banner */}
      <div className="absolute top-1/4 -right-20 transform rotate-12 bg-primary py-2 px-20 whitespace-nowrap">
        <span className="font-display text-primary-foreground text-lg">
          NEW MEAL • NEW TOWN • NEW MEAL • NEW TOWN •
        </span>
      </div>

      <div className="container mx-auto px-4">
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground text-center mb-4">
          REAL TALK FROM
        </h2>
        <p className="font-display text-3xl md:text-4xl text-foreground text-center mb-12">
          REAL FOODIES
        </p>

        {/* Reviews as scattered cards */}
        <div className="relative max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="w-full sm:w-64 bg-primary p-5 text-primary-foreground transform transition-all duration-300 hover:scale-105"
                style={{
                  transform: `rotate(${review.rotation}deg)`,
                }}
              >
                {/* Stars */}
                <div className="flex gap-0.5 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i} className="text-xs">★</span>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-sm leading-relaxed mb-4">
                  {review.text}
                </p>

                {/* Divider */}
                <div className="border-t border-primary-foreground/30 pt-3">
                  <p className="font-display text-xs">
                    {review.author}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
