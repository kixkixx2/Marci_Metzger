import { Property, GalleryItem, ServiceItem } from '../types';

export const BUSINESS_INFO = {
  name: 'Marci Metzger',
  title: 'REALTOR® & Broker Associate',
  agency: 'The Ridge Realty Group',
  licenseNote: 'Licensed REALTOR® in Nevada | Formerly Licensed Broker in Washington State',
  experienceYears: 'Nearly 3 Decades (Since 1995)',
  address: {
    street: '3190 HW-160, Suite F',
    city: 'Pahrump',
    state: 'NV',
    zip: '89048',
    full: '3190 HW-160, Suite F, Pahrump, Nevada 89048, United States',
    mapUrl: 'https://maps.google.com/?q=3190+HW-160+Suite+F+Pahrump+NV+89048',
  },
  phones: {
    primary: '(206) 919-6886',
    primaryRaw: '+12069196886',
    secondary: '(425) 941-2560',
    secondaryRaw: '+14259412560',
  },
  email: 'MARCIMETZGER@GMAIL.COM',
  hours: {
    schedule: 'Open Daily — 8:00 AM – 7:00 PM',
    note: 'Appointments outside office hours available upon request. Just call!',
    days: [
      { day: 'Monday', hours: '8:00 am – 7:00 pm' },
      { day: 'Tuesday', hours: '8:00 am – 7:00 pm' },
      { day: 'Wednesday', hours: '8:00 am – 7:00 pm' },
      { day: 'Thursday', hours: '8:00 am – 7:00 pm' },
      { day: 'Friday', hours: '8:00 am – 7:00 pm' },
      { day: 'Saturday', hours: '8:00 am – 7:00 pm' },
      { day: 'Sunday', hours: '8:00 am – 7:00 pm' },
    ],
  },
  social: {
    facebook: 'https://www.facebook.com/MarciHomes/',
    instagram: 'https://www.instagram.com/marcimetzger_theridge/',
    linkedin: 'https://www.linkedin.com/in/marci-metzger-30642496/',
    yelp: 'https://www.yelp.com/biz/xr3yQN_m2SgO0R_7S6p62w',
  },
  accreditations: [
    { name: 'National Association of REALTORS®', icon: './assets/logo3.webp' },
    { name: 'Equal Housing Opportunity', icon: './assets/logo2.webp' },
    { name: 'Pahrump Valley Chamber of Commerce', icon: './assets/logo4.webp' },
    { name: 'The Ridge Realty Group', icon: './assets/logo1.webp' },
  ],
  stats: [
    { value: 'Nearly 30', label: 'Years in Real Estate', note: 'Guiding clients since 1995' },
    { value: '$28.5M', label: 'Closed Sales in 2021', note: 'Top Residential Sales last 5 years' },
    { value: '90+', label: 'Clients Guided in 2021', note: 'Dedicated personal representation' },
    { value: '100%', label: 'Local Pahrump Focus', note: 'Mountain Falls community resident' },
  ],
  quote: {
    text: "I love that small-town feeling that our community offers. Spectacular golf courses, parks, pool, and easy access to Las Vegas make Pahrump a great place to call home. Working or retired, fast-paced or looking to relax... there's a place for you here!",
    author: "Marci J Metzger",
    role: "Resident of Mountain Falls & Pahrump Realtor",
  },
  bioParagraphs: [
    "Marci was a REALTOR, then licensed Broker, in Washington State. Now, she is enjoying the sunshine, and helping clients in Southern Nevada. Having helped buyers and sellers in many markets since 1995, she is a wealth of knowledge.",
    "I enjoy living in the Mountain Falls community and will strive to find you a home that will suit you just as this community does me.",
    "Our team works hard everyday to grow and learn, so that we may continue to excel in our market. Our clients deserve our best, & we want to make sure our best is better every year."
  ]
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    number: '01',
    title: 'Commercial & Residential',
    subtitle: 'Real Estate Done Right',
    description: "Nervous about your property adventure? Don't be. Whether you're getting ready to buy or sell your residence, looking at investment properties, or just curious about the markets, our team ensures you get the best experience possible!",
    highlights: [
      'Comprehensive residential sales & acquisitions',
      'Commercial properties & commercial land',
      'Luxury golf course & custom estate advisory',
      'Investment property return analysis'
    ],
    image: './assets/photo gallery/Commercial & Residential.webp'
  },
  {
    number: '02',
    title: 'Get It SOLD',
    subtitle: 'Seller Representation & Strategic Reach',
    description: "Don't Just List it... Get it SOLD! We exhaust every avenue to ensure our listings are at the fingertips of every possible buyer, getting you top dollar for your home.",
    highlights: [
      'Bespoke architectural photography & media',
      'Broad buyer syndication across Nevada & California',
      'Rigorous comparative market valuation',
      'Hands-on negotiation from listing to closing'
    ],
    image: './assets/1.webp'
  },
  {
    number: '03',
    title: 'Guide to Buyers',
    subtitle: 'Local Insight & Mountain Falls Living',
    description: "Nobody knows the market like we do. Enjoy having a pro at your service. Market analysis, upgrades lists, contractors on speed dial, & more!",
    highlights: [
      'Deep knowledge of Mountain Falls, Artesia & Pahrump valleys',
      'Verified contractor and inspector referral network',
      'Relocation guidance from Seattle, California & Las Vegas',
      'Neighborhood covenants, HOA, and zoning insights'
    ],
    image: './assets/3.webp'
  },
  {
    number: '04',
    title: 'Rely on Expertise',
    subtitle: 'Financing, Affordability & Timely Guidance',
    description: "If you have questions about affordability, credit, and loan options, trust us to connect you with the right people to get the answers you need in a timely fashion. We make sure you feel confident and educated every step of the way.",
    highlights: [
      'Direct connections with reputable lenders',
      'Guidance through conventional, FHA, VA & land loans',
      'Transparent escrow and title coordination',
      'Clear, patient education for every transaction stage'
    ],
    image: './assets/photo gallery/Rely on Expertise.webp'
  },
  {
    number: '05',
    title: 'Curated Desert Living',
    subtitle: 'Condo to Mansion & Everything in Between',
    description: "Large or small, condo or mansion, we can find it and get at the price that's right. Fixer-uppers? Luxury? We can help with all of it! We live, work, and play in this community. Happy to help you find where to put your hard-earned dollars.",
    highlights: [
      'Mountain Falls golf clubhouse residences',
      'Equestrian parcels with mountain panoramas',
      'Custom desert estates with pool & casita amenities',
      'Pahrump valley acreage with water rights'
    ],
    image: './assets/2.webp'
  }
];

export const FEATURED_PROPERTIES: Property[] = [
  {
    id: 'prop-1',
    title: 'The Spring Vista Estate',
    subtitle: 'Architectural Desert Sanctuary with Infinity Reflection Pool',
    price: 1395000,
    formattedPrice: '$1,395,000',
    location: 'Mountain Falls Master Planned Community, Pahrump, NV',
    neighborhood: 'Mountain Falls',
    beds: 4,
    baths: 4.5,
    sqft: 4280,
    lotSize: '0.85 Acres',
    type: 'Luxury Estate',
    image: './assets/4.webp',
    additionalImages: [
      './assets/1.webp',
      './assets/2.webp',
      './assets/photo gallery/1.webp'
    ],
    description: 'A benchmark of desert modernism with sweeping vistas of the Spring Mountains. Designed with floor-to-ceiling glass expanses, floating cantilevered cedar soffits, custom waterfall quartz island, and a mirror-finish zero-edge pool overlooking the fairway.',
    features: [
      'Zero-edge resort infinity pool & integrated spa',
      'Sub-Zero and Wolf chef kitchen suite',
      'Automated telescoping glass patio walls',
      'Private detached guest casita with kitchen',
      'Oversized 4-car insulated garage with RV bay',
      'Direct golf cart access to Mountain Falls Clubhouse'
    ],
    isFeatured: true,
    status: 'Curated Showcase (Demo)',
    yearBuilt: 2023
  },
  {
    id: 'prop-2',
    title: 'Villa Tranquila at Mountain Falls',
    subtitle: 'Spanish Hacienda with Colonnaded Courtyard & Resort Spa',
    price: 885000,
    formattedPrice: '$885,000',
    location: 'Fairway Greens, Mountain Falls, Pahrump, NV',
    neighborhood: 'Mountain Falls',
    beds: 3,
    baths: 3.5,
    sqft: 3140,
    lotSize: '0.42 Acres',
    type: 'Golf Course Home',
    image: './assets/2.webp',
    additionalImages: [
      './assets/1.webp',
      './assets/background.webp'
    ],
    description: 'Immaculate Spanish colonial architecture boasting custom hand-carved stone pillars, deep covered loggias with ceiling fans, illuminated saltwater lagoon pool, and unobstructed southern fairway sunset vistas.',
    features: [
      'Custom travertine pool deck with stone fire features',
      'Spacious primary suite with spa soaking bath',
      'Outdoor summer kitchen with gas grill and bar seating',
      'Tile roof with paid-in-full solar array',
      'Courtyard entry with hand-forged iron gate'
    ],
    isFeatured: true,
    status: 'Curated Showcase (Demo)',
    yearBuilt: 2021
  },
  {
    id: 'prop-3',
    title: 'The Contemporary Pavilion',
    subtitle: 'Minimalist Clean Lines Surrounded by Manicured Lawns',
    price: 765000,
    formattedPrice: '$765,000',
    location: 'Artesia Park Estates, Pahrump, NV',
    neighborhood: 'Artesia',
    beds: 3,
    baths: 3,
    sqft: 2890,
    lotSize: '0.50 Acres',
    type: 'Single Family',
    image: './assets/photo gallery/Commercial & Residential.webp',
    additionalImages: [
      './assets/1.webp',
      './assets/3.webp'
    ],
    description: 'European architectural precision meets Southern Nevada sunshine. Crisp white stucco facades, floor-to-ceiling double-glazed minimalist windows, lap pool, and mature specimen landscaping against mountain contours.',
    features: [
      'Designer kitchen with custom European cabinetry',
      'Polished concrete and wide-plank oak flooring',
      'Energy efficient geothermal heat pump system',
      'Enclosed privacy wall with integrated garden lighting',
      'Low HOA fees with quiet cul-de-sac location'
    ],
    isFeatured: true,
    status: 'Curated Showcase (Demo)',
    yearBuilt: 2022
  },
  {
    id: 'prop-4',
    title: 'Mountain Falls Fairway Haven',
    subtitle: 'Waterfront Pond & Golf Course Panorama',
    price: 649000,
    formattedPrice: '$649,000',
    location: 'Pond View Way, Mountain Falls, Pahrump, NV',
    neighborhood: 'Mountain Falls',
    beds: 3,
    baths: 2.5,
    sqft: 2420,
    lotSize: '0.28 Acres',
    type: 'Golf Course Home',
    image: './assets/background.webp',
    additionalImages: [
      './assets/photo gallery/1.webp',
      './assets/1.webp'
    ],
    description: 'Rare waterfront orientation overlooking the signature Mountain Falls fountain lake. Relax on the expanded patio while watching the sunset glow on Mount Charleston.',
    features: [
      'Direct panoramic water and mountain views',
      'Extended covered pergola with stamped concrete patio',
      'Gourmet kitchen with granite countertops and walk-in pantry',
      'Mountain Falls residents club privilege included',
      'Turnkey condition with recent upgrades'
    ],
    isFeatured: false,
    status: 'Curated Showcase (Demo)',
    yearBuilt: 2020
  },
  {
    id: 'prop-5',
    title: 'High Desert Equestrian Parcel & Residence',
    subtitle: 'Expansive 2.5-Acre Ranch with Mountain Panoramas',
    price: 589000,
    formattedPrice: '$589,000',
    location: 'Charleston Peak Foothills, Pahrump, NV',
    neighborhood: 'Charleston Peak',
    beds: 4,
    baths: 3,
    sqft: 2750,
    lotSize: '2.50 Acres',
    type: 'Acreage / Ranch',
    image: './assets/1.webp',
    additionalImages: [
      './assets/4.webp',
      './assets/3.webp'
    ],
    description: 'Room to breathe with private well rights, custom metal workshop, perimeter fencing, and unhindered 360-degree desert vistas. Ideal for horses, RV storage, or hobbyist workshop.',
    features: [
      'Private domestic well with generous water rights',
      '30x40 insulated steel workshop with 220V power',
      'Zoned for horses with multiple turnout paddocks',
      'Zero HOA dues and low annual property taxes',
      'Open concept living with split floor plan'
    ],
    isFeatured: false,
    status: 'Curated Showcase (Demo)',
    yearBuilt: 2019
  },
  {
    id: 'prop-6',
    title: 'Highway 160 Commercial & Office Suite',
    subtitle: 'High Visibility Retail / Professional Office Footprint',
    price: 525000,
    formattedPrice: '$525,000',
    location: 'HW-160 Business Corridor, Pahrump, NV',
    neighborhood: 'Highway 160 Corridor',
    beds: 0,
    baths: 2,
    sqft: 2150,
    lotSize: '0.35 Acres',
    type: 'Commercial',
    image: './assets/photo gallery/Commercial & Residential.webp',
    additionalImages: [
      './assets/photo gallery/Rely on Expertise.webp'
    ],
    description: 'Prime highway frontage in Pahrump with heavy daily traffic count. Turnkey professional office layout with reception lobby, 5 private offices, conference room, and private parking lot.',
    features: [
      'Direct frontage along Nevada Highway 160',
      'Pylon signage opportunity with high visibility',
      'Dedicated private paved parking with ADA access',
      'High speed fiber internet connected',
      'Excellent tenant history or owner-occupant opportunity'
    ],
    isFeatured: false,
    status: 'Curated Showcase (Demo)',
    yearBuilt: 2018
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Mountain Falls Resort & Community Aerial',
    category: 'Community',
    location: 'Mountain Falls, Pahrump, NV',
    image: './assets/photo gallery/1.webp',
    aspectRatio: 'wide',
    caption: 'Aerial perspective of the Mountain Falls championship golf course, clubhouse, aquatic center, and Spring Mountain range.'
  },
  {
    id: 'gal-2',
    title: 'Modern Desert Villa at Twilight',
    category: 'Residences',
    location: 'Mountain Falls Fairway',
    image: './assets/4.webp',
    aspectRatio: 'tall',
    caption: 'Striking cantilevered architecture reflecting across infinity waters against the evening Nevada sky.'
  },
  {
    id: 'gal-3',
    title: 'Mountain Falls Lake & Fairway Fountain',
    category: 'Landscape',
    location: 'Mountain Falls Golf Club',
    image: './assets/background.webp',
    aspectRatio: 'wide',
    caption: 'Lush fairway waterways and desert mountain backdrops that define living in Southern Nevada.'
  },
  {
    id: 'gal-4',
    title: 'Custom Gourmet Kitchen & Living Salon',
    category: 'Interiors',
    location: 'Private Residence, Pahrump',
    image: './assets/1.webp',
    aspectRatio: 'tall',
    caption: 'Curated marble waterfall island and seamless indoor-outdoor desert entertainment spaces.'
  },
  {
    id: 'gal-5',
    title: 'Mediterranean Courtyard & Pool Oasis',
    category: 'Residences',
    location: 'Mountain Falls Estate',
    image: './assets/2.webp',
    aspectRatio: 'wide',
    caption: 'Warm stone colonnades, palm trees, and illuminated spa retreat overlooking the desert fairway.'
  },
  {
    id: 'gal-6',
    title: 'Contemporary Minimalist Architecture',
    category: 'Residences',
    location: 'Artesia Valley',
    image: './assets/photo gallery/Commercial & Residential.webp',
    aspectRatio: 'square',
    caption: 'Crisp geometry, expansive grass lawns, and clear desert skies.'
  },
  {
    id: 'gal-7',
    title: 'Curated Interior Vignette',
    category: 'Interiors',
    location: 'Model Residence Styling',
    image: './assets/photo gallery/Real Estate Done Right.webp',
    aspectRatio: 'square',
    caption: 'Attention to detail and presentation that ensures listings achieve maximum market value.'
  },
  {
    id: 'gal-8',
    title: 'Expert Client Consultation & Advisory',
    category: 'Community',
    location: 'The Ridge Realty Group Office',
    image: './assets/photo gallery/Rely on Expertise.webp',
    aspectRatio: 'square',
    caption: 'Nearly three decades of trusted guidance delivering successful closings for buyers and sellers.'
  }
];
