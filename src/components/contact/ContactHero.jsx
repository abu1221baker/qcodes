import React from 'react';
import { ContactUsSvg } from '../../assets';

export default function ContactHero() {
  return (
    <section className="relative w-full overflow-hidden border-b border-border-subtle py-12 lg:py-16 bg-white">
      {/* Ambient background glows */}
      <div className="absolute -top-32 left-1/4 w-[700px] h-[380px] bg-gradient-to-tr from-red-100/50 via-pink-50/40 to-transparent blur-[140px] pointer-events-none rounded-full"></div>
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-amber-50/60 blur-[120px] pointer-events-none rounded-full"></div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: High-Tech Narrative & Telemetry Matrix */}
          <div className="lg:col-span-7 flex flex-col gap-5">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-lg bg-red-50 border border-red-200 text-primary self-start font-mono text-xs font-bold uppercase tracking-wider">
              <span className="material-symbols-outlined text-[16px]">hub</span>
              <span>DIRECT NODE TRANSMISSION // PORTAL v4.2</span>
            </div>
            
            <h1 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1C1C1C] tracking-tight leading-[1.12]">
              Initiate Enterprise Collaboration{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF3366] via-primary to-[#A91639]">
                &amp; Digital Architecture.
              </span>
            </h1>
            
            <p className="font-sans text-sm sm:text-base text-text-muted leading-relaxed max-w-2xl">
              Connect directly with our senior software engineers, AI architects, and spatial computing strategists. Transmit your project requirements for instant technical review and architectural estimation.
            </p>

            {/* Monospace Telemetry Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 pt-2 font-mono text-[11px] sm:text-xs">
              <div className="p-2.5 sm:p-3 rounded-xl bg-white border border-border-subtle shadow-xs flex flex-col gap-1 min-w-0">
                <span className="text-text-muted text-[9px] sm:text-[10px] uppercase tracking-wider truncate">SYSTEM STATUS</span>
                <span className="text-primary font-bold text-xs sm:text-sm truncate">100% OPERATIONAL</span>
              </div>
              <div className="p-2.5 sm:p-3 rounded-xl bg-white border border-border-subtle shadow-xs flex flex-col gap-1 min-w-0">
                <span className="text-text-muted text-[9px] sm:text-[10px] uppercase tracking-wider truncate">ENCRYPTION</span>
                <span className="text-text-main font-bold text-xs sm:text-sm truncate">MUTUAL NDA</span>
              </div>
              <div className="p-2.5 sm:p-3 rounded-xl bg-white border border-border-subtle shadow-xs flex flex-col gap-1 min-w-0">
                <span className="text-text-muted text-[9px] sm:text-[10px] uppercase tracking-wider truncate">TURNAROUND</span>
                <span className="text-primary font-bold text-xs sm:text-sm truncate">&lt; 24 HOURS</span>
              </div>
              <div className="p-2.5 sm:p-3 rounded-xl bg-white border border-border-subtle shadow-xs flex flex-col gap-1 min-w-0">
                <span className="text-text-muted text-[9px] sm:text-[10px] uppercase tracking-wider truncate">CONNECTED NODES</span>
                <span className="text-text-main font-bold text-xs sm:text-sm truncate">25,000+ GLOBAL</span>
              </div>
            </div>
          </div>

          {/* Right Column: Tech Frame with SVG and HUD Crosshairs */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative w-full max-w-md lg:max-w-none p-6 rounded-2xl bg-gradient-to-br from-white via-red-50/30 to-white border border-red-200 shadow-2xl shadow-red-500/10 flex items-center justify-center group overflow-hidden">
              
              {/* Scanning laser effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/10 to-transparent h-12 w-full pointer-events-none scan-ray"></div>

              {/* HUD corner brackets */}
              <div className="absolute top-2 left-2 font-mono text-[9px] text-primary/60">[LOC: NODE_TX]</div>
              <div className="absolute top-2 right-2 font-mono text-[9px] text-primary/60">[RES: 1080P_VECTOR]</div>
              <div className="absolute bottom-2 left-2 font-mono text-[9px] text-gray-400">FRAME: QC_CORE</div>
              <div className="absolute bottom-2 right-2 font-mono text-[9px] text-green-600 font-bold">● ACTIVE LINK</div>

              <img
                src={ContactUsSvg}
                alt="Contact Qcodes Infotech Illustration"
                className="w-full h-auto max-h-[340px] object-contain drop-shadow-md group-hover:scale-[1.02] transition-transform duration-300 relative z-10"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
