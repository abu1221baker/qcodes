import React from 'react';

export default function DockControls({ onResetCamera, onToggleWireframe, onLockPerspective }) {
  return (
    <>
      {/* Bottom Floating HUD Indicators (Left) */}
      <div className="fixed bottom-6 left-6 z-40 hidden md:flex items-center gap-4 px-4 py-2 rounded-xl bg-white/95 backdrop-blur-xl border border-border-subtle shadow-lg">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs text-text-muted">COORDS</span>
          <span className="font-mono text-xs text-primary font-bold">37.7749° N, 122.4194° W</span>
        </div>
        <div className="h-3 w-px bg-border-strong"></div>
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs text-text-muted">ENGINE</span>
          <span className="font-mono text-xs text-text-main font-bold">WEBGL_2.0</span>
        </div>
      </div>

      {/* Bottom Floating 3D Controls Dock (Right) */}
      <div className="fixed bottom-20 lg:bottom-6 right-4 sm:right-6 z-40 hidden sm:flex items-center gap-1.5 p-1 rounded-xl bg-white/95 backdrop-blur-xl border border-border-subtle shadow-lg">
        <button
          onClick={onResetCamera || (() => window.dispatchEvent(new CustomEvent('qc-reset-camera')))}
          className="p-2 rounded-lg text-text-muted hover:text-text-main hover:bg-surface-dim transition-colors cursor-pointer"
          title="Reset Orbit View"
          type="button"
        >
          <span className="material-symbols-outlined text-[18px]">view_in_ar</span>
        </button>
        <button
          onClick={onToggleWireframe || (() => window.dispatchEvent(new CustomEvent('qc-toggle-wireframe')))}
          className="p-2 rounded-lg text-text-muted hover:text-text-main hover:bg-surface-dim transition-colors cursor-pointer"
          title="Toggle Wireframe Cage"
          type="button"
        >
          <span className="material-symbols-outlined text-[18px]">grid_4x4</span>
        </button>
        <button
          onClick={onLockPerspective || (() => window.dispatchEvent(new CustomEvent('qc-lock-perspective')))}
          className="p-2 rounded-lg text-text-muted hover:text-text-main hover:bg-surface-dim transition-colors cursor-pointer"
          title="Perspective Focus"
          type="button"
        >
          <span className="material-symbols-outlined text-[18px]">my_location</span>
        </button>
        <div className="h-4 w-px bg-border-subtle my-auto"></div>
        <span className="font-mono text-[11px] text-text-muted px-2 uppercase font-bold">3D DOCK</span>
      </div>
    </>
  );
}
