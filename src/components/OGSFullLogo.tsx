
import React from 'react';

interface OGSFullLogoProps {
  className?: string;
}

const OGSFullLogo: React.FC<OGSFullLogoProps> = ({ className = "" }) => {
  return (
    <div className={`relative ${className}`}>
      <div className="w-full h-full bg-ogs-dark-purple rounded-xl flex items-center justify-center p-8 border border-gray-700">
        <div className="relative flex flex-col items-center">
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-white text-ogs-dark-purple px-6 py-1 text-center font-mono font-bold">
            OPEN GAME
          </div>
          <div className="text-[120px] font-bold text-ogs-purple font-mono">OGS</div>
          <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-white text-ogs-dark-purple px-6 py-1 text-center font-mono font-bold">
            SYSTEM
          </div>
        </div>
      </div>
    </div>
  );
};

export default OGSFullLogo;
