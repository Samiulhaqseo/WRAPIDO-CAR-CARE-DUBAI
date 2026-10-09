import React from 'react';
import { Play, ArrowRight, ExternalLink } from 'lucide-react';
import { PORTFOLIO_ITEMS, PortfolioItem } from '../data/siteData';

interface PortfolioSectionProps {
  onOpenQuote: (serviceTitle?: string) => void;
  onOpenVideo: (item: PortfolioItem) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({
  onOpenQuote,
  onOpenVideo,
}) => {
  return (
    <section id="portfolio" className="py-24 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Header Block matching screenshot */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="text-[#E6007A] font-black text-xs sm:text-sm tracking-[0.2em] uppercase select-none font-heading">
            ///////// OUR WORK /////////
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight font-heading text-slate-950">
            PORTFOLIO
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Check out our recent work and get a quote to have your vehicle wrapped, coated, detailed or protected by our team in Al Quoz, Dubai.
          </p>
        </div>

        {/* 6 Cards Grid (3x2) matching screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PORTFOLIO_ITEMS.map((item) => (
            <div
              key={item.id}
              className="group flex flex-col justify-between border border-slate-200 bg-white shadow-sm hover:shadow-lg transition-all"
            >
              {/* Media Thumbnail with Pink Play Button */}
              <div
                onClick={() => onOpenVideo(item)}
                className="relative aspect-video bg-slate-950 overflow-hidden cursor-pointer"
              >
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/25 transition-colors" />

                {/* Pink Play Button Overlay matching screenshot */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-[#E6007A] group-hover:bg-[#c70068] group-hover:scale-110 text-white flex items-center justify-center shadow-lg transition-all">
                    <Play className="w-5 h-5 fill-current ml-0.5" />
                  </div>
                </div>

                <div className="absolute bottom-2 right-2 bg-black/70 text-white text-[10px] font-bold px-2 py-0.5 flex items-center gap-1">
                  <span>WATCH CLIP</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </div>
              </div>

              {/* Text Body */}
              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[#E6007A] text-[11px] font-black uppercase tracking-wider block font-heading">
                    {item.category}
                  </span>
                  <h3 className="text-sm font-black uppercase tracking-tight font-heading text-slate-950 mt-1 line-clamp-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-xs mt-2 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Bottom CTA Link matching screenshot */}
                <div className="pt-3 border-t border-slate-100">
                  <button
                    onClick={() => onOpenQuote(item.category)}
                    className="text-xs font-black uppercase tracking-wider text-[#E6007A] hover:text-[#c70068] inline-flex items-center gap-1.5 cursor-pointer font-heading group-hover:translate-x-1 transition-transform"
                  >
                    <span>GET QUOTE NOW!</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
