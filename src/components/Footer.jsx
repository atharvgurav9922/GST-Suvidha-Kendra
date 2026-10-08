import React from 'react';
import { 
  ShieldCheck, 
  MapPin, 
  Phone, 
  Mail, 
  ArrowUp
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { navigateTo } from '../utils/navigation';

function WhatsAppFooterIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.81 13.47 3.81 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.04 7.42C8.86 7.42 8.56 7.49 8.31 7.76C8.06 8.04 7.36 8.69 7.36 10.03C7.36 11.37 8.34 12.66 8.47 12.84C8.61 13.02 10.37 15.74 13.08 16.91C15.33 17.88 15.79 17.69 16.28 17.64C16.78 17.6 17.88 16.99 18.11 16.34C18.34 15.7 18.34 15.15 18.27 15.03C18.2 14.91 18.02 14.85 17.74 14.71C17.46 14.57 16.11 13.9 15.86 13.81C15.61 13.72 15.42 13.67 15.24 13.95C15.06 14.23 14.53 14.85 14.37 15.03C14.21 15.22 14.05 15.24 13.77 15.1C13.49 14.96 12.6 14.67 11.54 13.73C10.72 12.99 10.16 12.09 10.02 11.81C9.88 11.53 10.01 11.38 10.15 11.24C10.28 11.11 10.44 10.89 10.58 10.73C10.72 10.57 10.76 10.45 10.86 10.27C10.95 10.09 10.9 9.92 10.83 9.78C10.76 9.65 10.21 8.3 9.98 7.74C9.75 7.21 9.53 7.27 9.36 7.27C9.21 7.27 9.04 7.27 8.86 7.27" />
    </svg>
  );
}

function InstagramFooterIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  );
}

function FacebookFooterIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function YoutubeFooterIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function LinkedinFooterIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

function XFooterIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export default function Footer() {
  const { business, socialLinks } = siteConfig;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 text-sm">
      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Col 1: Brand & Description (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#home" className="inline-flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-700 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-brand-500/20">
                <ShieldCheck className="w-6 h-6 text-amber-300" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                GST Suvidha <span className="text-brand-400">Kendra</span>
              </span>
            </a>
            
            <p className="text-slate-400 text-sm leading-relaxed pr-4">
              Your dependable neighborhood partner for GST registration, monthly return filings, Income Tax (ITR), MSME certifications, and comprehensive accounting assistance.
            </p>

            <div className="pt-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block mb-3">
                Follow Our Updates
              </span>
              <div className="flex items-center gap-2">
                <a
                  href={socialLinks.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-emerald-400 hover:border-emerald-500 hover:bg-slate-800 transition"
                  aria-label="WhatsApp"
                >
                  <WhatsAppFooterIcon className="w-4 h-4" />
                </a>
                <a
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-pink-400 hover:border-pink-500 hover:bg-slate-800 transition"
                  aria-label="Instagram"
                >
                  <InstagramFooterIcon className="w-4 h-4" />
                </a>
                <a
                  href={socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-blue-400 hover:border-blue-500 hover:bg-slate-800 transition"
                  aria-label="Facebook"
                >
                  <FacebookFooterIcon className="w-4 h-4" />
                </a>
                <a
                  href={socialLinks.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-red-400 hover:border-red-500 hover:bg-slate-800 transition"
                  aria-label="YouTube"
                >
                  <YoutubeFooterIcon className="w-4 h-4" />
                </a>
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-sky-400 hover:border-sky-500 hover:bg-slate-800 transition"
                  aria-label="LinkedIn"
                >
                  <LinkedinFooterIcon className="w-4 h-4" />
                </a>
                <a
                  href={socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:border-slate-500 hover:bg-slate-800 transition"
                  aria-label="X (Twitter)"
                >
                  <XFooterIcon className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/#home" onClick={(e) => { e.preventDefault(); navigateTo('/', '#home'); }} className="hover:text-white transition">Home</a>
              </li>
              <li>
                <a href="/#services" onClick={(e) => { e.preventDefault(); navigateTo('/', '#services'); }} className="hover:text-white transition">All Services</a>
              </li>
              <li>
                <a href="/gst-calculator" onClick={(e) => { e.preventDefault(); navigateTo('/gst-calculator'); }} className="text-brand-300 hover:text-white transition font-medium flex items-center gap-1.5">
                  <span>GST Calculator</span>
                  <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-brand-950 text-brand-300 border border-brand-800">Free</span>
                </a>
              </li>
              <li>
                <a href="/#about" onClick={(e) => { e.preventDefault(); navigateTo('/', '#about'); }} className="hover:text-white transition">About Our Kendra</a>
              </li>
              <li>
                <a href="/#social" onClick={(e) => { e.preventDefault(); navigateTo('/', '#social'); }} className="hover:text-white transition">Connect With Us</a>
              </li>
              <li>
                <a href="/#contact" onClick={(e) => { e.preventDefault(); navigateTo('/', '#contact'); }} className="hover:text-white transition">Contact & Directions</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Key Services (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Popular Services
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>GST Registration</li>
              <li>
                <a href="/gst-calculator" onClick={(e) => { e.preventDefault(); navigateTo('/gst-calculator'); }} className="hover:text-brand-300 transition text-slate-300">
                  GST Calculator Tool
                </a>
              </li>
              <li>GSTR-1 & 3B Filing</li>
              <li>Income Tax Return (ITR)</li>
              <li>PAN / TAN Application</li>
              <li>MSME / Udyam Certificate</li>
              <li>Digital Signature (DSC)</li>
            </ul>
          </div>

          {/* Col 4: Contact Information (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Contact Desk
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" />
                <span>
                  {business.address.line1}, {business.address.cityStateZip}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`tel:${business.phoneRaw}`} className="hover:text-white transition font-medium">
                  {business.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <a href={`mailto:${business.email}`} className="hover:text-white transition break-all">
                  {business.email}
                </a>
              </div>
            </div>
            
            <div className="pt-2">
              <p className="text-[11px] text-slate-500">
                Authorized facilitation & taxpayer guidance desk.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-slate-900 bg-slate-950/80 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 GST Suvidha Kendra. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#about" className="hover:text-slate-400 transition">Privacy & Transparency</a>
            <a href="#services" className="hover:text-slate-400 transition">Terms of Service</a>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 hover:text-white transition ml-2 p-1 rounded hover:bg-slate-800"
              title="Scroll to top"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
