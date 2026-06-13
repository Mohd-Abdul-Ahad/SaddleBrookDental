import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, CheckCircle2, Clock, User, X } from 'lucide-react';
import { Dentist, Appointment } from '../lib/types';

interface BookingFormProps {
  t: (key: string) => string;
  name: string;
  setName: (val: string) => void;
  email: string;
  setEmail: (val: string) => void;
  date: string;
  setDate: (val: string) => void;
  selectedDentist: string;
  setSelectedDentist: (val: string) => void;
  appointments: Appointment[];
  setAppointments: React.Dispatch<React.SetStateAction<Appointment[]>>;
  bookingSuccess: boolean;
  setBookingSuccess: (val: boolean) => void;
  dentists: Dentist[];
}

export const BookingForm: React.FC<BookingFormProps> = ({
  t,
  name,
  setName,
  email,
  setEmail,
  date,
  setDate,
  selectedDentist,
  setSelectedDentist,
  appointments,
  setAppointments,
  bookingSuccess,
  setBookingSuccess,
  dentists,
}) => {

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !date) return;

    const dentist = dentists.find(d => d.id === selectedDentist) || dentists[0];
    const newAppointment: Appointment = {
      id: Date.now().toString(),
      name,
      email,
      date,
      dentistId: dentist.id,
      dentistName: dentist.name,
      time: '10:00 AM', // Default convenient slot
    };

    const updated = [newAppointment, ...appointments];
    setAppointments(updated);
    localStorage.setItem('dentlab_appointments', JSON.stringify(updated));

    setBookingSuccess(true);
    setName('');
    setEmail('');
    setDate('');

    setTimeout(() => {
      setBookingSuccess(false);
    }, 5000);
  };

  const handleCancelAppointment = (id: string) => {
    const updated = appointments.filter(app => app.id !== id);
    setAppointments(updated);
    localStorage.setItem('dentlab_appointments', JSON.stringify(updated));
  };

  return (
    <section id="booking-form-section" className="w-full py-16 bg-[#F4F7FA] border-t border-b border-[#E8ECF0]">
      <div className="max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-16 xl:px-20">
        <div className="bg-white border border-[#E8ECF0]/80 rounded-[24px] p-10 md:p-14 shadow-xl">
          <h2 className="text-[28px] sm:text-[32px] font-black text-[#1C1E26] mb-8 tracking-tight text-left">
            {t('Book an Appointment')}
          </h2>
          
          <form onSubmit={handleBooking} className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
            <div className="md:col-span-3 text-left">
              <label className="block text-[12px] font-extrabold text-[#8A93A6] uppercase tracking-wider mb-2">{t('Your Name')}</label>
              <input 
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. John Doe" 
                className="w-full bg-white border border-[#E0E4EA] text-[#1C1E26] rounded-xl px-5 text-[15px] h-[60px] focus:outline-none focus:ring-4 focus:ring-[#1A6FD4]/10 focus:border-[#1A6FD4] transition-all font-semibold"
                required
              />
            </div>

            <div className="md:col-span-3 text-left">
              <label className="block text-[12px] font-extrabold text-[#8A93A6] uppercase tracking-wider mb-2">{t('Your Email')}</label>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="e.g. jdoe@example.com" 
                className="w-full bg-white border border-[#E0E4EA] text-[#1C1E26] rounded-xl px-5 text-[15px] h-[60px] focus:outline-none focus:ring-4 focus:ring-[#1A6FD4]/10 focus:border-[#1A6FD4] transition-all font-semibold"
                required
              />
            </div>

            <div className="md:col-span-3 text-left">
              <label className="block text-[12px] font-extrabold text-[#8A93A6] uppercase tracking-wider mb-2">{t('Date of Appointment')}</label>
              <div className="relative">
                <input 
                  type="date" 
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full bg-white border border-[#E0E4EA] text-[#1C1E26] rounded-xl px-5 pr-12 text-[15px] h-[60px] focus:outline-none focus:ring-4 focus:ring-[#1A6FD4]/10 focus:border-[#1A6FD4] transition-all cursor-pointer font-semibold"
                  required
                />
                <Calendar className="w-5 h-5 text-[#8A93A6] absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            <div className="md:col-span-3">
              <button 
                type="submit" 
                className="w-full bg-[#1A6FD4] hover:bg-[#1559ab] text-white rounded-xl text-[15px] font-black h-[60px] transition-all shadow-lg shadow-[#1A6FD4]/20 active:scale-98 flex items-center justify-center gap-2.5 cursor-pointer"
                id="book-now-submit-btn"
              >
                <Calendar className="w-5 h-5" />
                {t('Book Now')}
              </button>
            </div>
          </form>

          {/* Success state */}
          <AnimatePresence>
            {bookingSuccess && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="mt-8 bg-emerald-50 border border-emerald-200 rounded-2xl p-6 flex items-start gap-4 text-left"
              >
                <CheckCircle2 className="w-7 h-7 text-[#10B981] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-[16px] font-black text-emerald-900">{t('Appointment Scheduled Successfully!')}</h4>
                  <p className="text-[14.5px] text-emerald-700/90 mt-1.5">{t('We have locked in your slot with Dentlab Clinic. A confirmation email has been dispatched.')}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Dynamic scheduled appointments list */}
          {appointments.length > 0 && (
            <div className="mt-10 border-t border-[#E8ECF0] pt-8 text-left">
              <div className="flex justify-between items-center mb-5">
                <h3 className="text-[16px] font-black text-[#1C1E26] flex items-center gap-2.5">
                  <User className="w-5 h-5 text-[#1A6FD4]" />
                  {t('Your Scheduled Consultations')}
                </h3>
                <button 
                  onClick={() => {
                    setAppointments([]);
                    localStorage.removeItem('dentlab_appointments');
                  }}
                  className="text-[13.5px] text-[#8A93A6] hover:text-[#E05252] font-black transition-colors cursor-pointer"
                >
                  {t('Clear All')}
                </button>
              </div>

              <div className="space-y-4 max-h-[300px] overflow-y-auto pr-2">
                {appointments.map((app) => (
                  <div key={app.id} className="flex justify-between items-center text-[14px] bg-[#F4F6F9] border border-[#E8ECF0] rounded-xl p-5 shadow-xs">
                    <div>
                      <div className="font-extrabold text-[#1C1E26] text-[15px]">{app.name} <span className="font-medium text-[#8A93A6]">({app.email})</span></div>
                      <div className="text-[13px] text-[#8A93A6] mt-2 flex items-center gap-5">
                        <span className="flex items-center gap-1.5 font-semibold"><Calendar className="w-4 h-4 text-[#1A6FD4]" /> {app.date}</span>
                        <span className="flex items-center gap-1.5 font-semibold"><Clock className="w-4 h-4 text-[#1A6FD4]" /> {app.time}</span>
                      </div>
                    </div>
                    <button 
                      onClick={() => handleCancelAppointment(app.id)}
                      className="p-2 text-[#8A93A6] hover:text-[#E05252] rounded-full hover:bg-gray-200/80 transition-colors cursor-pointer"
                      title={t('Cancel Appointment')}
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
