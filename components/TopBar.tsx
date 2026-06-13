import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, ExternalLink, Facebook, Instagram, Twitter, ChevronDown } from 'lucide-react';

interface TopBarProps {
  currentLanguage: string;
  setCurrentLanguage: (lang: string) => void;
  langDropdownOpen: boolean;
  setLangDropdownOpen: (open: boolean) => void;
}

export const TopBar: React.FC<TopBarProps> = ({
  currentLanguage,
  setCurrentLanguage,
  langDropdownOpen,
  setLangDropdownOpen,
}) => {
  return (
    <div id="top-info-bar" className="w-full bg-[#FAFBFC] border-b border-[#F0F2F5] transition-all hidden md:block">
      <div className="max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-16 xl:px-20 py-4 flex flex-col md:flex-row justify-between items-center text-[14px] gap-4">
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-8 text-[#1C1E26] font-semibold font-sans">
          <span className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-[#1A6FD4]" />
            <a href="mailto:info@saddlebrookdentist.com" className="text-[#8A93A6] hover:text-[#1A6FD4] transition-colors">info@saddlebrookdentist.com</a>
          </span>
          <span className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-[#1A6FD4]" />
            <a href="tel:2018459334" className="text-[#8A93A6] hover:text-[#1A6FD4] transition-colors">(201) 845-9334</a>
          </span>
          <span className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-[#1A6FD4]" />
            <a href="https://maps.app.goo.gl/B24LXGBDhTGHvvt66" target="_blank" rel="noopener noreferrer" className="text-[#8A93A6] hover:text-[#1A6FD4] transition-colors flex items-center gap-1">
              505 Saddle River Rd, Saddle Brook, NJ
              <ExternalLink className="w-3.5 h-3.5 text-[#8A93A6]" />
            </a>
          </span>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3">
            <a href="#" className="w-8 h-8 rounded-full bg-[#F4F6F9] hover:bg-[#E8ECF0] flex items-center justify-center transition-colors" aria-label="Facebook">
              <Facebook className="w-4 h-4 text-[#8A93A6] hover:text-[#1A6FD4]" />
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-[#F4F6F9] hover:bg-[#E8ECF0] flex items-center justify-center transition-colors" aria-label="Instagram">
              <Instagram className="w-4 h-4 text-[#8A93A6] hover:text-[#1A6FD4]" />
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-[#F4F6F9] hover:bg-[#E8ECF0] flex items-center justify-center transition-colors" aria-label="Twitter">
              <Twitter className="w-4 h-4 text-[#8A93A6] hover:text-[#1A6FD4]" />
            </a>
          </div>
          
          <div className="h-5 w-[1px] bg-[#E8ECF0]" />
          
          <div className="relative">
            <button 
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="flex items-center gap-1.5 text-[#8A93A6] font-bold hover:text-[#1C1E26] transition-colors py-1.5 text-[14px]"
              id="language-selector"
            >
              <span>{currentLanguage}</span>
              <ChevronDown className="w-4 h-4 transition-transform duration-200" style={{ transform: langDropdownOpen ? 'rotate(180deg)' : 'none' }} />
            </button>

            <AnimatePresence>
              {langDropdownOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 5 }}
                  className="absolute right-0 mt-2 w-32 bg-white border border-[#E8ECF0] rounded-xl shadow-xl py-1.5 z-50 text-[13.5px]"
                >
                  {['English', 'Spanish', 'French', 'Arabic'].map((lang) => (
                    <button
                      key={lang}
                      onClick={() => {
                        setCurrentLanguage(lang);
                        setLangDropdownOpen(false);
                      }}
                      className="w-full text-left px-4 py-2.5 text-[#1C1E26] hover:bg-[#F4F6F9] font-medium transition-colors"
                    >
                      {lang}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};
