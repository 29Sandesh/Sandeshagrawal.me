import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SEOHead } from './SEOHead';
import { 
  generateRestaurantPageData, 
  TESTIMONIALS_DATA, 
  PORTFOLIO_CLIENTS, 
  RESTAURANT_SERVICES,
  COUNTRIES_DATA
} from '../restaurantData';
import { 
  Code2, 
  Layers, 
  Smartphone, 
  Send, 
  Bot, 
  TrendingUp, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles,
  ChevronDown,
  X,
  Globe,
  Cpu,
  MapPin,
  QrCode,
  Utensils,
  DollarSign,
  ShieldCheck,
  Clock,
  Star,
  ChevronRight,
  PhoneCall,
  AlertTriangle
} from 'lucide-react';

interface RestaurantCityPageProps {
  serviceSlug?: string;
  citySlug?: string;
}

export const RestaurantCityPage: React.FC<RestaurantCityPageProps> = ({
  serviceSlug = 'restaurant-website-design',
  citySlug = 'new-york-city'
}) => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [selectedPricingPlan, setSelectedPricingPlan] = useState<any | null>(null);

  const pageData = generateRestaurantPageData(serviceSlug, citySlug);
  const { service, city, country, h1, metaTitle, metaDesc, intro, marketOverview, techEdge, nearbyCities, canonicalUrl } = pageData;

  const locationTitle = city.name.toUpperCase();

  // Pricing Plans with Currency Localization
  const pricingPlans = [
    {
      name: "STARTUP ENGINE",
      priceUSD: country.priceStartupUSD,
      priceLocal: country.priceStartupLocal,
      focus: `Custom ${service.title} & SEO`,
      desc: `Bespoke high-performance React website built for ${city.name} venues with sub-second speeds.`,
      features: [
        "100% Hand-Coded React & Tailwind CSS",
        "Sub-Second Lightning PageSpeed (<0.8s)",
        "Mobile-First Responsive Interface",
        "Interactive Contactless QR Code Digital Menu",
        "Direct WhatsApp Takeaway Ordering",
        "Google Maps & Local Business Schema Setup",
        "100% Source Code Ownership (Zero Fees)",
        "3 to 5 Days Rapid Turnaround"
      ]
    },
    {
      name: "GROWTH SYSTEM",
      priceUSD: country.priceGrowthUSD,
      priceLocal: country.priceGrowthLocal,
      focus: "Full Website & Ordering Engine",
      badge: "MOST POPULAR",
      desc: "Complete Web Application with custom admin panel for menu updates, online ordering & reservations.",
      features: [
        "Full-Stack React.js & Node.js Architecture",
        "Custom Admin Console for Instant Menu Edits",
        "Commission-Free Direct Online Ordering System",
        "Stripe / Local Payment Gateway Sync",
        "Automated Table Reservation System",
        "Multi-language Menu Support for Tourists",
        "100% Source Code Ownership",
        "7 to 14 Days Delivery"
      ]
    },
    {
      name: "ENTERPRISE PROTOCOL",
      priceUSD: country.priceEnterpriseUSD,
      priceLocal: country.priceEnterpriseLocal,
      focus: "Franchise & Chain Portal",
      desc: "Multi-branch restaurant chain or cloud kitchen software platform with automated sales engines.",
      features: [
        "Multi-Location Branch Finder & Order Dispatch",
        "POS System & Kiosk Integration",
        "Centralized Multi-Brand Cloud Kitchen Portal",
        "Automated B2B Outbound Lead Engine for Corporate Catering",
        "Priority 24/7 Engineering SLA Support",
        "Custom iOS & Android Mobile Apps",
        "21 to 30 Days Delivery"
      ]
    }
  ];

  // Dynamic FAQs for rich snippets & accordion
  const currentFaqs = [
    {
      q: `How quickly can my restaurant in ${city.name} get a live website?`,
      a: `Your complete restaurant website and QR code digital menu can be built and launched live in ${city.name} within 3 to 7 business days.`
    },
    {
      q: `Do I have to pay monthly commissions to third-party delivery apps in ${city.name}?`,
      a: `No! CodeHTML builds your direct online ordering platform for a flat rate starting from ${country.priceStartupLocal}. You keep 100% of your delivery and takeaway profits with zero commission per order.`
    },
    {
      q: `How does the Contactless QR Code Menu work for customers in ${city.name}?`,
      a: `Diners simply scan the QR code placed on their table using their iPhone or Android camera. Your interactive digital menu opens instantly in under 0.8 seconds without downloading any app.`
    },
    {
      q: `Do I get 100% intellectual property (IP) and full source code ownership?`,
      a: `Yes, 100%. We transfer full source code repository access and database schemas directly to your company upon delivery. Zero recurring builder lock-in fees.`
    },
    {
      q: `Will my restaurant in ${city.name} rank on Google Maps "restaurants near me"?`,
      a: `Yes! Every website includes Schema.org LocalBusiness structured data, Google Maps GBP verification optimization, and geotargeted local SEO markup tailored for ${city.name}.`
    },
    {
      q: `Can I update menu items and prices myself from my phone in ${city.name}?`,
      a: `Absolutely. We provide a lightweight, secure admin dashboard where you can edit menu items, update prices, add daily chef specials, or mark dishes as out-of-stock in real-time.`
    }
  ];

  // Structured Data / JSON-LD Schema
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
        'price': country.priceStartupLocal.replace(/[^0-9]/g, ''),
        'priceCurrency': country.currency,
        'availability': 'https://schema.org/InStock'
      }
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': currentFaqs.map((faq) => ({
        '@type': 'Question',
        'name': faq.q,
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': faq.a
        }
      }))
    }
  ];

  return (
    <main className="min-h-screen bg-black text-white relative overflow-x-hidden pt-16 pb-0 font-sans">
      <SEOHead
        title={metaTitle}
        description={metaDesc}
        keywords={`${service.title}, restaurant website design ${city.name}, QR code menu ${city.name}, digital menu ${country.name}, restaurant online ordering ${city.name}`}
        canonicalUrl={canonicalUrl}
        jsonLd={jsonLd}
      />

      {/* --- SECTION 1: HERO (Codehtml.in Wave SVG & Eyebrow Pill) --- */}
      <section
        id="hero"
        className="w-full h-[calc(100vh-64px)] min-h-[580px] max-h-[820px] relative flex flex-col justify-between overflow-hidden pt-4 pb-4 bg-white text-slate-900"
      >
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none bg-gradient-to-b from-white via-slate-50 to-blue-50/40">
          <svg className="absolute bottom-0 left-0 right-0 w-full h-56 sm:h-72 md:h-96" viewBox="0 0 1440 320" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.3" d="M0 160L48 176C96 192 192 224 288 224C384 224 480 192 576 165.3C672 139 768 117 864 128C960 139 1056 181 1152 192C1248 203 1344 181 1392 170.7L1440 160V320H1392C1344 320 1248 320 1152 320C1056 320 960 320 864 320C768 320 672 320 576 320C480 320 384 320 288 320C192 320 96 320 48 320H0V160Z" fill="#3B82F6"/>
            <path opacity="0.45" d="M0 192L60 202.7C120 213 240 235 360 224C480 213 600 171 720 165.3C840 160 960 192 1080 197.3C1200 203 1320 181 1380 170.7L1440 160V320H1380C1320 320 1200 320 1080 320C960 320 840 320 720 320C600 320 480 320 360 320C240 320 120 320 60 320H0V192Z" fill="#60A5FA"/>
            <path opacity="0.65" d="M0 224L48 213.3C96 203 192 181 288 186.7C384 192 480 224 576 229.3C672 235 768 213 864 197.3C960 181 1056 171 1152 181.3C1248 192 1344 224 1392 240L1440 256V320H1392C1344 320 1248 320 1152 320C1056 320 960 320 864 320C768 320 672 320 576 320C480 320 384 320 288 320C192 320 96 320 48 320H0V224Z" fill="#93C5FD"/>
          </svg>
        </div>

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 w-full relative z-10 flex flex-col justify-end h-full">
          <div className="mt-auto mb-6 sm:mb-8 py-2 text-center max-w-4xl mx-auto">
            
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50/95 text-blue-700 text-[10px] sm:text-xs font-body font-extrabold uppercase tracking-[0.2em] mb-4 border border-blue-200/80 shadow-sm backdrop-blur-md"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
              #1 {service.title.toUpperCase()} IN {locationTitle} ({country.flag} {country.name})
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-headline font-black text-2xl sm:text-5xl md:text-6xl text-[#0f172a] uppercase tracking-tight leading-[1.08] mb-3 drop-shadow-[0_1px_2px_rgba(255,255,255,0.8)]"
            >
              {h1}
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-body text-slate-800 text-xs sm:text-base md:text-lg font-bold max-w-3xl mx-auto leading-relaxed mb-5 drop-shadow-[0_1px_2px_rgba(255,255,255,0.8)]"
            >
              {intro} We equip restaurants, cafes, and bars near <span className="text-blue-600 font-bold">{city.landmark}</span> with ultra-fast mobile websites, QR scanner menus, and direct commission-free ordering platforms starting from {country.priceStartupLocal}.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col items-center justify-center gap-3 mb-3"
            >
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto">
                <a
                  href={`https://wa.me/919303228082?text=Hi%20Sandesh,%20I'm%20looking%20for%20a%20restaurant%20website%20in%20${city.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-7 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-body font-extrabold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 shadow-lg shadow-blue-500/25 transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
                >
                  <span>Start Your Project →</span>
                </a>

                <a
                  href="#pricing"
                  className="w-full sm:w-auto px-7 py-3 rounded-full bg-white/95 hover:bg-white text-slate-900 font-body font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 shadow-md border border-slate-200 transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
                >
                  <span>View Pricing ({country.priceStartupLocal})</span>
                </a>
              </div>

              {/* Client Trust Proof Badge */}
              <div className="flex items-center justify-center gap-3 mt-3">
                <div className="flex -space-x-2 shrink-0 items-center">
                  {TESTIMONIALS_DATA.slice(0, 3).map((item, idx) => (
                    <div key={idx} className="w-8 h-8 rounded-full overflow-hidden border-2 border-white shadow-sm shrink-0">
                      <img src={item.avatar} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
                <span className="font-body text-[11px] sm:text-xs font-black uppercase tracking-wider text-slate-800 drop-shadow-[0_1px_2px_rgba(255,255,255,0.9)]">
                  TRUSTED BY 100+ BRANDS & FOUNDERS
                </span>
              </div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="pt-3 pb-2 border-t border-slate-200/80 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-body font-bold text-[10px] sm:text-xs text-slate-600 uppercase tracking-wider mt-auto z-20"
          >
            <span className="text-blue-600">★ {country.name} Directory</span>
            <span>•</span>
            <span>Pop. {city.population}</span>
            <span>•</span>
            <span>Near {city.landmark}</span>
            <span>•</span>
            <span>Sub-0.8s Speed</span>
          </motion.div>
        </div>
      </section>

      {/* --- SECTION 2: LOCAL MARKET ANALYSIS (bg-white text-slate-900) --- */}
      <section className="py-8 sm:py-16 bg-white text-slate-900 relative z-10 border-t border-slate-200">
        <div className="max-w-[1500px] mx-auto px-4 sm:px-8 text-left">
          <div className="mb-6 sm:mb-8">
            <span className="font-body font-bold text-blue-600 text-xs tracking-[0.2em] uppercase block mb-1.5 sm:mb-2">
              LOCAL MARKET ANALYSIS & ARCHITECTURE
            </span>
            <h2 className="font-headline font-black text-2xl sm:text-5xl text-slate-900 uppercase tracking-tight">
              WHAT WE DELIVER IN {locationTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-3.5 sm:gap-6 mb-6 sm:mb-8">
            <div className="p-4 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-sm">
              <span className="font-body font-extrabold text-[10px] sm:text-xs text-blue-600 uppercase tracking-wider block mb-1.5 sm:mb-2">
                01. REGIONAL LANDSCAPE
              </span>
              <p className="font-body text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                {marketOverview}
              </p>
            </div>

            <div className="p-4 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-sm">
              <span className="font-body font-extrabold text-[10px] sm:text-xs text-blue-600 uppercase tracking-wider block mb-1.5 sm:mb-2">
                02. MARKET CHALLENGE SOLVED
              </span>
              <p className="font-body text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                Third-party delivery portals charge exorbitant commissions in {city.name}. Our direct online ordering engines ensure 100% of order profits remain inside your business bank account.
              </p>
            </div>

            <div className="p-4 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-sm">
              <span className="font-body font-extrabold text-[10px] sm:text-xs text-blue-600 uppercase tracking-wider block mb-1.5 sm:mb-2">
                03. ENGINEERING EDGE
              </span>
              <p className="font-body text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                {techEdge}
              </p>
            </div>
          </div>

          {/* 3 Metric Badges */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-6 sm:pt-8 border-t border-slate-200 max-w-3xl">
            <div>
              <div className="font-headline font-black text-xl sm:text-3xl text-blue-600">&lt;0.8s</div>
              <div className="font-body text-[9px] sm:text-xs font-bold text-slate-500 uppercase tracking-wider">PAGESPEED SCORE</div>
            </div>
            <div className="border-l border-slate-200 pl-4 sm:pl-6">
              <div className="font-headline font-black text-xl sm:text-3xl text-slate-900">100%</div>
              <div className="font-body text-[9px] sm:text-xs font-bold text-slate-500 uppercase tracking-wider">IP CODE OWNERSHIP</div>
            </div>
            <div className="border-l border-slate-200 pl-4 sm:pl-6">
              <div className="font-headline font-black text-xl sm:text-3xl text-blue-600">24/7</div>
              <div className="font-body text-[9px] sm:text-xs font-bold text-slate-500 uppercase tracking-wider">AI AUTOMATION</div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 3: QR CODE SCANNER SPOTLIGHT (bg-black text-white) --- */}
      <section className="py-12 sm:py-20 bg-black text-white relative z-10 border-t border-zinc-800">
        <div className="max-w-[1500px] mx-auto px-4 sm:px-8 text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider mb-4 border border-blue-500/30">
                <Sparkles className="w-3.5 h-3.5" />
                <span>THE CHERRY ON TOP</span>
              </div>
              <h2 className="font-headline font-black text-2xl sm:text-5xl text-white uppercase tracking-tight mb-6 leading-tight">
                INSTANT QR CODE SCANNER MENU FOR EVERY TABLE IN {locationTitle}
              </h2>
              <p className="font-body text-zinc-300 text-sm sm:text-base leading-relaxed mb-6">
                Replace slow paper menus with contactless table QR code scans. Diners in {city.name} simply scan the code with their smartphone camera — your dynamic HTML menu opens instantly without downloading any app.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  `Sub-second instant camera scan loading optimized for 4G/5G mobile networks in ${city.name}`,
                  "Highlight high-margin chef specials, cocktails, and daily promotions",
                  "Zero printing costs when menu prices or items change",
                  "Allergen & dietary badges (Vegan, Gluten-Free, Halal, Kosher)",
                  "Multi-language selector for international tourists visiting " + city.name
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-zinc-200 text-xs sm:text-sm font-medium">
                    <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <a
                href={`https://wa.me/919303228082?text=Hi%20Sandesh,%20I'm%20interested%20in%20a%20QR%20Code%20Menu%20for%20my%20venue%20in%20${city.name}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-body font-bold text-xs uppercase tracking-wider shadow-lg transition-all"
              >
                <span>Request QR Menu Demo →</span>
              </a>
            </div>

            <div className="lg:col-span-5 bg-zinc-950 border border-white/10 p-8 rounded-3xl text-center shadow-2xl relative">
              <div className="w-44 h-44 mx-auto bg-white rounded-2xl p-4 flex items-center justify-center shadow-inner mb-6">
                <QrCode className="w-36 h-36 text-slate-900" />
              </div>
              <h3 className="font-headline font-bold text-lg text-white mb-2 uppercase">Scan To Test Mobile Speed</h3>
              <p className="font-body text-zinc-400 text-xs leading-relaxed">
                Works seamlessly across iOS Safari &amp; Android Chrome for diners in {city.name}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 4: OUR SERVICES GRID (bg-black text-white - 3x3 Grid) --- */}
      <section id="services" className="pt-4 pb-12 sm:pt-4 sm:pb-20 px-4 sm:px-8 max-w-[1500px] mx-auto relative z-10 border-t border-white/10 text-left">
        <div className="mb-3 sm:mb-12">
          <h2 className="font-headline font-black text-2xl sm:text-5xl text-white uppercase tracking-tight">
            OUR SERVICES
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 items-stretch">
          {[
            {
              icon: Code2,
              title: "Custom Restaurant Websites",
              desc: `Bespoke React.js & Vite websites with sub-second speeds, zero WordPress plugins, and 100% source code ownership for ${city.name} venues.`,
              link: "/services/corporate-websites"
            },
            {
              icon: QrCode,
              title: "Contactless QR Menus",
              desc: `Interactive digital menu scan system with instant item edits, allergen icons, and multi-language support in ${city.name}.`,
              link: "/services/custom-web-applications"
            },
            {
              icon: Utensils,
              title: "Commission-Free Ordering",
              desc: `Direct takeaway & delivery ordering funnel sending order tickets straight to your WhatsApp & email in real-time.`,
              link: "/services/custom-web-applications"
            },
            {
              icon: MapPin,
              title: "Google Maps & Local SEO",
              desc: `LocalBusiness Schema markup, Google 3-Pack Maps setup, and geotargeted keyword optimization across ${city.name}.`,
              link: "/services/google-business-setup"
            },
            {
              icon: Clock,
              title: "Table Reservation Engine",
              desc: `Direct table booking module with zero cover fees, automated customer SMS confirmations, and capacity management.`,
              link: "/services/custom-web-applications"
            },
            {
              icon: Smartphone,
              title: "Mobile App Development",
              desc: `Cross-platform iOS and Android mobile apps for food franchises and multi-location dining brands in ${city.name}.`,
              link: "/services/mobile-apps"
            },
            {
              icon: Send,
              title: "GTM Corporate Outbound",
              desc: `Automated lead enrichment pipelines targeting corporate offices in ${city.name} for catering & event bookings.`,
              link: "/services/gtm-engineering"
            },
            {
              icon: Bot,
              title: "AI Booking Assistant",
              desc: `Autonomous AI chat agents that answer guest menu queries, record reservations, and take takeaway orders 24/7.`,
              link: "/services/ai-sales-agents"
            },
            {
              icon: TrendingUp,
              title: "Revenue & CRM Dashboards",
              desc: `Centralized analytics tracking order volume, repeat customer retention, and daily revenue metrics.`,
              link: "/services/revops-automation"
            }
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="p-3.5 sm:p-6 rounded-2xl bg-zinc-950 border border-white/10 hover:border-[#D4AF37]/40 transition-all group flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-headline font-bold text-xs sm:text-lg text-white mb-1.5 sm:mb-2 uppercase group-hover:text-[#D4AF37] transition-colors leading-tight">
                    {item.title}
                  </h3>
                  <p className="font-body text-[10px] sm:text-xs text-zinc-400 leading-relaxed mb-3 sm:mb-6">
                    {item.desc}
                  </p>
                </div>

                <a
                  href={`https://wa.me/919303228082?text=Hi%20Sandesh,%20I'm%20interested%20in%20${encodeURIComponent(item.title)}%20in%20${city.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-body text-[10px] sm:text-xs font-bold text-[#D4AF37] hover:text-white transition-colors"
                >
                  <span>Explore Service</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            );
          })}
        </div>
      </section>

      {/* --- SECTION 5: PORTFOLIO CLIENTS (bg-white text-slate-900) --- */}
      <section id="portfolio" className="py-10 bg-white text-slate-900 relative z-10 border-t border-slate-200">
        <div className="max-w-[1500px] mx-auto px-4 sm:px-8 text-left">
          <div className="mb-6 border-b border-slate-100 pb-4 flex items-center justify-between">
            <h2 className="font-headline font-black text-3xl sm:text-5xl text-slate-900 uppercase tracking-tight leading-none">
              OUR RECENT CLIENTS
            </h2>
            <span className="md:hidden text-[10px] font-body font-bold text-slate-400 uppercase tracking-widest">
              SWIPE ↔
            </span>
          </div>

          <div className="flex md:grid md:grid-cols-3 overflow-x-auto snap-x snap-mandatory gap-4 sm:gap-6 w-full items-stretch pb-4 no-scrollbar">
            {PORTFOLIO_CLIENTS.map((item, idx) => {
              const isCenter = idx === 1;
              return (
                <a 
                  key={item.id}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`relative rounded-2xl overflow-hidden group cursor-pointer border transition-all duration-300 h-[380px] sm:h-[460px] flex flex-col justify-between bg-slate-900 shrink-0 w-[84vw] sm:w-auto snap-center ${
                    isCenter 
                      ? 'border-2 border-blue-500 shadow-2xl z-10' 
                      : 'border-slate-200/80 shadow-md'
                  }`}
                >
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="absolute inset-0 w-full h-full object-cover brightness-100 contrast-100 saturate-100 group-hover:scale-105 transition-transform duration-700" 
                  />

                  <div className="absolute bottom-0 inset-x-0 h-36 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none z-0" />

                  <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20 pointer-events-none">
                    <span className="px-6 py-3 rounded-full bg-blue-600 text-white font-body font-black text-xs uppercase tracking-widest shadow-2xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2">
                      <span className="text-white font-bold">VISIT WEBSITE</span>
                      <span className="text-white font-black text-sm">↗</span>
                    </span>
                  </div>

                  <div className="relative z-10 p-4 sm:p-5 flex items-center justify-between">
                    <span className="bg-white/95 backdrop-blur-md px-3 py-1 rounded-md text-[9px] sm:text-[10px] font-body font-extrabold text-slate-900 uppercase tracking-wider shadow-md">
                      {item.tag}
                    </span>
                  </div>

                  <div className="relative z-10 p-4 sm:p-5 mt-auto flex items-end justify-between gap-4">
                    <div>
                      <h3 className="font-headline font-black text-xl sm:text-3xl text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)] tracking-tight uppercase">
                        {item.title}
                      </h3>
                      <p className="text-xs text-blue-300 font-bold mt-1">{item.metric}</p>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* --- SECTION 6: TESTIMONIALS MARQUEE (bg-slate-50 text-slate-900) --- */}
      <section id="testimonials" className="py-12 bg-slate-50 text-slate-900 relative z-10 border-t border-slate-200">
        <div className="max-w-[1500px] mx-auto px-4 sm:px-8 text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-center">
            <div className="lg:col-span-3 shrink-0">
              <span className="font-body text-[10px] font-bold text-blue-600 uppercase tracking-widest block mb-2">
                CLIENT TRUST &amp; VALIDATION
              </span>
              <h2 className="font-headline font-black text-2xl sm:text-4xl text-slate-900 uppercase tracking-tight leading-none">
                WHAT<br />
                OUR<br />
                <span className="font-serif italic font-normal text-blue-600 lowercase tracking-normal">clients</span> SAY
              </h2>
            </div>

            <div className="lg:col-span-9 overflow-hidden relative py-1">
              <div className="flex gap-4 w-max animate-marquee hover:[animation-play-state:paused]">
                {[...TESTIMONIALS_DATA, ...TESTIMONIALS_DATA].map((item, idx) => (
                  <a 
                    key={`t-${idx}`}
                    href={item.link || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-[260px] sm:w-[300px] bg-white border border-slate-200 rounded-xl p-4 flex flex-col justify-between shadow-sm hover:shadow-md hover:border-blue-500/40 transition-all text-left group shrink-0"
                  >
                    <p className="font-body text-xs text-slate-700 leading-relaxed mb-3 italic font-medium">
                      "{item.quote}"
                    </p>
                    
                    <div className="pt-3 border-t border-slate-100 flex items-center gap-2.5">
                      <img 
                        src={item.avatar} 
                        alt={item.name} 
                        className="w-9 h-9 rounded-lg object-cover border border-slate-200 shrink-0 shadow-2xs group-hover:scale-105 transition-transform"
                      />
                      <div>
                        <h4 className="font-headline font-black text-xs text-slate-900 uppercase tracking-wider group-hover:text-blue-600 transition-colors">
                          {item.name}
                        </h4>
                        <p className="text-[10px] text-slate-500">{item.role}</p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 7: PRICING TIERS (bg-black text-white) --- */}
      <section id="pricing" className="px-4 sm:px-8 max-w-[1500px] mx-auto pt-4 pb-12 sm:py-20 relative z-10 border-t border-white/10 text-left">
        <div className="mb-4 sm:mb-12">
          <h2 className="font-headline font-black text-xl sm:text-5xl text-white uppercase tracking-tight">
            TRANSPARENT PRICING ({country.currency})
          </h2>
        </div>

        {/* Desktop View: 3 Cards */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, idx) => (
            <div 
              key={idx}
              className={`p-8 rounded-3xl bg-zinc-950 border flex flex-col justify-between relative transition-all duration-300 ${
                plan.badge ? 'border-[#D4AF37] shadow-lg shadow-[#D4AF37]/10' : 'border-white/10'
              }`}
            >
              {plan.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#D4AF37] text-black text-[9px] font-body font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                  {plan.badge}
                </span>
              )}

              <div>
                <h3 className="font-headline font-black text-xl text-white uppercase tracking-tight mb-1">{plan.name}</h3>
                <span className="font-body text-[10px] font-bold text-[#D4AF37] uppercase tracking-wider block mb-4">{plan.focus}</span>

                <div className="flex items-baseline gap-2 mb-4">
                  <span className="font-headline font-black text-4xl text-white">{plan.priceLocal}</span>
                  <span className="font-body text-xs text-zinc-500 font-bold">/ {plan.priceUSD}</span>
                </div>

                <p className="font-body text-xs text-zinc-400 mb-6 leading-relaxed">{plan.desc}</p>

                <div className="border-t border-white/10 pt-6 space-y-2.5 mb-8">
                  {plan.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-xs text-zinc-300 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href={`https://wa.me/919303228082?text=Hi%20Sandesh,%20I%20want%20the%20${encodeURIComponent(plan.name)}%20package%20(${plan.priceLocal})%20for%20my%20venue%20in%20${city.name}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-6 rounded-xl bg-[#D4AF37] hover:bg-amber-400 text-black font-body font-bold text-xs uppercase tracking-wider text-center shadow-md transition-all block"
              >
                Start Project →
              </a>
            </div>
          ))}
        </div>

        {/* Mobile View */}
        <div className="grid md:hidden grid-cols-1 gap-3">
          {pricingPlans.map((plan, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedPricingPlan(plan)}
              className={`p-3.5 rounded-2xl bg-zinc-950 border flex items-center justify-between cursor-pointer active:scale-[0.98] transition-all relative ${
                plan.badge ? 'border-[#D4AF37] shadow-md shadow-[#D4AF37]/10' : 'border-white/15'
              }`}
            >
              <div className="flex flex-col text-left">
                {plan.badge && (
                  <span className="text-[9px] font-body font-black text-[#D4AF37] uppercase tracking-wider mb-0.5">
                    ★ {plan.badge}
                  </span>
                )}
                <h3 className="font-headline font-black text-sm text-white uppercase tracking-tight">
                  {plan.name}
                </h3>
                <span className="font-body text-[10px] text-zinc-400 font-medium">
                  {plan.focus} • <strong className="text-white font-bold">{plan.priceLocal}</strong>
                </span>
              </div>

              <button 
                type="button"
                className="px-3 py-1.5 rounded-lg bg-[#D4AF37] text-black font-body font-extrabold text-[10px] uppercase tracking-wider shrink-0"
              >
                View Details
              </button>
            </div>
          ))}
        </div>

        {/* Mobile Modal */}
        {selectedPricingPlan && (
          <div 
            onClick={() => setSelectedPricingPlan(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          >
            <div 
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-sm p-6 rounded-2xl bg-zinc-950 border border-[#D4AF37] shadow-2xl text-left max-h-[85vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedPricingPlan(null)}
                className="absolute top-3 right-3 p-1.5 rounded-full bg-white/10 text-white"
              >
                <X className="w-4 h-4" />
              </button>
              <h3 className="font-headline font-black text-xl text-white uppercase mb-1">{selectedPricingPlan.name}</h3>
              <div className="text-2xl font-bold text-[#D4AF37] mb-3">{selectedPricingPlan.priceLocal}</div>
              <div className="space-y-2 mb-6">
                {selectedPricingPlan.features.map((f: string, i: number) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-zinc-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
              <a
                href={`https://wa.me/919303228082?text=Hi%20Sandesh,%20I'm%20interested%20in%20the%20${encodeURIComponent(selectedPricingPlan.name)}%20package`}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3 rounded-xl bg-[#D4AF37] text-black font-bold text-center text-xs uppercase"
              >
                Book Package Now
              </a>
            </div>
          </div>
        )}
      </section>

      {/* --- SECTION 8: WHY WE STAND ALONE (bg-white text-slate-900) --- */}
      <section id="why-us" className="py-6 sm:py-16 bg-white text-slate-900 relative z-10 border-t border-slate-200">
        <div className="max-w-[1500px] mx-auto px-4 sm:px-8 text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 items-center">
            <div className="lg:col-span-5">
              <span className="font-body text-[10px] sm:text-xs font-bold text-blue-600 uppercase tracking-widest block mb-1.5 sm:mb-3">
                THE CODEHTML STANDARD
              </span>
              <h2 className="font-headline font-black text-2xl sm:text-6xl text-slate-900 uppercase tracking-tight leading-tight sm:leading-none mb-3 sm:mb-6">
                WHY WE<br className="hidden sm:inline" />{" "}
                <span className="font-serif italic font-normal text-blue-600 lowercase tracking-normal">STAND ALONE.</span>
              </h2>
              <p className="font-body text-slate-700 text-xs sm:text-base leading-relaxed mb-4 sm:mb-8 font-medium max-w-lg">
                Most web agencies deliver slow, bloated WordPress templates. We write bespoke, hand-coded React engines optimized for lightning load speeds, zero monthly platform fees, and 100% IP code ownership.
              </p>
            </div>

            <div className="lg:col-span-7 space-y-2.5 sm:space-y-4">
              <div className="bg-slate-50 border border-slate-200/80 rounded-xl sm:rounded-2xl p-3.5 sm:p-6 shadow-sm">
                <h3 className="font-headline font-bold text-xs sm:text-base text-slate-900 uppercase tracking-wider mb-1 sm:mb-2">
                  SUB-SECOND LIGHTNING SPEEDS (&lt;0.8s)
                </h3>
                <p className="font-body text-[11px] sm:text-sm text-slate-600 leading-snug sm:leading-relaxed font-medium">
                  Bespoke, custom-coded architecture makes your website load instantly on mobile phones in {city.name}, eliminating frustrating delays and bounce rates.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200/80 rounded-xl sm:rounded-2xl p-3.5 sm:p-6 shadow-sm">
                <h3 className="font-headline font-bold text-xs sm:text-base text-slate-900 uppercase tracking-wider mb-1 sm:mb-2">
                  100% INTELLECTUAL PROPERTY OWNERSHIP
                </h3>
                <p className="font-body text-[11px] sm:text-sm text-slate-600 leading-snug sm:leading-relaxed font-medium">
                  You get 100% full source code ownership with zero monthly subscription fees, locking platform costs, or proprietary agency traps.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200/80 rounded-xl sm:rounded-2xl p-3.5 sm:p-6 shadow-sm">
                <h3 className="font-headline font-bold text-xs sm:text-base text-slate-900 uppercase tracking-wider mb-1 sm:mb-2">
                  GOOGLE 3-PACK MAPS &amp; LOCAL SEO
                </h3>
                <p className="font-body text-[11px] sm:text-sm text-slate-600 leading-snug sm:leading-relaxed font-medium">
                  Directly map and optimize your venue pages for Google "restaurants near me" searches, driving organic customer leads straight to your tables.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 9: WHAT IS GTM ENGINEERING (bg-black text-white) --- */}
      <section id="what-is-gtm" className="py-6 sm:py-16 bg-black text-white relative z-10 border-t border-zinc-800">
        <div className="max-w-[1500px] mx-auto px-4 sm:px-8 text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 items-center">
            <div className="lg:col-span-5">
              <span className="font-body text-[10px] sm:text-xs font-bold text-blue-500 uppercase tracking-widest block mb-1.5 sm:mb-3">
                AUTOMATED SALES & CATERING ENGINE
              </span>
              <h2 className="font-headline font-black text-2xl sm:text-5xl text-white uppercase tracking-tight leading-tight sm:leading-none mb-3 sm:mb-6">
                WHAT IS<br className="hidden sm:inline" />{" "}
                <span className="font-serif italic font-normal text-blue-500 lowercase tracking-normal">GTM Engineering?</span>
              </h2>
              <p className="font-body text-zinc-300 text-xs sm:text-base leading-relaxed mb-4 sm:mb-8 font-medium max-w-lg">
                Go-To-Market (GTM) Engineering for restaurants means building automated systems that find local corporate offices in {city.name}, extract decision-maker contacts, and dispatch personalized catering & event pitches 24/7.
              </p>
              <a
                href={`https://wa.me/919303228082?text=Hi%20Sandesh,%20tell%20me%20more%20about%20GTM%20Engineering%20for%20my%20restaurant%20in%20${city.name}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-7 sm:py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-body font-extrabold text-[11px] sm:text-xs uppercase tracking-wider shadow-lg transition-all"
              >
                <span>Explore Corporate GTM Engine →</span>
              </a>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-4">
              <div className="bg-zinc-950 border border-white/10 rounded-2xl p-5">
                <h3 className="font-headline font-bold text-white text-sm uppercase mb-2">01. Lead Enrichment</h3>
                <p className="text-zinc-400 text-xs leading-relaxed">Automated prospecting tools identifying corporate companies near {city.landmark}.</p>
              </div>
              <div className="bg-zinc-950 border border-white/10 rounded-2xl p-5">
                <h3 className="font-headline font-bold text-white text-sm uppercase mb-2">02. AI SDR Agents</h3>
                <p className="text-zinc-400 text-xs leading-relaxed">Autonomous AI email dispatchers targeting HR managers for corporate lunch orders.</p>
              </div>
              <div className="bg-zinc-950 border border-white/10 rounded-2xl p-5">
                <h3 className="font-headline font-bold text-white text-sm uppercase mb-2">03. CRM Automated Sync</h3>
                <p className="text-zinc-400 text-xs leading-relaxed">HubSpot &amp; WhatsApp webhooks capturing corporate inquiries instantly.</p>
              </div>
              <div className="bg-zinc-950 border border-white/10 rounded-2xl p-5">
                <h3 className="font-headline font-bold text-white text-sm uppercase mb-2">04. Revenue Attribution</h3>
                <p className="text-zinc-400 text-xs leading-relaxed">Real-time dashboards tracking direct online sales and takeaway ticket sizes.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 10: LOCAL CULINARY SCENE BLOCK (bg-white text-slate-900) --- */}
      <section className="py-12 bg-white border-y border-slate-200">
        <div className="max-w-[1500px] mx-auto px-4 sm:px-8">
          <div className="bg-blue-50/80 border border-blue-200 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 text-blue-700 font-bold text-xs uppercase tracking-wider mb-2">
                <MapPin className="w-4 h-4" />
                <span>Culinary Scene in {city.name}, {country.name}</span>
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">
                Empowering Local Culinary Venues Near {city.landmark}
              </h4>
              <p className="text-slate-600 text-xs sm:text-sm max-w-2xl leading-relaxed">
                Whether your venue specializes in {city.famousFood.join(', ')} or fine dining, our web designs help you dominate search rankings across {city.name}.
              </p>
            </div>
            <a
              href={`https://wa.me/919303228082?text=Hi%20Sandesh,%20let's%20discuss%20a%20website%20for%20my%20venue%20in%20${city.name}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs uppercase tracking-wider whitespace-nowrap shadow-sm"
            >
              Book Strategy Call
            </a>
          </div>
        </div>
      </section>

      {/* --- SECTION 11: FAQ ACCORDION (bg-black text-white) --- */}
      <section id="faqs" className="py-12 sm:py-20 bg-black text-white relative z-10 border-t border-zinc-800">
        <div className="max-w-[1500px] mx-auto px-4 sm:px-8 text-left">
          <div className="mb-8">
            <span className="font-body font-bold text-blue-500 text-xs tracking-widest uppercase block mb-2">HAVE QUESTIONS?</span>
            <h2 className="font-headline font-black text-2xl sm:text-5xl text-white uppercase tracking-tight">
              FREQUENTLY ASKED QUESTIONS
            </h2>
          </div>

          <div className="space-y-3 max-w-4xl">
            {currentFaqs.map((faq, idx) => (
              <div 
                key={idx}
                className="bg-zinc-950 border border-white/10 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-headline font-bold text-sm sm:text-base uppercase tracking-tight text-white hover:text-blue-400 transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-zinc-400 shrink-0 transition-transform duration-300 ${activeFaq === idx ? 'rotate-180 text-blue-400' : ''}`} />
                </button>

                {activeFaq === idx && (
                  <div className="px-5 pb-5 pt-0 text-zinc-300 text-xs sm:text-sm leading-relaxed border-t border-white/5 pt-3 font-medium">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 12: RELATED CITIES MESH (bg-slate-50 text-slate-900) --- */}
      <section className="py-12 bg-slate-50 border-t border-slate-200">
        <div className="max-w-[1500px] mx-auto px-4 sm:px-8">
          <h3 className="font-headline font-bold text-lg text-slate-900 uppercase tracking-tight mb-4">
            RESTAURANT WEB SERVICES IN NEARBY {country.name.toUpperCase()} CITIES
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {nearbyCities.map((nearby) => (
              <a
                key={nearby.slug}
                href={`/${service.slug}-in-${nearby.slug}/`}
                className="p-3 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-blue-600 hover:border-blue-300 transition-all text-xs font-medium text-center truncate shadow-2xs"
              >
                {nearby.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 13: FINAL CTA BANNER (bg-blue-600 text-white) --- */}
      <section className="py-16 bg-blue-600 text-white text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
          <h2 className="font-headline font-black text-3xl sm:text-5xl uppercase tracking-tight mb-4">
            READY TO BUILD YOUR RESTAURANT WEBSITE IN {locationTitle}?
          </h2>
          <p className="text-blue-100 text-sm sm:text-lg mb-8 max-w-2xl mx-auto">
            Get a high-converting React mobile website, QR code digital menu, and commission-free ordering engine delivered in 7 days.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`https://wa.me/919303228082?text=Hi%20Sandesh,%20I'm%20ready%20to%20start%20my%20restaurant%20website%20in%20${city.name}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-slate-900 font-body font-extrabold text-sm uppercase tracking-wider shadow-xl hover:bg-slate-100 transition-all"
            >
              <span>Book Strategy Call →</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default RestaurantCityPage;
