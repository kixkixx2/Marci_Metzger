import React, { useState } from 'react';
import { Camera, Maximize2, MapPin } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/content';
import { GalleryItem } from '../types';
import { GalleryLightbox } from './GalleryLightbox';

export const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = ['All', 'Community', 'Residences', 'Landscape', 'Interiors'];

  const filteredItems = selectedCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  const handleOpenLightbox = (item: GalleryItem) => {
    const idx = GALLERY_ITEMS.findIndex((i) => i.id === item.id);
    if (idx !== -1) {
      setLightboxIndex(idx);
    }
  };

  return (
    <section id="gallery" className="py-24 lg:py-32 bg-ivory text-charcoal border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-10 border-b border-stone-300/60 mb-12">
          <div>
            <div className="inline-flex items-center space-x-2 text-desert-bronze mb-2">
              <Camera className="w-3.5 h-3.5" />
              <span className="editorial-subheading text-xs tracking-[0.24em]">
                09 — Visual Portfolio
              </span>
            </div>
            <h2 className="editorial-title text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-charcoal font-normal">
              Desert Light <br />
              <span className="italic font-editorial font-light lowercase text-desert-bronze">&</span> Landscape.
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 mt-6 md:mt-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs uppercase tracking-[0.2em] transition-all ${
                  selectedCategory === cat
                    ? 'bg-charcoal text-ivory font-medium shadow-sm'
                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200 hover:text-charcoal'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Asymmetric Editorial Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 items-start">
          {filteredItems.map((item, idx) => {
            // Curate asymmetric column widths for rich magazine balance
            const isFirst = idx === 0;
            const isWide = item.aspectRatio === 'wide';
            const colSpan = isFirst
              ? 'lg:col-span-8 md:col-span-2'
              : isWide
              ? 'lg:col-span-6'
              : 'lg:col-span-4';

            const heightClass = isFirst
              ? 'h-[400px] sm:h-[480px]'
              : isWide
              ? 'h-[320px] sm:h-[360px]'
              : 'h-[320px] sm:h-[360px]';

            return (
              <div
                key={item.id}
                className={`${colSpan} group relative overflow-hidden bg-stone-200 cursor-pointer border border-stone-300/40 shadow-sm`}
                onClick={() => handleOpenLightbox(item)}
              >
                {/* Photo */}
                <div className={`w-full ${heightClass} overflow-hidden`}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-charcoal/40 transition-colors duration-500" />
                </div>

                {/* Category Badge Top Left */}
                <div className="absolute top-4 left-4 bg-charcoal/85 backdrop-blur-sm text-ivory text-[9px] uppercase tracking-[0.22em] px-2.5 py-1">
                  {item.category}
                </div>

                {/* Hover Maximize Icon */}
                <div className="absolute top-4 right-4 p-2 bg-charcoal/80 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>

                {/* Bottom Overlay Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-charcoal via-charcoal/80 to-transparent text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="editorial-title text-sm sm:text-base tracking-wider font-medium text-white">
                    {item.title}
                  </h3>
                  <div className="flex items-center space-x-1.5 text-[11px] text-desert-gold mt-1">
                    <MapPin className="w-3 h-3" />
                    <span>{item.location}</span>
                  </div>
                  <p className="text-[11px] text-stone-300 font-light line-clamp-2 mt-1 hidden sm:block">
                    {item.caption}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Editorial Subnote */}
        <div className="mt-12 text-center">
          <p className="font-editorial italic text-stone-600 text-sm">
            Click any photograph to enter the full high-resolution editorial inspection viewer.
          </p>
        </div>
      </div>

      {/* Lightbox Modal */}
      <GalleryLightbox
        items={GALLERY_ITEMS}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(idx) => setLightboxIndex(idx)}
      />
    </section>
  );
};
