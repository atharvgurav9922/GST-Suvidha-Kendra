import React from 'react';
import { 
  ShieldCheck, 
  Clock, 
  GraduationCap, 
  SearchCheck, 
  Headphones, 
  Laptop, 
  Users2, 
  FileCheck,
  Building,
  Target
} from 'lucide-react';

export default function About() {
  const whyChooseUsPoints = [
    {
      title: 'Trusted Service',
      description: 'Strict adherence to GST and Income Tax regulatory norms with complete confidentiality of all client records and financial filings.',
      icon: <ShieldCheck className="w-6 h-6 text-brand-600" />,
    },
    {
      title: 'Quick Assistance',
      description: 'Streamlined documentation verification and proactive tracking to minimize delays and prevent last-minute return filing rushes.',
      icon: <Clock className="w-6 h-6 text-emerald-600" />,
    },
    {
      title: 'Professional Guidance',
      description: 'Experienced tax professionals ready to clarify your queries regarding tax deductions, ITC eligibility, and procedural compliances.',
      icon: <GraduationCap className="w-6 h-6 text-amber-600" />,
    },
    {
      title: 'Transparent Process',
      description: 'Clear documentation requirements, fixed statutory fee structures, and no hidden surprises at any phase of the application.',
      icon: <SearchCheck className="w-6 h-6 text-indigo-600" />,
    },
    {
      title: 'Customer Support',
      description: 'Dedicated phone, WhatsApp, and in-person desk support to resolve your tax queries and guide you through departmental notices.',
      icon: <Headphones className="w-6 h-6 text-rose-600" />,
    },
    {
      title: 'Convenient Online Assistance',
      description: 'Submit your softcopy invoices and documents securely via WhatsApp or email, reducing physical visits whenever you prefer.',
      icon: <Laptop className="w-6 h-6 text-teal-600" />,
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-28 bg-slate-50 text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 border border-brand-200 text-xs font-bold text-brand-700 uppercase tracking-wider">
              <Users2 className="w-4 h-4 text-brand-600" />
              About Our Kendra
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Committed to Making Business Compliance Simple & Accessible
            </h2>

            <p className="text-base text-slate-600 leading-relaxed">
              <strong>GST Suvidha Kendra</strong> is established with a clear mission: to demystify complex tax regulations and provide accessible, honest, and prompt accounting and compliance support to individuals, retail shopkeepers, startups, and MSME enterprises.
            </p>

            <p className="text-base text-slate-600 leading-relaxed">
              We understand that navigating portals, generating challans, tracking Input Tax Credit (ITC), and adhering to monthly compliance deadlines can be overwhelming for small business owners. Our certified facilitation desk bridges that gap with structured checklists, hands-on filing, and clear communication in plain, understandable language.
            </p>

            {/* Micro stats banner */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                <p className="text-2xl font-extrabold text-brand-700">MSME</p>
                <p className="text-xs text-slate-500 font-medium mt-1">Focused support for local small businesses</p>
              </div>
              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                <p className="text-2xl font-extrabold text-emerald-700">100%</p>
                <p className="text-xs text-slate-500 font-medium mt-1">Ethical & compliant filing standards</p>
              </div>
              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm col-span-2 sm:col-span-1">
                <p className="text-2xl font-extrabold text-amber-700">Digital</p>
                <p className="text-xs text-slate-500 font-medium mt-1">Paperless & quick turnaround</p>
              </div>
            </div>
          </div>

          {/* Visual Presentation Box */}
          <div className="lg:col-span-6">
            <div className="relative bg-gradient-to-tr from-slate-900 via-navy-900 to-slate-950 text-white rounded-3xl p-8 sm:p-10 shadow-xl border border-slate-800">
              <div className="space-y-6">
                <div className="w-12 h-12 rounded-2xl bg-brand-500/20 border border-brand-500/40 flex items-center justify-center text-brand-400">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white">Our Operational Principles</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  We maintain strict ethical standards. We believe in legitimate, accurate tax reporting and complete transparency.
                </p>
                
                <div className="space-y-3.5 pt-2">
                  <div className="flex items-start gap-3">
                    <FileCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-semibold text-white">No False Promises</h4>
                      <p className="text-xs text-slate-400 mt-0.5">We provide genuine statutory assistance based strictly on official tax laws and department guidelines without misleading approval claims.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Building className="w-5 h-5 text-brand-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-semibold text-white">End-to-End Handholding</h4>
                      <p className="text-xs text-slate-400 mt-0.5">From collecting basic KYC to generating official ARN/filing receipts, we walk through each milestone with you.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-semibold text-white">Secure Data Handling</h4>
                      <p className="text-xs text-slate-400 mt-0.5">Your banking statements, invoices, and sensitive identity proofs are strictly confidential and encrypted.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Why Choose Us Section */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
              Why Choose Us?
            </h3>
            <p className="text-slate-600 text-sm sm:text-base">
              Reliable taxation services crafted around punctuality, convenience, and transparent service delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {whyChooseUsPoints.map((point, index) => (
              <div 
                key={index} 
                className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-center mb-4 shadow-sm">
                  {point.icon}
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">
                  {point.title}
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
