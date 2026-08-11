import React from 'react';
import { SEOHead } from './SEOHead';
import { COUNTRIES_DATA, CITIES_DATA } from '../restaurantData';
import { Utensils, Globe, QrCode, Smartphone, MapPin, ChevronRight, CheckCircle2 } from 'lucide-react';

export const RestaurantMainHub: React.FC = () => {
  const countriesList = Object.values(COUNTRIES_DATA);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <SEOHead
        title="Global Restaurant & Cafe Website Design Directory | QR Code Menus"
        description="High-converting restaurant website design, QR code digital menus & commission-free ordering systems for cafes, restaurants & food trucks in UK, USA, UAE, Canada, Australia & Europe."
        canonicalUrl="https://sandeshagrawal.tech/restaurant-website/"
      />

      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-blue-950 to-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-xs sm:text-sm font-semibold mb-6">
            <Globe className="w-4 h-4 text-blue-400" />
            <span>Global Hospitality Web Engineering Network</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
            Global Restaurant & Cafe Website Design Network
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mb-8 leading-relaxed">
            Empowering 10,000+ dining venues, coffee shops, bakeries, and cloud kitchens across North America, Europe, United Kingdom, UAE, Australia, and Asia with ultra-fast mobile websites and QR code menus.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-slate-800 pt-8">
            <div>
              <div className="text-3xl font-extrabold text-blue-400">10</div>
              <div className="text-xs text-slate-400">Target Countries</div>
            </div>
            <div>
              <div className="text-3xl font-extrabold text-blue-400">700+</div>
              <div className="text-xs text-slate-400">Cities Covered</div>
            </div>
            <div>
              <div className="text-3xl font-extrabold text-blue-400">15</div>
              <div className="text-xs text-slate-400">Specialized Services</div>
            </div>
            <div>
              <div className="text-3xl font-extrabold text-blue-400">0%</div>
              <div className="text-xs text-slate-400">Delivery Commissions</div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Countries Directory */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-8">
            Select Your Target Country
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {countriesList.map((country) => {
              const count = CITIES_DATA.filter((c) => c.countrySlug === country.slug).length;
              return (
                <a
                  key={country.slug}
                  href={`/restaurant-website/${country.slug}/`}
                  className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-500 hover:shadow-lg transition-all group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-4xl">{country.flag}</span>
                    <span className="text-xs font-bold bg-blue-50 text-blue-700 px-3 py-1 rounded-full">
                      {country.websitePrice} one-time
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {country.name}
                  </h3>
                  <p className="text-slate-500 text-xs mt-2 mb-4 leading-relaxed">
                    {country.marketStats}
                  </p>
                  <div className="flex items-center justify-between text-xs font-semibold text-blue-600 pt-4 border-t border-slate-200">
                    <span>{count} Cities Covered</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default RestaurantMainHub;
