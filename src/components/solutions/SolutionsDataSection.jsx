import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { DataExtractionCuateSvg } from '../../assets';

gsap.registerPlugin(ScrollTrigger);

// Baseline bar data with varying heights and Qcodes branded color palette
const initialBars = [
  { baseH: 25, color: '#FFB2B7', label: 'Auth Gateway' },
  { baseH: 42, color: '#FD5971', label: 'Edge Proxy' },
  { baseH: 68, color: '#E21E4C', label: 'Core GraphQL' },
  { baseH: 85, color: '#A91639', label: 'DB Shards' },
  { baseH: 52, color: '#E21E4C', label: 'Redis Cache' },
  { baseH: 34, color: '#11141A', label: 'Kafka Queue' },
  { baseH: 74, color: '#E21E4C', label: 'AI Inference' },
  { baseH: 96, color: '#A91639', label: 'Tensor Stream' },
  { baseH: 60, color: '#FD5971', label: 'Search Engine' },
  { baseH: 45, color: '#E21E4C', label: 'Media CDN' },
  { baseH: 78, color: '#A91639', label: 'SOC-2 Audit' },
  { baseH: 88, color: '#E21E4C', label: 'CI/CD Pipeline' },
  { baseH: 65, color: '#11141A', label: 'Kubernetes Pods' },
  { baseH: 50, color: '#FD5971', label: 'Telemetry Agg' },
  { baseH: 82, color: '#E21E4C', label: 'Payment Svc' },
  { baseH: 92, color: '#A91639', label: 'Load Balancer' },
  { baseH: 70, color: '#E21E4C', label: 'Event Bus' },
  { baseH: 40, color: '#FFB2B7', label: 'DNS Health' },
  { baseH: 58, color: '#FD5971', label: 'Worker Nodes' },
  { baseH: 86, color: '#E21E4C', label: 'Sync Engine' },
  { baseH: 94, color: '#A91639', label: 'API Gateway' },
  { baseH: 62, color: '#11141A', label: 'Security Firewall' },
  { baseH: 48, color: '#E21E4C', label: 'Cloud Storage' },
  { baseH: 30, color: '#FFB2B7', label: 'Log Stream' },
];

export default function SolutionsDataSection() {
  const sectionRef = useRef(null);
  const barsContainerRef = useRef(null);
  const barElementsRef = useRef([]);
  const [activeMetric, setActiveMetric] = useState({ name: 'Core Infrastructure', load: '84.6%', status: 'OPTIMAL' });

  useEffect(() => {
    const section = sectionRef.current;
    const barsContainer = barsContainerRef.current;
    if (!section || !barsContainer) return;

    const ctx = gsap.context(() => {
      const bars = barElementsRef.current.filter(Boolean);

      // ═══ ScrollTrigger: Dynamic Moving Harmonic Wave as User Scrolls ═══
      ScrollTrigger.create({
        trigger: section,
        start: 'top 85%',
        end: 'bottom 20%',
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress; // 0 to 1

          bars.forEach((bar, idx) => {
            if (!bar) return;
            const baseHeight = initialBars[idx]?.baseH || 50;

            // Harmonic wave calculation influenced by scroll position
            const waveOffset = Math.sin(progress * Math.PI * 3 + (idx * 0.45)) * 32;
            const secondaryWave = Math.cos(progress * Math.PI * 2 + (idx * 0.25)) * 18;
            
            const newHeight = Math.max(12, Math.min(100, baseHeight + waveOffset + secondaryWave));

            gsap.set(bar, {
              height: `${newHeight.toFixed(1)}%`,
            });
          });
        },
      });

      // Subtle ambient continuous pulse when idle
      bars.forEach((bar, idx) => {
        if (!bar) return;
        gsap.to(bar, {
          scaleY: 1.08,
          duration: 1.2 + (idx % 4) * 0.3,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: (idx * 0.05),
        });
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full px-4 sm:px-8 xl:px-12 py-16 lg:py-20 relative bg-[#FBFBFC] border-t border-border-subtle"
      id="section-data"
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="flex flex-col gap-2 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#0ae448] animate-ping"></span>
              <span className="font-mono text-xs text-primary font-bold uppercase tracking-widest">
                QCODES LIVE TELEMETRY // REAL-TIME VELOCITY
              </span>
            </div>
            <h2 className="font-headline text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#11141A] tracking-tight">
              Enterprise Engineering Throughput &amp; Cloud Metrics
            </h2>
            <p className="font-sans text-sm sm:text-base text-text-muted leading-relaxed">
              Real-time observability across Qcodes sovereign cloud infrastructure, automated CI/CD deployment pipelines, and active microservice clusters. Scroll down to watch the live load spectrum dynamically pulse.
            </p>
          </div>

          {/* SLA Quick Status Pill */}
          <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-2xl border border-primary/20 shadow-xs self-start sm:self-auto shrink-0">
            <span className="material-symbols-outlined text-primary text-[20px]">speed</span>
            <div className="flex flex-col">
              <span className="font-mono text-[10px] text-text-muted">SYSTEM HEALTH</span>
              <span className="font-mono text-xs font-extrabold text-[#11141A]">99.99% UP &amp; NOMINAL</span>
            </div>
          </div>
        </div>

        {/* 2-Column Showcase: Left SVG Illustration Card + Right Scroll-Moving Dynamic Spectrum */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* Left Column: Qcodes Data Extraction & Analytics SVG Illustration Card */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-3xl border border-border-subtle shadow-[0_6px_30px_rgba(0,0,0,0.03)] flex flex-col justify-between relative overflow-hidden group">
            {/* Background Glow */}
            <div className="absolute -top-16 -right-16 w-48 h-48 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>

            {/* Header Badge */}
            <div className="flex items-center justify-between z-10">
              <span className="font-mono text-xs font-bold text-primary bg-[#FFF0F2] px-3 py-1 rounded-full border border-primary/20">
                LIVE PIPELINE TELEMETRY
              </span>
              <span className="material-symbols-outlined text-primary text-[22px]">database</span>
            </div>

            {/* Data Extraction SVG Image */}
            <div className="my-6 flex items-center justify-center relative z-10">
              <img
                src={DataExtractionCuateSvg}
                alt="Qcodes Real-Time Data Pipeline & Engineering Analytics"
                className="w-full h-auto max-h-[220px] object-contain group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Quick Metrics Grid */}
            <div className="grid grid-cols-2 gap-2.5 z-10 pt-2 border-t border-border-subtle">
              <div className="bg-[#F9FAFB] p-2.5 rounded-xl border border-border-subtle flex flex-col">
                <span className="font-mono text-[10px] text-text-muted font-medium">THROUGHPUT</span>
                <span className="font-mono text-xs font-bold text-text-main">48.2 PB / HR</span>
              </div>
              <div className="bg-[#F9FAFB] p-2.5 rounded-xl border border-border-subtle flex flex-col">
                <span className="font-mono text-[10px] text-text-muted font-medium">AVG LATENCY</span>
                <span className="font-mono text-xs font-bold text-primary">12.4 MS P99</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Scroll-Moving Density & Workload Spectrum Matrix */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-border-subtle shadow-[0_6px_30px_rgba(0,0,0,0.03)] flex flex-col justify-between gap-6 relative overflow-hidden">
            {/* Diagram Header */}
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-primary text-[24px]">equalizer</span>
                <div>
                  <h3 className="font-headline text-base sm:text-lg font-bold text-[#11141A]">
                    Live Microservice Workload Spectrum
                  </h3>
                  <span className="font-mono text-[11px] text-text-muted">
                    Scroll up/down to observe dynamic frequency redistribution
                  </span>
                </div>
              </div>

              {/* Status Indicator */}
              <div className="flex items-center gap-2 px-3 py-1.5 bg-[#FFF0F2] border border-primary/20 rounded-xl font-mono text-xs text-primary font-bold">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                <span>{activeMetric.name}: {activeMetric.load}</span>
              </div>
            </div>

            {/* Dynamic Scroll-Moving Spectrum Bars Matrix */}
            <div
              ref={barsContainerRef}
              className="w-full h-52 sm:h-56 bg-gradient-to-b from-[#F9FAFC] to-[#F1F3F7] border border-border-subtle rounded-2xl flex items-end justify-between px-3 sm:px-4 py-3 gap-1 sm:gap-1.5 overflow-hidden shadow-inner relative"
            >
              {/* Horizontal Background Guide Grid Lines */}
              <div className="absolute inset-x-0 top-1/4 border-b border-dashed border-gray-300 pointer-events-none opacity-40"></div>
              <div className="absolute inset-x-0 top-2/4 border-b border-dashed border-gray-300 pointer-events-none opacity-40"></div>
              <div className="absolute inset-x-0 top-3/4 border-b border-dashed border-gray-300 pointer-events-none opacity-40"></div>

              {initialBars.map((bar, idx) => (
                <div
                  key={idx}
                  ref={(el) => (barElementsRef.current[idx] = el)}
                  onMouseEnter={() =>
                    setActiveMetric({
                      name: bar.label,
                      load: `${(bar.baseH + (Math.random() * 10 - 5)).toFixed(1)}%`,
                      status: 'HEALTHY',
                    })
                  }
                  className="w-full rounded-t-md transition-colors duration-200 cursor-pointer relative group origin-bottom"
                  style={{
                    height: `${bar.baseH}%`,
                    backgroundColor: bar.color,
                    boxShadow: bar.color === '#E21E4C' || bar.color === '#A91639' ? '0 0 10px rgba(226,30,76,0.3)' : 'none',
                  }}
                >
                  {/* Tooltip on Hover */}
                  <div className="absolute -top-9 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-[#11141A] text-white text-[10px] font-mono px-2 py-0.5 rounded shadow-md pointer-events-none whitespace-nowrap z-20">
                    {bar.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Spectrum Telemetry Legend */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1 text-text-muted font-mono text-xs border-t border-border-subtle">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded bg-primary"></span>
                <span>CRITICAL PATH: 100% NOMINAL</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded bg-primary-dark"></span>
                <span>AUTOREGRESSIVE LOAD: BALANCED</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded bg-[#11141A]"></span>
                <span>ANOMALY DETECTOR: 0 BREACHES</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

