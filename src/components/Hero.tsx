import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, MapPin, Clock, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

export const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-end lg:items-center justify-start overflow-hidden bg-charcoal">
      {/* Background Photography with Warm Scrim */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="./assets/background.webp"
          alt="Mountain Falls Golf Community and Spring Mountains in Pahrump, Nevada"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out"
        />
        {/* Editorial Gradients & Scrims - Preserves rich photography while ensuring legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-charcoal/30 to-transparent hidden md:block" />
        <div className="absolute inset-0 bg-desert-bronze/10 mix-blend-multiply" />
      </div>

      {/* Main Editorial Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-32 pb-16 lg:py-40">
        <div className="max-w-3xl">
          {/* Tagline Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center space-x-3 bg-charcoal/60 backdrop-blur-md border border-white/15 px-3.5 py-1.5 mb-6 text-white/90"
          >
            <MapPin className="w-3.5 h-3.5 text-desert-gold" />
            <span className="text-[11px] uppercase tracking-[0.24em] font-medium">
              Pahrump, Nevada • Southern Nevada
            </span>
          </motion.div>

          {/* Editorial Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="editorial-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-normal leading-[1.08] tracking-tight uppercase"
          >
            Real Estate <br />
            <span className="italic font-editorial font-light tracking-normal lowercase text-cream-100">
              with a
            </span>{' '}
            Local <br />
            Perspective.
          </motion.h1>

          {/* Understated Subtitle & Attribution */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 sm:mt-8 space-y-2"
          >
            <p className="editorial-subheading text-desert-gold tracking-[0.28em] text-xs sm:text-sm">
              Marci Metzger • The Ridge Realty Group
            </p>
            <p className="font-editorial text-lg sm:text-xl md:text-2xl text-ivory/85 italic max-w-xl font-light leading-relaxed">
              Serving Pahrump and Southern Nevada for nearly three decades with trusted local insight and exceptional dedication.
            </p>
          </motion.div>

          {/* Primary & Secondary Call to Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-5"
          >
            <button
              onClick={() => scrollToSection('properties')}
              className="px-8 py-4 bg-white text-charcoal text-xs uppercase tracking-[0.22em] font-medium hover:bg-cream-100 transition-all duration-300 shadow-lg text-center"
            >
              View Properties
            </button>

            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 bg-transparent border border-white/40 text-white text-xs uppercase tracking-[0.22em] font-medium hover:bg-white/10 hover:border-white transition-all duration-300 text-center"
            >
              Let's Talk
            </button>

            <a
              href={`tel:${BUSINESS_INFO.phones.primaryRaw}`}
              className="sm:hidden flex items-center justify-center space-x-2 py-3 text-xs tracking-wider text-white/90 border border-white/20"
            >
              <Phone className="w-3.5 h-3.5 text-desert-gold" />
              <span>Call: {BUSINESS_INFO.phones.primary}</span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Floating Status / Office Hours Ribbon (Desktop Bottom Bar) */}
      <div className="absolute bottom-0 left-0 right-0 z-20 border-t border-white/15 bg-charcoal/70 backdrop-blur-md text-ivory/80 text-xs hidden md:block">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-3.5 flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <Clock className="w-3.5 h-3.5 text-desert-gold" />
              <span className="tracking-wider text-white text-[11px]">
                {BUSINESS_INFO.hours.schedule}
              </span>
            </div>
            <div className="hidden lg:flex items-center space-x-2 text-[11px] text-ivory/70 border-l border-white/15 pl-6">
              <MapPin className="w-3.5 h-3.5 text-desert-gold" />
              <span>{BUSINESS_INFO.address.street}, Pahrump, NV</span>
            </div>
          </div>

          <button
            onClick={() => scrollToSection('about')}
            className="flex items-center space-x-2 text-[11px] uppercase tracking-[0.2em] text-white hover:text-desert-gold transition-colors focus:outline-none"
          >
            <span>Explore The Story</span>
            <ArrowDown className="w-3.5 h-3.5 text-desert-gold animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
};
