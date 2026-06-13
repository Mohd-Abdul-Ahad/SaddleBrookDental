import React from 'react';
import Image from 'next/image';
import { Facebook, Twitter, Phone, MapPin, Mail, ExternalLink } from 'lucide-react';
import logoImage from '@/src/assets/images/saddle_brook_logo_1781369990000.jpg';

interface FooterProps {
  t: (key: string) => string;
}

export const Footer: React.FC<FooterProps> = ({ t }) => {
  return (
    <footer className="w-full bg-[#1C1E26] text-[#8A93A6] py-20 text-[13.5px] font-bold border-t border-gray-800">
      <div className="max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-16 xl:px-20 grid grid-cols-1 md:grid-cols-4 gap-12 text-left mb-16">
        
        <div className="md:col-span-2 space-y-5">
          <div className="flex items-center">
            <div className="bg-white p-1.5 rounded-xl relative h-10 w-[150px] shadow-md shadow-black/20">
              <Image 
                src={logoImage} 
                alt="Saddle Brook Dentist Logo" 
                fill 
                sizes="150px"
                className="object-contain"
              />
            </div>
          </div>
          <p className="text-[#8A93A6] font-medium leading-relaxed max-w-[380px]">
            {t('Providing top-grade preventive, restorative, cosmetic, and emergency dental consultations to NJ families since 2001. Leading with advanced comfort vectors.')}
          </p>
          <div className="flex gap-4 pt-2">
            <a href="https://facebook.com/saddlebrookdentist" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#1A6FD4] hover:text-white flex items-center justify-center transition-all" aria-label="Facebook">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="https://twitter.com/gmalkedds" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#1A6FD4] hover:text-white flex items-center justify-center transition-all" aria-label="Twitter">
              <Twitter className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="text-white text-[15px] font-black">{t('Contact Desk')}</h4>
          <div className="space-y-3 font-medium text-[#8A93A6]">
            <p className="flex items-start gap-2">
              <Phone className="w-4.5 h-4.5 text-[#1A6FD4] shrink-0 mt-0.5" />
              <a href="tel:2018459334" className="hover:text-white transition-colors">(201) 845-9334</a>
            </p>
            <p className="flex items-start gap-2 leading-snug">
              <MapPin className="w-4.5 h-4.5 text-[#1A6FD4] shrink-0 mt-0.5" />
              <a href="https://maps.app.goo.gl/B24LXGBDhTGHvvt66" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                505 Saddle River Rd,<br />Saddle Brook, NJ
              </a>
            </p>
            <p className="flex items-start gap-2">
              <Mail className="w-4.5 h-4.5 text-[#1A6FD4] shrink-0 mt-0.5" />
              <a href="mailto:info@saddlebrookdentist.com" className="hover:text-white transition-colors">info@saddlebrookdentist.com</a>
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="text-white text-[15px] font-black">{t('Quick Navigation')}</h4>
          <div className="flex flex-col space-y-2 font-medium">
            <a href="#services-section" className="hover:text-white transition-colors">{t('Dental Services')}</a>
            <a href="#doctors-section" className="hover:text-white transition-colors">{t('Our Doctors & Staff')}</a>
            <a href="#gallery-section" className="hover:text-white transition-colors">{t('Office Photos')}</a>
            <a href="#forms-section" className="hover:text-white transition-colors">{t('Patient lounge & Forms')}</a>
            <a href="#booking-form-section" className="hover:text-white block bg-[#1A6FD4] text-white rounded-xl text-center py-2 hover:bg-[#1559ab] transition-all">{t('Book Online Today')}</a>
          </div>
        </div>

      </div>

      <div className="max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-16 xl:px-20 pt-8 border-t border-gray-800/60 flex flex-col sm:flex-row justify-between items-center gap-6">
        <div>© 2026 Saddle Brook Dentist. {t('All rights reserved.')} Registered DMD/DDS Practice, Bergen County, New Jersey.</div>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white transition-colors">{t('Privacy Disclosure')}</a>
          <a href="#" className="hover:text-white transition-colors">{t('Terms of Operations')}</a>
          <a href="https://maps.app.goo.gl/B24LXGBDhTGHvvt66" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1">{t('Location Directions')} <ExternalLink className="w-3.5 h-3.5" /></a>
        </div>
      </div>
    </footer>
  );
};
