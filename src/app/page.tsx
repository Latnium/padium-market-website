import { Header } from '@/components/ui/Header';
import { Footer } from '@/components/ui/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { LiquidityRewardsSection } from '@/components/sections/LiquidityRewardsSection';
import { StabilityLiquiditySection } from '@/components/sections/StabilityLiquiditySection';
import { EcosystemIntegrationsSection } from '@/components/sections/EcosystemIntegrationsSection';
import { OnrampsSection } from '@/components/sections/OnrampsSection';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <LiquidityRewardsSection />
      <StabilityLiquiditySection />
      <EcosystemIntegrationsSection />
      <OnrampsSection />
      <Footer />
    </main>
  );
}
