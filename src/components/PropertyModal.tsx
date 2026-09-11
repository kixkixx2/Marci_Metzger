import { useState } from 'react';
import { X, Check } from 'lucide-react';
import { Property } from '../types';
import { BUSINESS_INFO } from '../data/content';

interface PropertyModalProps {
  property: Property | null;
  onClose: () => void;
  onInquire: (property: Property) => void;
}

export const PropertyModal: React.FC<PropertyModalProps> = ({ property, onClose, onInquire }) => {
  if (!property) return null;

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const images = [property.image, ...(property.additionalImages || [])];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-charcoal/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 lg:p-8 animate-fadeIn">
      <div
        className="fixed inset-0"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative bg-ivory w-full max-w-5xl shadow-2xl border border-stone-200 overflow-hidden z-10 max-h-[92vh] flex flex-col">
        {/* Modal Header Bar */}
        <div className="px-6 py-4 border-b border-stone-200 flex items-center justify-between bg-cream/60">
          <div>
            <span className="text-[10px] uppercase tracking-[0.24em] font-semibold text-desert-bronze">
              {property.type} • {property.neighborhood}
            </span>
            <h3 className="editorial-title text-xl text-charcoal font-medium">
              {property.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-charcoal-50 hover:text-charcoal hover:bg-stone-200/50 rounded-none transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
          {/* Main Visual Carousel */}
          <div className="space-y-3">
            <div className="relative h-[320px] sm:h-[440px] bg-stone-900 overflow-hidden">
              <img
                src={images[activeImageIndex]}
                alt={property.title}
                className="w-full h-full object-cover object-center transition-all duration-500"
              />
              <div className="absolute top-4 left-4 bg-charcoal/85 backdrop-blur-sm text-ivory px-3 py-1 text-xs tracking-widest uppercase">
                {property.status}
              </div>
              <div className="absolute bottom-4 right-4 bg-charcoal/90 text-desert-gold px-4 py-1.5 editorial-title text-xl font-medium">
                {property.formattedPrice}
              </div>
            </div>

            {/* Thumbnail selector */}
            {images.length > 1 && (
              <div className="flex items-center space-x-3 overflow-x-auto pb-2">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative w-20 h-14 flex-shrink-0 overflow-hidden border-2 transition-all ${
                      activeImageIndex === idx
                        ? 'border-desert-bronze opacity-100'
                        : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Quick Specifications Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 bg-cream/70 border border-stone-200 text-center">
            <div>
              <span className="text-[10px] uppercase tracking-widest text-stone-500 block">Bedrooms</span>
              <span className="editorial-title text-xl text-charcoal font-medium">{property.beds} Beds</span>
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-widest text-stone-500 block">Bathrooms</span>
              <span className="editorial-title text-xl text-charcoal font-medium">{property.baths} Baths</span>
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-widest text-stone-500 block">Living Area</span>
              <span className="editorial-title text-xl text-charcoal font-medium">{property.sqft.toLocaleString()} Sq Ft</span>
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-widest text-stone-500 block">Parcel / Lot</span>
              <span className="editorial-title text-xl text-charcoal font-medium">{property.lotSize || 'Generous'}</span>
            </div>
          </div>

          {/* Editorial Description */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-[0.24em] font-semibold text-desert-bronze">
              Architectural Overview & Setting
            </h4>
            <p className="font-editorial text-xl sm:text-2xl text-charcoal italic leading-relaxed">
              "{property.subtitle}"
            </p>
            <p className="text-sm sm:text-base text-charcoal-50 leading-relaxed font-light">
              {property.description}
            </p>
          </div>

          {/* Key Features List */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-[0.24em] font-semibold text-desert-bronze">
              Notable Property Amenities
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {property.features.map((feat, idx) => (
                <div key={idx} className="flex items-start space-x-3 text-xs text-charcoal-100">
                  <Check className="w-4 h-4 text-desert-bronze flex-shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Location & Agent Verification Box */}
          <div className="p-6 bg-white border border-stone-200/90 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center space-x-4">
              <img
                src="./assets/profile.webp"
                alt="Marci Metzger"
                className="w-14 h-14 object-cover rounded-none border border-stone-200 flex-shrink-0"
              />
              <div>
                <p className="editorial-title text-sm text-charcoal tracking-wider uppercase">
                  Listed & Represented By Marci Metzger
                </p>
                <p className="text-xs text-desert-bronze">
                  The Ridge Realty Group • Pahrump, Nevada
                </p>
                <p className="text-xs text-stone-500 mt-1">
                  Location: {property.location}
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-3 w-full sm:w-auto">
              <a
                href={`tel:${BUSINESS_INFO.phones.primaryRaw}`}
                className="w-full sm:w-auto text-center px-5 py-2.5 border border-charcoal text-charcoal text-xs uppercase tracking-widest hover:bg-charcoal hover:text-ivory transition-colors"
              >
                Call: {BUSINESS_INFO.phones.primary}
              </a>
              <button
                onClick={() => {
                  onClose();
                  onInquire(property);
                }}
                className="w-full sm:w-auto text-center px-6 py-2.5 bg-desert-bronze text-white text-xs uppercase tracking-widest hover:bg-desert-dark transition-colors font-medium shadow-sm"
              >
                Inquire Directly
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
