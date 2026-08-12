import React from 'react';
import { SEOHead } from './SEOHead';
import { COUNTRIES_DATA, CITIES_DATA, RESTAURANT_SERVICES, TESTIMONIALS_DATA, PORTFOLIO_CLIENTS } from '../restaurantData';
import { Utensils, MapPin, QrCode, Globe, Sparkles, ChevronRight, PhoneCall, CheckCircle2, ArrowRight } from 'lucide-react';

interface RestaurantCountryHubProps {
  countrySlug?: string;
}

export const RestaurantCountryHub: React.FC<RestaurantCountryHubProps> = ({ countrySlug = 'usa' }) => {
  const country = COUNTRIES_DATA[countrySlug] || COUNTRIES_DATA['usa'];
  const countryCities = CITIES_DATA.filter((c) => c.countrySlug === country.slug);
  const servicesList = Object.values(RESTAURANT_SERVICES);

  return (
    <main className="min-h-screen bg-black text-white font-sans relative overflow-x-hidden pt-16">
      <SEOHead
        title={`Restaurant Website Design & QR Code Menus in ${country.name} (${country.flag})`}
        description={`High-converting restaurant website design, QR code digital menus & commission-free online ordering for hospitality venues across ${country.name}.`}
        canonicalUrl={`https://sandeshagrawal.tech/restaurant-website/${country.slug}/`}
      />

      {/* Hero */}
      <section className="py-16 md:py-24 bg-white text-slate-900 border-b border-slate-200">
        <div className="max-w-[1500px] mx-auto px-4 sm:px-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-extrabold uppercase tracking-widest mb-6 border border-blue-200">
            <Globe className="w-4 h-4 text-blue-600" />
            <span>HOSPITALITY WEB DIRECTORY — {country.flag} {country.name.toUpperCase()}</span>
          </div>

          <h1 className="font-headline font-black text-3xl sm:text-6xl text-slate-900 uppercase tracking-tight mb-6">
            RESTAURANT &amp; CAFE WEBSITE DESIGN IN {country.name.toUpperCase()}
          </h1>

          <p className="font-body text-slate-700 text-base sm:text-xl font-bold max-w-3xl mb-8 leading-relaxed">
            {country.marketStats} Select your city below to get your venue a custom React website, contactless QR scanner menu, and direct commission-free ordering engine starting from {country.priceStartupLocal}.
          </p>

          <a
            href={`https://wa.me/919303228082?text=Hi%20Sandesh,%20I'm%20looking%20for%20a%20restaurant%20website%20in%20${country.name}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-body font-extrabold text-xs uppercase tracking-wider shadow-lg transition-all"
          >
            <span>Consult Technical GTM Engineer →</span>
          </a>
        </div>
      </section>

      {/* Cities Directory Grid */}
      <section className="py-16 md:py-24 bg-black text-white">
        <div className="max-w-[1500px] mx-auto px-4 sm:px-8">
          <h2 className="font-headline font-black text-2xl sm:text-4xl text-white uppercase tracking-tight mb-8">
            SELECT YOUR CITY IN {country.name.toUpperCase()}
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {countryCities.map((city) => (
              <a
                key={city.slug}
                href={`/restaurant-website-design-in-${city.slug}/`}
                className="p-5 rounded-2xl bg-zinc-950 border border-white/10 hover:border-[#D4AF37]/50 transition-all flex items-center justify-between group"
              >
                <div>
                  <div className="font-headline font-bold text-white group-hover:text-[#D4AF37] transition-colors text-base uppercase">
                    {city.name}
                  </div>
                  <div className="text-xs text-zinc-400 mt-1 font-body">
                    {city.stateName} • Pop. {city.population}
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-zinc-500 group-hover:text-[#D4AF37] transition-colors" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 bg-white text-slate-900 border-t border-slate-200">
        <div className="max-w-[1500px] mx-auto px-4 sm:px-8">
          <h2 className="font-headline font-black text-2xl sm:text-4xl text-slate-900 uppercase tracking-tight mb-8">
            HOSPITALITY SERVICES AVAILABLE IN {country.name.toUpperCase()}
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {servicesList.map((srv) => (
              <div key={srv.slug} className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                <h3 className="font-headline font-bold text-slate-900 text-lg uppercase mb-2">{srv.title}</h3>
                <p className="font-body text-slate-600 text-xs leading-relaxed">{srv.tagline}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default RestaurantCountryHub;
