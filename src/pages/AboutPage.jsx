import React from 'react';
import Layout from '../components/layout/Layout';
import ParallaxJourney from '../components/about/ParallaxJourney';
import AboutBanner from '../components/about/AboutBanner';
import FoundationsCarousel from '../components/about/FoundationsCarousel';
import AboutCta from '../components/about/AboutCta';

export default function AboutPage() {
  return (
    <Layout>
      <div className="flex flex-col w-full">
        {/* 1. GSAP Multi-Scene SVG ScrollTrigger Parallax Journey at the top */}
        <ParallaxJourney />

        {/* 2. Architecting Sovereign Digital Foundations Banner with aboutus.svg */}
        <AboutBanner />

        {/* 3. 14 Architectural Foundations Seamless GSAP Loop Carousel */}
        <FoundationsCarousel />

        {/* 4. Ready for Co-Engineering Call To Action */}
        <AboutCta />
      </div>
    </Layout>
  );
}
