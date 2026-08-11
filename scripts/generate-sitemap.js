import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

const BASE_URL = 'https://sandeshagrawal.tech';

// Static routes
const staticRoutes = [
  '/',
  '/case-studies',
  '/services',
  '/projects',
  '/contact',
  '/blog',
  '/gtm-engineer',
  '/gtm-engineer/',
];

async function generateSitemap() {
  const urls = new Set(staticRoutes);

  // Read blogData.ts for blog slugs
  try {
    const blogDataContent = fs.readFileSync(path.join(projectRoot, 'blogData.ts'), 'utf-8');
    const slugMatches = blogDataContent.match(/slug:\s*['"]([^'"]+)['"]/g);
    if (slugMatches) {
      slugMatches.forEach((match) => {
        const slug = match.replace(/slug:\s*['"]([^'"]+)['"]/, '$1');
        if (slug) urls.add(slug);
      });
    }
  } catch (err) {
    console.warn('Could not read blogData.ts:', err.message);
  }

  // Read verticalData.ts for High-Intent Services (US, UK, UAE/Dubai, India Exporters)
  try {
    const verticalDataContent = fs.readFileSync(path.join(projectRoot, 'verticalData.ts'), 'utf-8');
    const slugMatches = verticalDataContent.match(/slug:\s*['"]([^'"]+)['"]/g);
    if (slugMatches) {
      slugMatches.forEach((match) => {
        const slug = match.replace(/slug:\s*['"]([^'"]+)['"]/, '$1');
        if (slug) urls.add(`/services/${slug}`);
      });
    }
  } catch (err) {
    console.warn('Could not read verticalData.ts:', err.message);
  }

  // Read constants.ts for explicit project IDs in PROJECTS
  try {
    const constantsContent = fs.readFileSync(path.join(projectRoot, 'constants.ts'), 'utf-8');
    const projectsBlock = constantsContent.split('export const PROJECTS')[1] || '';
    const idMatches = projectsBlock.match(/id:\s*['"]([^'"]+)['"]/g);
    if (idMatches) {
      idMatches.forEach((match) => {
        const projectId = match.replace(/id:\s*['"]([^'"]+)['"]/, '$1');
        if (projectId) {
          urls.add(`/projects/${projectId}`);
        }
      });
    }
  } catch (err) {
    console.warn('Could not read constants.ts:', err.message);
  }

  // Read locationData.ts for 36 State Hubs (omitting micro-cities)
  try {
    const locationDataContent = fs.readFileSync(path.join(projectRoot, 'locationData.ts'), 'utf-8');

    // Extract state slugs
    const stateMatches = locationDataContent.match(/"stateSlug":\s*"([^"]+)"/g);
    if (stateMatches) {
      stateMatches.forEach((match) => {
        const stateSlug = match.replace(/"stateSlug":\s*"([^"]+)"/, '$1');
        if (stateSlug) {
          urls.add(`/gtm-engineer/${stateSlug}/`);
        }
      });
    }
  } catch (err) {
    console.warn('Could not read locationData.ts:', err.message);
  }

  const urlArray = Array.from(urls);

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlArray
  .map((url) => {
    let priority = '0.6';
    if (url === '/' || url === '/gtm-engineer' || url === '/gtm-engineer/' || url === '/services') {
      priority = '1.0';
    } else if (url.startsWith('/services/') || url === '/case-studies') {
      priority = '0.9';
    } else if (url.startsWith('/gtm-engineer/') && url.split('/').filter(Boolean).length === 2) {
      priority = '0.8'; // State hubs
    } else if (url.startsWith('/blog/') || url.startsWith('/projects/')) {
      priority = '0.8';
    }

    const changefreq = (url === '/' || url === '/gtm-engineer' || url === '/services') ? 'daily' : 'weekly';
    const cleanUrl = url.endsWith('/') || url.includes('.') || url === '/' ? url : `${url}/`;

    return `  <url>
    <loc>${BASE_URL}${cleanUrl}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
  })
  .join('\n')}
</urlset>`;

  const sitemapPath = path.join(projectRoot, 'public', 'sitemap.xml');
  fs.writeFileSync(sitemapPath, sitemapXml, 'utf-8');
  console.log(`✅ Sitemap successfully generated with ${urlArray.length} URLs at public/sitemap.xml`);
}

generateSitemap();
