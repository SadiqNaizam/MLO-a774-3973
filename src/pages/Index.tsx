import React from 'react';
import HeaderNav from '../../components/layout/HeaderNav';
import HeroSection from '../../components/LandingPage/HeroSection';

const IndexPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <HeaderNav />
      <main 
        className="flex-1 pt-16 flex flex-col justify-center items-center"
      >
        {/* 
          The main element handles:
          - flex-1: Takes up available vertical space after the header.
          - pt-16: Adds padding at the top to account for the fixed HeaderNav (h-16 => 4rem).
          - flex flex-col justify-center items-center: Centers the HeroSection component 
            both vertically and horizontally within the main content area.
          
          HeroSection component itself handles its internal layout, text alignment, 
          max-width (max-w-md), and padding (px-4 py-8), as per mainContent layout 
          requirements and its own component definition.
        */}
        <HeroSection />
      </main>
      {/* 
        Footer: 
        The Layout Requirements (layoutType: "HBF", overall.sizing.footer: "auto") 
        suggest a footer might be part of the broader design vision.
        However, no Footer component is specified in the Component Hierarchy for generation 
        or as part of the LandingPageLayout composition for this task.
        Therefore, a footer is not implemented here.
      */}
    </div>
  );
};

export default IndexPage;
