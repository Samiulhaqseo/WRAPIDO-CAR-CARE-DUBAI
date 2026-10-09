import React from 'react';
import { WHY_CHOOSE_US, BUSINESS_INFO } from '../data/siteData';

export const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-us" className="py-24 bg-[#F8F9FA] text-slate-900 border-t border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Block matching screenshot */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="text-[#E6007A] font-black text-xs sm:text-sm tracking-[0.2em] uppercase select-none font-heading">
            ///////// WHY CHOOSE US /////////
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight font-heading text-slate-950">
            WE ARE {BUSINESS_INFO.name.toUpperCase()}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            When it comes to preserving the value of your vehicle, it's all in the details. At Wrapido Car Care, we blend certified craftsmanship with cutting-edge technology.
          </p>
        </div>

        {/* 4 Cards Grid matching screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_US.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-7 border border-slate-200 shadow-sm hover:shadow-md transition-shadow relative flex flex-col justify-start"
            >
              {/* Pink Number Indicator */}
              <div className="text-[#E6007A] font-black text-xl sm:text-2xl font-heading mb-3">
                {item.number}
              </div>

              {/* Card Title */}
              <h3 className="text-sm sm:text-base font-black uppercase tracking-tight font-heading text-slate-950 mb-4 leading-snug">
                {item.title}
              </h3>

              {/* Card Description */}
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
