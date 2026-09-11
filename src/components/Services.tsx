import React, { useState } from 'react';
import { ArrowUpRight, Check } from 'lucide-react';
import { SERVICES_DATA } from '../data/content';

export const Services: React.FC = () => {
  const [activeService, setActiveService] = useState<number>(0);

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.getElementById('contact');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-24 lg:py-32 bg-cream text-charcoal border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-10 border-b border-stone-300/60 mb-16">
          <div>
            <span className="editorial-subheading text-xs tracking-[0.24em] text-desert-bronze block mb-2">
              08 — Capabilities & Advisory
            </span>
            <h2 className="editorial-title text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-charcoal font-normal">
              Real Estate <br />
              <span className="italic font-editorial font-light lowercase text-desert-bronze">done</span> Right.
            </h2>
          </div>

          <div className="mt-4 md:mt-0 max-w-md text-left md:text-right">
            <p className="font-editorial italic text-stone-600 text-base sm:text-lg">
              "Large or small, condo or mansion, fixer-uppers or luxury. We live, work, and play in this community."
            </p>
          </div>
        </div>

        {/* Editorial Service Accordion / Split Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: Interactive Editorial Service Index */}
          <div className="lg:col-span-6 space-y-4">
            {SERVICES_DATA.map((service, index) => {
              const isActive = activeService === index;
              return (
                <div
                  key={service.number}
                  onClick={() => setActiveService(index)}
                  className={`p-6 border transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-ivory border-desert-bronze shadow-md -translate-y-0.5'
                      : 'bg-ivory/50 border-stone-200 hover:border-stone-300 hover:bg-ivory'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-baseline space-x-4">
                      <span className={`editorial-title text-sm tracking-widest ${isActive ? 'text-desert-bronze font-semibold' : 'text-stone-600'}`}>
                        {service.number}
                      </span>
                      <div>
                        <h3 className="editorial-title text-lg sm:text-xl text-charcoal font-medium">
                          {service.title}
                        </h3>
                        <p className="text-xs uppercase tracking-wider text-desert-bronze mt-0.5">
                          {service.subtitle}
                        </p>
                      </div>
                    </div>

                    <span className={`text-xs transition-transform duration-300 ${isActive ? 'rotate-45 text-desert-bronze' : 'text-stone-400'}`}>
                      +
                    </span>
                  </div>

                  {/* Expanded Content Preview on Mobile */}
                  {isActive && (
                    <div className="mt-4 pt-4 border-t border-stone-200/80 space-y-3 lg:hidden">
                      <p className="text-xs sm:text-sm text-charcoal-50 leading-relaxed font-light">
                        {service.description}
                      </p>
                      <div className="space-y-1.5 pt-2">
                        {service.highlights.map((h, i) => (
                          <div key={i} className="flex items-center space-x-2 text-xs text-charcoal-100">
                            <Check className="w-3.5 h-3.5 text-desert-bronze flex-shrink-0" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right: Rich Focus View for Selected Service (Desktop) */}
          <div className="hidden lg:block lg:col-span-6 sticky top-28">
            {SERVICES_DATA[activeService] && (
              <div className="bg-ivory border border-stone-300/80 p-8 sm:p-10 shadow-lg space-y-6">
                {/* Service Visual Preview */}
                {SERVICES_DATA[activeService].image && (
                  <div className="h-56 overflow-hidden bg-stone-100 border border-stone-200">
                    <img
                      src={SERVICES_DATA[activeService].image}
                      alt={SERVICES_DATA[activeService].title}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                )}

                <div className="space-y-2">
                  <span className="text-[10px] uppercase tracking-[0.24em] text-desert-bronze font-semibold">
                    Service Focus {SERVICES_DATA[activeService].number}
                  </span>
                  <h3 className="editorial-title text-2xl text-charcoal font-medium">
                    {SERVICES_DATA[activeService].title}
                  </h3>
                  <p className="font-editorial italic text-stone-600 text-base">
                    "{SERVICES_DATA[activeService].subtitle}"
                  </p>
                </div>

                <p className="text-sm text-charcoal-50 leading-relaxed font-light">
                  {SERVICES_DATA[activeService].description}
                </p>

                {/* Highlights */}
                <div className="pt-4 border-t border-stone-200 space-y-2.5">
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-charcoal block">
                    Key Client Advantages:
                  </span>
                  {SERVICES_DATA[activeService].highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start space-x-3 text-xs text-charcoal-100">
                      <Check className="w-4 h-4 text-desert-bronze flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Action */}
                <div className="pt-4">
                  <a
                    href="#contact"
                    onClick={scrollToContact}
                    className="inline-flex items-center space-x-2 px-6 py-3 bg-charcoal text-ivory text-xs uppercase tracking-[0.2em] font-medium hover:bg-desert-bronze transition-colors shadow-sm"
                  >
                    <span>Inquire About This Service</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
