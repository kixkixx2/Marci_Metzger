import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ArrowUpRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

interface NavbarProps {
  onOpenContactModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-ivory/95 backdrop-blur-md shadow-[0_1px_15px_rgba(25,24,23,0.05)] border-b border-stone-200/60 py-3.5'
            : 'bg-gradient-to-b from-charcoal/60 via-charcoal/20 to-transparent py-5 lg:py-6 text-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
          {/* Brand Identity */}
          <a
            href="#"
            className="group flex flex-col transition-opacity hover:opacity-90 focus:outline-none"
            aria-label="Marci Metzger - The Ridge Realty Group"
          >
            <span
              className={`editorial-title text-base sm:text-lg tracking-[0.18em] uppercase transition-colors duration-300 font-medium ${
                scrolled ? 'text-charcoal' : 'text-white'
              }`}
            >
              Marci Metzger
            </span>
            <span
              className={`editorial-subheading text-[9px] tracking-[0.25em] transition-colors duration-300 -mt-0.5 ${
                scrolled ? 'text-desert-bronze' : 'text-ivory/80'
              }`}
            >
              The Ridge Realty Group • Pahrump, NV
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-8" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`text-xs uppercase tracking-[0.2em] font-medium transition-colors duration-200 relative py-1 hover:text-desert-bronze focus:outline-none ${
                  scrolled ? 'text-charcoal-50 hover:text-charcoal' : 'text-white/85 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA & Phone Actions */}
          <div className="hidden sm:flex items-center space-x-4">
            <a
              href={`tel:${BUSINESS_INFO.phones.primaryRaw}`}
              className={`inline-flex items-center space-x-2 text-xs tracking-wider transition-colors duration-200 px-3 py-1.5 border ${
                scrolled
                  ? 'border-stone-200 text-charcoal hover:border-desert-bronze hover:text-desert-bronze'
                  : 'border-white/30 text-white hover:border-white'
              }`}
              title="Call Marci Metzger directly"
            >
              <Phone className="w-3 h-3 text-desert-bronze" />
              <span>{BUSINESS_INFO.phones.primary}</span>
            </a>

            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className={`text-xs uppercase tracking-[0.2em] font-medium px-5 py-2.5 transition-all duration-300 ${
                scrolled
                  ? 'bg-charcoal text-ivory hover:bg-desert-bronze hover:text-white'
                  : 'bg-white text-charcoal hover:bg-ivory hover:shadow-lg'
              }`}
            >
              Let's Talk
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden p-2 rounded-none transition-colors focus:outline-none ${
              scrolled ? 'text-charcoal' : 'text-white'
            }`}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ease-in-out ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop overlay */}
        <div
          className="fixed inset-0 bg-charcoal/70 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Slide-out drawer */}
        <div
          className={`fixed top-0 right-0 bottom-0 w-full max-w-sm bg-ivory border-l border-stone-200 shadow-2xl p-8 flex flex-col justify-between transition-transform duration-500 ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div>
            <div className="flex items-center justify-between pb-6 border-b border-stone-200">
              <div>
                <p className="editorial-title text-base text-charcoal tracking-widest uppercase">
                  Marci Metzger
                </p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-desert-bronze">
                  The Ridge Realty Group
                </p>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-charcoal-50 hover:text-charcoal focus:outline-none"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation links */}
            <nav className="mt-8 flex flex-col space-y-4">
              {navLinks.map((link, idx) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="flex items-center justify-between text-sm uppercase tracking-[0.22em] text-charcoal-100 hover:text-desert-bronze py-2.5 border-b border-stone-100 transition-colors"
                >
                  <span>
                    <span className="text-desert-bronze/60 text-xs mr-3">0{idx + 1}</span>
                    {link.label}
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-stone-400" />
                </a>
              ))}
            </nav>
          </div>

          {/* Footer of Drawer */}
          <div className="pt-6 border-t border-stone-200 space-y-4">
            <a
              href={`tel:${BUSINESS_INFO.phones.primaryRaw}`}
              className="flex items-center justify-center space-x-2 text-xs uppercase tracking-widest py-3 border border-charcoal text-charcoal hover:bg-charcoal hover:text-ivory transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-desert-bronze" />
              <span>Call: {BUSINESS_INFO.phones.primary}</span>
            </a>

            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="block text-center text-xs uppercase tracking-widest py-3 bg-desert-bronze text-white hover:bg-desert-dark transition-colors font-medium"
            >
              Schedule Consultation
            </a>

            <p className="text-[10px] text-center text-charcoal-50 tracking-wider">
              Open Daily 8:00 AM – 7:00 PM • Pahrump, NV
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
