import { siteConfig } from './siteConfig';

/**
 * Central SEO Configuration for GST Suvidha Kendra
 * 
 * Customize your production domain, page titles, descriptions,
 * Open Graph, Twitter metadata, and Local Business Schema settings here.
 * 
 * BEFORE DEPLOYING TO VERCEL:
 * Replace `siteUrl` with your actual production domain (e.g., https://your-domain.vercel.app).
 */
export const seoConfig = {
  // Business / Brand Name
  siteName: siteConfig.business?.name || "GST Suvidha Kendra",

  // Production Website URL (Used for Canonical URLs, Open Graph, Sitemap & Robots)
  // CHANGE THIS to your live Vercel URL or custom domain before launching:
  siteUrl: "https://gstsuvidhakendra-example.vercel.app",

  // Default Homepage Meta Tags
  defaultTitle: "GST Suvidha Kendra | GST Registration, ITR & Tax Services",
  defaultDescription: "GST Suvidha Kendra providing GST registration, GST return filing, ITR, business registration, accounting and related services. Contact us for professional assistance.",

  // Dedicated Route SEO Configurations
  routes: {
    home: {
      path: "/",
      title: "GST Suvidha Kendra | GST Registration, ITR & Tax Services",
      description: "GST Suvidha Kendra providing GST registration, GST return filing, ITR, business registration, accounting and related services. Contact us for professional assistance.",
    },
    gstCalculator: {
      path: "/gst-calculator",
      title: "GST Calculator | Calculate GST Amount Online",
      description: "Use our GST Calculator to quickly calculate GST amounts for 5%, 12%, 18% and 28% rates. Add or remove GST from an amount easily.",
    },
  },

  // Open Graph & Twitter Social Sharing Metadata
  image: "/og-image.png",
  twitterCard: "summary_large_image",
  locale: "en_IN",

  // Local Business SEO (Schema.org Structured Data)
  localBusiness: {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.business?.name || "GST Suvidha Kendra",
    description: "Authorized GST & taxation facilitation center offering GST registration, return filing, Income Tax Return (ITR), Udyam MSME, and accounting support.",
    telephone: siteConfig.business?.phoneDisplay || "+91 9767943978",
    email: siteConfig.business?.email || "gstsuvidhapangri@gmail.com",
    priceRange: "₹₹",
    address: {
      "@type": "PostalAddress",
      streetAddress: `${siteConfig.business?.address?.line1 || ''}, ${siteConfig.business?.address?.line2 || ''}`.trim(),
      addressLocality: "Pangari",
      addressRegion: "Maharashtra",
      postalCode: "413404",
      addressCountry: "IN",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        opens: "09:30",
        closes: "19:00",
      }
    ],
    // Social profiles for schema sameAs (filters out unconfigured placeholders)
    sameAs: [
      siteConfig.socialLinks?.whatsapp,
      siteConfig.socialLinks?.instagram,
      siteConfig.socialLinks?.facebook,
      siteConfig.socialLinks?.youtube,
      siteConfig.socialLinks?.linkedin,
      siteConfig.socialLinks?.twitter,
    ].filter((link) => link && !link.includes("YOUR_") && !link.includes("undefined")),
  },
};
