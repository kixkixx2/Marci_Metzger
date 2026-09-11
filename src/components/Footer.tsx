import React from 'react';
import { ArrowUp } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Sell', href: '#sell' },
    { label: 'Buy', href: '#buy' },
    { label: 'Search', href: '#search' },
    { label: 'Properties', href: '#properties' },
    { label: 'Services', href: '#services' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-charcoal-400 text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Top Tier: Brand, Navigation, and Scroll-to-Top */}
        <div className="flex flex-col lg:flex-row lg:items-start justify-between pb-12 border-b border-stone-800 gap-10">
          <div className="space-y-4 max-w-md">
            <div>
              <h3 className="editorial-title text-xl text-white tracking-[0.2em] uppercase font-medium">
                Marci Metzger
              </h3>
              <p className="editorial-subheading text-xs text-desert-gold tracking-[0.26em] -mt-0.5">
                The Ridge Realty Group • Pahrump, NV
              </p>
            </div>
            <p className="text-xs text-stone-400 leading-relaxed font-light">
              Over two decades in real estate. Licensed Broker in Washington State, now serving Southern Nevada as Pahrump's premier real estate professional.
            </p>
            <div className="text-xs text-stone-400 space-y-1 pt-1">
              <p>{BUSINESS_INFO.address.street}, {BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.state} {BUSINESS_INFO.address.zip}</p>
              <p>Direct: <a href={`tel:${BUSINESS_INFO.phones.primaryRaw}`} className="hover:text-white transition-colors">{BUSINESS_INFO.phones.primary}</a></p>
              <p>Email: <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-white transition-colors">{BUSINESS_INFO.email}</a></p>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-xs uppercase tracking-[0.2em]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-stone-400 hover:text-white transition-colors py-1"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Scroll to Top Trigger */}
          <div>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.2em] text-desert-gold hover:text-white transition-colors border border-stone-800 px-4 py-2.5"
              aria-label="Scroll back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Middle Tier: Official Industry Accreditations & Social Connections */}
        <div className="py-10 flex flex-col md:flex-row items-center justify-between border-b border-stone-800 gap-8">
          {/* Official Emblems */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-6">
            <div className="flex items-center space-x-2">
              <img
                src="./assets/logo1.webp"
                alt="The Ridge Realty Group"
                className="h-8 w-8 object-contain filter brightness-90"
              />
              <span className="text-[10px] uppercase tracking-wider text-stone-400">
                The Ridge Realty Group
              </span>
            </div>

            <div className="flex items-center space-x-2">
              <img
                src="./assets/logo3.webp"
                alt="National Association of REALTORS®"
                className="h-7 w-auto object-contain filter brightness-90"
              />
              <span className="text-[10px] uppercase tracking-wider text-stone-400">
                REALTOR®
              </span>
            </div>

            <div className="flex items-center space-x-2">
              <img
                src="./assets/logo2.webp"
                alt="Equal Housing Opportunity"
                className="h-7 w-auto object-contain filter invert brightness-90"
              />
              <span className="text-[10px] uppercase tracking-wider text-stone-400">
                Equal Housing
              </span>
            </div>

            <div className="flex items-center space-x-2">
              <img
                src="./assets/logo4.webp"
                alt="Pahrump Valley Chamber of Commerce"
                className="h-8 w-auto object-contain filter brightness-90"
              />
              <span className="text-[10px] uppercase tracking-wider text-stone-400">
                Chamber Member
              </span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-6 text-xs uppercase tracking-widest text-stone-400">
            <a
              href={BUSINESS_INFO.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-desert-gold transition-colors"
            >
              Facebook
            </a>
            <a
              href={BUSINESS_INFO.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-desert-gold transition-colors"
            >
              Instagram
            </a>
            <a
              href={BUSINESS_INFO.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-desert-gold transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={BUSINESS_INFO.social.yelp}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-desert-gold transition-colors"
            >
              Yelp
            </a>
          </div>
        </div>

        {/* Bottom Tier: Copyright & Disclaimers */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-[11px] text-stone-500 font-light space-y-2 md:space-y-0 text-center md:text-left">
          <p>
            Copyright © 2026 Marci METZGER - All Rights Reserved. The Ridge Realty Group.
          </p>
          <p>
            Website redesigned with understated editorial luxury for Pahrump, Nevada.
          </p>
        </div>
      </div>
    </footer>
  );
};
