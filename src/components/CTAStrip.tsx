import { useNavigate } from "react-router-dom";

const CTAStrip = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-primary/5 py-24 relative overflow-hidden border-t border-border/10">
      <div className="container mx-auto px-6 text-center">
        <h2 className="font-display text-4xl md:text-6xl text-foreground mb-8 leading-tight">
          READY FOR A <br />
          <span className="text-primary">FLAVOR ADVENTURE?</span>
        </h2>

        <div className="flex justify-center">
          <button
            onClick={() => navigate("/checkout")}
            className="btn-poster-filled text-xl px-12 py-4 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all"
          >
            COME GET CRUNCHD
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTAStrip;
