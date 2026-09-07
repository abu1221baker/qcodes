import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ServicesOrbitCanvas({ activeNodeId = 'web', onNodeSelect }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth || 500;
    const height = container.clientHeight || 500;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 1000);
    camera.position.set(0, 3.2, 8.5);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.4);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xe21e4c, 3.5, 30);
    pointLight.position.set(4, 6, 6);
    scene.add(pointLight);

    const masterGroup = new THREE.Group();
    scene.add(masterGroup);

    // Central Core
    const coreGroup = new THREE.Group();
    masterGroup.add(coreGroup);

    const innerCoreGeo = new THREE.IcosahedronGeometry(1.0, 1);
    const innerCoreMat = new THREE.MeshPhongMaterial({
      color: 0xe21e4c,
      emissive: 0x550616,
      shininess: 90,
      flatShading: true,
      transparent: true,
      opacity: 0.9,
    });
    const innerCoreMesh = new THREE.Mesh(innerCoreGeo, innerCoreMat);
    coreGroup.add(innerCoreMesh);

    const wireCageGeo = new THREE.IcosahedronGeometry(1.25, 2);
    const wireCageMat = new THREE.MeshBasicMaterial({
      color: 0xa91639,
      wireframe: true,
      transparent: true,
      opacity: 0.45,
    });
    const wireCageMesh = new THREE.Mesh(wireCageGeo, wireCageMat);
    coreGroup.add(wireCageMesh);

    const glowCoreGeo = new THREE.SphereGeometry(0.55, 16, 16);
    const glowCoreMat = new THREE.MeshBasicMaterial({
      color: 0xff3366,
      transparent: true,
      opacity: 0.8,
    });
    const glowCoreMesh = new THREE.Mesh(glowCoreGeo, glowCoreMat);
    coreGroup.add(glowCoreMesh);

    // Orbital Rings
    const createRing = (radius, tiltX, tiltZ, opacity, color = 0xe21e4c) => {
      const ringGeo = new THREE.RingGeometry(radius - 0.015, radius + 0.015, 64);
      const ringMat = new THREE.MeshBasicMaterial({
        color: color,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: opacity,
      });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.rotation.x = tiltX;
      ring.rotation.z = tiltZ;
      masterGroup.add(ring);
      return ring;
    };

    const ring1 = createRing(2.8, Math.PI / 2.2, 0, 0.45, 0xe21e4c);
    const ring2 = createRing(3.6, Math.PI / 2.5, Math.PI / 6, 0.25, 0x1c1c1c);
    const ring3 = createRing(2.0, Math.PI / 1.9, -Math.PI / 8, 0.3, 0xa91639);

    // 7 Service Satellite Nodes Data
    const serviceNodesData = [
      { id: 'web', name: 'Web Dev', radius: 2.8, angle: 0, color: 0xe21e4c },
      { id: 'mobile', name: 'Mobile', radius: 2.8, angle: (Math.PI * 2 / 7) * 1, color: 0xa91639 },
      { id: 'uiux', name: 'UI/UX', radius: 3.4, angle: (Math.PI * 2 / 7) * 2, color: 0xe21e4c },
      { id: 'cloud', name: 'Cloud & DevOps', radius: 2.6, angle: (Math.PI * 2 / 7) * 3, color: 0xa91639 },
      { id: 'marketing', name: 'Growth', radius: 3.2, angle: (Math.PI * 2 / 7) * 4, color: 0xe21e4c },
      { id: 'support', name: 'Ops 24/7', radius: 2.7, angle: (Math.PI * 2 / 7) * 5, color: 0xa91639 },
      { id: 'qa', name: 'QA Chaos', radius: 3.5, angle: (Math.PI * 2 / 7) * 6, color: 0xe21e4c },
    ];

    const nodesGroup = new THREE.Group();
    masterGroup.add(nodesGroup);

    const satelliteMeshes = [];

    serviceNodesData.forEach((data) => {
      const isFocused = data.id === activeNodeId;
      const nodeHolder = new THREE.Group();

      const sphereGeo = new THREE.SphereGeometry(isFocused ? 0.26 : 0.18, 20, 20);
      const sphereMat = new THREE.MeshPhongMaterial({
        color: data.color,
        emissive: isFocused ? 0x66081c : 0x220208,
        shininess: 100,
      });
      const sphere = new THREE.Mesh(sphereGeo, sphereMat);
      nodeHolder.add(sphere);

      const auraGeo = new THREE.RingGeometry(isFocused ? 0.38 : 0.28, isFocused ? 0.44 : 0.32, 24);
      const auraMat = new THREE.MeshBasicMaterial({
        color: isFocused ? 0xe21e4c : 0x777777,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: isFocused ? 0.85 : 0.4,
      });
      const aura = new THREE.Mesh(auraGeo, auraMat);
      aura.rotation.x = Math.PI / 2;
      nodeHolder.add(aura);

      if (isFocused) {
        const boxTargetGeo = new THREE.BoxGeometry(0.7, 0.7, 0.7);
        const boxTargetMat = new THREE.MeshBasicMaterial({
          color: 0xe21e4c,
          wireframe: true,
          transparent: true,
          opacity: 0.6,
        });
        const boxTarget = new THREE.Mesh(boxTargetGeo, boxTargetMat);
        nodeHolder.add(boxTarget);
      }

      const x = Math.cos(data.angle) * data.radius;
      const z = Math.sin(data.angle) * data.radius;
      const y = Math.sin(data.angle * 2) * 0.35;
      nodeHolder.position.set(x, y, z);
      nodesGroup.add(nodeHolder);

      satelliteMeshes.push({ holder: nodeHolder, data });

      // Curve connection
      const curve = new THREE.QuadraticBezierCurve3(
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3(x * 0.5, y * 0.5 + 0.4, z * 0.5),
        new THREE.Vector3(x, y, z)
      );
      const curveGeo = new THREE.BufferGeometry().setFromPoints(curve.getPoints(30));
      const curveMat = new THREE.LineBasicMaterial({
        color: isFocused ? 0xe21e4c : 0xa91639,
        transparent: true,
        opacity: isFocused ? 0.8 : 0.35,
      });
      const line = new THREE.Line(curveGeo, curveMat);
      masterGroup.add(line);
    });

    // Particles
    const particleCount = 180;
    const pGeo = new THREE.BufferGeometry();
    const pPos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const r = 1.2 + Math.random() * 3.2;
      const th = Math.random() * Math.PI * 2;
      const ph = Math.acos(Math.random() * 2 - 1);
      pPos[i * 3] = r * Math.sin(ph) * Math.cos(th);
      pPos[i * 3 + 1] = r * Math.sin(ph) * Math.sin(th) * 0.5;
      pPos[i * 3 + 2] = r * Math.cos(ph);
    }
    pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
    const pMat = new THREE.PointsMaterial({
      color: 0xe21e4c,
      size: 0.045,
      transparent: true,
      opacity: 0.5,
    });
    const particles = new THREE.Points(pGeo, pMat);
    masterGroup.add(particles);

    // Mouse drag interaction
    let isDragging = false;
    let prevMouseX = 0;
    let prevMouseY = 0;
    let mouseX = 0;
    let mouseY = 0;
    let targetRotY = 0;
    let targetRotX = 0;

    container.style.cursor = 'grab';

    const onMouseDown = (e) => {
      isDragging = true;
      container.style.cursor = 'grabbing';
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
    };

    const onMouseUp = () => {
      isDragging = false;
      container.style.cursor = 'grab';
    };

    const onMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      mouseY = -((e.clientY - rect.top) / rect.height - 0.5) * 2;

      if (isDragging) {
        const deltaX = e.clientX - prevMouseX;
        const deltaY = e.clientY - prevMouseY;
        targetRotY += deltaX * 0.008;
        targetRotX += deltaY * 0.008;
        prevMouseX = e.clientX;
        prevMouseY = e.clientY;
      }
    };

    container.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
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

    const clock = new THREE.Clock();
    let animationFrameId;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      if (!isDragging) {
        targetRotY += 0.002;
      }

      masterGroup.rotation.y += (targetRotY - masterGroup.rotation.y) * 0.08;
      masterGroup.rotation.x += (targetRotX - masterGroup.rotation.x) * 0.08;

      camera.position.x += (mouseX * 0.6 - camera.position.x) * 0.05;
      camera.position.y += (3.2 + mouseY * 0.4 - camera.position.y) * 0.05;
      camera.lookAt(0, 0, 0);

      innerCoreMesh.rotation.x = t * 0.35;
      innerCoreMesh.rotation.y = t * 0.45;
      wireCageMesh.rotation.x = -t * 0.2;
      wireCageMesh.rotation.y = -t * 0.3;

      const scale = 1 + Math.sin(t * 3) * 0.08;
      glowCoreMesh.scale.set(scale, scale, scale);

      ring1.rotation.z = t * 0.12;
      ring2.rotation.z = -t * 0.08;
      ring3.rotation.z = t * 0.06;

      satelliteMeshes.forEach((sat, i) => {
        sat.holder.position.y += Math.sin(t * 2 + i) * 0.0015;
        sat.holder.rotation.y = -masterGroup.rotation.y;
      });

      particles.rotation.y = t * 0.05;

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      container.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onWindowResize);

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [activeNodeId]);

  return <div ref={containerRef} className="w-full h-full min-h-[460px] lg:min-h-[640px]" />;
}
