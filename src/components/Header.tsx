import React, { useState } from 'react';
import { Phone, Menu, X, ArrowRight, ShieldCheck, Clock, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../data/siteData';

interface HeaderProps {
  onOpenQuote: (service?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenQuote }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top micro bar for direct contact & hours */}
      <div className="bg-[#0B0C0F] text-slate-300 text-xs border-b border-white/10 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-[#E6007A]" />
              {BUSINESS_INFO.addressShort}
            </span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-[#E6007A]" />
              {BUSINESS_INFO.hours.weekdays}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={BUSINESS_INFO.gbpLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-white flex items-center gap-1 transition-colors"
            >
              <span className="text-amber-400 font-bold">★ 5.0</span> (518 Google Reviews)
            </a>
            <span className="text-slate-600">|</span>
            <a
              href={`tel:${BUSINESS_INFO.phoneTel}`}
              className="text-[#E6007A] font-semibold hover:underline flex items-center gap-1"
            >
              <Phone className="w-3 h-3" />
              {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main sticky navigation */}
      <header className="sticky top-0 z-50 bg-[#111217] text-white shadow-md border-b border-white/5 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo & Brand */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('home');
              }}
              className="flex items-center gap-3 group"
            >
              <img
                src={BUSINESS_INFO.logo}
                alt={BUSINESS_INFO.name}
                className="w-11 h-11 rounded-full object-cover border-2 border-[#E6007A] shadow-md group-hover:scale-105 transition-transform"
              />
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl font-black tracking-wider uppercase font-heading text-white group-hover:text-[#E6007A] transition-colors leading-tight">
                  WRAPIDO
                </span>
                <span className="text-[10px] tracking-widest text-[#E6007A] font-bold uppercase">
                  CAR CARE DUBAI
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links matching screenshot */}
            <nav className="hidden lg:flex items-center gap-8 text-xs font-bold uppercase tracking-wider">
              <button
                onClick={() => scrollTo('home')}
                className="hover:text-[#E6007A] transition-colors cursor-pointer"
              >
                HOME
              </button>
              <button
                onClick={() => scrollTo('about')}
                className="hover:text-[#E6007A] transition-colors cursor-pointer"
              >
                ABOUT US
              </button>
              <button
                onClick={() => scrollTo('services')}
                className="hover:text-[#E6007A] transition-colors cursor-pointer"
              >
                SERVICES
              </button>
              <button
                onClick={() => scrollTo('reviews')}
                className="hover:text-[#E6007A] transition-colors cursor-pointer"
              >
                REVIEWS
              </button>
              <button
                onClick={() => scrollTo('portfolio')}
                className="hover:text-[#E6007A] transition-colors cursor-pointer"
              >
                OUR WORK
              </button>
              <button
                onClick={() => scrollTo('faq')}
                className="hover:text-[#E6007A] transition-colors cursor-pointer"
              >
                FAQS
              </button>
              <button
                onClick={() => scrollTo('contact')}
                className="hover:text-[#E6007A] transition-colors cursor-pointer"
              >
                CONTACT US
              </button>
            </nav>

            {/* CTA Button matching screenshot hot pink button */}
            <div className="hidden sm:flex items-center gap-4">
              <button
                onClick={() => onOpenQuote()}
                className="bg-[#E6007A] hover:bg-[#c70068] text-white text-xs font-black uppercase tracking-wider px-6 py-3.5 transition-all shadow-lg hover:shadow-[#E6007A]/30 cursor-pointer flex items-center gap-2 active:scale-95"
              >
                <span>START YOUR QUOTE</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Mobile menu trigger */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={() => onOpenQuote()}
                className="bg-[#E6007A] text-white text-[11px] font-black uppercase tracking-wider px-3.5 py-2.5 rounded-none"
              >
                QUOTE
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-white hover:text-[#E6007A] focus:outline-none"
                aria-label="Toggle Navigation"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0D0E12] border-t border-white/10 px-4 pt-3 pb-6 space-y-3">
            <button
              onClick={() => scrollTo('home')}
              className="block w-full text-left py-2 text-sm font-bold uppercase tracking-wider text-white hover:text-[#E6007A]"
            >
              HOME
            </button>
            <button
              onClick={() => scrollTo('about')}
              className="block w-full text-left py-2 text-sm font-bold uppercase tracking-wider text-white hover:text-[#E6007A]"
            >
              ABOUT US
            </button>
            <button
              onClick={() => scrollTo('services')}
              className="block w-full text-left py-2 text-sm font-bold uppercase tracking-wider text-white hover:text-[#E6007A]"
            >
              SERVICES
            </button>
            <button
              onClick={() => scrollTo('why-us')}
              className="block w-full text-left py-2 text-sm font-bold uppercase tracking-wider text-white hover:text-[#E6007A]"
            >
              WHY CHOOSE US
            </button>
            <button
              onClick={() => scrollTo('reviews')}
              className="block w-full text-left py-2 text-sm font-bold uppercase tracking-wider text-white hover:text-[#E6007A]"
            >
              REVIEWS (5.0 ★)
            </button>
            <button
              onClick={() => scrollTo('portfolio')}
              className="block w-full text-left py-2 text-sm font-bold uppercase tracking-wider text-white hover:text-[#E6007A]"
            >
              OUR WORK / VIDEOS
            </button>
            <button
              onClick={() => scrollTo('faq')}
              className="block w-full text-left py-2 text-sm font-bold uppercase tracking-wider text-white hover:text-[#E6007A]"
            >
              FAQS
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="block w-full text-left py-2 text-sm font-bold uppercase tracking-wider text-white hover:text-[#E6007A]"
            >
              CONTACT US
            </button>
            <div className="pt-2 border-t border-white/10 flex flex-col gap-2">
              <a
                href={`tel:${BUSINESS_INFO.phoneTel}`}
                className="flex items-center justify-center gap-2 bg-white/10 text-white font-bold py-3 text-xs tracking-wider uppercase"
              >
                <Phone className="w-4 h-4 text-[#E6007A]" />
                CALL: {BUSINESS_INFO.phone}
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="w-full bg-[#E6007A] text-white font-black py-3 text-xs tracking-wider uppercase"
              >
                START YOUR QUOTE
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
