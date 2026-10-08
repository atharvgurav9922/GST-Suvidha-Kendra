import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ShieldCheck, ArrowRight, Calculator } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { navigateTo, getCurrentPath } from '../utils/navigation';

export default function Navbar({ isCalculatorPage = false }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', path: '/' },
    { name: 'Services', href: '#services', path: '/' },
    { name: 'GST Calculator', href: '/gst-calculator', isPage: true },
    { name: 'About', href: '#about', path: '/' },
    { name: 'Social Media', href: '#social', path: '/' },
    { name: 'Contact', href: '#contact', path: '/' },
  ];

  const handleLinkClick = (e, link) => {
    e.preventDefault();
    setIsOpen(false);

    if (link.isPage) {
      navigateTo('/gst-calculator');
      return;
    }

    if (isCalculatorPage) {
      navigateTo('/', link.href);
    } else {
      const el = document.querySelector(link.href);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        navigateTo('/', link.href);
      }
    }
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    setIsOpen(false);
    if (isCalculatorPage) {
      navigateTo('/', '#home');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-slate-800' 
        : 'bg-slate-900/80 backdrop-blur-sm border-b border-slate-800/60'
    }`}>
      {/* Top micro-bar for phone & office timing */}
      <div className="hidden md:block bg-slate-950 text-slate-300 text-xs py-1.5 px-4 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>{siteConfig.business.legalNotice}</span>
          </div>
          <div className="flex items-center gap-6">
            <span>Office Hours: Mon - Sat (9:30 AM - 7:00 PM)</span>
            <a 
              href={`tel:${siteConfig.business.phoneRaw}`} 
              className="text-brand-300 hover:text-white flex items-center gap-1 font-medium transition"
            >
              <Phone className="w-3 h-3" />
              <span>{siteConfig.business.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 sm:h-20">
          
          {/* Logo & Brand Name */}
          <a 
            href="/" 
            onClick={handleLogoClick}
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-tr from-brand-700 via-brand-600 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-brand-500/20 group-hover:scale-105 transition-transform duration-200">
              <ShieldCheck className="w-6 h-6 sm:w-7 sm:h-7 text-amber-300" />
            </div>
            <div>
              <span className="text-lg sm:text-xl font-bold tracking-tight text-white block leading-tight">
                GST Suvidha <span className="text-brand-400">Kendra</span>
              </span>
              <span className="text-[10px] sm:text-[11px] text-slate-400 font-medium tracking-wider uppercase block">
                Taxation & Business Advisory
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = link.isPage && isCalculatorPage;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-brand-300 bg-slate-800/90 font-semibold'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/80'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          {/* Desktop Right CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${siteConfig.business.phoneRaw}`}
              className="hidden xl:inline-flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-white px-3.5 py-2 rounded-lg border border-slate-700 hover:border-slate-600 transition"
            >
              <Phone className="w-3.5 h-3.5 text-brand-400" />
              <span>Call Us</span>
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                if (isCalculatorPage) {
                  e.preventDefault();
                  navigateTo('/', '#contact');
                }
              }}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-brand-600 to-brand-700 hover:from-brand-500 hover:to-brand-600 px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl shadow-md shadow-brand-600/30 hover:shadow-brand-600/50 transition-all duration-200"
            >
              <span>Enquire Now</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-slate-300 hover:text-white p-2 rounded-lg hover:bg-slate-800 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </nav>

      {/* Mobile Drawer Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-slate-900 border-b border-slate-800 px-4 pt-2 pb-6 space-y-2 shadow-2xl animate-in slide-in-from-top duration-200">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link)}
                className={`block px-3 py-2.5 rounded-lg text-base font-medium transition ${
                  link.isPage && isCalculatorPage
                    ? 'text-brand-300 bg-slate-800 font-semibold'
                    : 'text-slate-200 hover:bg-slate-800 hover:text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
          
          <div className="pt-4 border-t border-slate-800 flex flex-col gap-2">
            <a
              href={`tel:${siteConfig.business.phoneRaw}`}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-sm font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700"
            >
              <Phone className="w-4 h-4 text-brand-400" />
              <span>Call: {siteConfig.business.phoneDisplay}</span>
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                setIsOpen(false);
                if (isCalculatorPage) {
                  e.preventDefault();
                  navigateTo('/', '#contact');
                }
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-sm font-semibold text-white bg-brand-600 hover:bg-brand-500 shadow-md shadow-brand-600/20"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
