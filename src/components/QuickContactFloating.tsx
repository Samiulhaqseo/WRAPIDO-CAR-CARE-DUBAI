import React, { useState } from 'react';
import { Phone, MessageCircle, X } from 'lucide-react';
import { BUSINESS_INFO } from '../data/siteData';

export const QuickContactFloating: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
      {isOpen && (
        <div className="bg-[#111217] text-white p-4 shadow-2xl border border-white/20 max-w-xs space-y-3 mb-1 animate-in fade-in slide-in-from-bottom-2 duration-200">
          <div className="flex items-center justify-between pb-2 border-b border-white/10">
            <span className="text-xs font-black uppercase tracking-wider text-white font-heading">
              {BUSINESS_INFO.name}
            </span>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <p className="text-[11px] text-slate-300 leading-snug">
            Need an instant price in AED or have questions about PPF, Wrapping &amp; Tinting? Chat directly with Dario:
          </p>
          <div className="flex flex-col gap-2">
            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold py-2 px-3 flex items-center justify-center gap-2 transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp Us Now</span>
            </a>
            <a
              href={`tel:${BUSINESS_INFO.phoneTel}`}
              className="bg-[#E6007A] hover:bg-[#c70068] text-white text-xs font-bold py-2 px-3 flex items-center justify-center gap-2 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 fill-current" />
              <span>Call {BUSINESS_INFO.phone}</span>
            </a>
          </div>
        </div>
      )}

      {/* Main floating trigger button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[#E6007A] hover:bg-[#c70068] text-white p-3.5 rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-105 active:scale-95 cursor-pointer border-2 border-white/20"
        aria-label="Quick Contact"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>
    </div>
  );
};
