import React from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { X, Phone, Mail, MapPin } from 'lucide-react';
import logoImage from '@/src/assets/images/saddle_brook_logo_1781369990000.jpg';
import IconImage from '@/src/assets/images/icon.png'

interface MobileMenuProps {
  t: (key: string) => string;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
  activeSection: string;
  currentLanguage: string;
  setCurrentLanguage: (lang: string) => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  t,
  isMobileMenuOpen,
  setIsMobileMenuOpen,
  activeSection,
  currentLanguage,
  setCurrentLanguage,
}) => {
  return (
    <AnimatePresence>
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileMenuOpen(false)}
            className="fixed inset-0 bg-black/60 z-50 lg:hidden cursor-pointer"
          />
          
          {/* Drawer */}
          <motion.div 
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 bottom-0 w-[290px] sm:w-[320px] bg-white z-50 shadow-2xl p-6 flex flex-col justify-between overflow-y-auto lg:hidden border-l border-gray-100 text-left"
          >
            <div>
              {/* Header of Drawer */}
              <div className="flex justify-between items-center pb-5 border-b border-gray-100 mb-6">
                <div className="flex items-center">
                  <div className="relative h-10 w-[140px] shadow-sm bg-[#1A6FD4]/5 rounded-lg p-1">
                    <Image 
                      src={IconImage} 
                      alt="Saddle Brook Dentist Logo" 
                      fill 
                      sizes="140px"
                      className="object-contain"
                      priority
                    />
                  </div>
                </div>
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-1.5 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-all cursor-pointer"
                  title={t('Close Menu')}
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Nav Links */}
              <div className="flex flex-col gap-1 mb-8">
                {[
                  { id: 'home', label: 'Home', href: '#' },
                  { id: 'services', label: 'Services', href: '#services-section' },
                  { id: 'doctors', label: 'Our Doctors & Staff', href: '#doctors-section' },
                  { id: 'gallery', label: 'Office Photos', href: '#gallery-section' },
                  { id: 'forms', label: 'Patient lounge & Forms', href: '#forms-section' },
                  { id: 'blog', label: 'Recent Blog', href: '#blog-section' }
                ].map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <a 
                      key={item.id}
                      href={item.href} 
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`text-[15px] py-3.5 px-4 rounded-xl transition-all font-extrabold flex items-center justify-between ${isActive ? 'bg-[#1A6FD4]/5 text-[#1A6FD4]' : 'text-[#191D23] hover:bg-gray-50'}`}
                    >
                      <span>{t(item.label)}</span>
                      {isActive && <div className="w-2 h-2 bg-[#1A6FD4] rounded-full" />}
                    </a>
                  );
                })}
              </div>

              {/* Additional info/TopBar links */}
              <div className="border-t border-gray-100 pt-6 space-y-4">
                <div className="text-[11px] font-bold text-gray-400 uppercase tracking-wider pl-4 mb-2">{t('Our Contact Details')}</div>
                
                <a href="tel:2018459334" className="flex items-center gap-3 px-4 py-2 text-[14px] font-bold text-gray-700 hover:text-[#1A6FD4] transition-colors leading-none">
                  <Phone className="w-4 h-4 text-[#1A6FD4]" />
                  <span>(201) 845-9334</span>
                </a>
                
                <a href="mailto:info@saddlebrookdentist.com" className="flex items-center gap-3 px-4 py-2 text-[14px] font-bold text-gray-700 hover:text-[#1A6FD4] transition-colors leading-none">
                  <Mail className="w-4 h-4 text-[#1A6FD4]" />
                  <span>info@saddlebrookdentist.com</span>
                </a>

                <a href="https://maps.app.goo.gl/B24LXGBDhTGHvvt66" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-4 py-2 text-[13.5px] font-bold text-gray-700 hover:text-[#1A6FD4] transition-colors leading-tight">
                  <MapPin className="w-4 h-4 text-[#1A6FD4] flex-shrink-0" />
                  <span>505 Saddle River Rd, NJ</span>
                </a>

                {/* Language display inside menu */}
                <div className="px-4 pt-3 flex flex-col gap-2">
                  <span className="text-[13.5px] text-gray-500 font-bold">{t('Language')}</span>
                  <div className="flex flex-wrap gap-1.5">
                    {['English', 'Spanish', 'French', 'Arabic'].map((lang) => (
                      <button
                        key={lang}
                        onClick={() => {
                          setCurrentLanguage(lang);
                        }}
                        className={`text-[12px] px-2.5 py-1.5 rounded-lg font-black tracking-wide border transition-all cursor-pointer ${currentLanguage === lang ? 'bg-[#1A6FD4] text-white border-[#1A6FD4]' : 'bg-gray-50 text-gray-600 border-gray-200 hover:bg-gray-100'}`}
                      >
                        {lang}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Booking button at the bottom of drawer */}
            <div className="pt-6 border-t border-gray-100 mt-6">
              <a 
                href="#booking-form-section" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full bg-[#1A6FD4] hover:bg-[#1559ab] text-white py-4 rounded-xl text-[14px] font-black text-center transition-all block shadow-lg shadow-[#1A6FD4]/10 active:scale-[0.98]"
              >
                {t('Book Online Today')}
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
