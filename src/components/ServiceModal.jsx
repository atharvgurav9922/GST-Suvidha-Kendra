import React from 'react';
import { X, MessageCircle, Phone, CheckCircle, ArrowRight } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export default function ServiceModal({ service, isOpen, onClose }) {
  if (!isOpen || !service) return null;

  const whatsappMessage = siteConfig.whatsappMessages.serviceInquiry(service.name);
  const whatsappUrl = `https://wa.me/${siteConfig.business.whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg bg-slate-900 border border-slate-700 rounded-2xl p-6 sm:p-7 shadow-2xl text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl bg-brand-600/20 border border-brand-500/30 flex items-center justify-center text-brand-400">
            {service.icon}
          </div>
          <div>
            <span className="text-xs font-semibold text-brand-400 uppercase tracking-wider">
              Service Enquiry
            </span>
            <h3 className="text-xl font-bold text-white">{service.name}</h3>
          </div>
        </div>

        {/* Description & Key Deliverables */}
        <p className="text-sm text-slate-300 mb-4 leading-relaxed">
          {service.description}
        </p>

        {service.highlights && (
          <div className="mb-6 bg-slate-800/60 p-4 rounded-xl border border-slate-700/60 space-y-2">
            <p className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
              What we assist you with:
            </p>
            {service.highlights.map((point, index) => (
              <div key={index} className="flex items-start gap-2 text-xs text-slate-300">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span>{point}</span>
              </div>
            ))}
          </div>
        )}

        {/* Actions */}
        <div className="space-y-3">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl font-semibold text-white bg-emerald-600 hover:bg-emerald-500 shadow-lg shadow-emerald-900/40 transition"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Enquire on WhatsApp</span>
          </a>

          <div className="grid grid-cols-2 gap-3">
            <a
              href={`tel:${siteConfig.business.phoneRaw}`}
              className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 transition"
            >
              <Phone className="w-4 h-4 text-brand-400" />
              <span>Call Us Direct</span>
            </a>
            <a
              href="#contact"
              onClick={onClose}
              className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold text-white bg-brand-600 hover:bg-brand-500 transition"
            >
              <span>Contact Form</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
