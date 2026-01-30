import { Suspense, lazy } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SocialProofBanner from "@/components/SocialProofBanner";
import WhatYouGetSection from "@/components/WhatYouGetSection";
import BenefitsSection from "@/components/BenefitsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ShareYourStorySection from "@/components/ShareYourStorySection";
import PricingSection from "@/components/PricingSection";

// Lazy load below-the-fold components for better initial load performance
const ReviewsSection = lazy(() => import("@/components/ReviewsSection"));
const FAQSection = lazy(() => import("@/components/FAQSection"));
const FinalCTASection = lazy(() => import("@/components/FinalCTASection"));
const Footer = lazy(() => import("@/components/Footer"));

const Index = () => {
  return (
    <>
      <Helmet>
        <title>LoveCount | The Perfect Anniversary Gift Keychain</title>
        <meta 
          name="description" 
          content="Looking for a unique personalised anniversary gift? LoveCount is a beautiful NFC keychain that opens your custom love page – counting every day together. The perfect Valentine's or anniversary gift for him or her. £34.99 with free UK delivery." 
        />
        <link rel="canonical" href="https://lovecount.uk" />
      </Helmet>
      
      <div className="min-h-screen gradient-bg">
        <Navbar />
        <main>
          <HeroSection />
          <SocialProofBanner />
          <section id="features" className="scroll-mt-20">
            <WhatYouGetSection />
            <BenefitsSection />
          </section>
          <section id="how-it-works" className="scroll-mt-20">
            <HowItWorksSection />
          </section>
          <ShareYourStorySection />
          <PricingSection />
          
          <Suspense fallback={<div className="py-16" />}>
            <ReviewsSection />
            <FAQSection />
            <FinalCTASection />
            <Footer />
          </Suspense>
        </main>
      </div>
    </>
  );
};

export default Index;
