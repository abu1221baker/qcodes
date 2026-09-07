import React from 'react';
import Layout from '../components/layout/Layout';
import HeroSection from '../components/home/HeroSection';
import FanCardDeck from '../components/home/FanCardDeck';
import CtaSection from '../components/home/CtaSection';

export default function HomePage() {
  return (
    <Layout>
      <div className="flex flex-col w-full">
        {/* 1. Hero Section with 3D Core Three.js WebGL Engine & Telemetry HUD */}
        <HeroSection />

        {/* 2. Interactive 7-Card Hand-Held Fan Spread Services Section */}
        <FanCardDeck />

        {/* 3. Initiate Enterprise Final Call To Action Section */}
        <CtaSection />
      </div>
    </Layout>
  );
}
