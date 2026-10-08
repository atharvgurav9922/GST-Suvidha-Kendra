import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppFloating from '../components/WhatsAppFloating';
import GstCalculator from '../components/GstCalculator';
import SEOHead from '../components/SEOHead';
import { siteConfig } from '../config/siteConfig';
import { navigateTo } from '../utils/navigation';
import { 
  Calculator, 
  ArrowLeft, 
  CheckCircle2, 
  HelpCircle, 
  FileText, 
  Percent, 
  BookOpen, 
  Phone, 
  MessageCircle, 
  Layers, 
  AlertTriangle 
} from 'lucide-react';

export default function GstCalculatorPage() {
  const whatsappUrl = `https://wa.me/${siteConfig.business.whatsappNumber}?text=${encodeURIComponent(
    'Hello GST Suvidha Kendra, I used your GST Calculator and need expert advice on tax filing.'
  )}`;

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans selection:bg-brand-500 selection:text-white">
      {/* 1. Dedicated SEO Head Metadata for /gst-calculator */}
      <SEOHead route="gstCalculator" />

      {/* 2. Top Navigation */}
      <Navbar isCalculatorPage={true} />

      <main className="pt-28 sm:pt-36 pb-20 sm:pb-28">
        
        {/* Breadcrumb & Navigation */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs sm:text-sm text-slate-400">
            <button
              onClick={() => navigateTo('/')}
              className="hover:text-brand-300 flex items-center gap-1 transition"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Home</span>
            </button>
            <span>/</span>
            <span className="text-slate-200 font-medium">GST Calculator</span>
          </nav>
        </div>

        {/* Hero Header Area for Calculator Page */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-950/80 border border-brand-800 text-xs sm:text-sm text-brand-300 font-semibold mb-4">
            <Calculator className="w-4 h-4 text-brand-400" />
            <span>Taxation Utility & Calculation Guide</span>
          </div>

          {/* Single Main H1 for this route */}
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            GST Calculator
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Use our GST Calculator to quickly calculate GST amounts for 5%, 12%, 18% and 28% rates. Add or remove GST from an amount easily.
          </p>
        </div>

        {/* Section 1: The Interactive Calculator Card */}
        <section aria-labelledby="calculator-tool-heading" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <h2 id="calculator-tool-heading" className="sr-only">Interactive GST Calculation Tool</h2>
          <GstCalculator isCompact={false} />
        </section>

        {/* Section 2: Direct Assistance Banner */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="space-y-1 text-center md:text-left">
              <h2 className="text-lg sm:text-xl font-bold text-white">
                Need Help with Business Invoicing or GST Filing?
              </h2>
              <p className="text-xs sm:text-sm text-slate-400">
                Our Kendra team assists with GSTR-1, GSTR-3B filings, ITC claims, and tax notice resolutions.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-emerald-300 bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-700/60 transition shadow-sm"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp Expert</span>
              </a>
              <a
                href={`tel:${siteConfig.business.phoneRaw}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-brand-600 hover:bg-brand-500 transition shadow-sm"
              >
                <Phone className="w-4 h-4" />
                <span>Call Center</span>
              </a>
            </div>
          </div>
        </section>

        {/* Section 3: In-Depth Educational Content for SEO & Taxpayer Guidance */}
        <section aria-labelledby="seo-guide-heading" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 id="seo-guide-heading" className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Understanding GST Calculation & Tax Rates
            </h2>
            <p className="text-sm text-slate-400 mt-2">
              A comprehensive guide to Goods and Services Tax computations in India.
            </p>
          </div>

          <div className="space-y-8">
            
            {/* Guide Item 1: What is a GST Calculator? */}
            <article className="p-6 sm:p-8 rounded-2xl bg-slate-800/60 border border-slate-700/70 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-600/20 border border-brand-500/30 flex items-center justify-center text-brand-400 shrink-0">
                  <HelpCircle className="w-5 h-5" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-white">
                    What is a GST Calculator?
                  </h3>
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                    A GST Calculator is an intuitive financial tool designed to calculate the Goods and Services Tax (GST) applicable to any transaction. It helps business owners, consumers, accountants, and freelancers instantly compute the net GST amount and final invoice amount.
                  </p>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Under the Indian taxation structure, GST is a unified destination-based tax levied on the manufacturing, sale, and consumption of goods as well as services. A digital GST calculator simplifies invoicing by automatically handling both tax addition (forward charge) and tax subtraction (reverse computation from gross figures), preventing manual calculation errors.
                  </p>
                </div>
              </div>
            </article>

            {/* Guide Item 2: How to Calculate GST? */}
            <article className="p-6 sm:p-8 rounded-2xl bg-slate-800/60 border border-slate-700/70 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-600/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                  <Calculator className="w-5 h-5" />
                </div>
                <div className="space-y-4 flex-1">
                  <h3 className="text-xl font-bold text-white">
                    How to Calculate GST?
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Calculating GST involves applying straightforward mathematical formulas depending on whether tax is being added to a base price or removed from a gross inclusive price.
                  </p>

                  {/* Formula 1: Add GST */}
                  <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                    <h4 className="text-sm font-bold text-brand-300 uppercase tracking-wider">
                      1. Method A: Adding GST to Base Amount
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-300">
                      When you have an initial net cost and need to charge GST on top:
                    </p>
                    <div className="p-3 rounded-lg bg-slate-950 font-mono text-xs sm:text-sm text-emerald-400 space-y-1">
                      <div>GST Amount = (Base Amount × GST Rate) ÷ 100</div>
                      <div>Total Invoice Amount = Base Amount + GST Amount</div>
                    </div>
                    <div className="text-xs text-slate-400 pt-1">
                      <strong>Example:</strong> If your base service charge is ₹10,000 and the applicable GST rate is 18%:
                      <br />
                      GST Amount = (10,000 × 18) ÷ 100 = <strong>₹1,800.00</strong>
                      <br />
                      Total Invoice Amount = 10,000 + 1,800 = <strong>₹11,800.00</strong>
                    </div>
                  </div>

                  {/* Formula 2: Remove GST */}
                  <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                    <h4 className="text-sm font-bold text-amber-300 uppercase tracking-wider">
                      2. Method B: Removing GST from Inclusive Amount
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-300">
                      When the selling price already includes GST and you need to determine the original pre-tax value:
                    </p>
                    <div className="p-3 rounded-lg bg-slate-950 font-mono text-xs sm:text-sm text-amber-400 space-y-1">
                      <div>Base Amount = Total Amount ÷ (1 + GST Rate ÷ 100)</div>
                      <div>GST Amount = Total Amount − Base Amount</div>
                    </div>
                    <div className="text-xs text-slate-400 pt-1">
                      <strong>Example:</strong> If a retail product sells for ₹11,800 (inclusive of 18% GST):
                      <br />
                      Base Amount = 11,800 ÷ (1 + 0.18) = <strong>₹10,000.00</strong>
                      <br />
                      GST Amount = 11,800 − 10,000 = <strong>₹1,800.00</strong>
                    </div>
                  </div>

                  {/* Intra vs Inter State explanation */}
                  <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-300 space-y-1">
                    <p className="font-semibold text-slate-200">
                      Understanding CGST, SGST, and IGST:
                    </p>
                    <p className="text-slate-400">
                      • <strong>Intra-State Transactions (within the same state):</strong> Tax is equally divided into Central GST (CGST) and State GST (SGST). For an 18% rate, 9% goes to CGST and 9% goes to SGST.
                      <br />
                      • <strong>Inter-State Transactions (between different states):</strong> The entire 18% is billed as Integrated GST (IGST).
                    </p>
                  </div>
                </div>
              </div>
            </article>

            {/* Guide Item 3: GST Rates */}
            <article className="p-6 sm:p-8 rounded-2xl bg-slate-800/60 border border-slate-700/70 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center text-purple-400 shrink-0">
                  <Percent className="w-5 h-5" />
                </div>
                <div className="space-y-4 flex-1">
                  <h3 className="text-xl font-bold text-white">
                    GST Rates (5%, 12%, 18%, 28%)
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    The GST Council of India has classified taxable commodities and commercial services into primary standard tax slabs to ensure fairness across essential and luxury sectors:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                    <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-white">5% Tax Slab</span>
                        <span className="text-[11px] font-mono text-brand-300 px-2 py-0.5 rounded bg-brand-950">Essential</span>
                      </div>
                      <p className="text-slate-400 text-xs">
                        Applies to household necessities, basic edible oils, sugar, tea, domestic LPG, and economy transport.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-white">12% Tax Slab</span>
                        <span className="text-[11px] font-mono text-blue-300 px-2 py-0.5 rounded bg-blue-950">Standard</span>
                      </div>
                      <p className="text-slate-400 text-xs">
                        Applies to processed foods, computers, mobile phones, diagnostic reagents, and select business gear.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-white">18% Tax Slab</span>
                        <span className="text-[11px] font-mono text-emerald-300 px-2 py-0.5 rounded bg-emerald-950">Most Common</span>
                      </div>
                      <p className="text-slate-400 text-xs">
                        The benchmark rate for most commercial services, software consulting, capital goods, and dining establishments.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-white">28% Tax Slab</span>
                        <span className="text-[11px] font-mono text-rose-300 px-2 py-0.5 rounded bg-rose-950">Luxury / Sin</span>
                      </div>
                      <p className="text-slate-400 text-xs">
                        Reserved for luxury vehicles, air conditioners, gaming, high-end consumer goods, and related luxury items.
                      </p>
                    </div>
                  </div>

                  {/* Crucial Statutory Disclaimer as explicitly required */}
                  <div className="p-4 rounded-xl bg-amber-950/40 border border-amber-800/60 text-xs text-amber-200/90 flex items-start gap-3 mt-4">
                    <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <p className="leading-relaxed">
                      <strong>Important Notice:</strong> Our online GST calculator provides calculations for the four commonly used standard slabs (5%, 12%, 18%, and 28%). However, the actual applicable GST rate depends strictly on the specific classification of your goods or services under statutory HSN/SAC codes, reverse charge applicability, and active government notifications. The rates in this calculator are not universally applicable to every individual commodity or exempt item. Consult our Kendra tax professionals for case-specific guidance.
                    </p>
                  </div>
                </div>
              </div>
            </article>

          </div>
        </section>

      </main>

      {/* 4. Floating WhatsApp Action */}
      <WhatsAppFloating />

      {/* 5. Footer */}
      <Footer />
    </div>
  );
}
