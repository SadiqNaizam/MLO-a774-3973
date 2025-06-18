import React, { useState } from 'react';
import { Hexagon, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface HeaderNavProps {
  className?: string;
}

const HeaderNav: React.FC<HeaderNavProps> = ({ className }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50',
        'h-16 bg-card',
        'flex items-center justify-between',
        'px-4 py-2',
        'border-b border-border',
        className
      )}
    >
      {/* Logo */}
      <a href="/" className="flex items-center gap-2" aria-label="SynergyFlow Home">
        <Hexagon className="h-6 w-6 text-primary" />
        <span className="text-xl font-bold text-primary">
          SynergyFlow
        </span>
      </a>

      {/* Hamburger Menu Icon */}
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleMobileMenu}
        aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        aria-expanded={isMobileMenuOpen}
        // Add aria-controls if the menu content has an ID
      >
        {isMobileMenuOpen ? (
          <X className="h-6 w-6 text-foreground" />
        ) : (
          <Menu className="h-6 w-6 text-foreground" />
        )}
      </Button>

      {/* Mobile Menu (example, content would be separate or passed in) */}
      {isMobileMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-card border-b border-border md:hidden">
          {/* Placeholder for navigation links */}
          <nav className="flex flex-col p-4 space-y-2">
            <a href="#features" className="text-foreground hover:text-primary" onClick={() => setIsMobileMenuOpen(false)}>Features</a>
            <a href="#pricing" className="text-foreground hover:text-primary" onClick={() => setIsMobileMenuOpen(false)}>Pricing</a>
            <a href="#contact" className="text-foreground hover:text-primary" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default HeaderNav;
