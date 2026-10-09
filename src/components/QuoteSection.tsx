import React, { useState, useEffect } from 'react';
import { Phone, MapPin, Navigation, Clock, CheckCircle, ArrowRight, MessageSquare, Send } from 'lucide-react';
import { BUSINESS_INFO, SERVICES } from '../data/siteData';

interface QuoteSectionProps {
  initialService?: string;
}

export const QuoteSection: React.FC<QuoteSectionProps> = ({ initialService }) => {
  const [vehicle, setVehicle] = useState('');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [consent, setConsent] = useState(true);
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Service list for checkboxes matching prompt B
  const availableServices = [
    'Ceramic Coating',
    'Premium Car Wrapping',
    'Windows Tinting',
    'PPF (Paint Protection Film)',
    'Exterior Polishing',
    'Rims & Calipers Paint',
    'Chrome Delete',
  ];

  // Pre-select initial service if requested
  useEffect(() => {
    if (initialService) {
      const match = availableServices.find(
        (s) => s.toLowerCase().includes(initialService.toLowerCase()) || initialService.toLowerCase().includes(s.toLowerCase())
      );
      if (match && !selectedServices.includes(match)) {
        setSelectedServices((prev) => [...prev, match]);
      }
    }
  }, [initialService]);

  const toggleService = (srv: string) => {
    setSelectedServices((prev) =>
      prev.includes(srv) ? prev.filter((item) => item !== srv) : [...prev, srv]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!vehicle.trim()) {
      setErrorMsg('Please enter your vehicle year, make & model.');
      return;
    }
    if (!fullName.trim()) {
      setErrorMsg('Please enter your full name.');
      return;
    }
    if (!phone.trim()) {
      setErrorMsg('Please enter your phone number.');
      return;
    }
    if (selectedServices.length === 0) {
      setErrorMsg('Please select at least one desired service.');
      return;
    }

    setErrorMsg('');
    setSubmitted(true);
  };

  const generateWhatsAppMessage = () => {
    const text = `Hi Wrapido Car Care! I would like to request a quote for:%0A%0A• Vehicle: ${encodeURIComponent(vehicle)}%0A• Name: ${encodeURIComponent(fullName)}%0A• Phone: ${encodeURIComponent(phone)}%0A• Email: ${encodeURIComponent(email)}%0A• Services: ${encodeURIComponent(selectedServices.join(', '))}${notes ? `%0A• Notes: ${encodeURIComponent(notes)}` : ''}`;
    return `https://wa.me/971551161320?text=${text}`;
  };

  return (
    <section id="contact" className="py-24 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Header matching screenshot */}
        <div className="text-center space-y-3">
          <div className="flex items-center justify-center gap-2">
            <span className="w-1.5 h-6 bg-[#E6007A]" />
            <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight font-heading text-slate-950">
              START YOUR FREE QUOTE TODAY
            </h2>
          </div>
          <div className="text-[#E6007A] font-black tracking-widest text-base select-none">
            /////////////////////////////////
          </div>
          <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-500 font-heading">
            EXPERT CONSULTATION · SAME-DAY ESTIMATES · ZERO OBLIGATION
          </p>
        </div>

        {/* Dual Side-by-Side Container matching screenshot */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Box (Vibrant Magenta Box) */}
          <div className="lg:col-span-5 bg-[#E6007A] text-white p-8 sm:p-10 flex flex-col justify-between shadow-xl">
            <div className="space-y-7">
              <h3 className="text-lg sm:text-xl font-black uppercase tracking-tight font-heading leading-snug">
                NEED TO SCHEDULE AN APPOINTMENT OR HAVE ANY QUESTIONS? CONTACT US THROUGH ANY OF THESE MEANS!
              </h3>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-4 h-4 text-white fill-current" />
                </div>
                <div>
                  <span className="text-[10px] tracking-wider uppercase font-black block opacity-90">
                    PHONE NUMBER
                  </span>
                  <a
                    href={`tel:${BUSINESS_INFO.phoneTel}`}
                    className="text-base sm:text-lg font-black tracking-wide hover:underline block"
                  >
                    {BUSINESS_INFO.phone}
                  </a>
                </div>
              </div>

              {/* Shop Address */}
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <div>
                  <span className="text-[10px] tracking-wider uppercase font-black block opacity-90">
                    SHOP ADDRESS
                  </span>
                  <p className="text-xs sm:text-sm font-semibold leading-relaxed">
                    {BUSINESS_INFO.address}
                  </p>
                  <span className="text-[11px] opacity-80 block mt-0.5">(Al Quoz 3 Industrial Area)</span>
                </div>
              </div>

              {/* Service Areas */}
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center shrink-0 mt-0.5">
                  <Navigation className="w-4 h-4 text-white" />
                </div>
                <div>
                  <span className="text-[10px] tracking-wider uppercase font-black block opacity-90">
                    SERVICE AREAS
                  </span>
                  <p className="text-xs sm:text-sm font-semibold leading-relaxed">
                    Al Quoz, Downtown Dubai, Dubai Marina, Business Bay, Jumeirah, Palm Jumeirah, Dubai Hills
                  </p>
                </div>
              </div>

              {/* Shop Hours */}
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-4 h-4 text-white" />
                </div>
                <div>
                  <span className="text-[10px] tracking-wider uppercase font-black block opacity-90">
                    SHOP HOURS
                  </span>
                  <p className="text-xs sm:text-sm font-semibold">
                    {BUSINESS_INFO.hours.weekdays}
                  </p>
                  <p className="text-xs sm:text-sm font-semibold opacity-90">
                    {BUSINESS_INFO.hours.weekend}
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom prompt guarantee */}
            <div className="pt-8 mt-8 border-t border-white/20">
              <span className="text-[11px] font-black uppercase tracking-wider block mb-1">
                PROMPT CONFIRMATION
              </span>
              <p className="text-xs leading-relaxed opacity-95">
                We guarantee personal, honest recommendations with zero pushy upsells.
              </p>
            </div>
          </div>

          {/* Right Box (White Form Card matching screenshot) */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 border border-slate-200 shadow-xl flex flex-col justify-center">
            {submitted ? (
              <div className="text-center py-10 space-y-6">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-black uppercase font-heading text-slate-900">
                    Quote Request Received!
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto">
                    Thank you, <span className="font-bold text-slate-900">{fullName}</span>. Dario and the Wrapido Car Care team will contact you shortly with your personalized estimate in AED.
                  </p>
                </div>

                {/* Instant WhatsApp Shortcut */}
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={generateWhatsAppMessage()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-black uppercase tracking-wider px-6 py-3.5 flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Send via WhatsApp (+971 55 116 1320)</span>
                  </a>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="w-full sm:w-auto border border-slate-300 text-slate-700 text-xs font-bold uppercase tracking-wider px-6 py-3.5 hover:bg-slate-50"
                  >
                    Submit Another Vehicle
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {errorMsg && (
                  <div className="p-3 bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold">
                    {errorMsg}
                  </div>
                )}

                {/* Vehicle Year, Make & Model */}
                <div>
                  <label className="block text-[11px] font-black uppercase tracking-wider text-slate-800 mb-1">
                    VEHICLE YEAR, MAKE &amp; MODEL *
                  </label>
                  <input
                    type="text"
                    required
                    value={vehicle}
                    onChange={(e) => setVehicle(e.target.value)}
                    placeholder="e.g. 2026 Porsche 911 / 2025 GMC Acadia"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-[#E6007A] focus:bg-white transition-colors"
                  />
                </div>

                {/* Name & Phone in 2 columns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-black uppercase tracking-wider text-slate-800 mb-1">
                      FULL NAME *
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Your Name"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-[#E6007A] focus:bg-white transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-black uppercase tracking-wider text-slate-800 mb-1">
                      PHONE NUMBER *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+971 55 116 1320"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-[#E6007A] focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-[11px] font-black uppercase tracking-wider text-slate-800 mb-1">
                    EMAIL ADDRESS *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="youremail@example.com"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-[#E6007A] focus:bg-white transition-colors"
                  />
                </div>

                {/* Checkboxes matching prompt B */}
                <div className="pt-2">
                  <label className="block text-[11px] font-black uppercase tracking-wider text-slate-800 mb-2">
                    SELECT YOUR DESIRED SERVICES:
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {availableServices.map((srv) => (
                      <label
                        key={srv}
                        className={`flex items-center gap-2.5 p-2.5 border text-xs cursor-pointer transition-colors ${
                          selectedServices.includes(srv)
                            ? 'border-[#E6007A] bg-[#E6007A]/5 text-slate-950 font-bold'
                            : 'border-slate-200 text-slate-700 hover:border-slate-300'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={selectedServices.includes(srv)}
                          onChange={() => toggleService(srv)}
                          className="w-4 h-4 text-[#E6007A] accent-[#E6007A] rounded-none cursor-pointer"
                        />
                        <span>{srv}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Notes (Optional) */}
                <div>
                  <label className="block text-[11px] font-black uppercase tracking-wider text-slate-800 mb-1">
                    ADDITIONAL DETAILS OR PREFERRED TIMING (OPTIONAL)
                  </label>
                  <textarea
                    rows={2}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="e.g. Full front PPF, ceramic tint 50% legal shade, appointment this Saturday..."
                    className="w-full px-4 py-2 bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:outline-none focus:border-[#E6007A] focus:bg-white transition-colors"
                  />
                </div>

                {/* SMS & Privacy Consent matching screenshot */}
                <div className="pt-1">
                  <label className="flex items-start gap-2.5 text-[11px] text-slate-500 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={consent}
                      onChange={(e) => setConsent(e.target.checked)}
                      className="w-3.5 h-3.5 text-[#E6007A] accent-[#E6007A] mt-0.5 shrink-0"
                    />
                    <span>
                      I consent to receive quotes &amp; alerts from {BUSINESS_INFO.name} at {BUSINESS_INFO.phone}. Message frequency may vary. Reply HELP for assistance or STOP to cancel.
                    </span>
                  </label>
                </div>

                {/* Submit Button matching screenshot hot pink button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-[#E6007A] hover:bg-[#c70068] text-white text-xs sm:text-sm font-black uppercase tracking-widest py-4 transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                  >
                    <span>SEND MY REQUEST</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
