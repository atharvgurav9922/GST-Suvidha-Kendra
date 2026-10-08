import React, { useState } from 'react';
import { 
  Building2, 
  Phone, 
  MessageCircle, 
  Mail, 
  MapPin, 
  Clock, 
  Navigation, 
  Send, 
  CheckCircle2,
  Copy,
  ExternalLink
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export default function Contact() {
  const { business } = siteConfig;
  const [copied, setCopied] = useState(false);

  // Quick message form state (direct client-side submission to WhatsApp or Mailto)
  const [form, setForm] = useState({
    name: '',
    phone: '',
    service: 'GST Registration',
    message: '',
  });

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(business.phoneDisplay);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const text = `*New Service Enquiry - GST Suvidha Kendra*%0A%0A*Name:* ${encodeURIComponent(form.name)}%0A*Phone:* ${encodeURIComponent(form.phone)}%0A*Service:* ${encodeURIComponent(form.service)}%0A*Query:* ${encodeURIComponent(form.message || 'I would like more information.')}`;
    window.open(`https://wa.me/${business.whatsappNumber}?text=${text}`, '_blank');
  };

  const whatsappDirectUrl = `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(
    siteConfig.whatsappMessages.general
  )}`;

  return (
    <section id="contact" className="py-20 sm:py-28 bg-slate-900 text-white relative">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-950 border border-brand-800 text-xs font-semibold text-brand-300 uppercase tracking-wider mb-4">
            <MapPin className="w-3.5 h-3.5 text-brand-400" />
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
            Contact GST Suvidha Kendra
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Have questions about GST filing, new registrations, or income tax returns? Reach out via phone, WhatsApp, or drop by our center.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Official Business Details & Direct Action Buttons */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Primary Business Contact Card */}
            <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 sm:p-8 shadow-xl backdrop-blur-md">
              <div className="border-b border-slate-700/80 pb-6 mb-6">
                <span className="text-xs font-semibold text-brand-400 uppercase tracking-wider">
                  Center Information
                </span>
                <h3 className="text-2xl font-bold text-white mt-1">
                  {business.name}
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Official Facilitation Desk & Tax Advisory Center
                </p>
              </div>

              {/* Information Rows */}
              <div className="space-y-5">
                
                {/* Office Address */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center text-brand-400 shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Office Address</h4>
                    <p className="text-sm font-medium text-slate-200 mt-0.5">
                      {business.address.line1}
                    </p>
                    <p className="text-sm text-slate-300">
                      {business.address.line2}
                    </p>
                    <p className="text-sm text-slate-300">
                      {business.address.cityStateZip}, {business.address.country}
                    </p>
                  </div>
                </div>

                {/* Phone Number */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Phone Number</h4>
                    <div className="flex items-center gap-3 mt-0.5">
                      <a 
                        href={`tel:${business.phoneRaw}`}
                        className="text-base font-bold text-white hover:text-brand-300 transition"
                      >
                        {business.phoneDisplay}
                      </a>
                      <button
                        onClick={handleCopyPhone}
                        className="text-xs text-slate-400 hover:text-white flex items-center gap-1 bg-slate-700/60 px-2 py-0.5 rounded transition"
                        title="Copy phone number"
                      >
                        <Copy className="w-3 h-3" />
                        {copied ? 'Copied!' : 'Copy'}
                      </button>
                    </div>
                    <p className="text-xs text-slate-400">Available during standard business hours</p>
                  </div>
                </div>

                {/* WhatsApp Number */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">WhatsApp Number</h4>
                    <p className="text-base font-bold text-emerald-400 mt-0.5">
                      +{business.whatsappNumber}
                    </p>
                    <p className="text-xs text-slate-400">Fast assistance for document sharing & status check</p>
                  </div>
                </div>

                {/* Email Address */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center text-blue-400 shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Email Address</h4>
                    <a 
                      href={`mailto:${business.email}`} 
                      className="text-sm font-medium text-slate-200 hover:text-white underline decoration-slate-600 hover:decoration-white transition mt-0.5 block"
                    >
                      {business.email}
                    </a>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center text-amber-400 shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Business Hours</h4>
                    <p className="text-sm text-slate-200 mt-0.5 font-medium">{business.businessHours.weekdays}</p>
                    <p className="text-xs text-slate-400 mt-0.5">{business.businessHours.sunday}</p>
                  </div>
                </div>

              </div>

              {/* Required Action Buttons: Call Now, WhatsApp, Get Directions */}
              <div className="mt-8 pt-6 border-t border-slate-700/80 grid grid-cols-1 sm:grid-cols-3 gap-3">
                
                {/* Button 1: Call Now */}
                <a
                  href={`tel:${business.phoneRaw}`}
                  className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold text-white bg-slate-700 hover:bg-slate-600 transition shadow"
                >
                  <Phone className="w-4 h-4 text-brand-300" />
                  <span>Call Now</span>
                </a>

                {/* Button 2: WhatsApp */}
                <a
                  href={whatsappDirectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 shadow-lg shadow-emerald-950/40 transition"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>

                {/* Button 3: Get Directions (Google Maps in new tab) */}
                <a
                  href={business.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-brand-600 to-indigo-600 hover:from-brand-500 hover:to-indigo-500 shadow-lg shadow-brand-950/40 transition"
                >
                  <Navigation className="w-4 h-4 text-amber-300" />
                  <span>Get Directions</span>
                </a>

              </div>
            </div>

            {/* Placeholder Notice Badge */}
            <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700 text-xs text-slate-400 flex items-center justify-between">
              <span>📍 Note: Address and phone details are placeholders configured in <code className="text-brand-300">src/config/siteConfig.js</code>.</span>
            </div>

          </div>

          {/* Right Column: Direct Instant Enquiry Form */}
          <div className="lg:col-span-6">
            <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 sm:p-8 shadow-xl backdrop-blur-md">
              <div className="mb-6">
                <span className="text-xs font-semibold text-brand-400 uppercase tracking-wider">
                  Online Desk
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                  Send a Quick Service Enquiry
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Fill in your requirements to connect with our tax assistant instantly via WhatsApp.
                </p>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-4">
                
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wider">
                    Your Name *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    placeholder="Enter full name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-brand-500 transition"
                  />
                </div>

                <div>
                  <label htmlFor="contact-phone" className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wider">
                    Mobile / WhatsApp Number *
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-brand-500 transition"
                  />
                </div>

                <div>
                  <label htmlFor="contact-service" className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wider">
                    Service Required *
                  </label>
                  <select
                    id="contact-service"
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-500 transition"
                  >
                    <option value="GST Registration">GST Registration</option>
                    <option value="GST Return Filing">GST Return Filing (GSTR-1 / 3B / 9)</option>
                    <option value="GST Amendment">GST Amendment</option>
                    <option value="GST Cancellation">GST Cancellation / Revocation</option>
                    <option value="Income Tax Return (ITR)">Income Tax Return (ITR)</option>
                    <option value="PAN / TAN Services">PAN / TAN Services</option>
                    <option value="Business Registration">Business / MSME Registration</option>
                    <option value="Accounting & Bookkeeping">Accounting & Bookkeeping</option>
                    <option value="Digital Signature (DSC)">Digital Signature Certificate (DSC)</option>
                    <option value="Other Business Services">Other Government & Business Services</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="contact-query" className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wider">
                    Brief Query / Remarks (Optional)
                  </label>
                  <textarea
                    id="contact-query"
                    rows={3}
                    placeholder="E.g., Need GST registration for a new retail trading firm..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-brand-500 transition resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-xl font-bold text-white bg-emerald-600 hover:bg-emerald-500 shadow-lg shadow-emerald-950/50 transition-all duration-200 text-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send Enquiry via WhatsApp</span>
                </button>

                <p className="text-[11px] text-slate-400 text-center">
                  Direct client submission • No backend database required • Instant response
                </p>

              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
