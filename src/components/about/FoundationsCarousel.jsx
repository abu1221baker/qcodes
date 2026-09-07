import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  OurVisionSvg,
  ConnectedWorldSvg,
  SoftwareTestingSvg,
  ServerAmicoSvg,
  SolutionsHeroSvg,
  DataExtractionAmicoSvg,
  CloudSvg,
  HandCodingSvg,
  ServerRafikiSvg,
  DataExtractionCuateSvg,
  UiUxSvg,
  WebDevSvg,
  TechSupportSvg,
  CrmSvg,
} from '../../assets';
import '../../styles/parallax-about.css';

gsap.registerPlugin(ScrollTrigger);

const foundationsData = [
  {
    num: '01',
    category: 'PURPOSE',
    title: 'Our Mission',
    desc: 'To engineer sovereign digital software platforms, distributed cloud mesh infrastructure, and interactive 3D spatial universes for global enterprises.',
    img: OurVisionSvg,
    tag: 'ENTERPRISE SCALE',
  },
  {
    num: '02',
    category: 'TRAJECTORY',
    title: 'Our Vision',
    desc: 'To define the future of autonomous software engineering where AI intelligence, WebGL spatial interfaces, and high-concurrency systems converge.',
    img: ConnectedWorldSvg,
    tag: 'GLOBAL HORIZON',
  },
  {
    num: '03',
    category: 'INTEGRITY',
    title: 'Zero-Defect Culture',
    desc: 'Deterministic automated Playwright & Cypress pipelines, k6 chaos load tests, and sub-15m MTTR response guarantees 99.99% system uptime.',
    img: SoftwareTestingSvg,
    tag: '99.99% UPTIME',
  },
  {
    num: '04',
    category: 'FORTRESS',
    title: 'Quantum Security',
    desc: 'Zero-trust encryption layers, immutable distributed audit logging, and sovereign cryptographic key management protecting critical assets.',
    img: ServerAmicoSvg,
    tag: 'QUANTUM-SAFE',
  },
  {
    num: '05',
    category: 'VELOCITY',
    title: 'Distributed Mesh',
    desc: 'Low-latency edge orchestration, distributed state consensus, and sub-20ms multi-region synchronization across worldwide node clusters.',
    img: SolutionsHeroSvg,
    tag: 'SUB-20MS SYNC',
  },
  {
    num: '06',
    category: 'COGNITION',
    title: 'Autonomous AI',
    desc: 'Self-healing microservices, adaptive algorithmic routing, and deep telemetry observability transforming raw operations into actionable foresight.',
    img: DataExtractionAmicoSvg,
    tag: 'NEURAL MESH',
  },
  {
    num: '07',
    category: 'RESILIENCE',
    title: 'Hyperscale Cloud',
    desc: 'Multi-region Kubernetes clusters with automated failover, Terraform infrastructure as code, and sub-second disaster recovery protocols.',
    img: CloudSvg,
    tag: 'ZERO DOWNTIME',
  },
  {
    num: '08',
    category: 'PRECISION',
    title: 'Software Craft',
    desc: 'Strict type safety, modern atomic component design, micro-frontends, and high-throughput backend services built with Rust & Go.',
    img: HandCodingSvg,
    tag: 'CLEAN ARCH',
  },
  {
    num: '09',
    category: 'ACCELERATION',
    title: 'High Concurrency',
    desc: 'Event-driven asynchronous messaging buses capable of handling tens of millions of telemetric events per second without dropping frames.',
    img: ServerRafikiSvg,
    tag: 'HIGH THROUGHPUT',
  },
  {
    num: '10',
    category: 'SOVEREIGNTY',
    title: 'Data Governance',
    desc: 'Sovereign data pipelines with localized data sovereignty compliance, enterprise GDPR/HIPAA compliance, and end-to-end cryptographic integrity.',
    img: DataExtractionCuateSvg,
    tag: 'COMPLIANT',
  },
  {
    num: '11',
    category: 'SPATIAL',
    title: 'Spatial 3D Digital',
    desc: 'Photorealistic Three.js & WebGL rendering pipelines that bridge real-world physical telemetry with immersive 3D digital twins.',
    img: UiUxSvg,
    tag: 'WEBGL 2.0',
  },
  {
    num: '12',
    category: 'PROTOCOL',
    title: 'API Telemetry',
    desc: 'Unified GraphQL & gRPC telemetry endpoints providing instantaneous data transmission between microservices and end-user dashboards.',
    img: WebDevSvg,
    tag: 'GRPC PROTOCOL',
  },
  {
    num: '13',
    category: 'EVOLUTION',
    title: 'Continuous CI/CD',
    desc: 'GitOps-driven continuous deployment workflows with automated canary rollouts, automated rollbacks, and instant zero-downtime releases.',
    img: TechSupportSvg,
    tag: 'GITOPS PIPELINE',
  },
  {
    num: '14',
    category: 'PARTNERSHIP',
    title: 'Client Co-Engineering',
    desc: 'Direct integration of our principal architects with your core team, delivering transparent codebases, full documentation, and knowledge transfer.',
    img: CrmSvg,
    tag: 'DEDICATED CORE',
  },
];

export default function FoundationsCarousel() {
  const sectionRef = useRef(null);
  const cardsListRef = useRef(null);
  const playheadRef = useRef({ offset: 0 });
  const seamlessLoopRef = useRef(null);
  const spacing = 0.1;

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.foundations-cards li');
      if (!cards.length) return;

      const animateFunc = (element) => {
        const tl = gsap.timeline();
        tl.fromTo(
          element,
          { scale: 0.2, opacity: 0, zIndex: 1 },
          {
            scale: 1,
            opacity: 1,
            zIndex: 100,
            duration: 0.5,
            yoyo: true,
            repeat: 1,
            ease: 'power1.inOut',
            immediateRender: false,
          }
        ).fromTo(
          element,
          { xPercent: 350 },
          { xPercent: -350, duration: 1, ease: 'none', immediateRender: false },
          0
        );
        return tl;
      };

      const overlap = Math.ceil(1 / spacing);
      const startTime = cards.length * spacing + 0.5;
      const loopTime = (cards.length + overlap) * spacing + 1;
      const rawSequence = gsap.timeline({ paused: true });

      const seamlessLoop = gsap.timeline({
        paused: true,
        repeat: -1,
        onRepeat() {
          this._time === this._dur && (this._tTime += this._dur - 0.01);
        },
      });

      const totalCardsCount = cards.length + overlap * 2;
      for (let i = 0; i < totalCardsCount; i++) {
        const index = i % cards.length;
        const time = i * spacing;
        rawSequence.add(animateFunc(cards[index]), time);
        if (i <= cards.length) seamlessLoop.add('label' + i, time);
      }

      rawSequence.time(startTime);
      seamlessLoop
        .to(rawSequence, {
          time: loopTime,
          duration: loopTime - startTime,
          ease: 'none',
        })
        .fromTo(
          rawSequence,
          { time: overlap * spacing + 1 },
          {
            time: startTime,
            duration: startTime - (overlap * spacing + 1),
            immediateRender: false,
            ease: 'none',
          }
        );

      const wrapTime = gsap.utils.wrap(0, seamlessLoop.duration());
      playheadRef.current.offset = startTime;
      seamlessLoopRef.current = seamlessLoop;

      seamlessLoop.time(wrapTime(startTime));

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.5,
        onUpdate(self) {
          const targetOffset = startTime + self.progress * (cards.length * spacing * 1.5);
          playheadRef.current.offset = targetOffset;
          seamlessLoop.time(wrapTime(targetOffset));
        },
      });

      ScrollTrigger.refresh();
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const goToOffset = (targetOffset) => {
    if (!seamlessLoopRef.current) return;
    const wrapTime = gsap.utils.wrap(0, seamlessLoopRef.current.duration());
    gsap.to(playheadRef.current, {
      offset: targetOffset,
      duration: 0.5,
      ease: 'power2.out',
      onUpdate() {
        seamlessLoopRef.current.time(wrapTime(playheadRef.current.offset));
      },
    });
  };

  const handlePrev = () => {
    goToOffset(playheadRef.current.offset - spacing);
  };

  const handleNext = () => {
    goToOffset(playheadRef.current.offset + spacing);
  };

  return (
    <section id="foundations-section" ref={sectionRef} className="relative w-full">
      <div className="foundations-sticky-container py-8 px-4 sm:px-8 tech-grid-bg">
        {/* Top Section Header */}
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-2 z-30 pointer-events-none">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary-light border border-primary/20 text-primary shadow-xs">
            <span className="w-2 h-2 rounded-full bg-primary animate-ping"></span>
            <span className="font-mono text-xs uppercase font-bold tracking-widest">ORGANIZATIONAL MATRIX</span>
          </div>
          <h2 className="font-headline text-3xl sm:text-4xl font-extrabold text-text-main tracking-tight">
            Our Architectural <span className="text-primary">Foundations</span>
          </h2>
          <p className="font-sans text-xs sm:text-sm text-text-muted max-w-xl leading-relaxed">
            Scroll vertically or use controls to traverse the 14 core tenets and engineering doctrines powering Qcodes Infotech.
          </p>
        </div>

        {/* 3D Infinite Seamless Loop Gallery */}
        <div className="gallery w-full h-full relative flex items-center justify-center">
          <ul className="foundations-cards" ref={cardsListRef}>
            {foundationsData.map((card) => (
              <li key={card.num} className="group">
                {/* Card Top Header Bar */}
                <div className="flex items-center justify-between border-b border-border-subtle pb-2.5">
                  <span className="font-mono text-[10px] text-primary font-bold tracking-wider uppercase">
                    PILLAR_{card.num} // {card.category}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_rgba(226,30,76,0.8)] animate-pulse"></span>
                </div>

                {/* Card SVG Illustration Image */}
                <div className="w-full h-28 my-1 flex items-center justify-center p-2 rounded-xl bg-surface-dim/90 border border-border-subtle group-hover:scale-105 transition-transform duration-300">
                  <img src={card.img} alt={card.title} className="max-h-24 w-auto object-contain drop-shadow-sm" loading="lazy" />
                </div>

                {/* Card Content */}
                <div className="flex flex-col gap-1.5">
                  <h3 className="font-headline font-extrabold text-base text-text-main tracking-tight leading-snug">
                    {card.title}
                  </h3>
                  <p className="font-sans text-[11px] text-text-muted leading-relaxed line-clamp-3">
                    {card.desc}
                  </p>
                </div>

                {/* Card Bottom Telemetry */}
                <div className="pt-2 border-t border-border-subtle flex items-center justify-between text-[10px] font-mono text-text-muted">
                  <span className="text-primary font-bold">{card.tag}</span>
                  <span className="flex items-center gap-1 text-[#28CD41] font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#28CD41]"></span>
                    ACTIVE
                  </span>
                </div>
              </li>
            ))}
          </ul>

          {/* Bottom Controls & Navigation */}
          <div className="actions absolute bottom-5 left-1/2 -translate-x-1/2 z-30 flex items-center gap-4">
            <button
              onClick={handlePrev}
              className="foundations-prev px-5 py-2 rounded-full bg-white hover:bg-primary border border-border-strong hover:border-primary text-text-main hover:text-white font-headline text-xs font-bold transition-all flex items-center gap-1.5 shadow-md hover:shadow-primary/25 cursor-pointer active:scale-95"
              type="button"
              title="Previous Foundation"
            >
              <span className="material-symbols-outlined text-[16px]">arrow_back</span>
              <span>Prev</span>
            </button>

            <div className="hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 border border-border-subtle text-text-muted font-mono text-[11px] shadow-xs">
              <span className="material-symbols-outlined text-[14px] text-primary">swipe</span>
              <span>SCROLL TO TRAVERSE MATRIX</span>
            </div>

            <button
              onClick={handleNext}
              className="foundations-next px-5 py-2 rounded-full bg-white hover:bg-primary border border-border-strong hover:border-primary text-text-main hover:text-white font-headline text-xs font-bold transition-all flex items-center gap-1.5 shadow-md hover:shadow-primary/25 cursor-pointer active:scale-95"
              type="button"
              title="Next Foundation"
            >
              <span>Next</span>
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </button>
          </div>
        </div>

        <div className="foundations-drag-proxy"></div>
      </div>
    </section>
  );
}
