# 🛡️ GST Suvidha Kendra — Official Business Website

A modern, responsive, and high-performance business website built for a **GST Suvidha Kendra** (Taxation, GST, and Business Compliance Center).

Built with **React.js, Vite, Tailwind CSS, and Lucide React** with zero custom backend dependencies. Ready for direct, one-click deployment on **Vercel**.

---

## 🚀 Key Features

1. **Hero Section**
   - Brand logo and official trust credentials.
   - Main Heading: *"Your Trusted GST & Taxation Service Partner"*.
   - Direct CTA buttons: **"Contact Us"** and **"WhatsApp Us"** (with pre-filled message).
   - High-end business financial hub visual dashboard.

2. **Services Section (10 Detailed Offerings)**
   - **GST Registration**
   - **GST Return Filing** (GSTR-1, GSTR-3B, GSTR-9)
   - **GST Amendment** (Core & non-core fields)
   - **GST Cancellation & Revocation**
   - **Income Tax Return (ITR)** (Salaried, Professional, Capital Gains & MSME)
   - **PAN / TAN Services**
   - **Business Registration** (MSME/Udyam, Shop Act, Trade License)
   - **Accounting Services** (Computerized bookkeeping & financial reporting)
   - **Digital Signature (DSC)** (Class 3 Paperless with USB crypto token)
   - **Other Government & Business Services** (FSSAI, Import Export Code IEC, EPF/ESIC)
   - *Interactive Service Enquiry Modal* with direct WhatsApp and Call routing.

3. **About Us & Operational Principles**
   - Professional and trustworthy overview tailored for retail traders, professionals, and MSMEs.
   - Ethical guidance with zero unrealistic claims (no misleading "guaranteed approvals").
   - **"Why Choose Us?"** (Trusted Service, Quick Assistance, Professional Guidance, Transparent Process, Customer Support, Convenient Online Assistance).

4. **Dedicated Social Media Section ("Connect With Us")**
   - Cards with brand icons and handles for:
     - **WhatsApp** (`https://wa.me/YOUR_NUMBER`)
     - **Instagram** (`https://instagram.com/YOUR_USERNAME`)
     - **Facebook** (`https://facebook.com/YOUR_USERNAME`)
     - **YouTube** (`https://youtube.com/YOUR_CHANNEL`)
     - **LinkedIn** (`https://linkedin.com/in/YOUR_USERNAME`)
     - **X (Twitter)** (`https://x.com/YOUR_USERNAME`)
   - All links open in a new browser tab (`target="_blank" rel="noopener noreferrer"`).
   - Centrally configured in `src/config/siteConfig.js`.

5. **Serverless Website Visitor Counter (`VisitorCounter.jsx`)**
   - Clean statistic display: `👥 Website Visitors 1,254`
   - Powered by a safe, public third-party counting service (`CounterAPI.dev`).
   - **Zero custom backend** (No Node.js, Express, MongoDB, or local storage spoofing).
   - Isolated in reusable component `src/components/VisitorCounter.jsx`.
   - Built-in "Service Info" badge documenting architecture for site administrators.

6. **Contact Section**
   - Clearly marked placeholders for:
     - Business Name
     - Office Address
     - Phone Number & WhatsApp Number
     - Email Address
     - Business Hours (Monday to Saturday & Sunday support note)
   - Direct Action Buttons:
     - 📞 **Call Now** (`tel:`)
     - 💬 **WhatsApp** (`wa.me`)
     - 📍 **Get Directions** (Opens Google Maps in new tab)
   - Online Quick Service Enquiry Form.

7. **Floating WhatsApp Button**
   - Fixed bottom-right corner with pulse ripple animation and dismissible help pill.
   - Predefined message: *"Hello, I would like to know more about your GST services."*

8. **SEO & Meta Configuration**
   - Page Title: `GST Suvidha Kendra | GST, Tax & Business Services`
   - Meta Description: `GST Suvidha Kendra providing GST registration, GST return filing, ITR, business registration, accounting and other business services.`
   - Open Graph & Twitter Cards configured.
   - `public/robots.txt` and `public/sitemap.xml` included.

---

## 🛠️ Configuration Guide (`src/config/siteConfig.js`)

All business information, phone numbers, addresses, social media links, and visitor counter settings are centralized in:

📂 `src/config/siteConfig.js`

```javascript
export const siteConfig = {
  business: {
    name: "GST Suvidha Kendra",
    phoneDisplay: "+91 9767943978",
    phoneRaw: "919767943978",
    whatsappNumber: "919767943978",
    email: "contact@gstsuvidhakendra-example.com",
    address: { ... },
    googleMapsUrl: "https://maps.google.com/?q=GST+Suvidha+Kendra+New+Delhi",
  },
  socialLinks: {
    whatsapp: "https://wa.me/YOUR_NUMBER",
    instagram: "https://instagram.com/YOUR_USERNAME",
    facebook: "https://facebook.com/YOUR_USERNAME",
    youtube: "https://youtube.com/YOUR_CHANNEL",
    linkedin: "https://linkedin.com/in/YOUR_USERNAME",
    twitter: "https://x.com/YOUR_USERNAME",
  },
  visitorCounter: {
    provider: "counterapi",
    namespace: "gst-suvidha-kendra-portal",
    key: "site-visits",
    fallbackDisplay: 1254,
  }
};
```

---

## 💻 Local Development

```bash
# Install dependencies
npm install

# Start Vite development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

---

## 🚀 Deployment on Vercel

This repository is pre-configured with `vercel.json` for seamless static hosting on Vercel:

1. Push your repository to **GitHub / GitLab / Bitbucket**.
2. Log in to [Vercel Dashboard](https://vercel.com).
3. Click **"Add New"** > **"Project"** and import the repository.
4. Framework Preset will auto-detect as **Vite**.
5. Build command: `npm run build`
6. Output directory: `dist`
7. Click **Deploy**!
