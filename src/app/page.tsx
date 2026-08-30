import { Features } from "@/components/sections/features";
import { FinalCTA } from "@/components/sections/final-cta";
import { GameLibrary } from "@/components/sections/game-library";
import { Hero } from "@/components/sections/hero";
import { HowItWorks } from "@/components/sections/how-it-works";
import { LogoWall } from "@/components/sections/logo-wall";
import { Pricing } from "@/components/sections/pricing";
import { Testimonials } from "@/components/sections/testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <LogoWall />
      <GameLibrary />
      <FinalCTA />
      <Features />
      <Pricing />
      <HowItWorks />
      <Testimonials />
    </main>
  );
}
