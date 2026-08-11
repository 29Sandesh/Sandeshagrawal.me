import React from 'react';
import { SEOHead } from './SEOHead';
import { generateRestaurantPageData, RESTAURANT_SERVICES, CITIES_DATA } from '../restaurantData';
import { PROJECTS } from '../constants';
import { 
  QrCode, 
  Smartphone, 
  MapPin, 
  Utensils, 
  Zap, 
  TrendingUp, 
  CheckCircle2, 
  AlertTriangle, 
  ArrowRight, 
  DollarSign, 
  ShieldCheck, 
  Clock, 
  Star,
  ChevronRight,
  ExternalLink,
  Sparkles,
  PhoneCall
} from 'lucide-react';

interface RestaurantCityPageProps {
  serviceSlug?: string;
  citySlug?: string;
}

export const RestaurantCityPage: React.FC<RestaurantCityPageProps> = ({
  serviceSlug = 'restaurant-website-design',
  citySlug = 'new-york-city'
}) => {
  const pageData = generateRestaurantPageData(serviceSlug, citySlug);
  const { service, city, country, h1, metaTitle, metaDesc, nearbyCities, canonicalUrl } = pageData;

  const restaurantProjects = PROJECTS.filter(
    (p) => p.id.includes('food') || p.id.includes('swigato') || p.id.includes('codehtml')
  ).slice(0, 3);

  // Structured Data for Google Rich Snippets
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      'name': `${service.title} in ${city.name}`,
      'provider': {
        '@type': 'ProfessionalService',
        'name': 'Sandesh Agrawal | Technical GTM & Web Engineer',
        'url': 'https://sandeshagrawal.tech',
        'telephone': '+919303228082'
      },
      'areaServed': {
        '@type': 'City',
        'name': city.name,
        'containedInPlace': {
          '@type': 'Country',
          'name': country.name
        }
      },
      'description': metaDesc,
      'offers': {
        '@type': 'Offer',
        'price': country.websitePrice.replace(/[^0-9]/g, ''),
        'priceCurrency': country.currency,
        'availability': 'https://schema.org/InStock'
      }
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': `How quickly can my restaurant in ${city.name} get a live website?`,
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': `Your complete restaurant website and QR code digital menu can be built and launched live in ${city.name} within 7 business days.`
          }
        },
        {
          '@type': 'Question',
          'name': `Do I have to pay monthly commissions like UberEats or Deliveroo in ${city.name}?`,
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': `No! We build your direct online ordering platform for a one-time setup fee of ${country.websitePrice}. You keep 100% of your delivery and takeaway profits with zero commission per order.`
          }
        },
        {
          '@type': 'Question',
          'name': `How does the QR Code Menu work for customers in ${city.name}?`,
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': `Diners simply scan the QR code placed on their table using their phone camera. Your interactive digital menu opens instantly without downloading any app.`
          }
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <SEOHead
        title={metaTitle}
        description={metaDesc}
        keywords={`${service.title}, restaurant website design ${city.name}, QR code menu ${city.name}, digital menu ${country.name}, restaurant online ordering ${city.name}`}
        canonicalUrl={canonicalUrl}
        jsonLd={jsonLd}
      />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-blue-900 via-slate-900 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30" />
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="flex flex-wrap items-center gap-2 mb-6 text-xs sm:text-sm text-blue-300 font-medium">
            <a href="/" className="hover:underline">Home</a>
            <ChevronRight className="w-3 h-3" />
            <a href="/restaurant-website" className="hover:underline">Restaurant Websites</a>
            <ChevronRight className="w-3 h-3" />
            <span>{country.flag} {country.name}</span>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white">{city.name}</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-xs sm:text-sm font-semibold mb-6">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span>Dedicated Hospitality Web Engineering in {city.name}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
            {h1}
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mb-8 leading-relaxed">
            {service.tagline} We equip restaurants, cafes, and bars near <span className="text-blue-400 font-medium">{city.landmark}</span> with ultra-fast mobile websites, QR code digital menus, and commission-free ordering systems.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12">
            <a
              href="https://wa.me/919303228082?text=Hi%20Sandesh,%20I%20want%20a%20restaurant%20website%20and%20QR%20menu%20for%20my%20venue%20in%20"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold shadow-lg shadow-blue-600/30 transition-all duration-200 text-base"
            >
              <PhoneCall className="w-5 h-5" />
              <span>Get Your Website in {city.name}</span>
            </a>

            <a
              href="#pricing"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700 text-slate-200 font-semibold transition-all duration-200 text-base"
            >
              <span>View Packages ({country.websitePrice})</span>
            </a>
          </div>

          {/* Quick Value Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-slate-800/80">
            <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-700/50">
              <div className="text-2xl font-bold text-blue-400">{country.websitePrice}</div>
              <div className="text-xs text-slate-400">One-Time Build (No Monthly Lock-in)</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-700/50">
              <div className="text-2xl font-bold text-blue-400">7 Days</div>
              <div className="text-xs text-slate-400">Turnaround & Launch in {city.name}</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-700/50">
              <div className="text-2xl font-bold text-blue-400">0% Commission</div>
              <div className="text-xs text-slate-400">Keep 100% of Delivery Orders</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-700/50">
              <div className="text-2xl font-bold text-blue-400">QR Menu Included</div>
              <div className="text-xs text-slate-400">Instant Phone Scan Ready</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points & Opportunity */}
      <section className="py-16 md:py-24 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-600 font-semibold text-sm tracking-wider uppercase">Local Hospitality Market Analysis</span>
            <h2 className="text-3xl font-bold text-slate-900 mt-2 mb-4">
              {service.painPointHeader}
            </h2>
            <p className="text-slate-600 text-lg">
              In {city.name}, over <strong className="text-slate-900">82% of diners search for local menus and table availability on their mobile phones</strong> before deciding where to eat.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-red-100 text-red-600 flex items-center justify-center mb-5">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Losing Diners to Competitors</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                If your venue in {city.name} only relies on social media or outdated PDFs, hungry diners leave your page in seconds and book at competing restaurants.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center mb-5">
                <DollarSign className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">30% Delivery App Tax</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Third-party delivery apps eat up to 30% of every order ticket. A direct website returns 100% of order profits straight into your bank account.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-5">
                <QrCode className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Slow Paper Menu Bottlenecks</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Printing new menus every time prices change is expensive. Contactless QR menus allow instant updates, allergen tags, and high-margin item highlights.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-600 font-semibold text-sm tracking-wider uppercase">Built For Hospitality Success</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-2 mb-4">
              {service.solutionHeader}
            </h2>
            <p className="text-slate-600 text-lg">
              We design and code bespoke, lightning-fast digital experiences specifically optimized for cafes, restaurants, bars, and food trucks in {city.name}.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:border-blue-500/30 transition-all">
              <Smartphone className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-2">Mobile-First UI & Fast Loads</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Loads under 0.8 seconds on 4G/5G mobile connections so guests in {city.name} browse your signature dishes seamlessly.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:border-blue-500/30 transition-all">
              <QrCode className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-2">Contactless QR Code Menu</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Table QR scan generator included. Update prices, daily specials, and dietary icons instantly from your admin dashboard.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:border-blue-500/30 transition-all">
              <MapPin className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-2">Google Maps & Local SEO</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Complete Schema.org LocalBusiness markup to rank your venue high on Google Maps search queries in {city.name}.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:border-blue-500/30 transition-all">
              <Utensils className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-2">Direct Online Ordering</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Receive food takeaway and delivery orders straight to your WhatsApp or email inbox with zero commission cuts.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:border-blue-500/30 transition-all">
              <Clock className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-2">Table Reservation System</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Allow guests in {city.name} to reserve tables in advance with automated confirmation notifications.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:border-blue-500/30 transition-all">
              <ShieldCheck className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-2">100% Code Ownership</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                No platform lock-in, proprietary builders, or hidden monthly fees. You own 100% of your source code and brand IP.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* QR Code Special Spotlight */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-900 to-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-semibold mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                <span>The Cherry On Top</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight">
                Instant QR Code Scanner Menu For Every Table in {city.name}
              </h2>
              <p className="text-slate-300 text-base sm:text-lg mb-6 leading-relaxed">
                Give your customers a premium, contactless dining experience. Print your custom QR code on table tents, coasters, or window stickers.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-slate-200 text-sm sm:text-base">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <span>Sub-second instant camera scan loading without any app download</span>
                </li>
                <li className="flex items-center gap-3 text-slate-200 text-sm sm:text-base">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <span>Highlight high-margin dishes, daily specials, and chef recommendations</span>
                </li>
                <li className="flex items-center gap-3 text-slate-200 text-sm sm:text-base">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <span>Multi-language options for international tourists visiting {city.name}</span>
                </li>
              </ul>
              <a
                href={`https://wa.me/919303228082?text=Hi%20Sandesh,%20I%20want%20a%20QR%20Menu%20for%20my%20venue%20in%20${city.name}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all text-sm"
              >
                <span>Request QR Menu Demo</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="bg-slate-800/80 border border-slate-700/60 p-8 rounded-3xl text-center shadow-2xl relative">
              <div className="w-48 h-48 mx-auto bg-white rounded-2xl p-4 flex items-center justify-center shadow-inner mb-6">
                <QrCode className="w-36 h-36 text-slate-900" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Scan To Preview Menu</h3>
              <p className="text-slate-400 text-xs sm:text-sm">
                Optimized for iPhone iOS Camera & Android Chrome scans in {city.name}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Showcase */}
      <section className="py-16 md:py-24 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-600 font-semibold text-sm tracking-wider uppercase">Proof of Quality</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-2 mb-4">
              Featured Food & Hospitality Web Engines
            </h2>
            <p className="text-slate-600 text-lg">
              Explore custom platforms engineered for food franchises, cafes, and multi-location dining brands.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {restaurantProjects.map((project) => (
              <div key={project.id} className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden flex flex-col hover:shadow-lg transition-shadow">
                <div className="h-48 bg-slate-200 relative overflow-hidden">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{project.title}</h3>
                    <p className="text-slate-600 text-xs sm:text-sm mb-4 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-200">
                    {project.tech.slice(0, 3).map((tech, idx) => (
                      <span key={idx} className="px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transparent Pricing Section */}
      <section id="pricing" className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-600 font-semibold text-sm tracking-wider uppercase">Transparent Pricing ({country.currency})</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-2 mb-4">
              Bespoke Packages Tailored for {city.name}
            </h2>
            <p className="text-slate-600 text-lg">
              No expensive monthly software commissions. Flat, transparent one-time investment.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            {/* Package 1: QR Menu Setup */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full">Add-On / Menu Only</span>
                <h3 className="text-2xl font-bold text-slate-900 mt-4 mb-2">QR Code Digital Menu</h3>
                <p className="text-slate-600 text-xs sm:text-sm mb-6">Perfect for existing venues wanting contactless table scans.</p>
                <div className="text-4xl font-extrabold text-slate-900 mb-6">
                  {country.qrMenuPrice} <span className="text-xs font-normal text-slate-500">/ setup</span>
                </div>
                <ul className="space-y-3 mb-8 text-sm text-slate-700">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-600" /> Interactive Digital Menu</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-600" /> Print-Ready QR Graphics</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-600" /> Instant Item & Price Edits</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-600" /> Multi-language Ready</li>
                </ul>
              </div>
              <a
                href={`https://wa.me/919303228082?text=Hi%20Sandesh,%20I%20want%20the%20QR%20Menu%20package%20(${country.qrMenuPrice})%20for%20my%20venue%20in%20${city.name}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 text-center rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold transition-colors text-sm"
              >
                Order QR Menu
              </a>
            </div>

            {/* Package 2: Complete Website (FLAGSHIP) */}
            <div className="bg-white p-8 rounded-2xl border-2 border-blue-600 shadow-xl flex flex-col justify-between relative transform md:-translate-y-2">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-md">
                Most Popular
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full">Full Service</span>
                <h3 className="text-2xl font-bold text-slate-900 mt-4 mb-2">Hospitality Website Engine</h3>
                <p className="text-slate-600 text-xs sm:text-sm mb-6">Complete custom website + QR Menu + Local SEO in {city.name}.</p>
                <div className="text-4xl font-extrabold text-slate-900 mb-6">
                  {country.websitePrice} <span className="text-xs font-normal text-slate-500">/ one-time</span>
                </div>
                <ul className="space-y-3 mb-8 text-sm text-slate-700">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-600" /> Custom Mobile-First React Site</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-600" /> Interactive QR Code Digital Menu</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-600" /> Direct WhatsApp Takeaway Ordering</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-600" /> Google Maps & Local SEO Setup</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-600" /> Table Reservation Inquiry Form</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-600" /> 7-Day Live Launch Guarantee</li>
                </ul>
              </div>
              <a
                href={`https://wa.me/919303228082?text=Hi%20Sandesh,%20I%20want%20the%20Full%20Website%20Package%20(${country.websitePrice})%20for%20my%20venue%20in%20${city.name}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 text-center rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all shadow-md shadow-blue-600/30 text-sm"
              >
                Launch Website in {city.name}
              </a>
            </div>

            {/* Package 3: Custom Enterprise */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-600 bg-slate-100 px-3 py-1 rounded-full">Multi-Location</span>
                <h3 className="text-2xl font-bold text-slate-900 mt-4 mb-2">Franchise & Chain Portal</h3>
                <p className="text-slate-600 text-xs sm:text-sm mb-6">For multi-outlet restaurant chains & food franchises in {country.name}.</p>
                <div className="text-4xl font-extrabold text-slate-900 mb-6">
                  Custom Quote
                </div>
                <ul className="space-y-3 mb-8 text-sm text-slate-700">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-600" /> Multi-Branch Location Finder</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-600" /> POS System Integrations</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-600" /> Centralized Cloud Kitchen Hub</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-600" /> Custom Mobile Apps (iOS & Android)</li>
                </ul>
              </div>
              <a
                href={`https://wa.me/919303228082?text=Hi%20Sandesh,%20I%20need%20a%20Custom%20Franchise%20Web%20Quote%20for%20my%20chain%20in%20${city.name}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 text-center rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold transition-colors text-sm"
              >
                Contact For Franchise Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Local Scene Block */}
      <section className="py-12 bg-white border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 text-blue-700 font-bold text-sm mb-2">
                <MapPin className="w-4 h-4" />
                <span>Serving Restaurants Across {city.name}, {country.name}</span>
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">
                Empowering Local Culinary Venues Near {city.landmark}
              </h4>
              <p className="text-slate-600 text-sm max-w-2xl">
                Whether your venue specializes in {city.famousFood.join(', ')} or fine dining, our web designs help you dominate search rankings in {city.name}.
              </p>
            </div>
            <a
              href={`https://wa.me/919303228082?text=Hi%20Sandesh,%20let's%20discuss%20a%20website%20for%20my%20venue%20in%20${city.name}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm whitespace-nowrap shadow-sm"
            >
              Book Strategy Call
            </a>
          </div>
        </div>
      </section>

      {/* Internal Nearby Cities Links */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h3 className="text-lg font-bold text-slate-900 mb-4">
            Restaurant Web Services in Nearby {country.name} Cities
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
            {nearbyCities.map((nearby) => (
              <a
                key={nearby.slug}
                href={`/${service.slug}-in-${nearby.slug}/`}
                className="p-3 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-blue-600 hover:border-blue-300 transition-all text-xs font-medium text-center truncate"
              >
                {nearby.name}
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default RestaurantCityPage;
