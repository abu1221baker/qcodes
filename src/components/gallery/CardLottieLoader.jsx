import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import boredHandAnimationData from '../../assets/animations/loading-bored-hand.json';

export default function CardLottieLoader({ active }) {
  const animationContainerRef = useRef(null);
  const animInstanceRef = useRef(null);

  useEffect(() => {
    if (animationContainerRef.current) {
      animInstanceRef.current = lottie.loadAnimation({
        container: animationContainerRef.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: JSON.parse(JSON.stringify(boredHandAnimationData)),
      });
    }

    return () => {
      if (animInstanceRef.current) {
        animInstanceRef.current.destroy();
      }
    };
  }, []);

  useEffect(() => {
    if (animInstanceRef.current) {
      if (active) {
        animInstanceRef.current.goToAndPlay(0, true);
      }
    }
  }, [active]);

  return (
    <div
      className={`absolute inset-0 z-40 flex items-center justify-center bg-slate-950/45 transition-all duration-300 rounded-2xl ${
        active ? 'opacity-100 pointer-events-auto visible' : 'opacity-0 pointer-events-none invisible'
      }`}
      style={{
        backdropFilter: active ? 'blur(28px)' : 'none',
        WebkitBackdropFilter: active ? 'blur(28px)' : 'none',
      }}
    >
      {/* Only the loading hand animation (Enlarged) */}
      <div
        ref={animationContainerRef}
        className="w-72 h-72 sm:w-96 sm:h-96 md:w-[420px] md:h-[420px] max-w-[90vw] max-h-[90vh] flex items-center justify-center pointer-events-none drop-shadow-2xl"
      />
    </div>
  );
}
