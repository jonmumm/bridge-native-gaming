
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import ThemeToggle from './ThemeToggle';
import OGSSmallLogo from './OGSSmallLogo';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/80 backdrop-blur-md shadow-sm dark:bg-ogs-dark-purple/80' : ''
    }`}>
      <div className="container flex justify-between items-center py-4">
        <a href="#" className="flex items-center space-x-2">
          <OGSSmallLogo className="w-10 h-10" />
          <span className="font-orbitron text-2xl font-bold text-ogs-purple dark:text-ogs-purple">
            OGS
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-sm font-medium hover:text-ogs-purple transition-colors">
            What is OGS?
          </a>
          <a href="#components" className="text-sm font-medium hover:text-ogs-purple transition-colors">
            Core Components
          </a>
          <a href="#how-it-works" className="text-sm font-medium hover:text-ogs-purple transition-colors">
            How It Works
          </a>
          <a href="#get-started" className="text-sm font-medium hover:text-ogs-purple transition-colors">
            Get Started
          </a>
          <a href="#faq" className="text-sm font-medium hover:text-ogs-purple transition-colors">
            FAQ
          </a>
          <ThemeToggle />
          <Button className="bg-ogs-purple hover:bg-ogs-purple/90 text-white">
            GitHub
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <div className="flex items-center space-x-4 md:hidden">
          <ThemeToggle />
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background dark:bg-ogs-dark-purple border-b border-border animate-fade-in">
          <nav className="container flex flex-col space-y-4 py-6">
            <a 
              href="#about" 
              className="text-base font-medium hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              What is OGS?
            </a>
            <a 
              href="#components" 
              className="text-base font-medium hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Core Components
            </a>
            <a 
              href="#how-it-works" 
              className="text-base font-medium hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </a>
            <a 
              href="#get-started" 
              className="text-base font-medium hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Started
            </a>
            <a 
              href="#faq" 
              className="text-base font-medium hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </a>
            <Button className="bg-ogs-purple hover:bg-ogs-purple/90 text-white w-full">
              GitHub
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default NavBar;
