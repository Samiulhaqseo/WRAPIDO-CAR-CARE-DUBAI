import React from 'react';
import { ArrowRight, Check } from 'lucide-react';

interface AboutSectionProps {
  onOpenQuote: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenQuote }) => {
  const highlights = [
    'Satisfaction Guaranteed',
    'Professional Products',
    'Licensed & Insured',
    'Proven Trackrecord',
  ];

  return (
    <section id="about" className="py-20 bg-white text-slate-900 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading, description, and diagonal pink stripes */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-6 bg-[#E6007A]" />
              <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight font-heading text-slate-950">
                ABOUT US
              </h2>
            </div>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl">
              Wrapido Car Care is Dubai's go-to window tinting, paint protection &amp; vinyl wrapping studio in Al Quoz. Our team brings years of certified automotive detailing &amp; window tinting experience and is always eager to exceed your expectations with uncompromising precision.
            </p>

            {/* Slanted pink hatch accent matching screenshot */}
            <div className="text-[#E6007A] font-black tracking-widest text-lg select-none">
              /////////////////////////////////
            </div>
          </div>

          {/* Right Column: Key Guarantees & CTA Button */}
          <div className="lg:col-span-5 space-y-8 lg:pl-6">
            <div className="space-y-4">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#E6007A]/10 text-[#E6007A] flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-sm sm:text-base font-bold text-slate-800 tracking-wide">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div>
              <button
                onClick={onOpenQuote}
                className="bg-[#E6007A] hover:bg-[#c70068] text-white text-xs sm:text-sm font-black uppercase tracking-wider px-7 py-4 transition-all shadow-md hover:shadow-[#E6007A]/30 flex items-center gap-2 cursor-pointer active:scale-95"
              >
                <span>START YOUR FREE QUOTE</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
