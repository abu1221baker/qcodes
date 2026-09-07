import React, { useState, useEffect, useRef } from 'react';
import ClientsIDCardCanvas from '../three/ClientsIDCardCanvas';
import CardLottieLoader from './CardLottieLoader';

const clientsData = [
  {
    id: 1,
    name: 'AimHundred',
    badgeId: 'QC-CLNT-01',
    logo: '/clients/aim-hundred.d3048576.webp',
    industry: 'Education & Employment Tech',
    tier: 'GLOBAL TIER 1',
    metric: '99.99% Core Uptime',
    website: 'http://aimhundred.com/',
    techStack: ['React Native', 'AWS Cloud Infrastructure', 'FastAPI Microservices', 'PostgreSQL'],
    summary: 'Empowering learners by democratizing Education, Employability and Employment. Actively listening to & having empathy for learners to create solutions that enrich them.',
  },
  {
    id: 2,
    name: 'ArvzApp',
    badgeId: 'QC-CLNT-02',
    logo: '/clients/arvzapp.5151fc2a.webp',
    industry: 'Travel & Local Navigation',
    tier: 'ENTERPRISE PARTNER',
    metric: '500K+ Active Drivers',
    website: null,
    techStack: ['Next.js SSR', 'Real-Time GeoSockets', 'Redis Cluster', 'Kafka Streams'],
    summary: 'Explore like a local with ArvzApp! Arvz is designed for travelers and locals to discover and connect instantly to the best events, businesses, restaurants and travel accommodations in real time. Arvz is the perfect app to guide you to your destination before during and after your visit. Know before you go. Let ArvzApp lead you to your destination!',
  },
  {
    id: 3,
    name: 'Boland Survey',
    badgeId: 'QC-CLNT-03',
    logo: '/clients/boland.8f95d33d.webp',
    industry: 'HR Compensation & Non-Profit',
    tier: 'STRATEGIC ALLIANCE',
    metric: '20+ Years Compensation Data',
    website: 'https://survey.bolandsurvey.com/',
    techStack: ['Headless Commerce', 'GraphQL Federation', 'Elasticsearch', 'Docker'],
    summary: 'For over 20 years, the Boland Survey has been the most comprehensive source of total HR compensation data for the Canadian non-profit sector. Owned and operated by CCVO, a registered charity, the Boland Survey collects critical information on more than 80 positions and provides detailed regional and national reports. It is unparalleled in its level of detail and sector-specific job positions.',
  },
  {
    id: 4,
    name: 'Brands.com',
    badgeId: 'QC-CLNT-04',
    logo: '/clients/brandscom.c82ac1e1.webp',
    industry: 'Brand Marketplace & Video Marketing',
    tier: 'ENTERPRISE PARTNER',
    metric: '180M+ Monthly Impressions',
    website: 'https://brands.com/',
    techStack: ['Tailwind CSS / Vanilla CSS', 'Edge CDN Pipelines', 'Serverless Node', 'MongoDB'],
    summary: "Brands.com is a marketplace for only the most distinctive and memorable brand names in the world. Having a top-tier brand name can significantly boost a business's growth potential. With a winning combination of a brilliant business concept and a standout brand name, there are no limits to what your business can achieve. In addition to our brand name marketplace, Brands.com also provides video marketing services. Our team creates engaging and entertaining animated videos that promote your brand.",
  },
  {
    id: 5,
    name: 'C Genial Production',
    badgeId: 'QC-CLNT-05',
    logo: '/clients/cegenial-production.d360c30e.webp',
    industry: 'Cinema & Creative Media',
    tier: 'STRATEGIC ALLIANCE',
    metric: '4K Multi-Track Video Stream',
    website: 'http://cgenialproduction.qcodesinfotech.com/',
    techStack: ['WebGL / Three.js', 'FFmpeg Cloud Workers', 'AWS S3 Glacier', 'Next.js'],
    summary: 'We are a group of professional pioneers who are committed to build and create solutions for the challenges the world is now facing.',
  },
  {
    id: 6,
    name: 'Great Booking',
    badgeId: 'QC-CLNT-06',
    logo: '/clients/great-booking.d7563988.webp',
    industry: 'Hospitality & Cloud Reservations',
    tier: 'GLOBAL TIER 1',
    metric: '12K Bookings / Minute',
    website: 'https://greatbooking.ca/',
    techStack: ['Kubernetes', 'Go Microservices', 'React 19', 'Postgres TimescaleDB'],
    summary: 'What is Great Booking? Ever tried to book camping site only to find that all slots are booked? How frustrating is that? With Great Booking, we hope to find a solution to the problem of extreme wait times when booking - with the use of technology.',
  },
  {
    id: 7,
    name: 'Live Well PEI',
    badgeId: 'QC-CLNT-07',
    logo: '/clients/livewell.abac99b0.webp',
    industry: 'Public Health & Wellness Systems',
    tier: 'ENTERPRISE PARTNER',
    metric: 'Government Certified Health',
    website: 'http://livewelldev2.albertatechworks.com/',
    techStack: ['FHIR API Integration', 'End-to-End Encryption', 'React Native', 'GCP Healthcare API'],
    summary: "Live Well PEI is the official voice of the Health Promotion Unit, PEI Chief Public Health Office (CPHO). The Chief Public Health Office (CPHO) is a division within the Government of Prince Edward Island's Department of Health and Wellness. The CPHO promotes and protects the health of PEI residents and prevents disease and injury through leadership, partnership, and excellence in public health. Our goal in the Health Promotion Unit is to foster local communities and environments that support a healthy, resilient population that is less reliant on health care and services.",
  },
  {
    id: 8,
    name: 'Pathways to Prevention',
    badgeId: 'QC-CLNT-08',
    logo: '/clients/pathways-to-prention.cc26cb5a.webp',
    industry: 'Community & Developmental Health',
    tier: 'STRATEGIC ALLIANCE',
    metric: '100% WCAG AAA Compliant',
    website: 'https://pathwaystoprevention.ca/',
    techStack: ['Accessible Next.js', 'PostgreSQL', 'Tailwind', 'Automated CI/CD'],
    summary: 'Imagine a future where developmental trauma no longer exists. Where children need not be removed from their families, generational patterns of abuse, neglect, violence, and addiction are broken, and families are empowered to meet the developmental needs of their babies from the time the baby is in the womb. Picture a world where young people thrive within families and communities that support their mental health and well-being. Parents, doctors, teachers, caregivers, clergy, social workers, and coaches have a shared understanding of brain development and the impacts of trauma. As a result, they are equipped with the knowledge, tools, and support to meet children’s developmental needs effectively.',
  },
  {
    id: 9,
    name: 'Your Trailer Depot',
    badgeId: 'QC-CLNT-09',
    logo: '/clients/trailer-depot.5dee4c78.webp',
    industry: 'Automotive & Logistics Fleet',
    tier: 'ENTERPRISE PARTNER',
    metric: '45+ Dealership Hubs',
    website: 'http://trailerdepot.qcodesinfotech.com/',
    techStack: ['Vue / React Dynamic UI', 'Python Django API', 'AWS RDS', 'Stripe Connect'],
    summary: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
  },
];

export default function GalleryClientsSection() {
  const [selectedClientId, setSelectedClientId] = useState(1);
  const [pendingClientId, setPendingClientId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [loadedClients, setLoadedClients] = useState(clientsData);
  const [isFlipped, setIsFlipped] = useState(false);
  const loadingTimerRef = useRef(null);

  const isCardReadyRef = useRef(true);
  const startTimeRef = useRef(0);

  // Pre-load all client logo images into memory
  useEffect(() => {
    const promises = clientsData.map((client) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.crossOrigin = 'anonymous';
        img.src = client.logo;
        img.onload = () => resolve({ ...client, imageObj: img });
        img.onerror = () => resolve({ ...client, imageObj: null });
      });
    });

    Promise.all(promises).then((results) => {
      setLoadedClients(results);
    });
  }, []);

  // Cleanup loading timer on unmount
  useEffect(() => {
    return () => {
      if (loadingTimerRef.current) {
        clearTimeout(loadingTimerRef.current);
      }
    };
  }, []);

  const handleClientSelect = (clientId) => {
    if (clientId === selectedClientId) return;

    if (loadingTimerRef.current) {
      clearTimeout(loadingTimerRef.current);
    }

    isCardReadyRef.current = false;
    startTimeRef.current = Date.now();

    setPendingClientId(clientId);
    setIsLoading(true);
    setIsFlipped(false);
    // Switch client ID immediately so Three.js starts rendering the new card under the blur overlay
    setSelectedClientId(clientId);

    // Enforce at least 3 seconds (3000ms) of loading animation
    loadingTimerRef.current = setTimeout(() => {
      // If card is already loaded, turn off loader; otherwise wait for onCardReady
      if (isCardReadyRef.current) {
        setIsLoading(false);
        setPendingClientId(null);
      }
    }, 3000);
  };

  const handleCardReady = (readyClientId) => {
    if (readyClientId === selectedClientId) {
      isCardReadyRef.current = true;
      const elapsed = Date.now() - startTimeRef.current;
      // If 3 seconds have already passed, turn off loading immediately
      if (elapsed >= 3000) {
        setIsLoading(false);
        setPendingClientId(null);
      }
    }
  };

  const activeClient = loadedClients.find((c) => c.id === selectedClientId) || loadedClients[0];

  return (
    <section className="w-full py-20 px-4 sm:px-8 xl:px-12 bg-surface-subtle/50 border-t border-border-subtle relative overflow-hidden" id="clients">
      {/* Background Ambient Decorator Glows */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-32 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1540px] mx-auto flex flex-col gap-10 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-light border border-primary/20 text-primary shadow-xs">
            <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
            <span className="font-mono text-xs uppercase font-bold tracking-wider">
              CLIENT PARTNERS // 2026 MATRIX
            </span>
          </div>
          <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1C1C1C] tracking-tight">
            Our Clients
          </h2>
          <p className="font-sans text-sm sm:text-base text-text-muted leading-relaxed max-w-2xl">
            Global enterprises, innovative scale-ups, and industry leaders powered by Qcodes deep-tech architecture. Interact with our 3D client credential badges below.
          </p>
        </div>

        {/* 3-Column Interactive Workspace Grid (Sidebar + 3D ID Card + Details) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start bg-white border border-border-subtle rounded-3xl p-4 sm:p-7 lg:p-8 shadow-lg shadow-black/3">
          
          {/* Left Column: Company Selection Sidebar (3 Cols) */}
          <div className="lg:col-span-3 flex flex-col gap-3 bg-surface-subtle/60 p-3 sm:p-4 rounded-2xl border border-border-subtle/80">
            <div className="flex items-center justify-between px-2 py-1">
              <span className="font-mono text-xs font-bold text-text-muted uppercase tracking-wider">
                Select Client
              </span>
              <span className="font-mono text-[10px] px-2 py-0.5 rounded-md bg-primary/10 text-primary font-semibold">
                9 Active
              </span>
            </div>

            {/* Vertical Company Selection List */}
            <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-y-auto lg:max-h-[600px] scrollbar-thin scrollbar-thumb-slate-300 pb-2 lg:pb-0 pr-1">
              {loadedClients.map((client) => {
                const isSelected = client.id === (pendingClientId || selectedClientId);
                return (
                  <button
                    key={client.id}
                    type="button"
                    onClick={() => handleClientSelect(client.id)}
                    className={`w-full text-left p-2.5 sm:p-3 rounded-xl transition-all duration-200 flex items-center gap-3 cursor-pointer shrink-0 border ${
                      isSelected
                        ? 'bg-primary text-white border-primary shadow-md shadow-primary/20 scale-[1.01]'
                        : 'bg-white hover:bg-white/80 text-text-main border-border-subtle hover:border-primary/40'
                    }`}
                  >
                    {/* Mini Company Logo Thumbnail */}
                    <div className="w-10 h-10 rounded-lg bg-white p-1 border border-slate-200/80 flex items-center justify-center shrink-0 shadow-2xs overflow-hidden">
                      <img
                        src={client.logo}
                        alt={client.name}
                        className="w-full h-full object-contain"
                      />
                    </div>

                    {/* Company Info */}
                    <div className="flex flex-col min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-1">
                        <span className="font-headline text-xs sm:text-sm font-bold truncate">
                          {client.name}
                        </span>
                        <span className={`w-2 h-2 rounded-full shrink-0 ${isSelected ? 'bg-white animate-pulse' : 'bg-slate-300'}`} />
                      </div>
                      <span className={`font-mono text-[10px] truncate ${isSelected ? 'text-white/80' : 'text-text-muted'}`}>
                        {client.badgeId} • {client.tier.replace('GLOBAL ', '').replace('PARTNER', 'PTR')}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Middle Column: 3D Three.js ID Badge Canvas (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col items-center relative bg-gradient-to-b from-[#f8fafc] via-[#f1f5f9] to-[#e2e8f0] rounded-2xl overflow-hidden border border-slate-200/90 shadow-inner min-h-[540px]">
            
            {/* Lottie Bored Hand Loader Overlay when changing company */}
            <CardLottieLoader active={isLoading} />

            {/* Ambient Radial Spotlight inside light stage */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(255,255,255,0.9),rgba(241,245,249,0.3))] pointer-events-none" />

            {/* Top Canvas HUD Overlay */}
            <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-20 pointer-events-none font-mono text-[11px] text-slate-700">
              <div className="flex items-center gap-2 bg-white/85 backdrop-blur-md px-3 py-1 rounded-full border border-slate-200 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                <span className="font-semibold text-slate-800">SPRING_PHYSICS // ONLINE</span>
              </div>
              <div className="bg-white/85 backdrop-blur-md px-3 py-1 rounded-full border border-slate-200 font-semibold text-slate-800 shadow-xs">
                <span>{activeClient.badgeId}</span>
              </div>
            </div>

            {/* Three.js Canvas */}
            <ClientsIDCardCanvas
              activeClient={activeClient}
              isFlipped={isFlipped}
              onToggleFlip={() => setIsFlipped((prev) => !prev)}
              onCardReady={handleCardReady}
            />

            {/* Bottom Interaction Tip & Controls Bar */}
            <div className="w-full bg-white/90 backdrop-blur-md border-t border-slate-200/90 p-3 px-4 sm:px-6 flex flex-wrap items-center justify-between gap-2 z-20 shadow-xs">
              <div className="flex items-center gap-2 font-mono text-[11px] text-slate-700">
                <span className="material-symbols-outlined text-primary text-[16px] animate-bounce">pan_tool</span>
                <span className="font-medium">DRAG TO PULL &amp; SWING</span>
              </div>

              <button
                type="button"
                onClick={() => setIsFlipped((prev) => !prev)}
                className="px-3 py-1.5 rounded-lg bg-primary hover:bg-[#c2143c] text-white font-mono text-xs font-semibold flex items-center gap-1.5 transition-all shadow-sm cursor-pointer ml-auto"
              >
                <span className="material-symbols-outlined text-[15px]">3d_rotation</span>
                <span>{isFlipped ? 'FRONT' : 'FLIP 180°'}</span>
              </button>
            </div>
          </div>

          {/* Right Column: Client Profile, Narrative & Technical Specs (4 Cols) */}
          <div className="lg:col-span-4 flex flex-col gap-5">
            
            {/* Top Brand Showcase Header with Large Logo Display */}
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-surface-subtle border border-border-subtle shadow-xs">
              <div className="w-24 h-20 sm:w-28 sm:h-24 rounded-xl bg-white p-2.5 border border-border-subtle flex items-center justify-center overflow-hidden shrink-0 shadow-sm">
                <img
                  src={activeClient.logo}
                  alt={activeClient.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col gap-1 min-w-0">
                <span className="px-2.5 py-0.5 rounded-full bg-primary/10 text-primary font-mono text-[10px] font-bold tracking-wider border border-primary/20 self-start">
                  {activeClient.tier}
                </span>
                <h3 className="font-headline text-lg sm:text-xl font-extrabold text-text-main tracking-tight truncate">
                  {activeClient.name}
                </h3>
                <p className="font-sans text-xs text-primary font-semibold truncate">
                  {activeClient.industry}
                </p>
                <span className="font-mono text-[10px] text-text-muted">
                  CREDENTIAL #{activeClient.badgeId}
                </span>
              </div>
            </div>

            {/* Client About Description Narrative */}
            <div className="flex flex-col gap-1.5">
              <span className="font-mono text-xs text-text-main font-bold uppercase tracking-wider">
                About Company
              </span>
              <p className="font-sans text-xs sm:text-sm text-text-muted leading-relaxed max-h-48 overflow-y-auto pr-1 scrollbar-thin">
                {activeClient.summary}
              </p>
            </div>

            {/* View Website Button (if URL available) */}
            {activeClient.website && (
              <a
                href={activeClient.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-primary text-white font-mono text-xs font-semibold transition-all duration-200 shadow-sm shadow-slate-900/10 group"
              >
                <span>View Official Website</span>
                <span className="material-symbols-outlined text-[16px] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                  open_in_new
                </span>
              </a>
            )}

            {/* Metrics Callout Box */}
            <div className="grid grid-cols-2 gap-3 p-3.5 rounded-2xl bg-surface-subtle border border-border-subtle">
              <div className="flex flex-col">
                <span className="font-mono text-[10px] text-text-muted uppercase tracking-wider">Verified Scale</span>
                <span className="font-headline text-sm sm:text-base font-bold text-text-main mt-0.5 truncate">
                  {activeClient.metric}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-[10px] text-text-muted uppercase tracking-wider">Audit Status</span>
                <span className="font-headline text-sm sm:text-base font-bold text-emerald-600 mt-0.5 flex items-center gap-1">
                  <span className="material-symbols-outlined text-[15px]">verified</span>
                  Active Node
                </span>
              </div>
            </div>

            {/* Architecture Stack Deliverables */}
            <div className="flex flex-col gap-2">
              <span className="font-mono text-xs text-text-main font-semibold uppercase tracking-wider">
                Delivered Architecture Stacks:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {activeClient.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-lg bg-surface-base border border-border-subtle text-text-main font-mono text-[11px] flex items-center gap-1.5 shadow-2xs"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
