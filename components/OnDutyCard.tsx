import React from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { X, MessageSquare } from 'lucide-react';

interface OnDutyCardProps {
  t: (key: string) => string;
  onDutyCardOpen: boolean;
  setOnDutyCardOpen: (open: boolean) => void;
  setMessageForm: (form: { dentistId: string; text: string }) => void;
  setMessageOpen: (open: boolean) => void;
}

export const OnDutyCard: React.FC<OnDutyCardProps> = ({
  t,
  onDutyCardOpen,
  setOnDutyCardOpen,
  setMessageForm,
  setMessageOpen,
}) => {
  return (
    <AnimatePresence>
      {onDutyCardOpen && (
        <motion.div 
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.95 }}
          className="fixed bottom-6 right-6 bg-white rounded-2xl shadow-2xl border border-gray-100 p-5 w-[280px] z-50 hidden sm:block"
        >
          <div className="flex justify-between items-center mb-4">
            <div className="text-[14px] font-black text-[#1C1E26] flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              {t('On Duty Today')}
            </div>
            <button 
              onClick={() => setOnDutyCardOpen(false)}
              className="text-gray-400 hover:text-gray-600 p-1 rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
              title={t('Dismiss panel')}
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Duty Rows */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-[#1A6FD4]/10 flex-shrink-0">
                <Image 
                  src="/DrDianeYousef.webp" 
                  alt="Dr. Diane Yousef" 
                  fill
                  sizes="40px"
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="text-left">
                <div className="text-[13px] font-extrabold text-[#1C1E26] leading-tight">Dr. Diane Yousef</div>
                <div className="text-[11px] text-[#8A93A6] font-bold leading-none mt-1">{t('Lead DMD')}</div>
              </div>
            </div>

          </div>

          <button 
            onClick={() => {
              setMessageForm({ dentistId: 'dentist-yousef', text: '' });
              setMessageOpen(true);
            }}
            className="mt-4 w-full border border-[#1A6FD4] text-[#1A6FD4] hover:bg-[#1A6FD4] hover:text-white transition-all duration-200 text-[12.5px] font-black py-2.5 rounded-xl flex items-center justify-center gap-1.5 cursor-pointer"
            id="floating-msg-btn-foot"
          >
            <MessageSquare className="w-4 h-4" />
            {t('Quick Message')}
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
