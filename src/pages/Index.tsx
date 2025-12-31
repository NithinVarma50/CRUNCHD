import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BrandStatement from "@/components/BrandStatement";
import SignatureHits from "@/components/SignatureHits";
import MarqueeStrip from "@/components/MarqueeStrip";
import FlavorAdventure from "@/components/FlavorAdventure";
import Reviews from "@/components/Reviews";
import FuelUp from "@/components/FuelUp";
import Location from "@/components/Location";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <BrandStatement />
        <SignatureHits />
        <FlavorAdventure />
        <Reviews />
        <MarqueeStrip />
        <FuelUp />
        <Location />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
