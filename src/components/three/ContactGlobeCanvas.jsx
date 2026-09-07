import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export default function ContactGlobeCanvas({ onResetRef, onToggleWireframeRef }) {
  const containerRef = useRef(null);
  const [fps, setFps] = useState('60.0');
  const [camPos, setCamPos] = useState('CAM: [X:0.0, Y:1.2]');

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth || 380;
    const height = container.clientHeight || 280;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 1.2, 5.5);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xe21e4c, 3.0, 20);
    pointLight.position.set(3, 4, 5);
    scene.add(pointLight);

    // Core Group
    const coreGroup = new THREE.Group();
    scene.add(coreGroup);

    // Inner Glowing Core
    const innerGeo = new THREE.IcosahedronGeometry(1.2, 2);
    const innerMat = new THREE.MeshPhongMaterial({
      color: 0xe21e4c,
      emissive: 0x4a0515,
      specular: 0xffffff,
      shininess: 90,
      flatShading: true,
      transparent: true,
      opacity: 0.88,
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    coreGroup.add(innerMesh);

    // Outer Wireframe Cage Globe
    const outerGeo = new THREE.SphereGeometry(1.7, 24, 24);
    const outerMat = new THREE.MeshBasicMaterial({
      color: 0xe21e4c,
      wireframe: true,
      transparent: true,
      opacity: 0.38,
    });
    const outerCage = new THREE.Mesh(outerGeo, outerMat);
    coreGroup.add(outerCage);

    // Orbital Rings
    const ringGeo1 = new THREE.TorusGeometry(2.3, 0.02, 16, 80);
    const ringMat1 = new THREE.MeshBasicMaterial({ color: 0xe21e4c, transparent: true, opacity: 0.6 });
    const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
    ring1.rotation.x = Math.PI / 2.5;
    scene.add(ring1);

    const ringGeo2 = new THREE.TorusGeometry(2.8, 0.015, 16, 80);
    const ringMat2 = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.35 });
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
    ring2.rotation.x = Math.PI / 1.8;
    ring2.rotation.y = Math.PI / 6;
    scene.add(ring2);

    // Orbiting Satellite Nodes Swarm with pulsing connectors
    const nodeData = [
      [1.8, 0.8, 0.4],
      [-1.6, 1.0, -0.5],
      [1.5, -1.1, 0.8],
      [-1.7, -0.9, 0.6],
      [0.2, 1.8, -0.9],
    ];

    nodeData.forEach((pos) => {
      const nGeo = new THREE.SphereGeometry(0.12, 16, 16);
      const nMat = new THREE.MeshPhongMaterial({ color: 0xe21e4c, emissive: 0x33000d, shininess: 100 });
      const nMesh = new THREE.Mesh(nGeo, nMat);
      nMesh.position.set(...pos);
      scene.add(nMesh);

      const lineGeo = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3(...pos),
      ]);
      const lineMat = new THREE.LineBasicMaterial({ color: 0xe21e4c, transparent: true, opacity: 0.3 });
      const line = new THREE.Line(lineGeo, lineMat);
      scene.add(line);
    });

    // Particle Swarm
    const particleCount = 220;
    const particleGeo = new THREE.BufferGeometry();
    const particlePos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const r = 1.6 + Math.random() * 2.4;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      particlePos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      particlePos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      particlePos[i * 3 + 2] = r * Math.cos(phi);
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePos, 3));
    const particleMat = new THREE.PointsMaterial({ color: 0xe21e4c, size: 0.045, transparent: true, opacity: 0.65 });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // Mouse drag interaction
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const onMouseDown = (e) => {
      isDragging = true;
      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    const onMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      mouseY = -((e.clientY - rect.top) / rect.height - 0.5) * 2;

      if (isDragging) {
        const deltaX = e.clientX - previousMousePosition.x;
        const deltaY = e.clientY - previousMousePosition.y;
        coreGroup.rotation.y += deltaX * 0.01;
        coreGroup.rotation.x += deltaY * 0.01;
        previousMousePosition = { x: e.clientX, y: e.clientY };
      }
    };

    container.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    container.addEventListener('mousemove', onMouseMove);

    // Touch events
    const onTouchStart = (e) => {
      if (e.touches.length === 1) {
        isDragging = true;
        previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    };

    const onTouchMove = (e) => {
      if (isDragging && e.touches.length === 1) {
        const deltaX = e.touches[0].clientX - previousMousePosition.x;
        const deltaY = e.touches[0].clientY - previousMousePosition.y;
        coreGroup.rotation.y += deltaX * 0.01;
        coreGroup.rotation.x += deltaY * 0.01;
        previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    };

    const onTouchEnd = () => {
      isDragging = false;
    };

    container.addEventListener('touchstart', onTouchStart, { passive: true });
    container.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('touchend', onTouchEnd);

    // Camera Reset Ref
    if (onResetRef) {
      onResetRef.current = () => {
        camera.position.set(0, 1.2, 5.5);
        camera.lookAt(0, 0, 0);
        coreGroup.rotation.set(0, 0, 0);
      };
    }

    if (onToggleWireframeRef) {
      onToggleWireframeRef.current = () => {
        outerCage.visible = !outerCage.visible;
      };
    }

    const onResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', onResize);

    const clock = new THREE.Clock();
    let animationFrameId;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      if (!isDragging) {
        targetX += (mouseX - targetX) * 0.05;
        targetY += (mouseY - targetY) * 0.05;
        camera.position.x = targetX * 0.7;
        camera.position.y = 1.2 + targetY * 0.5;
        camera.lookAt(0, 0, 0);

        coreGroup.rotation.y = t * 0.3;
        coreGroup.rotation.x = Math.sin(t * 0.2) * 0.15;
      }

      ring1.rotation.z = t * 0.15;
      ring2.rotation.z = -t * 0.1;
      particles.rotation.y = t * 0.05;

      if (Math.floor(t * 10) % 5 === 0) {
        setCamPos(`CAM: [X:${camera.position.x.toFixed(1)}, Y:${camera.position.y.toFixed(1)}]`);
      }

      renderer.render(scene, camera);
    };

    animate();

    const fpsTimer = setInterval(() => {
      setFps((59.6 + Math.random() * 0.7).toFixed(1));
    }, 1200);

    return () => {
      clearInterval(fpsTimer);
      cancelAnimationFrame(animationFrameId);
      container.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      container.removeEventListener('mousemove', onMouseMove);
      container.removeEventListener('touchstart', onTouchStart);
      container.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);
      window.removeEventListener('resize', onResize);

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div className="w-full max-w-full flex flex-col overflow-hidden">
      {/* Top HUD Stream */}
      <div className="flex flex-wrap items-center justify-between mb-4 border-b border-white/10 pb-3 gap-2">
        <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
          <span className="w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_10px_#E21E4C] animate-pulse shrink-0"></span>
          <span className="font-mono text-[10px] sm:text-xs text-primary font-bold tracking-wider sm:tracking-widest uppercase truncate">
            SPATIAL_CORE // WEBGL
          </span>
        </div>
        <div className="flex items-center gap-2 sm:gap-3 font-mono text-[10px] sm:text-[11px] text-gray-400">
          <span>
            FPS: <span className="text-primary font-bold">{fps}</span>
          </span>
          <span className="text-white/20">|</span>
          <span className="text-gray-300">{camPos}</span>
        </div>
      </div>

      {/* 3D Canvas Viewport */}
      <div
        ref={containerRef}
        className="relative w-full h-64 sm:h-72 rounded-xl bg-black/80 border border-white/10 overflow-hidden mb-5 group shadow-inner cursor-grab active:cursor-grabbing"
      >
        {/* Overlay Coordinate Watermark */}
        <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded border border-white/10 font-mono text-[10px] text-gray-300 pointer-events-none z-10">
          <span className="text-primary">CLUSTER:</span> ALPHA_NODE_01
        </div>

        <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded border border-white/10 font-mono text-[10px] text-gray-300 pointer-events-none z-10">
          <span className="text-green-400">●</span> DRAG TO ORBIT
        </div>
      </div>
    </div>
  );
}
