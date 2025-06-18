import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CTAButtonsProps {
  className?: string;
}

const CTAButtons: React.FC<CTAButtonsProps> = ({ className }) => {
  return (
    <div className={cn("flex flex-col gap-4 w-full", className)}>
      <Button 
        variant="default"
        size="lg" 
        className="w-full text-base font-medium rounded-lg px-6" // Using text-base, custom px-6, and rounded-lg
      >
        Start Your Free Trial
      </Button>
      <Button 
        variant="outline" 
        size="lg"
        className={cn(
          "w-full text-base font-medium rounded-lg px-6", // Using text-base, custom px-6, and rounded-lg
          "border-primary text-primary", // Overriding default outline border and text colors
          // Default hover for 'outline' (hover:bg-accent hover:text-accent-foreground) will apply.
          // Given 'accent' is 'primary' in config, this becomes hover:bg-primary hover:text-primary-foreground.
        )}
      >
        Learn More
        <ChevronDown className="ml-2 h-5 w-5" />
      </Button>
    </div>
  );
};

export default CTAButtons;
