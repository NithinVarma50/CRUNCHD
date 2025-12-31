import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BrandStatement from "@/components/BrandStatement";
import SignatureHits from "@/components/SignatureHits";
import MarqueeStrip from "@/components/MarqueeStrip";
import FullMenu from "@/components/FullMenu";
import Reviews from "@/components/Reviews";
import Location from "@/components/Location";
import CTAStrip from "@/components/CTAStrip";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <BrandStatement />
        <SignatureHits />
        <MarqueeStrip />
        <FullMenu />
        <Reviews />
        <Location />
        <CTAStrip />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
