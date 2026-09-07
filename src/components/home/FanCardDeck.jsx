import React, { useState, useEffect, useRef } from 'react';
import '../../styles/fan-cards.css';
import {
  MobileDevSvg,
  WebDevSvg,
  WebsiteDesignerSvg,
  ServerAmicoSvg,
  SearchEnginesAmicoSvg,
  CrmSvg,
  OnlineTestSvg,
} from '../../assets';

const fanCardsData = [
  {
    id: 1,
    badge: '01',
    title: 'Mobile Development',
    desc: 'Cutting-edge iOS & Android applications with native performance, reactive state, and offline-first persistence.',
    img: MobileDevSvg,
    url: 'https://qcodesinfotech.com/mobile-app-development',
    cardClass: 'card-1',
  },
  {
    id: 2,
    badge: '02',
    title: 'Web Development',
    desc: 'High-throughput full-stack web platforms engineered with modern frameworks, SSR, and micro-frontend architectures.',
    img: WebDevSvg,
    url: 'https://qcodesinfotech.com/website-development',
    cardClass: 'card-2',
  },
  {
    id: 3,
    badge: '03',
    title: 'UI / UX Designing',
    desc: 'User-centric interactive design systems, responsive wireframes, design tokens, and high-fidelity Figma prototypes.',
    img: WebsiteDesignerSvg,
    url: 'https://qcodesinfotech.com/ui-ux-design',
    cardClass: 'card-3',
  },
  {
    id: 4,
    badge: '04',
    title: 'Cloud Computing',
    desc: 'Distributed Kubernetes orchestration, serverless pipelines, multi-cloud AWS & GCP zero-trust infrastructure.',
    img: ServerAmicoSvg,
    url: 'https://qcodesinfotech.com/cloud',
    cardClass: 'card-4',
  },
  {
    id: 5,
    badge: '05',
    title: 'Digital Marketing',
    desc: 'Data-driven omnichannel campaigns, programmatic SEO, conversion funnels, and real-time marketing analytics.',
    img: SearchEnginesAmicoSvg,
    url: 'https://qcodesinfotech.com/digital',
    cardClass: 'card-5',
  },
  {
    id: 6,
    badge: '06',
    title: 'Technical Support',
    desc: '24/7 mission-critical operational support, automated alerting, L1–L3 escalation SLAs, and incident triage.',
    img: CrmSvg,
    url: 'https://qcodesinfotech.com/technical',
    cardClass: 'card-6',
  },
  {
    id: 7,
    badge: '07',
    title: 'Software Testing',
    desc: 'Automated CI/CD end-to-end testing, QA test matrices, load regression, and SOC-2 security verification.',
    img: OnlineTestSvg,
    url: 'https://qcodesinfotech.com/software-testing',
    cardClass: 'card-7',
  },
];

export default function FanCardDeck() {
  const [activeCardId, setActiveCardId] = useState(null);
  const handRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (handRef.current && !handRef.current.contains(event.target)) {
        setActiveCardId(null);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleCardClick = (e, id) => {
    // If the click is on the explore button/tag, allow default link navigation
    if (e.target.closest('.card-tag')) {
      return;
    }
    e.preventDefault();
    setActiveCardId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="w-full bg-[#f8fafc] py-20 px-4 sm:px-8 relative overflow-hidden border-t border-border-subtle" id="services">
      <div className="max-w-[1700px] w-full mx-auto flex flex-col gap-14">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center gap-3 max-w-3xl mx-auto">
          <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-main tracking-tight">
            Our Services
          </h2>
          <p className="font-sans text-sm sm:text-base text-text-muted leading-relaxed max-w-2xl">
            Engineered for frontier scalability and high-concurrency production environments. Hover over or click any card to inspect deliverables and technical specifications.
          </p>
        </div>

        {/* 7-Card Hand-Held Fan Spread Deck */}
        <div className="cards-wrapper">
          <div className="card-hand" ref={handRef}>
            {fanCardsData.map((card) => {
              const isActive = activeCardId === card.id;
              return (
                <a
                  key={card.id}
                  href={card.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => handleCardClick(e, card.id)}
                  className={`fan-card ${card.cardClass} ${isActive ? 'is-active' : ''}`}
                >
                  <div className="card-content">
                    <span className="badge">{card.badge}</span>
                    <div className="card-image-wrapper">
                      <img src={card.img} alt={card.title} className="card-image" loading="lazy" />
                    </div>
                    <h3 className="card-title">{card.title}</h3>
                    <p className="card-description">{card.desc}</p>
                    <div className="card-tag">
                      <i className="fas fa-arrow-right"></i> explore
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        {/* Click Tip & Status Bar */}
        <div className="flex items-center justify-center gap-2 text-text-muted font-mono text-xs">
          <span className="material-symbols-outlined text-primary text-[18px] animate-bounce">touch_app</span>
          <span>HOVER OR CLICK ANY CARD TO INSPECT // CLICK AGAIN OR OUTSIDE TO RESET DECK</span>
        </div>

      </div>
    </section>
  );
}
