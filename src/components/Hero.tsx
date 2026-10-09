import React from 'react';
import { ArrowRight, ShieldCheck, Sparkles, Award } from 'lucide-react';
import { BUSINESS_INFO } from '../data/siteData';

interface HeroProps {
  onOpenQuote: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuote, onExploreServices }) => {
  return (
    <section
      id="home"
      className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center bg-[#0B0C0F] text-white overflow-hidden"
    >
      {/* Background with luxury black sports car reflection & dark atmospheric overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://lh3.googleusercontent.com/gps-cs-s/ANWiy9S9d26YcG6X8V-9QGncZGeF80RPN17wz8kwC-I4-xWRzHqIElWXcP08jFDdGsqf2LeypHZEDJzPC1289Ovtu9nnNEa-RvxxaSobvhFt3a16wOzWkBcCFOnYSiskQwAuUHUnnwvR=s680-w680-h510-rw"
          alt="Luxury car paint protection in Dubai"
          className="w-full h-full object-cover object-center opacity-30 filter brightness-75 scale-105"
        />
        {/* Gradients to match the screenshot dark vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C0F] via-[#0B0C0F]/80 to-[#0B0C0F]/90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0B0C0F_85%)]" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center flex flex-col items-center">
        {/* Top Tagline matching screenshot */}
        <div className="inline-block mb-4">
          <span className="text-[#E6007A] font-black text-xs sm:text-sm tracking-[0.25em] uppercase font-heading">
            PROTECT YOUR INVESTMENT
          </span>
        </div>

        {/* Big Bold Headline matching screenshot */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight font-heading text-white max-w-4xl leading-[1.08] mb-6 drop-shadow-md">
          DUBAI'S LEADING PAINT PROTECTION &amp; WINDOW TINTING SHOP
        </h1>

        {/* Narrative Subtext matching screenshot */}
        <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-3xl leading-relaxed mb-10 font-normal">
          As Dubai's vehicle protection leaders, we're renowned in the UAE for our exceptional workmanship, attention to detail &amp; exceptional customer service! Our specialties lie in Ceramic Auto Tint, Car Ceramic Coatings, Meticulous Car Detailing, and Paint Protection Film Wraps.
        </p>

        {/* Dual CTA Buttons matching screenshot */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <button
            onClick={onOpenQuote}
            className="w-full sm:w-auto bg-[#E6007A] hover:bg-[#c70068] text-white text-xs sm:text-sm font-black uppercase tracking-widest px-8 py-4 transition-all shadow-xl hover:shadow-[#E6007A]/40 flex items-center justify-center gap-2 cursor-pointer active:scale-95"
          >
            <span>START YOUR QUOTE</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={onExploreServices}
            className="w-full sm:w-auto bg-[#111217] hover:bg-black text-white border border-white/20 text-xs sm:text-sm font-black uppercase tracking-widest px-8 py-4 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
          >
            <span>VIEW OUR SERVICES</span>
          </button>
        </div>

        {/* Trust Badges matching screenshot reputation */}
        <div className="mt-14 pt-8 border-t border-white/10 w-full max-w-3xl grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div className="flex flex-col items-center">
            <span className="text-amber-400 font-black text-lg">5.0 ★★★★★</span>
            <span className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">518 Google Reviews</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-white font-black text-lg">10-YEAR</span>
            <span className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">PPF Warranty</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-[#E6007A] font-black text-lg">98% IR</span>
            <span className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">Heat Rejection</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-white font-black text-lg">AL QUOZ 3</span>
            <span className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">Clean-Bay Studio</span>
          </div>
        </div>
      </div>
    </section>
  );
};
