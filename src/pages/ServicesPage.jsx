import React from 'react';
import Layout from '../components/layout/Layout';
import ServicesHero from '../components/services/ServicesHero';
import ServicesOrbitMatrix from '../components/services/ServicesOrbitMatrix';
import ServicesGrid from '../components/services/ServicesGrid';
import ServicesCta from '../components/services/ServicesCta';
import '../styles/services-page.css';

export default function ServicesPage() {
  return (
    <Layout>
      <div className="flex flex-col w-full">
        {/* 1. Services Hero Narrative & service.svg Banner */}
        <ServicesHero />

        {/* 2. Interactive 3D 7-Node Technology Satellite Orbit Matrix */}
        <ServicesOrbitMatrix />

        {/* 3. Alternating 2-3 Grid of 10 Production-Grade Technology Clusters */}
        <ServicesGrid />

        {/* 4. Bottom Call To Action */}
        <ServicesCta />
      </div>
    </Layout>
  );
}
