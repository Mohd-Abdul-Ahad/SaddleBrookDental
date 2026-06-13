import React from 'react';
import Image from 'next/image';
import { DotPattern } from './DotPattern';

interface HeroProps {
  t: (key: string) => string;
}

export const Hero: React.FC<HeroProps> = ({ t }) => {
  return (
    <section id="hero-section" className="w-full bg-white relative overflow-hidden py-20 md:py-32">
      <div className="max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-16 xl:px-20 grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
        
        {/* Left Column (55%) */}
        <div className="col-span-1 md:col-span-7 flex flex-col items-start space-y-8">
          
          {/* Sale Pill tag */}
          <div className="inline-flex items-center flex-wrap gap-3">
            <span className="bg-[#10B981] text-white px-4 py-1.5 rounded-full font-black text-[12px] tracking-wider uppercase">
              BERGEN COUNTY, NJ
            </span>
            <span className="bg-[#E6F4EA] text-[#059669] px-4.5 py-1.5 rounded-full text-[13.5px] font-extrabold shadow-sm">
              Comfort, Efficiency & Advanced Dental Care Since 2001
            </span>
          </div>

          {/* Core Headline - Gigantic size */}
          <h1 className="text-[40px] sm:text-[56px] lg:text-[68px] xl:text-[80px] font-black text-[#1C1E26] leading-[1.05] tracking-tight">
            Personalized Dental Care and Beautiful Smiles
          </h1>

          {/* Subtext - bigger and wider */}
          <p className="text-[17px] sm:text-[19px] lg:text-[20px] text-[#8A93A6] leading-relaxed max-w-[620px] font-medium">
            Welcome to <strong>Saddle Brook Dentist</strong>. Originally founded in 2001 by Dr. George Malke, DDS and Nadia Malke, our premium Bergen County practice is now proudly led by <strong>Dr. Diane Yousef, DMD</strong>. We prioritize clinical excellence, patient comfort, and custom technology solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <a 
              href="#booking-form-section" 
              className="bg-[#1A6FD4] text-white hover:bg-[#1559ab] px-10 py-5 rounded-full text-[17px] font-extrabold transition-all shadow-xl shadow-[#1A6FD4]/20 inline-flex items-center justify-center text-center active:scale-95"
              id="hero-discover-btn"
            >
              {t('Schedule Appointment')}
            </a>
            <a 
              href="#services-section" 
              className="bg-white border-2 border-gray-200 text-[#1C1E26] hover:bg-gray-50 px-10 py-5 rounded-full text-[17px] font-extrabold transition-all inline-flex items-center justify-center text-center active:scale-95"
              id="hero-services-btn"
            >
              {t('Explore Services')}
            </a>
          </div>
        </div>

        {/* Right Column (45%) */}
        <div className="col-span-1 md:col-span-12 lg:col-span-5 relative flex justify-center py-6 md:justify-end">
          {/* Grid decoration */}
          <div className="absolute right-[-24px] top-[-24px] -z-10 bg-grid text-gray-200">
            <DotPattern />
          </div>

          {/* Main Hero Image - Made massive and wide */}
          <div className="relative w-full max-w-[550px] xl:max-w-[620px] aspect-[4/5] md:aspect-[3/4] lg:aspect-[4/5] rounded-[32px] overflow-hidden shadow-2xl border border-[#E8ECF0]/80">
            <Image 
              src="/DrDianeYousef.webp"
              alt="Professional dentist treating a patient"
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 550px, 620px"
              className="object-cover"
              referrerPolicy="no-referrer"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};
