import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import GalleryHero from '../components/gallery/GalleryHero';
import GalleryFilterDock from '../components/gallery/GalleryFilterDock';
import GalleryGrid from '../components/gallery/GalleryGrid';
import GalleryClientsSection from '../components/gallery/GalleryClientsSection';
import GalleryVision from '../components/gallery/GalleryVision';
import GalleryDetailModal from '../components/gallery/GalleryDetailModal';
import '../styles/gallery-page.css';

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const handleResetCamera = () => {
    setActiveFilter('all');
    setSelectedProject(null);
  };

  return (
    <Layout>
      <div className="flex flex-col w-full bg-surface-dim/40 min-h-screen">
        {/* 1. Hero Section with galary.svg */}
        <GalleryHero />

        {/* 2. Interactive Category Filter Dock */}
        <GalleryFilterDock
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
          onResetCamera={handleResetCamera}
        />

        {/* 3. Alternating 2-3 Grid of 10 Showcase Project Cards */}
        <GalleryGrid
          activeFilter={activeFilter}
          onSelectProject={setSelectedProject}
        />

        {/* 4. Our Clients Section with Interactive 3D Pullable ID Cards */}
        <GalleryClientsSection />

        {/* 5. Our Vision Section with our_vission.svg */}
        <GalleryVision />

        {/* 6. Project Detail Inspection Modal / Drawer */}
        <GalleryDetailModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </Layout>
  );
}
