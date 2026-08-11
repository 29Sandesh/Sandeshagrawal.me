import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

const BASE_URL = 'https://sandeshagrawal.tech';

// Static core routes
const staticRoutes = [
  '/',
  '/case-studies',
  '/services',
  '/projects',
  '/contact',
  '/blog',
  '/gtm-engineer',
  '/gtm-engineer/',
  '/restaurant-website',
  '/restaurant-website/',
];

async function generateSitemap() {
  const coreUrls = new Set(staticRoutes);
  const restaurantUrls = new Set();

  // 1. Read blogData.ts
  try {
    const blogDataContent = fs.readFileSync(path.join(projectRoot, 'blogData.ts'), 'utf-8');
    const slugMatches = blogDataContent.match(/slug:\s*['"]([^'"]+)['"]/g);
    if (slugMatches) {
      slugMatches.forEach((match) => {
        const slug = match.replace(/slug:\s*['"]([^'"]+)['"]/, '$1');
        if (slug) coreUrls.add(slug);
      });
    }
  } catch (err) {
    console.warn('Could not read blogData.ts:', err.message);
  }

  // 2. Read verticalData.ts
  try {
    const verticalDataContent = fs.readFileSync(path.join(projectRoot, 'verticalData.ts'), 'utf-8');
    const slugMatches = verticalDataContent.match(/slug:\s*['"]([^'"]+)['"]/g);
    if (slugMatches) {
      slugMatches.forEach((match) => {
        const slug = match.replace(/slug:\s*['"]([^'"]+)['"]/, '$1');
        if (slug) coreUrls.add(`/services/${slug}`);
      });
    }
  } catch (err) {
    console.warn('Could not read verticalData.ts:', err.message);
  }

  // 3. Read constants.ts
  try {
    const constantsContent = fs.readFileSync(path.join(projectRoot, 'constants.ts'), 'utf-8');
    const projectsBlock = constantsContent.split('export const PROJECTS')[1] || '';
    const idMatches = projectsBlock.match(/id:\s*['"]([^'"]+)['"]/g);
    if (idMatches) {
      idMatches.forEach((match) => {
        const projectId = match.replace(/id:\s*['"]([^'"]+)['"]/, '$1');
        if (projectId) {
          coreUrls.add(`/projects/${projectId}`);
        }
      });
    }
  } catch (err) {
    console.warn('Could not read constants.ts:', err.message);
  }

  // 4. Read locationData.ts for State Hubs
  try {
    const locationDataContent = fs.readFileSync(path.join(projectRoot, 'locationData.ts'), 'utf-8');
    const stateMatches = locationDataContent.match(/"stateSlug":\s*"([^"]+)"/g);
    if (stateMatches) {
      stateMatches.forEach((match) => {
        const stateSlug = match.replace(/"stateSlug":\s*"([^"]+)"/, '$1');
        if (stateSlug) {
          coreUrls.add(`/gtm-engineer/${stateSlug}/`);
        }
      });
    }
  } catch (err) {
    console.warn('Could not read locationData.ts:', err.message);
  }

  // 5. Read restaurantData.ts for 10,000+ Restaurant & Cafe pSEO pages
  try {
    const restaurantDataContent = fs.readFileSync(path.join(projectRoot, 'restaurantData.ts'), 'utf-8');

    // Extract country slugs
    const countrySlugsMatches = restaurantDataContent.match(/slug:\s*['"](usa|uk|uae|canada|australia|germany|france|spain|netherlands|singapore)['"]/g);
    if (countrySlugsMatches) {
      countrySlugsMatches.forEach((match) => {
        const countrySlug = match.replace(/slug:\s*['"]([^'"]+)['"]/, '$1');
        if (countrySlug) {
          coreUrls.add(`/restaurant-website/${countrySlug}/`);
        }
      });
    }

    // Extract service slugs
    const serviceSlugs = [
      'restaurant-website-design',
      'cafe-website-design',
      'qr-code-menu-for-restaurants',
      'digital-menu-design',
      'restaurant-online-ordering-website',
      'restaurant-seo-services',
      'restaurant-booking-website',
      'bakery-website-design',
      'bar-website-design',
      'food-delivery-website',
      'cloud-kitchen-website',
      'food-truck-website',
      'restaurant-branding',
      'fast-food-website-design',
      'restaurant-menu-website'
    ];

    // Extract city slugs
    const citySlugMatches = restaurantDataContent.match(/slug:\s*['"]([a-z0-9-]+)['"]/g);
    const citySlugs = new Set();
    if (citySlugMatches) {
      citySlugMatches.forEach((m) => {
        const slug = m.replace(/slug:\s*['"]([^'"]+)['"]/, '$1');
        if (slug && !serviceSlugs.includes(slug) && !['usa','uk','uae','canada','australia','germany','france','spain','netherlands','singapore'].includes(slug)) {
          citySlugs.add(slug);
        }
      });
    }

    // Combine 15 services × citySlugs
    serviceSlugs.forEach((srv) => {
      citySlugs.forEach((city) => {
        restaurantUrls.add(`/${srv}-in-${city}/`);
      });
    });

  } catch (err) {
    console.warn('Could not read restaurantData.ts:', err.message);
  }

  const coreUrlArray = Array.from(coreUrls);
  const restaurantUrlArray = Array.from(restaurantUrls);
  const totalCount = coreUrlArray.length + restaurantUrlArray.length;

  console.log(`Generating sitemaps: ${coreUrlArray.length} core URLs + ${restaurantUrlArray.length} restaurant pSEO URLs (Total: ${totalCount})`);

  // Generate Core sitemap.xml
  const generateXml = (urlList, priorityDefault = '0.7') => `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlList
  .map((url) => {
    let priority = priorityDefault;
    if (url === '/' || url === '/gtm-engineer' || url === '/gtm-engineer/' || url === '/services' || url === '/restaurant-website') {
      priority = '1.0';
    } else if (url.startsWith('/services/') || url === '/case-studies' || url.startsWith('/restaurant-website/')) {
      priority = '0.9';
    } else if (url.startsWith('/gtm-engineer/') && url.split('/').filter(Boolean).length === 2) {
      priority = '0.8';
    }

    const cleanUrl = url.endsWith('/') || url.includes('.') || url === '/' ? url : `${url}/`;

    return `  <url>
    <loc>${BASE_URL}${cleanUrl}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${priority}</priority>
  </url>`;
  })
  .join('\n')}
</urlset>`;

  const sitemapXml = generateXml(coreUrlArray, '0.8');
  const restaurantXml = generateXml(restaurantUrlArray, '0.7');

  fs.writeFileSync(path.join(projectRoot, 'public', 'sitemap.xml'), sitemapXml, 'utf-8');
  fs.writeFileSync(path.join(projectRoot, 'public', 'sitemap-restaurant.xml'), restaurantXml, 'utf-8');

  // Master Sitemap Index
  const sitemapIndexXml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${BASE_URL}/sitemap.xml</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${BASE_URL}/sitemap-restaurant.xml</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
  </sitemap>
</sitemapindex>`;

  fs.writeFileSync(path.join(projectRoot, 'public', 'sitemap-index.xml'), sitemapIndexXml, 'utf-8');

  console.log(`✅ Sitemaps successfully generated!`);
  console.log(`   - public/sitemap.xml (${coreUrlArray.length} URLs)`);
  console.log(`   - public/sitemap-restaurant.xml (${restaurantUrlArray.length} URLs)`);
  console.log(`   - public/sitemap-index.xml (Master index)`);
}

generateSitemap();
