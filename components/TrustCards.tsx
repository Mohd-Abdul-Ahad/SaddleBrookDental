import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Award, Activity } from 'lucide-react';
import { DotPattern } from './DotPattern';

interface TrustCardsProps {
  t: (key: string) => string;
}

export const TrustCards: React.FC<TrustCardsProps> = ({ t }) => {
  return (
    <section id="trust-cards-section" className="w-full bg-white py-20 relative">
      <div className="max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-16 xl:px-20 relative">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0 }}
            className="bg-white border border-[#EAECF0] rounded-[24px] p-8 flex items-center gap-6 hover:border-[#1A6FD4]/50 hover:shadow-xl transition-all group"
          >
            <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-700 flex-shrink-0 border border-gray-100 group-hover:bg-[#1A6FD4]/5 transition-colors">
              <ShieldCheck className="w-7 h-7 text-[#1C1E26] stroke-[1.8]" />
            </div>
            <div>
              <div className="text-[15px] font-bold text-[#1A6FD4] tracking-wide leading-tight">{t('Guaranteed')}</div>
              <div className="text-[16px] font-extrabold text-[#1C1E26] leading-tight mt-1">{t('Quality Treatment')}</div>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="bg-white border border-[#EAECF0] rounded-[24px] p-8 flex items-center gap-6 hover:border-[#1A6FD4]/50 hover:shadow-xl transition-all group"
          >
            <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-700 flex-shrink-0 border border-gray-100 group-hover:bg-[#1A6FD4]/5 transition-colors">
              <Award className="w-7 h-7 text-[#1C1E26] stroke-[1.8]" />
            </div>
            <div>
              <div className="text-[15px] font-bold text-[#1A6FD4] tracking-wide leading-tight">{t('Certified')}</div>
              <div className="text-[16px] font-extrabold text-[#1C1E26] leading-tight mt-1">{t('Dental Surgery')}</div>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="bg-white border border-[#EAECF0] rounded-[24px] p-8 flex items-center gap-6 hover:border-[#1A6FD4]/50 hover:shadow-xl transition-all group"
          >
            <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-700 flex-shrink-0 border border-gray-100 group-hover:bg-[#1A6FD4]/5 transition-colors">
              <Activity className="w-7 h-7 text-[#1C1E26] stroke-[1.8]" />
            </div>
            <div>
              <div className="text-[15px] font-bold text-[#1A6FD4] tracking-wide leading-tight">{t('Free')}</div>
              <div className="text-[16px] font-extrabold text-[#1C1E26] leading-tight mt-1">{t('Ongoing Monitoring')}</div>
            </div>
          </motion.div>
        </div>

        {/* Dot pattern placement */}
        <div className="absolute right-8 bottom-[-48px] z-10 hidden sm:block">
          <DotPattern />
        </div>
      </div>
    </section>
  );
};
