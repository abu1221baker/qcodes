import React, { useRef } from 'react';
import ContactGlobeCanvas from '../three/ContactGlobeCanvas';

export default function ContactGlobeDeck() {
  const resetGlobeRef = useRef(null);
  const toggleWireframeRef = useRef(null);

  return (
    <div className="flex flex-col gap-6">
      
      {/* Cyber HUD 3D Globe Terminal */}
      <div className="rounded-3xl bg-[#11141A] text-white p-4 sm:p-7 relative overflow-hidden border border-gray-800 shadow-2xl w-full max-w-full">
        <div className="absolute -right-20 -bottom-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl pointer-events-none"></div>

        {/* 3D Canvas */}
        <ContactGlobeCanvas
          onResetRef={resetGlobeRef}
          onToggleWireframeRef={toggleWireframeRef}
        />

        {/* Camera Quick Controls */}
        <div className="flex items-center gap-2 mb-4 -mt-2">
          <button
            type="button"
            onClick={() => resetGlobeRef.current && resetGlobeRef.current()}
            className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white font-mono text-[11px] flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[15px]">view_in_ar</span>
            <span>RE-CENTER CAMERA</span>
          </button>
          <button
            type="button"
            onClick={() => toggleWireframeRef.current && toggleWireframeRef.current()}
            className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white font-mono text-[11px] flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[15px]">grid_4x4</span>
            <span>TOGGLE CAGE</span>
          </button>
        </div>

        <div className="font-mono text-xs text-primary font-bold uppercase tracking-wider mb-1">
          [DIRECT_ENDPOINTS]
        </div>
        <p className="font-sans text-xs text-gray-400 leading-relaxed mb-4">
          Direct connection channels to our engineering management &amp; global clusters.
        </p>

        <div className="flex flex-col gap-2.5 font-mono">
          <a
            href="mailto:info@qcodesinfotech.com"
            className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors group cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[16px]">alternate_email</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-gray-400 uppercase">PRIMARY_MAIL</span>
                <span className="text-xs font-semibold text-white">info@qcodesinfotech.com</span>
              </div>
            </div>
            <span className="material-symbols-outlined text-gray-400 text-sm group-hover:translate-x-1 transition-transform">
              arrow_outward
            </span>
          </a>

          <a
            href="https://qcodesinfotech.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors group cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[16px]">language</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-gray-400 uppercase">OFFICIAL_PORTAL</span>
                <span className="text-xs font-semibold text-white">www.qcodesinfotech.com</span>
              </div>
            </div>
            <span className="material-symbols-outlined text-gray-400 text-sm group-hover:translate-x-1 transition-transform">
              arrow_outward
            </span>
          </a>

          <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
            <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-[16px]">schedule</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] text-gray-400 uppercase">OPERATIONAL_WINDOW</span>
              <span className="text-xs font-semibold text-white">Mon – Sat: 09:00 – 19:00 IST</span>
            </div>
          </div>
        </div>
      </div>

      {/* Network Cluster Reach */}
      <div className="cyber-card p-6 border border-border-subtle flex flex-col gap-3 font-mono">
        <div className="flex items-center justify-between">
          <span className="text-xs text-primary font-bold uppercase tracking-wider">[GLOBAL_MESH]</span>
          <span className="text-[10px] text-green-600 font-bold bg-green-50 px-2 py-0.5 rounded">ONLINE</span>
        </div>
        
        <div className="flex flex-col gap-2 font-sans">
          <h4 className="font-headline text-sm font-bold text-text-main">
            ConnectSouq Multi-Cluster Reach
          </h4>
          <p className="text-xs text-text-muted leading-relaxed">
            Integrated delivery nodes across 30+ countries, 100+ technology hubs, and 25,000+ verified enterprise client endpoints.
          </p>
        </div>
      </div>

    </div>
  );
}
