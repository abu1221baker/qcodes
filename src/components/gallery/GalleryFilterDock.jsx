import React from 'react';

const filterCategories = [
  { id: 'all', name: 'All Systems', icon: 'grid_view', count: 10 },
  { id: 'ecommerce', name: 'E-Commerce', icon: 'shopping_cart', count: 3 },
  { id: 'enterprise-ai', name: 'Enterprise AI', icon: 'neurology', count: 2 },
  { id: 'mobile', name: 'Mobile Apps', icon: 'smartphone', count: 2 },
  { id: 'web-solutions', name: 'Web Solutions', icon: 'language', count: 3 },
];

export default function GalleryFilterDock({ activeFilter, onFilterChange, onResetCamera }) {
  return (
    <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 xl:px-12 mb-8">
      <div className="w-full flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 bg-white/95 backdrop-blur-xl p-2 sm:p-3 rounded-2xl border border-border-subtle shadow-[0_4px_24px_rgba(0,0,0,0.05)]">
        
        {/* Filter Pills Rail */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0" id="filter-dock">
          {filterCategories.map((cat) => {
            const isActive = activeFilter === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => onFilterChange(cat.id)}
                type="button"
                className={`px-3.5 py-2 rounded-xl font-headline text-xs font-semibold transition-all flex items-center gap-2 shrink-0 cursor-pointer ${
                  isActive
                    ? 'bg-primary text-white shadow-md shadow-primary/30'
                    : 'text-text-muted hover:text-text-main hover:bg-surface-dim'
                }`}
              >
                <span className="material-symbols-outlined text-[16px]">{cat.icon}</span>
                <span>{cat.name}</span>
                <span
                  className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${
                    isActive ? 'bg-white/25 text-white' : 'bg-gray-100 text-text-muted'
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* View Mode & Reset Controls */}
        <div className="flex items-center gap-2 self-end sm:self-auto shrink-0">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-surface-dim border border-border-subtle text-text-muted font-mono text-xs">
            <span>VIEW:</span>
            <span className="text-primary uppercase font-bold">3D HUD ORBIT</span>
          </div>
          <button
            onClick={onResetCamera}
            type="button"
            className="p-2 rounded-xl bg-surface-dim border border-border-subtle text-text-muted hover:text-text-main hover:bg-white transition-colors cursor-pointer"
            title="Reset Camera"
          >
            <span className="material-symbols-outlined text-[18px]">restart_alt</span>
          </button>
        </div>

      </div>
    </div>
  );
}
