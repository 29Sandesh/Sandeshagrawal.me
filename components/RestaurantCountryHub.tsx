import React from 'react';
import { SEOHead } from './SEOHead';
import { COUNTRIES_DATA, CITIES_DATA, RESTAURANT_SERVICES } from '../restaurantData';
import { Utensils, MapPin, QrCode, Globe, Sparkles, ChevronRight, PhoneCall } from 'lucide-react';

interface RestaurantCountryHubProps {
  countrySlug?: string;
}

export const RestaurantCountryHub: React.FC<RestaurantCountryHubProps> = ({ countrySlug = 'usa' }) => {
  const country = COUNTRIES_DATA[countrySlug] || COUNTRIES_DATA['usa'];
  const countryCities = CITIES_DATA.filter((c) => c.countrySlug === country.slug);
  const servicesList = Object.values(RESTAURANT_SERVICES);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <SEOHead
        title={`Restaurant Website Design & QR Code Menus in ${country.name} (${country.flag})`}
        description={`High-converting restaurant website design, QR code digital menus & commission-free online ordering for hospitality venues across ${country.name}.`}
        canonicalUrl={`https://sandeshagrawal.tech/restaurant-website/${country.slug}/`}
      />

      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-xs sm:text-sm font-semibold mb-6">
            <Globe className="w-4 h-4 text-blue-400" />
            <span>Hospitality Web Engineering Directory — {country.flag} {country.name}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-6">
            Restaurant & Cafe Website Design in {country.name}
          </h1>

          <p className="text-lg text-slate-300 max-w-3xl mb-8 leading-relaxed">
            {country.marketStats} Choose your city below to get your venue a bespoke mobile website, QR code scanner menu, and commission-free online ordering system.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="https://wa.me/919303228082?text=Hi%20Sandesh,%20I'm%20looking%20for%20a%20restaurant%20website%20in%20"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all"
            >
              Consult Technical GTM Engineer
            </a>
          </div>
        </div>
      </section>

      {/* Cities Directory */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-8">
            Select Your City in {country.name}
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {countryCities.map((city) => (
              <a
                key={city.slug}
                href={`/restaurant-website-design-in-${city.slug}/`}
                className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-500 hover:bg-blue-50/50 transition-all flex items-center justify-between group"
              >
                <div>
                  <div className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {city.name}
                  </div>
                  <div className="text-xs text-slate-500 mt-1">
                    {city.stateName} • Pop. {city.population}
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-blue-600 transition-colors" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Services Available */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            Hospitality Services Available in {country.name}
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {servicesList.map((srv) => (
              <div key={srv.slug} className="p-4 rounded-xl bg-white border border-slate-200">
                <h3 className="font-bold text-slate-900 text-base mb-1">{srv.title}</h3>
                <p className="text-slate-600 text-xs">{srv.tagline}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default RestaurantCountryHub;
