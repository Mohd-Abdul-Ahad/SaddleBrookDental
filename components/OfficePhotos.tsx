import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

interface OfficePhotosProps {
  t: (key: string) => string;
  officePhotos: string[];
  setSelectedGalleryImg: (url: string | null) => void;
}

export const OfficePhotos: React.FC<OfficePhotosProps> = ({ t, officePhotos, setSelectedGalleryImg }) => {
  const [activePhoto, setActivePhoto] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActivePhoto((prev) => (prev + 1) % officePhotos.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [officePhotos.length]);

  const nextPhoto = () => {
    setActivePhoto((prev) => (prev + 1) % officePhotos.length);
  };
  const prevPhoto = () => {
    setActivePhoto((prev) => (prev - 1 + officePhotos.length) % officePhotos.length);
  };

  return (
    <section id="gallery-section" className="w-full bg-white py-24 border-b border-[#F0F2F5]">
      <div className="max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-16 xl:px-20">
        <div className="mb-14 text-center">
          <span className="bg-[#E6F4EA] text-[#059669] px-4 py-1.5 rounded-full text-[12px] font-extrabold uppercase tracking-widest">
            {t('State-Of-The-Art Clinic Facility')}
          </span>
          <h2 className="text-[32px] sm:text-[38px] font-black text-[#1C1E26] tracking-tight mt-4">
            {t('Take a Virtual Tour of Our Office')}
          </h2>
          <p className="text-[15.5px] font-medium text-[#8A93A6] max-w-[650px] mx-auto mt-2">
            {t('Our clinic combines warm patient comfort areas with high-efficiency treatment labs. Click any photo below to inspect our modern technology and peaceful environment.')}
          </p>
        </div>

        {/* Desktop Photos grid */}
        <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {officePhotos.map((url, index) => (
            <motion.div 
              key={index} 
              onClick={() => setSelectedGalleryImg(url)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: index * 0.08 }}
              className="group relative cursor-pointer overflow-hidden rounded-[24px] border border-[#E8ECF0] aspect-[4/3] bg-gray-50 shadow-sm hover:shadow-xl hover:border-[#1A6FD4]/50 transition-all duration-300"
            >
              <Image 
                src={url} 
                alt={`Saddle Brook Clinic Layout Room ${index + 1}`} 
                fill 
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500" 
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="bg-white/95 text-[#1C1E26] text-[13.5px] font-black px-5 py-2.5 rounded-full flex items-center gap-1.5 shadow-xl transform scale-90 group-hover:scale-100 transition-transform duration-300">
                  <Sparkles className="w-4 h-4 text-[#1A6FD4]" /> {t('Inspect Photo')}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Office Tour Slider */}
        <div className="block sm:hidden relative">
          <div 
            onClick={() => setSelectedGalleryImg(officePhotos[activePhoto])}
            className="group relative cursor-pointer overflow-hidden rounded-[24px] border border-[#E8ECF0] aspect-[4/3] bg-gray-50 shadow-sm"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activePhoto}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0"
              >
                <Image 
                  src={officePhotos[activePhoto]} 
                  alt={`Saddle Brook Clinic Layout Room ${activePhoto + 1}`} 
                  fill 
                  sizes="100vw"
                  className="object-cover animate-fade-in" 
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <span className="bg-white/95 text-[13px] font-black px-4 py-2 rounded-full flex items-center gap-1.5 shadow-lg">
                    <Sparkles className="w-4 h-4 text-[#1A6FD4]" /> {t('Inspect Photo')}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation controls & dots */}
          <div className="flex items-center justify-between mt-5 px-1">
            <button 
              onClick={prevPhoto}
              className="w-10 h-10 rounded-full bg-white border border-[#E8ECF0] flex items-center justify-center text-[#1C1E26] active:scale-90 shadow-sm cursor-pointer"
              aria-label={t('Previous office photo')}
            >
              <ChevronLeft className="w-5 h-5 text-gray-700" />
            </button>
            
            {/* Dots */}
            <div className="flex items-center gap-1.5 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-100">
              {officePhotos.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActivePhoto(idx)}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${idx === activePhoto ? 'bg-[#1A6FD4] w-4' : 'bg-gray-300 w-2'}`}
                  aria-label={`${t('Go to slide')} ${idx + 1}`}
                />
              ))}
            </div>

            <button 
              onClick={nextPhoto}
              className="w-10 h-10 rounded-full bg-white border border-[#E8ECF0] flex items-center justify-center text-[#1C1E26] active:scale-90 shadow-sm cursor-pointer"
              aria-label={t('Next office photo')}
            >
              <ChevronRight className="w-5 h-5 text-gray-700" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
