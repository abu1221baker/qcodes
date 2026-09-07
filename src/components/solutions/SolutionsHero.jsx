import React from 'react';
import { SolutionsHeroSvg } from '../../assets';

export default function SolutionsHero() {
  return (
    <section className="w-full px-4 sm:px-8 xl:px-12 pt-12 pb-16 relative overflow-hidden bg-gradient-to-b from-[#FBF4EA]/50 via-white to-surface-dim">
      {/* Ambient Accent Glow */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-gradient-to-b from-primary/5 via-red-100/20 to-transparent blur-3xl pointer-events-none rounded-full"></div>

      <div className="max-w-6xl mx-auto flex flex-col gap-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Delivery Lifecycle & Methodology */}
          <div className="lg:col-span-7 flex flex-col items-start gap-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-100 text-primary">
              <span className="w-2 h-2 rounded-full bg-primary animate-ping"></span>
              <span className="font-mono text-xs uppercase font-bold tracking-wider">
                SOLUTION DELIVERY LIFECYCLE
              </span>
            </div>

            <h1 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1C1C1C] tracking-tight leading-tight">
              How We Deliver <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-dark to-[#FF3366]">Tailored Solutions.</span>
            </h1>

            <p className="font-sans text-base lg:text-lg text-text-muted leading-relaxed">
              At Qcodes Infotech, we translate complex enterprise challenges into resilient, high-performance technology solutions. Through structured collaboration, rapid agile prototyping, and rigorous quality benchmarks, we deliver end-to-end digital systems that drive measurable growth.
            </p>

            {/* 4-Step Agile Solution Process Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full pt-2">
              {/* Step 1 */}
              <div className="p-3.5 rounded-xl bg-white border border-border-subtle shadow-xs flex items-start gap-3 hover:border-primary/30 transition-colors">
                <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-mono text-xs font-bold shrink-0 mt-0.5">
                  01
                </span>
                <div className="flex flex-col">
                  <span className="font-headline text-sm font-bold text-text-main">Discovery &amp; Strategy</span>
                  <span className="font-sans text-xs text-text-muted leading-tight">
                    Deep scoping of business goals, user personas &amp; technical specs.
                  </span>
                </div>
              </div>

              {/* Step 2 */}
              <div className="p-3.5 rounded-xl bg-white border border-border-subtle shadow-xs flex items-start gap-3 hover:border-primary/30 transition-colors">
                <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-mono text-xs font-bold shrink-0 mt-0.5">
                  02
                </span>
                <div className="flex flex-col">
                  <span className="font-headline text-sm font-bold text-text-main">Architecture &amp; UX</span>
                  <span className="font-sans text-xs text-text-muted leading-tight">
                    Scalable system blueprints, interactive wireframes &amp; security models.
                  </span>
                </div>
              </div>

              {/* Step 3 */}
              <div className="p-3.5 rounded-xl bg-white border border-border-subtle shadow-xs flex items-start gap-3 hover:border-primary/30 transition-colors">
                <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-mono text-xs font-bold shrink-0 mt-0.5">
                  03
                </span>
                <div className="flex flex-col">
                  <span className="font-headline text-sm font-bold text-text-main">Agile Engineering</span>
                  <span className="font-sans text-xs text-text-muted leading-tight">
                    Iterative sprint development with clean code &amp; continuous CI/CD.
                  </span>
                </div>
              </div>

              {/* Step 4 */}
              <div className="p-3.5 rounded-xl bg-white border border-border-subtle shadow-xs flex items-start gap-3 hover:border-primary/30 transition-colors">
                <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-mono text-xs font-bold shrink-0 mt-0.5">
                  04
                </span>
                <div className="flex flex-col">
                  <span className="font-headline text-sm font-bold text-text-main">QA, Deploy &amp; Scale</span>
                  <span className="font-sans text-xs text-text-muted leading-tight">
                    Automated testing, seamless cloud deployment &amp; 24/7 dedicated support.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: solutions.svg Illustration */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <div className="relative w-full max-w-[460px] p-6 sm:p-8 rounded-3xl bg-white border border-border-subtle shadow-[0_12px_36px_rgba(226,30,76,0.06)] group hover:shadow-[0_18px_48px_rgba(226,30,76,0.12)] transition-all duration-500 flex items-center justify-center">
              <img
                src={SolutionsHeroSvg}
                alt="Qcodes Infotech Solutions Lifecycle"
                className="w-full h-auto max-h-[340px] object-contain group-hover:scale-105 transition-transform duration-500 drop-shadow-md"
                loading="eager"
              />
              
              {/* Floating Overlay Tag */}
              <div className="absolute -bottom-3 -right-2 sm:right-4 px-3.5 py-1.5 rounded-xl bg-white border border-primary/20 shadow-md flex items-center gap-2 font-mono text-xs text-text-main font-bold">
                <span className="w-2 h-2 rounded-full bg-primary animate-ping"></span>
                <span>END-TO-END DELIVERY</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
