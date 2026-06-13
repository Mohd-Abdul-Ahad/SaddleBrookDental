import React from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { X, Info, MessageSquare } from 'lucide-react';
import { Dentist } from '../lib/types';

interface DentistDetailModalProps {
  t: (key: string) => string;
  selectedDentistDetail: Dentist | null;
  setSelectedDentistDetail: (dentist: Dentist | null) => void;
  setSelectedDentist: (id: string) => void;
  setMessageForm: (form: { dentistId: string; text: string }) => void;
  setMessageOpen: (open: boolean) => void;
}

export const DentistDetailModal: React.FC<DentistDetailModalProps> = ({
  t,
  selectedDentistDetail,
  setSelectedDentistDetail,
  setSelectedDentist,
  setMessageForm,
  setMessageOpen,
}) => {
  return (
    <AnimatePresence>
      {selectedDentistDetail && (
        <div className="fixed inset-0 bg-black/65 z-40 flex items-center justify-center p-4">
          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="bg-white rounded-3xl max-w-md w-full overflow-hidden shadow-2xl border border-[#E8ECF0]"
          >
            <div className="relative h-56 w-full">
              <Image 
                src={selectedDentistDetail.photo} 
                alt={selectedDentistDetail.name} 
                fill 
                sizes="400px"
                className="object-cover"
                referrerPolicy="no-referrer"
              />
              <button 
                onClick={() => setSelectedDentistDetail(null)}
                className="absolute top-4 right-4 bg-white/85 text-gray-700 hover:bg-white hover:text-[#E05252] rounded-full p-2 transition-colors shadow-md z-10 cursor-pointer"
                id="close-dentist-detail-btn"
                title={t('Close details')}
              >
                <X className="w-4.5 h-4.5" />
              </button>
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 to-transparent" />
              <div className="absolute bottom-4 left-5">
                <span className="bg-[#1A6FD4] text-white text-[11px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full">{t(selectedDentistDetail.specialty)}</span>
                <h3 className="text-white text-[20px] font-black mt-2 leading-tight">{t(selectedDentistDetail.name)}</h3>
              </div>
            </div>

            <div className="p-6 text-left">
              <div className="grid grid-cols-2 gap-4 bg-[#F4F6F9] rounded-xl p-4 text-center mb-5 text-[13px]">
                <div>
                  <div className="text-[#8A93A6] font-bold leading-none">{t('Experience')}</div>
                  <div className="text-[#1C1E26] font-black mt-2 text-[14.5px]">{t(selectedDentistDetail.experience)}</div>
                </div>
                <div className="border-l border-[#E8ECF0]">
                  <div className="text-[#8A93A6] font-bold leading-none">{t('Patient Rating')}</div>
                  <div className="text-amber-700 font-black mt-2 text-[14.5px]">★ {selectedDentistDetail.rating}</div>
                </div>
              </div>

              <div className="text-[14px] text-[#8A93A6] leading-relaxed mb-5">
                <h4 className="text-[13.5px] font-black text-[#1C1E26] mb-2 flex items-center gap-1.5">
                  <Info className="w-4.5 h-4.5 text-[#1A6FD4]" />
                  {t('Biography & Expertise')}
                </h4>
                {t(selectedDentistDetail.bio)}
              </div>

              <div className="flex gap-3">
                <button 
                  onClick={() => {
                    setSelectedDentist(selectedDentistDetail.id);
                    setSelectedDentistDetail(null);
                    // Standard smooth scroll
                    const el = document.getElementById('booking-form-section');
                    if (el) {
                      el.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="flex-1 bg-[#1A6FD4] hover:bg-[#1559ab] text-white text-[13.5px] font-black py-3 rounded-xl transition-colors shadow-md shadow-[#1A6FD4]/10 cursor-pointer"
                  id="dentist-detail-book-btn"
                >
                  {t('Select & Book Now')}
                </button>
                <button 
                  onClick={() => {
                    setMessageForm({ dentistId: selectedDentistDetail.id, text: '' });
                    setSelectedDentistDetail(null);
                    setMessageOpen(true);
                  }}
                  className="px-4 border border-[#1A6FD4] hover:bg-[#1A6FD4]/5 text-[#1A6FD4] rounded-xl transition-colors cursor-pointer"
                  title={t('Quick Message')}
                >
                  <MessageSquare className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
