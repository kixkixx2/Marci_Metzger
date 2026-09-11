import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
import { GalleryItem } from '../types';

interface GalleryLightboxProps {
  items: GalleryItem[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export const GalleryLightbox: React.FC<GalleryLightboxProps> = ({
  items,
  currentIndex,
  onClose,
  onNavigate,
}) => {
  if (currentIndex === null || !items[currentIndex]) return null;

  const current = items[currentIndex];

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    onNavigate((currentIndex - 1 + items.length) % items.length);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    onNavigate((currentIndex + 1) % items.length);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onNavigate((currentIndex - 1 + items.length) % items.length);
      if (e.key === 'ArrowRight') onNavigate((currentIndex + 1) % items.length);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, items.length, onClose, onNavigate]);

  return (
    <div
      className="fixed inset-0 z-50 bg-charcoal/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 select-none"
      onClick={onClose}
    >
      {/* Top control bar */}
      <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-20 text-white">
        <div className="flex items-center space-x-3">
          <span className="text-[10px] uppercase tracking-[0.24em] text-desert-gold border border-desert-gold/30 px-2.5 py-1">
            {current.category}
          </span>
          <span className="text-xs tracking-wider text-stone-300 hidden sm:inline">
            {currentIndex + 1} / {items.length}
          </span>
        </div>

        <button
          onClick={onClose}
          className="p-2 text-stone-300 hover:text-white transition-colors focus:outline-none"
          aria-label="Close lightbox"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 p-3 bg-charcoal/60 hover:bg-charcoal text-white/80 hover:text-white border border-white/20 transition-all"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 p-3 bg-charcoal/60 hover:bg-charcoal text-white/80 hover:text-white border border-white/20 transition-all"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Center Image Container */}
      <div
        className="relative max-w-5xl max-h-[80vh] flex flex-col items-center justify-center z-10"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={current.image}
          alt={current.title}
          className="max-w-full max-h-[72vh] object-contain shadow-2xl"
        />

        {/* Caption Bar */}
        <div className="mt-4 text-center max-w-2xl px-4 space-y-1">
          <h4 className="editorial-title text-base sm:text-lg text-white font-medium">
            {current.title}
          </h4>
          <p className="text-xs text-stone-300 font-light italic">
            {current.caption}
          </p>
          <div className="flex items-center justify-center space-x-1 text-[11px] text-desert-gold pt-1">
            <MapPin className="w-3 h-3" />
            <span>{current.location}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
