import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import WhatsAppFloat from './WhatsAppFloat';
import { SEOHead } from './SEOHead';
import { COUNTRIES_DATA, CITIES_DATA, RESTAURANT_SERVICES } from '../restaurantData';
import { Globe, ChevronRight } from 'lucide-react';

interface RestaurantCountryHubProps {
  countrySlug?: string;
}

export const RestaurantCountryHub: React.FC<RestaurantCountryHubProps> = ({ countrySlug = 'usa' }) => {
  const country = COUNTRIES_DATA[countrySlug] || COUNTRIES_DATA['usa'];
  const countryCities = CITIES_DATA.filter((c) => c.countrySlug === country.slug);
  const servicesList = Object.values(RESTAURANT_SERVICES);

  return (
    <div className="min-h-screen bg-black text-white font-sans relative overflow-x-hidden">
      <SEOHead
        title={`Restaurant Website Design & QR Code Menus in ${country.name} (${country.flag}) | $99`}
        description={`High-converting restaurant website design, QR code digital menus & commission-free online ordering for hospitality venues across ${country.name} for $99 flat rate.`}
        canonicalUrl={`https://sandeshagrawal.tech/restaurant-website/${country.slug}/`}
      />

      <Navbar />

      <main className="pt-20 sm:pt-24">
        {/* Hero */}
        <section className="py-16 md:py-24 bg-zinc-950 text-white border-b border-zinc-800">
          <div className="max-w-[1500px] mx-auto px-4 sm:px-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900 text-zinc-300 text-xs font-extrabold uppercase tracking-widest mb-6 border border-zinc-800">
              <Globe className="w-4 h-4 text-[#D4AF37]" />
              <span>HOSPITALITY WEB DIRECTORY — {country.flag} {country.name.toUpperCase()}</span>
            </div>

            <h1 className="font-headline font-black text-3xl sm:text-6xl text-white uppercase tracking-tight mb-6">
              RESTAURANT &amp; CAFE WEBSITE DESIGN IN {country.name.toUpperCase()}
            </h1>

            <p className="font-body text-zinc-300 text-base sm:text-xl font-medium max-w-3xl mb-8 leading-relaxed">
              {country.marketStats} Select your city below to get your venue a custom React website, contactless QR scanner menu, and direct commission-free ordering engine for just <strong className="text-[#D4AF37] font-black">{country.singlePriceLocal} ($99 USD)</strong> flat rate.
            </p>

            <a
              href={`https://wa.me/919303228082?text=Hi%20Sandesh,%20I'm%20looking%20for%20a%20$99%20restaurant%20website%20in%20${country.name}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black font-body font-black text-xs uppercase tracking-wider shadow-lg hover:bg-zinc-200 transition-all"
            >
              <span>Get Your $99 Website Package →</span>
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
                  className="p-5 rounded-2xl bg-zinc-950 border border-zinc-800 hover:border-white transition-all flex items-center justify-between group"
                >
                  <div>
                    <div className="font-headline font-bold text-white group-hover:text-[#D4AF37] transition-colors text-base uppercase">
                      {city.name}
                    </div>
                    <div className="text-xs text-zinc-400 mt-1 font-body">
                      {city.stateName} • Pop. {city.population}
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-zinc-500 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Services List */}
        <section className="py-16 bg-zinc-950 text-white border-t border-zinc-800">
          <div className="max-w-[1500px] mx-auto px-4 sm:px-8">
            <h2 className="font-headline font-black text-2xl sm:text-4xl text-white uppercase tracking-tight mb-8">
              HOSPITALITY SERVICES INCLUDED ($99 FLAT)
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {servicesList.map((srv) => (
                <div key={srv.slug} className="p-6 rounded-2xl bg-black border border-zinc-800">
                  <h3 className="font-headline font-bold text-white text-lg uppercase mb-2">{srv.title}</h3>
                  <p className="font-body text-zinc-400 text-xs leading-relaxed">{srv.tagline}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default RestaurantCountryHub;
