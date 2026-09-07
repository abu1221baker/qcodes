import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ServicesOrbitCanvas from '../three/ServicesOrbitCanvas';
import {
  WebDevSvg,
  MobileDevSvg,
  UiUxSvg,
  CloudSvg,
  DigitalMarketingSvg,
  TechSupportSvg,
  SoftwareTestingSvg,
} from '../../assets';

const nodesList = [
  {
    id: 'web',
    tag: 'NODE_01 // WEB_DEV',
    name: 'Web Development',
    icon: 'terminal',
    img: WebDevSvg,
    desc: 'High-throughput, edge-rendered modern web architectures engineered for concurrent hyperscale workloads. Built with atomic state hydration, dynamic ISR, micro-frontend federation, and millisecond API mesh routing.',
    sla: '99.98%',
    tech: ['React 19', 'Next.js 15 App Router', 'TypeScript', 'GraphQL Mesh', 'Node.js Clusters', 'WASM Core'],
    metric1Label: 'Lighthouse Perf',
    metric1Val: '99 / 100',
    metric1Status: 'OPTIMAL',
    metric2Label: 'P95 Render Speed',
    metric2Val: '< 180ms',
    metric2Sub: 'TBT ~0ms',
  },
  {
    id: 'mobile',
    tag: 'NODE_02 // MOB_DEV',
    name: 'Mobile Systems',
    icon: 'smartphone',
    img: MobileDevSvg,
    desc: 'Native iOS & Android and cross-platform Flutter/React Native solutions engineered with biometric authentication, offline SQLite persistence, zero frame-drops, and real-time WebSockets.',
    sla: '99.95%',
    tech: ['Swift UI', 'Kotlin Compose', 'Flutter 3.x', 'React Native', 'SQLite Sync', 'Biometric Auth'],
    metric1Label: 'Frame Consistency',
    metric1Val: '60 FPS',
    metric1Status: 'ZERO JANK',
    metric2Label: 'Cold Launch Speed',
    metric2Val: '< 450ms',
    metric2Sub: 'Memory < 45MB',
  },
  {
    id: 'uiux',
    tag: 'NODE_03 // UI_UX',
    name: 'UI/UX Spatial Design',
    icon: 'design_services',
    img: UiUxSvg,
    desc: 'Human-centered design systems, spatial WebGL visual hierarchies, micro-interactions, and multi-platform Figma design tokens adhering strictly to WCAG 2.1 AAA accessibility benchmarks.',
    sla: '100% WCAG',
    tech: ['Figma Tokens', 'Motion UI', 'Design Systems', 'Micro-Interactions', 'User Research', 'Spatial 3D'],
    metric1Label: 'Accessibility Score',
    metric1Val: 'AAA Valid',
    metric1Status: 'COMPLIANT',
    metric2Label: 'Design Token Coverage',
    metric2Val: '100%',
    metric2Sub: 'Multi-Brand Sync',
  },
  {
    id: 'cloud',
    tag: 'NODE_04 // CLOUD',
    name: 'Cloud & DevOps',
    icon: 'cloud_sync',
    img: CloudSvg,
    desc: 'Automated multi-region Kubernetes clusters, Terraform infrastructure-as-code, zero-downtime GitOps pipelines, edge cache arbitration, and sub-second disaster recovery failover.',
    sla: '99.995%',
    tech: ['AWS Multi-Region', 'Google Cloud', 'Kubernetes EKS', 'Terraform IaC', 'Docker Clusters', 'GitOps ArgoCD'],
    metric1Label: 'Deployment Uptime',
    metric1Val: '99.995%',
    metric1Status: 'HIGH AVAIL',
    metric2Label: 'Mean Time to Recovery',
    metric2Val: '< 12 mins',
    metric2Sub: 'Auto-Healing',
  },
  {
    id: 'marketing',
    tag: 'NODE_05 // MKT_SEO',
    name: 'Digital Growth & Mkt',
    icon: 'insights',
    img: DigitalMarketingSvg,
    desc: 'Algorithmic search engine optimization (SEO), programmatic paid acquisition campaigns, multi-channel customer attribution pipelines, and conversion rate engineering at scale.',
    sla: '+320% ROI',
    tech: ['Technical SEO', 'Conversion Optimization', 'Attribution Modeling', 'Google Analytics 4', 'Schema Markup'],
    metric1Label: 'Average SERP Lift',
    metric1Val: '+320%',
    metric1Status: 'TOP 3 TIER',
    metric2Label: 'Conversion Rate Boost',
    metric2Val: '+44.6%',
    metric2Sub: 'P90 Stat Sig',
  },
  {
    id: 'support',
    tag: 'NODE_06 // TECH_OPS',
    name: 'Technical Ops 24/7',
    icon: 'support_agent',
    img: TechSupportSvg,
    desc: 'Round-the-clock proactive monitoring, automated anomaly detection, security patch arbitration, level-3 engineering response, and guaranteed enterprise SLA escalation paths.',
    sla: '24/7/365',
    tech: ['Proactive Telemetry', 'Grafana Dashboards', 'Prometheus Metrics', 'Incident Management', 'Security Audits'],
    metric1Label: 'First Response Time',
    metric1Val: '< 15 mins',
    metric1Status: 'GUARANTEED',
    metric2Label: 'Ticket Resolution Rate',
    metric2Val: '99.4%',
    metric2Sub: 'First-Contact Fix',
  },
  {
    id: 'qa',
    tag: 'NODE_07 // QA_TEST',
    name: 'Software QA & Chaos',
    icon: 'verified_user',
    img: SoftwareTestingSvg,
    desc: 'End-to-end automated Playwright and Cypress test suites, k6 chaos engineering load testing, vulnerability scanning, and zero-defect deployment sign-off.',
    sla: '99.98%',
    tech: ['Playwright E2E', 'Cypress Automation', 'k6 Concurrency Tests', 'Jest Unit Tests', 'Chaos Engineering'],
    metric1Label: 'Automated Test Pass',
    metric1Val: '100%',
    metric1Status: 'ZERO DEFECT',
    metric2Label: 'Concurrency Stress',
    metric2Val: '100K Req/s',
    metric2Sub: '0 Drop Rate',
  },
];

export default function ServicesOrbitMatrix() {
  const [activeNodeId, setActiveNodeId] = useState('web');
  const activeNode = nodesList.find((n) => n.id === activeNodeId) || nodesList[0];

  return (
    <section className="w-full px-4 sm:px-8 xl:px-12 py-8" id="matrix-section">
      <div className="max-w-[1440px] mx-auto bg-white rounded-2xl border border-border-strong shadow-[0_8px_30px_rgba(0,0,0,0.06)] overflow-hidden">
        
        {/* Top HUD Ribbon */}
        <div className="w-full px-6 py-3 bg-surface-dim border-b border-border-subtle flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#E21E4C] inline-block"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#A91639] inline-block"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#F0A85D] inline-block"></span>
            </div>
            <span className="font-mono text-xs text-text-main font-semibold uppercase tracking-wider">
              ORBIT_CORE // QCODES INFOTECH CLUSTER
            </span>
          </div>
          <div className="flex items-center gap-4 font-mono text-xs text-text-muted">
            <div className="hidden sm:flex items-center gap-1.5">
              <span>POLAR COORDS:</span>
              <span className="text-primary font-semibold">R:8.50 θ:128.4° Φ:42.1°</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="hidden md:inline">ORBIT CONTROLS:</span>
              <span className="px-2.5 py-0.5 rounded bg-primary-light text-primary border border-primary/20 font-bold">
                CINEMATIC DAMPED
              </span>
            </div>
          </div>
        </div>

        {/* Master Visualizer Layout: Left Selector, Center 3D Orbit, Right 2D HUD */}
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[640px] relative">
          
          {/* LEFT: Satellite Node Switcher Rail (3 Cols) */}
          <div className="lg:col-span-3 bg-white border-r border-border-subtle p-4 flex flex-col gap-3 z-20">
            <div className="flex items-center justify-between pb-2 border-b border-border-subtle">
              <div className="flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                <span className="font-headline text-xs text-text-muted font-bold uppercase tracking-wider">
                  Satellite Matrix
                </span>
              </div>
              <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-primary/10 text-primary font-bold border border-primary/20">
                7 NODES ONLINE
              </span>
            </div>

            <div className="flex flex-col gap-1.5 overflow-y-auto max-h-[500px] pr-1">
              {nodesList.map((node) => {
                const isActive = node.id === activeNodeId;
                return (
                  <button
                    key={node.id}
                    onClick={() => setActiveNodeId(node.id)}
                    type="button"
                    className={`group w-full text-left p-3 rounded-xl border transition-all flex items-center justify-between cursor-pointer ${
                      isActive
                        ? 'bg-gradient-to-r from-[#FFF0F2] to-[#FFF8F9] border-primary/40 text-text-main shadow-xs'
                        : 'bg-surface-dim border-border-subtle hover:border-primary/30 text-text-muted hover:text-text-main hover:bg-[#FAF9F8]'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 shadow-xs transition-transform group-hover:scale-105 ${
                          isActive ? 'bg-primary text-white shadow-sm' : 'bg-white border border-border-subtle text-text-muted group-hover:text-primary group-hover:border-primary/40'
                        }`}
                      >
                        <span className="material-symbols-outlined text-[19px]">{node.icon}</span>
                      </div>
                      <div className="flex flex-col">
                        <span className={`font-headline text-[13.5px] transition-colors ${isActive ? 'font-bold text-text-main group-hover:text-primary' : 'font-semibold text-[#2C2C2C] group-hover:text-primary'}`}>
                          {node.name}
                        </span>
                        <span className={`font-mono text-[10.5px] tracking-tight transition-colors ${isActive ? 'text-primary font-bold' : 'text-[#767676] group-hover:text-primary/80'}`}>
                          {node.tag}
                        </span>
                      </div>
                    </div>
                    <span
                      className={`material-symbols-outlined text-[18px] transition-all ${
                        isActive ? 'text-primary translate-x-1' : 'text-[#8A8A8A] group-hover:text-primary group-hover:translate-x-1'
                      }`}
                    >
                      chevron_right
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Orbit Dynamics Meter */}
            <div className="mt-auto pt-3 bg-surface-dim p-3 rounded-xl border border-border-subtle flex flex-col gap-1.5">
              <div className="flex items-center justify-between font-mono text-[10px] text-text-muted uppercase font-semibold">
                <span>ORBIT DYNAMICS</span>
                <span className="text-primary font-bold">1.0x VELOCITY</span>
              </div>
              <div className="w-full bg-[#E5E7EB] h-1.5 rounded-full overflow-hidden">
                <div className="h-full w-2/3 transition-all duration-300 rounded-full" style={{ background: 'linear-gradient(90deg, #A91639, #E21E4C)' }}></div>
              </div>
              <div className="flex items-center justify-between font-mono text-[9.5px] text-[#8A8A8A]">
                <span>INTERACTIVE HUD</span>
                <span>AUTONOMOUS</span>
              </div>
            </div>
          </div>

          {/* CENTER: 3D Visualization Canvas Stage (5 Cols) */}
          <div
            className="lg:col-span-5 relative bg-[#F6F7F9] flex items-center justify-center min-h-[460px] lg:min-h-[640px] overflow-hidden"
            style={{ backgroundImage: 'radial-gradient(circle, #E2E4E8 1px, transparent 1px)', backgroundSize: '24px 24px' }}
          >
            <ServicesOrbitCanvas activeNodeId={activeNodeId} onNodeSelect={setActiveNodeId} />
            
            {/* Overlay Navigation Indicators */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-auto">
              <div className="bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-lg border border-border-subtle shadow-xs flex items-center gap-1.5 text-text-main font-mono text-[11px]">
                <span className="material-symbols-outlined text-[16px] text-primary">explore</span>
                <span className="font-medium">DRAG TO RE-ORBIT • SCROLL TO SCRUB</span>
              </div>
              <button
                onClick={() => setActiveNodeId('web')}
                className="bg-white hover:bg-surface-dim border border-border-subtle text-primary px-3 py-1.5 rounded-lg font-mono text-[11px] font-bold flex items-center gap-1 transition-colors shadow-xs cursor-pointer"
                type="button"
              >
                <span className="material-symbols-outlined text-[14px]">filter_center_focus</span>
                <span>RE-CENTER</span>
              </button>
            </div>
          </div>

          {/* RIGHT: Detailed 2D Split-Inspection HUD Panel (4 Cols) */}
          <div className="lg:col-span-4 bg-white border-l border-border-subtle p-5 sm:p-6 flex flex-col justify-between z-20 shadow-[-4px_0_24px_rgba(0,0,0,0.02)]">
            <div className="flex flex-col gap-4">
              
              {/* Dynamic SVG Illustration Visualizer Frame */}
              <div className="relative w-full rounded-2xl bg-gradient-to-b from-[#FFF5F7] via-white to-surface-dim border border-border-subtle p-4 flex flex-col items-center justify-center overflow-hidden group shadow-inner">
                <div className="absolute inset-0 bg-radial from-primary/10 via-transparent to-transparent opacity-80 pointer-events-none rounded-2xl"></div>
                
                {/* Telemetry HUD Badges on SVG Card */}
                <div className="w-full flex items-center justify-between z-20 mb-2">
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/95 border border-primary/20 backdrop-blur-sm shadow-xs">
                    <span className="w-2 h-2 rounded-full bg-primary animate-ping"></span>
                    <span className="font-mono text-[10px] text-primary font-bold uppercase tracking-wider">
                      {activeNode.tag}
                    </span>
                  </div>
                  <div className="px-2.5 py-1 rounded-full bg-primary/10 border border-primary/20 flex items-center gap-1">
                    <span className="material-symbols-outlined text-[12px] text-primary">satellite_alt</span>
                    <span className="font-mono text-[10px] text-primary font-bold tracking-wider">
                      ACTIVE ORBIT
                    </span>
                  </div>
                </div>

                {/* Dynamic SVG Image */}
                <div className="relative z-10 w-full flex items-center justify-center min-h-[160px] py-1">
                  <img
                    src={activeNode.img}
                    alt={activeNode.name}
                    className="max-h-[155px] w-auto max-w-[90%] object-contain transition-all duration-500 transform group-hover:scale-105 drop-shadow-sm"
                    loading="eager"
                  />
                </div>
              </div>

              {/* HUD Panel Header */}
              <div className="flex items-center justify-between pb-3 bg-surface-dim p-3.5 rounded-xl border border-border-subtle">
                <div className="flex flex-col">
                  <span className="font-sans text-[11px] text-[#767676] uppercase tracking-widest font-semibold">Active Satellite Node</span>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_8px_rgba(226,30,76,0.6)]"></span>
                    <span className="font-headline font-bold text-lg text-text-main">{activeNode.name}</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="font-sans text-[11px] text-[#767676] uppercase font-semibold">Runtime SLA</span>
                  <p className="font-headline font-bold text-base text-primary">{activeNode.sla}</p>
                </div>
              </div>

              {/* Discipline Architecture Overview */}
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[15px] text-primary">memory</span>
                  <span className="font-sans text-xs text-primary uppercase tracking-wider font-bold">Architecture Overview</span>
                </div>
                <p className="font-sans text-xs sm:text-[13px] text-[#5A5A5A] leading-relaxed">
                  {activeNode.desc}
                </p>
              </div>

              {/* Tech Stack Monospace Pills */}
              <div className="flex flex-col gap-2">
                <span className="font-sans text-[11px] text-[#767676] uppercase tracking-wider font-semibold">Core Frameworks &amp; Toolchain</span>
                <div className="flex flex-wrap gap-1.5">
                  {activeNode.tech.map((item, idx) => (
                    <span
                      key={item}
                      className={`px-2.5 py-1 rounded-lg font-mono text-[10.5px] ${
                        idx === 0 || idx === 3
                          ? 'bg-[#FFF0F2] text-primary border border-primary/20 font-semibold'
                          : 'bg-surface-dim text-text-main border border-border-subtle'
                      }`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Quantitative Metrics Sparklines */}
              <div className="grid grid-cols-2 gap-2.5 pt-1">
                <div className="bg-surface-dim border border-border-subtle p-2.5 rounded-xl flex flex-col gap-1">
                  <span className="font-sans text-[10.5px] text-[#767676] uppercase font-semibold">{activeNode.metric1Label}</span>
                  <div className="flex items-baseline justify-between">
                    <span className="font-headline font-bold text-sm text-text-main">{activeNode.metric1Val}</span>
                    <span className="font-mono text-[9.5px] text-primary font-bold">{activeNode.metric1Status}</span>
                  </div>
                  {/* SVG Sparkline */}
                  <svg className="w-full h-6 text-primary mt-0.5" fill="none" preserveAspectRatio="none" viewBox="0 0 120 28">
                    <path d="M0 24 L20 18 L40 22 L60 8 L80 14 L100 4 L120 6" stroke="currentColor" strokeLinecap="round" strokeWidth="2"></path>
                    <path d="M0 24 L20 18 L40 22 L60 8 L80 14 L100 4 L120 6 L120 28 L0 28 Z" fill="currentColor" fillOpacity="0.12"></path>
                  </svg>
                </div>

                <div className="bg-surface-dim border border-border-subtle p-2.5 rounded-xl flex flex-col gap-1">
                  <span className="font-sans text-[10.5px] text-[#767676] uppercase font-semibold">{activeNode.metric2Label}</span>
                  <div className="flex items-baseline justify-between">
                    <span className="font-headline font-bold text-sm text-text-main">{activeNode.metric2Val}</span>
                    <span className="font-mono text-[9.5px] text-text-muted">{activeNode.metric2Sub}</span>
                  </div>
                  {/* SVG Bar Graph */}
                  <svg className="w-full h-6 text-primary mt-0.5" fill="none" viewBox="0 0 120 28">
                    <rect fill="currentColor" height="12" opacity="0.3" rx="1" width="10" x="5" y="16"></rect>
                    <rect fill="currentColor" height="16" opacity="0.45" rx="1" width="10" x="22" y="12"></rect>
                    <rect fill="currentColor" height="20" opacity="0.6" rx="1" width="10" x="39" y="8"></rect>
                    <rect fill="currentColor" height="23" opacity="0.8" rx="1" width="10" x="56" y="5"></rect>
                    <rect fill="currentColor" height="14" opacity="0.4" rx="1" width="10" x="73" y="14"></rect>
                    <rect fill="currentColor" height="21" opacity="0.75" rx="1" width="10" x="90" y="7"></rect>
                    <rect fill="currentColor" height="25" rx="1" width="10" x="107" y="3"></rect>
                  </svg>
                </div>
              </div>

            </div>

            {/* Action button to initiate workflow */}
            <div className="pt-3 mt-3 border-t border-border-subtle">
              <Link
                to="/contact"
                className="w-full py-2.5 px-4 rounded-xl bg-primary text-white font-headline text-xs sm:text-sm font-bold flex items-center justify-center gap-2 hover:bg-primary-dark transition-all shadow-[0_4px_14px_rgba(226,30,76,0.3)] hover:shadow-[0_6px_18px_rgba(226,30,76,0.4)]"
              >
                <span>Commission This Engineering Track</span>
                <span className="material-symbols-outlined text-[17px]">arrow_forward</span>
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
