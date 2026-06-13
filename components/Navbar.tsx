import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { Menu } from "lucide-react";
import logoImage from "@/src/assets/images/saddle_brook_logo_1781369990000.jpg";
import IconImage from "@/src/assets/images/icon.png";

interface NavbarProps {
  activeSection: string;
  t: (key: string) => string;
  setIsMobileMenuOpen: (isOpen: boolean) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  t,
  setIsMobileMenuOpen,
}) => {
  return (
    <nav
      id="main-navigation"
      className="w-full bg-white px-4 sm:px-8 lg:px-16 xl:px-20 py-4 border-b border-[#F0F2F5] sticky top-0 z-40 shadow-sm transition-all duration-200"
    >
      <div className="max-w-[1720px] mx-auto flex justify-between items-center animate-fade-in">
        <div className="flex items-center gap-2.5 sm:gap-3">
          <a
            href="#"
            className="relative h-10 w-[140px] sm:h-12 sm:w-[170px] md:h-14 md:w-[190px] block hover:opacity-90 transition-opacity"
          >
            <Image
              src={IconImage}
              alt="Saddle Brook Dentist Logo"
              fill
              sizes="(max-width: 640px) 140px, (max-width: 768px) 170px, 190px"
              className="object-contain"
              priority
            />
          </a>
        </div>

        <div className="flex items-center gap-2.5 sm:gap-6 lg:gap-10">
          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-8">
            {[
              { id: "home", label: "Home", href: "#" },
              { id: "services", label: "Services", href: "#services-section" },
              {
                id: "doctors",
                label: "Our Doctors & Staff",
                href: "#doctors-section",
              },
              {
                id: "gallery",
                label: "Office Photos",
                href: "#gallery-section",
              },
              {
                id: "forms",
                label: "Patient lounge & Forms",
                href: "#forms-section",
              },
              { id: "blog", label: "Recent Blog", href: "#blog-section" },
            ].map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  className={`text-[15px] transition-all relative py-1.5 ${isActive ? "font-bold text-[#1A6FD4]" : "font-semibold text-[#1C1E26] hover:text-[#1A6FD4]"}`}
                >
                  {t(item.label)}
                  {isActive && (
                    <motion.span
                      layoutId="nav-dot"
                      className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-2 h-2 bg-[#1A6FD4] rounded-full"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* Book Appointment CTA Button */}
          <a
            href="#booking-form-section"
            className="bg-[#1A6FD4] text-white hover:bg-[#1559ab] px-3.5 py-2 sm:px-6 sm:py-3 rounded-full text-[12px] sm:text-[14px] font-extrabold transition-all shadow-md shadow-[#1A6FD4]/10 transform active:scale-95 inline-flex items-center justify-center text-center leading-none flex-shrink-0"
          >
            {t("Book Appointment")}
          </a>

          {/* Mobile Menu Hamburger Button */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="inline-flex lg:hidden p-2 rounded-xl text-[#1C1E26] hover:bg-gray-100 transition-colors active:scale-90"
            aria-label="Open navigation menu"
            title="Menu"
          >
            <Menu className="w-[22px] h-[22px] stroke-[2.2]" />
          </button>
        </div>
      </div>
    </nav>
  );
};
