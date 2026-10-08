import React, { useState } from 'react';
import { 
  FileCheck, 
  FileSpreadsheet, 
  FileEdit, 
  FileX, 
  Calculator, 
  CreditCard, 
  Building2, 
  BookOpenCheck, 
  KeyRound, 
  Briefcase,
  ArrowRight,
  MessageCircle,
  CheckCircle2
} from 'lucide-react';
import ServiceModal from './ServiceModal';
import { siteConfig } from '../config/siteConfig';

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const servicesData = [
    {
      id: 'gst-reg',
      name: 'GST Registration',
      icon: <FileCheck className="w-6 h-6 text-brand-500" />,
      description: 'New GST registration assistance for sole proprietorships, partnerships, LLPs, and Private Limited companies with swift verification.',
      highlights: ['Document checklist & validation', 'ARN generation & status tracking', 'Aadhaar authentication guidance'],
      tag: 'Most Popular',
    },
    {
      id: 'gst-filing',
      name: 'GST Return Filing',
      icon: <FileSpreadsheet className="w-6 h-6 text-emerald-500" />,
      description: 'Accurate and timely monthly/quarterly GST return filings including GSTR-1, GSTR-3B, CMP-08, and GSTR-9 annual returns.',
      highlights: ['Input Tax Credit (ITC) reconciliation', 'Penalty and interest avoidance', 'Timely reminder alerts'],
      tag: 'Essential',
    },
    {
      id: 'gst-amendment',
      name: 'GST Amendment',
      icon: <FileEdit className="w-6 h-6 text-amber-500" />,
      description: 'Hassle-free updates to your core and non-core GST details including address change, addition of branch/partners, or mobile/email updates.',
      highlights: ['Core field modifications', 'Additional place of business addition', 'Authorized signatory update'],
    },
    {
      id: 'gst-cancellation',
      name: 'GST Cancellation',
      icon: <FileX className="w-6 h-6 text-rose-500" />,
      description: 'Professional guidance for voluntary surrender of GSTIN or responding to suo-motu cancellation notices and revocation applications.',
      highlights: ['Surrender application filing (REG-16)', 'Final return GSTR-10 guidance', 'Revocation of cancellation support'],
    },
    {
      id: 'itr',
      name: 'Income Tax Return (ITR)',
      icon: <Calculator className="w-6 h-6 text-blue-500" />,
      description: 'Expert preparation and e-filing of Income Tax Returns for salaried individuals, professionals, traders, and small business owners.',
      highlights: ['ITR-1, ITR-2, ITR-3 & ITR-4 filing', 'Tax saving advice under old/new regimes', 'TDS refund claim assistance'],
      tag: 'Seasonal Rush',
    },
    {
      id: 'pan-tan',
      name: 'PAN/TAN Services',
      icon: <CreditCard className="w-6 h-6 text-purple-500" />,
      description: 'Fast application, correction, reprint of Permanent Account Number (PAN) cards and new Tax Deduction Account Number (TAN) generation.',
      highlights: ['New Instant PAN application', 'Corrections in name/DOB/photo', 'New TAN registration for deduction'],
    },
    {
      id: 'business-reg',
      name: 'Business Registration',
      icon: <Building2 className="w-6 h-6 text-cyan-500" />,
      description: 'Comprehensive setup support for MSME/Udyam registration, Shop & Establishment Act licensing, partnership deed drafting, and trade license.',
      highlights: ['Udyam / MSME Certificate generation', 'Shop Act / Trade license assistance', 'Proprietorship firm certification'],
    },
    {
      id: 'accounting',
      name: 'Accounting Services',
      icon: <BookOpenCheck className="w-6 h-6 text-indigo-500" />,
      description: 'Reliable computerized bookkeeping, ledger management, balance sheet compilation, and profit & loss statement preparation for small firms.',
      highlights: ['Tally / Zoho cloud accounting setup', 'Monthly expense & sales entries', 'Bank reconciliations'],
    },
    {
      id: 'dsc',
      name: 'Digital Signature (DSC)',
      icon: <KeyRound className="w-6 h-6 text-amber-500" />,
      description: 'Issuance of paperless Class-3 Digital Signature Certificates with crypto USB tokens for GST, MCA, e-Tendering, and Income Tax portals.',
      highlights: ['Paperless video verification', 'Class 3 Signing + Encryption', '2-year & 3-year validity tokens'],
    },
    {
      id: 'other-services',
      name: 'Other Government & Business Services',
      icon: <Briefcase className="w-6 h-6 text-teal-500" />,
      description: 'Assistance with FSSAI food license, Trademark filing, Import-Export Code (IEC), EPF/ESIC compliance, and local municipality utility services.',
      highlights: ['FSSAI Food license registration', 'Import Export Code (IEC) application', 'Labour law & local registrations'],
    },
  ];

  const handleEnquire = (service) => {
    setSelectedService(service);
    setModalOpen(true);
  };

  return (
    <section id="services" className="py-20 sm:py-28 bg-slate-900 text-white relative">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-brand-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-950 border border-brand-800 text-xs font-semibold text-brand-300 uppercase tracking-wider mb-4">
            <CheckCircle2 className="w-3.5 h-3.5 text-brand-400" />
            Our Core Competencies
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
            Comprehensive GST & Financial Services
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            From single-desk business setup to ongoing tax compliance, we deliver personalized, dependable, and timely assistance for every step of your entrepreneurial journey.
          </p>
        </div>

        {/* Services Grid (10 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="group relative bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 hover:border-brand-500/50 rounded-2xl p-6 sm:p-7 transition-all duration-300 flex flex-col justify-between shadow-lg hover:shadow-2xl hover:shadow-brand-950/50 hover:-translate-y-1"
            >
              <div>
                {/* Top Badge & Icon */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-13 h-13 p-3.5 rounded-xl bg-slate-900 border border-slate-700/80 group-hover:border-brand-500/40 group-hover:scale-105 transition-all duration-200">
                    {service.icon}
                  </div>
                  {service.tag && (
                    <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-brand-950 text-brand-300 border border-brand-800/80">
                      {service.tag}
                    </span>
                  )}
                </div>

                {/* Service Name */}
                <h3 className="text-xl font-bold text-white mb-2.5 group-hover:text-brand-300 transition-colors">
                  {service.name}
                </h3>

                {/* Short Description */}
                <p className="text-sm text-slate-300 leading-relaxed mb-5">
                  {service.description}
                </p>

                {/* Key Points */}
                <ul className="space-y-1.5 mb-6 pt-3 border-t border-slate-700/60">
                  {service.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs text-slate-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-400"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex items-center gap-3">
                <button
                  onClick={() => handleEnquire(service)}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-brand-600 hover:bg-brand-500 shadow-md shadow-brand-900/20 transition-all duration-200"
                >
                  <span>Enquire Now</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </button>

                <a
                  href={`https://wa.me/${siteConfig.business.whatsappNumber}?text=${encodeURIComponent(
                    siteConfig.whatsappMessages.serviceInquiry(service.name)
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-emerald-950/70 hover:bg-emerald-900 border border-emerald-700/50 text-emerald-400 hover:text-emerald-300 transition"
                  title={`WhatsApp inquiry for ${service.name}`}
                  aria-label={`WhatsApp inquiry for ${service.name}`}
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-800 via-navy-800 to-slate-800 border border-slate-700 text-center flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="text-center sm:text-left">
            <h4 className="text-lg sm:text-xl font-bold text-white">Need a customized tax or compliance package?</h4>
            <p className="text-sm text-slate-300 mt-1">Visit our local center or speak directly with our taxation representative.</p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white bg-slate-900 hover:bg-slate-950 border border-slate-600 hover:border-slate-500 transition shadow-lg shrink-0"
          >
            <span>Speak with an Advisor</span>
            <ArrowRight className="w-4 h-4 text-brand-400" />
          </a>
        </div>

      </div>

      {/* Reusable Enquiry Modal */}
      <ServiceModal
        service={selectedService}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </section>
  );
}
