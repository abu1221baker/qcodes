import React from 'react';
import Layout from '../components/layout/Layout';
import ContactStatusHud from '../components/contact/ContactStatusHud';
import ContactHero from '../components/contact/ContactHero';
import ContactCyberForm from '../components/contact/ContactCyberForm';
import ContactGlobeDeck from '../components/contact/ContactGlobeDeck';
import ContactFaq from '../components/contact/ContactFaq';
import '../styles/contact-page.css';

export default function ContactPage() {
  return (
    <Layout>
      <div className="flex flex-col w-full max-w-full overflow-x-hidden tech-grid-bg">
        {/* 1. Top Telemetric Status HUD Bar */}
        <ContactStatusHud />

        {/* 2. High-Tech Hero Header with Contact us-cuate.svg */}
        <ContactHero />

        {/* 3. Main Form & 3D Interactive Globe Section */}
        <section className="max-w-[1440px] mx-auto px-4 sm:px-8 py-12 lg:py-16 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Left 7 Columns: 5-Module Cyber Terminal Form */}
            <div className="lg:col-span-7">
              <ContactCyberForm />
            </div>

            {/* Right 5 Columns: 3D Globe Terminal Deck & Endpoints */}
            <div className="lg:col-span-5">
              <ContactGlobeDeck />
            </div>
          </div>
        </section>

        {/* 4. FAQ Knowledge Base Section */}
        <ContactFaq />
      </div>
    </Layout>
  );
}
