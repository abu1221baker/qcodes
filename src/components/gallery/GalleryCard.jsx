import React, { useRef } from 'react';

export default function GalleryCard({ project, onSelect }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 12;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px) scale3d(1, 1, 1)';
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={() => onSelect(project)}
      className="spatial-card group relative bg-white rounded-2xl overflow-hidden border border-border-subtle shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:border-primary/40 hover:shadow-[0_20px_48px_rgba(226,30,76,0.14)] transition-all duration-300 transform-gpu cursor-pointer flex flex-col justify-between"
    >
      <div>
        {/* Card Header Tag */}
        <div className="p-4 flex items-center justify-between bg-white border-b border-border-subtle">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-primary"></span>
            <span className="font-mono text-xs text-text-muted uppercase tracking-wider font-semibold">
              {project.nodeTag}
            </span>
          </div>
          <span className="font-mono text-[11px] px-2.5 py-0.5 rounded-full bg-red-50 text-primary font-semibold border border-red-100">
            {project.badge}
          </span>
        </div>

        {/* WebP Showcase Visual */}
        <div className="relative h-64 sm:h-72 md:h-80 w-full overflow-hidden bg-gray-950">
          <img
            src={project.img}
            alt={project.title}
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out opacity-95 group-hover:opacity-100"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
            <span className="px-3 py-1 rounded-lg bg-white/95 backdrop-blur-md font-mono text-xs text-text-main font-semibold shadow-sm">
              {project.badgeA}
            </span>
            <span className="px-3 py-1 rounded-lg bg-primary text-white backdrop-blur-md font-mono text-xs font-bold shadow-sm">
              {project.badgeB}
            </span>
          </div>
        </div>
      </div>

      {/* Card Info Footer */}
      <div className="p-6 flex flex-col gap-3 bg-white border-t border-border-subtle">
        <div className="flex items-baseline justify-between">
          <h2 className="font-headline text-xl text-text-main group-hover:text-primary transition-colors font-bold">
            {project.title}
          </h2>
          <span className="material-symbols-outlined text-text-muted group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-all text-[20px]">
            north_east
          </span>
        </div>
        <p className="font-sans text-xs text-text-muted line-clamp-2 leading-relaxed">
          {project.desc}
        </p>
        <div className="pt-1 flex flex-wrap gap-1.5">
          {project.stack.slice(0, 3).map((item) => (
            <span
              key={item}
              className="px-2.5 py-1 rounded-md bg-surface-dim border border-border-subtle font-mono text-[11px] text-text-muted font-medium"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
