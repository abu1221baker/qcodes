import React from 'react';

const faqs = [
  {
    q: 'What is the typical turnaround for architectural review?',
    a: 'Once you submit your specifications, our solutions architects review your requirements and respond with initial architecture mapping, sprint estimates, and feasibility within 24 to 48 business hours.',
  },
  {
    q: 'How are intellectual property (IP) and data privacy protected?',
    a: 'All project engagements are backed by binding mutual Non-Disclosure Agreements (NDAs). Full IP ownership and repository rights transfer 100% to your enterprise upon project delivery.',
  },
  {
    q: 'What stack and deployment architectures are supported?',
    a: 'We specialize in React, Next.js, Node.js, Python/Django, TypeScript, WebGL/Three.js spatial computing, AWS/GCP Kubernetes cloud orchestration, PostgreSQL, and enterprise CRM solutions.',
  },
  {
    q: 'Can Qcodes Infotech handle both new builds and legacy system modernizations?',
    a: 'Yes. We engineer greenfield autonomous architectures from discovery to launch, and we also execute zero-downtime microservice migrations, monolith refactoring, and database replatforming for established enterprises.',
  },
];

export default function ContactFaq() {
  return (
    <section className="max-w-[1440px] mx-auto px-4 sm:px-8 py-16 border-t border-border-subtle">
      <div className="max-w-3xl mx-auto flex flex-col gap-8">
        
        <div className="text-center flex flex-col gap-2">
          <span className="font-mono text-xs text-primary font-bold uppercase tracking-wider">
            [KNOWLEDGE_BASE // FAQ]
          </span>
          <h2 className="font-headline text-2xl sm:text-3xl font-extrabold text-[#1C1C1C]">
            Everything You Need to Know Before Kickoff
          </h2>
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, idx) => (
            <details
              key={idx}
              className="group bg-surface-dim rounded-2xl border border-border-subtle p-5 transition-all [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex items-center justify-between cursor-pointer font-headline text-sm font-bold text-text-main select-none">
                <span>{faq.q}</span>
                <span className="material-symbols-outlined text-text-muted group-open:rotate-180 transition-transform">
                  expand_more
                </span>
              </summary>
              <p className="font-sans text-xs sm:text-sm text-text-muted mt-3 leading-relaxed font-normal">
                {faq.a}
              </p>
            </details>
          ))}
        </div>

      </div>
    </section>
  );
}
