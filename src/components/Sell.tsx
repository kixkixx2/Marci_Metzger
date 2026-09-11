import React from 'react';
import { ArrowUpRight, TrendingUp, Camera, Users, Target } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

export const Sell: React.FC = () => {
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.getElementById('contact');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const sellerPillars = [
    {
      icon: Target,
      title: 'Targeted Buyer Syndication',
      description:
        'We exhaust every avenue to ensure our listings are at the fingertips of every possible qualified buyer across Nevada, California, and national relocation networks.',
    },
    {
      icon: Camera,
      title: 'Architectural Presentation',
      description:
        'High-resolution drone visuals, editorial interior photography, and professional staging guidance ensure your home stands out distinctly.',
    },
    {
      icon: TrendingUp,
      title: 'Strategic Market Valuation',
      description:
        'With nearly 30 years of local pricing experience, we price strategically to capture peak buyer momentum and deliver top dollar.',
    },
    {
      icon: Users,
      title: 'Active Deal Negotiation',
      description:
        'From rigorous offer screening to appraisal management and seamless escrow closing, your financial interest is defended at every step.',
    },
  ];

  return (
    <section id="sell" className="py-24 lg:py-32 bg-cream text-charcoal border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-10 border-b border-stone-300/60 mb-16">
          <div>
            <span className="editorial-subheading text-xs tracking-[0.24em] text-desert-bronze block mb-2">
              04 — Seller Representation
            </span>
            <h2 className="editorial-title text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-charcoal font-normal">
              Don't Just List It... <br />
              <span className="italic font-editorial font-light lowercase text-desert-bronze">get it</span> SOLD.
            </h2>
          </div>

          <div className="mt-4 md:mt-0 text-left md:text-right">
            <span className="editorial-title text-2xl sm:text-3xl text-charcoal font-normal">
              $28.5 Million
            </span>
            <p className="text-xs uppercase tracking-widest text-stone-600">
              Closed Sales in a Single Year • Top Sales Last 5 Years
            </p>
          </div>
        </div>

        {/* Editorial Content: Large Image + Narrative Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Main Visual: Curated Interior Finished Photo (1.webp) */}
          <div className="lg:col-span-7 relative group">
            <div className="relative overflow-hidden bg-stone-200 shadow-md">
              <img
                src="./assets/1.webp"
                alt="Luxury finished kitchen and living space staged for maximum sale value"
                className="w-full h-[400px] sm:h-[500px] object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-charcoal/15 group-hover:bg-transparent transition-colors duration-500" />
            </div>

            {/* Inset Editorial Caption Card */}
            <div className="absolute -bottom-6 -right-4 sm:bottom-6 sm:right-6 bg-ivory p-5 sm:p-6 border border-stone-200/90 shadow-xl max-w-xs sm:max-w-sm">
              <div className="text-[10px] uppercase tracking-[0.2em] text-desert-bronze font-semibold mb-1">
                The Ridge Difference
              </div>
              <p className="font-editorial italic text-base sm:text-lg text-charcoal leading-snug">
                "We exhaust every avenue to ensure our listings reach every possible buyer, getting you top dollar for your home."
              </p>
            </div>
          </div>

          {/* Right Narrative Column */}
          <div className="lg:col-span-5 space-y-8 pt-6 lg:pt-0">
            <div className="space-y-4">
              <h3 className="font-editorial text-2xl sm:text-3xl text-charcoal leading-tight font-normal">
                Elevating your property from an MLS listing into a compelling lifestyle acquisition.
              </h3>
              <p className="text-sm sm:text-base text-charcoal-50 leading-relaxed font-light">
                Selling a home in Southern Nevada requires far more than placing a sign on the curb. With nearly three decades of market leadership, Marci Metzger and The Ridge Realty Group provide unmatched pricing accuracy, bespoke presentation, and direct outreach to motivated buyers migrating to Pahrump.
              </p>
            </div>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-stone-300/50">
              {sellerPillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div key={pillar.title} className="space-y-1.5">
                    <div className="flex items-center space-x-2">
                      <Icon className="w-4 h-4 text-desert-bronze" />
                      <h4 className="text-xs uppercase tracking-wider font-semibold text-charcoal">
                        {pillar.title}
                      </h4>
                    </div>
                    <p className="text-xs text-charcoal-50 leading-relaxed font-light">
                      {pillar.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* CTA action */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
              <a
                href="#contact"
                onClick={scrollToContact}
                className="inline-flex items-center justify-center space-x-3 px-7 py-3.5 bg-charcoal text-ivory text-xs uppercase tracking-[0.2em] font-medium hover:bg-desert-bronze transition-colors shadow-sm"
              >
                <span>Request Home Valuation</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <a
                href={`tel:${BUSINESS_INFO.phones.primaryRaw}`}
                className="text-center text-xs tracking-wider text-charcoal-100 hover:text-desert-bronze py-2 transition-colors font-medium"
              >
                Direct: {BUSINESS_INFO.phones.primary}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
