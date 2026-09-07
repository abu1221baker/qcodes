import React from 'react';
import GalleryCard from './GalleryCard';
import { galleryProjects } from './galleryData';

export default function GalleryGrid({ activeFilter, onSelectProject }) {
  const filteredProjects = galleryProjects.filter((p) => {
    if (activeFilter === 'all') return true;
    return p.category === activeFilter;
  });

  return (
    <section className="relative px-4 sm:px-8 xl:px-12 pb-16 max-w-[1720px] mx-auto w-full">
      <div className="w-full" id="spatial-stage">
        {filteredProjects.map((project) => (
          <GalleryCard
            key={project.id}
            project={project}
            onSelect={onSelectProject}
          />
        ))}
      </div>
    </section>
  );
}
