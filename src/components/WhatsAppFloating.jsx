import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export default function WhatsAppFloating() {
  const [showTooltip, setShowTooltip] = useState(true);

  const predefinedMessage = siteConfig.whatsappMessages.floatingButton;
  const whatsappUrl = `https://wa.me/${siteConfig.business.whatsappNumber}?text=${encodeURIComponent(
    predefinedMessage
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end gap-3 pointer-events-auto">
      {/* Tooltip badge on hover/display */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-slate-900/95 text-white text-xs px-3.5 py-2 rounded-xl shadow-2xl border border-slate-700 backdrop-blur-md animate-in fade-in slide-in-from-right duration-300">
          <span>Need help? Chat with our Tax Desk</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-white ml-1"
            title="Dismiss"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="relative group w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white flex items-center justify-center shadow-xl shadow-emerald-900/50 hover:scale-105 active:scale-95 transition-all duration-200"
      >
        {/* Pulse Ripple Effect */}
        <span className="absolute -inset-1 rounded-full bg-emerald-400 opacity-40 animate-ping pointer-events-none group-hover:opacity-75" />
        
        {/* Icon */}
        <MessageCircle className="w-8 h-8 sm:w-9 sm:h-9 relative z-10 fill-white/20" />
      </a>
    </div>
  );
}
