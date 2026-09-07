import React from 'react';
import { Link } from 'react-router-dom';

export default function ServicesCta() {
  return (
    <section className="w-full px-4 sm:px-8 py-20 bg-gradient-to-r from-white via-[#FFF5F7] to-white border-t border-border-subtle">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-light border border-primary/20 text-primary shadow-xs">
          <span className="w-2 h-2 rounded-full bg-primary animate-ping"></span>
          <span className="font-mono text-xs uppercase font-bold tracking-wider">
            SCALE YOUR ENTERPRISE
          </span>
        </div>
        <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-main tracking-tight leading-tight">
          Ready to Deploy Modern <span className="text-primary">Software Systems?</span>
        </h2>
        <p className="font-sans text-base sm:text-lg text-text-muted max-w-xl leading-relaxed">
          Partner with our specialized software engineers and system architects. We deliver secure, scalable, and autonomous technology platforms.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Link
            to="/contact"
            className="px-8 py-3.5 rounded-xl bg-primary text-white font-headline text-sm font-bold shadow-lg shadow-primary/30 hover:bg-primary-dark transition-all flex items-center gap-2"
          >
            <span>Start a Project Today</span>
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </Link>
          <Link
            to="/gallery"
            className="px-8 py-3.5 rounded-xl bg-white border border-border-strong text-text-main font-headline text-sm font-bold hover:bg-surface-dim transition-all shadow-xs"
          >
            Explore Work Gallery
          </Link>
        </div>
      </div>
    </section>
  );
}
