import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { parallaxSvgMarkup } from './parallaxSvgRaw';
import '../../styles/parallax-about.css';

gsap.registerPlugin(ScrollTrigger);

export default function ParallaxJourney() {
  const wrapperRef = useRef(null);

  useEffect(() => {
    // Ensure scroll position is reset to measure triggers accurately
    window.scrollTo(0, 0);

    const timer = setTimeout(() => {
      const triggerElement = wrapperRef.current || '#gsap-parallax-wrapper';
      const parallaxSvg = document.querySelector('.parallax');
      
      let height = 500;
      try {
        if (parallaxSvg && typeof parallaxSvg.getBBox === 'function') {
          const bbox = parallaxSvg.getBBox();
          if (bbox && bbox.height) height = bbox.height;
        }
      } catch (e) {
        height = 500;
      }

      const speed = 100;

      // Initial element states
      gsap.set('#h2-1', { opacity: 0 });
      gsap.set('#bg_grad', { attr: { cy: '-50' } });
      gsap.set(['#dinoL', '#dinoR'], { y: 80 });
      gsap.set('#dinoL', { x: -10 });

      const mm = gsap.matchMedia();
      mm.add('(max-width: 1922px)', () => {
        gsap.set(['#cloudStart-L', '#cloudStart-R'], { x: 10, opacity: 1 });
      });

      /* SCENE 1 */
      const scene1 = gsap.timeline();
      ScrollTrigger.create({
        animation: scene1,
        trigger: triggerElement,
        start: 'top top',
        end: '45% top',
        scrub: 0.5,
      });

      scene1.to('#h1-1', { y: 3 * speed, x: 1 * speed, scale: 0.9, ease: 'power1.in' }, 0);
      scene1.to('#h1-2', { y: 2.6 * speed, x: -0.6 * speed, ease: 'power1.in' }, 0);
      scene1.to('#h1-3', { y: 1.7 * speed, x: 1.2 * speed }, 0.03);
      scene1.to('#h1-4', { y: 3 * speed, x: 1 * speed }, 0.03);
      scene1.to('#h1-5', { y: 2 * speed, x: 1 * speed }, 0.03);
      scene1.to('#h1-6', { y: 2.3 * speed, x: -2.5 * speed }, 0);
      scene1.to('#h1-7', { y: 5 * speed, x: 1.6 * speed }, 0);
      scene1.to('#h1-8', { y: 3.5 * speed, x: 0.2 * speed }, 0);
      scene1.to('#h1-9', { y: 3.5 * speed, x: -0.2 * speed }, 0);
      scene1.to('#cloudsBig-L', { y: 4.5 * speed, x: -0.2 * speed }, 0);
      scene1.to('#cloudsBig-R', { y: 4.5 * speed, x: -0.2 * speed }, 0);
      scene1.to('#cloudStart-L', { x: -300 }, 0);
      scene1.to('#cloudStart-R', { x: 300 }, 0);
      scene1.to('#info', { y: 8 * speed }, 0);

      /* Bird */
      gsap.fromTo(
        '#bird',
        { opacity: 1 },
        {
          y: -250,
          x: 800,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: triggerElement,
            start: '15% top',
            end: '60% top',
            scrub: 1,
            onEnter: () => gsap.to('#bird', { scaleX: 1, rotation: 0 }),
            onLeave: () => gsap.to('#bird', { scaleX: -1, rotation: -15 }),
          },
        }
      );

      /* Clouds */
      const clouds = gsap.timeline();
      ScrollTrigger.create({
        animation: clouds,
        trigger: triggerElement,
        start: 'top top',
        end: '70% top',
        scrub: 0.5,
      });

      clouds.to('#cloud1', { x: 500 }, 0);
      clouds.to('#cloud2', { x: 1000 }, 0);
      clouds.to('#cloud3', { x: -1000 }, 0);
      clouds.to('#cloud4', { x: -700, y: 25 }, 0);

      /* Sun motion Animation */
      const sun = gsap.timeline();
      ScrollTrigger.create({
        animation: sun,
        trigger: triggerElement,
        start: '1% top',
        end: '40% top',
        scrub: 0.5,
      });

      sun.fromTo('#bg_grad', { attr: { cy: '-50' } }, { attr: { cy: '330' } }, 0);
      sun.to('#bg_grad stop:nth-child(2)', { attr: { offset: '0.15' } }, 0);
      sun.to('#bg_grad stop:nth-child(3)', { attr: { offset: '0.18' } }, 0);
      sun.to('#bg_grad stop:nth-child(4)', { attr: { offset: '0.25' } }, 0);
      sun.to('#bg_grad stop:nth-child(5)', { attr: { offset: '0.46' } }, 0);
      sun.to('#bg_grad stop:nth-child(6)', { attr: { 'stop-color': '#FF9171' } }, 0);

      /* SCENE 2 */
      const scene2 = gsap.timeline();
      ScrollTrigger.create({
        animation: scene2,
        trigger: triggerElement,
        start: '15% top',
        end: '50% top',
        scrub: 0.5,
      });

      scene2.fromTo('#h2-1', { y: 500, opacity: 0 }, { y: 0, opacity: 1 }, 0);
      scene2.fromTo('#h2-2', { y: 500 }, { y: 0 }, 0.1);
      scene2.fromTo('#h2-3', { y: 700 }, { y: 0 }, 0.1);
      scene2.fromTo('#h2-4', { y: 700 }, { y: 0 }, 0.2);
      scene2.fromTo('#h2-5', { y: 800 }, { y: 0 }, 0.3);
      scene2.fromTo('#h2-6', { y: 900 }, { y: 0 }, 0.3);

      /* Bats */
      gsap.set('#bats', { transformOrigin: '50% 50%' });
      gsap.fromTo(
        '#bats',
        { opacity: 1, y: 400, scale: 0 },
        {
          y: 20,
          scale: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: triggerElement,
            start: '35% top',
            end: '65% top',
            scrub: 1,
            onEnter: () => {
              gsap.utils.toArray('#bats path').forEach((item, i) => {
                gsap.to(item, {
                  scaleX: 0.5,
                  yoyo: true,
                  repeat: 9,
                  transformOrigin: '50% 50%',
                  duration: 0.15,
                  delay: 0.7 + i / 10,
                });
              });
              gsap.set('#bats', { opacity: 1 });
            },
          },
        }
      );

      /* Sun increase */
      const sun2 = gsap.timeline();
      ScrollTrigger.create({
        animation: sun2,
        trigger: triggerElement,
        start: '35% top',
        end: '80% top',
        scrub: 0.5,
      });

      sun2.to('#sun', { attr: { offset: '1.4' } }, 0);
      sun2.to('#bg_grad stop:nth-child(2)', { attr: { offset: '0.7' } }, 0);
      sun2.to('#sun', { attr: { 'stop-color': '#ffff00' } }, 0);
      sun2.to('#lg4 stop:nth-child(1)', { attr: { 'stop-color': '#623951' } }, 0);
      sun2.to('#lg4 stop:nth-child(2)', { attr: { 'stop-color': '#261F36' } }, 0);
      sun2.to('#bg_grad stop:nth-child(6)', { attr: { 'stop-color': '#45224A' } }, 0);

      /* Transition (Scene2 to Scene3) */
      gsap.set('#scene3', { y: height - 40, visibility: 'visible' });
      const sceneTransition = gsap.timeline();
      ScrollTrigger.create({
        animation: sceneTransition,
        trigger: triggerElement,
        start: '55% top',
        end: '95% top',
        scrub: 0.5,
      });

      sceneTransition.to('#h2-1', { y: -height - 100, scale: 1.5, transformOrigin: '50% 50%' }, 0);
      sceneTransition.to('#bg_grad', { attr: { cy: '-80' } }, 0.0);
      sceneTransition.to('#bg2', { y: 0 }, 0);

      /* Scene 3 */
      const scene3 = gsap.timeline();
      ScrollTrigger.create({
        animation: scene3,
        trigger: triggerElement,
        start: '65% top',
        end: 'bottom bottom',
        scrub: 0.5,
      });

      scene3.fromTo('#h3-1', { y: 300 }, { y: -550 }, 0);
      scene3.fromTo('#h3-2', { y: 800 }, { y: -550 }, 0.03);
      scene3.fromTo('#h3-3', { y: 600 }, { y: -550 }, 0.06);
      scene3.fromTo('#h3-4', { y: 800 }, { y: -550 }, 0.09);
      scene3.fromTo('#h3-5', { y: 1000 }, { y: -550 }, 0.12);
      scene3.fromTo('#stars', { opacity: 0 }, { opacity: 0.5, y: -500 }, 0);
      scene3.fromTo('#arrow2', { opacity: 0 }, { opacity: 0.7, y: -710 }, 0.25);
      scene3.fromTo('#text2', { opacity: 0 }, { opacity: 0.7, y: -710 }, 0.3);
      scene3.to('#bg2-grad', { attr: { cy: 600 } }, 0);
      scene3.to('#bg2-grad', { attr: { r: 500 } }, 0);

      /* Falling Star */
      gsap.set('#fstar', { y: -400 });
      const fstarTL = gsap.timeline();
      ScrollTrigger.create({
        animation: fstarTL,
        trigger: triggerElement,
        start: '70% top',
        end: 'bottom bottom',
        scrub: 0.5,
        onEnter: () => gsap.set('#fstar', { opacity: 1 }),
        onLeave: () => gsap.set('#fstar', { opacity: 0 }),
      });
      fstarTL.to('#fstar', { x: -700, y: -250, ease: 'power2.out' }, 0);

      /* Star Twinkle Loops */
      const twinkleDelays = [0.8, 1.8, 1.0, 1.2, 0.5, 2.0, 1.1, 1.4, 1.1, 0.9, 1.3, 2.0, 0.8, 1.8, 1.0];
      [1, 3, 5, 8, 11, 15, 17, 18, 25, 28, 30, 35, 40, 45, 48].forEach((num, idx) => {
        gsap.fromTo(
          `#stars path:nth-of-type(${num})`,
          { opacity: 0.2 },
          { opacity: 1, duration: 0.3, repeat: -1, repeatDelay: twinkleDelays[idx] || 1.0 }
        );
      });

      ScrollTrigger.refresh();
    }, 100);

    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <section id="gsap-parallax-wrapper" ref={wrapperRef} className="relative w-full overflow-visible">
      <div className="sticky-container">
        {/* Top Floating Horizon Telemetry Tag */}
        <div className="absolute top-20 left-6 sm:left-10 z-30 pointer-events-none flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white font-mono text-xs shadow-lg">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
          <span className="tracking-wider uppercase font-semibold">HORIZON ENGINE // GSAP PARALLAX</span>
        </div>

        {/* Parallax SVG Container */}
        <div
          className="parallax-svg-holder w-full h-full absolute inset-0 flex items-center justify-center pointer-events-none"
          dangerouslySetInnerHTML={{ __html: parallaxSvgMarkup }}
        />
      </div>
    </section>
  );
}
