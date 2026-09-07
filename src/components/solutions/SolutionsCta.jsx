import React from 'react';
import { Link } from 'react-router-dom';

export default function SolutionsCta() {
  return (
    <section className="w-full px-4 sm:px-8 xl:px-12 py-16 bg-white border-t border-border-subtle">
      <div className="max-w-6xl mx-auto bg-gradient-to-r from-surface-dim via-[#FFF0F2]/40 to-surface-dim border border-border-subtle p-8 sm:p-12 rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="flex flex-col gap-2 max-w-xl">
          <span className="font-mono text-xs text-primary font-bold uppercase tracking-widest">
            Autonomous Deployment Engine
          </span>
          <h3 className="font-headline text-2xl lg:text-3xl font-extrabold text-[#1C1C1C]">
            Ready to embed sovereign intelligence into your ecosystem?
          </h3>
          <p className="font-sans text-sm lg:text-base text-text-muted leading-relaxed">
            Connect your architectural specifications to our distributed engineers. Deploy multi-region neural topologies within 48 hours.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
          <Link
            to="/contact"
            className="w-full sm:w-auto px-8 py-3.5 bg-primary hover:bg-primary-dark text-white font-headline text-sm font-bold rounded-xl text-center shadow-lg shadow-primary/25 transition-all flex items-center justify-center gap-2"
          >
            <span>Launch Deployment</span>
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </Link>
          <Link
            to="/gallery"
            className="w-full sm:w-auto px-8 py-3.5 bg-white hover:bg-surface-dim text-text-main border border-border-strong font-headline text-sm font-bold rounded-xl text-center shadow-xs transition-all"
          >
            Explore Whitepapers
          </Link>
        </div>
      </div>
    </section>
  );
}
