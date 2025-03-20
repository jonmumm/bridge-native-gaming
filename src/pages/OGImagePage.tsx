
import React, { useEffect, useRef } from 'react';
import OGImage from '@/components/OGImage';
import { toPng } from 'html-to-image';

const OGImagePage: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const generateImage = async () => {
      if (ref.current) {
        try {
          const dataUrl = await toPng(ref.current, { 
            quality: 0.95,
            width: 1200,
            height: 630
          });
          
          // Create a link to download the image
          const link = document.createElement('a');
          link.download = 'og-image.png';
          link.href = dataUrl;
          link.click();
          
          console.log('OG Image generated successfully');
        } catch (error) {
          console.error('Error generating OG image:', error);
        }
      }
    };

    // Add a button to trigger the download
    const button = document.createElement('button');
    button.textContent = 'Download OG Image';
    button.style.position = 'fixed';
    button.style.top = '20px';
    button.style.right = '20px';
    button.style.zIndex = '1000';
    button.style.padding = '12px 24px';
    button.style.backgroundColor = '#9b87f5';
    button.style.color = 'white';
    button.style.border = 'none';
    button.style.borderRadius = '4px';
    button.style.cursor = 'pointer';
    button.onclick = generateImage;
    
    document.body.appendChild(button);
    
    return () => {
      document.body.removeChild(button);
    };
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div ref={ref}>
        <OGImage />
      </div>
    </div>
  );
};

export default OGImagePage;
