import React, { useState } from 'react';
import { Bed, Bath, Square, ArrowUpRight, MapPin, Eye, Sparkles } from 'lucide-react';
import { Property } from '../types';
import { PropertyModal } from './PropertyModal';

interface FeaturedPropertiesProps {
  properties: Property[];
  onSelectPropertyForInquiry: (property: Property) => void;
}

export const FeaturedProperties: React.FC<FeaturedPropertiesProps> = ({
  properties,
  onSelectPropertyForInquiry,
}) => {
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);

  // Separate the grand hero property from the supporting properties
  const grandProperty = properties.find((p) => p.isFeatured) || properties[0];
  const supportingProperties = properties.filter((p) => p.id !== grandProperty?.id);

  return (
    <section id="properties" className="py-24 lg:py-32 bg-ivory text-charcoal border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-10 border-b border-stone-300/60 mb-16">
          <div>
            <div className="inline-flex items-center space-x-2 text-desert-bronze mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span className="editorial-subheading text-xs tracking-[0.24em]">
                07 — Featured Collection
              </span>
            </div>
            <h2 className="editorial-title text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-charcoal font-normal">
              Signature Residences <br />
              <span className="italic font-editorial font-light lowercase text-desert-bronze">&</span> Pahrump Living.
            </h2>
          </div>

          <div className="mt-4 md:mt-0 text-left md:text-right max-w-sm">
            <p className="font-editorial italic text-stone-600 text-base sm:text-lg">
              Representing premier golf fairway estates, contemporary architecture, and desert parcels.
            </p>
          </div>
        </div>

        {/* Asymmetric Magazine Showcase */}
        {grandProperty && (
          <div className="mb-20">
            {/* Grand Hero Property Card (Asymmetric Full-Width Banner) */}
            <div className="bg-cream/50 border border-stone-300/80 overflow-hidden shadow-sm group">
              <div className="grid grid-cols-1 lg:grid-cols-12">
                {/* Large Photography Column */}
                <div
                  className="lg:col-span-8 relative h-[380px] sm:h-[480px] lg:h-[540px] overflow-hidden cursor-pointer"
                  onClick={() => setSelectedProperty(grandProperty)}
                >
                  <img
                    src={grandProperty.image}
                    alt={grandProperty.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out"
                  />
                  <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-charcoal/10 transition-colors duration-500" />

                  {/* Status badge */}
                  <div className="absolute top-6 left-6 bg-charcoal/90 text-ivory text-[10px] uppercase tracking-[0.26em] px-3.5 py-1.5 font-medium">
                    Grand Feature • {grandProperty.status}
                  </div>

                  {/* Hover action pill */}
                  <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm text-charcoal text-xs px-4 py-2 flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Eye className="w-3.5 h-3.5 text-desert-bronze" />
                    <span className="uppercase tracking-wider font-semibold">Click to View Gallery</span>
                  </div>
                </div>

                {/* Editorial Information Column */}
                <div className="lg:col-span-4 p-8 sm:p-10 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2 text-xs uppercase tracking-[0.22em] text-desert-bronze font-semibold">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{grandProperty.neighborhood}</span>
                    </div>

                    <div className="editorial-title text-3xl sm:text-4xl text-charcoal font-medium">
                      {grandProperty.formattedPrice}
                    </div>

                    <h3 className="editorial-title text-xl sm:text-2xl text-charcoal leading-snug">
                      {grandProperty.title}
                    </h3>

                    <p className="font-editorial italic text-stone-600 text-base sm:text-lg">
                      "{grandProperty.subtitle}"
                    </p>

                    <p className="text-xs sm:text-sm text-charcoal-50 leading-relaxed font-light line-clamp-3">
                      {grandProperty.description}
                    </p>

                    {/* Metadata Grid */}
                    <div className="grid grid-cols-3 gap-3 py-4 border-y border-stone-300/60 text-center">
                      <div>
                        <span className="text-[10px] uppercase tracking-widest text-stone-500 block">Beds</span>
                        <span className="editorial-title text-lg text-charcoal">{grandProperty.beds}</span>
                      </div>
                      <div>
                        <span className="text-[10px] uppercase tracking-widest text-stone-500 block">Baths</span>
                        <span className="editorial-title text-lg text-charcoal">{grandProperty.baths}</span>
                      </div>
                      <div>
                        <span className="text-[10px] uppercase tracking-widest text-stone-500 block">Area</span>
                        <span className="editorial-title text-lg text-charcoal">{grandProperty.sqft.toLocaleString()} <span className="text-xs font-normal">sqft</span></span>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-2 flex items-center space-x-4">
                    <button
                      onClick={() => setSelectedProperty(grandProperty)}
                      className="flex-1 py-3.5 bg-charcoal text-ivory text-xs uppercase tracking-[0.2em] font-medium hover:bg-desert-bronze transition-colors text-center"
                    >
                      Explore Residence
                    </button>
                    <button
                      onClick={() => onSelectPropertyForInquiry(grandProperty)}
                      className="p-3.5 border border-charcoal text-charcoal hover:bg-charcoal hover:text-ivory transition-colors"
                      title="Direct Inquiry"
                      aria-label="Direct Inquiry for this residence"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Supporting Properties Grid (Varied Asymmetric Cards) */}
        {supportingProperties.length > 0 && (
          <div>
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-stone-200">
              <span className="text-xs uppercase tracking-[0.22em] text-desert-bronze font-semibold">
                Additional Curated Listings & Estates
              </span>
              <span className="text-xs text-stone-500 font-editorial italic">
                {supportingProperties.length} Properties in View
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {supportingProperties.map((prop) => (
                <div
                  key={prop.id}
                  className="bg-white border border-stone-200/80 shadow-sm flex flex-col justify-between group hover:border-desert-bronze/60 transition-all duration-300"
                >
                  <div>
                    {/* Image thumbnail */}
                    <div
                      className="relative h-64 overflow-hidden cursor-pointer"
                      onClick={() => setSelectedProperty(prop)}
                    >
                      <img
                        src={prop.image}
                        alt={prop.title}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-charcoal/10 group-hover:bg-transparent transition-colors" />

                      <div className="absolute top-3 left-3 bg-charcoal/85 text-ivory text-[9px] uppercase tracking-[0.22em] px-2.5 py-1">
                        {prop.type}
                      </div>

                      <div className="absolute bottom-3 right-3 bg-charcoal/90 text-desert-gold editorial-title text-base px-3 py-1 font-medium">
                        {prop.formattedPrice}
                      </div>
                    </div>

                    {/* Content Details */}
                    <div className="p-6 space-y-3">
                      <div className="text-[10px] uppercase tracking-wider text-desert-bronze font-semibold">
                        {prop.neighborhood} • {prop.status}
                      </div>

                      <h4
                        className="editorial-title text-lg text-charcoal group-hover:text-desert-bronze transition-colors cursor-pointer"
                        onClick={() => setSelectedProperty(prop)}
                      >
                        {prop.title}
                      </h4>

                      <p className="font-editorial italic text-stone-600 text-sm line-clamp-2">
                        {prop.subtitle}
                      </p>

                      {/* Specs snippet */}
                      <div className="flex items-center space-x-4 pt-3 border-t border-stone-100 text-xs text-charcoal-50">
                        {prop.beds > 0 && (
                          <div className="flex items-center space-x-1">
                            <Bed className="w-3.5 h-3.5 text-desert-bronze" />
                            <span>{prop.beds} bds</span>
                          </div>
                        )}
                        <div className="flex items-center space-x-1">
                          <Bath className="w-3.5 h-3.5 text-desert-bronze" />
                          <span>{prop.baths} ba</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Square className="w-3.5 h-3.5 text-desert-bronze" />
                          <span>{prop.sqft.toLocaleString()} sqft</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card Bottom CTA */}
                  <div className="p-6 pt-0 flex items-center justify-between border-t border-stone-100 mt-4">
                    <button
                      onClick={() => setSelectedProperty(prop)}
                      className="text-[11px] uppercase tracking-[0.2em] text-charcoal font-semibold hover:text-desert-bronze transition-colors"
                    >
                      View Details
                    </button>
                    <button
                      onClick={() => onSelectPropertyForInquiry(prop)}
                      className="inline-flex items-center space-x-1 text-[11px] uppercase tracking-wider text-desert-bronze hover:text-desert-dark transition-colors"
                    >
                      <span>Inquire</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Curated Demo Note */}
        <div className="mt-16 text-center text-xs text-stone-500 font-editorial italic max-w-xl mx-auto border-t border-stone-200 pt-6">
          * Properties presented illustrate the caliber of architectural estates and parcels represented by Marci Metzger and The Ridge Realty Group across Pahrump and Southern Nevada.
        </div>
      </div>

      {/* Property Detail Modal */}
      <PropertyModal
        property={selectedProperty}
        onClose={() => setSelectedProperty(null)}
        onInquire={(prop) => {
          setSelectedProperty(null);
          onSelectPropertyForInquiry(prop);
        }}
      />
    </section>
  );
};
