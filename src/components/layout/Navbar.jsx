import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { QcodesLogo } from '../../assets';

export default function Navbar() {
  const navLinks = [
    { name: 'Home', path: '/', icon: 'public' },
    { name: 'About', path: '/about', icon: 'info' },
    { name: 'Services', path: '/services', icon: 'apps' },
    { name: 'Solutions', path: '/solutions', icon: 'memory' },
    { name: 'Gallery', path: '/gallery', icon: 'grid_view' },
    { name: 'Contact', path: '/contact', icon: 'mail' },
  ];

  return (
    <>
      {/* ── Top Header (Desktop Nav + Mobile Brand Header) ── */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-border-subtle shadow-xs">
        <div className="h-16 w-full max-w-[1440px] mx-auto px-4 sm:px-8 flex items-center justify-between gap-4">
          
          {/* Brand Logo */}
          <Link to="/" className="flex items-center group cursor-pointer" title="Qcodes Infotech">
            <img 
              src={QcodesLogo} 
              alt="Qcodes Infotech Logo" 
              className="h-9 sm:h-10 w-auto max-h-10 object-contain group-hover:scale-105 transition-transform drop-shadow-sm" 
            />
          </Link>

          {/* Desktop Nav Links (Hidden on mobile/tablet) */}
          <nav className="hidden lg:flex items-center gap-1.5 bg-surface-dim p-1 rounded-xl border border-border-subtle">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                end={link.path === '/'}
                className={({ isActive }) =>
                  `px-4 py-1.5 rounded-lg font-headline text-xs font-semibold transition-all flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-primary text-white font-bold shadow-sm'
                      : 'text-text-muted hover:text-text-main hover:bg-white'
                  }`
                }
              >
                <span className="material-symbols-outlined text-[15px]">{link.icon}</span>
                <span>{link.name === 'Gallery' ? 'Work Gallery' : link.name}</span>
              </NavLink>
            ))}
          </nav>

          {/* Desktop Right Action */}
          <div className="hidden lg:flex items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-primary-light border border-primary/20">
              <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_rgba(226,30,76,0.8)] animate-pulse"></span>
              <span className="font-mono text-[11px] text-primary font-bold uppercase tracking-wider">
                NODE: ONLINE • 24ms
              </span>
            </div>

            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-primary text-white font-headline text-xs font-semibold shadow-md shadow-primary/25 hover:bg-primary-dark transition-all"
            >
              <span>Start a Project</span>
              <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
            </Link>
          </div>

          {/* On mobile/tablet, provide top-right space for the top AI Copilot launcher button */}
          <div className="lg:hidden w-36 h-10 pointer-events-none" />
        </div>
      </header>

      {/* ── Mobile Bottom Navigation Bar (< 1024px) ── */}
      <nav
        aria-label="Mobile Bottom Navigation"
        className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-t border-slate-200/90 shadow-[0_-4px_25px_rgba(0,0,0,0.08)] px-1 sm:px-3 py-1.5 pb-[max(0.4rem,env(safe-area-inset-bottom))]"
      >
        <div className="grid grid-cols-6 gap-0.5 items-center max-w-md mx-auto">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              end={link.path === '/'}
              className={({ isActive }) =>
                `flex flex-col items-center justify-center py-1 px-0.5 rounded-xl transition-all duration-200 relative group select-none cursor-pointer ${
                  isActive
                    ? 'text-primary font-bold'
                    : 'text-slate-500 hover:text-slate-800'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {/* Top glowing crimson indicator for active tab */}
                  {isActive && (
                    <span className="absolute -top-1.5 w-5 h-0.5 bg-primary rounded-full shadow-[0_0_6px_#E21E4C]" />
                  )}
                  <span
                    className={`material-symbols-outlined text-[20px] transition-transform duration-200 ${
                      isActive ? 'scale-110 text-primary' : 'group-hover:scale-105'
                    }`}
                  >
                    {link.icon}
                  </span>
                  <span className={`text-[10px] font-headline tracking-tight mt-0.5 truncate max-w-full ${isActive ? 'font-bold' : 'font-medium'}`}>
                    {link.name}
                  </span>
                </>
              )}
            </NavLink>
          ))}
        </div>
      </nav>
    </>
  );
}
