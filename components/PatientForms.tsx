import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FileText, Download, CheckCircle2 } from 'lucide-react';

interface PatientFormsProps {
  t: (key: string) => string;
}

export const PatientForms: React.FC<PatientFormsProps> = ({ t }) => {
  const [downloadingId, setDownloadingId] = useState<string | null>(null);

  const triggerDownload = (id: string, name: string) => {
    setDownloadingId(id);
    setTimeout(() => {
      setDownloadingId(null);
    }, 2500);
  };

  const formsData = [
    {
      id: 'patient-form-1',
      title: 'New Patient Registration Form',
      description: 'Complete your master dental chart and medical records safely prior to your arrival at our clinic.',
      iconColor: 'bg-[#1A6FD4]/5 text-[#1A6FD4]',
    },
    {
      id: 'patient-form-2',
      title: 'Health History Form',
      description: 'Record past prescription outlines, previous dental surgery contexts, and sensitive systemic health alerts.',
      iconColor: 'bg-orange-500/5 text-orange-600',
    },
    {
      id: 'patient-form-3',
      title: 'HIPAA Consent Notice Form',
      description: 'Learn about your personal diagnostics confidentiality guarantees and HIPAA state medical privacy disclosures.',
      iconColor: 'bg-emerald-500/5 text-emerald-600',
    },
    {
      id: 'patient-form-4',
      title: 'Minor Health Registration Form',
      description: 'Completed by legal parents / guardians authorizing regular cleanings and treatment strategies for infants and children.',
      iconColor: 'bg-purple-500/5 text-purple-600',
    },
  ];

  return (
    <section id="forms-section" className="w-full bg-[#F4F7FA] py-24 border-b border-[#F0F2F5]">
      <div className="max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-16 xl:px-20">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-14 gap-6">
          <div>
            <span className="bg-[#1A6FD4]/10 text-[#1A6FD4] px-4 py-1.5 rounded-full text-[12px] font-black uppercase tracking-wider">
              {t('Registration lounge')}
            </span>
            <h2 className="text-[32px] sm:text-[36px] font-black text-[#1C1E26] tracking-tight mt-3">
              {t('Patient lounge & Forms')}
            </h2>
            <p className="text-[15px] font-semibold text-[#8A93A6] mt-1.5">
              {t('Expedite your dental check-in by accessing registration files online.')}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {formsData.map((form, index) => (
            <motion.div 
              key={form.id} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: index * 0.08 }}
              className="bg-white border border-[#E8ECF0] rounded-[24px] p-6 flex flex-col justify-between hover:shadow-xl hover:border-[#1A6FD4]/40 transition-all group"
            >
              <div>
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${form.iconColor}`}>
                  <FileText className="w-6 h-6" />
                </div>
                <h3 className="text-[16.5px] font-black text-[#1C1E26] leading-tight group-hover:text-[#1A6FD4]">
                  {t(form.title)}
                </h3>
                <p className="text-[13.5px] text-[#8A93A6] font-medium leading-relaxed mt-2">
                  {t(form.description)}
                </p>
              </div>
              <div className="mt-6 pt-5 border-t border-gray-50 relative">
                <button 
                  onClick={() => triggerDownload(form.id, form.title)}
                  className={`w-full font-black text-[12.5px] py-2.5 rounded-xl flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                    downloadingId === form.id 
                    ? 'bg-emerald-500 text-white' 
                    : 'bg-gray-50 hover:bg-[#1A6FD4] text-gray-700 hover:text-white'
                  }`}
                  disabled={downloadingId !== null}
                >
                  {downloadingId === form.id ? (
                    <>
                      <CheckCircle2 className="w-4 h-4 animate-scale-up" /> {t('Form Downloaded!')}
                    </>
                  ) : (
                    <>
                      <Download className="w-4 h-4" /> {t('Download PDF Form')}
                    </>
                  )}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
