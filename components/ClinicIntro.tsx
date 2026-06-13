import React from 'react';
import { motion } from 'motion/react';
import { Clock, Phone } from 'lucide-react';
import { DotPattern } from './DotPattern';

interface ClinicIntroProps {
  t: (key: string) => string;
}

export const ClinicIntro: React.FC<ClinicIntroProps> = ({ t }) => {
  return (
    <section id="dedicated-section" className="w-full bg-[#F4F7FA] py-24 relative overflow-hidden">
      
      {/* Decorative ambient soft glow behind the text section */}
      <div className="absolute left-[15%] top-[15%] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(26,111,212,0.06)_0%,rgba(26,111,212,0)_70%)] pointer-events-none -z-10" />

      <div className="max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-16 xl:px-20 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative">
        
        {/* Left Column (50%) */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="col-span-1 lg:col-span-6 flex flex-col items-start space-y-8"
        >
          <h2 className="text-[36px] sm:text-[46px] lg:text-[56px] font-black text-[#1C1E26] leading-[1.1] tracking-tight">
            {t('Our Legacy of')} <br />
            <span className="text-[#1A6FD4]">{t('Personalized Comfort')}</span>
          </h2>

          <p className="text-[16px] sm:text-[18px] text-[#8A93A6] leading-relaxed max-w-[560px] font-medium">
            Founded in <strong>2001</strong> by Dr. George Malke, DDS, and his wife Nadia Malke, our clinic has established a 25-year reputation for comfort, efficiency, and honest diagnostics. Today, under the expert clinical leadership of <strong>Dr. Diane Yousef, DMD</strong>, we leverage advanced dental technology to keep Bergen County, NJ smiling with pride.
          </p>

          {/* Social Proof Star row */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-1.5">
              {[1, 2, 3, 4, 5].map((s) => (
                <svg key={s} className="w-5 h-5 text-amber-500 fill-amber-500" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <div className="text-[17px] sm:text-[19px] leading-tight font-black text-[#1C1E26]" id="patient-satisfaction-subtext">
              {t('Rated 5 Stars')} <span className="text-[#1A6FD4]">{t('Across Over 1,200 Bergen County Patients')}</span>
            </div>
          </div>

          <a 
            href="#booking-form-section" 
            className="bg-[#1A6FD4] text-white hover:bg-[#1559ab] px-10 py-5 rounded-full text-[17px] font-extrabold transition-all shadow-xl shadow-[#1A6FD4]/20 inline-block transform active:scale-95"
            id="story-book-btn"
          >
            {t('Book an Appointment')}
          </a>
        </motion.div>

        {/* Right Column (50%) - Work Hours Card */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className="col-span-1 lg:col-span-6 w-full max-w-2xl mx-auto lg:mr-0"
        >
          <div className="bg-white rounded-[32px] p-8 sm:p-12 shadow-2xl border border-[#E8ECF0]">
            <h3 className="text-[24px] font-black text-[#1C1E26] mb-8 text-center tracking-tight flex items-center justify-center gap-2">
              <Clock className="w-6 h-6 text-[#1A6FD4]" />
              {t('Clinic Hours')}
            </h3>

            <div className="space-y-4 mb-8">
              {/* Monday */}
              <div className="flex items-center text-[15px] sm:text-[16px]">
                <span className="text-[#8A93A6] font-bold min-w-[100px]">{t('Monday')}</span>
                <div className="flex-grow border-b border-dotted border-gray-200 mx-3 self-end mb-1.5" />
                <span className="text-[#1C1E26] font-black bg-[#F4F6F9] px-3 py-1 rounded-lg">9:00am – 6:00pm</span>
              </div>

              {/* Tuesday */}
              <div className="flex items-center text-[15px] sm:text-[16px]">
                <span className="text-[#8A93A6] font-bold min-w-[100px]">{t('Tuesday')}</span>
                <div className="flex-grow border-b border-dotted border-gray-200 mx-3 self-end mb-1.5" />
                <span className="text-[#1C1E26] font-black bg-[#F4F6F9] px-3 py-1 rounded-lg">9:00am – 6:00pm</span>
              </div>

              {/* Wednesday (Closed) */}
              <div className="flex items-center text-[15px] sm:text-[16px]">
                <span className="text-[#1A6FD4]/60 font-bold min-w-[100px]">{t('Wednesday')}</span>
                <div className="flex-grow border-b border-dotted border-gray-200 mx-3 self-end mb-1.5" />
                <span className="text-[#E05252] font-black bg-[#FEF2F2] text-[#E05252] px-3 py-1 rounded-lg">{t('CLOSED')}</span>
              </div>

              {/* Thursday */}
              <div className="flex items-center text-[15px] sm:text-[16px]">
                <span className="text-[#8A93A6] font-bold min-w-[100px]">{t('Thursday')}</span>
                <div className="flex-grow border-b border-dotted border-gray-200 mx-3 self-end mb-1.5" />
                <span className="text-[#1C1E26] font-black bg-[#F4F6F9] px-3 py-1 rounded-lg">9:00am – 6:00pm</span>
              </div>

              {/* Friday (Closed) */}
              <div className="flex items-center text-[15px] sm:text-[16px]">
                <span className="text-[#1A6FD4]/60 font-bold min-w-[100px]">{t('Friday')}</span>
                <div className="flex-grow border-b border-dotted border-gray-200 mx-3 self-end mb-1.5" />
                <span className="text-[#E05252] font-black bg-[#FEF2F2] text-[#E05252] px-3 py-1 rounded-lg">{t('CLOSED')}</span>
              </div>

              {/* Saturday */}
              <div className="flex items-center text-[15px] sm:text-[16px]">
                <span className="text-[#8A93A6] font-bold min-w-[100px]">{t('Saturday')}</span>
                <div className="flex-grow border-b border-dotted border-gray-200 mx-3 self-end mb-1.5" />
                <span className="text-[#1C1E26] font-black bg-[#FFFBEB] text-[#D97706] px-3 py-1 rounded-lg">{t('Alternating Sat, 9:00am – 2:00pm')}</span>
              </div>

              {/* Sunday (Closed) */}
              <div className="flex items-center text-[15px] sm:text-[16px]">
                <span className="text-[#1A6FD4]/60 font-bold min-w-[100px]">{t('Sunday')}</span>
                <div className="flex-grow border-b border-dotted border-gray-200 mx-3 self-end mb-1.5" />
                <span className="text-[#E05252] font-black bg-[#FEF2F2] text-[#E05252] px-3 py-1 rounded-lg">{t('CLOSED')}</span>
              </div>
            </div>

            {/* Bottom Contact Strip */}
            <a 
              href="tel:2018459334" 
              className="bg-[#1A6FD4] hover:bg-[#1559ab] text-white rounded-2xl py-5 px-8 flex items-center justify-center gap-3 text-[17px] font-black transition-all shadow-lg shadow-[#1A6FD4]/10 active:scale-98"
            >
              <Phone className="w-5 h-5 text-white fill-white" />
              <span>{t('Call Saddle Brook Office')}: (201) 845-9334</span>
            </a>
          </div>
        </motion.div>
        
        {/* Dot pattern placement */}
        <div className="absolute right-8 bottom-[-48px] z-10 hidden sm:block">
          <DotPattern />
        </div>
      </div>
    </section>
  );
};
