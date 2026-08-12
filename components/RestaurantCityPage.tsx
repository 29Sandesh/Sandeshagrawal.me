import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';
import WhatsAppFloat from './WhatsAppFloat';
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
  Zap
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

  const pageData = generateRestaurantPageData(serviceSlug, citySlug);
  const { service, city, country, h1, metaTitle, metaDesc, intro, marketOverview, techEdge, nearbyCities, canonicalUrl } = pageData;

  const locationTitle = city.name.toUpperCase();

  // Dynamic FAQs for rich snippets & accordion
  const currentFaqs = [
    {
      q: `How much does a custom restaurant website in ${city.name} cost?`,
      a: `Our complete restaurant website package in ${city.name} costs just ${country.singlePriceLocal} ($99 USD) flat rate. Zero hidden fees, zero monthly platform retainers, and 100% source code ownership.`
    },
    {
      q: `How quickly can my venue in ${city.name} get live online?`,
      a: `Your custom hand-coded React mobile website, QR code scanner menu, and direct online ordering system can be built and launched live in ${city.name} within 7 business days.`
    },
    {
      q: `Do I have to pay monthly commissions to delivery apps in ${city.name}?`,
      a: `No! Third-party delivery apps eat up to 30% per order. We build your direct online ordering platform for a single $99 investment. You keep 100% of your order profits.`
    },
    {
      q: `How does the Contactless QR Code Menu work for customers in ${city.name}?`,
      a: `Diners simply scan the table QR code using their iPhone or Android camera. Your interactive digital menu opens instantly in under 0.8 seconds without downloading any app.`
    },
    {
      q: `Do I get 100% intellectual property (IP) and full source code ownership?`,
      a: `Yes, 100%. We transfer full GitHub source code repository access and database schemas directly to your company upon delivery. Zero recurring builder lock-in fees.`
    },
    {
      q: `Will my restaurant in ${city.name} rank on Google Maps "restaurants near me"?`,
      a: `Yes! Every website includes Schema.org LocalBusiness structured data, Google Maps GBP verification optimization, and geotargeted local SEO markup tailored for ${city.name}.`
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
        'price': '99',
        'priceCurrency': 'USD',
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
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden font-sans">
      <SEOHead
        title={metaTitle}
        description={metaDesc}
        keywords={`${service.title}, restaurant website design ${city.name}, QR code menu ${city.name}, digital menu ${country.name}, restaurant online ordering ${city.name}`}
        canonicalUrl={canonicalUrl}
        jsonLd={jsonLd}
      />

      {/* --- GLOBAL NAVBAR --- */}
      <Navbar />

      <main className="pt-20 sm:pt-24">
        {/* --- SECTION 1: HERO (Sleek Black & White Theme with Founder Trust Avatars) --- */}
        <section
          id="hero"
          className="w-full relative flex flex-col justify-center overflow-hidden py-16 sm:py-24 bg-black text-white border-b border-zinc-800"
        >
          {/* Subtle Grid Background */}
          <div className="absolute inset-0 z-0 bg-[radial-gradient(#333_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none" />

          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 w-full relative z-10 text-center">
            
            {/* Top Pill / Eyebrow (Sleek Black/White/Zinc Pill) */}
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900 text-zinc-300 text-[10px] sm:text-xs font-body font-extrabold uppercase tracking-[0.2em] mb-6 border border-zinc-800 backdrop-blur-md shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              #1 {service.title.toUpperCase()} IN {locationTitle} ({country.flag} {country.name})
            </motion.div>

            {/* Main Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-headline font-black text-3xl sm:text-6xl md:text-7xl text-white uppercase tracking-tight leading-[1.05] mb-6 max-w-5xl mx-auto"
            >
              {h1}
            </motion.h1>

            {/* Subheadline */}
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-body text-zinc-300 text-sm sm:text-lg md:text-xl font-medium max-w-3xl mx-auto leading-relaxed mb-8"
            >
              {intro} Get a custom hand-coded React mobile website, QR Scanner Menu, and direct ordering platform for your venue near <span className="text-white font-bold underline decoration-zinc-600 underline-offset-4">{city.landmark}</span> for just <strong className="text-[#D4AF37] font-black">{country.singlePriceLocal} ($99 USD)</strong> flat rate.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col items-center justify-center gap-4 mb-8"
            >
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
                <a
                  href={`https://wa.me/919303228082?text=Hi%20Sandesh,%20I%20want%20the%20$99%20Restaurant%20Website%20Package%20for%20my%20venue%20in%20${city.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-white hover:bg-zinc-200 text-black font-body font-black text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
                >
                  <span>GET YOUR WEBSITE NOW ($99) →</span>
                </a>

                <a
                  href="#portfolio"
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-zinc-900 hover:bg-zinc-800 text-white font-body font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 border border-zinc-700 flex items-center justify-center gap-2"
                >
                  <span>VIEW PORTFOLIO</span>
                </a>
              </div>

              {/* Client / Founders Trust Proof Badge (Exact Avatars) */}
              <div className="flex items-center justify-center gap-3 mt-4 pt-4 border-t border-zinc-900">
                <div className="flex -space-x-2 shrink-0 items-center">
                  {TESTIMONIALS_DATA.slice(0, 3).map((item, idx) => (
                    <div key={idx} className="w-8 h-8 rounded-full overflow-hidden border-2 border-black shadow-md shrink-0">
                      <img src={item.avatar} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
                <span className="font-body text-xs font-black uppercase tracking-wider text-zinc-300">
                  TRUSTED BY 100+ BRANDS &amp; FOUNDERS
                </span>
              </div>
            </motion.div>

            {/* Quick Specs Bar */}
            <div className="flex flex-wrap items-center justify-center gap-6 pt-6 text-xs font-mono text-zinc-400 border-t border-zinc-900 max-w-4xl mx-auto">
              <span>{country.flag} {country.name}</span>
              <span>•</span>
              <span>Pop. {city.population}</span>
              <span>•</span>
              <span>Near {city.landmark}</span>
              <span>•</span>
              <span className="text-emerald-400 font-bold">Sub-0.8s Speed</span>
              <span>•</span>
              <span className="text-[#D4AF37] font-bold">$99 One-Time</span>
            </div>
          </div>
        </section>

        {/* --- SECTION 2: LOCAL MARKET ANALYSIS (bg-white text-slate-900) --- */}
        <section className="py-12 sm:py-20 bg-white text-slate-900 relative z-10 border-t border-slate-200">
          <div className="max-w-[1500px] mx-auto px-4 sm:px-8 text-left">
            <div className="mb-8">
              <span className="font-body font-bold text-slate-500 text-xs tracking-[0.2em] uppercase block mb-2">
                LOCAL MARKET ANALYSIS &amp; ARCHITECTURE
              </span>
              <h2 className="font-headline font-black text-2xl sm:text-5xl text-slate-900 uppercase tracking-tight">
                WHAT WE DELIVER IN {locationTitle}
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm">
                <span className="font-body font-extrabold text-xs text-slate-900 uppercase tracking-wider block mb-2">
                  01. REGIONAL LANDSCAPE
                </span>
                <p className="font-body text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                  {marketOverview}
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm">
                <span className="font-body font-extrabold text-xs text-slate-900 uppercase tracking-wider block mb-2">
                  02. MARKET CHALLENGE SOLVED
                </span>
                <p className="font-body text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                  Third-party delivery portals charge up to 30% per order ticket in {city.name}. Our direct $99 online ordering web engines ensure 100% of order profits remain inside your business bank account.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm">
                <span className="font-body font-extrabold text-xs text-slate-900 uppercase tracking-wider block mb-2">
                  03. ENGINEERING EDGE
                </span>
                <p className="font-body text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                  {techEdge}
                </p>
              </div>
            </div>

            {/* 3 Metric Badges */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-slate-200 max-w-3xl">
              <div>
                <div className="font-headline font-black text-2xl sm:text-4xl text-slate-900">&lt;0.8s</div>
                <div className="font-body text-[10px] sm:text-xs font-bold text-slate-500 uppercase tracking-wider">PAGESPEED SCORE</div>
              </div>
              <div className="border-l border-slate-200 pl-4 sm:pl-6">
                <div className="font-headline font-black text-2xl sm:text-4xl text-slate-900">100%</div>
                <div className="font-body text-[10px] sm:text-xs font-bold text-slate-500 uppercase tracking-wider">IP CODE OWNERSHIP</div>
              </div>
              <div className="border-l border-slate-200 pl-4 sm:pl-6">
                <div className="font-headline font-black text-2xl sm:text-4xl text-slate-900">24/7</div>
                <div className="font-body text-[10px] sm:text-xs font-bold text-slate-500 uppercase tracking-wider">AI AUTOMATION</div>
              </div>
            </div>
          </div>
        </section>

        {/* --- SECTION 3: CONTACTLESS QR SCANNER SPOTLIGHT (bg-black text-white) --- */}
        <section className="py-12 sm:py-20 bg-black text-white relative z-10 border-t border-zinc-800">
          <div className="max-w-[1500px] mx-auto px-4 sm:px-8 text-left">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-900 text-zinc-300 text-xs font-bold uppercase tracking-wider mb-4 border border-zinc-800">
                  <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>THE CHERRY ON TOP</span>
                </div>
                <h2 className="font-headline font-black text-2xl sm:text-5xl text-white uppercase tracking-tight mb-6 leading-tight">
                  INSTANT QR CODE SCANNER MENU FOR EVERY TABLE IN {locationTitle}
                </h2>
                <p className="font-body text-zinc-300 text-sm sm:text-base leading-relaxed mb-6">
                  Replace slow paper menus with contactless table QR code scans. Diners in {city.name} simply scan the code with their smartphone camera — your dynamic HTML menu opens instantly in under 0.8 seconds without downloading any app.
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
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <a
                  href={`https://wa.me/919303228082?text=Hi%20Sandesh,%20I'm%20interested%20in%20a%20QR%20Code%20Menu%20for%20my%20venue%20in%20${city.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white hover:bg-zinc-200 text-black font-body font-black text-xs uppercase tracking-wider shadow-lg transition-all"
                >
                  <span>Request QR Menu Demo →</span>
                </a>
              </div>

              <div className="lg:col-span-5 bg-zinc-950 border border-zinc-800 p-8 rounded-3xl text-center shadow-2xl relative">
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
        <section id="services" className="py-12 sm:py-20 px-4 sm:px-8 max-w-[1500px] mx-auto relative z-10 border-t border-zinc-800 text-left">
          <div className="mb-8 sm:mb-12">
            <h2 className="font-headline font-black text-2xl sm:text-5xl text-white uppercase tracking-tight">
              OUR SERVICES INCLUDED FOR $99
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 items-stretch">
            {[
              {
                icon: Code2,
                title: "Custom Restaurant Websites",
                desc: `Bespoke React.js & Vite websites with sub-second speeds, zero WordPress plugins, and 100% source code ownership for ${city.name} venues.`,
              },
              {
                icon: QrCode,
                title: "Contactless QR Menus",
                desc: `Interactive digital menu scan system with instant item edits, allergen icons, and multi-language support in ${city.name}.`,
              },
              {
                icon: Utensils,
                title: "Commission-Free Ordering",
                desc: `Direct takeaway & delivery ordering funnel sending order tickets straight to your WhatsApp & email in real-time.`,
              },
              {
                icon: MapPin,
                title: "Google Maps & Local SEO",
                desc: `LocalBusiness Schema markup, Google 3-Pack Maps setup, and geotargeted keyword optimization across ${city.name}.`,
              },
              {
                icon: Clock,
                title: "Table Reservation Engine",
                desc: `Direct table booking module with zero cover fees, automated customer SMS confirmations, and capacity management.`,
              },
              {
                icon: Smartphone,
                title: "Mobile First Interface",
                desc: `Sub-0.8s page loads on mobile phones ensuring zero lost customers during busy dinner hours in ${city.name}.`,
              },
              {
                icon: Send,
                title: "WhatsApp & Email Sync",
                desc: `Instant order notification webhooks routing direct orders to kitchen staff phones.`,
              },
              {
                icon: Bot,
                title: "AI Guest Assistant",
                desc: `Smart AI assistant that answers guest menu questions, records dietary preferences, and collects reviews.`,
              },
              {
                icon: ShieldCheck,
                title: "100% Code Ownership",
                desc: `You own 100% of your source code repository with zero platform lock-in and zero recurring builder retainers.`,
              }
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div 
                  key={idx}
                  className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800 hover:border-white transition-all group flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-4 text-white">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-headline font-bold text-base sm:text-lg text-white mb-2 uppercase group-hover:text-[#D4AF37] transition-colors">
                      {item.title}
                    </h3>
                    <p className="font-body text-xs text-zinc-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* --- SECTION 5: PORTFOLIO SHOWCASE (bg-white text-slate-900) --- */}
        <section id="portfolio" className="py-12 sm:py-20 bg-white text-slate-900 relative z-10 border-t border-slate-200">
          <div className="max-w-[1500px] mx-auto px-4 sm:px-8 text-left">
            <div className="mb-8 border-b border-slate-100 pb-4 flex items-center justify-between">
              <h2 className="font-headline font-black text-3xl sm:text-5xl text-slate-900 uppercase tracking-tight leading-none">
                OUR RECENT CLIENTS
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6 items-stretch">
              {PORTFOLIO_CLIENTS.map((item) => (
                <a 
                  key={item.id}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative rounded-2xl overflow-hidden group cursor-pointer border border-slate-200 shadow-md h-[420px] flex flex-col justify-between bg-slate-900"
                >
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="absolute inset-0 w-full h-full object-cover brightness-100 contrast-100 group-hover:scale-105 transition-transform duration-700" 
                  />
                  <div className="absolute bottom-0 inset-x-0 h-36 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none z-0" />

                  <div className="relative z-10 p-5 flex items-center justify-between">
                    <span className="bg-white/95 backdrop-blur-md px-3 py-1 rounded-md text-[10px] font-body font-extrabold text-slate-900 uppercase tracking-wider shadow-md">
                      {item.tag}
                    </span>
                  </div>

                  <div className="relative z-10 p-5 mt-auto flex items-end justify-between gap-4">
                    <div>
                      <h3 className="font-headline font-black text-2xl text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)] tracking-tight uppercase">
                        {item.title}
                      </h3>
                      <p className="text-xs text-emerald-400 font-bold mt-1">{item.metric}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* --- SECTION 6: TESTIMONIALS MARQUEE (bg-slate-50 text-slate-900) --- */}
        <section id="testimonials" className="py-12 bg-slate-50 text-slate-900 relative z-10 border-t border-slate-200">
          <div className="max-w-[1500px] mx-auto px-4 sm:px-8 text-left">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-center">
              <div className="lg:col-span-3 shrink-0">
                <span className="font-body text-[10px] font-bold text-slate-500 uppercase tracking-widest block mb-2">
                  CLIENT TRUST &amp; VALIDATION
                </span>
                <h2 className="font-headline font-black text-2xl sm:text-4xl text-slate-900 uppercase tracking-tight leading-none">
                  WHAT<br />
                  OUR<br />
                  <span className="font-serif italic font-normal text-slate-600 lowercase tracking-normal">clients</span> SAY
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
                      className="w-[280px] sm:w-[320px] bg-white border border-slate-200 rounded-xl p-5 flex flex-col justify-between shadow-sm hover:shadow-md transition-all text-left shrink-0"
                    >
                      <p className="font-body text-xs text-slate-700 leading-relaxed mb-4 italic font-medium">
                        "{item.quote}"
                      </p>
                      
                      <div className="pt-3 border-t border-slate-100 flex items-center gap-3">
                        <img 
                          src={item.avatar} 
                          alt={item.name} 
                          className="w-10 h-10 rounded-lg object-cover border border-slate-200 shrink-0 shadow-2xs"
                        />
                        <div>
                          <h4 className="font-headline font-black text-xs text-slate-900 uppercase tracking-wider">
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

        {/* --- SECTION 7: SINGLE PRICING PACKAGE ($99 FLAT RATE) --- */}
        <section id="pricing" className="py-16 sm:py-24 px-4 sm:px-8 max-w-[1500px] mx-auto relative z-10 border-t border-zinc-800 text-center">
          <div className="mb-8">
            <span className="font-body font-bold text-[#D4AF37] text-xs tracking-widest uppercase block mb-2">
              DISRUPTIVE TRANSPARENT PRICING
            </span>
            <h2 className="font-headline font-black text-3xl sm:text-6xl text-white uppercase tracking-tight mb-4">
              COMPLETE RESTAURANT WEBSITE PACKAGE
            </h2>
            <p className="font-body text-zinc-400 text-sm sm:text-base max-w-2xl mx-auto">
              Everything your restaurant, cafe, or food truck in {city.name} needs to dominate local search rankings and capture direct mobile orders.
            </p>
          </div>

          {/* Centered Single Flagship Pricing Card */}
          <div className="max-w-xl mx-auto bg-zinc-950 border-2 border-[#D4AF37] p-8 sm:p-10 rounded-3xl shadow-2xl relative text-left">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#D4AF37] text-black text-[10px] font-body font-black px-4 py-1 rounded-full uppercase tracking-wider">
              ★ FLAT RATE OFFER — NO MONTHLY RETAINERS
            </div>

            <div className="flex items-baseline justify-between mb-4 pt-2">
              <div>
                <h3 className="font-headline font-black text-2xl text-white uppercase">FULL WEBSITE &amp; QR SYSTEM</h3>
                <p className="font-body text-xs text-zinc-400 font-medium">Bespoke React Mobile Engine for {city.name}</p>
              </div>
              <div className="text-right">
                <div className="font-headline font-black text-5xl text-[#D4AF37]">{country.singlePriceLocal}</div>
                <div className="font-body text-xs text-zinc-500 font-bold uppercase tracking-wider">One-Time Fee</div>
              </div>
            </div>

            <p className="font-body text-xs text-zinc-300 mb-6 leading-relaxed border-b border-zinc-800 pb-6">
              Get your venue live in {city.name} in 7 days with zero commissions, sub-second speeds, and complete source code ownership.
            </p>

            <div className="space-y-3 mb-8">
              {[
                "100% Custom Hand-Coded React & Tailwind CSS Website",
                "Sub-Second Lightning PageSpeed (<0.8s Mobile Load)",
                "Contactless QR Code Scanner Menu System Included",
                "Direct WhatsApp & Email Takeaway Ordering Funnel",
                "Google Maps 3-Pack SEO & Schema.org LocalBusiness Setup",
                "Table Reservation Inquiry Form Module",
                "100% Full Source Code IP Ownership (Zero Platform Retainers)",
                "7-Day Live Launch Guarantee in " + city.name
              ].map((feat, fIdx) => (
                <div key={fIdx} className="flex items-center gap-3 text-xs sm:text-sm text-zinc-200 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            <a
              href={`https://wa.me/919303228082?text=Hi%20Sandesh,%20I'm%20ready%20to%20order%20the%20$99%20(${country.singlePriceLocal})%20Restaurant%20Website%20Package%20for%20my%20venue%20in%20${city.name}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 px-8 rounded-full bg-[#D4AF37] hover:bg-amber-400 text-black font-body font-black text-xs sm:text-sm uppercase tracking-wider text-center shadow-xl transition-all block"
            >
              CLAIM $99 WEBSITE PACKAGE NOW →
            </a>
          </div>
        </section>

        {/* --- SECTION 8: WHY WE STAND ALONE (bg-white text-slate-900) --- */}
        <section id="why-us" className="py-12 sm:py-20 bg-white text-slate-900 relative z-10 border-t border-slate-200">
          <div className="max-w-[1500px] mx-auto px-4 sm:px-8 text-left">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5">
                <span className="font-body text-[10px] sm:text-xs font-bold text-slate-500 uppercase tracking-widest block mb-2">
                  THE CODEHTML STANDARD
                </span>
                <h2 className="font-headline font-black text-2xl sm:text-5xl text-slate-900 uppercase tracking-tight leading-tight mb-4">
                  WHY WE STAND ALONE.
                </h2>
                <p className="font-body text-slate-700 text-xs sm:text-base leading-relaxed mb-6 font-medium">
                  Most web agencies deliver slow, bloated WordPress templates charging thousands. We write bespoke, hand-coded React engines for a flat $99 investment.
                </p>
              </div>

              <div className="lg:col-span-7 space-y-4">
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 shadow-sm">
                  <h3 className="font-headline font-bold text-base text-slate-900 uppercase mb-2">
                    SUB-SECOND LIGHTNING SPEEDS (&lt;0.8s)
                  </h3>
                  <p className="font-body text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                    Bespoke architecture makes your website load instantly on mobile phones in {city.name}, eliminating frustrating delays and lost diners.
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 shadow-sm">
                  <h3 className="font-headline font-bold text-base text-slate-900 uppercase mb-2">
                    100% INTELLECTUAL PROPERTY OWNERSHIP
                  </h3>
                  <p className="font-body text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                    You get 100% full source code ownership with zero monthly subscription fees, locking platform costs, or proprietary agency traps.
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 shadow-sm">
                  <h3 className="font-headline font-bold text-base text-slate-900 uppercase mb-2">
                    GOOGLE 3-PACK MAPS &amp; LOCAL SEO
                  </h3>
                  <p className="font-body text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                    Directly map and optimize your venue pages for Google "restaurants near me" searches, driving organic customer leads straight to your tables.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- SECTION 9: WHAT IS GTM ENGINEERING (bg-black text-white) --- */}
        <section id="what-is-gtm" className="py-12 sm:py-20 bg-black text-white relative z-10 border-t border-zinc-800">
          <div className="max-w-[1500px] mx-auto px-4 sm:px-8 text-left">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5">
                <span className="font-body text-[10px] sm:text-xs font-bold text-zinc-400 uppercase tracking-widest block mb-2">
                  AUTOMATED CATERING & SALES ENGINE
                </span>
                <h2 className="font-headline font-black text-2xl sm:text-5xl text-white uppercase tracking-tight mb-4">
                  WHAT IS GTM ENGINEERING?
                </h2>
                <p className="font-body text-zinc-300 text-xs sm:text-base leading-relaxed mb-6 font-medium max-w-lg">
                  Go-To-Market (GTM) Engineering for restaurants means building automated systems that find local corporate offices in {city.name}, extract decision-maker contacts, and dispatch personalized catering pitches 24/7.
                </p>
                <a
                  href={`https://wa.me/919303228082?text=Hi%20Sandesh,%20tell%20me%20more%20about%20GTM%20Engineering%20for%20my%20restaurant%20in%20${city.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-black font-body font-black text-xs uppercase tracking-wider shadow-lg transition-all"
                >
                  <span>Explore Corporate GTM Engine →</span>
                </a>
              </div>

              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-5">
                  <h3 className="font-headline font-bold text-white text-sm uppercase mb-2">01. Lead Enrichment</h3>
                  <p className="text-zinc-400 text-xs leading-relaxed">Automated prospecting tools identifying corporate companies near {city.landmark}.</p>
                </div>
                <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-5">
                  <h3 className="font-headline font-bold text-white text-sm uppercase mb-2">02. AI SDR Agents</h3>
                  <p className="text-zinc-400 text-xs leading-relaxed">Autonomous AI email dispatchers targeting HR managers for corporate lunch orders.</p>
                </div>
                <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-5">
                  <h3 className="font-headline font-bold text-white text-sm uppercase mb-2">03. CRM Automated Sync</h3>
                  <p className="text-zinc-400 text-xs leading-relaxed">HubSpot &amp; WhatsApp webhooks capturing corporate inquiries instantly.</p>
                </div>
                <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-5">
                  <h3 className="font-headline font-bold text-white text-sm uppercase mb-2">04. Revenue Attribution</h3>
                  <p className="text-zinc-400 text-xs leading-relaxed">Real-time dashboards tracking direct online sales and takeaway ticket sizes.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- SECTION 10: LOCAL CULINARY SCENE BLOCK (bg-white text-slate-900) --- */}
        <section className="py-12 bg-white border-y border-slate-200 text-slate-900">
          <div className="max-w-[1500px] mx-auto px-4 sm:px-8">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <div className="flex items-center gap-2 text-slate-900 font-bold text-xs uppercase tracking-wider mb-2">
                  <MapPin className="w-4 h-4" />
                  <span>Culinary Scene in {city.name}, {country.name}</span>
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">
                  Empowering Local Culinary Venues Near {city.landmark}
                </h4>
                <p className="text-slate-600 text-xs sm:text-sm max-w-2xl leading-relaxed">
                  Whether your venue specializes in {city.famousFood.join(', ')} or fine dining, our $99 web designs help you dominate search rankings across {city.name}.
                </p>
              </div>
              <a
                href={`https://wa.me/919303228082?text=Hi%20Sandesh,%20let's%20discuss%20a%20website%20for%20my%20venue%20in%20${city.name}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs uppercase tracking-wider whitespace-nowrap shadow-sm"
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
              <span className="font-body font-bold text-zinc-400 text-xs tracking-widest uppercase block mb-2">HAVE QUESTIONS?</span>
              <h2 className="font-headline font-black text-2xl sm:text-5xl text-white uppercase tracking-tight">
                FREQUENTLY ASKED QUESTIONS
              </h2>
            </div>

            <div className="space-y-3 max-w-4xl">
              {currentFaqs.map((faq, idx) => (
                <div 
                  key={idx}
                  className="bg-zinc-950 border border-zinc-800 rounded-2xl overflow-hidden"
                >
                  <button
                    onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-headline font-bold text-sm sm:text-base uppercase tracking-tight text-white hover:text-[#D4AF37] transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 text-zinc-400 shrink-0 transition-transform duration-300 ${activeFaq === idx ? 'rotate-180 text-[#D4AF37]' : ''}`} />
                  </button>

                  {activeFaq === idx && (
                    <div className="px-5 pb-5 pt-0 text-zinc-300 text-xs sm:text-sm leading-relaxed border-t border-zinc-900 pt-3 font-medium">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- SECTION 12: RELATED CITIES MESH (bg-slate-50 text-slate-900) --- */}
        <section className="py-12 bg-slate-50 border-t border-slate-200 text-slate-900">
          <div className="max-w-[1500px] mx-auto px-4 sm:px-8">
            <h3 className="font-headline font-bold text-lg text-slate-900 uppercase tracking-tight mb-4">
              RESTAURANT WEB SERVICES IN NEARBY {country.name.toUpperCase()} CITIES
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
              {nearbyCities.map((nearby) => (
                <a
                  key={nearby.slug}
                  href={`/${service.slug}-in-${nearby.slug}/`}
                  className="p-3 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-black hover:border-slate-400 transition-all text-xs font-medium text-center truncate shadow-2xs"
                >
                  {nearby.name}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* --- SECTION 13: FINAL CTA BANNER (bg-zinc-950 text-white) --- */}
        <section className="py-16 bg-zinc-950 text-white text-center relative border-t border-zinc-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
            <h2 className="font-headline font-black text-3xl sm:text-5xl uppercase tracking-tight mb-4">
              READY TO BUILD YOUR RESTAURANT WEBSITE FOR $99?
            </h2>
            <p className="text-zinc-300 text-sm sm:text-lg mb-8 max-w-2xl mx-auto">
              Get a high-converting React mobile website, QR code digital menu, and commission-free ordering engine delivered in 7 days for a flat rate of {country.singlePriceLocal}.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={`https://wa.me/919303228082?text=Hi%20Sandesh,%20I'm%20ready%20to%20order%20the%20$99%20Restaurant%20Website%20Package%20for%20my%20venue%20in%20${city.name}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-slate-900 font-body font-black text-xs uppercase tracking-wider shadow-xl hover:bg-zinc-200 transition-all"
              >
                <span>CLAIM $99 PACKAGE NOW →</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* --- GLOBAL FOOTER & WHATSAPP FLOAT --- */}
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default RestaurantCityPage;
