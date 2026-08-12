import React from 'react';
import { SEOHead } from './SEOHead';
import { COUNTRIES_DATA, CITIES_DATA } from '../restaurantData';
import { Utensils, Globe, QrCode, Smartphone, MapPin, ChevronRight, CheckCircle2, ArrowRight } from 'lucide-react';

export const RestaurantMainHub: React.FC = () => {
  const countriesList = Object.values(COUNTRIES_DATA);

  return (
    <main className="min-h-screen bg-black text-white font-sans relative overflow-x-hidden pt-16">
      <SEOHead
        title="Global Restaurant & Cafe Website Design Directory | QR Code Menus"
        description="High-converting restaurant website design, QR code digital menus & commission-free ordering systems for cafes, restaurants & food trucks in UK, USA, UAE, Canada, Australia & Europe."
        canonicalUrl="https://sandeshagrawal.tech/restaurant-website/"
      />

      {/* Hero */}
      <section className="py-16 md:py-24 bg-white text-slate-900 border-b border-slate-200">
        <div className="max-w-[1500px] mx-auto px-4 sm:px-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-extrabold uppercase tracking-widest mb-6 border border-blue-200">
            <Globe className="w-4 h-4 text-blue-600" />
            <span>GLOBAL HOSPITALITY WEB ENGINEERING NETWORK</span>
          </div>

          <h1 className="font-headline font-black text-3xl sm:text-6xl text-slate-900 uppercase tracking-tight mb-6">
            GLOBAL RESTAURANT &amp; CAFE WEBSITE NETWORK
          </h1>

          <p className="font-body text-slate-700 text-base sm:text-xl font-bold max-w-3xl mb-8 leading-relaxed">
            Empowering 10,000+ dining venues, coffee shops, bakeries, and cloud kitchens across North America, Europe, United Kingdom, UAE, Australia, and Asia with ultra-fast mobile websites and QR code menus.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-slate-200 pt-8 max-w-3xl">
            <div>
              <div className="font-headline font-black text-3xl text-blue-600">10</div>
              <div className="font-body text-xs font-bold text-slate-500 uppercase tracking-wider">TARGET COUNTRIES</div>
            </div>
            <div>
              <div className="font-headline font-black text-3xl text-slate-900">700+</div>
              <div className="font-body text-xs font-bold text-slate-500 uppercase tracking-wider">CITIES COVERED</div>
            </div>
            <div>
              <div className="font-headline font-black text-3xl text-blue-600">15</div>
              <div className="font-body text-xs font-bold text-slate-500 uppercase tracking-wider">SERVICES OFFERED</div>
            </div>
            <div>
              <div className="font-headline font-black text-3xl text-slate-900">0%</div>
              <div className="font-body text-xs font-bold text-slate-500 uppercase tracking-wider">DELIVERY COMMISSIONS</div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Countries Directory */}
      <section className="py-16 md:py-24 bg-black text-white">
        <div className="max-w-[1500px] mx-auto px-4 sm:px-8">
          <h2 className="font-headline font-black text-2xl sm:text-4xl text-white uppercase tracking-tight mb-8">
            SELECT TARGET COUNTRY DIRECTORY
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {countriesList.map((country) => {
              const count = CITIES_DATA.filter((c) => c.countrySlug === country.slug).length;
              return (
                <a
                  key={country.slug}
                  href={`/restaurant-website/${country.slug}/`}
                  className="p-6 rounded-2xl bg-zinc-950 border border-white/10 hover:border-[#D4AF37]/50 transition-all group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-4xl">{country.flag}</span>
                    <span className="text-xs font-bold bg-[#D4AF37] text-black px-3 py-1 rounded-full uppercase">
                      From {country.priceStartupLocal}
                    </span>
                  </div>
                  <h3 className="font-headline font-black text-2xl text-white group-hover:text-[#D4AF37] transition-colors uppercase">
                    {country.name}
                  </h3>
                  <p className="font-body text-zinc-400 text-xs mt-2 mb-4 leading-relaxed">
                    {country.marketStats}
                  </p>
                  <div className="flex items-center justify-between text-xs font-bold text-[#D4AF37] pt-4 border-t border-white/10 uppercase">
                    <span>{count} Cities Covered</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
};

export default RestaurantMainHub;
