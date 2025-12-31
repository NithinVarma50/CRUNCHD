import { Star } from "lucide-react";

const reviews = [
  {
    text: "Bro that crunch was illegal. The best burger I've had in years.",
    author: "Arjun S.",
    rating: 5,
  },
  {
    text: "Didn't expect street food to slap this hard. 10/10 recommendation.",
    author: "Priya M.",
    rating: 5,
  },
  {
    text: "Came hungry. Left happy. The portions are massive!",
    author: "Rahul K.",
    rating: 5,
  },
  {
    text: "The cheese pull on that pizza? INSANE. Totally worth the hype.",
    author: "Sneha R.",
    rating: 5,
  },
  {
    text: "My go-to spot for late night cravings. Always fresh.",
    author: "Vikram T.",
    rating: 5,
  },
  {
    text: "Flavor so good it should be a crime. Spicy, tangy, perfect.",
    author: "Ananya P.",
    rating: 5,
  },
];

const Reviews = () => {
  return (
    <section id="reviews" className="py-20 md:py-32 bg-primary relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-display text-5xl md:text-8xl text-primary-foreground tracking-tighter">
            REAL TALK
          </h2>
          <p className="text-primary-foreground/80 font-display text-2xl md:text-3xl">
            FROM REAL FOODIES
          </p>
        </div>

        {/* Reviews grid - Clean, organized cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-background p-8 border border-transparent hover:border-foreground/10 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-md"
            >
              <div className="flex gap-1 mb-6 text-primary">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={20} fill="currentColor" />
                ))}
              </div>

              <p className="font-display text-xl leading-relaxed text-foreground mb-6 min-h-[80px]">
                "{review.text}"
              </p>

              <div className="flex items-center gap-4 border-t border-border/10 pt-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-display text-primary">
                  {review.author[0]}
                </div>
                <p className="text-muted-foreground font-medium text-sm">
                  {review.author}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
