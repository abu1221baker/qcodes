import React from 'react';
import { AboutUsSvg } from '../../assets';

export default function AboutBanner() {
  return (
    <section className="relative w-full px-4 sm:px-8 py-20 bg-gradient-to-b from-white via-surface-dim to-white border-t border-b border-border-subtle">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7 flex flex-col gap-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-light border border-primary/20 text-primary self-start shadow-xs">
            <span className="w-2 h-2 rounded-full bg-primary animate-ping"></span>
            <span className="font-mono text-xs uppercase font-bold tracking-wider">
              ENTERPRISE NARRATIVE &amp; DNA
            </span>
          </div>
          <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-main tracking-tight leading-tight">
            Architecting Sovereign <span className="text-primary">Digital Foundations.</span>
          </h2>
          <p className="font-sans text-base sm:text-lg text-text-muted leading-relaxed">
            At Qcodes Infotech, we engineer the digital ecosystems of tomorrow. From autonomous distributed ledger architectures and spatial WebGL platforms to resilient multi-region cloud infrastructures, our teams bridge theoretical possibilities with robust enterprise deployments.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2 font-mono text-xs">
            <div className="p-3.5 rounded-xl bg-white border border-border-subtle shadow-xs">
              <span className="text-primary font-bold block text-lg sm:text-xl font-headline">99.99%</span>
              <span className="text-text-muted">UPTIME SLA</span>
            </div>
            <div className="p-3.5 rounded-xl bg-white border border-border-subtle shadow-xs">
              <span className="text-primary font-bold block text-lg sm:text-xl font-headline">30+</span>
              <span className="text-text-muted">GLOBAL NODES</span>
            </div>
            <div className="p-3.5 rounded-xl bg-white border border-border-subtle shadow-xs col-span-2 sm:col-span-1">
              <span className="text-primary font-bold block text-lg sm:text-xl font-headline">&lt; 20MS</span>
              <span className="text-text-muted">LATENCY MESH</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 flex items-center justify-center">
          <div className="relative w-full max-w-md p-6 rounded-3xl bg-white border border-border-subtle shadow-xl group hover:shadow-2xl transition-shadow duration-300">
            <img
              src={AboutUsSvg}
              alt="About Qcodes Infotech"
              className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-500 drop-shadow-md"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
