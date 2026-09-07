import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function GalleryDetailModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-end animate-fadeIn">
      {/* Backdrop Blur Scrim */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity cursor-pointer"
      ></div>

      {/* Right-Hand Contextual Metadata Panel */}
      <div className="relative w-full max-w-xl h-full bg-white border-l border-border-subtle shadow-2xl p-6 sm:p-8 overflow-y-auto flex flex-col justify-between z-10 animate-slideLeft">
        <div className="flex flex-col gap-6">
          
          {/* Panel Header */}
          <div className="flex items-center justify-between pb-3 border-b border-border-subtle">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse"></span>
              <span className="font-mono text-xs text-primary tracking-widest uppercase font-bold">
                NODE INSPECT // 3D HUD
              </span>
            </div>
            <button
              onClick={onClose}
              type="button"
              className="p-1.5 rounded-lg bg-surface-dim border border-border-subtle text-text-muted hover:text-text-main hover:bg-gray-100 transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-[20px]">close</span>
            </button>
          </div>

          {/* Project Titles & Role */}
          <div className="flex flex-col gap-1">
            <span className="font-mono text-xs text-primary uppercase tracking-widest font-semibold">
              {project.role}
            </span>
            <h2 className="font-headline text-2xl sm:text-3xl font-extrabold text-[#1C1C1C]">
              {project.title}
            </h2>
          </div>

          {/* Image & Wireframe Viewport Preview */}
          <div className="relative w-full rounded-2xl overflow-hidden border border-border-subtle shadow-sm bg-gray-950">
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-48 sm:h-56 object-cover object-top opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-4">
              <div className="flex items-center justify-between text-white font-mono text-[11px]">
                <span className="bg-primary/90 px-2.5 py-1 rounded-md font-bold">
                  {project.nodeTag}
                </span>
                <span className="bg-white/20 backdrop-blur-md px-2.5 py-1 rounded-md">
                  GSAP CAMERA LOCK
                </span>
              </div>
            </div>
          </div>

          {/* Live Enterprise Metrics Trio */}
          <div className="grid grid-cols-3 gap-3">
            <div className="p-3 rounded-xl bg-surface-dim border border-border-subtle flex flex-col gap-1">
              <span className="font-mono text-[10px] text-text-muted uppercase font-medium">IMPACT KPI</span>
              <span className="font-headline text-sm font-bold text-text-main">{project.metricA}</span>
            </div>
            <div className="p-3 rounded-xl bg-surface-dim border border-border-subtle flex flex-col gap-1">
              <span className="font-mono text-[10px] text-text-muted uppercase font-medium">RUNTIME</span>
              <span className="font-headline text-sm font-bold text-primary">{project.metricB}</span>
            </div>
            <div className="p-3 rounded-xl bg-surface-dim border border-border-subtle flex flex-col gap-1">
              <span className="font-mono text-[10px] text-text-muted uppercase font-medium">REACH</span>
              <span className="font-headline text-sm font-bold text-text-main">{project.metricC}</span>
            </div>
          </div>

          {/* Description Narrative */}
          <div className="flex flex-col gap-2">
            <span className="font-mono text-xs text-text-main uppercase tracking-wider font-bold">
              System Architecture &amp; Scope
            </span>
            <p className="font-sans text-sm text-text-muted leading-relaxed">
              {project.desc}
            </p>
          </div>

          {/* Technology Stack Pills */}
          <div className="flex flex-col gap-2">
            <span className="font-mono text-xs text-text-main uppercase tracking-wider font-bold">
              Integrated Stack
            </span>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1 rounded-lg bg-[#FFF0F2] border border-primary/20 font-mono text-[11px] text-primary font-semibold"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Drawer Action CTA */}
        <div className="pt-6 mt-6 flex items-center gap-3 border-t border-border-subtle">
          <Link
            to="/contact"
            className="flex-1 py-3 px-4 rounded-xl bg-primary text-white font-headline text-xs font-bold text-center shadow-lg shadow-primary/30 hover:bg-primary-dark transition-all flex items-center justify-center gap-2"
          >
            <span>Commission Project</span>
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </Link>
          <button
            onClick={onClose}
            type="button"
            className="px-5 py-3 rounded-xl bg-surface-dim border border-border-subtle font-headline text-xs font-semibold text-text-main hover:bg-gray-100 transition-colors cursor-pointer"
          >
            Dismiss
          </button>
        </div>
      </div>
    </div>
  );
}
