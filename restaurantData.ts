export interface CountryConfig {
  name: string;
  slug: string;
  code: string;
  currency: string;
  currencySymbol: string;
  language: string;
  flag: string;
  websitePrice: string;
  qrMenuPrice: string;
  monthlyPrice: string;
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
}

export interface StateInfo {
  name: string;
  slug: string;
  countrySlug: string;
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

export const COUNTRIES_DATA: Record<string, CountryConfig> = {
  usa: {
    name: 'United States',
    slug: 'usa',
    code: 'US',
    currency: 'USD',
    currencySymbol: '$',
    language: 'English',
    flag: '🇺🇸',
    websitePrice: '$299',
    qrMenuPrice: '$49',
    monthlyPrice: '$29',
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
    websitePrice: '£249',
    qrMenuPrice: '£39',
    monthlyPrice: '£19',
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
    websitePrice: 'AED 999',
    qrMenuPrice: 'AED 179',
    monthlyPrice: 'AED 99',
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
    websitePrice: 'C$399',
    qrMenuPrice: 'C$69',
    monthlyPrice: 'C$39',
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
    websitePrice: 'A$449',
    qrMenuPrice: 'A$79',
    monthlyPrice: 'A$39',
    marketStats: '45,000+ cafes & restaurants with high QR scan adoption.'
  },
  germany: {
    name: 'Germany',
    slug: 'germany',
    code: 'DE',
    currency: 'EUR',
    currencySymbol: '€',
    language: 'German / English',
    flag: '🇩🇪',
    websitePrice: '€279',
    qrMenuPrice: '€45',
    monthlyPrice: '€25',
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
    websitePrice: '€279',
    qrMenuPrice: '€45',
    monthlyPrice: '€25',
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
    websitePrice: '€249',
    qrMenuPrice: '€39',
    monthlyPrice: '€19',
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
    websitePrice: '€279',
    qrMenuPrice: '€45',
    monthlyPrice: '€25',
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
    websitePrice: 'S$429',
    qrMenuPrice: 'S$69',
    monthlyPrice: 'S$39',
    marketStats: '15,000+ F&B venues with ultra-fast digital menu demands.'
  }
};

export const RESTAURANT_SERVICES: Record<string, ServiceKeywordInfo> = {
  'restaurant-website-design': {
    slug: 'restaurant-website-design',
    title: 'Restaurant Website Design',
    h1: 'Restaurant Website Design in {city}',
    metaTitle: 'Custom Restaurant Website Design in {city} | From {price}',
    metaDesc: 'Get a stunning, high-converting restaurant website in {city}. Includes mobile-first layout, QR code digital menu, Google Maps setup & commission-free online ordering.',
    tagline: 'Stop losing hungry customers to competitors in {city}. Get a high-converting restaurant website delivered in 7 days.',
    painPointHeader: 'Why Restaurants in {city} Lose Up to 35% of Revenue Without a Dedicated Website',
    solutionHeader: 'What Your {city} Restaurant Gets for a One-Time {price}'
  },
  'cafe-website-design': {
    slug: 'cafe-website-design',
    title: 'Cafe Website Design',
    h1: 'Cafe & Coffee Shop Website Design in {city}',
    metaTitle: 'Cafe Website Design in {city} | Modern Coffee Shop Websites',
    metaDesc: 'Bespoke cafe website design in {city}. Showcase your coffee menu, artisanal pastries, atmosphere, and location with sub-second mobile page loads.',
    tagline: 'Turn casual web browsers into daily coffee regulars in {city}.',
    painPointHeader: 'The Secret to Filling Tables & Coffee Bars in {city}',
    solutionHeader: 'Essential Digital Features for {city} Cafes'
  },
  'qr-code-menu-for-restaurants': {
    slug: 'qr-code-menu-for-restaurants',
    title: 'QR Code Menu for Restaurants',
    h1: 'QR Code Digital Menu System in {city}',
    metaTitle: 'QR Code Menu for Restaurants in {city} | Free Setup',
    metaDesc: 'Upgrade your {city} restaurant with contactless QR code menus. Instant updates, zero printing costs, multi-language support & 20% higher average order value.',
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
    metaTitle: 'Top Restaurant SEO Services in {city} | Rank #1 on Google Maps',
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
    metaTitle: 'Food Truck Website Design in {city} | Live Location Tracking',
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

export const CITIES_DATA: CityInfo[] = [
  // --- USA (US) ---
  { name: 'New York City', slug: 'new-york-city', stateSlug: 'new-york', stateName: 'New York', countrySlug: 'usa', population: '8.4M', landmark: 'Times Square', famousFood: ['NY Style Pizza', 'Bagels', 'Pastrami on Rye'] },
  { name: 'Los Angeles', slug: 'los-angeles', stateSlug: 'california', stateName: 'California', countrySlug: 'usa', population: '3.8M', landmark: 'Hollywood Sign', famousFood: ['Baja Tacos', 'Avocado Toast', 'Korean BBQ'] },
  { name: 'Chicago', slug: 'chicago', stateSlug: 'illinois', stateName: 'Illinois', countrySlug: 'usa', population: '2.6M', landmark: 'Willis Tower', famousFood: ['Deep Dish Pizza', 'Chicago Hot Dog', 'Italian Beef'] },
  { name: 'Houston', slug: 'houston', stateSlug: 'texas', stateName: 'Texas', countrySlug: 'usa', population: '2.3M', landmark: 'Space Center Houston', famousFood: ['Texas BBQ', 'Tex-Mex', 'Viet-Cajun Crawfish'] },
  { name: 'Phoenix', slug: 'phoenix', stateSlug: 'arizona', stateName: 'Arizona', countrySlug: 'usa', population: '1.6M', landmark: 'Camelback Mountain', famousFood: ['Sonoran Hot Dogs', 'Chimichangas', 'Mesquite BBQ'] },
  { name: 'Philadelphia', slug: 'philadelphia', stateSlug: 'pennsylvania', stateName: 'Pennsylvania', countrySlug: 'usa', population: '1.5M', landmark: 'Liberty Bell', famousFood: ['Philly Cheesesteak', 'Soft Pretzels', 'Roast Pork Sandwich'] },
  { name: 'San Antonio', slug: 'san-antonio', stateSlug: 'texas', stateName: 'Texas', countrySlug: 'usa', population: '1.4M', landmark: 'The Alamo', famousFood: ['Puffy Tacos', 'Brisket', 'Pan Dulce'] },
  { name: 'San Diego', slug: 'san-diego', stateSlug: 'california', stateName: 'California', countrySlug: 'usa', population: '1.3M', landmark: 'Balboa Park', famousFood: ['Fish Tacos', 'California Burritos', 'Craft Beer'] },
  { name: 'Dallas', slug: 'dallas', stateSlug: 'texas', stateName: 'Texas', countrySlug: 'usa', population: '1.3M', landmark: 'Reunion Tower', famousFood: ['Smoked Brisket', 'Chicken Fried Steak', 'Margaritas'] },
  { name: 'Austin', slug: 'austin', stateSlug: 'texas', stateName: 'Texas', countrySlug: 'usa', population: '975K', landmark: 'Texas State Capitol', famousFood: ['Breakfast Tacos', 'Central Texas BBQ', 'Craft Beers'] },
  { name: 'San Francisco', slug: 'san-francisco', stateSlug: 'california', stateName: 'California', countrySlug: 'usa', population: '808K', landmark: 'Golden Gate Bridge', famousFood: ['Sourdough Bread', 'Clam Chowder in Sourdough', 'Mission Burritos'] },
  { name: 'Seattle', slug: 'seattle', stateSlug: 'washington', stateName: 'Washington', countrySlug: 'usa', population: '750K', landmark: 'Space Needle', famousFood: ['Wild Salmon', 'Espresso Coffee', 'Geoduck'] },
  { name: 'Miami', slug: 'miami', stateSlug: 'florida', stateName: 'Florida', countrySlug: 'usa', population: '442K', landmark: 'South Beach', famousFood: ['Cuban Sandwich', 'Stone Crab Claws', 'Key Lime Pie'] },
  { name: 'Las Vegas', slug: 'las-vegas', stateSlug: 'nevada', stateName: 'Nevada', countrySlug: 'usa', population: '656K', landmark: 'The Las Vegas Strip', famousFood: ['Buffets', 'Prime Rib', 'Gourmet Tasting Menus'] },
  { name: 'Atlanta', slug: 'atlanta', stateSlug: 'georgia', stateName: 'Georgia', countrySlug: 'usa', population: '499K', landmark: 'Centennial Olympic Park', famousFood: ['Fried Chicken', 'Peach Cobbler', 'Southern BBQ'] },
  { name: 'Boston', slug: 'boston', stateSlug: 'massachusetts', stateName: 'Massachusetts', countrySlug: 'usa', population: '650K', landmark: 'Fenway Park', famousFood: ['New England Clam Chowder', 'Lobster Rolls', 'Boston Cream Pie'] },
  { name: 'Denver', slug: 'denver', stateSlug: 'colorado', stateName: 'Colorado', countrySlug: 'usa', population: '713K', landmark: 'Red Rocks Amphitheatre', famousFood: ['Green Chile', 'Bison Burgers', 'Craft IPA'] },
  { name: 'Washington DC', slug: 'washington-dc', stateSlug: 'district-of-columbia', stateName: 'District of Columbia', countrySlug: 'usa', population: '670K', landmark: 'The White House', famousFood: ['Half-Smoke Sausage', 'Jumbo Slice Pizza', 'Pupusas'] },

  // --- UNITED KINGDOM (UK) ---
  { name: 'London', slug: 'london', stateSlug: 'greater-london', stateName: 'Greater London', countrySlug: 'uk', population: '8.9M', landmark: 'Big Ben & Tower Bridge', famousFood: ['Fish and Chips', 'Full English Breakfast', 'Sunday Roast'] },
  { name: 'Birmingham', slug: 'birmingham', stateSlug: 'west-midlands', stateName: 'West Midlands', countrySlug: 'uk', population: '1.1M', landmark: 'Bullring Shopping Centre', famousFood: ['Balti Curry', 'Pork Pies', 'Cadbury Chocolate'] },
  { name: 'Manchester', slug: 'manchester', stateSlug: 'greater-manchester', stateName: 'Greater Manchester', countrySlug: 'uk', population: '550K', landmark: 'Old Trafford', famousFood: ['Manchester Tart', 'Boddingtons Ale', 'Curry Mile Dishes'] },
  { name: 'Glasgow', slug: 'glasgow', stateSlug: 'scotland', stateName: 'Scotland', countrySlug: 'uk', population: '635K', landmark: 'George Square', famousFood: ['Deep Fried Mars Bar', 'Haggis', 'Scotch Pies'] },
  { name: 'Edinburgh', slug: 'edinburgh', stateSlug: 'scotland', stateName: 'Scotland', countrySlug: 'uk', population: '530K', landmark: 'Edinburgh Castle', famousFood: ['Cullen Skink', 'Haggis Neeps & Tatties', 'Shortbread'] },
  { name: 'Leeds', slug: 'leeds', stateSlug: 'west-yorkshire', stateName: 'West Yorkshire', countrySlug: 'uk', population: '812K', landmark: 'Kirkstall Abbey', famousFood: ['Yorkshire Pudding', 'Craft Ales', 'Fish & Chips'] },
  { name: 'Bristol', slug: 'bristol', stateSlug: 'south-west-england', stateName: 'South West England', countrySlug: 'uk', population: '470K', landmark: 'Clifton Suspension Bridge', famousFood: ['Cider', 'Cheddar Cheese', 'Artisanal Sourdough'] },
  { name: 'Liverpool', slug: 'liverpool', stateSlug: 'merseyside', stateName: 'Merseyside', countrySlug: 'uk', population: '496K', landmark: 'Albert Dock', famousFood: ['Scouse Stew', 'Wet Nests', 'Craft Craft Beers'] },
  { name: 'Cambridge', slug: 'cambridge', stateSlug: 'cambridgeshire', stateName: 'Cambridgeshire', countrySlug: 'uk', population: '145K', landmark: 'Kings College Chapel', famousFood: ['Chelsea Buns', 'Afternoon Tea', 'Game Pies'] },
  { name: 'Oxford', slug: 'oxford', stateSlug: 'oxfordshire', stateName: 'Oxfordshire', countrySlug: 'uk', population: '152K', landmark: 'Radcliffe Camera', famousFood: ['Oxford Sausage', 'Frank Cooper Marmalade', 'Artisan Coffee'] },

  // --- UAE ---
  { name: 'Dubai', slug: 'dubai', stateSlug: 'dubai-emirate', stateName: 'Emirate of Dubai', countrySlug: 'uae', population: '3.6M', landmark: 'Burj Khalifa', famousFood: ['Shawarma', 'Al Harees', 'Luqaimat'] },
  { name: 'Abu Dhabi', slug: 'abu-dhabi', stateSlug: 'abu-dhabi-emirate', stateName: 'Emirate of Abu Dhabi', countrySlug: 'uae', population: '1.5M', landmark: 'Sheikh Zayed Grand Mosque', famousFood: ['Machboos', 'Camel Burger', 'Karak Tea'] },
  { name: 'Sharjah', slug: 'sharjah', stateSlug: 'sharjah-emirate', stateName: 'Emirate of Sharjah', countrySlug: 'uae', population: '1.4M', landmark: 'Central Souq', famousFood: ['Arabic Mezze', 'Fresh Seafood', 'Falafel'] },
  { name: 'Ajman', slug: 'ajman', stateSlug: 'ajman-emirate', stateName: 'Emirate of Ajman', countrySlug: 'uae', population: '500K', landmark: 'Ajman Corniche', famousFood: ['Grilled Fish', 'Kunafa', 'Manakish'] },
  { name: 'Ras Al Khaimah', slug: 'ras-al-khaimah', stateSlug: 'rak-emirate', stateName: 'Emirate of RAK', countrySlug: 'uae', population: '400K', landmark: 'Jebel Jais', famousFood: ['Emirati Biryani', 'Fresh Dates', 'Al Madrooba'] },
  { name: 'Dubai Marina', slug: 'dubai-marina', stateSlug: 'dubai-emirate', stateName: 'Emirate of Dubai', countrySlug: 'uae', population: '120K', landmark: 'Cayan Tower', famousFood: ['Luxury Brunch', 'Seafood Grills', 'Artisan Cocktails'] },
  { name: 'Business Bay Dubai', slug: 'business-bay-dubai', stateSlug: 'dubai-emirate', stateName: 'Emirate of Dubai', countrySlug: 'uae', population: '90K', landmark: 'Dubai Canal', famousFood: ['Corporate Lunches', 'Executive Sushi', 'Specialty Coffee'] },

  // --- CANADA ---
  { name: 'Toronto', slug: 'toronto', stateSlug: 'ontario', stateName: 'Ontario', countrySlug: 'canada', population: '2.9M', landmark: 'CN Tower', famousFood: ['Peameal Bacon Sandwich', 'Toronto Pizza', 'Roti'] },
  { name: 'Montreal', slug: 'montreal', stateSlug: 'quebec', stateName: 'Quebec', countrySlug: 'canada', population: '1.7M', landmark: 'Mount Royal', famousFood: ['Poutine', 'Montreal Bagels', 'Smoked Meat Sandwich'] },
  { name: 'Vancouver', slug: 'vancouver', stateSlug: 'british-columbia', stateName: 'British Columbia', countrySlug: 'canada', population: '675K', landmark: 'Stanley Park', famousFood: ['Wild BC Salmon', 'Japadog', 'Spot Prawns'] },
  { name: 'Calgary', slug: 'calgary', stateSlug: 'alberta', stateName: 'Alberta', countrySlug: 'canada', population: '1.3M', landmark: 'Calgary Tower', famousFood: ['Alberta Beef Steak', 'Ginger Beef', 'Caesar Cocktail'] },

  // --- AUSTRALIA ---
  { name: 'Sydney', slug: 'sydney', stateSlug: 'new-south-wales', stateName: 'New South Wales', countrySlug: 'australia', population: '5.3M', landmark: 'Sydney Opera House', famousFood: ['Sydney Rock Oysters', 'Flat White', 'Avocado Toast'] },
  { name: 'Melbourne', slug: 'melbourne', stateSlug: 'victoria', stateName: 'Victoria', countrySlug: 'australia', population: '5.0M', landmark: 'Federation Square', famousFood: ['Specialty Espresso', 'Souvlaki', 'Dim Sim'] },
  { name: 'Brisbane', slug: 'brisbane', stateSlug: 'queensland', stateName: 'Queensland', countrySlug: 'australia', population: '2.5M', landmark: 'Story Bridge', famousFood: ['Moreton Bay Bugs', 'Barramundi', 'Mango Smoothies'] },

  // --- GERMANY ---
  { name: 'Berlin', slug: 'berlin', stateSlug: 'berlin-state', stateName: 'State of Berlin', countrySlug: 'germany', population: '3.6M', landmark: 'Brandenburg Gate', famousFood: ['Currywurst', 'Doner Kebab', 'Berliner Pfannkuchen'] },
  { name: 'Munich', slug: 'munich', stateSlug: 'bavaria', stateName: 'Bavaria', countrySlug: 'germany', population: '1.5M', landmark: 'Marienplatz', famousFood: ['Weisswurst', 'Pretzels', 'Bavarian Beer'] },
  { name: 'Frankfurt', slug: 'frankfurt', stateSlug: 'hesse', stateName: 'Hesse', countrySlug: 'germany', population: '750K', landmark: 'Romer', famousFood: ['Frankfurter Sausage', 'Grune Sosse', 'Apfelwein'] },

  // --- FRANCE ---
  { name: 'Paris', slug: 'paris', stateSlug: 'ile-de-france', stateName: 'Île-de-France', countrySlug: 'france', population: '2.1M', landmark: 'Eiffel Tower', famousFood: ['Croissant', 'Confit de Canard', 'Macarons'] },
  { name: 'Lyon', slug: 'lyon', stateSlug: 'auvergne-rhone-alpes', stateName: 'Auvergne-Rhône-Alpes', countrySlug: 'france', population: '520K', landmark: 'Basilica of Notre-Dame de Fourvière', famousFood: ['Quenelles', 'Saucisson de Lyon', 'Praline Tart'] },

  // --- SPAIN ---
  { name: 'Madrid', slug: 'madrid', stateSlug: 'madrid-region', stateName: 'Community of Madrid', countrySlug: 'spain', population: '3.3M', landmark: 'Royal Palace of Madrid', famousFood: ['Bocadillo de Calamares', 'Cocido Madrileño', 'Churros with Chocolate'] },
  { name: 'Barcelona', slug: 'barcelona', stateSlug: 'catalonia', stateName: 'Catalonia', countrySlug: 'spain', population: '1.6M', landmark: 'Sagrada Família', famousFood: ['Paella', 'Tapas', 'Crema Catalana'] },

  // --- NETHERLANDS ---
  { name: 'Amsterdam', slug: 'amsterdam', stateSlug: 'north-holland', stateName: 'North Holland', countrySlug: 'netherlands', population: '870K', landmark: 'Rijksmuseum & Canals', famousFood: ['Stroopwafel', 'Bitterballen', 'Pickled Herring'] },

  // --- SINGAPORE ---
  { name: 'Singapore City', slug: 'singapore-city', stateSlug: 'central-region', stateName: 'Central Region', countrySlug: 'singapore', population: '5.6M', landmark: 'Marina Bay Sands', famousFood: ['Hainanese Chicken Rice', 'Chilli Crab', 'Laksa'] }
];

export function generateRestaurantPageData(serviceSlug: string, citySlug: string) {
  const service = RESTAURANT_SERVICES[serviceSlug] || RESTAURANT_SERVICES['restaurant-website-design'];
  const city = CITIES_DATA.find((c) => c.slug === citySlug) || CITIES_DATA[0];
  const country = COUNTRIES_DATA[city.countrySlug] || COUNTRIES_DATA['usa'];

  const formattedH1 = service.h1.replace('{city}', `${city.name}, ${country.name}`);
  const formattedMetaTitle = service.metaTitle
    .replace('{city}', `${city.name}`)
    .replace('{price}', country.websitePrice);
  const formattedMetaDesc = service.metaDesc
    .replace('{city}', city.name);

  const nearbyCities = CITIES_DATA.filter((c) => c.countrySlug === city.countrySlug && c.slug !== city.slug).slice(0, 6);

  return {
    service,
    city,
    country,
    h1: formattedH1,
    metaTitle: formattedMetaTitle,
    metaDesc: formattedMetaDesc,
    nearbyCities,
    canonicalUrl: `https://sandeshagrawal.tech/${service.slug}-in-${city.slug}/`
  };
}
