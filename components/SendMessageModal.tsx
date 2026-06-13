import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, MessageSquare, CheckCircle2, Sparkles } from 'lucide-react';
import { Dentist } from '../lib/types';

interface SendMessageModalProps {
  t: (key: string) => string;
  dentists: Dentist[];
  messageOpen: boolean;
  setMessageOpen: (open: boolean) => void;
  messageForm: { dentistId: string; text: string };
  setMessageForm: React.Dispatch<React.SetStateAction<{ dentistId: string; text: string }>>;
}

export const SendMessageModal: React.FC<SendMessageModalProps> = ({
  t,
  dentists,
  messageOpen,
  setMessageOpen,
  messageForm,
  setMessageForm,
}) => {
  const [messageSent, setMessageSent] = useState(false);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!messageForm.text.trim()) return;

    setMessageSent(true);
    setMessageForm(prev => ({ ...prev, text: '' }));
    setTimeout(() => {
      setMessageSent(false);
      setMessageOpen(false);
    }, 2500);
  };

  return (
    <AnimatePresence>
      {messageOpen && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="bg-white rounded-3xl max-w-sm w-full p-6 shadow-2xl border border-[#E8ECF0]"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-[16px] font-black text-[#1C1E26] flex items-center gap-2">
                <MessageSquare className="w-4.5 h-4.5 text-[#1A6FD4]" />
                {t('Direct Consultation Message')}
              </h3>
              <button 
                onClick={() => setMessageOpen(false)}
                className="p-1.5 text-[#8A93A6] hover:text-[#E05252] rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
                title={t('Close')}
              >
                <X className="w-4.5 h-4.5" />
              </button>
            </div>

            <form onSubmit={handleSendMessage} className="space-y-4 text-left">
              <div>
                <label className="block text-[12px] font-black text-[#8A93A6] uppercase tracking-wider mb-1.5">{t('Select Practitioner')}</label>
                <select 
                  value={messageForm.dentistId}
                  onChange={(e) => setMessageForm(prev => ({ ...prev, dentistId: e.target.value }))}
                  className="w-full bg-[#F4F6F9] border border-[#E8ECF0] text-[#1C1E26] rounded-xl px-3 py-2 text-[13.5px] font-bold focus:outline-none"
                >
                  {dentists.map(d => (
                    <option key={d.id} value={d.id}>{t(d.name)}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[12px] font-black text-[#8A93A6] uppercase tracking-wider mb-1.5">{t('Your Inquiry')}</label>
                <textarea 
                  value={messageForm.text}
                  onChange={(e) => setMessageForm(prev => ({ ...prev, text: e.target.value }))}
                  placeholder={t('Describe your dental discomfort or question here...')}
                  className="w-full bg-[#ffffff] border border-[#E8ECF0] text-[#1C1E26] rounded-xl p-3.5 text-[13px] h-28 focus:ring-4 focus:ring-[#1A6FD4]/10 focus:border-[#1A6FD4] focus:outline-none font-medium"
                  required
                />
              </div>

              <button 
                type="submit" 
                disabled={messageSent}
                className="w-full bg-[#1A6FD4] hover:bg-[#1559ab] disabled:bg-emerald-600 text-white rounded-xl text-[13.5px] font-black py-3 transition-all flex items-center justify-center gap-1.5 shadow-md shadow-[#1A6FD4]/15 cursor-pointer"
              >
                {messageSent ? (
                  <>
                    <CheckCircle2 className="w-4.5 h-4.5" />
                    {t('Message Sent Successfully!')}
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4.5 h-4.5" />
                    {t('Submit Consultation Request')}
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
