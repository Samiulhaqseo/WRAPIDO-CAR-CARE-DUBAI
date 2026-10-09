import React, { useState } from 'react';
import { Star, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { REVIEWS, BUSINESS_INFO } from '../data/siteData';

export const ReviewsSection: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [startIndex, setStartIndex] = useState(0);

  // We display 4 cards on desktop or scroll
  const visibleCount = 4;
  const maxStart = Math.max(0, REVIEWS.length - visibleCount);

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev < maxStart ? prev + 1 : 0));
  };

  const visibleReviews = REVIEWS.slice(startIndex, startIndex + visibleCount);

  return (
    <section id="reviews" className="py-24 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Heading matching screenshot */}
        <div className="text-center space-y-3">
          <div className="text-[#E6007A] font-black text-xs sm:text-sm tracking-[0.2em] uppercase select-none font-heading">
            ///////// TESTIMONIALS /////////
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight font-heading text-slate-950">
            VERIFIED REVIEWS
          </h2>
        </div>

        {/* Google Reviews rating bar matching screenshot */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-6 border-b border-slate-100">
          <div className="flex items-center gap-3">
            {/* Google G logo */}
            <div className="flex items-center gap-2">
              <svg className="w-7 h-7" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>
              <span className="font-heading font-black text-xl text-slate-800">Google Reviews</span>
            </div>

            <div className="flex items-center gap-1.5 pl-2">
              <span className="font-bold text-slate-900 text-lg">{BUSINESS_INFO.rating.toFixed(1)}</span>
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 stroke-amber-400" />
                ))}
              </div>
              <span className="text-slate-500 text-sm font-semibold">({BUSINESS_INFO.reviewCount})</span>
            </div>
          </div>

          {/* Button: REVIEW US ON GOOGLE */}
          <a
            href={BUSINESS_INFO.gbpLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#E6007A] hover:bg-[#c70068] text-white text-xs font-black uppercase tracking-wider px-6 py-3 transition-all flex items-center gap-2 shadow-sm cursor-pointer"
          >
            <span>REVIEW US ON GOOGLE</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* 4 Review Cards in grid matching screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {visibleReviews.map((rev) => {
            const isExpanded = expandedId === rev.id;
            return (
              <div
                key={rev.id}
                className="bg-white p-6 border border-slate-200 shadow-sm flex flex-col justify-between hover:border-slate-300 transition-colors"
              >
                <div>
                  {/* Stars */}
                  <div className="flex text-amber-400 mb-3">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 stroke-amber-400" />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p
                    className={`text-slate-600 text-xs sm:text-[13px] leading-relaxed mb-3 ${
                      isExpanded ? '' : 'line-clamp-5'
                    }`}
                  >
                    "{rev.text}"
                  </p>

                  <button
                    onClick={() => setExpandedId(isExpanded ? null : rev.id)}
                    className="text-[11px] font-bold text-slate-400 hover:text-[#E6007A] uppercase tracking-wider mb-4 cursor-pointer"
                  >
                    {isExpanded ? 'SHOW LESS' : 'READ MORE'}
                  </button>
                </div>

                {/* Author & Date matching screenshot */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-slate-800 text-xs">
                  <div>
                    <span className="font-bold block text-slate-900">{rev.author}</span>
                    <span className="text-[10px] text-slate-500 font-medium">{rev.vehicle}</span>
                  </div>
                  <span className="text-[11px] text-slate-400">{rev.timeAgo}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Carousel controls matching screenshot (< and > buttons) */}
        <div className="flex items-center justify-end gap-2 pt-2">
          <button
            onClick={handlePrev}
            disabled={startIndex === 0}
            className="w-9 h-9 border border-slate-300 flex items-center justify-center text-slate-700 hover:border-slate-800 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            aria-label="Previous Reviews"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={handleNext}
            className="w-9 h-9 border border-slate-300 flex items-center justify-center text-slate-700 hover:border-slate-800 transition-colors"
            aria-label="Next Reviews"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
