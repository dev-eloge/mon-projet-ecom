import { useParallaxScroll } from "../hooks/useParallaxScroll";
import Navbar from "../components/Navbar";
import HeroNew from "../components/HeroNew";
import ReassurancePillars from "../components/ReassurancePillars";
import HowItWorksNew from "../components/HowItWorksNew";
import WhyThisToolExists from "../components/WhyThisToolExists";
import WhatYouGet from "../components/WhatYouGet";
import SocialProof from "../components/SocialProof";
import FAQ from "../components/FAQ";
import CTAFinal from "../components/CTAFinal";
import Footer from "../components/Footer";

export default function LandingPage({ start }) {
  useParallaxScroll();

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar badge="Bêta gratuite" />

      <HeroNew start={start} />
      <ReassurancePillars />
      <HowItWorksNew />
      <WhyThisToolExists />
      <WhatYouGet />
      <SocialProof />
      <FAQ />
      <CTAFinal start={start} />
      <Footer />
    </div>
  );
}