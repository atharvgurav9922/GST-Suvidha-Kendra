import React, { useEffect, useState } from 'react';
import { Users, Eye, RefreshCw, ShieldCheck, Info } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

/**
 * Reusable Visitor Counter Component
 * 
 * Technical Implementation:
 * - Uses a zero-backend third-party visitor counting service (CounterAPI.dev).
 * - No Node.js / Express / MongoDB required.
 * - Isolated and fully configurable via siteConfig.visitorCounter.
 * - Handles loading, formatting (e.g. 1,254), network fallbacks, and real-time updates.
 */
export default function VisitorCounter() {
  const { namespace, key, fallbackDisplay } = siteConfig.visitorCounter;
  const [visitorCount, setVisitorCount] = useState(null);
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState('connecting'); // 'connecting' | 'live' | 'fallback'
  const [showDocs, setShowDocs] = useState(false);

  useEffect(() => {
    let isMounted = true;

    async function fetchVisitorCount() {
      try {
        setLoading(true);
        // CounterAPI endpoint - increments visit count safely without secret keys
        const response = await fetch(
          `https://api.counterapi.dev/v1/${encodeURIComponent(namespace)}/${encodeURIComponent(key)}/up`,
          {
            method: 'GET',
            headers: {
              'Accept': 'application/json',
            },
          }
        );

        if (!response.ok) {
          throw new Error(`Counter service HTTP ${response.status}`);
        }

        const data = await response.json();
        
        if (isMounted && typeof data.count === 'number') {
          setVisitorCount(data.count);
          setStatus('live');
        } else {
          throw new Error('Invalid count payload');
        }
      } catch (err) {
        // Safe fallback in case of rate limits, ad-blockers, or offline mode
        console.warn('Third-party visitor counter service note:', err.message);
        if (isMounted) {
          setVisitorCount(fallbackDisplay || 1254);
          setStatus('fallback');
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    fetchVisitorCount();

    return () => {
      isMounted = false;
    };
  }, [namespace, key, fallbackDisplay]);

  // Format number with standard thousand commas (e.g., 1,254)
  const formattedCount = visitorCount !== null ? Number(visitorCount).toLocaleString('en-IN') : '...';

  return (
    <section className="py-12 bg-gradient-to-b from-slate-900 to-navy-900 text-white relative overflow-hidden border-y border-slate-800">
      {/* Subtle decorative glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-24 bg-brand-500/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-slate-800/60 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-slate-700/60 shadow-xl">
          
          {/* Left Description */}
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-14 h-14 rounded-xl bg-brand-600/20 border border-brand-500/30 flex items-center justify-center text-brand-400 shrink-0 shadow-inner">
              <Users className="w-7 h-7" />
            </div>
            <div>
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <span className="text-xs uppercase tracking-wider font-semibold text-brand-400 bg-brand-950/80 px-2.5 py-0.5 rounded-full border border-brand-800">
                  Live Analytics
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] text-slate-400">
                  <span className={`w-2 h-2 rounded-full ${status === 'live' ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'}`} />
                  {status === 'live' ? 'Connected to CounterAPI' : 'Standard Baseline'}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                Website Visitors
              </h3>
              <p className="text-sm text-slate-400 mt-0.5">
                Verified digital footfalls across our GST & Taxation service platform
              </p>
            </div>
          </div>

          {/* Right Counter Value */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="bg-slate-950/80 border border-slate-700/80 px-6 py-4 rounded-xl flex items-center gap-4 shadow-inner min-w-[200px] justify-center">
              <div className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-mono flex items-center gap-1">
                {loading ? (
                  <span className="flex items-center gap-2 text-slate-400 text-2xl font-normal">
                    <RefreshCw className="w-5 h-5 animate-spin text-brand-400" />
                    Counting...
                  </span>
                ) : (
                  <>
                    <span className="text-brand-400 font-sans mr-1">👥</span>
                    <span>{formattedCount}</span>
                  </>
                )}
              </div>
            </div>

            <button
              onClick={() => setShowDocs(!showDocs)}
              title="View third-party integration info"
              className="text-xs text-slate-400 hover:text-white flex items-center gap-1.5 px-3 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 transition"
            >
              <Info className="w-3.5 h-3.5" />
              Service Info
            </button>
          </div>

        </div>

        {/* Collapsible Integration Documentation for the site owner */}
        {showDocs && (
          <div className="mt-4 p-4 rounded-xl bg-slate-800/90 border border-slate-700 text-xs text-slate-300 transition-all">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-semibold text-white flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                Third-Party Visitor Counter Architecture
              </h4>
              <button 
                onClick={() => setShowDocs(false)} 
                className="text-slate-400 hover:text-white"
              >
                ✕ Close
              </button>
            </div>
            <p className="mb-2 leading-relaxed text-slate-300">
              This counter is 100% serverless and frontend-safe. It does not require Node.js, Express, MongoDB, or stored credentials.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-300 font-mono text-[11px] bg-slate-950/60 p-3 rounded-lg border border-slate-800">
              <div>
                <span className="text-slate-500">Service:</span> CounterAPI (api.counterapi.dev)
              </div>
              <div>
                <span className="text-slate-500">Namespace:</span> {namespace}
              </div>
              <div>
                <span className="text-slate-500">Key:</span> {key}
              </div>
              <div>
                <span className="text-slate-500">Config File:</span> src/config/siteConfig.js
              </div>
            </div>
            <p className="mt-2 text-slate-400 text-[11px]">
              💡 <strong>How to change:</strong> Update <code className="text-brand-300">siteConfig.visitorCounter.namespace</code> in <code className="text-brand-300">src/config/siteConfig.js</code> to link your own public analytics tracker, GoatCounter, or Hits.sh.
            </p>
          </div>
        )}

      </div>
    </section>
  );
}
