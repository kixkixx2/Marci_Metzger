import React from 'react';
import { Phone, ArrowUpRight, Calendar } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

export const FinalCTA: React.FC = () => {
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.getElementById('contact');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative py-28 lg:py-36 bg-charcoal text-ivory overflow-hidden border-b border-stone-800">
      {/* Background Ambience with Desert Mountain Gradient */}
      <div className="absolute inset-0 opacity-15 mix-blend-luminosity pointer-events-none">
        <img
          src="./assets/background.webp"
          alt="Mountain backdrop"
          className="w-full h-full object-cover object-center filter blur-sm scale-105"
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 text-center space-y-8">
        <div className="inline-flex items-center space-x-2 text-desert-gold border border-desert-gold/30 px-3.5 py-1.5 text-[11px] uppercase tracking-[0.26em]">
          <Calendar className="w-3.5 h-3.5" />
          <span>10 — Begin The Conversation</span>
        </div>

        <h2 className="editorial-title text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-white font-normal leading-tight">
          Ready to Make <br />
          <span className="italic font-editorial font-light lowercase text-desert-gold">a</span> Move?
        </h2>

        <p className="font-editorial italic text-stone-300 text-xl sm:text-2xl max-w-2xl mx-auto leading-relaxed font-light">
          Whether you are selling a premier property, seeking your custom golf retreat in Mountain Falls, or exploring Southern Nevada opportunities, let's connect today.
        </p>

        {/* Primary CTA Buttons */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <a
            href="#contact"
            onClick={scrollToContact}
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 px-9 py-4 bg-desert-bronze text-white text-xs uppercase tracking-[0.22em] font-medium hover:bg-desert-gold transition-colors shadow-lg"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>

          <a
            href={`tel:${BUSINESS_INFO.phones.primaryRaw}`}
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/25 text-white text-xs uppercase tracking-[0.22em] font-medium transition-all"
          >
            <Phone className="w-3.5 h-3.5 text-desert-gold" />
            <span>Call: {BUSINESS_INFO.phones.primary}</span>
          </a>
        </div>

        {/* Reassurance note */}
        <p className="text-xs text-stone-400 uppercase tracking-widest pt-4">
          Open Daily 8:00 AM – 7:00 PM • Appointments Outside Hours Available Upon Request
        </p>
      </div>
    </section>
  );
};
