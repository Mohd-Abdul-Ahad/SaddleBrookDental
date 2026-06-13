import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Service } from '../lib/types';

interface ServicesProps {
  t: (key: string) => string;
  services: Service[];
}

export const Services: React.FC<ServicesProps> = ({ t, services }) => {
  const [activeService, setActiveService] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveService((prev) => (prev + 1) % services.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [services.length]);

  const nextService = () => {
    setActiveService((prev) => (prev + 1) % services.length);
  };
  const prevService = () => {
    setActiveService((prev) => (prev - 1 + services.length) % services.length);
  };

  const handleBookingClick = () => {
    document.getElementById('booking-form-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services-section" className="w-full bg-white py-24 border-b border-[#F0F2F5]">
      <div className="max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-16 xl:px-20">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-[32px] sm:text-[36px] font-black text-[#1C1E26] tracking-tight">
              {t('Our Dental Services')}
            </h2>
            <p className="text-[15px] text-[#8A93A6] mt-2 font-semibold">{t('Professional treatments from top-tier certified doctors.')}</p>
          </div>
          <button 
            onClick={handleBookingClick}
            className="text-[15px] font-extrabold text-[#1A6FD4] hover:underline flex items-center gap-0.5 cursor-pointer bg-transparent border-0"
          >
            {t('See all')}
          </button>
        </div>

        {/* Desktop Grid View */}
        <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((src, idx) => (
            <motion.div 
              key={src.id} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: idx * 0.1 }}
              className="bg-white border border-[#E8ECF0] rounded-[24px] overflow-hidden hover:border-[#1A6FD4]/40 hover:shadow-2xl transition-all duration-300 group cursor-pointer flex flex-col"
              onClick={handleBookingClick}
            >
              <div className="relative w-full h-[220px] sm:h-[240px]">
                <Image 
                  src={src.photo} 
                  alt={src.name} 
                  fill 
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/5" />
              </div>
              <div className="p-8 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-[17px] font-black text-[#1C1E26] leading-snug tracking-tight group-hover:text-[#1A6FD4] transition-colors">
                    {t(src.name)}
                  </h3>
                  <p className="text-[14px] text-[#8A93A6] leading-relaxed mt-3 line-clamp-3 font-medium">
                    {src.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Carousel View */}
        <div className="block sm:hidden relative">
          <div className="overflow-hidden rounded-[24px] border border-[#E8ECF0] bg-white shadow-sm min-h-[420px] flex flex-col justify-between">
            <div>
              <div className="relative w-full aspect-[16/10] overflow-hidden bg-gray-50">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeService}
                    initial={{ opacity: 0, x: 25 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -25 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0"
                  >
                    <Image 
                      src={services[activeService].photo} 
                      alt={services[activeService].name} 
                      fill 
                      sizes="100vw"
                      className="object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/5" />
                  </motion.div>
                </AnimatePresence>
              </div>
              <div className="p-6">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeService}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <h3 className="text-[18px] font-black text-[#1C1E26] leading-snug tracking-tight">
                      {t(services[activeService].name)}
                    </h3>
                    <p className="text-[14px] text-[#8A93A6] leading-relaxed mt-3 font-medium">
                      {services[activeService].description}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            <div className="px-6 pb-6 pt-2">
              <button
                onClick={handleBookingClick}
                className="w-full bg-[#1A6FD4] hover:bg-[#1559ab] text-white py-3.5 rounded-xl text-[14px] font-black active:scale-98 transition-all shadow-md shadow-[#1A6FD4]/5 cursor-pointer"
              >
                {t('Book Service Now')}
              </button>
            </div>
          </div>

          {/* Navigation arrows & dots */}
          <div className="flex items-center justify-between mt-5 px-1">
            <button 
              onClick={prevService}
              className="w-10 h-10 rounded-full bg-white border border-[#E8ECF0] flex items-center justify-center text-[#1C1E26] active:scale-90 shadow-sm cursor-pointer"
              aria-label={t('Previous service')}
            >
              <ChevronLeft className="w-5 h-5 text-gray-700" />
            </button>
            
            {/* Dots */}
            <div className="flex items-center gap-1.5 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-100">
              {services.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveService(idx)}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${idx === activeService ? 'bg-[#1A6FD4] w-4' : 'bg-gray-300 w-2'}`}
                  aria-label={`${t('Go to slide')} ${idx + 1}`}
                />
              ))}
            </div>

            <button 
              onClick={nextService}
              className="w-10 h-10 rounded-full bg-white border border-[#E8ECF0] flex items-center justify-center text-[#1C1E26] active:scale-90 shadow-sm cursor-pointer"
              aria-label={t('Next service')}
            >
              <ChevronRight className="w-5 h-5 text-gray-700" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
