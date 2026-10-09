import React from 'react';
import { ArrowRight } from 'lucide-react';
import { FEATURED_SHOWCASES, BUSINESS_INFO } from '../data/siteData';

interface FeaturedShowcaseProps {
  onOpenQuote: (serviceTitle?: string) => void;
}

export const FeaturedShowcase: React.FC<FeaturedShowcaseProps> = ({ onOpenQuote }) => {
  return (
    <section className="py-24 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Top Header Block matching screenshot */}
        <div className="text-center max-w-3xl mx-auto space-y-5">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight font-heading text-slate-950">
            PROTECT YOUR INVESTMENT
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            The goal at {BUSINESS_INFO.name} has always been to go above and beyond for all customers in Dubai and surrounding areas. Founded by a passionate team of paint protection and vehicle wrapping experts, {BUSINESS_INFO.name} is Dubai's premier automotive detailing shop, servicing everything from daily drivers to exotic collections.
          </p>
          <div>
            <button
              onClick={() => onOpenQuote()}
              className="bg-[#E6007A] hover:bg-[#c70068] text-white text-xs sm:text-sm font-black uppercase tracking-wider px-8 py-3.5 transition-all shadow-md inline-flex items-center gap-2 cursor-pointer active:scale-95"
            >
              <span>START YOUR QUOTE</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 3 Showcase Image Cards matching screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6">
          {FEATURED_SHOWCASES.map((item) => (
            <div
              key={item.id}
              onClick={() => onOpenQuote(item.title)}
              className="group cursor-pointer flex flex-col"
            >
              {/* Image with top badge */}
              <div className="relative overflow-hidden aspect-[4/3] bg-slate-950 mb-4 border border-slate-200">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                <div className="absolute top-3 left-3 bg-[#111217] text-white text-[11px] font-black uppercase tracking-wider px-3 py-1 border border-white/20">
                  {item.badge}
                </div>
              </div>

              {/* Title with hot pink underline accent */}
              <div className="text-center pt-2">
                <span className="text-xs sm:text-sm font-black uppercase tracking-tight font-heading text-slate-900 group-hover:text-[#E6007A] transition-colors">
                  {item.linkText}
                </span>
                <div className="w-12 h-0.5 bg-[#E6007A] mx-auto mt-2 group-hover:w-20 transition-all duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
