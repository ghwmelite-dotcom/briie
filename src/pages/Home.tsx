import Navbar from "@/sections/Navbar";
import Hero from "@/sections/Hero";
import Stats from "@/sections/Stats";
import UtilitySection from "@/sections/UtilitySection";
import ChartSection from "@/sections/ChartSection";
import BuySection from "@/sections/BuySection";
import Tokenomics from "@/sections/Tokenomics";
import RoadmapSection from "@/sections/RoadmapSection";
import Community from "@/sections/Community";
import Footer from "@/sections/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <Stats />
      <UtilitySection />
      <ChartSection />
      <BuySection />
      <Tokenomics />
      <RoadmapSection />
      <Community />
      <Footer />
    </div>
  );
}
