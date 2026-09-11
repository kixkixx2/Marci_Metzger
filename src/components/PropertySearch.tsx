import React, { useState } from 'react';
import { Search, MapPin, Building, Bed, Bath, DollarSign, RotateCcw } from 'lucide-react';
import { SearchFilterState } from '../types';

interface PropertySearchProps {
  onFilterChange: (filters: SearchFilterState) => void;
  resultCount: number;
}

export const PropertySearch: React.FC<PropertySearchProps> = ({ onFilterChange, resultCount }) => {
  const initialFilters: SearchFilterState = {
    location: 'all',
    propertyType: 'all',
    beds: 'any',
    baths: 'any',
    minPrice: 0,
    maxPrice: 2000000,
    sortBy: 'featured',
  };

  const [filters, setFilters] = useState<SearchFilterState>(initialFilters);

  const handleInputChange = (field: keyof SearchFilterState, value: any) => {
    const updated = { ...filters, [field]: value };
    setFilters(updated);
    onFilterChange(updated);
  };

  const handleReset = () => {
    setFilters(initialFilters);
    onFilterChange(initialFilters);
  };

  const handleSearchClick = (e: React.FormEvent) => {
    e.preventDefault();
    onFilterChange(filters);
    const propSection = document.getElementById('properties');
    if (propSection) {
      propSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="search" className="py-20 bg-cream/70 border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Editorial Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="editorial-subheading text-xs tracking-[0.26em] text-desert-bronze block">
            06 — Property Search
          </span>
          <h2 className="editorial-title text-3xl sm:text-4xl text-charcoal font-normal uppercase tracking-tight">
            Discover Nevada Living
          </h2>
          <p className="font-editorial italic text-stone-600 text-base sm:text-lg">
            Curate residences, golf course fairways, and desert parcels tailored to your vision.
          </p>
        </div>

        {/* Luxury Search Bar Container */}
        <div className="bg-ivory border border-stone-300/80 shadow-[0_10px_30px_rgba(25,24,23,0.04)] p-6 sm:p-8 lg:p-10">
          <form onSubmit={handleSearchClick} className="space-y-6">
            {/* Primary Filter Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {/* Location */}
              <div className="space-y-2">
                <label className="flex items-center space-x-2 text-[11px] uppercase tracking-[0.2em] font-semibold text-charcoal-50">
                  <MapPin className="w-3.5 h-3.5 text-desert-bronze" />
                  <span>Location / Area</span>
                </label>
                <div className="relative">
                  <select
                    value={filters.location}
                    onChange={(e) => handleInputChange('location', e.target.value)}
                    className="w-full bg-white border border-stone-300 text-charcoal text-xs tracking-wider py-3 px-3.5 focus:outline-none focus:border-desert-bronze appearance-none font-normal"
                  >
                    <option value="all">All Pahrump & Southern NV</option>
                    <option value="Mountain Falls">Mountain Falls Community</option>
                    <option value="Artesia">Artesia Park Estates</option>
                    <option value="Charleston Peak">Charleston Peak Foothills</option>
                    <option value="Highway 160 Corridor">HW-160 Commercial Corridor</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-stone-500 text-[10px]">
                    ▼
                  </div>
                </div>
              </div>

              {/* Property Type */}
              <div className="space-y-2">
                <label className="flex items-center space-x-2 text-[11px] uppercase tracking-[0.2em] font-semibold text-charcoal-50">
                  <Building className="w-3.5 h-3.5 text-desert-bronze" />
                  <span>Property Type</span>
                </label>
                <div className="relative">
                  <select
                    value={filters.propertyType}
                    onChange={(e) => handleInputChange('propertyType', e.target.value)}
                    className="w-full bg-white border border-stone-300 text-charcoal text-xs tracking-wider py-3 px-3.5 focus:outline-none focus:border-desert-bronze appearance-none font-normal"
                  >
                    <option value="all">All Property Types</option>
                    <option value="Luxury Estate">Luxury Estate</option>
                    <option value="Golf Course Home">Golf Course Home</option>
                    <option value="Single Family">Single Family Residence</option>
                    <option value="Acreage / Ranch">Acreage / Desert Ranch</option>
                    <option value="Commercial">Commercial & Retail</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-stone-500 text-[10px]">
                    ▼
                  </div>
                </div>
              </div>

              {/* Bedrooms */}
              <div className="space-y-2">
                <label className="flex items-center space-x-2 text-[11px] uppercase tracking-[0.2em] font-semibold text-charcoal-50">
                  <Bed className="w-3.5 h-3.5 text-desert-bronze" />
                  <span>Bedrooms</span>
                </label>
                <div className="relative">
                  <select
                    value={filters.beds}
                    onChange={(e) => handleInputChange('beds', e.target.value)}
                    className="w-full bg-white border border-stone-300 text-charcoal text-xs tracking-wider py-3 px-3.5 focus:outline-none focus:border-desert-bronze appearance-none font-normal"
                  >
                    <option value="any">Any Bedrooms</option>
                    <option value="2">2+ Bedrooms</option>
                    <option value="3">3+ Bedrooms</option>
                    <option value="4">4+ Bedrooms</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-stone-500 text-[10px]">
                    ▼
                  </div>
                </div>
              </div>

              {/* Bathrooms */}
              <div className="space-y-2">
                <label className="flex items-center space-x-2 text-[11px] uppercase tracking-[0.2em] font-semibold text-charcoal-50">
                  <Bath className="w-3.5 h-3.5 text-desert-bronze" />
                  <span>Bathrooms</span>
                </label>
                <div className="relative">
                  <select
                    value={filters.baths}
                    onChange={(e) => handleInputChange('baths', e.target.value)}
                    className="w-full bg-white border border-stone-300 text-charcoal text-xs tracking-wider py-3 px-3.5 focus:outline-none focus:border-desert-bronze appearance-none font-normal"
                  >
                    <option value="any">Any Bathrooms</option>
                    <option value="2">2+ Bathrooms</option>
                    <option value="3">3+ Bathrooms</option>
                    <option value="4">4+ Bathrooms</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-stone-500 text-[10px]">
                    ▼
                  </div>
                </div>
              </div>
            </div>

            {/* Price Range & Sort (Advanced Row) */}
            <div className="pt-4 border-t border-stone-200/80 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-5">
              <div className="flex flex-wrap items-center gap-4 text-xs">
                <div className="flex items-center space-x-2">
                  <DollarSign className="w-3.5 h-3.5 text-desert-bronze" />
                  <span className="font-semibold text-charcoal-50 uppercase tracking-wider text-[11px]">
                    Price Range:
                  </span>
                </div>

                <div className="flex items-center space-x-2">
                  <select
                    value={filters.minPrice}
                    onChange={(e) => handleInputChange('minPrice', Number(e.target.value))}
                    className="bg-white border border-stone-300 py-1.5 px-3 text-xs text-charcoal focus:outline-none focus:border-desert-bronze"
                  >
                    <option value={0}>Min Price (Any)</option>
                    <option value={400000}>$400,000</option>
                    <option value={600000}>$600,000</option>
                    <option value={800000}>$800,000</option>
                    <option value={1000000}>$1,000,000</option>
                  </select>
                  <span className="text-stone-400">to</span>
                  <select
                    value={filters.maxPrice}
                    onChange={(e) => handleInputChange('maxPrice', Number(e.target.value))}
                    className="bg-white border border-stone-300 py-1.5 px-3 text-xs text-charcoal focus:outline-none focus:border-desert-bronze"
                  >
                    <option value={2000000}>Max Price (Any)</option>
                    <option value={750000}>$750,000</option>
                    <option value={1000000}>$1,000,000</option>
                    <option value={1500000}>$1,500,000</option>
                    <option value={2000000}>$2,000,000+</option>
                  </select>
                </div>

                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center space-x-1.5 text-stone-500 hover:text-desert-bronze transition-colors text-xs ml-2"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Reset Filters</span>
                </button>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center space-x-4">
                <span className="text-xs text-stone-500 font-editorial italic hidden sm:inline">
                  Showing {resultCount} matching property {resultCount === 1 ? 'record' : 'records'}
                </span>

                <button
                  type="submit"
                  className="flex-1 sm:flex-none inline-flex items-center justify-center space-x-2.5 px-8 py-3 bg-charcoal text-ivory hover:bg-desert-bronze transition-colors text-xs uppercase tracking-[0.2em] font-medium shadow-sm"
                >
                  <Search className="w-3.5 h-3.5" />
                  <span>Search Properties</span>
                </button>
              </div>
            </div>
          </form>
        </div>

        {/* Future API Gateway Note */}
        <div className="mt-4 flex flex-col sm:flex-row items-center justify-between text-[11px] text-stone-500 px-2">
          <div className="flex items-center space-x-2 mb-1 sm:mb-0">
            <span className="w-1.5 h-1.5 rounded-full bg-desert-gold" />
            <span>Southern Nevada Regional MLS Gateway Ready</span>
          </div>
          <span className="font-light italic">
            Curated showcasing The Ridge Realty Group inventory & Pahrump market listings
          </span>
        </div>
      </div>
    </section>
  );
};
