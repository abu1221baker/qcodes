import React from 'react';
import { GalleryHeroSvg } from '../../assets';

export default function GalleryHero() {
  return (
    <section className="relative px-4 sm:px-8 xl:px-12 pt-12 pb-8 max-w-[1720px] mx-auto w-full flex flex-col gap-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        
        {/* Left Column: Typography, Badge & Description */}
        <div className="lg:col-span-7 flex flex-col items-start gap-5">
          {/* Telemetry & Category Badge */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-100 text-primary">
              <span className="w-2 h-2 rounded-full bg-primary animate-ping"></span>
              <span className="font-mono text-[11px] tracking-widest uppercase font-bold">
                QCODES INFOTECH // WORK GALLERY
              </span>
            </div>
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-border-subtle text-text-muted shadow-xs">
              <span className="material-symbols-outlined text-[14px] text-primary">verified</span>
              <span className="font-mono text-[11px] tracking-wider uppercase font-semibold">
                ENTERPRISE CLIENT SOLUTIONS
              </span>
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1C1C1C] tracking-tight leading-tight">
            Tailored Engineering &amp;{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary-dark to-[#747474]">
              Innovative Solutions.
            </span>
          </h1>

          {/* User Requested Paragraph Text */}
          <p className="font-sans text-base sm:text-lg text-text-muted leading-relaxed max-w-3xl">
            At Qcodes Infotech, we pride ourselves on delivering high-quality, innovative solutions to our clients. Our team of experienced developers and designers are committed to providing tailored solutions that meet the specific needs of each of our clients. We offer various services, including custom software development, mobile app development, website design and development, and data analytics and visualization.
          </p>

          {/* Key Service Highlights Pills */}
          <div className="flex flex-wrap items-center gap-2 pt-1">
            {['Custom Software', 'Mobile App Development', 'Website Design & Dev', 'Data Analytics & Visualization'].map((service) => (
              <span
                key={service}
                className="px-3 py-1 rounded-lg bg-surface-dim border border-border-subtle font-mono text-xs text-text-main font-medium flex items-center gap-1.5 shadow-xs"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                <span>{service}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Right Column: galary.svg Illustration */}
        <div className="lg:col-span-5 flex items-center justify-center relative">
          <div className="relative w-full max-w-[480px] p-4 sm:p-6 rounded-3xl bg-gradient-to-tr from-[#FFF0F2] via-white to-red-50/40 border border-primary/15 shadow-[0_12px_40px_rgba(226,30,76,0.08)] group hover:shadow-[0_20px_50px_rgba(226,30,76,0.14)] transition-all duration-500">
            <img
              src={GalleryHeroSvg}
              alt="Qcodes Infotech Work Gallery"
              className="w-full h-auto max-h-[360px] object-contain group-hover:scale-105 transition-transform duration-500 drop-shadow-md"
              loading="eager"
            />
            
            {/* Subtle Interactive Holographic Overlay Tag */}
            <div className="absolute -bottom-3 -right-2 sm:right-4 px-3.5 py-1.5 rounded-xl bg-white/95 backdrop-blur-md border border-border-subtle shadow-lg flex items-center gap-2 font-mono text-xs text-text-main font-bold">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span>SYSTEMS PORTFOLIO</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
