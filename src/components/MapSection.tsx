import React from 'react';
import { MapPin, Navigation, ExternalLink } from 'lucide-react';
import { BUSINESS_INFO } from '../data/siteData';

export const MapSection: React.FC = () => {
  return (
    <section className="relative w-full bg-slate-100 overflow-hidden border-b border-slate-200">
      {/* Map Header / Location Indicator overlay */}
      <div className="bg-[#111217] text-white py-3 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-[#E6007A]" />
            <span className="font-bold uppercase tracking-wider">
              STUDIO LOCATION: {BUSINESS_INFO.address}
            </span>
          </div>
          <a
            href={BUSINESS_INFO.gbpLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#E6007A] hover:underline font-bold flex items-center gap-1.5 uppercase tracking-wider"
          >
            <span>Open in Google Maps</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Embedded Google Map using exact iframe from user prompt */}
      <div className="w-full h-[450px] relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3612.3713398851446!2d55.21124141034479!3d25.123133577666025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6b70f6db1279%3A0x62790c59c4c43e7f!2sWrapido%20Car%20Care%20-%20Wrapping%20PPF%20Tinting!5e0!3m2!1sen!2s!4v1791520321395!5m2!1sen!2s"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          title="Wrapido Car Care - Al Quoz Dubai Map"
          className="w-full h-full filter saturate-105"
        />
      </div>
    </section>
  );
};
