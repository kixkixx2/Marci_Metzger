export interface Property {
  id: string;
  title: string;
  subtitle: string;
  price: number;
  formattedPrice: string;
  location: string;
  neighborhood: string;
  beds: number;
  baths: number;
  sqft: number;
  lotSize?: string;
  type: 'Luxury Estate' | 'Golf Course Home' | 'Single Family' | 'Acreage / Ranch' | 'Commercial';
  image: string;
  additionalImages?: string[];
  description: string;
  features: string[];
  isFeatured?: boolean;
  status: 'Active' | 'Under Contract' | 'Recently Closed' | 'Curated Showcase (Demo)';
  yearBuilt?: number;
}

export interface SearchFilterState {
  location: string;
  propertyType: string;
  minPrice: number;
  maxPrice: number;
  beds: string;
  baths: string;
  sortBy: 'price-asc' | 'price-desc' | 'featured';
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Landscape' | 'Residences' | 'Interiors' | 'Community';
  location: string;
  image: string;
  aspectRatio?: 'wide' | 'tall' | 'square';
  caption: string;
}

export interface ServiceItem {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  image?: string;
}
