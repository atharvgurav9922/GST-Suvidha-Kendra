import React, { useState } from 'react';
import { 
  Calculator, 
  RotateCcw, 
  ArrowRight, 
  AlertCircle, 
  CheckCircle2, 
  Copy, 
  Check, 
  Sparkles,
  Percent,
  IndianRupee,
  Layers,
  Info
} from 'lucide-react';

/**
 * Format any number into Indian Currency standard format: ₹1,25,000.00
 */
export function formatINR(value) {
  if (value === null || value === undefined || isNaN(value)) {
    return '₹0.00';
  }
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}

const GST_RATES = [5, 12, 18, 28];
const MAX_AMOUNT_LIMIT = 99999999999; // ₹99,99,99,99,999 (9,999 Crore limit)

export default function GstCalculator({ isCompact = false, onOpenDedicated }) {
  // Mode: 'add' (Add GST) | 'remove' (Remove GST)
  const [mode, setMode] = useState('add');
  const [amountInput, setAmountInput] = useState('');
  const [selectedRate, setSelectedRate] = useState(18);
  const [validationError, setValidationError] = useState('');
  const [copied, setCopied] = useState(false);

  // Result state
  const [result, setResult] = useState(null);

  const handleAmountChange = (e) => {
    const rawVal = e.target.value;
    // Allow digits, decimals, and commas
    setAmountInput(rawVal);
    if (validationError) {
      setValidationError('');
    }
  };

  const handleRateChange = (rate) => {
    setSelectedRate(Number(rate));
    if (result) {
      // Re-trigger calculation automatically if a valid result was already showing
      executeCalculation(amountInput, mode, Number(rate));
    }
  };

  const handleModeSwitch = (newMode) => {
    if (newMode === mode) return;
    setMode(newMode);
    setValidationError('');
    if (result && amountInput) {
      executeCalculation(amountInput, newMode, selectedRate);
    }
  };

  const executeCalculation = (rawAmount, currentMode, rate) => {
    // Sanitize input: remove commas and trim
    const sanitized = String(rawAmount).replace(/,/g, '').trim();

    if (!sanitized) {
      setValidationError('Please enter an amount to calculate GST.');
      setResult(null);
      return;
    }

    const num = Number(sanitized);

    if (isNaN(num)) {
      setValidationError('Please enter a valid numeric amount.');
      setResult(null);
      return;
    }

    if (num < 0) {
      setValidationError('Amount cannot be negative. Please enter a positive number.');
      setResult(null);
      return;
    }

    if (num === 0) {
      setValidationError('Amount must be greater than ₹0.');
      setResult(null);
      return;
    }

    if (num > MAX_AMOUNT_LIMIT) {
      setValidationError('Amount exceeds maximum calculation limit (₹99,99,99,99,999).');
      setResult(null);
      return;
    }

    // Input is valid
    setValidationError('');

    if (currentMode === 'add') {
      // Mode 1: Add GST
      // GST Amount = Amount × GST Rate / 100
      // Total Amount = Amount + GST Amount
      const baseAmount = num;
      const gstAmount = (baseAmount * rate) / 100;
      const totalAmount = baseAmount + gstAmount;
      const halfGst = gstAmount / 2;

      setResult({
        mode: 'add',
        baseAmount,
        rate,
        gstAmount,
        totalAmount,
        cgst: halfGst,
        sgst: halfGst,
        igst: gstAmount,
      });
    } else {
      // Mode 2: Remove GST
      // Base Amount = Total Amount / (1 + GST Rate / 100)
      // GST Amount = Total Amount - Base Amount
      const totalAmount = num;
      const baseAmount = totalAmount / (1 + rate / 100);
      const gstAmount = totalAmount - baseAmount;
      const halfGst = gstAmount / 2;

      setResult({
        mode: 'remove',
        totalAmount,
        rate,
        gstAmount,
        baseAmount,
        cgst: halfGst,
        sgst: halfGst,
        igst: gstAmount,
      });
    }
  };

  const handleCalculate = (e) => {
    if (e) e.preventDefault();
    executeCalculation(amountInput, mode, selectedRate);
  };

  const handleReset = () => {
    setAmountInput('');
    setSelectedRate(18);
    setValidationError('');
    setResult(null);
    setCopied(false);
  };

  const handleCopySummary = () => {
    if (!result) return;
    let summaryText = '';
    if (result.mode === 'add') {
      summaryText = `GST Calculation Summary:\nMode: Add GST\nBase Amount: ${formatINR(result.baseAmount)}\nGST Rate: ${result.rate}%\nGST Amount: ${formatINR(result.gstAmount)}\nCGST (50%): ${formatINR(result.cgst)}\nSGST (50%): ${formatINR(result.sgst)}\nTotal Amount: ${formatINR(result.totalAmount)}`;
    } else {
      summaryText = `GST Calculation Summary:\nMode: Remove GST\nAmount Including GST: ${formatINR(result.totalAmount)}\nGST Rate: ${result.rate}%\nGST Amount: ${formatINR(result.gstAmount)}\nBase Amount: ${formatINR(result.baseAmount)}\nCGST (50%): ${formatINR(result.cgst)}\nSGST (50%): ${formatINR(result.sgst)}`;
    }
    navigator.clipboard.writeText(summaryText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const quickPresets = [5000, 10000, 25000, 50000, 100000];

  return (
    <div className="w-full max-w-2xl mx-auto bg-slate-900 border border-slate-700/80 rounded-2xl sm:rounded-3xl shadow-2xl p-5 sm:p-8 backdrop-blur-xl transition-all duration-300">
      
      {/* Header bar */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-6 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-brand-600 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-brand-600/30">
            <Calculator className="w-6 h-6 text-amber-300" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white flex items-center gap-2">
              <span>GST Calculator</span>
              <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-800/60 hidden sm:inline-block">
                Free Tool
              </span>
            </h2>
            <p className="text-xs text-slate-400">
              Calculate Goods & Services Tax (Add or Remove GST instantly)
            </p>
          </div>
        </div>

        {/* Mode Selector Tabs (Add GST | Remove GST) */}
        <div className="inline-flex p-1 bg-slate-950 rounded-xl border border-slate-800 self-start sm:self-auto">
          <button
            type="button"
            onClick={() => handleModeSwitch('add')}
            className={`px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-200 ${
              mode === 'add'
                ? 'bg-brand-600 text-white shadow-md shadow-brand-600/40'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
            aria-pressed={mode === 'add'}
          >
            Add GST
          </button>
          <button
            type="button"
            onClick={() => handleModeSwitch('remove')}
            className={`px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-200 ${
              mode === 'remove'
                ? 'bg-brand-600 text-white shadow-md shadow-brand-600/40'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
            aria-pressed={mode === 'remove'}
          >
            Remove GST
          </button>
        </div>
      </div>

      {/* Main Calculation Form */}
      <form onSubmit={handleCalculate} className="pt-6 space-y-5">
        
        {/* Amount Input */}
        <div>
          <label 
            htmlFor="gst-amount-input" 
            className="block text-xs sm:text-sm font-semibold text-slate-200 mb-2 flex items-center justify-between"
          >
            <span>
              {mode === 'add' ? 'Enter Amount (Base Price)' : 'Enter Amount (Including GST)'}
            </span>
            <span className="text-[11px] font-normal text-slate-400">
              Currency: INR (₹)
            </span>
          </label>

          <div className="relative rounded-xl shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-brand-400 font-bold text-base">
              ₹
            </div>
            <input
              id="gst-amount-input"
              type="text"
              inputMode="decimal"
              value={amountInput}
              onChange={handleAmountChange}
              placeholder={mode === 'add' ? 'e.g. 10,000' : 'e.g. 11,800'}
              className="w-full pl-9 pr-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-slate-500 font-medium text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition"
              aria-describedby="amount-validation-msg"
            />
          </div>

          {/* Quick preset chips for rapid mobile tapping */}
          <div className="flex flex-wrap items-center gap-1.5 mt-2">
            <span className="text-[11px] text-slate-400 mr-1">Quick Select:</span>
            {quickPresets.map((preset) => (
              <button
                key={preset}
                type="button"
                onClick={() => {
                  setAmountInput(String(preset));
                  executeCalculation(preset, mode, selectedRate);
                }}
                className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700/60 transition"
              >
                ₹{preset.toLocaleString('en-IN')}
              </button>
            ))}
          </div>
        </div>

        {/* GST Rate Selection */}
        <div>
          <label 
            htmlFor="gst-rate-dropdown" 
            className="block text-xs sm:text-sm font-semibold text-slate-200 mb-2"
          >
            Select GST Rate
          </label>

          {/* Required Dropdown */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
            <div className="sm:col-span-5 relative">
              <select
                id="gst-rate-dropdown"
                value={selectedRate}
                onChange={(e) => handleRateChange(Number(e.target.value))}
                className="w-full py-2.5 px-3 rounded-xl bg-slate-950 border border-slate-700 text-white font-semibold text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 cursor-pointer transition"
              >
                {GST_RATES.map((rate) => (
                  <option key={rate} value={rate} className="bg-slate-900 text-white">
                    {rate}% GST
                  </option>
                ))}
              </select>
            </div>

            {/* Quick Segmented Rate Buttons */}
            <div className="sm:col-span-7 flex items-center gap-1.5">
              {GST_RATES.map((rate) => (
                <button
                  key={rate}
                  type="button"
                  onClick={() => handleRateChange(rate)}
                  className={`flex-1 py-2 rounded-xl text-xs sm:text-sm font-bold border transition-all duration-200 ${
                    selectedRate === rate
                      ? 'bg-brand-600/30 text-brand-300 border-brand-500 shadow-sm shadow-brand-500/20'
                      : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-white hover:border-slate-700'
                  }`}
                >
                  {rate}%
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Validation Error Banner */}
        {validationError && (
          <div 
            id="amount-validation-msg"
            className="p-3 rounded-xl bg-rose-950/60 border border-rose-800/80 text-rose-300 text-xs sm:text-sm flex items-start gap-2.5 animate-in fade-in duration-200"
            role="alert"
          >
            <AlertCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
            <span>{validationError}</span>
          </div>
        )}

        {/* Action Buttons: Calculate | Reset */}
        <div className="flex items-center gap-3 pt-2">
          <button
            type="submit"
            className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl font-bold text-white bg-gradient-to-r from-brand-600 via-brand-500 to-indigo-600 hover:from-brand-500 hover:to-indigo-500 shadow-lg shadow-brand-600/30 hover:shadow-brand-600/50 hover:-translate-y-0.5 transition-all duration-200 text-sm sm:text-base active:scale-[0.99]"
          >
            <Calculator className="w-4 h-4" />
            <span>Calculate</span>
          </button>

          <button
            type="button"
            onClick={handleReset}
            className="inline-flex items-center justify-center gap-2 py-3 px-4 sm:px-5 rounded-xl font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:text-white transition active:scale-[0.99] text-sm sm:text-base"
            title="Reset calculator inputs"
          >
            <RotateCcw className="w-4 h-4 text-slate-400" />
            <span>Reset</span>
          </button>
        </div>
      </form>

      {/* Result Display Section */}
      {result && (
        <div className="mt-6 pt-6 border-t border-slate-800 space-y-4 animate-in fade-in slide-in-from-top-2 duration-300">
          
          <div className="flex items-center justify-between">
            <span className="text-xs uppercase tracking-wider font-bold text-brand-400 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              Calculation Results
            </span>

            <button
              type="button"
              onClick={handleCopySummary}
              className="text-xs text-slate-400 hover:text-white flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 transition"
              title="Copy summary to clipboard"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400 font-medium">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>

          {/* Structured Output Cards */}
          <div className="bg-slate-950/90 border border-slate-800 rounded-2xl p-4 sm:p-5 space-y-3 font-mono">
            {result.mode === 'add' ? (
              // Mode 1: Add GST Results
              <>
                <div className="flex items-center justify-between text-sm sm:text-base py-1 border-b border-slate-800/80">
                  <span className="font-sans text-slate-400">Base Amount</span>
                  <span className="font-bold text-white tracking-wide">
                    {formatINR(result.baseAmount)}
                  </span>
                </div>

                <div className="flex items-center justify-between text-sm sm:text-base py-1 border-b border-slate-800/80">
                  <span className="font-sans text-slate-400">GST Rate</span>
                  <span className="font-bold text-brand-400">
                    {result.rate}%
                  </span>
                </div>

                <div className="flex items-center justify-between text-sm sm:text-base py-1 border-b border-slate-800/80">
                  <span className="font-sans text-amber-400">GST Amount</span>
                  <span className="font-bold text-amber-300 tracking-wide">
                    {formatINR(result.gstAmount)}
                  </span>
                </div>

                <div className="flex items-center justify-between text-base sm:text-lg pt-1">
                  <span className="font-sans font-bold text-white">Total Amount</span>
                  <span className="font-extrabold text-emerald-400 text-lg sm:text-xl tracking-wide">
                    {formatINR(result.totalAmount)}
                  </span>
                </div>
              </>
            ) : (
              // Mode 2: Remove GST Results
              <>
                <div className="flex items-center justify-between text-sm sm:text-base py-1 border-b border-slate-800/80">
                  <span className="font-sans text-slate-400">Amount Including GST</span>
                  <span className="font-bold text-white tracking-wide">
                    {formatINR(result.totalAmount)}
                  </span>
                </div>

                <div className="flex items-center justify-between text-sm sm:text-base py-1 border-b border-slate-800/80">
                  <span className="font-sans text-slate-400">GST Rate</span>
                  <span className="font-bold text-brand-400">
                    {result.rate}%
                  </span>
                </div>

                <div className="flex items-center justify-between text-sm sm:text-base py-1 border-b border-slate-800/80">
                  <span className="font-sans text-amber-400">GST Amount</span>
                  <span className="font-bold text-amber-300 tracking-wide">
                    {formatINR(result.gstAmount)}
                  </span>
                </div>

                <div className="flex items-center justify-between text-base sm:text-lg pt-1">
                  <span className="font-sans font-bold text-white">Base Amount</span>
                  <span className="font-extrabold text-emerald-400 text-lg sm:text-xl tracking-wide">
                    {formatINR(result.baseAmount)}
                  </span>
                </div>
              </>
            )}
          </div>

          {/* Tax Slabs Split Breakdown (CGST / SGST / IGST) */}
          <div className="grid grid-cols-2 gap-2 text-xs bg-slate-900/60 p-3 rounded-xl border border-slate-800">
            <div className="space-y-1">
              <span className="text-[11px] text-slate-400 block">Intra-State (Within State):</span>
              <p className="text-slate-300 font-mono">CGST ({result.rate / 2}%): <strong className="text-white">{formatINR(result.cgst)}</strong></p>
              <p className="text-slate-300 font-mono">SGST ({result.rate / 2}%): <strong className="text-white">{formatINR(result.sgst)}</strong></p>
            </div>
            <div className="space-y-1 border-l border-slate-800 pl-3">
              <span className="text-[11px] text-slate-400 block">Inter-State (Outside State):</span>
              <p className="text-slate-300 font-mono">IGST ({result.rate}%): <strong className="text-white">{formatINR(result.igst)}</strong></p>
              <span className="text-[10px] text-slate-500">Applicable on interstate sales</span>
            </div>
          </div>
        </div>
      )}

      {/* Button to navigate to dedicated route on homepage embed */}
      {isCompact && onOpenDedicated && (
        <div className="mt-6 pt-5 border-t border-slate-800 text-center">
          <button
            type="button"
            onClick={onOpenDedicated}
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-brand-300 bg-brand-950/80 hover:bg-brand-900/90 border border-brand-800/80 hover:border-brand-700 transition"
          >
            <span>Open GST Calculator</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}

    </div>
  );
}
