import React from 'react';
import { Phone, MapPin, Clock, Instagram, Facebook, ArrowRight, ExternalLink } from 'lucide-react';
import { BUSINESS_INFO, SERVICES, DUBAI_SERVICE_AREAS } from '../data/siteData';

interface FooterProps {
  onOpenQuote: (serviceTitle?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenQuote }) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-white text-slate-800 text-xs border-t border-slate-200">
      {/* 4 Columns Main Grid matching screenshot */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={BUSINESS_INFO.logo}
                alt={BUSINESS_INFO.name}
                className="w-10 h-10 rounded-full object-cover border border-[#E6007A]"
              />
              <div>
                <span className="text-base font-black tracking-wider uppercase font-heading text-slate-950 block">
                  {BUSINESS_INFO.name}
                </span>
                <span className="text-[10px] text-[#E6007A] font-bold uppercase tracking-widest block">
                  DUBAI AUTO STUDIO
                </span>
              </div>
            </div>

            <p className="text-slate-500 text-xs leading-relaxed max-w-sm">
              As a certified automotive protection studio in Al Quoz, Dubai, we bring elite craftsmanship in Ceramic Coatings, Paint Protection Film (PPF), Nano-Ceramic Window Tinting, Luxury Vinyl Wrapping &amp; Detailing to the UAE.
            </p>

            <div className="pt-2 text-[11px] text-slate-400 space-y-1">
              <p>COPYRIGHT © 2026 {BUSINESS_INFO.name.toUpperCase()} LLC</p>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => alert('Wrapido Car Care strictly protects customer vehicle records and contact data.')}
                  className="hover:text-slate-900 transition-colors uppercase font-bold"
                >
                  PRIVACY POLICY
                </button>
                <span>·</span>
                <button
                  onClick={() => alert('All warranties subject to official manufacturer terms and regular inspection.')}
                  className="hover:text-slate-900 transition-colors uppercase font-bold"
                >
                  TERMS OF SERVICE
                </button>
              </div>
            </div>

            {/* Social Icons matching screenshot */}
            <div className="pt-2 space-y-2">
              <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 block font-heading">
                FOLLOW US
              </span>
              <div className="flex items-center gap-3 text-slate-700">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-700 hover:text-[#E6007A] hover:bg-[#E6007A]/10 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-700 hover:text-[#E6007A] hover:bg-[#E6007A]/10 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href={BUSINESS_INFO.gbpLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-700 hover:text-[#E6007A] hover:bg-[#E6007A]/10 transition-colors"
                  aria-label="Google Business Profile"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: OUR SERVICES matching screenshot */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs font-black uppercase tracking-wider text-slate-950 block font-heading">
              OUR SERVICES
            </span>
            <ul className="space-y-2 text-slate-600 font-bold text-[11px] uppercase tracking-wider">
              {SERVICES.map((srv) => (
                <li key={srv.id}>
                  <button
                    onClick={() => onOpenQuote(srv.title)}
                    className="hover:text-[#E6007A] transition-colors text-left flex items-center gap-1.5 cursor-pointer"
                  >
                    <span className="text-[#E6007A]">•</span>
                    <span>{srv.title}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: SERVICE AREAS matching screenshot */}
          <div className="lg:col-span-2 space-y-3">
            <span className="text-xs font-black uppercase tracking-wider text-slate-950 block font-heading">
              SERVICE AREAS
            </span>
            <ul className="space-y-2 text-slate-600 font-semibold text-[11px] uppercase tracking-wider">
              {DUBAI_SERVICE_AREAS.slice(0, 7).map((area, i) => (
                <li key={i} className="flex items-center gap-1.5">
                  <span className="text-[#E6007A]">•</span>
                  <span>{area.replace(' (MAIN STUDIO)', '')}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: GET FREE ESTIMATE matching screenshot */}
          <div className="lg:col-span-3 space-y-4">
            <span className="text-xs font-black uppercase tracking-wider text-slate-950 block font-heading">
              GET FREE ESTIMATE
            </span>

            <div className="space-y-2.5 text-slate-600 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#E6007A] shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.address}</span>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#E6007A] shrink-0" />
                <a
                  href={`tel:${BUSINESS_INFO.phoneTel}`}
                  className="font-bold text-slate-900 hover:text-[#E6007A]"
                >
                  {BUSINESS_INFO.phone}
                </a>
              </div>

              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-[#E6007A] shrink-0 mt-0.5" />
                <div>
                  <p>{BUSINESS_INFO.hours.weekdays}</p>
                  <p className="text-slate-500">{BUSINESS_INFO.hours.weekend}</p>
                </div>
              </div>
            </div>

            <div>
              <button
                onClick={() => onOpenQuote()}
                className="w-full bg-[#E6007A] hover:bg-[#c70068] text-white text-[11px] font-black uppercase tracking-widest py-3 px-4 flex items-center justify-center gap-2 transition-all shadow-md active:scale-95 cursor-pointer"
              >
                <span>START YOUR QUOTE</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar matching screenshot */}
      <div className="bg-[#0B0C0E] text-slate-400 py-3 px-4 sm:px-6 border-t border-slate-900 text-[10px] uppercase font-bold tracking-wider">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-slate-300">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Facility Open &amp; Accepting Appointments: Al Quoz Clean Bay 1 &amp; 2</span>
          </div>

          <div className="flex items-center gap-4 text-slate-500">
            <span className="text-slate-400">CERTIFIED SHOP</span>
            <span>·</span>
            <span className="text-slate-400">FEYNLAB® &amp; XPEL AUTHORIZED</span>
            <span>·</span>
            <span className="text-slate-400">LLUMAR &amp; 3M TINT</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
