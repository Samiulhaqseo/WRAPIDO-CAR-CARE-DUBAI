/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ReviewsSection } from './components/ReviewsSection';
import { FeaturedShowcase } from './components/FeaturedShowcase';
import { QuoteSection } from './components/QuoteSection';
import { MapSection } from './components/MapSection';
import { ServiceAreasSection } from './components/ServiceAreasSection';
import { PortfolioSection } from './components/PortfolioSection';
import { FaqSection } from './components/FaqSection';
import { PreFooterCta } from './components/PreFooterCta';
import { Footer } from './components/Footer';
import { ServiceModal } from './components/ServiceModal';
import { VideoModal } from './components/VideoModal';
import { QuickContactFloating } from './components/QuickContactFloating';
import { ServiceItem, PortfolioItem, SERVICES } from './data/siteData';

export default function App() {
  const [selectedServiceForModal, setSelectedServiceForModal] = useState<ServiceItem | null>(null);
  const [selectedVideoForModal, setSelectedVideoForModal] = useState<PortfolioItem | null>(null);
  const [quoteServiceTarget, setQuoteServiceTarget] = useState<string | undefined>(undefined);

  const handleOpenQuote = (serviceTitle?: string) => {
    if (serviceTitle) {
      setQuoteServiceTarget(serviceTitle);
    }
    const quoteElement = document.getElementById('contact');
    if (quoteElement) {
      quoteElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreServices = () => {
    const servicesEl = document.getElementById('services');
    if (servicesEl) {
      servicesEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLearnMore = (service: ServiceItem) => {
    setSelectedServiceForModal(service);
  };

  const handleOpenVideo = (item: PortfolioItem) => {
    setSelectedVideoForModal(item);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-[#E6007A] selection:text-white">
      {/* 1. Header Navigation */}
      <Header onOpenQuote={handleOpenQuote} />

      <main className="flex-grow">
        {/* 2. Hero Section */}
        <Hero
          onOpenQuote={() => handleOpenQuote()}
          onExploreServices={handleExploreServices}
        />

        {/* 3. About Us Section */}
        <AboutSection onOpenQuote={() => handleOpenQuote()} />

        {/* 4. Services Section (Alternating cards matching screenshot) */}
        <ServicesSection
          onLearnMore={handleLearnMore}
          onOpenQuote={handleOpenQuote}
        />

        {/* 5. Why Choose Us Section */}
        <WhyChooseUs />

        {/* 6. Verified Reviews / Google Reviews */}
        <ReviewsSection />

        {/* 7. Protect Your Investment Showcase */}
        <FeaturedShowcase onOpenQuote={handleOpenQuote} />

        {/* 8. Start Your Free Quote Today (Lead Generation & Hours) */}
        <QuoteSection initialService={quoteServiceTarget} />

        {/* 9. Interactive Google Map */}
        <MapSection />

        {/* 10. Service Areas Section */}
        <ServiceAreasSection />

        {/* 11. Portfolio Section (6 video projects) */}
        <PortfolioSection
          onOpenQuote={handleOpenQuote}
          onOpenVideo={handleOpenVideo}
        />

        {/* 12. Frequently Asked Questions */}
        <FaqSection />

        {/* 13. Pre-Footer Call to Action Banner */}
        <PreFooterCta onOpenQuote={() => handleOpenQuote()} />
      </main>

      {/* 14. Detailed Footer */}
      <Footer onOpenQuote={handleOpenQuote} />

      {/* Floating Action Button */}
      <QuickContactFloating />

      {/* Modals */}
      <ServiceModal
        service={selectedServiceForModal}
        onClose={() => setSelectedServiceForModal(null)}
        onBookService={(srv) => {
          setSelectedServiceForModal(null);
          handleOpenQuote(srv);
        }}
      />

      <VideoModal
        item={selectedVideoForModal}
        onClose={() => setSelectedVideoForModal(null)}
        onOpenQuote={(cat) => {
          setSelectedVideoForModal(null);
          handleOpenQuote(cat);
        }}
      />
    </div>
  );
}
