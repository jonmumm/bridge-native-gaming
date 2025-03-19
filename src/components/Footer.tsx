
import React from 'react';
import { Github, Twitter, Mail } from 'lucide-react';
import OGSSmallLogo from './OGSSmallLogo';

const Footer = () => {
  return (
    <footer className="bg-secondary dark:bg-black py-12 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center">
              <OGSSmallLogo className="w-8 h-8 mr-2" />
              <h3 className="font-orbitron text-lg font-bold">Open Game System</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Bridge web games to native features with ease.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/open-game-collective" className="text-muted-foreground hover:text-ogs-purple transition-colors" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://twitter.com/opengamesystem" className="text-muted-foreground hover:text-ogs-purple transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="mailto:hello@opengame.org" className="text-muted-foreground hover:text-ogs-purple transition-colors" aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Documentation</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:text-ogs-purple transition-colors">
                  Get Started
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-ogs-purple transition-colors">
                  API Reference
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-ogs-purple transition-colors">
                  Examples
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-ogs-purple transition-colors">
                  Tutorials
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:text-ogs-purple transition-colors">
                  Community
                </a>
              </li>
              <li>
                <a href="https://github.com/open-game-collective" className="text-muted-foreground hover:text-ogs-purple transition-colors">
                  GitHub
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-ogs-purple transition-colors">
                  Discord
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-ogs-purple transition-colors">
                  Status
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:text-ogs-purple transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-ogs-purple transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-ogs-purple transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="mailto:hello@opengame.org" className="text-muted-foreground hover:text-ogs-purple transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Open Game Collective. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
