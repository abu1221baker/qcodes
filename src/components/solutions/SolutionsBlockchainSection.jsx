import React from 'react';

export default function SolutionsBlockchainSection() {
  return (
    <section className="w-full px-4 sm:px-8 xl:px-12 py-12 relative bg-surface-dim border-t border-border-subtle" id="section-blockchain">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Enterprise Blocks Structure */}
        <div className="lg:col-span-6 flex flex-col gap-6">
          {/* Connected Blockchain Blocks */}
          <div className="flex flex-col gap-2">
            {/* Block N */}
            <div className="bg-white p-5 rounded-2xl border border-border-subtle shadow-[0_4px_16px_rgba(0,0,0,0.04)] flex flex-col gap-2.5">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-primary font-bold">BLOCK #489,120,019</span>
                <span className="px-2.5 py-0.5 bg-[#FFF0F2] border border-primary/25 text-primary font-mono text-xs font-bold rounded-lg">
                  FINALIZED
                </span>
              </div>
              <div className="flex flex-col gap-1.5 font-mono text-xs pt-1">
                <div className="flex items-center justify-between text-text-muted">
                  <span>Data Hash:</span>
                  <span className="text-text-main font-semibold">0x7f83b1657ff1...d8a43</span>
                </div>
                <div className="flex items-center justify-between text-text-muted">
                  <span>Merkle Root:</span>
                  <span className="text-primary-dark font-semibold">0x9c4e8832a76f...13e20</span>
                </div>
                <div className="flex items-center justify-between text-text-muted">
                  <span>Timestamp:</span>
                  <span className="text-text-main">2025-05-18T14:22:01.042Z</span>
                </div>
              </div>
            </div>

            {/* Chain Connector Link Element */}
            <div className="flex justify-center -my-2 relative z-10">
              <div className="px-3.5 py-1 bg-primary text-white font-mono text-xs font-semibold rounded-full flex items-center gap-1.5 shadow-[0_2px_8px_rgba(226,30,76,0.3)]">
                <span className="material-symbols-outlined text-[14px]">link</span>
                <span>SHA-256 PROOF_OF_AUTHORITY</span>
              </div>
            </div>

            {/* Block N - 1 */}
            <div className="bg-white p-5 rounded-2xl border border-border-subtle shadow-xs flex flex-col gap-2.5">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-text-muted font-semibold">BLOCK #489,120,018</span>
                <span className="px-2.5 py-0.5 bg-surface-dim border border-border-subtle text-text-muted font-mono text-xs font-medium rounded-lg">
                  ARCHIVED
                </span>
              </div>
              <div className="flex flex-col gap-1.5 font-mono text-xs pt-1">
                <div className="flex items-center justify-between text-text-muted">
                  <span>Data Hash:</span>
                  <span className="text-text-main">0x3b92f7a01c8d...aa891</span>
                </div>
                <div className="flex items-center justify-between text-text-muted">
                  <span>Merkle Root:</span>
                  <span className="text-primary-dark font-medium">0x4a1290bb32ee...ff430</span>
                </div>
                <div className="flex items-center justify-between text-text-muted">
                  <span>Timestamp:</span>
                  <span className="text-text-main">2025-05-18T14:21:59.980Z</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: IoT Smart City Live Feeds */}
        <div className="lg:col-span-6 flex flex-col gap-5 bg-white p-6 sm:p-8 rounded-2xl border border-border-subtle shadow-[0_6px_24px_rgba(0,0,0,0.04)]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-primary animate-ping"></span>
              <span className="font-headline text-base font-bold text-text-main">
                Smart City Sensor Hubs
              </span>
            </div>
            <span className="font-mono text-xs text-primary font-bold">STREAM: LIVE MQTT</span>
          </div>

          <p className="font-sans text-sm text-text-muted leading-relaxed">
            520,000 active telemetry beacons streaming urban density, atmospheric indicators, autonomous traffic vector grid data, and energy grid load directly into cloud hubs.
          </p>

          {/* Dynamic Sensor Nodes Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div className="bg-surface-dim p-4 rounded-xl border border-border-subtle flex flex-col gap-1.5">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-text-muted">SENSOR #SC-891</span>
                <span className="font-mono text-xs text-primary font-bold">ACTIVE</span>
              </div>
              <span className="font-headline text-sm font-bold text-text-main">Grid Load Telemetry</span>
              <span className="font-sans text-xs text-text-muted">42.8 GW Balanced Consumption</span>
            </div>

            <div className="bg-surface-dim p-4 rounded-xl border border-border-subtle flex flex-col gap-1.5">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-text-muted">SENSOR #SC-442</span>
                <span className="font-mono text-xs text-primary-dark font-bold">STREAMING</span>
              </div>
              <span className="font-headline text-sm font-bold text-text-main">Autonomous Traffic</span>
              <span className="font-sans text-xs text-text-muted">98.9% Collision-Free Routing</span>
            </div>

            <div className="bg-surface-dim p-4 rounded-xl border border-border-subtle flex flex-col gap-1.5">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-text-muted">SENSOR #SC-119</span>
                <span className="font-mono text-xs text-text-main font-bold">OPTIMAL</span>
              </div>
              <span className="font-headline text-sm font-bold text-text-main">Air Quality Index</span>
              <span className="font-sans text-xs text-text-muted">AQI: 14 PM2.5 Baseline</span>
            </div>

            <div className="bg-surface-dim p-4 rounded-xl border border-border-subtle flex flex-col gap-1.5">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-text-muted">SENSOR #SC-903</span>
                <span className="font-mono text-xs text-primary font-bold">VERIFIED</span>
              </div>
              <span className="font-headline text-sm font-bold text-text-main">Water Treatment Node</span>
              <span className="font-sans text-xs text-text-muted">Flow Purity Index 99.98%</span>
            </div>
          </div>

          {/* Ingress Status Panel */}
          <div className="bg-[#FFF0F2]/60 p-4 rounded-xl border border-primary/20 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary text-[24px]">cloud_sync</span>
              <div className="flex flex-col">
                <span className="font-headline text-sm font-bold text-text-main">Cloud Ingress Gateway</span>
                <span className="font-mono text-xs text-text-muted">Auto-syncing to Distributed Databases</span>
              </div>
            </div>
            <a
              href="/contact"
              className="px-4 py-2 bg-white text-primary border border-primary/30 font-headline text-xs font-bold rounded-lg shadow-xs hover:bg-primary hover:text-white transition-all inline-block"
            >
              Audit Ledger
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
