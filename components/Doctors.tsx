import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Dentist } from '../lib/types';

interface DoctorsProps {
  t: (key: string) => string;
  dentists: Dentist[];
  setSelectedDentistDetail: (dentist: Dentist | null) => void;
}

export const Doctors: React.FC<DoctorsProps> = ({ t, dentists, setSelectedDentistDetail }) => {
  const [activeStaff, setActiveStaff] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStaff((prev) => (prev + 1) % dentists.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [dentists.length]);

  const nextStaff = () => {
    setActiveStaff((prev) => (prev + 1) % dentists.length);
  };
  const prevStaff = () => {
    setActiveStaff((prev) => (prev - 1 + dentists.length) % dentists.length);
  };

  return (
    <section id="doctors-section" className="w-full bg-slate-50 py-24 border-b border-[#F0F2F5]">
      <div className="max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-16 xl:px-20">
        <div className="mb-14">
          <h2 className="text-[32px] sm:text-[36px] font-black text-[#1C1E26] tracking-tight">
            {t('Our Professional Staff & Specialists')}
          </h2>
          <p className="text-[15px] font-medium text-[#8A93A6] mt-2">
            {t('Serving Saddle Brook since 2001 with patient-centered honesty and advanced dental skill.')}
          </p>
        </div>

        {/* Desktop Grid View */}
        <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {dentists.map((dentist, idx) => (
            <motion.div 
              key={dentist.id} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: idx * 0.1 }}
              className="bg-white border border-[#EAECF0] rounded-[24px] overflow-hidden shadow-sm hover:shadow-xl hover:border-[#1A6FD4]/40 transition-all duration-300 flex flex-col p-5 text-center group"
            >
              {/* Doctor Headshot */}
              <div className="relative w-full aspect-square md:aspect-[4/5] rounded-xl overflow-hidden mb-5">
                <Image 
                  src={dentist.photo} 
                  alt={dentist.name} 
                  fill 
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <h3 className="text-[17px] font-black text-[#1C1E26] leading-tight">
                {t(dentist.name)}
              </h3>
              <p className="text-[13px] text-[#1A6FD4] font-bold mt-1.5 px-2 py-0.5 rounded-full bg-[#1A6FD4]/5 inline-block mx-auto">
                {t(dentist.specialty)}
              </p>

              <div className="flex items-center justify-center gap-2 mt-4 mb-5">
                <span className="text-[11px] bg-[#EEF2F6] text-[#8A93A6] px-2.5 py-1 rounded-lg font-bold">{t(dentist.experience)}</span>
                <span className="text-[11px] bg-[#FFFBEB] text-amber-700 px-2.5 py-1 rounded-lg font-bold flex items-center gap-0.5">★ {dentist.rating}</span>
              </div>

              <div className="mt-auto">
                <button 
                  onClick={() => setSelectedDentistDetail(dentist)}
                  className="w-full bg-[#F4F6F9] hover:bg-[#1A6FD4] text-[#1C1E26] hover:text-white text-[13.0px] font-black py-2.5 rounded-xl transition-all duration-200 active:scale-95 cursor-pointer"
                  id={`find-out-dentist-${dentist.id}`}
                >
                  {t('View Biography & Details')}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Staff Slider */}
        <div className="block sm:hidden relative">
          <div className="bg-white border border-[#EAECF0] rounded-[24px] overflow-hidden shadow-sm p-6 text-center flex flex-col justify-between min-h-[460px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStaff}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className="flex flex-col flex-grow justify-between"
              >
                <div>
                  <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden mb-5">
                    <Image 
                      src={dentists[activeStaff].photo} 
                      alt={dentists[activeStaff].name} 
                      fill 
                      sizes="100vw"
                      className="object-cover object-center"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <h3 className="text-[18px] font-black text-[#1C1E26] leading-tight">
                    {t(dentists[activeStaff].name)}
                  </h3>
                  <p className="text-[13px] text-[#1A6FD4] font-bold mt-1.5 px-3 py-0.5 rounded-full bg-[#1A6FD4]/5 inline-block">
                    {t(dentists[activeStaff].specialty)}
                  </p>

                  <div className="flex items-center justify-center gap-2 mt-4 mb-4">
                    <span className="text-[11px] bg-[#EEF2F6] text-[#8A93A6] px-2.5 py-1 rounded-lg font-bold">{t(dentists[activeStaff].experience)}</span>
                    <span className="text-[11px] bg-[#FFFBEB] text-amber-700 px-2.5 py-1 rounded-lg font-bold flex items-center gap-0.5">★ {dentists[activeStaff].rating}</span>
                  </div>

                  <p className="text-[13.5px] text-[#8A93A6] font-medium leading-relaxed px-2 line-clamp-3">
                    {t(dentists[activeStaff].bio)}
                  </p>
                </div>

                <button 
                  onClick={() => setSelectedDentistDetail(dentists[activeStaff])}
                  className="w-full bg-[#F4F6F9] hover:bg-[#1A6FD4] text-[#1C1E26] hover:text-white text-[13.0px] font-black py-3 rounded-xl transition-all mt-6 active:scale-98 cursor-pointer"
                >
                  {t('View Biography & Details')}
                </button>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation controls & dots */}
          <div className="flex items-center justify-between mt-5 px-1">
            <button 
              onClick={prevStaff}
              className="w-10 h-10 rounded-full bg-white border border-[#E8ECF0] flex items-center justify-center text-[#1C1E26] active:scale-90 shadow-sm cursor-pointer"
              aria-label={t('Previous specialist')}
            >
              <ChevronLeft className="w-5 h-5 text-gray-700" />
            </button>
            
            {/* Dots */}
            <div className="flex items-center gap-1.5 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-100">
              {dentists.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveStaff(idx)}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${idx === activeStaff ? 'bg-[#1A6FD4] w-4' : 'bg-gray-300 w-2'}`}
                  aria-label={`${t('Go to slide')} ${idx + 1}`}
                />
              ))}
            </div>

            <button 
              onClick={nextStaff}
              className="w-10 h-10 rounded-full bg-white border border-[#E8ECF0] flex items-center justify-center text-[#1C1E26] active:scale-90 shadow-sm cursor-pointer"
              aria-label={t('Next specialist')}
            >
              <ChevronRight className="w-5 h-5 text-gray-700" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
