import React from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

interface ClinicPhotoLightboxProps {
  selectedGalleryImg: string | null;
  setSelectedGalleryImg: (url: string | null) => void;
}

export const ClinicPhotoLightbox: React.FC<ClinicPhotoLightboxProps> = ({
  selectedGalleryImg,
  setSelectedGalleryImg,
}) => {
  return (
    <AnimatePresence>
      {selectedGalleryImg && (
        <div 
          onClick={() => setSelectedGalleryImg(null)}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 cursor-zoom-out"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="relative w-full max-w-4xl aspect-[4/3] rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image 
              src={selectedGalleryImg} 
              alt="State-Of-The-Art Treatment Operatory Room" 
              fill 
              sizes="(max-width: 1024px) 100vw, 1000px"
              className="object-contain" 
              referrerPolicy="no-referrer"
            />
            <button 
              onClick={() => setSelectedGalleryImg(null)}
              className="absolute top-4 right-4 bg-black/60 text-white hover:bg-black hover:text-[#E05252] rounded-full p-2.5 transition-colors shadow-md z-10 cursor-pointer"
              title="Close image"
            >
              <X className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
