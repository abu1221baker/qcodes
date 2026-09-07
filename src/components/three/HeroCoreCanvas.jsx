import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function HeroCoreCanvas() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth || 600;
    const height = container.clientHeight || 580;

    // Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 2, 9);

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0xe21e4c, 3, 20);
    pointLight1.position.set(5, 5, 5);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xa91639, 2, 20);
    pointLight2.position.set(-5, -3, -3);
    scene.add(pointLight2);

    // Central Digital Crystalline Core (Icosahedron + Wireframe cage)
    const coreGroup = new THREE.Group();
    scene.add(coreGroup);

    const innerGeo = new THREE.IcosahedronGeometry(1.3, 1);
    const innerMat = new THREE.MeshPhongMaterial({
      color: 0xe21e4c,
      emissive: 0x4a0515,
      specular: 0xffffff,
      shininess: 90,
      flatShading: true,
      transparent: true,
      opacity: 0.88,
    });
    const innerCore = new THREE.Mesh(innerGeo, innerMat);
    coreGroup.add(innerCore);

    const outerGeo = new THREE.IcosahedronGeometry(1.6, 2);
    const outerMat = new THREE.MeshBasicMaterial({
      color: 0xa91639,
      wireframe: true,
      transparent: true,
      opacity: 0.4,
    });
    const outerCage = new THREE.Mesh(outerGeo, outerMat);
    coreGroup.add(outerCage);

    // Orbital Rings
    const ringGeo1 = new THREE.TorusGeometry(2.6, 0.02, 16, 100);
    const ringMat1 = new THREE.MeshBasicMaterial({
      color: 0xe21e4c,
      transparent: true,
      opacity: 0.5,
    });
    const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
    ring1.rotation.x = Math.PI / 2.3;
    scene.add(ring1);

    const ringGeo2 = new THREE.TorusGeometry(3.4, 0.015, 16, 100);
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: 0x1c1c1c,
      transparent: true,
      opacity: 0.25,
    });
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
    ring2.rotation.x = Math.PI / 1.7;
    ring2.rotation.y = Math.PI / 5;
    scene.add(ring2);

    // Surrounding Technology Satellite Nodes
    const nodeData = [
      { name: 'AI & NEURAL', pos: [2.5, 1.2, 0.5] },
      { name: 'CLOUD MESH', pos: [-2.4, 1.4, -0.6] },
      { name: 'DATA LAKE', pos: [2.2, -1.5, 1.1] },
      { name: 'BLOCKCHAIN', pos: [-2.5, -1.2, 0.8] },
      { name: 'SPATIAL 3D', pos: [0.2, 2.6, -1.2] },
      { name: 'MOBILE & WEB', pos: [-0.4, -2.5, 1.0] },
    ];

    const nodesGroup = new THREE.Group();
    scene.add(nodesGroup);

    nodeData.forEach((data) => {
      const nodeGeo = new THREE.SphereGeometry(0.16, 16, 16);
      const nodeMat = new THREE.MeshPhongMaterial({
        color: 0xe21e4c,
        emissive: 0x2b040c,
        shininess: 100,
      });
      const nodeMesh = new THREE.Mesh(nodeGeo, nodeMat);
      nodeMesh.position.set(...data.pos);
      nodesGroup.add(nodeMesh);

      // Outer glow aura
      const glowGeo = new THREE.SphereGeometry(0.24, 16, 16);
      const glowMat = new THREE.MeshBasicMaterial({
        color: 0xe21e4c,
        wireframe: true,
        transparent: true,
        opacity: 0.35,
      });
      const glowMesh = new THREE.Mesh(glowGeo, glowMat);
      nodeMesh.add(glowMesh);

      // Bezier connection curve to center
      const vStart = new THREE.Vector3(0, 0, 0);
      const vEnd = new THREE.Vector3(...data.pos);
      const vMid = new THREE.Vector3(
        (vStart.x + vEnd.x) * 0.5 + (Math.random() - 0.5) * 0.8,
        (vStart.y + vEnd.y) * 0.5 + 0.6,
        (vStart.z + vEnd.z) * 0.5 + (Math.random() - 0.5) * 0.8
      );
      const curve = new THREE.QuadraticBezierCurve3(vStart, vMid, vEnd);
      const points = curve.getPoints(36);
      const lineGeo = new THREE.BufferGeometry().setFromPoints(points);
      const lineMat = new THREE.LineBasicMaterial({
        color: 0xe21e4c,
        transparent: true,
        opacity: 0.45,
      });
      const line = new THREE.Line(lineGeo, lineMat);
      scene.add(line);
    });

    // Ambient Floating Particle Swarm
    const particleCount = 280;
    const particleGeo = new THREE.BufferGeometry();
    const particlePos = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      const radius = 1.8 + Math.random() * 3.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      particlePos[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      particlePos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      particlePos[i * 3 + 2] = radius * Math.cos(phi);
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePos, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0xe21e4c,
      size: 0.05,
      transparent: true,
      opacity: 0.7,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // Parallax & Mouse interaction
    let mouseX = 0,
      mouseY = 0,
      targetX = 0,
      targetY = 0;
    const onMouseMove = (event) => {
      const rect = container.getBoundingClientRect();
      mouseX = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
      mouseY = -((event.clientY - rect.top) / rect.height - 0.5) * 2;
    };
    window.addEventListener('mousemove', onMouseMove);

    const onWindowResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', onWindowResize);

    // Dock event listeners
    const handleResetCamera = () => {
      targetX = 0;
      targetY = 0;
      mouseX = 0;
      mouseY = 0;
      camera.position.set(0, 2, 9);
    };
    const handleToggleWireframe = () => {
      outerCage.visible = !outerCage.visible;
    };
    const handleLockPerspective = () => {
      targetX = 0;
      targetY = 0;
    };

    window.addEventListener('qc-reset-camera', handleResetCamera);
    window.addEventListener('qc-toggle-wireframe', handleToggleWireframe);
    window.addEventListener('qc-lock-perspective', handleLockPerspective);

    // Animation Loop
    const clock = new THREE.Clock();
    let animationFrameId;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      camera.position.x = targetX * 1.2;
      camera.position.y = 2 + targetY * 0.8;
      camera.lookAt(0, 0, 0);

      innerCore.rotation.x = t * 0.25;
      innerCore.rotation.y = t * 0.35;
      outerCage.rotation.x = -t * 0.15;
      outerCage.rotation.y = t * 0.2;
      ring1.rotation.z = t * 0.1;
      ring2.rotation.z = -t * 0.08;
      nodesGroup.rotation.y = t * 0.08;
      particles.rotation.y = t * 0.04;
      particles.rotation.x = Math.sin(t * 0.05) * 0.1;

      renderer.render(scene, camera);
    };
    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onWindowResize);
      window.removeEventListener('qc-reset-camera', handleResetCamera);
      window.removeEventListener('qc-toggle-wireframe', handleToggleWireframe);
      window.removeEventListener('qc-lock-perspective', handleLockPerspective);

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      innerGeo.dispose();
      innerMat.dispose();
      outerGeo.dispose();
      outerMat.dispose();
      ringGeo1.dispose();
      ringMat1.dispose();
      ringGeo2.dispose();
      ringMat2.dispose();
      particleGeo.dispose();
      particleMat.dispose();
    };
  }, []);

  return <div ref={containerRef} className="w-full h-full min-h-[480px] rounded-3xl overflow-hidden block" />;
}
