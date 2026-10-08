import React from 'react';
import { Calculator, ArrowRight, ExternalLink, Sparkles, CheckCircle2 } from 'lucide-react';
import GstCalculator from './GstCalculator';
import { navigateTo } from '../utils/navigation';

export default function CalculatorSection() {
  const handleOpenDedicated = () => {
    navigateTo('/gst-calculator');
  };

  return (
    <section 
      id="gst-calculator" 
      className="py-20 sm:py-28 bg-slate-950 text-white relative overflow-hidden border-t border-slate-800"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-brand-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-brand-300 uppercase tracking-wider mb-4">
            <Calculator className="w-3.5 h-3.5 text-brand-400" />
            <span>Instant Tax Utility</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
            Online GST Calculator
          </h2>

          <p className="text-base sm:text-lg text-slate-300">
            Quickly calculate GST amounts for standard tax slabs (5%, 12%, 18%, 28%). Easily add GST to find gross prices or remove GST to determine original base values.
          </p>

          {/* Quick CTA to open standalone route */}
          <div className="mt-6">
            <button
              onClick={handleOpenDedicated}
              type="button"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-brand-600 to-indigo-600 hover:from-brand-500 hover:to-indigo-500 shadow-md shadow-brand-600/30 hover:shadow-brand-600/50 hover:-translate-y-0.5 transition-all duration-200"
            >
              <span>Open GST Calculator</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Embedded Calculator Card */}
        <div className="max-w-2xl mx-auto">
          <GstCalculator isCompact={true} onOpenDedicated={handleOpenDedicated} />
        </div>

        {/* Quick Help Micro-Banner */}
        <div className="mt-12 text-center">
          <p className="text-xs sm:text-sm text-slate-400 inline-flex items-center gap-2 bg-slate-900/80 px-4 py-2 rounded-xl border border-slate-800">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Looking for detailed rate guides and calculation formulas?</span>
            <button
              onClick={handleOpenDedicated}
              className="text-brand-300 hover:text-white font-semibold underline underline-offset-2 ml-1"
            >
              View Full GST Guide & Calculator →
            </button>
          </p>
        </div>

      </div>
    </section>
  );
}
