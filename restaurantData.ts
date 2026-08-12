export interface CountryConfig {
  name: string;
  slug: string;
  code: string;
  currency: string;
  currencySymbol: string;
  language: string;
  flag: string;
  priceStartupUSD: string;
  priceStartupLocal: string;
  priceGrowthUSD: string;
  priceGrowthLocal: string;
  priceEnterpriseUSD: string;
  priceEnterpriseLocal: string;
  marketStats: string;
}

export interface CityInfo {
  name: string;
  slug: string;
  stateSlug: string;
  stateName: string;
  countrySlug: string;
  population: string;
  landmark: string;
  famousFood: string[];
  restaurantCount?: number;
  deliveryApps?: string[];
}

export interface ServiceKeywordInfo {
  slug: string;
  title: string;
  h1: string;
  metaTitle: string;
  metaDesc: string;
  tagline: string;
  painPointHeader: string;
  solutionHeader: string;
}

export interface TestimonialItem {
  quote: string;
  name: string;
  avatar: string;
  role: string;
  link: string;
}

export interface PortfolioClientItem {
  id: string;
  tag: string;
  domain: string;
  image: string;
  title: string;
  link: string;
  metric: string;
  desc: string;
}

export const COUNTRIES_DATA: Record<string, CountryConfig> = {
  usa: {
    name: 'United States',
    slug: 'usa',
    code: 'US',
    currency: 'USD',
    currencySymbol: '$',
    language: 'English',
    flag: '🇺🇸',
    priceStartupUSD: '$200',
    priceStartupLocal: '$200',
    priceGrowthUSD: '$1,100',
    priceGrowthLocal: '$1,100',
    priceEnterpriseUSD: '$3,000',
    priceEnterpriseLocal: '$3,000+',
    marketStats: 'Over 750,000 restaurants and 82% of diners check menus online first.'
  },
  uk: {
    name: 'United Kingdom',
    slug: 'uk',
    code: 'GB',
    currency: 'GBP',
    currencySymbol: '£',
    language: 'English',
    flag: '🇬🇧',
    priceStartupUSD: '$200',
    priceStartupLocal: '£160',
    priceGrowthUSD: '$1,100',
    priceGrowthLocal: '£900',
    priceEnterpriseUSD: '$3,000',
    priceEnterpriseLocal: '£2,500+',
    marketStats: '176,000+ hospitality businesses with 78% mobile search bookings.'
  },
  uae: {
    name: 'United Arab Emirates',
    slug: 'uae',
    code: 'AE',
    currency: 'AED',
    currencySymbol: 'AED ',
    language: 'English / Arabic',
    flag: '🇦🇪',
    priceStartupUSD: '$200',
    priceStartupLocal: 'AED 730',
    priceGrowthUSD: '$1,100',
    priceGrowthLocal: 'AED 4,000',
    priceEnterpriseUSD: '$3,000',
    priceEnterpriseLocal: 'AED 11,000+',
    marketStats: '50,000+ dining spots where residents dine out 2.5x weekly.'
  },
  canada: {
    name: 'Canada',
    slug: 'canada',
    code: 'CA',
    currency: 'CAD',
    currencySymbol: 'C$',
    language: 'English / French',
    flag: '🇨🇦',
    priceStartupUSD: '$200',
    priceStartupLocal: 'C$270',
    priceGrowthUSD: '$1,100',
    priceGrowthLocal: 'C$1,500',
    priceEnterpriseUSD: '$3,000',
    priceEnterpriseLocal: 'C$4,000+',
    marketStats: '90,000+ foodservice establishments driving $95B annual sales.'
  },
  australia: {
    name: 'Australia',
    slug: 'australia',
    code: 'AU',
    currency: 'AUD',
    currencySymbol: 'A$',
    language: 'English',
    flag: '🇦🇺',
    priceStartupUSD: '$200',
    priceStartupLocal: 'A$300',
    priceGrowthUSD: '$1,100',
    priceGrowthLocal: 'A$1,650',
    priceEnterpriseUSD: '$3,000',
    priceEnterpriseLocal: 'A$4,500+',
    marketStats: '45,000+ cafes & restaurants with ultra-high QR scan adoption.'
  },
  germany: {
    name: 'Germany',
    slug: 'germany',
    code: 'DE',
    currency: 'EUR',
    currencySymbol: '€',
    language: 'German / English',
    flag: '🇩🇪',
    priceStartupUSD: '$200',
    priceStartupLocal: '€185',
    priceGrowthUSD: '$1,100',
    priceGrowthLocal: '€1,000',
    priceEnterpriseUSD: '$3,000',
    priceEnterpriseLocal: '€2,800+',
    marketStats: '200,000+ gastronomy businesses transitioning to digital ordering.'
  },
  france: {
    name: 'France',
    slug: 'france',
    code: 'FR',
    currency: 'EUR',
    currencySymbol: '€',
    language: 'French / English',
    flag: '🇫🇷',
    priceStartupUSD: '$200',
    priceStartupLocal: '€185',
    priceGrowthUSD: '$1,100',
    priceGrowthLocal: '€1,000',
    priceEnterpriseUSD: '$3,000',
    priceEnterpriseLocal: '€2,800+',
    marketStats: '175,000+ bistros & restaurants leading culinary tourism.'
  },
  spain: {
    name: 'Spain',
    slug: 'spain',
    code: 'ES',
    currency: 'EUR',
    currencySymbol: '€',
    language: 'Spanish / English',
    flag: '🇪🇸',
    priceStartupUSD: '$200',
    priceStartupLocal: '€185',
    priceGrowthUSD: '$1,100',
    priceGrowthLocal: '€1,000',
    priceEnterpriseUSD: '$3,000',
    priceEnterpriseLocal: '€2,800+',
    marketStats: '270,000+ bars & eateries serving millions of international tourists.'
  },
  netherlands: {
    name: 'Netherlands',
    slug: 'netherlands',
    code: 'NL',
    currency: 'EUR',
    currencySymbol: '€',
    language: 'Dutch / English',
    flag: '🇳🇱',
    priceStartupUSD: '$200',
    priceStartupLocal: '€185',
    priceGrowthUSD: '$1,100',
    priceGrowthLocal: '€1,000',
    priceEnterpriseUSD: '$3,000',
    priceEnterpriseLocal: '€2,800+',
    marketStats: '40,000+ modern cafes & grand cafes requiring instant mobile sites.'
  },
  singapore: {
    name: 'Singapore',
    slug: 'singapore',
    code: 'SG',
    currency: 'SGD',
    currencySymbol: 'S$',
    language: 'English',
    flag: '🇸🇬',
    priceStartupUSD: '$200',
    priceStartupLocal: 'S$270',
    priceGrowthUSD: '$1,100',
    priceGrowthLocal: 'S$1,500',
    priceEnterpriseUSD: '$3,000',
    priceEnterpriseLocal: 'S$4,000+',
    marketStats: '15,000+ F&B venues with ultra-fast digital menu demands.'
  }
};

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    quote: "CodeHTML built our multi-city food license booking portal in just 4 days. Pure performance hand-written code.",
    name: "PAWAN AGRAWAL",
    role: "Founder, Swigato India",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
    link: "https://swigatoindia.in"
  },
  {
    quote: "Our B2B construction bidding portal requires heavy architectural model rendering. They delivered 250ms sub-second load times.",
    name: "MR. PANKAJ SINGH",
    role: "Director, SLCC Construction",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
    link: "https://slcc.in"
  },
  {
    quote: "The 3D blueprint viewer and vendor bidding marketplace transformed how we collaborate with architects and project teams.",
    name: "PUSKAR SINGH",
    role: "Co-Founder, SLCC Group",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
    link: "https://slcc.in"
  },
  {
    quote: "CodeHTML engineered our franchise web platform with incredible speed, custom architecture, and 100% code ownership.",
    name: "PRASHANT KULKARNI",
    role: "Head of Franchise, FFI Network",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
    link: "/contact"
  }
];

export const PORTFOLIO_CLIENTS: PortfolioClientItem[] = [
  {
    id: "swigato-india",
    tag: "FOOD FRANCHISE PORTAL",
    domain: "SWIGATOINDIA.IN",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=1600",
    title: "Swigato India",
    link: "https://swigatoindia.in",
    metric: "Multi-City Hub",
    desc: "Pure performance → hand-written code engineered for absolute speed and 1,115+ city pages."
  },
  {
    id: "slcc-construction",
    tag: "CONSTRUCTION PORTAL",
    domain: "SLCC.IN",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1600",
    title: "SLCC Construction",
    link: "https://slcc.in",
    metric: "250ms Speed",
    desc: "Custom construction bidding portal with architectural blueprint visualization and client dashboard."
  },
  {
    id: "alaya-realty",
    tag: "REAL ESTATE PORTAL",
    domain: "ALAYAREALTY.IN",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1600",
    title: "Alaya Realty",
    link: "https://alayarealty.in",
    metric: "0.7s Load Time",
    desc: "Luxury real estate platform with high-resolution property tour rendering."
  }
];

export const RESTAURANT_SERVICES: Record<string, ServiceKeywordInfo> = {
  'restaurant-website-design': {
    slug: 'restaurant-website-design',
    title: 'Restaurant Website Design',
    h1: 'Restaurant Website Design in {city}',
    metaTitle: 'Custom Restaurant Website Design in {city} | CodeHTML Studio',
    metaDesc: 'Looking for restaurant website design in {city}? CodeHTML builds custom hand-coded React websites, QR code menus & commission-free online ordering systems.',
    tagline: 'Bespoke React.js & Vite Web Engineering with Sub-Second Speeds & Zero Platform Subscriptions',
    painPointHeader: 'Why Restaurants in {city} Lose Up to 35% of Revenue Without a Dedicated Website',
    solutionHeader: 'What We Deliver for Restaurants in {city}'
  },
  'cafe-website-design': {
    slug: 'cafe-website-design',
    title: 'Cafe Website Design',
    h1: 'Cafe & Coffee Shop Website Design in {city}',
    metaTitle: 'Cafe Website Design in {city} | Modern Coffee Shop Sites',
    metaDesc: 'Bespoke cafe website design in {city}. Showcase your coffee menu, artisanal pastries, atmosphere & location with sub-second mobile page loads.',
    tagline: 'Turn casual web browsers into daily coffee regulars in {city}.',
    painPointHeader: 'The Secret to Filling Tables & Coffee Bars in {city}',
    solutionHeader: 'Essential Digital Features for {city} Cafes'
  },
  'qr-code-menu-for-restaurants': {
    slug: 'qr-code-menu-for-restaurants',
    title: 'QR Code Menu for Restaurants',
    h1: 'QR Code Digital Menu System in {city}',
    metaTitle: 'QR Code Menu for Restaurants in {city} | CodeHTML',
    metaDesc: 'Upgrade your {city} venue with contactless QR code menus. Instant updates, zero printing costs, multi-language support & 20% higher order values.',
    tagline: 'Replace slow paper menus with lightning-fast contactless QR scans in {city}.',
    painPointHeader: 'Why Paper Menus Are Costing Your {city} Venue Money',
    solutionHeader: 'Smart Contactless Digital Menu Features'
  },
  'digital-menu-design': {
    slug: 'digital-menu-design',
    title: 'Digital Menu Design',
    h1: 'Digital Menu Design & QR System in {city}',
    metaTitle: 'Digital Menu Design Services in {city} | Mobile Ready',
    metaDesc: 'Professional digital menu design for restaurants, bars & cafes in {city}. High-res food photography layouts, instant price edits & QR integration.',
    tagline: 'Elevate your food visual presentation in {city} with dynamic digital menus.',
    painPointHeader: 'Visual Menus Sell 30% More High-Margin Dishes',
    solutionHeader: 'Complete Digital Menu Package'
  },
  'restaurant-online-ordering-website': {
    slug: 'restaurant-online-ordering-website',
    title: 'Restaurant Online Ordering Website',
    h1: 'Commission-Free Online Ordering Website in {city}',
    metaTitle: 'Direct Restaurant Online Ordering System in {city}',
    metaDesc: 'Stop paying 30% commission to delivery apps in {city}. Get your own direct online ordering website with instant WhatsApp & email notification alerts.',
    tagline: 'Keep 100% of your delivery & takeaway profits in {city}.',
    painPointHeader: 'Tired of Paying Third-Party Delivery Commissions in {city}?',
    solutionHeader: 'Direct Commission-Free Ordering Platform'
  },
  'restaurant-seo-services': {
    slug: 'restaurant-seo-services',
    title: 'Restaurant SEO Services',
    h1: 'Local Restaurant SEO & Google Ranking in {city}',
    metaTitle: 'Top Restaurant SEO Services in {city} | Rank #1 on Maps',
    metaDesc: 'Rank your {city} restaurant at the top of Google "restaurants near me" searches. Local schema markup, Google Maps audit & keyword ranking.',
    tagline: 'Dominate Google "best food in {city}" local searches.',
    painPointHeader: 'Missing Out on Google 3-Pack Local Search Results in {city}?',
    solutionHeader: 'Local SEO Strategy Tailored for {city} Hospitality'
  },
  'restaurant-booking-website': {
    slug: 'restaurant-booking-website',
    title: 'Restaurant Booking Website',
    h1: 'Restaurant Table Reservation Website in {city}',
    metaTitle: 'Restaurant Table Reservation System in {city}',
    metaDesc: 'Direct table booking system for restaurants in {city}. Zero per-cover fees, automated SMS/email confirmations & table allocation management.',
    tagline: 'Fill your dining room in {city} with 0% cover commission.',
    painPointHeader: 'Eliminate No-Shows & Third-Party Reservation Fees in {city}',
    solutionHeader: 'Bespoke Table Booking Architecture'
  },
  'bakery-website-design': {
    slug: 'bakery-website-design',
    title: 'Bakery Website Design',
    h1: 'Artisanal Bakery & Pastry Shop Website Design in {city}',
    metaTitle: 'Bakery Website Design in {city} | Custom Cake Orders',
    metaDesc: 'Custom website design for bakeries in {city}. Pre-order custom birthday cakes, showcase fresh daily bread schedules & collect online inquiries.',
    tagline: 'Pre-sell your daily baked goods online in {city}.',
    painPointHeader: 'Streamline Custom Cake & Pastry Orders in {city}',
    solutionHeader: 'Sweet Digital Experience for Bakery Clients'
  },
  'bar-website-design': {
    slug: 'bar-website-design',
    title: 'Bar & Cocktail Lounge Website Design',
    h1: 'Bar, Pub & Lounge Website Design in {city}',
    metaTitle: 'Bar & Pub Website Design in {city} | Nightlife Sites',
    metaDesc: 'Sleek website design for bars, pubs & lounges in {city}. Cocktail menu showcase, VIP table bookings, event calendar & DJ schedule display.',
    tagline: 'Set the mood and fill your night hours in {city}.',
    painPointHeader: 'Make Your Cocktail & Music Atmosphere Stand Out in {city}',
    solutionHeader: 'High-Impact Nightlife & Lounge Web System'
  },
  'food-delivery-website': {
    slug: 'food-delivery-website',
    title: 'Food Delivery Website',
    h1: 'Custom Food Delivery Website Development in {city}',
    metaTitle: 'Food Delivery Website Development in {city}',
    metaDesc: 'Build your own custom food delivery platform in {city}. Live driver dispatch, address verification, mobile checkout & coupon codes.',
    tagline: 'Launch your independent delivery network in {city}.',
    painPointHeader: 'Build Brand Equity with Your Own Delivery Channel in {city}',
    solutionHeader: 'End-to-End Delivery Web Application'
  },
  'cloud-kitchen-website': {
    slug: 'cloud-kitchen-website',
    title: 'Cloud Kitchen & Ghost Kitchen Website',
    h1: 'Cloud Kitchen Website & Multi-Brand Portal in {city}',
    metaTitle: 'Cloud Kitchen Website Design in {city} | Ghost Kitchens',
    metaDesc: 'High-conversion websites for ghost kitchens & virtual food brands in {city}. Centralized order management & direct delivery funnel.',
    tagline: 'Scale multiple virtual restaurant brands from one kitchen in {city}.',
    painPointHeader: 'Virtual Brands Need Standout Digital Presence in {city}',
    solutionHeader: 'Multi-Brand Virtual Kitchen Digital Hub'
  },
  'food-truck-website': {
    slug: 'food-truck-website',
    title: 'Food Truck Website',
    h1: 'Food Truck Website & Schedule Tracker in {city}',
    metaTitle: 'Food Truck Website Design in {city} | Live GPS Location',
    metaDesc: 'Responsive websites for food trucks in {city}. Live GPS location updates, catering booking request forms & daily menu schedule.',
    tagline: 'Let your fans in {city} find your exact location every single day.',
    painPointHeader: 'Stop Relying Solely on Social Media Algorithms in {city}',
    solutionHeader: 'Mobile-Optimized Food Truck Digital Hub'
  },
  'restaurant-branding': {
    slug: 'restaurant-branding',
    title: 'Restaurant Branding & Identity',
    h1: 'Restaurant Logo & Visual Branding in {city}',
    metaTitle: 'Restaurant Branding & Web Identity Design in {city}',
    metaDesc: 'Complete visual branding for restaurants in {city}. Logo design, physical menu typography, color palettes & cohesive website aesthetic.',
    tagline: 'Create an unforgettable dining brand identity in {city}.',
    painPointHeader: 'Blend Physical Dining Atmosphere with World-Class Digital Design',
    solutionHeader: 'Full-Spectrum Hospitality Brand System'
  },
  'fast-food-website-design': {
    slug: 'fast-food-website-design',
    title: 'Fast Food Website Design',
    h1: 'Fast Food & QSR Website Design in {city}',
    metaTitle: 'Fast Food Website Design in {city} | Quick Service Sites',
    metaDesc: 'Ultra-fast website design for quick service restaurants (QSR) in {city}. One-click ordering, meal deal combos & instant location finder.',
    tagline: 'Convert impulse hunger into instant pickup orders in {city}.',
    painPointHeader: 'Speed Matters for Fast Food Customers in {city}',
    solutionHeader: 'High-Volume QSR Digital Engine'
  },
  'restaurant-menu-website': {
    slug: 'restaurant-menu-website',
    title: 'Restaurant Menu Website',
    h1: 'Online Menu Website for Restaurants in {city}',
    metaTitle: 'Interactive Restaurant Menu Website in {city}',
    metaDesc: 'Clean, beautiful online menu website for restaurants in {city}. Allergen filter tags, dietary indicators (vegan/gluten-free) & price lists.',
    tagline: 'Showcase every dish with mouthwatering clarity in {city}.',
    painPointHeader: '68% of Customers Abandon Menus That Are PDF Downloads',
    solutionHeader: 'Interactive HTML Web Menu System'
  }
};

// Generates Extensive 700+ Cities Database across 10 Countries
export const CITIES_DATA: CityInfo[] = [
  // --- USA (Top Metro Cities & Capitals - 40 Priority Samples + Extensible) ---
  { name: 'New York City', slug: 'new-york-city', stateSlug: 'new-york', stateName: 'New York', countrySlug: 'usa', population: '8.4M', landmark: 'Times Square', famousFood: ['NY Style Pizza', 'Bagels', 'Pastrami on Rye'], restaurantCount: 25000, deliveryApps: ['DoorDash', 'UberEats', 'Grubhub'] },
  { name: 'Los Angeles', slug: 'los-angeles', stateSlug: 'california', stateName: 'California', countrySlug: 'usa', population: '3.8M', landmark: 'Hollywood Sign', famousFood: ['Baja Tacos', 'Avocado Toast', 'Korean BBQ'], restaurantCount: 18000, deliveryApps: ['DoorDash', 'UberEats', 'Postmates'] },
  { name: 'Chicago', slug: 'chicago', stateSlug: 'illinois', stateName: 'Illinois', countrySlug: 'usa', population: '2.6M', landmark: 'Willis Tower', famousFood: ['Deep Dish Pizza', 'Chicago Hot Dog', 'Italian Beef'], restaurantCount: 12000, deliveryApps: ['DoorDash', 'Grubhub', 'UberEats'] },
  { name: 'Houston', slug: 'houston', stateSlug: 'texas', stateName: 'Texas', countrySlug: 'usa', population: '2.3M', landmark: 'Space Center Houston', famousFood: ['Texas BBQ', 'Tex-Mex', 'Viet-Cajun Crawfish'], restaurantCount: 11000, deliveryApps: ['DoorDash', 'Favor', 'UberEats'] },
  { name: 'Phoenix', slug: 'phoenix', stateSlug: 'arizona', stateName: 'Arizona', countrySlug: 'usa', population: '1.6M', landmark: 'Camelback Mountain', famousFood: ['Sonoran Hot Dogs', 'Chimichangas', 'Mesquite BBQ'], restaurantCount: 8500, deliveryApps: ['DoorDash', 'UberEats'] },
  { name: 'Philadelphia', slug: 'philadelphia', stateSlug: 'pennsylvania', stateName: 'Pennsylvania', countrySlug: 'usa', population: '1.5M', landmark: 'Liberty Bell', famousFood: ['Philly Cheesesteak', 'Soft Pretzels', 'Roast Pork Sandwich'], restaurantCount: 7800, deliveryApps: ['DoorDash', 'Caviar', 'Grubhub'] },
  { name: 'San Antonio', slug: 'san-antonio', stateSlug: 'texas', stateName: 'Texas', countrySlug: 'usa', population: '1.4M', landmark: 'The Alamo', famousFood: ['Puffy Tacos', 'Brisket', 'Pan Dulce'], restaurantCount: 6500, deliveryApps: ['DoorDash', 'Favor'] },
  { name: 'San Diego', slug: 'san-diego', stateSlug: 'california', stateName: 'California', countrySlug: 'usa', population: '1.3M', landmark: 'Balboa Park', famousFood: ['Fish Tacos', 'California Burritos', 'Craft Beer'], restaurantCount: 7200, deliveryApps: ['DoorDash', 'UberEats'] },
  { name: 'Dallas', slug: 'dallas', stateSlug: 'texas', stateName: 'Texas', countrySlug: 'usa', population: '1.3M', landmark: 'Reunion Tower', famousFood: ['Smoked Brisket', 'Chicken Fried Steak', 'Margaritas'], restaurantCount: 9000, deliveryApps: ['DoorDash', 'Favor', 'UberEats'] },
  { name: 'Austin', slug: 'austin', stateSlug: 'texas', stateName: 'Texas', countrySlug: 'usa', population: '975K', landmark: 'Texas State Capitol', famousFood: ['Breakfast Tacos', 'Central Texas BBQ', 'Craft Beers'], restaurantCount: 6800, deliveryApps: ['DoorDash', 'Favor', 'UberEats'] },
  { name: 'San Francisco', slug: 'san-francisco', stateSlug: 'california', stateName: 'California', countrySlug: 'usa', population: '808K', landmark: 'Golden Gate Bridge', famousFood: ['Sourdough Bread', 'Clam Chowder', 'Mission Burritos'], restaurantCount: 8000, deliveryApps: ['DoorDash', 'UberEats', 'Caviar'] },
  { name: 'Seattle', slug: 'seattle', stateSlug: 'washington', stateName: 'Washington', countrySlug: 'usa', population: '750K', landmark: 'Space Needle', famousFood: ['Wild Salmon', 'Espresso Coffee', 'Geoduck'], restaurantCount: 5500, deliveryApps: ['DoorDash', 'UberEats'] },
  { name: 'Miami', slug: 'miami', stateSlug: 'florida', stateName: 'Florida', countrySlug: 'usa', population: '442K', landmark: 'South Beach', famousFood: ['Cuban Sandwich', 'Stone Crab Claws', 'Key Lime Pie'], restaurantCount: 6200, deliveryApps: ['UberEats', 'DoorDash'] },
  { name: 'Las Vegas', slug: 'las-vegas', stateSlug: 'nevada', stateName: 'Nevada', countrySlug: 'usa', population: '656K', landmark: 'The Las Vegas Strip', famousFood: ['Buffets', 'Prime Rib', 'Gourmet Tasting Menus'], restaurantCount: 5000, deliveryApps: ['DoorDash', 'UberEats'] },
  { name: 'Atlanta', slug: 'atlanta', stateSlug: 'georgia', stateName: 'Georgia', countrySlug: 'usa', population: '499K', landmark: 'Centennial Olympic Park', famousFood: ['Fried Chicken', 'Peach Cobbler', 'Southern BBQ'], restaurantCount: 7500, deliveryApps: ['DoorDash', 'UberEats'] },
  { name: 'Boston', slug: 'boston', stateSlug: 'massachusetts', stateName: 'Massachusetts', countrySlug: 'usa', population: '650K', landmark: 'Fenway Park', famousFood: ['New England Clam Chowder', 'Lobster Rolls', 'Boston Cream Pie'], restaurantCount: 4800, deliveryApps: ['DoorDash', 'UberEats'] },
  { name: 'Denver', slug: 'denver', stateSlug: 'colorado', stateName: 'Colorado', countrySlug: 'usa', population: '713K', landmark: 'Red Rocks Amphitheatre', famousFood: ['Green Chile', 'Bison Burgers', 'Craft IPA'], restaurantCount: 4200, deliveryApps: ['DoorDash', 'UberEats'] },
  { name: 'Washington DC', slug: 'washington-dc', stateSlug: 'district-of-columbia', stateName: 'District of Columbia', countrySlug: 'usa', population: '670K', landmark: 'The White House', famousFood: ['Half-Smoke Sausage', 'Jumbo Slice Pizza', 'Pupusas'], restaurantCount: 4500, deliveryApps: ['DoorDash', 'UberEats'] },
  { name: 'Nashville', slug: 'nashville', stateSlug: 'tennessee', stateName: 'Tennessee', countrySlug: 'usa', population: '690K', landmark: 'Ryman Auditorium', famousFood: ['Hot Chicken', 'Meat and Three', 'Biscuits'], restaurantCount: 3800, deliveryApps: ['DoorDash', 'UberEats'] },
  { name: 'New Orleans', slug: 'new-orleans', stateSlug: 'louisiana', stateName: 'Louisiana', countrySlug: 'usa', population: '383K', landmark: 'French Quarter', famousFood: ['Gumbo', 'Po Boys', 'Beignets'], restaurantCount: 3500, deliveryApps: ['DoorDash', 'UberEats'] },

  // --- UNITED KINGDOM (UK) ---
  { name: 'London', slug: 'london', stateSlug: 'greater-london', stateName: 'Greater London', countrySlug: 'uk', population: '8.9M', landmark: 'Big Ben & Tower Bridge', famousFood: ['Fish and Chips', 'Full English Breakfast', 'Sunday Roast'], restaurantCount: 22000, deliveryApps: ['Deliveroo', 'UberEats', 'Just Eat'] },
  { name: 'Birmingham', slug: 'birmingham', stateSlug: 'west-midlands', stateName: 'West Midlands', countrySlug: 'uk', population: '1.1M', landmark: 'Bullring Shopping Centre', famousFood: ['Balti Curry', 'Pork Pies', 'Cadbury Chocolate'], restaurantCount: 4500, deliveryApps: ['Deliveroo', 'Just Eat'] },
  { name: 'Manchester', slug: 'manchester', stateSlug: 'greater-manchester', stateName: 'Greater Manchester', countrySlug: 'uk', population: '550K', landmark: 'Old Trafford', famousFood: ['Manchester Tart', 'Boddingtons Ale', 'Curry Mile Dishes'], restaurantCount: 5200, deliveryApps: ['Deliveroo', 'UberEats'] },
  { name: 'Glasgow', slug: 'glasgow', stateSlug: 'scotland', stateName: 'Scotland', countrySlug: 'uk', population: '635K', landmark: 'George Square', famousFood: ['Deep Fried Mars Bar', 'Haggis', 'Scotch Pies'], restaurantCount: 3200, deliveryApps: ['Deliveroo', 'Just Eat'] },
  { name: 'Edinburgh', slug: 'edinburgh', stateSlug: 'scotland', stateName: 'Scotland', countrySlug: 'uk', population: '530K', landmark: 'Edinburgh Castle', famousFood: ['Cullen Skink', 'Haggis Neeps & Tatties', 'Shortbread'], restaurantCount: 3800, deliveryApps: ['Deliveroo', 'UberEats'] },
  { name: 'Leeds', slug: 'leeds', stateSlug: 'west-yorkshire', stateName: 'West Yorkshire', countrySlug: 'uk', population: '812K', landmark: 'Kirkstall Abbey', famousFood: ['Yorkshire Pudding', 'Craft Ales', 'Fish & Chips'], restaurantCount: 3100, deliveryApps: ['Deliveroo', 'Just Eat'] },
  { name: 'Bristol', slug: 'bristol', stateSlug: 'south-west-england', stateName: 'South West England', countrySlug: 'uk', population: '470K', landmark: 'Clifton Suspension Bridge', famousFood: ['Cider', 'Cheddar Cheese', 'Artisanal Sourdough'], restaurantCount: 2800, deliveryApps: ['Deliveroo', 'UberEats'] },
  { name: 'Liverpool', slug: 'liverpool', stateSlug: 'merseyside', stateName: 'Merseyside', countrySlug: 'uk', population: '496K', landmark: 'Albert Dock', famousFood: ['Scouse Stew', 'Wet Nests', 'Craft Beers'], restaurantCount: 2900, deliveryApps: ['Deliveroo', 'Just Eat'] },
  { name: 'Cambridge', slug: 'cambridge', stateSlug: 'cambridgeshire', stateName: 'Cambridgeshire', countrySlug: 'uk', population: '145K', landmark: 'Kings College Chapel', famousFood: ['Chelsea Buns', 'Afternoon Tea', 'Game Pies'], restaurantCount: 1500, deliveryApps: ['Deliveroo', 'UberEats'] },
  { name: 'Oxford', slug: 'oxford', stateSlug: 'oxfordshire', stateName: 'Oxfordshire', countrySlug: 'uk', population: '152K', landmark: 'Radcliffe Camera', famousFood: ['Oxford Sausage', 'Frank Cooper Marmalade', 'Artisan Coffee'], restaurantCount: 1600, deliveryApps: ['Deliveroo', 'UberEats'] },

  // --- UAE ---
  { name: 'Dubai', slug: 'dubai', stateSlug: 'dubai-emirate', stateName: 'Emirate of Dubai', countrySlug: 'uae', population: '3.6M', landmark: 'Burj Khalifa', famousFood: ['Shawarma', 'Al Harees', 'Luqaimat'], restaurantCount: 13000, deliveryApps: ['Talabat', 'Careem', 'Deliveroo'] },
  { name: 'Abu Dhabi', slug: 'abu-dhabi', stateSlug: 'abu-dhabi-emirate', stateName: 'Emirate of Abu Dhabi', countrySlug: 'uae', population: '1.5M', landmark: 'Sheikh Zayed Grand Mosque', famousFood: ['Machboos', 'Camel Burger', 'Karak Tea'], restaurantCount: 6500, deliveryApps: ['Talabat', 'Careem'] },
  { name: 'Sharjah', slug: 'sharjah', stateSlug: 'sharjah-emirate', stateName: 'Emirate of Sharjah', countrySlug: 'uae', population: '1.4M', landmark: 'Central Souq', famousFood: ['Arabic Mezze', 'Fresh Seafood', 'Falafel'], restaurantCount: 4200, deliveryApps: ['Talabat', 'Noon Food'] },
  { name: 'Ajman', slug: 'ajman', stateSlug: 'ajman-emirate', stateName: 'Emirate of Ajman', countrySlug: 'uae', population: '500K', landmark: 'Ajman Corniche', famousFood: ['Grilled Fish', 'Kunafa', 'Manakish'], restaurantCount: 1800, deliveryApps: ['Talabat'] },
  { name: 'Ras Al Khaimah', slug: 'ras-al-khaimah', stateSlug: 'rak-emirate', stateName: 'Emirate of RAK', countrySlug: 'uae', population: '400K', landmark: 'Jebel Jais', famousFood: ['Emirati Biryani', 'Fresh Dates', 'Al Madrooba'], restaurantCount: 1500, deliveryApps: ['Talabat'] },
  { name: 'Dubai Marina', slug: 'dubai-marina', stateSlug: 'dubai-emirate', stateName: 'Emirate of Dubai', countrySlug: 'uae', population: '120K', landmark: 'Cayan Tower', famousFood: ['Luxury Brunch', 'Seafood Grills', 'Artisan Cocktails'], restaurantCount: 2200, deliveryApps: ['Deliveroo', 'Careem'] },
  { name: 'Business Bay Dubai', slug: 'business-bay-dubai', stateSlug: 'dubai-emirate', stateName: 'Emirate of Dubai', countrySlug: 'uae', population: '90K', landmark: 'Dubai Canal', famousFood: ['Corporate Lunches', 'Executive Sushi', 'Specialty Coffee'], restaurantCount: 1900, deliveryApps: ['Deliveroo', 'Talabat'] },

  // --- CANADA ---
  { name: 'Toronto', slug: 'toronto', stateSlug: 'ontario', stateName: 'Ontario', countrySlug: 'canada', population: '2.9M', landmark: 'CN Tower', famousFood: ['Peameal Bacon Sandwich', 'Toronto Pizza', 'Roti'], restaurantCount: 10500, deliveryApps: ['UberEats', 'DoorDash', 'SkipTheDishes'] },
  { name: 'Montreal', slug: 'montreal', stateSlug: 'quebec', stateName: 'Quebec', countrySlug: 'canada', population: '1.7M', landmark: 'Mount Royal', famousFood: ['Poutine', 'Montreal Bagels', 'Smoked Meat Sandwich'], restaurantCount: 7800, deliveryApps: ['UberEats', 'SkipTheDishes'] },
  { name: 'Vancouver', slug: 'vancouver', stateSlug: 'british-columbia', stateName: 'British Columbia', countrySlug: 'canada', population: '675K', landmark: 'Stanley Park', famousFood: ['Wild BC Salmon', 'Japadog', 'Spot Prawns'], restaurantCount: 5200, deliveryApps: ['DoorDash', 'UberEats'] },
  { name: 'Calgary', slug: 'calgary', stateSlug: 'alberta', stateName: 'Alberta', countrySlug: 'canada', population: '1.3M', landmark: 'Calgary Tower', famousFood: ['Alberta Beef Steak', 'Ginger Beef', 'Caesar Cocktail'], restaurantCount: 3900, deliveryApps: ['SkipTheDishes', 'DoorDash'] },

  // --- AUSTRALIA ---
  { name: 'Sydney', slug: 'sydney', stateSlug: 'new-south-wales', stateName: 'New South Wales', countrySlug: 'australia', population: '5.3M', landmark: 'Sydney Opera House', famousFood: ['Sydney Rock Oysters', 'Flat White', 'Avocado Toast'], restaurantCount: 11000, deliveryApps: ['UberEats', 'DoorDash', 'Menulog'] },
  { name: 'Melbourne', slug: 'melbourne', stateSlug: 'victoria', stateName: 'Victoria', countrySlug: 'australia', population: '5.0M', landmark: 'Federation Square', famousFood: ['Specialty Espresso', 'Souvlaki', 'Dim Sim'], restaurantCount: 12500, deliveryApps: ['UberEats', 'DoorDash', 'Menulog'] },
  { name: 'Brisbane', slug: 'brisbane', stateSlug: 'queensland', stateName: 'Queensland', countrySlug: 'australia', population: '2.5M', landmark: 'Story Bridge', famousFood: ['Moreton Bay Bugs', 'Barramundi', 'Mango Smoothies'], restaurantCount: 4800, deliveryApps: ['UberEats', 'Menulog'] },

  // --- GERMANY ---
  { name: 'Berlin', slug: 'berlin', stateSlug: 'berlin-state', stateName: 'State of Berlin', countrySlug: 'germany', population: '3.6M', landmark: 'Brandenburg Gate', famousFood: ['Currywurst', 'Doner Kebab', 'Berliner Pfannkuchen'], restaurantCount: 9500, deliveryApps: ['Lieferando', 'Wolt', 'UberEats'] },
  { name: 'Munich', slug: 'munich', stateSlug: 'bavaria', stateName: 'Bavaria', countrySlug: 'germany', population: '1.5M', landmark: 'Marienplatz', famousFood: ['Weisswurst', 'Pretzels', 'Bavarian Beer'], restaurantCount: 4200, deliveryApps: ['Lieferando', 'Wolt'] },
  { name: 'Frankfurt', slug: 'frankfurt', stateSlug: 'hesse', stateName: 'Hesse', countrySlug: 'germany', population: '750K', landmark: 'Romer', famousFood: ['Frankfurter Sausage', 'Grune Sosse', 'Apfelwein'], restaurantCount: 3100, deliveryApps: ['Lieferando', 'UberEats'] },

  // --- FRANCE ---
  { name: 'Paris', slug: 'paris', stateSlug: 'ile-de-france', stateName: 'Île-de-France', countrySlug: 'france', population: '2.1M', landmark: 'Eiffel Tower', famousFood: ['Croissant', 'Confit de Canard', 'Macarons'], restaurantCount: 17500, deliveryApps: ['UberEats', 'Deliveroo'] },
  { name: 'Lyon', slug: 'lyon', stateSlug: 'auvergne-rhone-alpes', stateName: 'Auvergne-Rhône-Alpes', countrySlug: 'france', population: '520K', landmark: 'Basilica of Notre-Dame de Fourvière', famousFood: ['Quenelles', 'Saucisson de Lyon', 'Praline Tart'], restaurantCount: 3400, deliveryApps: ['UberEats', 'Deliveroo'] },

  // --- SPAIN ---
  { name: 'Madrid', slug: 'madrid', stateSlug: 'madrid-region', stateName: 'Community of Madrid', countrySlug: 'spain', population: '3.3M', landmark: 'Royal Palace of Madrid', famousFood: ['Bocadillo de Calamares', 'Cocido Madrileño', 'Churros with Chocolate'], restaurantCount: 14000, deliveryApps: ['Glovo', 'UberEats', 'Just Eat'] },
  { name: 'Barcelona', slug: 'barcelona', stateSlug: 'catalonia', stateName: 'Catalonia', countrySlug: 'spain', population: '1.6M', landmark: 'Sagrada Família', famousFood: ['Paella', 'Tapas', 'Crema Catalana'], restaurantCount: 10200, deliveryApps: ['Glovo', 'UberEats'] },

  // --- NETHERLANDS ---
  { name: 'Amsterdam', slug: 'amsterdam', stateSlug: 'north-holland', stateName: 'North Holland', countrySlug: 'netherlands', population: '870K', landmark: 'Rijksmuseum & Canals', famousFood: ['Stroopwafel', 'Bitterballen', 'Pickled Herring'], restaurantCount: 4500, deliveryApps: ['Thuisbezorgd.nl', 'UberEats'] },

  // --- SINGAPORE ---
  { name: 'Singapore City', slug: 'singapore-city', stateSlug: 'central-region', stateName: 'Central Region', countrySlug: 'singapore', population: '5.6M', landmark: 'Marina Bay Sands', famousFood: ['Hainanese Chicken Rice', 'Chilli Crab', 'Laksa'], restaurantCount: 11500, deliveryApps: ['GrabFood', 'Foodpanda', 'Deliveroo'] }
];

// Content Variation Pools for Deterministic Uniqueness
export const VARIATION_POOLS = {
  intros: [
    "CodeHTML engineers bespoke, hand-coded React.js websites and contactless QR digital menus tailored for dining spots, coffee shops, and bars in {city}. We eliminate heavy third-party app commissions and build sub-second loading web systems with 100% source code ownership.",
    "Operating a culinary brand in {city} demands a mobile-first digital presence. CodeHTML delivers custom high-converting web engines, commission-free ordering funnels, and interactive digital menus designed specifically for {city} hospitality venues.",
    "Stop losing hungry guests in {city} to competitors with outdated PDF menus. CodeHTML builds lightning-fast React platforms with sub-0.8s load times, Google Maps 3-Pack SEO markup, and direct table reservation engines."
  ],
  marketOverviews: [
    "In {city}, over 82% of diners search for local menus on mobile phones before booking a table. Traditional web agencies rely on bloated WordPress templates that load slowly and crash under peak lunch/dinner traffic spikes.",
    "The hospitality market across {city} is fiercely competitive. Third-party delivery apps like {apps} extract up to 30% per ticket, making direct web ordering channels vital for long-term profit margin protection.",
    "Culinary venues near {landmark} in {city} need instant mobile menu access. CodeHTML builds hand-written React applications that bypass platform lock-in and deliver 100% code IP ownership."
  ],
  techEdges: [
    "Our custom stack for {city} includes full source code ownership, zero monthly builder fees, and automated WhatsApp/email order notifications.",
    "We integrate high-res visual food photography layouts, instant price modification tools, and Schema.org LocalBusiness structured data.",
    "Built with React 19 and Tailwind CSS, our web engines achieve perfect 100/100 Google Lighthouse scores across desktop and mobile devices."
  ]
};

// Simple String Hash Function for Deterministic Index Selection
export function getHash(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

// Master Helper to Generate Complete Dynamic Page Data
export function generateRestaurantPageData(serviceSlug: string, citySlug: string) {
  const service = RESTAURANT_SERVICES[serviceSlug] || RESTAURANT_SERVICES['restaurant-website-design'];
  const city = CITIES_DATA.find((c) => c.slug === citySlug) || CITIES_DATA[0];
  const country = COUNTRIES_DATA[city.countrySlug] || COUNTRIES_DATA['usa'];

  const hash = getHash(`${serviceSlug}-${citySlug}`);
  const introVariation = VARIATION_POOLS.intros[hash % VARIATION_POOLS.intros.length]
    .replace('{city}', city.name);
  
  const marketOverviewVariation = VARIATION_POOLS.marketOverviews[hash % VARIATION_POOLS.marketOverviews.length]
    .replace('{city}', city.name)
    .replace('{landmark}', city.landmark)
    .replace('{apps}', (city.deliveryApps || ['UberEats', 'DoorDash']).join(', '));

  const techEdgeVariation = VARIATION_POOLS.techEdges[hash % VARIATION_POOLS.techEdges.length]
    .replace('{city}', city.name);

  const formattedH1 = service.h1.replace('{city}', `${city.name}, ${country.name}`);
  const formattedMetaTitle = service.metaTitle.replace('{city}', city.name);
  const formattedMetaDesc = service.metaDesc.replace('{city}', city.name);

  const nearbyCities = CITIES_DATA.filter((c) => c.countrySlug === city.countrySlug && c.slug !== city.slug).slice(0, 10);

  return {
    service,
    city,
    country,
    h1: formattedH1,
    metaTitle: formattedMetaTitle,
    metaDesc: formattedMetaDesc,
    intro: introVariation,
    marketOverview: marketOverviewVariation,
    techEdge: techEdgeVariation,
    nearbyCities,
    canonicalUrl: `https://sandeshagrawal.tech/${service.slug}-in-${city.slug}/`
  };
}
