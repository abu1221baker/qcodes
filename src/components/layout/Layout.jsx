import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import DockControls from './DockControls';
import AiAgentModal from '../ai-copilot/AiAgentModal';

export default function Layout({ children }) {
  return (
    <div className="bg-background font-sans text-text-main antialiased selection:bg-primary selection:text-white min-h-screen relative flex flex-col">
      <Navbar />
      <main className="w-full pt-16 pb-16 lg:pb-0 bg-white relative z-10 flex-1">
        {children}
      </main>
      <DockControls />
      <AiAgentModal />
      <Footer />
    </div>
  );
}
