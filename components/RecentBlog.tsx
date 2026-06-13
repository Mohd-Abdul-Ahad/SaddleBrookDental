import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';

interface RecentBlogProps {
  t: (key: string) => string;
}

export const RecentBlog: React.FC<RecentBlogProps> = ({ t }) => {
  return (
    <section id="blog-section" className="w-full bg-white py-24 border-b border-[#F0F2F5]">
      <div className="max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-16 xl:px-20">
        <div className="mb-14">
          <span className="bg-[#1A6FD4]/10 text-[#1A6FD4] px-4 py-1.5 rounded-full text-[12px] font-black uppercase tracking-wider">
            {t('Educational Dental Insights')}
          </span>
          <h2 className="text-[32px] sm:text-[36px] font-black text-[#1C1E26] tracking-tight mt-3">
            {t('Recent Blog')}
          </h2>
          <p className="text-[15px] text-[#8A93A6] mt-2 font-medium">
            {t('Expert guidelines in Bergen County, NJ to maintain structural smile wellness.')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Blog Post 1 */}
          <motion.article 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0 }}
            className="border border-[#E8ECF0] rounded-[24px] overflow-hidden bg-white hover:border-[#1A6FD4]/40 hover:shadow-2xl transition-all flex flex-col group"
          >
            <div className="relative w-full aspect-[16/10] bg-gray-50">
              <Image 
                src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=600&auto=format&fit=crop" 
                alt="Dental Crowns in Bergen County" 
                fill 
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover group-hover:scale-102 transition-transform duration-300"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-7 flex-grow flex flex-col justify-between">
              <div>
                <span className="text-[11.5px] font-extrabold text-[#1A6FD4] uppercase tracking-wider">{t('Crowns & Restorative')}</span>
                <h3 className="text-[17px] sm:text-[18px] font-black text-[#1C1E26] leading-snug mt-2.5 group-hover:text-[#1A6FD4] transition-colors">
                  {t('Dental Crowns in Bergen County, NJ | Restore Your Smile at Saddle Brook Dentist')}
                </h3>
                <p className="text-[13.5px] text-[#8A93A6] leading-relaxed mt-3.5 font-medium">
                  {t('Need a dental crown in Bergen County, NJ? Saddle Brook Dentist offers custom porcelain crowns to restore damaged teeth. Call Dr. Diane Yousef, DMD today.')}
                </p>
              </div>
              <div className="mt-8 pt-5 border-t border-gray-100">
                <a href="#booking-form-section" className="w-full bg-[#1A6FD4]/5 hover:bg-[#1A6FD4] text-[#1A6FD4] hover:text-white font-black text-[13px] py-3 rounded-xl flex items-center justify-center gap-1.5 transition-all text-center">
                  {t('Read Clinical Article')} →
                </a>
              </div>
            </div>
          </motion.article>

          {/* Blog Post 2 */}
          <motion.article 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="border border-[#E8ECF0] rounded-[24px] overflow-hidden bg-white hover:border-[#1A6FD4]/40 hover:shadow-2xl transition-all flex flex-col group"
          >
            <div className="relative w-full aspect-[16/10] bg-gray-50">
              <Image 
                src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=600&auto=format&fit=crop" 
                alt="Dental Bonding in Saddle Brook" 
                fill 
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover group-hover:scale-102 transition-transform duration-300"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-7 flex-grow flex flex-col justify-between">
              <div>
                <span className="text-[11.5px] font-extrabold text-[#1A6FD4] uppercase tracking-wider">{t('Cosmetic Bonding')}</span>
                <h3 className="text-[17px] sm:text-[18px] font-black text-[#1C1E26] leading-snug mt-2.5 group-hover:text-[#1A6FD4] transition-colors">
                  {t('Dental Bonding in Saddle Brook, NJ | Quick, Affordable Smile Repairs at Saddle Brook Dentist')}
                </h3>
                <p className="text-[13.5px] text-[#8A93A6] leading-relaxed mt-3.5 font-medium">
                  {t('Restore chipped, gapped, or discolored teeth with dental bonding in Saddle Brook, NJ. Dr. Diane Yousef offers same-visit cosmetic results at Saddle Brook Dentist.')}
                </p>
              </div>
              <div className="mt-8 pt-5 border-t border-gray-100">
                <a href="#booking-form-section" className="w-full bg-[#1A6FD4]/5 hover:bg-[#1A6FD4] text-[#1A6FD4] hover:text-white font-black text-[13px] py-3 rounded-xl flex items-center justify-center gap-1.5 transition-all text-center">
                  {t('Read Clinical Article')} →
                </a>
              </div>
            </div>
          </motion.article>

          {/* Blog Post 3 */}
          <motion.article 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="border border-[#E8ECF0] rounded-[24px] overflow-hidden bg-white hover:border-[#1A6FD4]/40 hover:shadow-2xl transition-all flex flex-col group"
          >
            <div className="relative w-full aspect-[16/10] bg-gray-50">
              <Image 
                src="https://images.unsplash.com/photo-1677026010083-78ec7f1b84ed?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Cosmetic Dentist in Bergen County" 
                fill 
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover group-hover:scale-102 transition-transform duration-300"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-7 flex-grow flex flex-col justify-between">
              <div>
                <span className="text-[11.5px] font-extrabold text-[#1A6FD4] uppercase tracking-wider">{t('Aesthetic Makeovers')}</span>
                <h3 className="text-[17px] sm:text-[18px] font-black text-[#1C1E26] leading-snug mt-2.5 group-hover:text-[#1A6FD4] transition-colors">
                  {t('Cosmetic Dentist in Bergen County, NJ | Smile Transformations at Saddle Brook Dentist')}
                </h3>
                <p className="text-[13.5px] text-[#8A93A6] leading-relaxed mt-3.5 font-medium">
                  {t('Looking for a trusted cosmetic dentist in Bergen County, NJ? Saddle Brook Dentist offers teeth whitening, veneers, bonding, Invisalign, and smile makeovers near you.')}
                </p>
              </div>
              <div className="mt-8 pt-5 border-t border-gray-100">
                <a href="#booking-form-section" className="w-full bg-[#1A6FD4]/5 hover:bg-[#1A6FD4] text-[#1A6FD4] hover:text-white font-black text-[13px] py-3 rounded-xl flex items-center justify-center gap-1.5 transition-all text-center">
                  {t('Read Clinical Article')} →
                </a>
              </div>
            </div>
          </motion.article>

        </div>
      </div>
    </section>
  );
};
