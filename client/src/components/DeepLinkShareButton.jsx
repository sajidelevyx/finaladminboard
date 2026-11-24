import React, { useState } from 'react';
import { Share2, Check } from 'lucide-react';

export default function DeepLinkShareButton({ className = '' }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      if (typeof window !== 'undefined' && navigator?.clipboard) {
        await navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2200);
      }
    } catch (err) {
      console.error('Failed to copy direct link', err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      title="Copy direct shareable link to this exact tab & view"
      className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-xs font-semibold tracking-wide transition-all select-none backdrop-blur-md border cursor-pointer ${
        copied
          ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40 shadow-lg shadow-emerald-500/10'
          : 'bg-[#183153]/50 text-[#b7a990] hover:text-white hover:bg-[#183153]/80 border-[#b7a990]/30 shadow-sm hover:border-[#b7a990]/60'
      } ${className}`}
    >
      {copied ? (
        <>
          <Check className="w-3.5 h-3.5 text-emerald-400 animate-scale-in" />
          <span>Link Copied</span>
        </>
      ) : (
        <>
          <Share2 className="w-3.5 h-3.5 text-[#b7a990]" />
          <span className="hidden sm:inline">Share View</span>
        </>
      )}
    </button>
  );
}
