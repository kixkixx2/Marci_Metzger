import React from 'react';
import { ArrowUpRight, Compass, KeyRound, Hammer, Sun } from 'lucide-react';

export const Buy: React.FC = () => {
  const scrollToSearch = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.getElementById('search');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const buyerHighlights = [
    {
      icon: Compass,
      title: 'Local Neighborhood Expertise',
      description: 'Nobody knows the market like we do. From Mountain Falls golf homes to custom valley acreage, enjoy having an authentic local pro at your service.',
    },
    {
      icon: Hammer,
      title: 'Contractors on Speed Dial',
      description: 'Receive vetted inspection specialists, trusted general contractors, and proven renovation advisors immediately ready to serve you.',
    },
    {
      icon: KeyRound,
      title: 'Upgrades & Value Analysis',
      description: 'Insightful market valuations and upgrade feasibility lists so you purchase with total clarity on equity and long-term appreciation.',
    },
    {
      icon: Sun,
      title: 'Southern Nevada Lifestyle',
      description: 'Mountain views, 300+ days of desert sunshine, low Nevada tax advantages, and easy 45-minute access to Las Vegas amenities.',
    },
  ];

  return (
    <section id="buy" className="py-24 lg:py-32 bg-ivory text-charcoal border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-10 border-b border-stone-300/60 mb-16">
          <div>
            <span className="editorial-subheading text-xs tracking-[0.24em] text-desert-bronze block mb-2">
              05 — Buyer Advisory
            </span>
            <h2 className="editorial-title text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-charcoal font-normal">
              Find Your Place <br />
              <span className="italic font-editorial font-light lowercase text-desert-bronze">in</span> Southern Nevada.
            </h2>
          </div>

          <div className="mt-4 md:mt-0 text-left md:text-right max-w-sm">
            <p className="font-editorial italic text-stone-600 text-lg sm:text-xl">
              "Working or retired, fast-paced or looking to relax... there's a place for you here."
            </p>
          </div>
        </div>

        {/* Editorial Grid: Text on Left, Visuals on Right (Inverted compared to Sell for rhythm) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Narrative & Guidance */}
          <div className="lg:col-span-5 space-y-8 order-2 lg:order-1">
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-[0.24em] text-desert-bronze font-semibold">
                Guide to Buyers
              </span>
              <h3 className="font-editorial text-2xl sm:text-3xl text-charcoal leading-tight font-normal">
                Enjoy having an established advocate who lives, works, and plays right here.
              </h3>
              <p className="text-sm sm:text-base text-charcoal-50 leading-relaxed font-light">
                Whether you are relocating from Washington State, California, or the Las Vegas strip, or seeking your retirement sanctuary in Mountain Falls, Marci Metzger provides personal concierge representation. Large or small, condo or custom mansion, we help you find where to invest your hard-earned dollars.
              </p>
            </div>

            {/* Buyer Guidance Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-stone-300/50">
              {buyerHighlights.map((highlight) => {
                const Icon = highlight.icon;
                return (
                  <div key={highlight.title} className="space-y-1.5">
                    <div className="flex items-center space-x-2">
                      <Icon className="w-4 h-4 text-desert-bronze" />
                      <h4 className="text-xs uppercase tracking-wider font-semibold text-charcoal">
                        {highlight.title}
                      </h4>
                    </div>
                    <p className="text-xs text-charcoal-50 leading-relaxed font-light">
                      {highlight.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* CTA action */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
              <a
                href="#search"
                onClick={scrollToSearch}
                className="inline-flex items-center justify-center space-x-3 px-7 py-3.5 bg-charcoal text-ivory text-xs uppercase tracking-[0.2em] font-medium hover:bg-desert-bronze transition-colors shadow-sm"
              >
                <span>Search Available Homes</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <a
                href="#contact"
                className="text-center text-xs tracking-wider text-charcoal-100 hover:text-desert-bronze py-2 transition-colors font-medium"
              >
                Request Relocation Guide
              </a>
            </div>
          </div>

          {/* Right Visual Stack: 2.webp (Twilight pool estate) with 3.webp (Keys vignette) */}
          <div className="lg:col-span-7 relative group order-1 lg:order-2">
            <div className="relative overflow-hidden bg-stone-200 shadow-md">
              <img
                src="./assets/2.webp"
                alt="Spanish style luxury villa with illuminated pool and mountain views in Pahrump"
                className="w-full h-[380px] sm:h-[480px] object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-charcoal/15 group-hover:bg-transparent transition-colors duration-500" />
            </div>

            {/* Inset Second Image Vignette: New Home Keys on Wood (3.webp) */}
            <div className="absolute -bottom-6 -left-4 sm:bottom-6 sm:left-6 bg-white p-3 sm:p-4 border border-stone-200/90 shadow-2xl max-w-[200px] sm:max-w-[260px] hidden xs:block">
              <div className="overflow-hidden mb-2">
                <img
                  src="./assets/3.webp"
                  alt="New home keys"
                  className="w-full h-24 sm:h-28 object-cover"
                />
              </div>
              <div className="text-[10px] uppercase tracking-[0.18em] font-semibold text-charcoal">
                Turnkey Arrival
              </div>
              <p className="text-[10px] text-stone-500 leading-tight">
                Seamless transition into your Pahrump desert sanctuary.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
