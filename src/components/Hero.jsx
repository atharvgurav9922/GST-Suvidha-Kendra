import React from 'react';
import { 
  ShieldCheck, 
  ArrowRight, 
  MessageCircle, 
  FileCheck2, 
  Calculator, 
  Building2, 
  Clock, 
  CheckCircle2,
  TrendingUp,
  FileText
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export default function Hero() {
  const whatsappUrl = `https://wa.me/${siteConfig.business.whatsappNumber}?text=${encodeURIComponent(
    siteConfig.whatsappMessages.heroInquiry
  )}`;

  return (
    <section id="home" className="relative pt-28 sm:pt-36 pb-20 sm:pb-28 bg-gradient-to-b from-slate-950 via-navy-900 to-slate-900 text-white overflow-hidden">
      {/* Background radial gradients and subtle grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e3a8a_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-brand-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -right-48 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Trust badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/80 text-xs sm:text-sm text-slate-300 shadow-sm backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-semibold text-brand-300">GST Suvidha Kendra</span>
              <span className="text-slate-500">•</span>
              <span className="text-slate-300">Fast, Accurate & Transparent</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight leading-[1.15] text-white">
              Your Trusted <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-blue-300 to-amber-300">GST & Taxation</span> Service Partner
            </h1>

            {/* Short Description */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              We empower individuals, proprietorships, and growing businesses with end-to-end GST registrations, timely return filings, ITR preparation, digital signatures, and reliable business accounting services — all in one convenient center.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-brand-600 via-brand-500 to-indigo-600 hover:from-brand-500 hover:to-indigo-500 shadow-lg shadow-brand-600/30 hover:shadow-brand-600/50 hover:-translate-y-0.5 transition-all duration-200 text-base"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-bold text-emerald-300 bg-emerald-950/70 hover:bg-emerald-900/80 border border-emerald-600/40 hover:border-emerald-500/60 shadow-lg shadow-emerald-950/40 hover:-translate-y-0.5 transition-all duration-200 text-base"
              >
                <MessageCircle className="w-5 h-5 text-emerald-400 fill-emerald-400/20" />
                <span>WhatsApp Us</span>
              </a>
            </div>

            {/* Value Highlights */}
            <div className="pt-6 grid grid-cols-3 gap-2 sm:gap-4 border-t border-slate-800/80 text-center lg:text-left">
              <div className="flex items-center gap-2 justify-center lg:justify-start text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>100% Data Privacy</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start text-xs sm:text-sm text-slate-300">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Quick Assistance</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start text-xs sm:text-sm text-slate-300">
                <ShieldCheck className="w-4 h-4 text-brand-400 shrink-0" />
                <span>Expert Guidance</span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Business Graphic Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative behind card */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-brand-600 to-amber-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-100 transition duration-1000 animate-pulse-glow" />

              {/* Main Financial Desk Card */}
              <div className="relative bg-slate-900/90 border border-slate-700/80 rounded-2xl p-6 sm:p-7 shadow-2xl backdrop-blur-xl">
                
                {/* Header of the mock portal */}
                <div className="flex items-center justify-between pb-5 border-b border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-brand-600/20 border border-brand-500/30 flex items-center justify-center text-brand-400">
                      <FileCheck2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">GST Compliance Hub</h4>
                      <p className="text-xs text-slate-400">Government Portal Assistance</p>
                    </div>
                  </div>
                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-800/60">
                    Active Center
                  </span>
                </div>

                {/* Service Cards Mockup */}
                <div className="mt-5 space-y-3">
                  <div className="bg-slate-800/80 border border-slate-700/60 p-3.5 rounded-xl flex items-center justify-between hover:border-slate-600 transition">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
                        <FileText className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-white">GST Registration & Filing</p>
                        <p className="text-[11px] text-slate-400">GSTR-1, GSTR-3B & Annual Returns</p>
                      </div>
                    </div>
                    <span className="text-xs font-medium text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800/50">
                      Assisted
                    </span>
                  </div>

                  <div className="bg-slate-800/80 border border-slate-700/60 p-3.5 rounded-xl flex items-center justify-between hover:border-slate-600 transition">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400">
                        <Calculator className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-white">Income Tax Return (ITR)</p>
                        <p className="text-[11px] text-slate-400">Salaried, Business & Capital Gains</p>
                      </div>
                    </div>
                    <span className="text-xs font-medium text-amber-300 bg-amber-950/80 px-2 py-0.5 rounded border border-amber-800/50">
                      Timely
                    </span>
                  </div>

                  <div className="bg-slate-800/80 border border-slate-700/60 p-3.5 rounded-xl flex items-center justify-between hover:border-slate-600 transition">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
                        <Building2 className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-white">MSME / Udyam & DSC</p>
                        <p className="text-[11px] text-slate-400">Class 3 Digital Signatures & Setup</p>
                      </div>
                    </div>
                    <span className="text-xs font-medium text-blue-300 bg-blue-950/80 px-2 py-0.5 rounded border border-blue-800/50">
                      Standard
                    </span>
                  </div>
                </div>

                {/* Bottom Trust Stat Bar */}
                <div className="mt-5 p-3.5 rounded-xl bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-brand-400" />
                    <span className="text-xs text-slate-300">Accuracy & Timely Submission</span>
                  </div>
                  <span className="text-xs font-mono font-bold text-brand-300">GSTIN Verified</span>
                </div>

              </div>

              {/* Floating Pill on Card */}
              <div className="hidden sm:flex absolute -bottom-4 -left-6 bg-slate-900/95 border border-slate-700 p-3 rounded-xl shadow-xl items-center gap-3 backdrop-blur-md">
                <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white">Simplified Paperwork</p>
                  <p className="text-[10px] text-slate-400">Doorstep & Online Support</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
