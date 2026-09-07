import React from 'react';
import { Link } from 'react-router-dom';

export default function AboutCta() {
  return (
    <section className="w-full px-4 sm:px-8 py-20 bg-gradient-to-r from-[#FFF5F7] via-white to-[#FFF5F7] border-b border-border-subtle">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-6">
        <span className="font-mono text-xs text-primary font-bold uppercase tracking-widest">
          READY FOR CO-ENGINEERING
        </span>
        <h2 className="font-headline text-3xl sm:text-4xl font-extrabold text-text-main">
          Ready to Build the Future with <span className="text-primary">Qcodes Infotech</span>?
        </h2>
        <p className="font-sans text-base text-text-muted max-w-xl leading-relaxed">
          Book a technical audit with our principal software architects or discuss your product roadmap today.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Link
            to="/contact"
            className="px-7 py-3 rounded-xl bg-primary text-white font-headline text-sm font-bold shadow-lg shadow-primary/30 hover:bg-primary-dark transition-all flex items-center gap-2"
          >
            <span>Initiate Project Consultation</span>
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </Link>
          <Link
            to="/gallery"
            className="px-7 py-3 rounded-xl bg-white border border-border-strong text-text-main font-headline text-sm font-bold hover:bg-surface-dim transition-all shadow-xs"
          >
            Explore Work Gallery
          </Link>
        </div>
      </div>
    </section>
  );
}
