const reviews = [
  {
    text: "Bro that crunch was illegal.",
    author: "Arjun S.",
    rating: 5,
  },
  {
    text: "Didn't expect street food to slap this hard.",
    author: "Priya M.",
    rating: 5,
  },
  {
    text: "Came hungry. Left happy.",
    author: "Rahul K.",
    rating: 5,
  },
  {
    text: "The cheese pull on that pizza? INSANE.",
    author: "Sneha R.",
    rating: 5,
  },
  {
    text: "My go-to spot for late night cravings.",
    author: "Vikram T.",
    rating: 5,
  },
  {
    text: "Flavor so good it should be a crime.",
    author: "Ananya P.",
    rating: 5,
  },
];

const Reviews = () => {
  return (
    <section id="reviews" className="py-16 md:py-24 bg-primary wavy-border relative">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-5xl md:text-7xl text-primary-foreground text-center mb-4">
          REAL TALK
        </h2>
        <p className="font-display text-2xl md:text-3xl text-primary-foreground/80 text-center mb-12 md:mb-16">
          FROM REAL FOODIES
        </p>

        {/* Reviews grid - sticker style cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-background p-6 md:p-8 border-4 border-foreground transform transition-all duration-300 hover:-translate-y-2 hover:rotate-1"
              style={{
                boxShadow: "6px 6px 0 0 hsl(var(--foreground))",
                transform: `rotate(${index % 2 === 0 ? -2 : 2}deg)`,
              }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <span key={i} className="text-xl">⭐</span>
                ))}
              </div>

              {/* Quote */}
              <p className="font-display text-xl md:text-2xl text-foreground mb-4">
                "{review.text}"
              </p>

              {/* Author */}
              <p className="text-muted-foreground font-body">
                — {review.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
