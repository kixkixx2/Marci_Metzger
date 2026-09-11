import { useState, useMemo } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Sell } from './components/Sell';
import { Buy } from './components/Buy';
import { PropertySearch } from './components/PropertySearch';
import { FeaturedProperties } from './components/FeaturedProperties';
import { Services } from './components/Services';
import { Gallery } from './components/Gallery';
import { FinalCTA } from './components/FinalCTA';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FEATURED_PROPERTIES } from './data/content';
import { Property, SearchFilterState } from './types';

export function App() {
  const [searchFilters, setSearchFilters] = useState<SearchFilterState>({
    location: 'all',
    propertyType: 'all',
    beds: 'any',
    baths: 'any',
    minPrice: 0,
    maxPrice: 2000000,
    sortBy: 'featured',
  });

  const [inquirySubject, setInquirySubject] = useState<string>('Buying in Pahrump');

  // Filter properties in real time
  const filteredProperties = useMemo(() => {
    return FEATURED_PROPERTIES.filter((prop) => {
      // Location filter
      if (searchFilters.location !== 'all' && prop.neighborhood !== searchFilters.location) {
        return false;
      }
      // Property type filter
      if (searchFilters.propertyType !== 'all' && prop.type !== searchFilters.propertyType) {
        return false;
      }
      // Bedrooms filter
      if (searchFilters.beds !== 'any') {
        const requiredBeds = parseInt(searchFilters.beds, 10);
        if (prop.beds < requiredBeds) return false;
      }
      // Bathrooms filter
      if (searchFilters.baths !== 'any') {
        const requiredBaths = parseInt(searchFilters.baths, 10);
        if (prop.baths < requiredBaths) return false;
      }
      // Price range
      if (prop.price < searchFilters.minPrice) return false;
      if (searchFilters.maxPrice > 0 && prop.price > searchFilters.maxPrice) return false;

      return true;
    });
  }, [searchFilters]);

  const handleSelectPropertyForInquiry = (property: Property) => {
    setInquirySubject(`Inquiry: ${property.title} (${property.formattedPrice})`);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-ivory text-charcoal font-sans flex flex-col selection:bg-desert-gold/20 selection:text-charcoal overflow-x-hidden">
      {/* 01 — NAVIGATION */}
      <Navbar />

      {/* Main Page Publication Flow */}
      <main className="flex-grow">
        {/* 02 — HERO */}
        <Hero />

        {/* 03 — ABOUT */}
        <About />

        {/* 04 — SELL */}
        <Sell />

        {/* 05 — BUY */}
        <Buy />

        {/* 06 — PROPERTY SEARCH */}
        <PropertySearch
          onFilterChange={(newFilters) => setSearchFilters(newFilters)}
          resultCount={filteredProperties.length}
        />

        {/* 07 — FEATURED PROPERTIES */}
        <FeaturedProperties
          properties={filteredProperties.length > 0 ? filteredProperties : FEATURED_PROPERTIES}
          onSelectPropertyForInquiry={handleSelectPropertyForInquiry}
        />

        {/* 08 — SERVICES */}
        <Services />

        {/* 09 — GALLERY */}
        <Gallery />

        {/* 10 — FINAL CTA */}
        <FinalCTA />

        {/* 11 — CONTACT */}
        <Contact initialSubject={inquirySubject} />
      </main>

      {/* 12 — FOOTER */}
      <Footer />
    </div>
  );
}

export default App;
