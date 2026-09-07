import React from 'react';
import { OurVisionSvg } from '../../assets';

export default function GalleryVision() {
  return (
    <section className="relative px-4 sm:px-8 xl:px-12 pb-16 max-w-[1720px] mx-auto w-full">
      <div className="bg-gradient-to-tr from-white via-[#FFF8F9] to-red-50/40 rounded-3xl p-8 sm:p-12 lg:p-16 border border-[#e8ecf2] shadow-[0_12px_40px_rgba(226,30,76,0.06)] relative overflow-hidden">
        {/* Ambient Accent Glow */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-red-100/30 rounded-full blur-3xl pointer-events-none"></div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">
          
          {/* Left Column: Vision Statement */}
          <div className="lg:col-span-7 flex flex-col items-start gap-5">
            <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1C1C1C] tracking-tight leading-tight">
              Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-dark">Vision</span>
            </h2>

            <div className="flex flex-col gap-4 text-text-muted font-sans text-base sm:text-lg leading-relaxed max-w-3xl">
              <p>
                At Qcodes Infotech, our vision is to be a leading provider of innovative technology solutions that help businesses thrive in a rapidly evolving digital landscape. We strive to empower businesses of all sizes with the tools they need to reach their full potential and achieve their goals.
              </p>
              <p>
                We believe technology can transform how we live and work, and we are dedicated to using our expertise to help businesses harness its benefits. Our vision is to be at the forefront of technological advancements, always offering cutting-edge solutions that meet the evolving needs of our clients.
              </p>
            </div>
          </div>

          {/* Right Column: our_vission.svg Illustration */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <div className="relative w-full max-w-[460px] p-6 sm:p-8 rounded-3xl bg-white border border-[#e8ecf2] shadow-[0_8px_30px_rgba(0,0,0,0.04)] group hover:shadow-[0_16px_40px_rgba(226,30,76,0.1)] transition-all duration-500 flex items-center justify-center">
              <img
                src={OurVisionSvg}
                alt="Qcodes Infotech Vision Illustration"
                className="w-full h-auto max-h-[320px] object-contain group-hover:scale-105 transition-transform duration-500 drop-shadow-md"
                loading="lazy"
              />
              
              {/* Floating Overlay Tag */}
              <div className="absolute -bottom-3 -right-2 sm:right-4 px-3.5 py-1.5 rounded-xl bg-white border border-primary/20 shadow-md flex items-center gap-2 font-mono text-xs text-text-main font-bold">
                <span className="w-2 h-2 rounded-full bg-primary animate-ping"></span>
                <span>STRATEGIC HORIZON</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
