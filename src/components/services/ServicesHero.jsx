import React from 'react';
import { ServiceHeroSvg } from '../../assets';

export default function ServicesHero() {
  return (
    <section className="w-full px-4 sm:px-8 xl:px-12 pt-10 pb-12 relative overflow-hidden bg-gradient-to-b from-white via-surface-dim to-white border-b border-border-subtle">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        
        {/* Left Column: Narrative with Services in Paragraph Form */}
        <div className="lg:col-span-7 flex flex-col gap-5">
          <div className="flex flex-col gap-4">
            <h1 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1C1C1C] tracking-tight leading-[1.15]">
              Technology That Turns <span className="text-primary drop-shadow-sm">Ideas Into Products.</span>
            </h1>
            
            <p className="font-sans text-sm sm:text-base text-text-muted leading-relaxed">
              At Qcodes Infotech, we provide comprehensive, cutting-edge technology services tailored to scale modern enterprises. We offer end-to-end expertise across <a href="https://qcodesinfotech.com/website-design" target="_blank" rel="noopener noreferrer" className="text-text-main font-medium hover:text-primary transition-colors underline decoration-border-strong hover:decoration-primary">Website Design</a> and <a href="https://qcodesinfotech.com/website-development" target="_blank" rel="noopener noreferrer" className="text-text-main font-medium hover:text-primary transition-colors underline decoration-border-strong hover:decoration-primary">Website Development</a>, custom <a href="https://qcodesinfotech.com/software-development" target="_blank" rel="noopener noreferrer" className="text-text-main font-medium hover:text-primary transition-colors underline decoration-border-strong hover:decoration-primary">Software Development</a>, bespoke <a href="https://qcodesinfotech.com/crm-software-development" target="_blank" rel="noopener noreferrer" className="text-text-main font-medium hover:text-primary transition-colors underline decoration-border-strong hover:decoration-primary">CRM Software Development</a>, <a href="https://qcodesinfotech.com/ecommerce-website-development" target="_blank" rel="noopener noreferrer" className="text-text-main font-medium hover:text-primary transition-colors underline decoration-border-strong hover:decoration-primary">E-Commerce Websites</a>, and specialized web portals for <a href="https://qcodesinfotech.com/educational-web-portal-development" target="_blank" rel="noopener noreferrer" className="text-text-main font-medium hover:text-primary transition-colors underline decoration-border-strong hover:decoration-primary">Education</a>, <a href="https://qcodesinfotech.com/restaurant-web-portal-development" target="_blank" rel="noopener noreferrer" className="text-text-main font-medium hover:text-primary transition-colors underline decoration-border-strong hover:decoration-primary">Restaurants</a>, and <a href="https://qcodesinfotech.com/travel-portal-development" target="_blank" rel="noopener noreferrer" className="text-text-main font-medium hover:text-primary transition-colors underline decoration-border-strong hover:decoration-primary">Travel</a>.
            </p>

            <p className="font-sans text-sm sm:text-base text-text-muted leading-relaxed">
              Our enterprise software solutions encompass <a href="https://qcodesinfotech.com/hr-and-payroll-management-software" target="_blank" rel="noopener noreferrer" className="text-text-main font-medium hover:text-primary transition-colors underline decoration-border-strong hover:decoration-primary">HR and Payroll Management</a>, <a href="https://qcodesinfotech.com/crm-software-developmet" target="_blank" rel="noopener noreferrer" className="text-text-main font-medium hover:text-primary transition-colors underline decoration-border-strong hover:decoration-primary">CRM Systems</a>, <a href="https://qcodesinfotech.com/inventory-management-system" target="_blank" rel="noopener noreferrer" className="text-text-main font-medium hover:text-primary transition-colors underline decoration-border-strong hover:decoration-primary">Inventory Management</a>, and <a href="https://qcodesinfotech.com/school-management-system" target="_blank" rel="noopener noreferrer" className="text-text-main font-medium hover:text-primary transition-colors underline decoration-border-strong hover:decoration-primary">School Management Software</a>. In mobile, we deliver robust <a href="https://qcodesinfotech.com/mobile-app-development" target="_blank" rel="noopener noreferrer" className="text-text-main font-medium hover:text-primary transition-colors underline decoration-border-strong hover:decoration-primary">Mobile App Development</a> across <a href="https://qcodesinfotech.com/native-app-development" target="_blank" rel="noopener noreferrer" className="text-text-main font-medium hover:text-primary transition-colors underline decoration-border-strong hover:decoration-primary">Native (iOS &amp; Android)</a> and <a href="https://qcodesinfotech.com/cross-platform-development" target="_blank" rel="noopener noreferrer" className="text-text-main font-medium hover:text-primary transition-colors underline decoration-border-strong hover:decoration-primary">Cross-Platform</a> architectures.
            </p>

            <p className="font-sans text-sm sm:text-base text-text-muted leading-relaxed">
              We also lead the frontier in emerging technologies, including <a href="https://qcodesinfotech.com/aiml" target="_blank" rel="noopener noreferrer" className="text-text-main font-medium hover:text-primary transition-colors underline decoration-border-strong hover:decoration-primary">AI &amp; Machine Learning</a>, <a href="https://qcodesinfotech.com/rpa" target="_blank" rel="noopener noreferrer" className="text-text-main font-medium hover:text-primary transition-colors underline decoration-border-strong hover:decoration-primary">Robotic Process Automation (RPA)</a>, <a href="https://qcodesinfotech.com/data-science" target="_blank" rel="noopener noreferrer" className="text-text-main font-medium hover:text-primary transition-colors underline decoration-border-strong hover:decoration-primary">Data Science &amp; Analytics</a>, <a href="https://qcodesinfotech.com/blockchain" target="_blank" rel="noopener noreferrer" className="text-text-main font-medium hover:text-primary transition-colors underline decoration-border-strong hover:decoration-primary">Blockchain</a>, <a href="https://qcodesinfotech.com/cloud" target="_blank" rel="noopener noreferrer" className="text-text-main font-medium hover:text-primary transition-colors underline decoration-border-strong hover:decoration-primary">Cloud Computing &amp; IoT</a>, human-centered <a href="https://qcodesinfotech.com/ui-ux-design" target="_blank" rel="noopener noreferrer" className="text-text-main font-medium hover:text-primary transition-colors underline decoration-border-strong hover:decoration-primary">UI/UX Design</a>, <a href="https://qcodesinfotech.com/video-animating-design" target="_blank" rel="noopener noreferrer" className="text-text-main font-medium hover:text-primary transition-colors underline decoration-border-strong hover:decoration-primary">Video Animation</a>, and rigorous <a href="https://qcodesinfotech.com/software-testing" target="_blank" rel="noopener noreferrer" className="text-text-main font-medium hover:text-primary transition-colors underline decoration-border-strong hover:decoration-primary">Software, Security &amp; Performance Testing</a>.
            </p>
          </div>
        </div>

        {/* Right Column: service.svg Illustration Card */}
        <div className="lg:col-span-5 flex flex-col items-center gap-4">
          <div className="relative w-full max-w-[500px] p-6 sm:p-8 rounded-3xl bg-white border border-border-subtle shadow-[0_16px_48px_rgba(226,30,76,0.08)] group hover:shadow-[0_20px_60px_rgba(226,30,76,0.14)] transition-all duration-500 flex items-center justify-center">
            <div className="absolute inset-0 bg-radial from-primary/10 via-transparent to-transparent opacity-60 pointer-events-none rounded-3xl"></div>
            <img
              src={ServiceHeroSvg}
              alt="Qcodes Infotech Services Ecosystem"
              className="relative z-10 w-full h-auto max-h-[380px] object-contain group-hover:scale-105 transition-transform duration-500 drop-shadow-md"
              loading="eager"
            />
          </div>
          <p className="font-sans text-xs text-text-muted text-center max-w-sm leading-relaxed">
            Delivering end-to-end digital solutions, modern software engineering, and intelligent systems built for long-term reliability.
          </p>
        </div>

      </div>
    </section>
  );
}
