import React from 'react';
import { MapPin } from 'lucide-react';
import { DUBAI_SERVICE_AREAS, BUSINESS_INFO } from '../data/siteData';

export const ServiceAreasSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#E6007A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-10">
        {/* Header Block matching screenshot */}
        <div className="space-y-3">
          <div className="text-white/80 font-black text-xs sm:text-sm tracking-[0.2em] uppercase select-none font-heading">
            ///////// SERVICING /////////
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight font-heading text-white">
            DUBAI SERVICE AREAS
          </h2>
          <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white/90 max-w-2xl mx-auto">
            {BUSINESS_INFO.name.toUpperCase()} SERVICES DUBAI, UAE &amp; THE SURROUNDING AREAS LISTED BELOW
          </p>
        </div>

        {/* White Service Area Cards with pink pins matching screenshot */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {DUBAI_SERVICE_AREAS.map((area, idx) => (
            <div
              key={idx}
              className="bg-white text-slate-900 py-4 px-6 flex items-center justify-center gap-2.5 shadow-md hover:scale-[1.02] transition-transform cursor-default"
            >
              <MapPin className="w-4 h-4 text-[#E6007A] shrink-0 fill-current" />
              <span className="text-xs sm:text-sm font-black uppercase tracking-wider font-heading truncate">
                {area}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
