import React from 'react';

export default function SolutionsStatusHud() {
  return (
    <div className="w-full bg-surface-dim border-b border-border-subtle px-4 sm:px-8 xl:px-12 py-2.5 flex flex-wrap items-center justify-between gap-3 select-none">
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_rgba(226,30,76,0.6)] animate-pulse"></span>
          <span className="font-mono text-xs text-primary font-semibold tracking-widest uppercase">
            CLUSTER ID: QC-7092-ALPHA
          </span>
        </div>
        <span className="hidden sm:inline font-mono text-xs text-border-strong">/</span>
        <span className="hidden sm:inline font-mono text-xs text-text-muted">
          4 CORE SOLUTION PILLARS ONLINE
        </span>
      </div>
      <div className="flex items-center gap-4">
        <span className="font-mono text-xs text-primary font-semibold bg-[#FFF0F2] border border-primary/20 px-2.5 py-1 rounded">
          GSAP SCROLL_TRIGGERS: ACTIVE
        </span>
        <span className="font-mono text-xs text-text-muted hidden lg:inline">
          DELIVERY SLA: ZERO-DEFECT
        </span>
      </div>
    </div>
  );
}
