'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp } from 'lucide-react';

// Data and translation helpers
import { dentists, services, officePhotos } from '@/lib/data';
import { translate } from '@/lib/translations';
import { Appointment, Dentist } from '@/lib/types';

// Structured UI components
import { TopBar } from '@/components/TopBar';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { BookingForm } from '@/components/BookingForm';
import { TrustCards } from '@/components/TrustCards';
import { ClinicIntro } from '@/components/ClinicIntro';
import { Services } from '@/components/Services';
import { Doctors } from '@/components/Doctors';
import { OfficePhotos } from '@/components/OfficePhotos';
import { PatientForms } from '@/components/PatientForms';
import { Testimonials } from '@/components/Testimonials';
import { RecentBlog } from '@/components/RecentBlog';
import { Footer } from '@/components/Footer';

// Dialog / Overlay components
import { ClinicPhotoLightbox } from '@/components/ClinicPhotoLightbox';
import { DentistDetailModal } from '@/components/DentistDetailModal';
import { SendMessageModal } from '@/components/SendMessageModal';
import { MobileMenu } from '@/components/MobileMenu';
import { OnDutyCard } from '@/components/OnDutyCard';

export default function DentlabLandingPage() {
  // Appointment / booking states
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [selectedDentist, setSelectedDentist] = useState('dentist-yousef');
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [bookingSuccess, setBookingSuccess] = useState(false);

  // Layout states
  const [currentLanguage, setCurrentLanguage] = useState('English');
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Overlay element states
  const [selectedDentistDetail, setSelectedDentistDetail] = useState<Dentist | null>(null);
  const [selectedGalleryImg, setSelectedGalleryImg] = useState<string | null>(null);
  const [messageOpen, setMessageOpen] = useState(false);
  const [messageForm, setMessageForm] = useState({ dentistId: 'dentist-yousef', text: '' });
  const [onDutyCardOpen, setOnDutyCardOpen] = useState(true);

  // Translation helper wrapper
  const t = (key: string): string => {
    return translate(key, currentLanguage);
  };

  // Hydrate persistent scheduled consultations on arrival
  useEffect(() => {
    const saved = localStorage.getItem('dentlab_appointments');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        requestAnimationFrame(() => {
          setAppointments(parsed);
        });
      } catch (err) {
        console.error(err);
      }
    }
  }, []);

  // Window scroll hook for back-to-top and active sections highlights
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: 'home', el: document.getElementById('hero-section') },
        { id: 'services', el: document.getElementById('services-section') },
        { id: 'doctors', el: document.getElementById('doctors-section') },
        { id: 'gallery', el: document.getElementById('gallery-section') },
        { id: 'forms', el: document.getElementById('forms-section') },
        { id: 'blog', el: document.getElementById('blog-section') }
      ];

      const scrollPosition = window.scrollY + 200;

      let currentSection = 'home';
      for (const section of sections) {
        if (section.el) {
          const top = section.el.offsetTop;
          const height = section.el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            currentSection = section.id;
            break;
          }
        }
      }
      setActiveSection(currentSection);

      if (window.scrollY > 350) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Standard smooth page layout reset
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <main dir={currentLanguage === 'Arabic' ? 'rtl' : 'ltr'} className="min-h-screen flex flex-col bg-white">
      
      {/* Top Contact & Language Bar */}
      <TopBar 
        currentLanguage={currentLanguage}
        setCurrentLanguage={setCurrentLanguage}
        langDropdownOpen={langDropdownOpen}
        setLangDropdownOpen={setLangDropdownOpen}
      />

      {/* Primary Sticky Navbar */}
      <Navbar 
        t={t}
        activeSection={activeSection}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />

      {/* Main Core Hero Spot */}
      <Hero t={t} />

      {/* Wide Appointment Online Scheduler */}
      <BookingForm 
        t={t}
        name={name}
        setName={setName}
        email={email}
        setEmail={setEmail}
        date={date}
        setDate={setDate}
        selectedDentist={selectedDentist}
        setSelectedDentist={setSelectedDentist}
        appointments={appointments}
        setAppointments={setAppointments}
        bookingSuccess={bookingSuccess}
        setBookingSuccess={setBookingSuccess}
        dentists={dentists}
      />

      {/* Features Row */}
      <TrustCards t={t} />

      {/* Clinic Legacy & Hours Section */}
      <ClinicIntro t={t} />

      {/* Carousel & Responsive Treatments Display */}
      <Services 
        t={t}
        services={services}
      />

      {/* Doctors Profiles Showcase */}
      <Doctors 
        t={t}
        dentists={dentists}
        setSelectedDentistDetail={setSelectedDentistDetail}
      />

      {/* Modern Virtual Office Tour Gallery */}
      <OfficePhotos 
        t={t}
        officePhotos={officePhotos}
        setSelectedGalleryImg={setSelectedGalleryImg}
      />

      {/* Downloadable PDF Patient Forms */}
      <PatientForms t={t} />

      {/* Verified Guest Feedbacks */}
      <Testimonials t={t} />

      {/* Recent Smart Clinical Articles */}
      <RecentBlog t={t} />

      {/* Comprehensive Footer Area */}
      <Footer t={t} />

      {/* Portal/Overlay/Modals components */}
      <ClinicPhotoLightbox 
        selectedGalleryImg={selectedGalleryImg}
        setSelectedGalleryImg={setSelectedGalleryImg}
      />

      <DentistDetailModal 
        t={t}
        selectedDentistDetail={selectedDentistDetail}
        setSelectedDentistDetail={setSelectedDentistDetail}
        setSelectedDentist={setSelectedDentist}
        setMessageForm={setMessageForm}
        setMessageOpen={setMessageOpen}
      />

      <SendMessageModal 
        t={t}
        dentists={dentists}
        messageOpen={messageOpen}
        setMessageOpen={setMessageOpen}
        messageForm={messageForm}
        setMessageForm={setMessageForm}
      />

      <MobileMenu 
        t={t}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        activeSection={activeSection}
        currentLanguage={currentLanguage}
        setCurrentLanguage={setCurrentLanguage}
      />

      <OnDutyCard 
        t={t}
        onDutyCardOpen={onDutyCardOpen}
        setOnDutyCardOpen={setOnDutyCardOpen}
        setMessageForm={setMessageForm}
        setMessageOpen={setMessageOpen}
      />

      {/* Floating back-to-top layout reset key */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            key="back-to-top"
            initial={{ opacity: 0, scale: 0.6, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.6, y: 20 }}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            title={t('Back to Top')}
            aria-label={t('Back to Top')}
            className="fixed bottom-6 left-6 z-50 p-4 rounded-full bg-white text-[#1A6FD4] border-2 border-[#1A6FD4]/10 shadow-[0_10px_30px_rgba(0,0,0,0.15)] hover:bg-[#1A6FD4] hover:text-white hover:border-[#1A6FD4] transition-colors cursor-pointer flex items-center justify-center focus:outline-none"
            id="back-to-top-btn"
          >
            <ArrowUp className="w-5 h-5 font-bold" />
          </motion.button>
        )}
      </AnimatePresence>

    </main>
  );
}
