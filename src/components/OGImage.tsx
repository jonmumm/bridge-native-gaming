
import React from 'react';
import OGSLogo from './OGSLogo';

const OGImage: React.FC = () => {
  return (
    <div className="w-[1200px] h-[630px] flex flex-col items-center justify-center bg-gradient-to-br from-ogs-purple/20 to-background p-12 relative overflow-hidden">
      {/* Logo and title */}
      <div className="z-10 flex flex-col items-center">
        <div className="w-[300px] h-[300px] mb-8">
          <OGSLogo />
        </div>
        
        <h1 className="text-6xl font-bold font-orbitron bg-clip-text text-transparent bg-gradient-to-r from-ogs-purple to-primary mb-4 text-center">
          Open Game System
        </h1>
        
        <p className="text-2xl text-center text-muted-foreground max-w-3xl">
          Bridge Web Games to Native Features: Push Notifications, TV Casting, and More
        </p>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-ogs-purple/10 rounded-full filter blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full filter blur-3xl translate-y-1/2 -translate-x-1/2"></div>
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
    </div>
  );
};

export default OGImage;
