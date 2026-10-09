import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQS } from '../data/siteData';

export const FaqSection: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<string | null>('faq-1');

  const toggleFaq = (id: string) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 bg-[#F8F9FA] text-slate-900 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header Block matching screenshot */}
        <div className="text-center space-y-3">
          <div className="flex items-center justify-center gap-2">
            <span className="w-1.5 h-6 bg-[#E6007A]" />
            <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight font-heading text-slate-950">
              FREQUENTLY ASKED QUESTIONS
            </h2>
          </div>
          <p className="text-slate-600 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            Have questions about auto window tinting, ceramic coatings, paint protection film, or vehicle wrapping? Find clear, expert answers below.
          </p>
          <div className="text-[#E6007A] font-black tracking-widest text-base select-none">
            /////////////////////////////////
          </div>
        </div>

        {/* Accordion List matching screenshot */}
        <div className="space-y-3 pt-2">
          {FAQS.map((faq, idx) => {
            const isOpen = openFaq === faq.id;
            const itemNumber = (idx + 1).toString().padStart(2, '0');

            return (
              <div
                key={faq.id}
                className="bg-white border border-slate-200 transition-colors overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-xs sm:text-sm font-bold text-[#E6007A] font-heading shrink-0">
                      {itemNumber}
                    </span>
                    <span className="text-xs sm:text-sm md:text-base font-black uppercase tracking-tight font-heading text-slate-900 leading-snug">
                      {faq.question}
                    </span>
                  </div>
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-[#E6007A] transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#E6007A]/10' : 'bg-slate-100'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 bg-white">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
