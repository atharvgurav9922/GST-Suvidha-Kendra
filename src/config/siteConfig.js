/**
 * Central Configuration for GST Suvidha Kendra Website
 * Update your business information, contact details, social links,
 * and visitor counter settings here.
 */

export const siteConfig = {
  // Business Information
  business: {
    name: "GST Suvidha Kendra",
    tagline: "Your Trusted GST & Taxation Service Partner",
    legalNotice: "Authorised GSP / ASP Facilitation Center & Tax Advisory Support",
    phoneDisplay: "+91 9767943978",
    phoneRaw: "919767943978", // Used for tel: links
    whatsappNumber: "919767943978", // International format without '+' (e.g. 91XXXXXXXXXX)
    email: "gstsuvidhapangri@gmail.com",
    address: {
      line1: "Godase Galli ",
      line2: "Near SVMP School",
      cityStateZip: "Pangari, Maharashtra - 413 404",
      country: "India",
    },
    businessHours: {
      weekdays: "Monday - Saturday: 9:30 AM to 7:00 PM",
      sunday: "Sunday: Closed (Available on WhatsApp for urgent queries)",
    },
    // Google Maps link (Opens in a new tab)
    googleMapsUrl: "https://maps.google.com/?q=GST+Suvidha+Kendra+New+Delhi",
  },

  // Social Media Links (Editable here in one central location)
  // Replace YOUR_USERNAME / YOUR_NUMBER / YOUR_CHANNEL with your actual handles
  socialLinks: {
    whatsapp: "https://wa.me/919767943978",
    instagram: "https://www.instagram.com/gstsuvidhapangri?stkn=MWdsejkwaWtyNnphOQ==",
    facebook: "https://www.facebook.com/amar.grv.gst",
    youtube: "https://youtube.com/YOUR_CHANNEL",
    linkedin: "https://linkedin.com/in/YOUR_USERNAME",
    twitter: "https://x.com/YOUR_USERNAME",
  },

  // Predefined Messages for WhatsApp Actions
  whatsappMessages: {
    general: "Hello, I would like to know more about your GST services.",
    heroInquiry: "Hello GST Suvidha Kendra, I would like to inquire about your taxation & business services.",
    serviceInquiry: (serviceName) =>
      `Hello GST Suvidha Kendra, I am interested in your service: "${serviceName}". Please guide me with the required documents and procedure.`,
    floatingButton: "Hello, I would like to know more about your GST services.",
  },

  // Third-Party Website Visitor Counter Configuration
  // Note: No custom backend or Node/Express server is needed.
  // We use reputable third-party serverless counter services.
  visitorCounter: {
    // Supported providers: 'counterapi' (default), 'hitssh', or 'embedded'
    provider: "counterapi",

    // CounterAPI (api.counterapi.dev)
    // You can customize the namespace and key below to uniquely track your website visits.
    namespace: "gst-suvidha-kendra-portal",
    key: "site-visits",

    // Optional Hits.sh alternative: 'https://hits.sh/your-domain.com.svg'
    hitsShDomain: "gst-suvidha-kendra.vercel.app",

    // Initial / fallback baseline if the client is offline or rate-limited
    fallbackDisplay: 1254,
  },
};
