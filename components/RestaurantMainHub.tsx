import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import WhatsAppFloat from './WhatsAppFloat';
import { SEOHead } from './SEOHead';
import { COUNTRIES_DATA, CITIES_DATA } from '../restaurantData';
import { Globe, ChevronRight } from 'lucide-react';

export const RestaurantMainHub: React.FC = () => {
  const countriesList = Object.values(COUNTRIES_DATA);

  return (
    <div className="min-h-screen bg-black text-white font-sans relative overflow-x-hidden">
      <SEOHead
        title="Global Restaurant & Cafe Website Design Directory | $99 Package"
        description="High-converting restaurant website design, QR code digital menus & commission-free ordering systems for cafes, restaurants & food trucks in UK, USA, UAE, Canada, Australia & Europe for $99 flat."
        canonicalUrl="https://sandeshagrawal.tech/restaurant-website/"
      />

      <Navbar />

      <main className="pt-20 sm:pt-24">
        {/* Hero */}
        <section className="py-16 md:py-24 bg-zinc-950 text-white border-b border-zinc-800">
          <div className="max-w-[1500px] mx-auto px-4 sm:px-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900 text-zinc-300 text-xs font-extrabold uppercase tracking-widest mb-6 border border-zinc-800">
              <Globe className="w-4 h-4 text-[#D4AF37]" />
              <span>GLOBAL HOSPITALITY WEB ENGINEERING NETWORK</span>
            </div>

            <h1 className="font-headline font-black text-3xl sm:text-6xl text-white uppercase tracking-tight mb-6">
              GLOBAL RESTAURANT &amp; CAFE WEBSITE NETWORK
            </h1>

            <p className="font-body text-zinc-300 text-base sm:text-xl font-medium max-w-3xl mb-8 leading-relaxed">
              Empowering 10,000+ dining venues, coffee shops, bakeries, and cloud kitchens across North America, Europe, United Kingdom, UAE, Australia, and Asia with ultra-fast mobile websites and QR code menus for a flat rate of <strong className="text-[#D4AF37]">$99 USD</strong>.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-zinc-800 pt-8 max-w-3xl">
              <div>
                <div className="font-headline font-black text-3xl text-white">10</div>
                <div className="font-body text-xs font-bold text-zinc-400 uppercase tracking-wider">TARGET COUNTRIES</div>
              </div>
              <div>
                <div className="font-headline font-black text-3xl text-white">700+</div>
                <div className="font-body text-xs font-bold text-zinc-400 uppercase tracking-wider">CITIES COVERED</div>
              </div>
              <div>
                <div className="font-headline font-black text-3xl text-white">15</div>
                <div className="font-body text-xs font-bold text-zinc-400 uppercase tracking-wider">SERVICES OFFERED</div>
              </div>
              <div>
                <div className="font-headline font-black text-3xl text-[#D4AF37]">$99</div>
                <div className="font-body text-xs font-bold text-zinc-400 uppercase tracking-wider">FLAT RATE FEE</div>
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
                    className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800 hover:border-white transition-all group"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-4xl">{country.flag}</span>
                      <span className="text-xs font-bold bg-[#D4AF37] text-black px-3 py-1 rounded-full uppercase">
                        {country.singlePriceLocal} Flat Rate
                      </span>
                    </div>
                    <h3 className="font-headline font-black text-2xl text-white group-hover:text-[#D4AF37] transition-colors uppercase">
                      {country.name}
                    </h3>
                    <p className="font-body text-zinc-400 text-xs mt-2 mb-4 leading-relaxed">
                      {country.marketStats}
                    </p>
                    <div className="flex items-center justify-between text-xs font-bold text-white pt-4 border-t border-zinc-800 uppercase">
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

      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default RestaurantMainHub;
