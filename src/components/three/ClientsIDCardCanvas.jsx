import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

/**
 * High-performance, fully interactive Three.js 3D ID Badge Canvas
 * - Real-time spring-damper pendulum physics on drag & pull
 * - Curved lanyard ribbon anchored to top
 * - Chrome carabiner clip and acrylic frosted card holder
 * - Dynamic canvas texture with client logo, holographic stripe, chip, and barcode
 * - Full 180-degree flip capability
 */
export default function ClientsIDCardCanvas({
  activeClient,
  isFlipped,
  onToggleFlip,
  onCardReady,
}) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const stateRef = useRef({
    isDragging: false,
    dragStart: { x: 0, y: 0 },
    cardPos: new THREE.Vector3(0, 0, 0),
    cardVel: new THREE.Vector3(0, 0, 0),
    cardRot: new THREE.Euler(0, 0, 0),
    rotVel: new THREE.Vector3(0, 0, 0),
    targetRotY: 0,
    mousePos: new THREE.Vector2(0, 0),
    isHovered: false,
  });

  // Keep targetRotY in sync with flip state
  useEffect(() => {
    stateRef.current.targetRotY = isFlipped ? Math.PI : 0;
  }, [isFlipped]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth || 800;
    const height = container.clientHeight || 560;

    // 1. Scene & Camera Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 100);
    camera.position.set(0, 0, 8.5);

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;

    // 2. Studio Lighting Setup
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 2.2);
    keyLight.position.set(4, 6, 6);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0xfff0f5, 1.0);
    fillLight.position.set(-5, -2, 4);
    scene.add(fillLight);

    const rimLightCrimson = new THREE.PointLight(0xe21e4c, 3.5, 15);
    rimLightCrimson.position.set(-3, 3, 2);
    scene.add(rimLightCrimson);

    const rimLightCyan = new THREE.PointLight(0x00f0ff, 2.0, 15);
    rimLightCyan.position.set(3, -3, 2);
    scene.add(rimLightCyan);

    // 3. Card Texture Generator Helper
    const generateBadgeTextures = (client) => {
      // Front Texture (Dark Mode Body with High-Visibility Logo Box)
      const frontCanvas = document.createElement('canvas');
      frontCanvas.width = 1024;
      frontCanvas.height = 1440;
      const ctxF = frontCanvas.getContext('2d');

      // Sleek Dark Obsidian Card Base
      const bgGrad = ctxF.createLinearGradient(0, 0, 1024, 1440);
      bgGrad.addColorStop(0, '#0a0e17');
      bgGrad.addColorStop(0.5, '#111827');
      bgGrad.addColorStop(1, '#1e293b');
      ctxF.fillStyle = bgGrad;
      ctxF.fillRect(0, 0, 1024, 1440);

      // Subtle Background Geometric Grid Lines
      ctxF.strokeStyle = 'rgba(226, 30, 76, 0.12)';
      ctxF.lineWidth = 2;
      for (let x = 0; x < 1024; x += 64) {
        ctxF.beginPath();
        ctxF.moveTo(x, 0);
        ctxF.lineTo(x, 1440);
        ctxF.stroke();
      }
      for (let y = 0; y < 1440; y += 64) {
        ctxF.beginPath();
        ctxF.moveTo(0, y);
        ctxF.lineTo(1024, y);
        ctxF.stroke();
      }

      // Top Crimson Header Bar
      const topGrad = ctxF.createLinearGradient(0, 0, 1024, 0);
      topGrad.addColorStop(0, '#E21E4C');
      topGrad.addColorStop(1, '#830c27');
      ctxF.fillStyle = topGrad;
      ctxF.fillRect(0, 0, 1024, 200);

      // Top Header Branding Text
      ctxF.fillStyle = '#ffffff';
      ctxF.font = 'bold 36px "JetBrains Mono", monospace';
      ctxF.fillText('QCODES INFOTECH // VERIFIED ACCESS', 60, 90);
      ctxF.font = '500 24px "Inter", sans-serif';
      ctxF.fillStyle = 'rgba(255, 255, 255, 0.9)';
      ctxF.fillText('ENTERPRISE CLIENT IDENTITY MATRIX', 60, 140);

      // Holographic Foil Strip
      const holoGrad = ctxF.createLinearGradient(0, 200, 1024, 250);
      holoGrad.addColorStop(0, '#ff758c');
      holoGrad.addColorStop(0.25, '#ff7eb3');
      holoGrad.addColorStop(0.5, '#70a6ff');
      holoGrad.addColorStop(0.75, '#54e3df');
      holoGrad.addColorStop(1, '#96e6a1');
      ctxF.fillStyle = holoGrad;
      ctxF.fillRect(0, 200, 1024, 22);

      // Smart Chip Graphic (Gold/Bronze Contact Pad)
      ctxF.fillStyle = '#ffd700';
      ctxF.beginPath();
      ctxF.roundRect(790, 225, 160, 100, 14);
      ctxF.fill();
      ctxF.strokeStyle = '#b8860b';
      ctxF.lineWidth = 3;
      ctxF.stroke();

      // Chip internal lines
      ctxF.beginPath();
      ctxF.moveTo(870, 225); ctxF.lineTo(870, 325);
      ctxF.moveTo(790, 275); ctxF.lineTo(950, 275);
      ctxF.stroke();

      // Prominent High-Contrast Pure White Client Logo Box (Significantly Enlarged)
      ctxF.fillStyle = '#ffffff';
      ctxF.beginPath();
      ctxF.roundRect(60, 340, 904, 530, 28);
      ctxF.fill();
      ctxF.strokeStyle = 'rgba(226, 30, 76, 0.4)';
      ctxF.lineWidth = 4;
      ctxF.stroke();

      // Draw Client Logo (Enlarged to fill container boldly)
      if (client && client.imageObj) {
        try {
          const img = client.imageObj;
          // Dedicated scaling for target cards: ArvzApp, Boland, Cegenial Production, Great Booking, Pathways to Prevention, Trailer Depot
          const targetEnlargeNames = [
            'arvzapp',
            'boland',
            'boland survey',
            'cegenial production',
            'c genial production',
            'great booking',
            'greatbooking',
            'pathways to prevention',
            'trailer depot',
            'your trailer depot'
          ];
          const isTargetEnlarge = client.name && targetEnlargeNames.some(t => client.name.toLowerCase().includes(t) || t.includes(client.name.toLowerCase()));
          
          const maxW = isTargetEnlarge ? 850 : 800;
          const maxH = isTargetEnlarge ? 480 : 440;
          const scale = Math.min(maxW / img.width, maxH / img.height);
          const dw = img.width * scale;
          const dh = img.height * scale;
          const dx = 60 + (904 - dw) / 2;
          const dy = 340 + (530 - dh) / 2;

          ctxF.imageSmoothingEnabled = true;
          ctxF.imageSmoothingQuality = 'high';
          ctxF.drawImage(img, dx, dy, dw, dh);
        } catch {
          ctxF.fillStyle = '#0f172a';
          ctxF.font = 'bold 58px "Manrope", sans-serif';
          ctxF.textAlign = 'center';
          ctxF.fillText(client.name, 512, 605);
          ctxF.textAlign = 'left';
        }
      } else {
        ctxF.fillStyle = '#0f172a';
        ctxF.font = 'bold 58px "Manrope", sans-serif';
        ctxF.textAlign = 'center';
        ctxF.fillText(client.name, 512, 605);
        ctxF.textAlign = 'left';
      }

      // Client Meta Info Section (Crisp Light Text on Dark Card)
      ctxF.fillStyle = '#ffffff';
      ctxF.font = 'bold 44px "Manrope", sans-serif';
      ctxF.fillText(client.name, 60, 925);

      ctxF.fillStyle = '#ff3b69';
      ctxF.font = 'bold 25px "JetBrains Mono", monospace';
      ctxF.fillText(`TIER: ${client.tier}  •  ID: ${client.badgeId}`, 60, 975);

      ctxF.fillStyle = '#94a3b8';
      ctxF.font = '500 23px "Inter", sans-serif';
      ctxF.fillText(`SECTOR: ${client.industry}`, 60, 1020);
      
      ctxF.fillStyle = '#38bdf8';
      ctxF.fillText(`VERIFIED PRODUCTION DEPLOYMENT // SOC-2 COMPLIANT`, 60, 1060);

      // Bottom Barcode & Tech Footer
      ctxF.fillStyle = 'rgba(255, 255, 255, 0.15)';
      ctxF.fillRect(60, 1110, 904, 3);

      // Simulated Barcode (High Contrast White)
      ctxF.fillStyle = '#ffffff';
      let bx = 60;
      const barPattern = [4, 8, 3, 12, 6, 4, 10, 3, 8, 14, 5, 4, 12, 6, 8, 4, 10, 5, 8, 4, 14, 6, 4, 10];
      for (let i = 0; i < 52; i++) {
        const w = barPattern[i % barPattern.length];
        ctxF.fillRect(bx, 1150, w, 85);
        bx += w + 6;
        if (bx > 680) break;
      }

      ctxF.font = '600 20px "JetBrains Mono", monospace';
      ctxF.fillStyle = '#94a3b8';
      ctxF.fillText(`AUTHENTICITY HASH: 0x${Math.random().toString(16).substring(2, 10).toUpperCase()}...`, 60, 1280);
      ctxF.fillStyle = '#34d399';
      ctxF.fillText(`STATUS: ACTIVE ALLIANCE`, 60, 1315);

      // Mini QR Box on bottom right
      ctxF.strokeStyle = '#ffffff';
      ctxF.lineWidth = 4;
      ctxF.strokeRect(790, 1140, 174, 174);
      ctxF.fillStyle = '#E21E4C';
      ctxF.fillRect(810, 1160, 46, 46);
      ctxF.fillRect(898, 1160, 46, 46);
      ctxF.fillRect(810, 1248, 46, 46);
      ctxF.fillStyle = '#ffffff';
      ctxF.fillRect(872, 1216, 32, 32);
      ctxF.fillRect(912, 1248, 32, 32);

      // BACK TEXTURE (Dark Cyberpunk Spec Sheet)
      const backCanvas = document.createElement('canvas');
      backCanvas.width = 1024;
      backCanvas.height = 1440;
      const ctxB = backCanvas.getContext('2d');

      ctxB.fillStyle = '#070a11';
      ctxB.fillRect(0, 0, 1024, 1440);

      // Magnetic Stripe
      ctxB.fillStyle = '#1e293b';
      ctxB.fillRect(0, 140, 1024, 220);

      // Signature Panel
      ctxB.fillStyle = '#f8fafc';
      ctxB.fillRect(80, 420, 680, 140);
      ctxB.fillStyle = '#0f172a';
      ctxB.font = 'italic 32px "Inter", cursive';
      ctxB.fillText('Authorized Signature // Encrypted Token', 100, 500);

      // Hologram Security Seal
      const sealGrad = ctxB.createRadialGradient(880, 490, 10, 880, 490, 70);
      sealGrad.addColorStop(0, '#fef08a');
      sealGrad.addColorStop(0.5, '#67e8f9');
      sealGrad.addColorStop(1, '#f43f5e');
      ctxB.fillStyle = sealGrad;
      ctxB.beginPath();
      ctxB.arc(860, 490, 65, 0, Math.PI * 2);
      ctxB.fill();
      ctxB.fillStyle = '#0f172a';
      ctxB.font = 'bold 20px "JetBrains Mono", monospace';
      ctxB.fillText('SECURE', 830, 495);

      // Technical Specifications Text
      ctxB.fillStyle = '#94a3b8';
      ctxB.font = '500 24px "Inter", sans-serif';
      ctxB.fillText('QCODES INFOTECH GLOBAL CLIENT NETWORK', 80, 640);
      ctxB.fillText('This credential verifies authorized enterprise system engagement.', 80, 690);
      ctxB.fillText('All solutions governed by SOC-2 Type II SLAs and ISO-27001 policies.', 80, 740);

      ctxB.fillStyle = '#ffffff';
      ctxB.font = 'bold 28px "JetBrains Mono", monospace';
      ctxB.fillText('TECHNICAL STACK DELIVERABLES:', 80, 840);

      ctxB.font = '500 24px "JetBrains Mono", monospace';
      ctxB.fillStyle = '#38bdf8';
      (client.techStack || ['Full-Stack Cloud', 'React / Next.js', 'PostgreSQL']).forEach((tech, idx) => {
        ctxB.fillText(`[${idx + 1}] ${tech}`, 100, 900 + idx * 55);
      });

      ctxB.fillStyle = 'rgba(255, 255, 255, 0.45)';
      ctxB.font = '400 20px "Inter", sans-serif';
      ctxB.fillText('24/7 Global NOC Escalation: support@qcodesinfotech.com', 80, 1260);
      ctxB.fillText('Property of Qcodes Infotech Systems • If found, visit qcodesinfotech.com', 80, 1310);

      const frontTexture = new THREE.CanvasTexture(frontCanvas);
      frontTexture.colorSpace = THREE.SRGBColorSpace;
      frontTexture.generateMipmaps = true;

      const backTexture = new THREE.CanvasTexture(backCanvas);
      backTexture.colorSpace = THREE.SRGBColorSpace;
      backTexture.generateMipmaps = true;

      return { frontTexture, backTexture };
    };

    // 4. Create 3D Badge Hierarchy
    const badgeGroup = new THREE.Group();
    scene.add(badgeGroup);

    // Card Dimensions
    const cardW = 2.4;
    const cardH = 3.5;
    const cardThick = 0.04;

    // Card Mesh (Dual Material Box: Front & Back textures, frosted dark sides)
    const cardGeometry = new THREE.BoxGeometry(cardW, cardH, cardThick);

    const { frontTexture, backTexture } = generateBadgeTextures(activeClient);

    const frostedSideMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x111827,
      roughness: 0.3,
      metalness: 0.2,
      transmission: 0.1,
      transparent: true,
      opacity: 0.98,
    });

    const frontMaterial = new THREE.MeshStandardMaterial({
      map: frontTexture,
      roughness: 0.35,
      metalness: 0.15,
    });

    const backMaterial = new THREE.MeshStandardMaterial({
      map: backTexture,
      roughness: 0.35,
      metalness: 0.2,
    });

    // Box materials order: [right, left, top, bottom, front, back]
    const cardMaterials = [
      frostedSideMaterial,
      frostedSideMaterial,
      frostedSideMaterial,
      frostedSideMaterial,
      frontMaterial,
      backMaterial,
    ];

    const cardMesh = new THREE.Mesh(cardGeometry, cardMaterials);
    badgeGroup.add(cardMesh);

    // Acrylic Protective Sleeve Frame
    const frameGeometry = new THREE.BoxGeometry(cardW + 0.14, cardH + 0.28, cardThick + 0.05);
    const frameMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.25,
      roughness: 0.1,
      metalness: 0.1,
      transmission: 0.7,
      ior: 1.5,
    });
    const frameMesh = new THREE.Mesh(frameGeometry, frameMaterial);
    frameMesh.position.y = 0.06;
    badgeGroup.add(frameMesh);

    // Top Carabiner Clip & Metallic Mount
    const clipGroup = new THREE.Group();
    clipGroup.position.y = cardH / 2 + 0.22;
    badgeGroup.add(clipGroup);

    const metalMaterial = new THREE.MeshStandardMaterial({
      color: 0xd4d8df,
      metalness: 0.92,
      roughness: 0.18,
    });

    // Ring
    const ringGeo = new THREE.TorusGeometry(0.16, 0.035, 16, 32);
    const ringMesh = new THREE.Mesh(ringGeo, metalMaterial);
    ringMesh.rotation.x = Math.PI / 2;
    clipGroup.add(ringMesh);

    // Carabiner Buckle Body
    const clipBodyGeo = new THREE.CylinderGeometry(0.09, 0.09, 0.28, 16);
    const clipBodyMesh = new THREE.Mesh(clipBodyGeo, metalMaterial);
    clipBodyMesh.position.y = 0.18;
    clipGroup.add(clipBodyMesh);

    // 5. Dynamic Lanyard Ribbon
    const anchorY = 4.2;
    const lanyardMaterial = new THREE.MeshStandardMaterial({
      color: 0xE21E4C,
      roughness: 0.7,
      metalness: 0.1,
      side: THREE.DoubleSide,
    });

    let lanyardMesh = null;
    const updateLanyard = () => {
      if (lanyardMesh) scene.remove(lanyardMesh);

      const topAnchor = new THREE.Vector3(0, anchorY, -0.2);
      const clipAnchor = new THREE.Vector3().copy(badgeGroup.position);
      clipAnchor.y += cardH / 2 + 0.4;

      const midPoint = new THREE.Vector3()
        .addVectors(topAnchor, clipAnchor)
        .multiplyScalar(0.5);
      // Slight natural sag
      midPoint.z += 0.15;

      const curve = new THREE.CatmullRomCurve3([topAnchor, midPoint, clipAnchor]);
      const tubeGeo = new THREE.TubeGeometry(curve, 32, 0.035, 8, false);
      lanyardMesh = new THREE.Mesh(tubeGeo, lanyardMaterial);
      scene.add(lanyardMesh);
    };
    updateLanyard();

    // 6. Interaction & Drag Physics
    const raycaster = new THREE.Raycaster();
    const dragPlane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
    const intersection = new THREE.Vector3();

    const getPointerPos = (e) => {
      const rect = container.getBoundingClientRect();
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      return {
        x: ((clientX - rect.left) / rect.width) * 2 - 1,
        y: -((clientY - rect.top) / rect.height) * 2 + 1,
      };
    };

    const handlePointerDown = (e) => {
      const pointer = getPointerPos(e);
      raycaster.setFromCamera(pointer, camera);
      const intersects = raycaster.intersectObjects([cardMesh, frameMesh]);
      if (intersects.length > 0) {
        stateRef.current.isDragging = true;
        container.style.cursor = 'grabbing';
      }
    };

    const handlePointerMove = (e) => {
      const pointer = getPointerPos(e);
      stateRef.current.mousePos.set(pointer.x, pointer.y);

      raycaster.setFromCamera(pointer, camera);
      const intersects = raycaster.intersectObjects([cardMesh, frameMesh]);
      stateRef.current.isHovered = intersects.length > 0;

      if (!stateRef.current.isDragging) {
        container.style.cursor = stateRef.current.isHovered ? 'grab' : 'default';
        return;
      }

      if (raycaster.ray.intersectPlane(dragPlane, intersection)) {
        // Elastic pull limit
        const pullDistance = Math.min(intersection.length(), 4.0);
        const pullDir = intersection.clone().normalize();
        stateRef.current.cardPos.copy(pullDir.multiplyScalar(pullDistance));
      }
    };

    const handlePointerUp = () => {
      if (stateRef.current.isDragging) {
        stateRef.current.isDragging = false;
        container.style.cursor = stateRef.current.isHovered ? 'grab' : 'default';
      }
    };

    const handleCanvasClick = (e) => {
      // Toggle flip on click if not dragging
      const pointer = getPointerPos(e);
      raycaster.setFromCamera(pointer, camera);
      const intersects = raycaster.intersectObjects([cardMesh, frameMesh]);
      if (intersects.length > 0 && !stateRef.current.isDragging) {
        if (onToggleFlip) onToggleFlip();
      }
    };

    container.addEventListener('mousedown', handlePointerDown);
    window.addEventListener('mousemove', handlePointerMove);
    window.addEventListener('mouseup', handlePointerUp);

    container.addEventListener('touchstart', handlePointerDown, { passive: true });
    window.addEventListener('touchmove', handlePointerMove, { passive: true });
    window.addEventListener('touchend', handlePointerUp, { passive: true });

    container.addEventListener('click', handleCanvasClick);

    // 7. Animation Loop with Spring Damping Physics
    let animationId;
    const kSpring = 42; // Spring stiffness
    const dDamping = 6.2; // Damping ratio
    const clock = new THREE.Clock();

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      const dt = Math.min(clock.getDelta(), 0.05);

      const state = stateRef.current;

      if (!state.isDragging) {
        // Hooke's Law Spring Force F = -k * x - d * v
        const springForceX = -kSpring * state.cardPos.x - dDamping * state.cardVel.x;
        const springForceY = -kSpring * state.cardPos.y - dDamping * state.cardVel.y;
        const springForceZ = -kSpring * state.cardPos.z - dDamping * state.cardVel.z;

        state.cardVel.x += springForceX * dt;
        state.cardVel.y += springForceY * dt;
        state.cardVel.z += springForceZ * dt;

        state.cardPos.x += state.cardVel.x * dt;
        state.cardPos.y += state.cardVel.y * dt;
        state.cardPos.z += state.cardVel.z * dt;
      }

      // Update Badge Position
      badgeGroup.position.copy(state.cardPos);

      // Dynamic Tilting & Pendulum Angles
      const targetRotZ = -state.cardPos.x * 0.28;
      const targetRotX = state.cardPos.y * 0.18 + (state.isHovered ? state.mousePos.y * 0.15 : 0);
      const targetRotY = state.targetRotY + (state.isHovered ? state.mousePos.x * 0.25 : 0);

      // Smooth Angular Lerp
      badgeGroup.rotation.z += (targetRotZ - badgeGroup.rotation.z) * 0.15;
      badgeGroup.rotation.x += (targetRotX - badgeGroup.rotation.x) * 0.15;
      badgeGroup.rotation.y += (targetRotY - badgeGroup.rotation.y) * 0.12;

      // Update lanyard cable
      updateLanyard();

      renderer.render(scene, camera);
    };

    animate();

    // Signal that 3D card textures and scene are ready
    if (onCardReady && activeClient) {
      requestAnimationFrame(() => {
        onCardReady(activeClient.id);
      });
    }

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const nw = container.clientWidth;
      const nh = container.clientHeight;
      camera.aspect = nw / nh;
      camera.updateProjectionMatrix();
      renderer.setSize(nw, nh);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('mousedown', handlePointerDown);
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('mouseup', handlePointerUp);
      container.removeEventListener('touchstart', handlePointerDown);
      window.removeEventListener('touchmove', handlePointerMove);
      window.removeEventListener('touchend', handlePointerUp);
      container.removeEventListener('click', handleCanvasClick);
      renderer.dispose();
      frontTexture.dispose();
      backTexture.dispose();
      cardGeometry.dispose();
      frameGeometry.dispose();
    };
  }, [activeClient]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[520px] sm:h-[580px] lg:h-[640px] flex items-center justify-center select-none"
    >
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
}
