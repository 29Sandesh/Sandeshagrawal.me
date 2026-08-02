import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: 'website' | 'article' | 'profile';
  publishedTime?: string;
  author?: string;
  jsonLd?: Record<string, any> | Array<Record<string, any>>;
}

const DEFAULT_TITLE = 'Sandesh Agrawal | Technical GTM Engineer';
const DEFAULT_DESCRIPTION = 'Sandesh Agrawal is a Technical GTM Engineer specializing in AI-powered lead generation, outbound automation, growth infrastructure, and full-stack SaaS products.';
const DEFAULT_KEYWORDS = 'Technical GTM Engineer, GTM Engineer Indore, AI Lead Generation, Outbound Automation, Growth Infrastructure, AI Agents, Sandesh Agrawal';
const SITE_URL = 'https://sandeshagrawal.me';
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`;

export const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description = DEFAULT_DESCRIPTION,
  keywords = DEFAULT_KEYWORDS,
  canonicalUrl,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = 'website',
  publishedTime,
  author = 'Sandesh Agrawal',
  jsonLd,
}) => {
  const fullTitle = title ? (title.includes('Sandesh Agrawal') ? title : `${title} | Sandesh Agrawal`) : DEFAULT_TITLE;
  const currentPath = typeof window !== 'undefined' ? window.location.pathname : '';
  const canonical = canonicalUrl || `${SITE_URL}${currentPath}`;

  return (
    <Helmet>
      {/* Standard Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph / Facebook / LinkedIn */}
      <meta property="og:site_name" content="Sandesh Agrawal Portfolio" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}

      {/* Structured Data (JSON-LD) */}
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  );
};

export default SEOHead;
