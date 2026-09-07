import React from 'react';

export default function ContactStatusHud() {
  return (
    <div className="w-full max-w-full bg-[#11141A] text-white border-b border-gray-800 px-3 sm:px-8 py-2 font-mono text-[11px] sm:text-xs flex flex-wrap items-center justify-between gap-2 sm:gap-3 select-none overflow-hidden">
      <div className="flex items-center gap-2 sm:gap-4 flex-wrap">
        <div className="flex items-center gap-1.5 sm:gap-2">
          <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_#E21E4C] animate-pulse shrink-0"></span>
          <span className="text-primary font-bold tracking-wider uppercase truncate">
            CLUSTER_ID: QC-TX-9021
          </span>
        </div>
        <span className="text-gray-600 hidden md:inline">/</span>
        <span className="text-gray-300 hidden md:inline">
          PROTO: TLS_1.3_AES_GCM_256
        </span>
      </div>
      <div className="flex items-center gap-2 sm:gap-4 flex-wrap">
        <span className="bg-white/10 text-gray-300 px-2 py-0.5 rounded text-[10px] sm:text-[11px] font-semibold border border-white/10 whitespace-nowrap">
          ENCRYPTION: ACTIVE
        </span>
        <span className="text-primary font-bold text-[10px] sm:text-xs whitespace-nowrap">
          DISPATCH SLA: &lt; 24H
        </span>
      </div>
    </div>
  );
}
