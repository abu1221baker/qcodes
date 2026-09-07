import React from 'react';
import { Link } from 'react-router-dom';
import HeroCoreCanvas from '../three/HeroCoreCanvas';

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#F8F9FA] border-b border-border-subtle">
      {/* Ambient Energy Backlights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-red-100/50 via-pink-50/40 to-transparent blur-[140px] pointer-events-none rounded-full"></div>
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-amber-50/60 blur-[120px] pointer-events-none rounded-full"></div>

      <div className="relative w-full max-w-[1440px] mx-auto px-4 sm:px-8 pt-8 pb-16">
        {/* Main Asymmetric Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
          {/* Text & Action Column (6 Cols) */}
          <div className="lg:col-span-6 flex flex-col gap-6 relative z-20">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-light border border-primary/20 text-primary self-start shadow-xs">
              <span className="w-2 h-2 rounded-full bg-primary animate-ping"></span>
              <span className="font-mono text-xs uppercase font-bold tracking-wider">3D DIGITAL UNIVERSE V4.8</span>
            </div>

            <h1 className="font-headline text-4xl sm:text-5xl lg:text-[54px] font-extrabold tracking-tight text-text-main leading-[1.12]">
              Building Digital Experiences That{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF3366] via-primary to-primary-dark">
                Move Businesses Forward.
              </span>
            </h1>

            <p className="font-sans text-base sm:text-lg text-text-muted max-w-xl leading-relaxed">
              Qcodes Infotech delivers modern software solutions across web, mobile, AI, cloud, data, and spatial frontier engineering. Our flexible engagement models are designed to be cost-effective, so you can stay within budget while still getting the IT solutions you need. Convenience: Our pre-built packages offer a convenient and efficient way to get the IT solutions you need without needing custom development.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                to="/services"
                className="relative group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-white font-headline text-sm shadow-[0_4px_16px_rgba(226,30,76,0.3)] hover:shadow-[0_6px_24px_rgba(226,30,76,0.5)] hover:bg-primary-dark transition-all duration-300 font-bold"
              >
                <span className="material-symbols-outlined text-[18px]">terminal</span>
                <span>Start a Project</span>
                <span className="material-symbols-outlined text-[18px] transition-transform group-hover:translate-x-1">arrow_forward</span>
              </Link>

              <Link
                to="/gallery"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white border border-border-strong text-text-main font-headline text-sm backdrop-blur-md hover:bg-surface-dim shadow-sm transition-all duration-300 font-bold"
              >
                <span className="material-symbols-outlined text-[18px] text-primary">deployed_code</span>
                <span>Explore Our Work</span>
              </Link>
            </div>
          </div>

          {/* Central 3D Digital Core Stage with Live Three.js Animation (6 Cols) */}
          <div className="lg:col-span-6 relative w-full h-[540px] sm:h-[620px] rounded-3xl bg-[#F6F7F9] border border-border-subtle shadow-2xl flex items-center justify-center overflow-hidden group">
            <HeroCoreCanvas />

            <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent pointer-events-none"></div>

            {/* Top Left HUD Pin */}
            <div className="absolute top-4 left-4 z-30 flex flex-col gap-1 bg-white/95 border border-border-subtle backdrop-blur-md px-3.5 py-2 rounded-xl shadow-sm pointer-events-none">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_rgba(226,30,76,0.6)]"></span>
                <span className="font-mono text-xs text-primary uppercase font-bold tracking-wider">GSAP_TRIGGER: HERO_PINNED</span>
              </div>
              <span className="font-mono text-[11px] text-text-muted">TIMELINE: 0.28 // DOLLY_ZOOM</span>
            </div>

            {/* Top Right Orbit Badge */}
            <div className="absolute top-4 right-4 z-30 flex items-center gap-1.5 bg-white/95 border border-border-subtle backdrop-blur-md px-3 py-1.5 rounded-xl shadow-sm pointer-events-none">
              <span className="material-symbols-outlined text-[16px] text-primary">rotate_right</span>
              <span className="font-mono text-xs text-text-main font-bold">ORBIT: 4.8 RPM</span>
            </div>

            {/* Satellite Node Floating Badges */}
            <div className="absolute top-1/4 right-6 z-30 hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 border border-primary/20 shadow-md backdrop-blur-sm pointer-events-none">
              <span className="w-2 h-2 rounded-full bg-primary animate-ping"></span>
              <span className="font-mono text-xs text-text-main font-bold">AI &amp; NEURAL CORE</span>
            </div>
            <div className="absolute bottom-20 left-6 z-30 hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 border border-primary/20 shadow-md backdrop-blur-sm pointer-events-none">
              <span className="w-2 h-2 rounded-full bg-primary-dark"></span>
              <span className="font-mono text-xs text-text-main font-bold">SPATIAL 3D KERNEL</span>
            </div>

            {/* Bottom HUD Bar inside 3D Box */}
            <div className="absolute bottom-4 left-4 right-4 z-30 flex items-center justify-between p-3 rounded-xl bg-white/95 border border-border-subtle backdrop-blur-md shadow-sm text-text-muted font-mono text-xs pointer-events-none">
              <div className="flex items-center gap-4">
                <span className="text-primary font-bold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block animate-ping"></span>R3F CANVAS: ACTIVE
                </span>
                <span className="hidden md:inline font-medium">NODES: 120+</span>
                <span className="hidden md:inline font-medium">VERTEX_COUNT: 24,580</span>
              </div>
              <div className="flex items-center gap-1 text-text-main font-semibold">
                <span className="material-symbols-outlined text-[16px] text-primary">touch_app</span>
                <span>INTERACTIVE_DRAG: ENABLED</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
