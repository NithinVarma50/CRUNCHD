import { Star } from "lucide-react";

const reviews = [
  {
    text: "Bro that crunch was illegal.",
    rating: 5,
  },
  {
    text: "Didn't expect street food to slap this hard.",
    rating: 5,
  },
  {
    text: "Came hungry. Left happy.",
    rating: 5,
  },
]

const Reviews = () => {
  return (
    <section id="reviews" className="py-20 md:py-32 bg-primary relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-display text-5xl md:text-8xl text-primary-foreground tracking-tighter">
            REAL TALK
          </h2>
          <p className="text-primary-foreground/80 font-display text-2xl md:text-3xl">
            REVIEWS
          </p>
        </div>

        {/* Reviews grid - Clean, organized cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-background p-8 border border-foreground/10 transition-all duration-300 hover:-translate-y-2 shadow-[8px_8px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_rgba(0,0,0,1)]"
            >
              <div className="flex gap-1 mb-6 text-primary">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={24} fill="currentColor" />
                ))}
              </div>

              <p className="font-display text-2xl leading-relaxed text-foreground min-h-[80px]">
                "{review.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
