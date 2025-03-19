
import { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ImageGalleryProps {
  images: string[];
  className?: string;
}

const ImageGallery = ({ images, className }: ImageGalleryProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const navigateNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const navigatePrev = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className={cn("w-full", className)}>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {images.map((image, index) => (
          <div 
            key={index} 
            className="aspect-square relative overflow-hidden rounded-md cursor-pointer transform transition-transform hover:scale-105"
            onClick={() => {
              setCurrentImageIndex(index);
              setShowModal(true);
            }}
          >
            <img
              src={image}
              alt={`Gallery image ${index + 1}`}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
          <button 
            className="absolute top-4 right-4 text-white"
            onClick={() => setShowModal(false)}
          >
            <X className="w-8 h-8" />
          </button>
          
          <button 
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 p-2 rounded-full"
            onClick={navigatePrev}
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          
          <div className="max-w-4xl max-h-[90vh] relative">
            <img
              src={images[currentImageIndex]}
              alt={`Gallery image ${currentImageIndex + 1}`}
              className="max-w-full max-h-[90vh] object-contain"
            />
          </div>
          
          <button 
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 p-2 rounded-full"
            onClick={navigateNext}
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
