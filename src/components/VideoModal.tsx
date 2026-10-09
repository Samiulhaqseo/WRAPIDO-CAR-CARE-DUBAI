import React from 'react';
import { X, ExternalLink, Play, ArrowRight } from 'lucide-react';
import { PortfolioItem } from '../data/siteData';

interface VideoModalProps {
  item: PortfolioItem | null;
  onClose: () => void;
  onOpenQuote: (category: string) => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({
  item,
  onClose,
  onOpenQuote,
}) => {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative w-full max-w-xl bg-[#111217] text-white border border-white/20 shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-20 w-8 h-8 rounded-full bg-black/70 hover:bg-[#E6007A] text-white flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close Preview"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Thumbnail Hero with Play Link */}
        <div className="relative aspect-video bg-black overflow-hidden group">
          <img
            src={item.thumbnail}
            alt={item.title}
            className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111217] via-transparent to-transparent" />

          {/* Central play trigger linking to Maps video */}
          <a
            href={item.videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 flex flex-col items-center justify-center gap-2 group-hover:scale-105 transition-transform"
          >
            <div className="w-16 h-16 rounded-full bg-[#E6007A] group-hover:bg-[#c70068] text-white flex items-center justify-center shadow-xl">
              <Play className="w-7 h-7 fill-current ml-1" />
            </div>
            <span className="text-xs font-black uppercase tracking-wider bg-black/80 px-3 py-1 text-white border border-white/20 flex items-center gap-1.5">
              <span>Watch on Google Maps Clip</span>
              <ExternalLink className="w-3 h-3 text-[#E6007A]" />
            </span>
          </a>
        </div>

        {/* Details Content */}
        <div className="p-6 space-y-4">
          <div>
            <span className="text-[#E6007A] text-xs font-black uppercase tracking-wider block font-heading">
              {item.category}
            </span>
            <h3 className="text-base sm:text-lg font-black uppercase font-heading text-white mt-1">
              {item.title}
            </h3>
          </div>

          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
            {item.description}
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
            <a
              href={item.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:flex-1 bg-white/10 hover:bg-white/20 text-white text-xs font-bold py-3 px-4 flex items-center justify-center gap-2 border border-white/20 transition-colors"
            >
              <span>Open Google Clip</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#E6007A]" />
            </a>

            <button
              onClick={() => {
                onClose();
                onOpenQuote(item.category);
              }}
              className="w-full sm:flex-1 bg-[#E6007A] hover:bg-[#c70068] text-white text-xs font-black uppercase tracking-wider py-3 px-4 flex items-center justify-center gap-2 transition-all shadow-md active:scale-95 cursor-pointer"
            >
              <span>QUOTE THIS SERVICE</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
