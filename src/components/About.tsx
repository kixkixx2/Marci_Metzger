import React from 'react';
import { CheckCircle2, Compass } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 lg:py-32 bg-ivory text-charcoal border-b border-stone-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header Track */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-12 border-b border-stone-300/60 mb-16 lg:mb-20">
          <div>
            <div className="inline-flex items-center space-x-2 text-desert-bronze mb-3">
              <Compass className="w-3.5 h-3.5" />
              <span className="editorial-subheading text-xs tracking-[0.24em]">
                03 — Editorial Profile
              </span>
            </div>
            <h2 className="editorial-title text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-charcoal font-normal">
              Nearly Three Decades <br />
              <span className="italic font-editorial font-light lowercase text-desert-bronze">of</span> Local Expertise.
            </h2>
          </div>

          <p className="font-editorial italic text-stone-600 text-lg sm:text-xl mt-4 md:mt-0 max-w-md">
            "We make sure our best is better every year for our clients."
          </p>
        </div>

        {/* Asymmetric Magazine Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Statement, Quote & Verified Data */}
          <div className="lg:col-span-6 space-y-10">
            {/* Primary Biography Statement */}
            <div className="space-y-6">
              <span className="text-xs uppercase tracking-[0.26em] text-desert-bronze font-semibold">
                Broker Associate • Resident of Mountain Falls
              </span>

              <h3 className="font-editorial text-2xl sm:text-3xl text-charcoal leading-snug font-normal">
                {BUSINESS_INFO.bioParagraphs[0]}
              </h3>

              <div className="relative pl-6 border-l-2 border-desert-bronze/60 space-y-3 py-1">
                <p className="font-editorial text-xl sm:text-2xl text-charcoal-300 italic leading-relaxed">
                  "{BUSINESS_INFO.quote.text}"
                </p>
                <div className="text-xs uppercase tracking-[0.2em] font-semibold text-charcoal">
                  — {BUSINESS_INFO.quote.author},{' '}
                  <span className="text-desert-bronze font-normal lowercase tracking-normal">
                    {BUSINESS_INFO.quote.role}
                  </span>
                </div>
              </div>

              <p className="text-sm sm:text-base text-charcoal-50 leading-relaxed font-light">
                {BUSINESS_INFO.bioParagraphs[2]}
              </p>
            </div>

            {/* Verified Credentials Grid (From Reference Website) */}
            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-stone-200">
              {BUSINESS_INFO.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="p-5 bg-cream/70 border border-stone-200/70 space-y-1"
                >
                  <div className="editorial-title text-2xl sm:text-3xl text-desert-bronze font-medium">
                    {stat.value}
                  </div>
                  <div className="text-xs uppercase tracking-wider font-semibold text-charcoal">
                    {stat.label}
                  </div>
                  <div className="text-[11px] text-charcoal-50 font-light">
                    {stat.note}
                  </div>
                </div>
              ))}
            </div>

            {/* Trust & Key Values */}
            <div className="space-y-2 pt-2">
              <div className="flex items-center space-x-3 text-xs tracking-wider text-charcoal-100">
                <CheckCircle2 className="w-4 h-4 text-desert-bronze flex-shrink-0" />
                <span>Top Residential Sales in Pahrump over the last 5 years</span>
              </div>
              <div className="flex items-center space-x-3 text-xs tracking-wider text-charcoal-100">
                <CheckCircle2 className="w-4 h-4 text-desert-bronze flex-shrink-0" />
                <span>Deep personal knowledge of Mountain Falls golf lifestyle and valley parcels</span>
              </div>
              <div className="flex items-center space-x-3 text-xs tracking-wider text-charcoal-100">
                <CheckCircle2 className="w-4 h-4 text-desert-bronze flex-shrink-0" />
                <span>Comprehensive network of contractors, upgrade specialists, and local lenders</span>
              </div>
            </div>
          </div>

          {/* Right Column: Original Portrait & Editorial Framing */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative Editorial Border Frame */}
              <div className="absolute -inset-3 sm:-inset-4 border border-desert-bronze/30 pointer-events-none -z-0" />

              {/* Main Portrait */}
              <div className="relative z-10 bg-stone-100 overflow-hidden shadow-[0_15px_35px_rgba(25,24,23,0.08)]">
                <img
                  src="./assets/profile 1.webp"
                  alt="Marci Metzger - The Ridge Realty Group"
                  className="w-full h-auto object-cover object-center grayscale-[15%] hover:grayscale-0 transition-all duration-700 hover:scale-[1.02]"
                />

                {/* Subtitle Caption Strip */}
                <div className="bg-charcoal text-ivory p-5 flex items-center justify-between">
                  <div>
                    <h4 className="editorial-title text-sm tracking-widest uppercase">
                      Marci J Metzger
                    </h4>
                    <p className="text-[11px] tracking-wider text-desert-gold font-light">
                      The Ridge Realty Group • REALTOR®
                    </p>
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.24em] border border-white/20 px-2.5 py-1 text-ivory/80">
                    Est. 1995
                  </span>
                </div>
              </div>

              {/* Accreditation & Official Badges Bar */}
              <div className="relative z-10 mt-6 bg-white border border-stone-200/90 p-4 sm:p-5 shadow-sm">
                <div className="text-[10px] uppercase tracking-[0.22em] text-stone-500 mb-3 text-center sm:text-left font-medium">
                  Verified Industry Accreditations & Affiliations
                </div>
                <div className="grid grid-cols-4 gap-3 items-center justify-items-center">
                  <div className="text-center group" title="The Ridge Realty Group">
                    <img
                      src="./assets/logo1.webp"
                      alt="The Ridge Realty Group"
                      className="h-10 w-10 object-contain mx-auto"
                    />
                    <span className="text-[8px] uppercase tracking-wider text-stone-500 block mt-1">
                      The Ridge
                    </span>
                  </div>
                  <div className="text-center group" title="National Association of REALTORS®">
                    <img
                      src="./assets/logo3.webp"
                      alt="REALTOR® Pin"
                      className="h-10 w-auto object-contain mx-auto"
                    />
                    <span className="text-[8px] uppercase tracking-wider text-stone-500 block mt-1">
                      REALTOR®
                    </span>
                  </div>
                  <div className="text-center group" title="Equal Housing Opportunity">
                    <img
                      src="./assets/logo2.webp"
                      alt="Equal Housing Opportunity"
                      className="h-9 w-auto object-contain mx-auto"
                    />
                    <span className="text-[8px] uppercase tracking-wider text-stone-500 block mt-1">
                      Equal Housing
                    </span>
                  </div>
                  <div className="text-center group" title="Pahrump Valley Chamber of Commerce">
                    <img
                      src="./assets/logo4.webp"
                      alt="Pahrump Valley Chamber of Commerce"
                      className="h-10 w-auto object-contain mx-auto"
                    />
                    <span className="text-[8px] uppercase tracking-wider text-stone-500 block mt-1">
                      Chamber
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
