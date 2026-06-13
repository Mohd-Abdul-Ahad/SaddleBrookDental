import React from 'react';
import { motion } from 'motion/react';

interface TestimonialsProps {
  t: (key: string) => string;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ t }) => {
  return (
    <section id="testimonials-section" className="w-full bg-white py-24 border-b border-[#F0F2F5]">
      <div className="max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-16 xl:px-20">
        <div className="mb-14 text-center">
          <span className="bg-amber-50 rounded-full text-[#B45309] border border-amber-200 px-4 py-1.5 text-[12px] font-extrabold uppercase tracking-widest">
            {t('Verified Dental Patient Reviewers')}
          </span>
          <h2 className="text-[32px] sm:text-[38px] font-black text-[#1C1E26] tracking-tight mt-4">
            {t('Praising Family Care & Clinic Comfort')}
          </h2>
          <p className="text-[15.5px] font-medium text-[#8A93A6] max-w-[650px] mx-auto mt-2">
            {t('Our patients share clinical checkup reflections detailing our friendly treatment teams and pain-free execution.')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Review 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0 }}
            className="bg-slate-50 border border-[#E8ECF0]/80 rounded-[28px] p-8 flex flex-col justify-between hover:shadow-xl hover:border-amber-200 transition-all duration-300 relative group"
          >
            <span className="text-[72px] text-[#1A6FD4]/10 leading-none absolute top-4 right-6 font-serif select-none pointer-events-none">“</span>
            <div>
              <div className="flex gap-1 mb-5 font-sans justify-start">
                {[1, 2, 3, 4, 5].map((s) => (
                  <span key={s} className="text-amber-500 text-[18px]">★</span>
                ))}
              </div>
              <p className="text-[14.5px] text-[#1C1E26] italic font-medium leading-relaxed">
                &quot;I had a fantastic tooth cleaning by <strong>Sonia</strong>! Afterward, I had a very detailed and honest checkup by <strong>Dr. Malke</strong>. The newly renovated office feels exceptionally welcoming, sanitized, and advanced. Highly recommend!&quot;
              </p>
            </div>
            <div className="flex items-center gap-3.5 mt-8 border-t border-gray-200/50 pt-5">
              <div className="w-10 h-10 rounded-full bg-amber-700/10 text-amber-700 flex items-center justify-center font-black text-[13px]">
                EY
              </div>
              <div>
                <div className="text-[14px] font-extrabold text-[#1C1E26]">Ella Yedra</div>
                <div className="text-[11.5px] text-[#8A93A6] font-bold">{t('Bergen County patient, NJ')}</div>
              </div>
            </div>
          </motion.div>

          {/* Review 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="bg-slate-50 border border-[#E8ECF0]/80 rounded-[28px] p-8 flex flex-col justify-between hover:shadow-xl hover:border-amber-200 transition-all duration-300 relative group"
          >
            <span className="text-[72px] text-[#1A6FD4]/10 leading-none absolute top-4 right-6 font-serif select-none pointer-events-none">“</span>
            <div>
              <div className="flex gap-1 mb-5 font-sans justify-start">
                {[1, 2, 3, 4, 5].map((s) => (
                  <span key={s} className="text-amber-500 text-[18px]">★</span>
                ))}
              </div>
              <p className="text-[14.5px] text-[#1C1E26] italic font-medium leading-relaxed">
                &quot;The staff is friendly, efficient, and welcoming. My hygienist, <strong>Paulina</strong>, was incredibly sweet and detailed. I really respect Dr. George Malke&apos;s honesty—he never suggests unneeded treatments and gives pure facts. Beautiful clinic.&quot;
              </p>
            </div>
            <div className="flex items-center gap-3.5 mt-8 border-t border-gray-200/50 pt-5">
              <div className="w-10 h-10 rounded-full bg-indigo-700/10 text-indigo-700 flex items-center justify-center font-black text-[13px]">
                AN
              </div>
              <div>
                <div className="text-[14px] font-extrabold text-[#1C1E26]">Anonymous</div>
                <div className="text-[11.5px] text-[#8A93A6] font-bold">{t('Saddle Brook Patient, NJ')}</div>
              </div>
            </div>
          </motion.div>

          {/* Review 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="bg-slate-50 border border-[#E8ECF0]/80 rounded-[28px] p-8 flex flex-col justify-between hover:shadow-xl hover:border-amber-200 transition-all duration-300 relative group"
          >
            <span className="text-[72px] text-[#1A6FD4]/10 leading-none absolute top-4 right-6 font-serif select-none pointer-events-none">“</span>
            <div>
              <div className="flex gap-1 mb-5 font-sans justify-start">
                {[1, 2, 3, 4, 5].map((s) => (
                  <span key={s} className="text-amber-500 text-[18px]">★</span>
                ))}
              </div>
              <p className="text-[14.5px] text-[#1C1E26] italic font-medium leading-relaxed">
                &quot;I have been coming here as a patient for over **17 years**. Dr. George Malke is an incredibly knowledgeable, professional, and reliable dentist. Our family values Dr. Diane Yousef&apos;s transition as lead doctor, continuing that stellar path.&quot;
              </p>
            </div>
            <div className="flex items-center gap-3.5 mt-8 border-t border-gray-200/50 pt-5">
              <div className="w-10 h-10 rounded-full bg-emerald-700/10 text-emerald-700 flex items-center justify-center font-black text-[13px]">
                VI
              </div>
              <div>
                <div className="text-[14px] font-extrabold text-[#1C1E26]">Vladimir Ionis</div>
                <div className="text-[11.5px] text-[#8A93A6] font-bold">{t('Bergen County, NJ')}</div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
