import React from 'react';
import CTAButtons from './CTAButtons';
import { cn } from '@/lib/utils';

interface HeroSectionProps {
  className?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ className }) => {
  return (
    <section 
      className={cn(
        "flex flex-col items-center justify-center text-center", // Core flex properties
        "gap-6", // Gap between direct children: h1, p, CTAButtons, as per mainContent layout
        "px-4 py-8", // Padding for the section, as per mainContent layout
        "max-w-md mx-auto w-full", // Container behavior, as per mainContent layout
        className // Allow external classes
      )}
    >
      <h1 className="text-4xl font-bold text-primary tracking-tight md:text-5xl">
        Unify Your Team, <br /> Amplify Your Impact.
      </h1>
      <p className="text-lg text-foreground leading-relaxed">
        SynergyFlow is the all-in-one platform designed to streamline your projects, 
        enhance collaboration, and boost productivity. Stop juggling tools, start 
        achieving goals.
      </p>
      <CTAButtons />
    </section>
  );
};

export default HeroSection;
