import { useEffect } from 'react';
import { seoConfig } from '../config/seoConfig';

function updateMetaTag(attributeName, attributeValue, content) {
  let element = document.querySelector(`meta[${attributeName}="${attributeValue}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attributeName, attributeValue);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
}

function updateLinkTag(rel, href) {
  let element = document.querySelector(`link[rel="${rel}"]`);
  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', rel);
    document.head.appendChild(element);
  }
  element.setAttribute('href', href);
}

export default function SEOHead({ route = 'home', customTitle, customDescription }) {
  useEffect(() => {
    const routeConfig = seoConfig.routes[route] || seoConfig.routes.home;
    const title = customTitle || routeConfig.title || seoConfig.defaultTitle;
    const description = customDescription || routeConfig.description || seoConfig.defaultDescription;
    const currentPath = routeConfig.path || '/';
    const canonicalUrl = `${seoConfig.siteUrl.replace(/\/$/, '')}${currentPath}`;
    const imageUrl = seoConfig.image.startsWith('http') 
      ? seoConfig.image 
      : `${seoConfig.siteUrl.replace(/\/$/, '')}${seoConfig.image}`;

    // 1. Page Title
    document.title = title;

    // 2. Primary Meta Tags
    updateMetaTag('name', 'title', title);
    updateMetaTag('name', 'description', description);
    updateLinkTag('canonical', canonicalUrl);

    // 3. Open Graph Metadata
    updateMetaTag('property', 'og:title', title);
    updateMetaTag('property', 'og:description', description);
    updateMetaTag('property', 'og:type', 'website');
    updateMetaTag('property', 'og:url', canonicalUrl);
    updateMetaTag('property', 'og:image', imageUrl);
    updateMetaTag('property', 'og:site_name', seoConfig.siteName);
    updateMetaTag('property', 'og:locale', seoConfig.locale);

    // 4. Twitter / X Cards
    updateMetaTag('property', 'twitter:card', seoConfig.twitterCard || 'summary_large_image');
    updateMetaTag('property', 'twitter:title', title);
    updateMetaTag('property', 'twitter:description', description);
    updateMetaTag('property', 'twitter:image', imageUrl);
    updateMetaTag('property', 'twitter:url', canonicalUrl);

    // 5. Schema.org JSON-LD Structured Data
    let schemaData;
    if (route === 'gstCalculator') {
      schemaData = {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        name: "GST Calculator - Calculate GST Online",
        url: canonicalUrl,
        applicationCategory: "FinancialApplication",
        operatingSystem: "All",
        browserRequirements: "Requires JavaScript. Requires HTML5.",
        description: description,
        provider: {
          "@type": "ProfessionalService",
          name: seoConfig.siteName,
          url: seoConfig.siteUrl,
          telephone: seoConfig.localBusiness.telephone,
        },
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "INR",
        },
      };
    } else {
      schemaData = seoConfig.localBusiness;
    }

    let scriptTag = document.getElementById('json-ld-structured-data');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'json-ld-structured-data';
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(schemaData, null, 2);

  }, [route, customTitle, customDescription]);

  return null;
}
