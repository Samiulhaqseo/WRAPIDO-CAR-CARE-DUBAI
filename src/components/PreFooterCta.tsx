import React from 'react';
import { Phone, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/siteData';

interface PreFooterCtaProps {
  onOpenQuote: () => void;
}

export const PreFooterCta: React.FC<PreFooterCtaProps> = ({ onOpenQuote }) => {
  return (
    <section className="py-20 bg-[#0E1015] text-white text-center border-t border-white/10 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 relative z-10">
        <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight font-heading text-white">
          PROTECT YOUR INVESTMENT WITH DUBAI'S BEST
        </h2>

        <p className="text-slate-300 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
          Visit our clean-room studio at {BUSINESS_INFO.address}, or request a free personalized quote online. Dario and our certified technicians are standing by to assist with tailored recommendations.
        </p>

        {/* Dual CTA buttons matching screenshot */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={`tel:${BUSINESS_INFO.phoneTel}`}
            className="w-full sm:w-auto bg-[#1C1E26] hover:bg-[#252834] text-white text-xs font-bold px-7 py-3.5 border border-white/15 flex items-center justify-center gap-2 transition-all active:scale-95"
          >
            <Phone className="w-3.5 h-3.5 text-[#E6007A]" />
            <span>{BUSINESS_INFO.phoneFormatted}</span>
          </a>

          <button
            onClick={onOpenQuote}
            className="w-full sm:w-auto bg-[#E6007A] hover:bg-[#c70068] text-white text-xs font-black uppercase tracking-widest px-8 py-3.5 flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-[#E6007A]/40 active:scale-95 cursor-pointer"
          >
            <span>GET A FREE QUOTE</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
