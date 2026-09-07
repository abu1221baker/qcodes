import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { QcodesLogo } from '../../assets';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
      setSubscribed(false);
    }, 4000);
  };

  return (
    <footer className="w-full bg-[#F8F9FA] text-text-main relative z-10 border-t border-border-subtle">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 mb-12">
          
          {/* Column 1 & 2: Brand & Origin Telemetry */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <Link to="/" className="flex items-center gap-2.5">
              <img src={QcodesLogo} alt="Qcodes Infotech Logo" className="h-8 w-auto max-h-8 object-contain" />
              <span className="font-headline font-extrabold text-lg text-text-main">
                Qcodes <span className="text-primary">Infotech</span>
              </span>
            </Link>
            <p className="font-sans text-xs text-text-muted max-w-sm leading-relaxed">
              Engineering autonomous digital infrastructure, high-concurrency cloud environments, and spatial computing universes for frontier enterprises.
            </p>
            <div className="flex flex-col gap-1 mt-2">
              <span className="font-mono text-[11px] text-text-muted uppercase tracking-wider font-bold">
                System Origin
              </span>
              <span className="font-mono text-xs text-primary font-bold">
                CORE_NODE_V4.8.2 // GLOBAL_MESH
              </span>
            </div>
          </div>

          {/* Column 3: Technologies */}
          <div className="flex flex-col gap-3">
            <span className="font-mono text-xs text-primary uppercase tracking-wider font-bold">
              Technologies
            </span>
            <ul className="flex flex-col gap-2 font-sans text-xs text-text-muted">
              <li>
                <Link to="/solutions" className="hover:text-primary transition-colors">Distributed Ledger</Link>
              </li>
              <li>
                <Link to="/solutions" className="hover:text-primary transition-colors">Autonomous AI Agents</Link>
              </li>
              <li>
                <Link to="/solutions" className="hover:text-primary transition-colors">Edge Computing Nodes</Link>
              </li>
              <li>
                <Link to="/solutions" className="hover:text-primary transition-colors">High-Performance Rust</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-primary transition-colors">Spatial Interfaces (WebGL)</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Solutions */}
          <div className="flex flex-col gap-3">
            <span className="font-mono text-xs text-primary uppercase tracking-wider font-bold">
              Solutions
            </span>
            <ul className="flex flex-col gap-2 font-sans text-xs text-text-muted">
              <li>
                <Link to="/solutions" className="hover:text-primary transition-colors">Hyperscale Cloud Architecture</Link>
              </li>
              <li>
                <Link to="/solutions" className="hover:text-primary transition-colors">Industrial IoT Telemetry</Link>
              </li>
              <li>
                <Link to="/solutions" className="hover:text-primary transition-colors">Quantum-Safe Security</Link>
              </li>
              <li>
                <Link to="/solutions" className="hover:text-primary transition-colors">Fintech Settlement Engines</Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-primary transition-colors">Spatial Digital Twins</Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Universe Index */}
          <div className="flex flex-col gap-3">
            <span className="font-mono text-xs text-primary uppercase tracking-wider font-bold">
              Universe Index
            </span>
            <ul className="flex flex-col gap-2 font-sans text-xs text-text-muted">
              <li>
                <Link to="/" className="hover:text-primary transition-colors">Home Page</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-primary transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-primary transition-colors">Services Ecosystem</Link>
              </li>
              <li>
                <Link to="/solutions" className="hover:text-primary transition-colors">Deep-Tech Solutions</Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-primary transition-colors">Work Gallery</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary transition-colors">Enterprise Contact</Link>
              </li>
            </ul>
          </div>

          {/* Column 6: Telemetry Feed / Newsletter */}
          <div className="flex flex-col gap-3">
            <span className="font-mono text-xs text-primary uppercase tracking-wider font-bold">
              Telemetry Feed
            </span>
            <p className="font-sans text-xs text-text-muted">
              Subscribe to architectural whitepapers and spatial computing updates.
            </p>
            {subscribed ? (
              <div className="p-2.5 rounded-lg bg-green-50 border border-green-200 text-green-700 font-mono text-xs flex items-center gap-2">
                <span className="material-symbols-outlined text-[16px]">check_circle</span>
                <span>Subscribed to Feed</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex items-center gap-2 mt-1">
                <input
                  className="w-full px-3 py-1.5 bg-white text-text-main font-sans text-xs rounded-lg border border-border-strong outline-none focus:border-primary transition-colors placeholder:text-gray-400"
                  placeholder="developer@enterprise.io"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button
                  className="px-3.5 py-1.5 bg-primary text-white font-headline text-xs rounded-lg hover:bg-primary-dark transition-colors font-bold shrink-0 cursor-pointer"
                  type="submit"
                >
                  Join
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar: Telemetry & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-border-subtle font-mono text-xs text-text-muted">
          <div className="flex flex-wrap items-center gap-4">
            <span>LATENCY: 24MS • PING: OPTIMAL</span>
            <span className="hidden sm:inline">|</span>
            <span>© {new Date().getFullYear()} Qcodes Infotech Systems Ltd. All Rights Reserved.</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#telemetry" className="hover:text-primary transition-colors">TELEMETRY_LOGS</a>
            <a href="#privacy" className="hover:text-primary transition-colors">PRIVACY_DIRECTIVE</a>
            <a href="#security" className="hover:text-primary transition-colors">SECURITY_AUDIT</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
