import React from 'react';
import { Phone, ArrowRight, CheckCircle2 } from 'lucide-react';
import { SERVICES, ServiceItem, BUSINESS_INFO } from '../data/siteData';

interface ServicesSectionProps {
  onLearnMore: (service: ServiceItem) => void;
  onOpenQuote: (serviceTitle?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onLearnMore,
  onOpenQuote,
}) => {
  return (
    <section id="services" className="py-20 bg-white text-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {SERVICES.map((service, index) => {
          // Odd index: Image on right, text on left (screenshot row 1, 3, 5, 7)
          // Even index: Image on left, text on right (screenshot row 2, 4, 6)
          const isImageRight = index % 2 === 0;

          const textBlock = (
            <div className="space-y-5">
              <span className="text-[#E6007A] font-black text-xs sm:text-sm tracking-wider uppercase font-heading block">
                {service.categoryKicker}
              </span>
              <h3 className="text-2xl sm:text-4xl font-black uppercase tracking-tight font-heading text-slate-950">
                {service.title}
              </h3>
              <div className="text-[#E6007A] font-black tracking-widest text-base select-none">
                ///////
              </div>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {service.description}
              </p>

              {/* Action Buttons matching screenshot */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href={`tel:${BUSINESS_INFO.phoneTel}`}
                  className="bg-[#E6007A] hover:bg-[#c70068] text-white text-xs font-bold px-5 py-3 rounded-full flex items-center gap-2 transition-all shadow-sm active:scale-95"
                >
                  <Phone className="w-3.5 h-3.5 fill-current" />
                  <span>{BUSINESS_INFO.phoneFormatted}</span>
                </a>

                <button
                  onClick={() => onLearnMore(service)}
                  className="bg-[#111217] hover:bg-black text-white text-xs font-black uppercase tracking-wider px-6 py-3 transition-all cursor-pointer active:scale-95"
                >
                  LEARN MORE
                </button>

                <button
                  onClick={() => onOpenQuote(service.title)}
                  className="text-xs font-bold text-[#E6007A] hover:text-[#c70068] underline underline-offset-4 px-2 py-2"
                >
                  Book Instant {service.startingPrice}
                </button>
              </div>
            </div>
          );

          const imageBlock = (
            <div className="space-y-4">
              {/* Image card with dark badge overlay */}
              <div className="relative group overflow-hidden bg-slate-950 aspect-[4/3] sm:aspect-[16/10] shadow-xl border border-slate-200">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                {/* Badge matching screenshot overlay */}
                <div className="absolute top-4 left-4 bg-[#111217]/90 backdrop-blur-sm text-white px-3 py-1.5 text-[10px] sm:text-xs font-black uppercase tracking-wider border border-white/20">
                  {service.badgeText}
                </div>
              </div>

              {/* 4 bullet points below image matching screenshot */}
              <div className="bg-slate-50 p-4 border border-slate-100 rounded-none space-y-2">
                {service.bullets.map((bullet, bIdx) => (
                  <div key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E6007A] mt-1.5 shrink-0" />
                    <span className="font-medium">{bullet}</span>
                  </div>
                ))}
              </div>
            </div>
          );

          return (
            <div
              key={service.id}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center border-b border-slate-100 pb-20 last:border-b-0"
            >
              {isImageRight ? (
                <>
                  <div className="order-1 lg:order-1">{textBlock}</div>
                  <div className="order-2 lg:order-2">{imageBlock}</div>
                </>
              ) : (
                <>
                  <div className="order-2 lg:order-1">{imageBlock}</div>
                  <div className="order-1 lg:order-2">{textBlock}</div>
                </>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
