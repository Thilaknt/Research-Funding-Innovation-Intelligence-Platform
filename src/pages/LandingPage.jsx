import React from 'react';
import { LandingNavbar } from '../components/organisms/landing/LandingNavbar';
import { HeroSection } from '../components/organisms/landing/HeroSection';
import { FeaturesSection } from '../components/organisms/landing/FeaturesSection';
import { StatsSection } from '../components/organisms/landing/StatsSection';
import { SearchDemoSection } from '../components/organisms/landing/SearchDemoSection';
import { TestimonialsSection } from '../components/organisms/landing/TestimonialsSection';
import { FAQSection } from '../components/organisms/landing/FAQSection';
import { Footer } from '../components/organisms/landing/Footer';

export function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-950 font-sans text-slate-200 selection:bg-blue-500/30">
      <LandingNavbar />
      <main>
        <HeroSection />
        <StatsSection />
        <FeaturesSection />
        <SearchDemoSection />
        <TestimonialsSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}
