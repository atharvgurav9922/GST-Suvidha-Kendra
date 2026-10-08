import React from 'react';
import { 
  ExternalLink,
  Share2
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

// Pixel-perfect SVG Brand Icons
function WhatsAppIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.81 13.47 3.81 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.04 7.42C8.86 7.42 8.56 7.49 8.31 7.76C8.06 8.04 7.36 8.69 7.36 10.03C7.36 11.37 8.34 12.66 8.47 12.84C8.61 13.02 10.37 15.74 13.08 16.91C15.33 17.88 15.79 17.69 16.28 17.64C16.78 17.6 17.88 16.99 18.11 16.34C18.34 15.7 18.34 15.15 18.27 15.03C18.2 14.91 18.02 14.85 17.74 14.71C17.46 14.57 16.11 13.9 15.86 13.81C15.61 13.72 15.42 13.67 15.24 13.95C15.06 14.23 14.53 14.85 14.37 15.03C14.21 15.22 14.05 15.24 13.77 15.1C13.49 14.96 12.6 14.67 11.54 13.73C10.72 12.99 10.16 12.09 10.02 11.81C9.88 11.53 10.01 11.38 10.15 11.24C10.28 11.11 10.44 10.89 10.58 10.73C10.72 10.57 10.76 10.45 10.86 10.27C10.95 10.09 10.9 9.92 10.83 9.78C10.76 9.65 10.21 8.3 9.98 7.74C9.75 7.21 9.53 7.27 9.36 7.27C9.21 7.27 9.04 7.27 8.86 7.27" />
    </svg>
  );
}

function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  );
}

function FacebookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function YoutubeIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function LinkedinIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

function XIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export default function SocialSection() {
  const { socialLinks } = siteConfig;

  const socialPlatforms = [
    {
      name: 'WhatsApp',
      handle: 'Direct Business Chat',
      url: socialLinks.whatsapp,
      icon: <WhatsAppIcon className="w-6 h-6 text-emerald-400" />,
      colorClass: 'hover:border-emerald-500/50 hover:bg-emerald-950/20',
      badgeBg: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
      buttonText: 'Message Us',
      description: 'Quick response for GST updates, filing status, and documentation queries.',
    },
    {
      name: 'Instagram',
      handle: '@YOUR_USERNAME',
      url: socialLinks.instagram,
      icon: <InstagramIcon className="w-6 h-6 text-pink-400" />,
      colorClass: 'hover:border-pink-500/50 hover:bg-pink-950/20',
      badgeBg: 'bg-pink-500/10 text-pink-400 border-pink-500/20',
      buttonText: 'Follow on IG',
      description: 'Visual guides, compliance due dates calendars, and business tax tips.',
    },
    {
      name: 'Facebook',
      handle: 'GST Suvidha Kendra Community',
      url: socialLinks.facebook,
      icon: <FacebookIcon className="w-6 h-6 text-blue-400" />,
      colorClass: 'hover:border-blue-500/50 hover:bg-blue-950/20',
      badgeBg: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
      buttonText: 'Like Page',
      description: 'Important tax announcements, GST council circulars, and small business news.',
    },
    {
      name: 'YouTube',
      handle: '@YOUR_CHANNEL',
      url: socialLinks.youtube,
      icon: <YoutubeIcon className="w-6 h-6 text-red-400" />,
      colorClass: 'hover:border-red-500/50 hover:bg-red-950/20',
      badgeBg: 'bg-red-500/10 text-red-400 border-red-500/20',
      buttonText: 'Subscribe',
      description: 'Step-by-step video explainers on ITR filing, invoice rules, and MSME benefits.',
    },
    {
      name: 'LinkedIn',
      handle: 'in/YOUR_USERNAME',
      url: socialLinks.linkedin,
      icon: <LinkedinIcon className="w-6 h-6 text-sky-400" />,
      colorClass: 'hover:border-sky-500/50 hover:bg-sky-950/20',
      badgeBg: 'bg-sky-500/10 text-sky-400 border-sky-500/20',
      buttonText: 'Connect',
      description: 'Professional taxation insights, corporate compliance, and B2B advisory.',
    },
    {
      name: 'X (Twitter)',
      handle: '@YOUR_USERNAME',
      url: socialLinks.twitter,
      icon: <XIcon className="w-5 h-5 text-slate-200" />,
      colorClass: 'hover:border-slate-500/50 hover:bg-slate-800/40',
      badgeBg: 'bg-slate-700/40 text-slate-300 border-slate-600',
      buttonText: 'Follow on X',
      description: 'Real-time tax alerts, portal maintenance schedules, and notification summaries.',
    },
  ];

  return (
    <section id="social" className="py-20 sm:py-28 bg-slate-950 text-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brand-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-brand-300 uppercase tracking-wider mb-4">
            <Share2 className="w-3.5 h-3.5 text-brand-400" />
            Official Social Channels
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
            Connect With Us
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Stay updated with the latest GST rate revisions, tax filing deadlines, official government notifications, and business growth advisories across our official channels.
          </p>
        </div>

        {/* Social Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {socialPlatforms.map((platform) => (
            <a
              key={platform.name}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group bg-slate-900/90 border border-slate-800 rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between shadow-lg hover:shadow-2xl hover:-translate-y-1 ${platform.colorClass}`}
            >
              <div>
                {/* Platform Icon & Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {platform.icon}
                  </div>
                  <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${platform.badgeBg}`}>
                    {platform.name}
                  </span>
                </div>

                {/* Platform Name and Handle */}
                <h3 className="text-lg font-bold text-white group-hover:text-brand-300 transition-colors flex items-center gap-1.5">
                  <span>{platform.name}</span>
                </h3>
                <p className="text-xs text-slate-400 font-mono mt-0.5 mb-3">
                  {platform.handle}
                </p>

                {/* Description */}
                <p className="text-xs text-slate-300 leading-relaxed mb-6">
                  {platform.description}
                </p>
              </div>

              {/* Action Button */}
              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-slate-300 group-hover:text-white">
                <span>{platform.buttonText}</span>
                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </a>
          ))}
        </div>

        {/* Note on configuration */}
        <div className="mt-12 text-center">
          <p className="text-xs text-slate-400 inline-flex items-center gap-1.5 bg-slate-900/80 px-4 py-2 rounded-xl border border-slate-800">
            <span>⚙️ Social handles configured centrally via</span>
            <code className="text-brand-300 bg-slate-950 px-1.5 py-0.5 rounded text-[11px]">src/config/siteConfig.js</code>
          </p>
        </div>

      </div>
    </section>
  );
}
