import React, { useEffect, useRef, useState, useCallback } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ConnectedWorldSvg } from '../../assets';

gsap.registerPlugin(ScrollTrigger);

const projectSteps = [
  {
    num: '01',
    icon: 'groups',
    category: 'ALIGNMENT',
    title: 'Project Kick-Off Meetings',
    desc: "The main goal of a kick-off meeting is to align all stakeholders on the project's objectives, scope, timeline, and budget.",
    highlight: 'Stakeholder Alignment',
    milestone: 'Objective Lock',
  },
  {
    num: '02',
    icon: 'chat_bubble',
    category: 'CLARITY',
    title: 'Clear, Correct & Concise Information',
    desc: 'Information should be presented in a way that is easy to understand and can be interpreted correctly across engineering and executive teams.',
    highlight: 'Zero Ambiguity',
    milestone: 'Specification Clarity',
  },
  {
    num: '03',
    icon: 'person_pin',
    category: 'GOVERNANCE',
    title: 'Single Point of Contact (SPOC)',
    desc: 'A single point of contact (SPOC) is a designated individual or team that serves as the primary point of communication and coordination for a project.',
    highlight: 'Dedicated Lead',
    milestone: 'Direct Ownership',
  },
  {
    num: '04',
    icon: 'forum',
    category: 'CHANNELS',
    title: 'Multiple Communication Channels',
    desc: 'Utilize various communication channels such as email, instant messaging, video conferencing, and project management software to ensure all team members are informed and on the same page.',
    highlight: 'Omni-Channel',
    milestone: 'Synchronized Comms',
  },
  {
    num: '05',
    icon: 'lock_open_right',
    category: 'WORKFLOW',
    title: 'Project Workflow Accessibility',
    desc: 'Clearly define roles and responsibilities for all team members to ensure proper access to project tasks, development branches, and design resources.',
    highlight: 'Role Governance',
    milestone: 'Access Provisioning',
  },
  {
    num: '06',
    icon: 'shield_lock',
    category: 'COMPLIANCE',
    title: 'Privacy & Security Protocols',
    desc: 'Ensure all team members understand and abide by enterprise company data privacy, non-disclosure agreements, and SOC-2 security policies.',
    highlight: 'Zero-Trust Shield',
    milestone: 'SOC-2 Compliance',
  },
  {
    num: '07',
    icon: 'space_dashboard',
    category: 'STACK',
    title: 'Modern Project Management Tools',
    desc: 'We leverage industry-leading agile project management platforms including Trello, Jira, Basecamp, Linear, and Asana for real-time sprint tracking.',
    highlight: 'Jira • Trello • Asana',
    milestone: 'Toolchain Integration',
  },
  {
    num: '08',
    icon: 'radar',
    category: 'EXECUTION',
    title: 'Proactive & Upfront Execution',
    desc: 'Being proactive means preemptively identifying architectural bottlenecks, evaluating emerging risks, and capturing opportunities before they impact delivery.',
    highlight: 'Risk Prevention',
    milestone: 'Preemptive Mitigation',
  },
  {
    num: '09',
    icon: 'event_repeat',
    category: 'CADENCE',
    title: 'Weekly / Fortnightly Reviews',
    desc: 'Regular scheduled check-ins on project velocity and deliverables to identify blockers, demo iterations, and maintain rapid forward momentum.',
    highlight: 'Sprint Milestones',
    milestone: 'Continuous Feedback',
  },
  {
    num: '10',
    icon: 'menu_book',
    category: 'KNOWLEDGE',
    title: 'Complete System Documentation',
    desc: 'Clear, comprehensive, and consistent technical documentation communicates architectural goals, API contracts, and user guides to all stakeholders.',
    highlight: 'Living Architecture',
    milestone: 'System Blueprints',
  },
  {
    num: '11',
    icon: 'query_stats',
    category: 'TELEMETRY',
    title: 'Transparent Status Reports',
    desc: 'Granular status reports provide executive visibility over sprint burndown, milestone completion, budget burn rate, and test coverage metrics.',
    highlight: 'Real-time Metrics',
    milestone: 'Burndown Telemetry',
  },
  {
    num: '12',
    icon: 'military_tech',
    category: 'LANDING BASE',
    title: 'Respect & Dynamic Flexibility',
    desc: 'Treating all team members, stakeholders, and clients with utmost dignity and consideration, combined with agile flexibility to achieve 100% mission success.',
    highlight: 'Touchdown Complete',
    milestone: 'Mission Accomplished',
  },
];

export default function SolutionsCloudSection() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const rocketTrackerRef = useRef(null);
  const svgPathRef = useRef(null);
  const guidePathRef = useRef(null);
  const atmosphericFlameRef = useRef(null);
  const orbitalFlameRef = useRef(null);
  const leftBoosterRef = useRef(null);
  const rightBoosterRef = useRef(null);
  const stage1Ref = useRef(null);
  const lesTowerRef = useRef(null);
  const sepFxRef = useRef(null);
  const [currentStep, setCurrentStep] = useState(1);
  const [isLanded, setIsLanded] = useState(false);
  const [pathD, setPathD] = useState('');

  // Generate smooth Zig-Zag Bezier path leading directly to Card 12 Landing Site
  const calculateZigZagPath = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    const anchors = track.querySelectorAll('.timeline-anchor-point');
    if (!anchors || anchors.length === 0) return;

    const trackRect = track.getBoundingClientRect();
    const points = [];

    // Start point slightly above the first milestone
    const startX = (trackRect.width / 2);
    const startY = 10;
    points.push({ x: startX, y: startY });

    // Collect center coordinates of each milestone anchor point relative to the track
    anchors.forEach((anchor) => {
      const rect = anchor.getBoundingClientRect();
      const x = rect.left + rect.width / 2 - trackRect.left;
      const y = rect.top + rect.height / 2 - trackRect.top;
      points.push({ x, y });
    });

    // Build smooth Cubic Bezier Curve (S-curve zig-zag)
    if (points.length < 2) return;

    let d = `M ${points[0].x} ${points[0].y}`;
    for (let i = 0; i < points.length - 1; i++) {
      const p0 = points[i === 0 ? 0 : i - 1];
      const p1 = points[i];
      const p2 = points[i + 1];
      const p3 = points[i + 2 < points.length ? i + 2 : i + 1];

      // Catmull-Rom to Cubic Bezier control points calculation for ultra-smooth curves
      const cp1x = p1.x + (p2.x - p0.x) / 5;
      const cp1y = p1.y + (p2.y - p0.y) / 5;
      const cp2x = p2.x - (p3.x - p1.x) / 5;
      const cp2y = p2.y - (p3.y - p1.y) / 5;

      d += ` C ${cp1x.toFixed(1)} ${cp1y.toFixed(1)}, ${cp2x.toFixed(1)} ${cp2y.toFixed(1)}, ${p2.x.toFixed(1)} ${p2.y.toFixed(1)}`;
    }

    setPathD(d);
  }, []);

  useEffect(() => {
    // Calculate path on initial load and window resize
    calculateZigZagPath();
    const timer = setTimeout(calculateZigZagPath, 200);

    const handleResize = () => {
      calculateZigZagPath();
      ScrollTrigger.refresh();
    };

    window.addEventListener('resize', handleResize);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', handleResize);
    };
  }, [calculateZigZagPath]);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    const rocket = rocketTrackerRef.current;
    const path = svgPathRef.current;

    if (!section || !track || !rocket || !path || !pathD) return;

    const ctx = gsap.context(() => {
      const pathLength = path.getTotalLength();
      gsap.set(path, {
        strokeDasharray: pathLength,
        strokeDashoffset: pathLength,
      });

      // Position rocket at the start of the zig-zag curve
      const startPoint = path.getPointAtLength(0);
      const nextPoint = path.getPointAtLength(Math.min(10, pathLength));
      const initialAngle = Math.atan2(nextPoint.y - startPoint.y, nextPoint.x - startPoint.x) * (180 / Math.PI) - 90;

      gsap.set(rocket, {
        x: startPoint.x,
        y: startPoint.y,
        rotation: initialAngle,
        xPercent: -50,
        yPercent: -50,
      });

      // Initial visual states for step cards
      const cards = gsap.utils.toArray('.timeline-step-card');
      const nodes = gsap.utils.toArray('.timeline-track-node');

      cards.forEach((card, i) => {
        gsap.set(card, {
          opacity: i === 0 ? 1 : 0.25,
          scale: i === 0 ? 1 : 0.94,
          y: 0,
        });
      });

      nodes.forEach((node, i) => {
        gsap.set(node, {
          scale: i === 0 ? 1.3 : 0.85,
          backgroundColor: i === 0 ? '#E21E4C' : '#E5E7EB',
        });
      });

      // ═══ Master ScrollTrigger: Rocket Flight, Staging & Card 12 Touchdown ═══
      ScrollTrigger.create({
        trigger: track,
        start: 'top 55%',
        end: 'bottom 75%',
        scrub: 0.8,
        onUpdate: (self) => {
          const progress = self.progress;
          const currentDist = progress * pathLength;
          const direction = self.direction; // 1 = scrolling down, -1 = scrolling up
          
          // Draw the plasma beam line smoothly along the zig-zag
          gsap.set(path, {
            strokeDashoffset: pathLength - currentDist,
          });

          // Retrieve exact (x, y) coordinates on the zig-zag curve
          const point = path.getPointAtLength(currentDist);
          
          let angle = 0;
          if (direction >= 0) {
            // Scrolling DOWN: face forward along trajectory
            const pointAhead = path.getPointAtLength(Math.min(currentDist + 10, pathLength));
            angle = Math.atan2(pointAhead.y - point.y, pointAhead.x - point.x) * (180 / Math.PI) - 90;
          } else {
            // Scrolling UP: turn around! Rocket nose points backward/upward along path
            const pointBehind = path.getPointAtLength(Math.max(currentDist - 10, 0));
            angle = Math.atan2(pointBehind.y - point.y, pointBehind.x - point.x) * (180 / Math.PI) - 90;
          }

          // ══════════════════════════════════════════════════════════════════
          // ═══ TOUCHDOWN LANDING DYNAMICS ON CARD 12 (PROGRESS > 0.90) ═══
          // ══════════════════════════════════════════════════════════════════
          if (progress > 0.91) {
            setIsLanded(true);
          } else {
            setIsLanded(false);
          }

          if (progress > 0.93) {
            // Settle smoothly into upright landing attitude on card 12
            const landRatio = Math.min(1, (progress - 0.93) / 0.07);
            angle = angle * (1 - landRatio); // Rotates upright to 0 deg
            gsap.set(rocket, {
              scale: 1 - landRatio * 0.15,
            });
            if (orbitalFlameRef.current) {
              orbitalFlameRef.current.style.opacity = Math.max(0, 1 - landRatio * 1.8).toFixed(2);
            }
          } else {
            gsap.set(rocket, { scale: 1 });
          }

          // Move and rotate rocket along the smooth curve
          gsap.set(rocket, {
            x: point.x,
            y: point.y,
            rotation: angle,
          });

          // ══════════════════════════════════════════════════════════════════
          // ═══ REALISTIC MULTI-STAGE ATMOSPHERIC SEPARATION SEQUENCING ═══
          // ══════════════════════════════════════════════════════════════════
          // 1. SIDE BOOSTERS JETTISON (Stages 4-6, progress 0.22 -> 0.48)
          const sideSepStart = 0.22;
          const sideSepEnd = 0.48;
          let sideRatio = 0;
          if (progress > sideSepStart) {
            sideRatio = Math.min(1, (progress - sideSepStart) / (sideSepEnd - sideSepStart));
          }

          if (leftBoosterRef.current) {
            const lx = -sideRatio * 140;
            const ly = -sideRatio * 150;
            const lRot = -sideRatio * 50;
            const lOp = sideRatio >= 1 ? 0 : Math.max(0, 1 - Math.pow(sideRatio, 1.4));
            leftBoosterRef.current.setAttribute(
              'transform',
              `translate(${lx.toFixed(1)}, ${ly.toFixed(1)}) rotate(${lRot.toFixed(1)} 21 54)`
            );
            leftBoosterRef.current.style.opacity = lOp.toFixed(2);
          }

          if (rightBoosterRef.current) {
            const rx = sideRatio * 140;
            const ry = -sideRatio * 150;
            const rRot = sideRatio * 50;
            const rOp = sideRatio >= 1 ? 0 : Math.max(0, 1 - Math.pow(sideRatio, 1.4));
            rightBoosterRef.current.setAttribute(
              'transform',
              `translate(${rx.toFixed(1)}, ${ry.toFixed(1)}) rotate(${rRot.toFixed(1)} 79 54)`
            );
            rightBoosterRef.current.style.opacity = rOp.toFixed(2);
          }

          // Separation Gas / Pyro Particle Rings
          if (sepFxRef.current) {
            const sepPuffRatio = (progress > 0.22 && progress < 0.42)
              ? Math.sin(((progress - 0.22) / 0.20) * Math.PI)
              : 0;
            sepFxRef.current.style.opacity = sepPuffRatio.toFixed(2);
          }

          // 2. STAGE 1 CORE BOOSTER SEPARATION (Stages 6-8, progress 0.44 -> 0.68)
          const s1Start = 0.44;
          const s1End = 0.68;
          let s1Ratio = 0;
          if (progress > s1Start) {
            s1Ratio = Math.min(1, (progress - s1Start) / (s1End - s1Start));
          }

          if (stage1Ref.current) {
            const s1Y = -s1Ratio * 170;
            const s1Rot = (s1Ratio * 14);
            const s1Op = s1Ratio >= 1 ? 0 : Math.max(0, 1 - Math.pow(s1Ratio, 1.3));
            stage1Ref.current.setAttribute(
              'transform',
              `translate(0, ${s1Y.toFixed(1)}) rotate(${s1Rot.toFixed(1)} 50 40)`
            );
            stage1Ref.current.style.opacity = s1Op.toFixed(2);
          }

          // 3. LAUNCH ESCAPE SYSTEM (LES TOWER) JETTISON (Stages 5-7, progress 0.38 -> 0.58)
          const lesStart = 0.38;
          const lesEnd = 0.58;
          let lesRatio = 0;
          if (progress > lesStart) {
            lesRatio = Math.min(1, (progress - lesStart) / (lesEnd - lesStart));
          }

          if (lesTowerRef.current) {
            const lesY = lesRatio * 150;
            const lesRot = lesRatio * 25;
            const lesOp = lesRatio >= 1 ? 0 : Math.max(0, 1 - Math.pow(lesRatio, 1.2));
            lesTowerRef.current.setAttribute(
              'transform',
              `translate(0, ${lesY.toFixed(1)}) rotate(${lesRot.toFixed(1)} 50 175)`
            );
            lesTowerRef.current.style.opacity = lesOp.toFixed(2);
          }

          // 4. ATMOSPHERIC vs VACUUM ORBITAL ENGINE SWITCHING
          if (atmosphericFlameRef.current) {
            const flameOp = Math.max(0, 1 - s1Ratio * 1.6);
            atmosphericFlameRef.current.style.opacity = flameOp.toFixed(2);
          }

          if (orbitalFlameRef.current && progress <= 0.93) {
            const orbOp = Math.min(1, Math.max(0, (progress - 0.40) / 0.15));
            orbitalFlameRef.current.style.opacity = orbOp.toFixed(2);
          }

          // Update active step indicator
          const stepIndex = Math.min(
            projectSteps.length,
            Math.max(1, Math.round(progress * (projectSteps.length - 1)) + 1)
          );
          setCurrentStep(stepIndex);
        },
      });

      // Individual Card illumination triggers as rocket approaches
      cards.forEach((card, index) => {
        const node = nodes[index];

        ScrollTrigger.create({
          trigger: card,
          start: 'top 65%',
          end: 'bottom 35%',
          toggleActions: 'play reverse play reverse',
          onEnter: () => {
            gsap.to(card, {
              opacity: 1,
              scale: 1,
              duration: 0.45,
              ease: 'back.out(1.4)',
            });
            if (node) {
              gsap.to(node, {
                scale: 1.35,
                backgroundColor: '#E21E4C',
                duration: 0.35,
                ease: 'back.out(2)',
              });
            }
          },
          onLeaveBack: () => {
            if (index > 0) {
              gsap.to(card, {
                opacity: 0.25,
                scale: 0.94,
                duration: 0.35,
              });
              if (node) {
                gsap.to(node, {
                  scale: 0.85,
                  backgroundColor: '#E5E7EB',
                  duration: 0.3,
                });
              }
            }
          },
        });
      });

      // Thruster Flame Pulsing Animation
      if (atmosphericFlameRef.current) {
        gsap.to(atmosphericFlameRef.current, {
          scaleY: 1.35,
          scaleX: 1.15,
          transformOrigin: 'top center',
          duration: 0.08,
          repeat: -1,
          yoyo: true,
          ease: 'power1.inOut',
        });
      }

      if (orbitalFlameRef.current) {
        gsap.to(orbitalFlameRef.current, {
          scaleY: 1.4,
          scaleX: 1.2,
          transformOrigin: 'top center',
          duration: 0.06,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });
      }

    }, sectionRef);

    return () => ctx.revert();
  }, [pathD]);

  return (
    <section
      ref={sectionRef}
      className="w-full px-4 sm:px-8 xl:px-12 py-16 lg:py-24 relative bg-[#F9FAFC] border-t border-border-subtle overflow-visible"
      id="section-cloud"
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        {/* Section Header with Expanded Text & SVG Illustration on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-white p-6 sm:p-10 rounded-2xl border border-border-subtle shadow-[0_6px_30px_rgba(0,0,0,0.03)]">
          {/* Left Column: Expanded Technical Narrative & Tenets */}
          <div className="lg:col-span-7 flex flex-col items-start gap-4">
            <h2 className="font-headline text-3xl lg:text-4xl font-extrabold text-[#11141a] tracking-tight leading-tight">
              How Qcodes Launches &amp; Executes Sovereign Projects
            </h2>

            <p className="font-sans text-sm sm:text-base text-text-muted leading-relaxed">
              From initial technical feasibility scoping to full-scale mission launch, our delivery methodology is built upon 12 battle-tested project management doctrines. We combine architectural rigor, radical transparency, and agile sprint velocity to ensure zero-defect digital outcomes.
            </p>

            {/* Quick Framework Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full pt-1">
              <div className="bg-[#F8F9FB] border border-border-subtle rounded-xl p-3 flex flex-col gap-1">
                <div className="flex items-center gap-1.5 text-primary">
                  <span className="material-symbols-outlined text-[18px]">verified</span>
                  <span className="font-mono text-[11px] font-bold">ZERO AMBIGUITY</span>
                </div>
                <span className="text-xs text-text-muted">Dedicated SPOC lead &amp; centralized agile tooling.</span>
              </div>

              <div className="bg-[#F8F9FB] border border-border-subtle rounded-xl p-3 flex flex-col gap-1">
                <div className="flex items-center gap-1.5 text-primary">
                  <span className="material-symbols-outlined text-[18px]">insights</span>
                  <span className="font-mono text-[11px] font-bold">REAL-TIME DATA</span>
                </div>
                <span className="text-xs text-text-muted">Scheduled sprint reviews, burndowns &amp; living docs.</span>
              </div>

              <div className="bg-[#F8F9FB] border border-border-subtle rounded-xl p-3 flex flex-col gap-1">
                <div className="flex items-center gap-1.5 text-primary">
                  <span className="material-symbols-outlined text-[18px]">security</span>
                  <span className="font-mono text-[11px] font-bold">ZERO-TRUST</span>
                </div>
                <span className="text-xs text-text-muted">Strict SOC-2 Type II standards &amp; complete confidentiality.</span>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-2 text-primary font-mono text-xs font-bold">
              <span className="material-symbols-outlined text-[18px] animate-bounce">arrow_downward</span>
              <span>Scroll down to watch the rocket bank and weave smoothly along the zig-zag trajectory, unlocking each of our 12 project management doctrines step-by-step.</span>
            </div>
          </div>

          {/* Right Column: SVG Illustration Card with Live Telemetry Badges */}
          <div className="lg:col-span-5 flex items-center justify-center relative">
            <div className="relative w-full max-w-[380px] bg-gradient-to-br from-[#FFF0F2] via-white to-surface-dim p-6 rounded-2xl border border-primary/20 shadow-sm flex flex-col items-center justify-center overflow-hidden group">
              {/* Background Accent Glow */}
              <div className="absolute -top-12 -right-12 w-44 h-44 bg-primary/10 rounded-full blur-2xl pointer-events-none"></div>

              {/* Connected World SVG Image */}
              <img
                src={ConnectedWorldSvg}
                alt="Qcodes Project Execution & Connected Global Delivery"
                className="w-full h-auto max-h-[230px] object-contain group-hover:scale-105 transition-transform duration-500 relative z-10"
              />

              {/* Floating SLA Badge */}
              <div className="mt-4 w-full flex items-center justify-between gap-2 px-3 py-2 bg-white/90 backdrop-blur-sm border border-border-subtle rounded-xl shadow-xs relative z-10">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#0ae448] shadow-[0_0_8px_#0ae448]"></span>
                  <span className="font-mono text-[11px] text-text-main font-bold">MISSION SLA: 99.8%</span>
                </div>
                <span className="font-mono text-[11px] text-primary font-extrabold">12 MILESTONES</span>
              </div>
            </div>
          </div>
        </div>



        {/* ═══ VERTICAL ZIG-ZAG ROCKET FLIGHT TRAJECTORY TRACK ═══ */}
        <div ref={trackRef} className="relative w-full py-12 overflow-visible">
          
          {/* Full-Height Smooth Zig-Zag SVG Flight Conduits */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-10 overflow-visible"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="zigzagPlasmaGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#E21E4C" />
                <stop offset="50%" stopColor="#FF3366" />
                <stop offset="100%" stopColor="#A91639" />
              </linearGradient>
              <filter id="zigzagGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Base Dashed Guide Line */}
            {pathD && (
              <path
                ref={guidePathRef}
                d={pathD}
                fill="none"
                stroke="#E5E7EB"
                strokeWidth="2.5"
                strokeDasharray="6 6"
                strokeLinecap="round"
              />
            )}

            {/* Active Filled Plasma Beam Line */}
            {pathD && (
              <path
                ref={svgPathRef}
                d={pathD}
                fill="none"
                stroke="url(#zigzagPlasmaGrad)"
                strokeWidth="4"
                strokeLinecap="round"
                filter="url(#zigzagGlow)"
              />
            )}
          </svg>

          {/* Flying Apollo Multi-Stage Rocket (Banking and landing on Card 12) */}
          <div
            ref={rocketTrackerRef}
            className="absolute top-0 left-0 z-20 pointer-events-none origin-center overflow-visible"
            style={{ width: '96px', height: '154px' }}
          >
            {/* Apollo Saturn V Spacecraft */}
            <svg
              width="96"
              height="154"
              viewBox="0 0 100 180"
              fill="none"
              overflow="visible"
              style={{ overflow: 'visible' }}
              xmlns="http://www.w3.org/2000/svg"
              className="drop-shadow-[0_12px_28px_rgba(226,30,76,0.7)] overflow-visible"
            >
              <defs>
                {/* Metallic Shaders & Gradients */}
                <linearGradient id="apolloHullWhite" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#FFFFFF" />
                  <stop offset="40%" stopColor="#F8FAFC" />
                  <stop offset="75%" stopColor="#E2E8F0" />
                  <stop offset="100%" stopColor="#CBD5E1" />
                </linearGradient>

                <linearGradient id="apolloCrimson" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#FF3366" />
                  <stop offset="50%" stopColor="#E21E4C" />
                  <stop offset="100%" stopColor="#A91639" />
                </linearGradient>

                <linearGradient id="apolloDark" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#1E293B" />
                  <stop offset="50%" stopColor="#0F172A" />
                  <stop offset="100%" stopColor="#020617" />
                </linearGradient>

                <linearGradient id="apolloNozzle" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#475569" />
                  <stop offset="50%" stopColor="#1E293B" />
                  <stop offset="100%" stopColor="#0F172A" />
                </linearGradient>

                {/* Atmospheric Heavy Rocket Flame (Orange/Yellow/Crimson) */}
                <linearGradient id="apolloPlumeFlame" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#FFEA00" />
                  <stop offset="35%" stopColor="#FF6B00" />
                  <stop offset="70%" stopColor="#E21E4C" />
                  <stop offset="100%" stopColor="#A91639" stopOpacity="0" />
                </linearGradient>

                {/* Sovereign Vacuum Space Ion Flame (Cyan/Violet Plasma) */}
                <linearGradient id="apolloOrbitalPlume" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#FFFFFF" />
                  <stop offset="30%" stopColor="#00E5FF" />
                  <stop offset="70%" stopColor="#7C3AED" />
                  <stop offset="100%" stopColor="#E21E4C" stopOpacity="0" />
                </linearGradient>

                <filter id="apolloGlow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="3.5" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
                <filter id="plasmaOrbGlow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="4.5" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* ═══ ORBITAL VACUUM SPACE ENGINE PLUME ═══ */}
              <g ref={orbitalFlameRef} opacity="0" transform="rotate(180 50 148)">
                <path
                  d="M 43 148 Q 50 85 50 70 Q 50 85 57 148 Z"
                  fill="url(#apolloOrbitalPlume)"
                  filter="url(#plasmaOrbGlow)"
                  opacity="0.95"
                />
                <ellipse cx="50" cy="120" rx="2.5" ry="12" fill="#FFFFFF" opacity="0.9" />
                <ellipse cx="50" cy="100" rx="1.5" ry="6" fill="#00E5FF" opacity="0.8" />
              </g>

              {/* ═══ SEPARATION PUFF FX ═══ */}
              <g ref={sepFxRef} opacity="0" pointerEvents="none">
                <circle cx="21" cy="54" r="18" fill="none" stroke="#FF6B00" strokeWidth="2" opacity="0.7" />
                <circle cx="21" cy="54" r="28" fill="none" stroke="#FFFFFF" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.5" />
                <circle cx="79" cy="54" r="18" fill="none" stroke="#FF6B00" strokeWidth="2" opacity="0.7" />
                <circle cx="79" cy="54" r="28" fill="none" stroke="#FFFFFF" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.5" />
                <ellipse cx="50" cy="66" rx="24" ry="10" fill="none" stroke="#E21E4C" strokeWidth="2" opacity="0.6" />
              </g>

              {/* ═══ LEFT SIDE STRAP-ON BOOSTER GROUP ═══ */}
              <g ref={leftBoosterRef} id="leftBoosterAssembly">
                <g transform="rotate(180 21 14)">
                  <path
                    d="M 16 14 Q 21 -16 21 -24 Q 21 -16 26 14 Z"
                    fill="url(#apolloPlumeFlame)"
                    filter="url(#apolloGlow)"
                    opacity="0.9"
                  />
                  <path
                    d="M 18 14 Q 21 -8 21 -14 Q 21 -8 24 14 Z"
                    fill="#FFFFFF"
                  />
                </g>
                <rect x="25" y="38" width="6" height="3" fill="url(#apolloDark)" />
                <rect x="25" y="68" width="6" height="3" fill="url(#apolloDark)" />
                <rect x="14" y="24" width="14" height="60" fill="url(#apolloHullWhite)" stroke="#0F172A" strokeWidth="1" />
                <rect x="14" y="24" width="14" height="8" fill="url(#apolloCrimson)" />
                <rect x="14" y="52" width="7" height="16" fill="url(#apolloDark)" />
                <polygon points="14,84 28,84 21,98" fill="url(#apolloCrimson)" stroke="#0F172A" strokeWidth="1" />
                <polygon points="15,24 27,24 25,14 17,14" fill="url(#apolloNozzle)" stroke="#0F172A" strokeWidth="0.8" />
              </g>

              {/* ═══ RIGHT SIDE STRAP-ON BOOSTER GROUP ═══ */}
              <g ref={rightBoosterRef} id="rightBoosterAssembly">
                <g transform="rotate(180 79 14)">
                  <path
                    d="M 74 14 Q 79 -16 79 -24 Q 79 -16 84 14 Z"
                    fill="url(#apolloPlumeFlame)"
                    filter="url(#apolloGlow)"
                    opacity="0.9"
                  />
                  <path
                    d="M 76 14 Q 79 -8 79 -14 Q 79 -8 82 14 Z"
                    fill="#FFFFFF"
                  />
                </g>
                <rect x="69" y="38" width="6" height="3" fill="url(#apolloDark)" />
                <rect x="69" y="68" width="6" height="3" fill="url(#apolloDark)" />
                <rect x="72" y="24" width="14" height="60" fill="url(#apolloHullWhite)" stroke="#0F172A" strokeWidth="1" />
                <rect x="72" y="24" width="14" height="8" fill="url(#apolloCrimson)" />
                <rect x="79" y="52" width="7" height="16" fill="url(#apolloDark)" />
                <polygon points="72,84 86,84 79,98" fill="url(#apolloCrimson)" stroke="#0F172A" strokeWidth="1" />
                <polygon points="73,24 85,24 83,14 75,14" fill="url(#apolloNozzle)" stroke="#0F172A" strokeWidth="0.8" />
              </g>

              {/* ═══ STAGE 1 (S-IC) CORE BOOSTER & ATMOSPHERIC ENGINES ═══ */}
              <g ref={stage1Ref} id="stage1BoosterBase">
                <g ref={atmosphericFlameRef} transform="rotate(180 50 20)">
                  <path
                    d="M 36 20 Q 50 -34 50 -48 Q 50 -34 64 20 Z"
                    fill="url(#apolloPlumeFlame)"
                    filter="url(#apolloGlow)"
                    opacity="0.95"
                  />
                  <path
                    d="M 42 20 Q 50 -20 50 -30 Q 50 -20 58 20 Z"
                    fill="#FFFFFF"
                  />
                  <ellipse cx="50" cy="-8" rx="3.5" ry="7" fill="#FFEA00" opacity="0.9" />
                </g>
                <path d="M 30 52 L 10 30 L 12 20 L 30 32 Z" fill="url(#apolloCrimson)" stroke="#0F172A" strokeWidth="1" />
                <path d="M 70 52 L 90 30 L 88 20 L 70 32 Z" fill="url(#apolloCrimson)" stroke="#0F172A" strokeWidth="1" />
                <polygon points="33,20 42,20 40,10 35,10" fill="url(#apolloNozzle)" stroke="#0F172A" strokeWidth="0.8" />
                <polygon points="45,20 55,20 54,8 46,8" fill="url(#apolloNozzle)" stroke="#0F172A" strokeWidth="0.8" />
                <polygon points="58,20 67,20 65,10 60,10" fill="url(#apolloNozzle)" stroke="#0F172A" strokeWidth="0.8" />
                <rect x="30" y="20" width="40" height="46" fill="url(#apolloHullWhite)" stroke="#0F172A" strokeWidth="1.2" />
                <rect x="30" y="20" width="10" height="24" fill="url(#apolloDark)" />
                <rect x="50" y="20" width="10" height="24" fill="url(#apolloDark)" />
                <rect x="40" y="20" width="10" height="6" fill="url(#apolloCrimson)" />
                <rect x="60" y="20" width="10" height="6" fill="url(#apolloCrimson)" />
                <line x1="30" y1="20" x2="30" y2="66" stroke="#0F172A" strokeWidth="1.5" />
                <line x1="70" y1="20" x2="70" y2="66" stroke="#0F172A" strokeWidth="1.5" />
                <line x1="49.5" y1="20" x2="49.5" y2="66" stroke="#CBD5E1" strokeWidth="1" strokeDasharray="3 2" />
                <rect x="29" y="66" width="42" height="4" fill="url(#apolloCrimson)" stroke="#0F172A" strokeWidth="1" />
              </g>

              {/* ═══ UPPER STAGE 2 (S-II) & ORBITAL SPACECRAFT ═══ */}
              <g id="apolloOrbitalSpacecraft">
                <rect x="31" y="70" width="38" height="34" fill="url(#apolloHullWhite)" stroke="#0F172A" strokeWidth="1.2" />
                <rect x="31" y="80" width="10" height="14" fill="url(#apolloDark)" />
                <rect x="59" y="80" width="10" height="14" fill="url(#apolloDark)" />
                <rect x="41" y="85" width="18" height="4" fill="url(#apolloCrimson)" />
                <polygon points="31,104 69,104 66,114 34,114" fill="url(#apolloDark)" stroke="#0F172A" strokeWidth="1" />
                <rect x="34" y="114" width="32" height="22" fill="url(#apolloHullWhite)" stroke="#0F172A" strokeWidth="1.2" />
                <rect x="34" y="130" width="16" height="6" fill="url(#apolloCrimson)" />
                <rect x="50" y="130" width="16" height="6" fill="url(#apolloDark)" />
                <polygon points="34,136 66,136 60,150 40,150" fill="url(#apolloHullWhite)" stroke="#0F172A" strokeWidth="1.2" />
                <polygon points="46,148 54,148 53,142 47,142" fill="url(#apolloNozzle)" stroke="#0F172A" strokeWidth="0.8" />
                <rect x="40" y="150" width="20" height="10" fill="url(#apolloHullWhite)" stroke="#0F172A" strokeWidth="1" />
                <rect x="44" y="150" width="12" height="3" fill="url(#apolloCrimson)" />
                <polygon points="40,160 60,160 52,169 48,169" fill="url(#apolloCrimson)" stroke="#0F172A" strokeWidth="1" />
                <circle cx="50" cy="164" r="2" fill="#00C9FF" stroke="#FFFFFF" strokeWidth="0.6" />
              </g>

              {/* ═══ LAUNCH ESCAPE SYSTEM (LES TOWER) ═══ */}
              <g ref={lesTowerRef} id="lesEscapeTower">
                <rect x="47" y="169" width="6" height="2" fill="url(#apolloDark)" />
                <line x1="48" y1="171" x2="49.5" y2="176" stroke="#64748B" strokeWidth="1" />
                <line x1="52" y1="171" x2="50.5" y2="176" stroke="#64748B" strokeWidth="1" />
                <line x1="48" y1="174" x2="52" y2="174" stroke="#64748B" strokeWidth="0.8" />
                <rect x="48.5" y="176" width="3" height="4" fill="url(#apolloCrimson)" />
                <line x1="50" y1="180" x2="50" y2="187" stroke="#0F172A" strokeWidth="1.5" strokeLinecap="round" />
              </g>
            </svg>
          </div>

          {/* 12-Step Alternating Interactive Timeline Grid */}
          <div className="flex flex-col gap-14 lg:gap-20">
            {projectSteps.map((step, index) => {
              const isEven = index % 2 === 0;
              const isLast = index === projectSteps.length - 1;

              return (
                <div
                  key={step.num}
                  className={`relative flex items-center w-full ${
                    isEven ? 'lg:justify-start' : 'lg:justify-end'
                  }`}
                >
                  {/* Invisible Anchor Point for SVG Zig-Zag Path Calculation */}
                  <div
                    className={`timeline-anchor-point absolute top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none ${
                      isEven ? 'left-6 lg:left-[46%]' : 'left-6 lg:left-[54%]'
                    }`}
                  ></div>

                  {/* Milestone Node on the Card Border */}
                  <div
                    className="timeline-track-node absolute left-6 lg:left-1/2 -translate-x-1/2 w-5 h-5 rounded-full border-4 border-white shadow-md z-10 transition-transform"
                    style={{ backgroundColor: index === 0 ? '#E21E4C' : '#E5E7EB' }}
                  ></div>

                  {/* Step Card with Glowing Borders (Special Landing Base Theme on Card 12) */}
                  <div
                    className={`timeline-step-card w-full lg:w-[46%] pl-12 sm:pl-14 lg:pl-8 p-6 sm:p-7 rounded-2xl border bg-white transition-all duration-300 flex flex-col gap-4 group cursor-pointer relative ${
                      isLast
                        ? isLanded
                          ? 'border-[#0ae448] shadow-[0_0_35px_rgba(10,228,72,0.25)] ring-2 ring-[#0ae448]/40'
                          : 'border-primary/40 shadow-[0_6px_25px_rgba(226,30,76,0.08)]'
                        : currentStep === index + 1
                        ? 'border-primary shadow-lg ring-2 ring-primary/20'
                        : 'border-border-subtle shadow-[0_6px_25px_rgba(0,0,0,0.04)] hover:border-primary hover:shadow-xl'
                    }`}
                  >
                    {/* Card Header: Prominent Enlarged Dark Pink Number Circle + Category Badge + Icon */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3.5">
                        <span className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full text-white flex items-center justify-center font-mono text-xl sm:text-2xl font-black tracking-tight shadow-lg border-2 border-white/95 group-hover:scale-110 transition-all shrink-0 ${
                          isLast && isLanded
                            ? 'bg-gradient-to-br from-[#0ae448] via-[#05ba39] to-[#048729] shadow-[#0ae448]/40'
                            : 'bg-gradient-to-br from-[#E21E4C] via-[#D81B47] to-[#A91639] shadow-primary/35'
                        }`}>
                          {step.num}
                        </span>
                        <span className={`font-mono text-xs font-bold tracking-wider px-3.5 py-1.5 rounded-full border ${
                          isLast && isLanded
                            ? 'bg-[#EBFDF0] text-[#05ba39] border-[#0ae448]/30'
                            : 'bg-[#FFF0F2] text-primary border-primary/20'
                        }`}>
                          {isLast && isLanded ? 'TOUCHDOWN CONFIRMED' : step.category}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[11px] text-text-muted hidden sm:inline">
                          {step.milestone}
                        </span>
                        <span className={`material-symbols-outlined text-[24px] group-hover:scale-110 transition-transform ${
                          isLast && isLanded ? 'text-[#05ba39]' : 'text-primary'
                        }`}>
                          {isLast && isLanded ? 'task_alt' : step.icon}
                        </span>
                      </div>
                    </div>

                    {/* Step Title & Description */}
                    <div>
                      <h4 className="font-headline text-lg sm:text-xl font-extrabold text-[#11141A] group-hover:text-primary transition-colors leading-snug">
                        {step.title}
                      </h4>
                      <p className="font-sans text-sm text-text-muted leading-relaxed mt-2">
                        {step.desc}
                      </p>
                    </div>

                    {/* Special Landing Base Status for Card 12 */}
                    {isLast && isLanded && (
                      <div className="flex items-center gap-2 py-2 px-3 bg-[#EBFDF0] border border-[#0ae448]/30 rounded-xl">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#0ae448] animate-ping"></span>
                        <span className="font-mono text-xs font-bold text-[#048729]">
                          MISSION SUCCESSFUL // SAFE TOUCHDOWN AT COMMAND BASE
                        </span>
                      </div>
                    )}

                    {/* Footer Milestone Pill */}
                    <div className="mt-auto pt-3.5 border-t border-border-subtle flex items-center justify-between font-mono text-xs">
                      <span className="text-text-muted font-medium">CORE VALUE</span>
                      <span className={isLast && isLanded ? 'text-[#05ba39] font-bold' : 'text-primary font-bold'}>
                        {step.highlight}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
