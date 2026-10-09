import React from 'react';
import { X, Phone, CheckCircle2, ShieldCheck, Clock, Award, ArrowRight } from 'lucide-react';
import { ServiceItem, BUSINESS_INFO } from '../data/siteData';

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onBookService: (serviceTitle: string) => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({
  service,
  onClose,
  onBookService,
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative w-full max-w-2xl bg-white text-slate-900 shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Modal Header */}
        <div className="relative h-48 bg-slate-950 overflow-hidden">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/70 hover:bg-[#E6007A] text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close Modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6">
            <span className="text-[#E6007A] text-[10px] sm:text-xs font-black uppercase tracking-wider block font-heading">
              {service.categoryKicker}
            </span>
            <h2 className="text-xl sm:text-3xl font-black uppercase font-heading text-white tracking-tight">
              {service.title}
            </h2>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
          {/* Key Specs Pills */}
          <div className="grid grid-cols-3 gap-3 p-4 bg-slate-50 border border-slate-100 text-center">
            <div>
              <span className="text-[10px] text-slate-400 uppercase font-black block">STARTING PRICE</span>
              <span className="text-sm sm:text-base font-black text-[#E6007A]">{service.startingPrice}</span>
            </div>
            <div>
              <span className="text-[10px] text-slate-400 uppercase font-black block">DURATION</span>
              <span className="text-xs sm:text-sm font-bold text-slate-800">{service.details.duration}</span>
            </div>
            <div>
              <span className="text-[10px] text-slate-400 uppercase font-black block">WARRANTY</span>
              <span className="text-xs sm:text-sm font-bold text-slate-800">{service.details.warranty}</span>
            </div>
          </div>

          {/* Overview */}
          <div className="space-y-2">
            <h3 className="text-xs font-black uppercase tracking-wider text-slate-900 font-heading">
              SERVICE OVERVIEW
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {service.details.overview}
            </p>
          </div>

          {/* What's included checklist */}
          <div className="space-y-2">
            <h3 className="text-xs font-black uppercase tracking-wider text-slate-900 font-heading">
              WHAT IS INCLUDED
            </h3>
            <div className="space-y-2">
              {service.details.included.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#E6007A] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Materials */}
          <div className="p-3 bg-slate-50 border border-slate-200 text-xs text-slate-600">
            <span className="font-bold text-slate-800">Verified Products: </span>
            {service.details.materials}
          </div>

          {/* Action Row */}
          <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-3">
            <button
              onClick={() => {
                onClose();
                onBookService(service.title);
              }}
              className="w-full sm:flex-1 bg-[#E6007A] hover:bg-[#c70068] text-white text-xs font-black uppercase tracking-wider py-3.5 flex items-center justify-center gap-2 cursor-pointer shadow-md transition-all active:scale-95"
            >
              <span>BOOK THIS SERVICE NOW</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={`tel:${BUSINESS_INFO.phoneTel}`}
              className="w-full sm:w-auto bg-[#111217] hover:bg-black text-white text-xs font-bold px-6 py-3.5 flex items-center justify-center gap-2 transition-colors"
            >
              <Phone className="w-4 h-4 text-[#E6007A]" />
              <span>{BUSINESS_INFO.phoneFormatted}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
