import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export default function NeuralMeshCanvas() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const triggerImpulseRef = useRef(null);
  const cycleTopologyRef = useRef(null);
  const toggleAutoOrbitRef = useRef(null);

  const [autoOrbit, setAutoOrbit] = useState(true);
  const [topologyIndex, setTopologyIndex] = useState(0);
  const topologyNames = ['TOPOLOGY: DEEP', 'TOPOLOGY: LATENT CYLINDER', 'TOPOLOGY: SPARSE CONV'];

  // Tooltip state
  const [tooltip, setTooltip] = useState({
    visible: false,
    x: 0,
    y: 0,
    id: '',
    layer: '',
    act: '',
    weight: '',
  });

  // Dynamic fluctuating metrics
  const [telemetry, setTelemetry] = useState({
    bias: '+0.003491 Δ',
    loss: '0.0082 NATS',
    thru: '528.4K TOK/S',
    lat: '0.38 MS',
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTelemetry({
        bias: `+${(0.0034 + Math.random() * 0.0003).toFixed(6)} Δ`,
        loss: `${(0.0078 + Math.random() * 0.0008).toFixed(4)} NATS`,
        thru: `${(520.0 + Math.random() * 12.0).toFixed(1)}K TOK/S`,
        lat: `${(0.36 + Math.random() * 0.04).toFixed(2)} MS`,
      });
    }, 1200);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const width = container.clientWidth || 800;
    const height = container.clientHeight || 600;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x0c0f14, 0.0018);

    const camera = new THREE.PerspectiveCamera(45, width / height, 1, 1000);
    camera.position.set(0, 15, 230);

    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.85);
    scene.add(ambientLight);

    const mainLight = new THREE.PointLight(0xe21e4c, 3.5, 350);
    mainLight.position.set(40, 80, 100);
    scene.add(mainLight);

    const secondaryLight = new THREE.PointLight(0xfd5971, 2.5, 280);
    secondaryLight.position.set(-60, -50, 80);
    scene.add(secondaryLight);

    // Cyber Ground Grid
    const gridHelper = new THREE.GridHelper(300, 24, 0xe21e4c, 0x1f293d);
    gridHelper.position.y = -65;
    gridHelper.material.opacity = 0.25;
    gridHelper.material.transparent = true;
    scene.add(gridHelper);

    // 5 Layers Architecture
    const layerDefs = [
      { count: 4, x: -110, name: 'INPUT SENSORS', act: 'Identity' },
      { count: 7, x: -55, name: 'TENSOR EMBED', act: 'Swish' },
      { count: 9, x: 0, name: 'LATENT MATRIX', act: 'GELU' },
      { count: 6, x: 55, name: 'ATTENTION MAP', act: 'Softmax' },
      { count: 3, x: 110, name: 'OUTPUT NEXUS', act: 'Linear' },
    ];

    const nodeGroup = new THREE.Group();
    scene.add(nodeGroup);

    const nodes = [];
    const photonPackets = [];

    const coreGeo = new THREE.SphereGeometry(3.2, 24, 24);
    const outCoreGeo = new THREE.SphereGeometry(4.2, 24, 24);
    const cageGeo = new THREE.IcosahedronGeometry(5.2, 0);
    const ringGeo = new THREE.RingGeometry(5.8, 6.4, 32);

    const matInput = new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0xba0038, emissiveIntensity: 0.6, roughness: 0.2 });
    const matHidden = new THREE.MeshStandardMaterial({ color: 0xe21e4c, emissive: 0xa91639, emissiveIntensity: 0.75, roughness: 0.2 });
    const matLatent = new THREE.MeshStandardMaterial({ color: 0xfd5971, emissive: 0xe21e4c, emissiveIntensity: 0.9, roughness: 0.1 });
    const matOutput = new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0xe21e4c, emissiveIntensity: 1.0, roughness: 0.1 });

    const cageMat = new THREE.MeshBasicMaterial({ color: 0xe21e4c, wireframe: true, transparent: true, opacity: 0.45 });
    const ringMat = new THREE.MeshBasicMaterial({ color: 0xfd5971, side: THREE.DoubleSide, transparent: true, opacity: 0.65 });

    let nodeIdCounter = 1;
    layerDefs.forEach((layer, layerIdx) => {
      const isInput = layerIdx === 0;
      const isOutput = layerIdx === layerDefs.length - 1;
      const isLatent = layerIdx === 2;

      for (let i = 0; i < layer.count; i++) {
        const step = i - (layer.count - 1) / 2;
        const y = step * (layerIdx === 2 ? 14 : 17);
        const z = Math.sin(step * 0.8) * (layerIdx === 2 ? 26 : 14) + (Math.random() - 0.5) * 6;
        const x = layer.x + (Math.random() - 0.5) * 4;

        const nodeObj = new THREE.Group();
        nodeObj.position.set(x, y, z);

        const meshMat = isInput ? matInput : isOutput ? matOutput : isLatent ? matLatent : matHidden;
        const core = new THREE.Mesh(isOutput ? outCoreGeo : coreGeo, meshMat.clone());
        nodeObj.add(core);

        let cage = null;
        if (isLatent || isOutput || i % 2 === 0) {
          cage = new THREE.Mesh(cageGeo, cageMat.clone());
          nodeObj.add(cage);
        }

        const ring = new THREE.Mesh(ringGeo, ringMat.clone());
        nodeObj.add(ring);

        nodeGroup.add(nodeObj);

        const nodeData = {
          id: `0x${nodeIdCounter.toString(16).toUpperCase().padStart(2, '0')}`,
          index: nodeIdCounter++,
          layer: layerIdx,
          layerName: layer.name,
          act: layer.act,
          weight: (Math.random() * 2.4 - 0.2).toFixed(4),
          group: nodeObj,
          core: core,
          cage: cage,
          ring: ring,
          pulseScale: 1.0,
          originalPos: new THREE.Vector3(x, y, z),
          phase: Math.random() * Math.PI * 2,
        };
        nodes.push(nodeData);
        core.userData = { nodeData: nodeData };
      }
    });

    // Synapses
    const synapseMaterial = new THREE.LineBasicMaterial({
      color: 0xe21e4c,
      transparent: true,
      opacity: 0.22,
      blending: THREE.AdditiveBlending,
    });

    const linePositions = [];
    const synapsePairs = [];

    for (let l = 0; l < layerDefs.length - 1; l++) {
      const fromNodes = nodes.filter((n) => n.layer === l);
      const toNodes = nodes.filter((n) => n.layer === l + 1);

      fromNodes.forEach((fromNode) => {
        toNodes.forEach((toNode) => {
          if (Math.random() > 0.15) {
            linePositions.push(
              fromNode.originalPos.x, fromNode.originalPos.y, fromNode.originalPos.z,
              toNode.originalPos.x, toNode.originalPos.y, toNode.originalPos.z
            );
            synapsePairs.push({ from: fromNode, to: toNode, weight: Math.random() });
          }
        });
      });
    }

    const synapseGeometry = new THREE.BufferGeometry();
    synapseGeometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
    const synapseMesh = new THREE.LineSegments(synapseGeometry, synapseMaterial);
    nodeGroup.add(synapseMesh);

    // Glowing photon packets
    const packetGeo = new THREE.SphereGeometry(1.2, 12, 12);
    const packetMat = new THREE.MeshBasicMaterial({ color: 0xfff0f2, blending: THREE.AdditiveBlending });

    const numPackets = 48;
    for (let p = 0; p < numPackets; p++) {
      const packetMesh = new THREE.Mesh(packetGeo, packetMat.clone());
      nodeGroup.add(packetMesh);
      const pair = synapsePairs[Math.floor(Math.random() * synapsePairs.length)];
      photonPackets.push({
        mesh: packetMesh,
        pair: pair,
        progress: Math.random(),
        speed: 0.008 + Math.random() * 0.018,
      });
    }

    // Particle Cloud
    const particleCount = 280;
    const particleGeo = new THREE.BufferGeometry();
    const particlePos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePos[i] = (Math.random() - 0.5) * 320;
      particlePos[i + 1] = (Math.random() - 0.5) * 160;
      particlePos[i + 2] = (Math.random() - 0.5) * 180;
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePos, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0xe21e4c,
      size: 2.2,
      transparent: true,
      opacity: 0.5,
      blending: THREE.AdditiveBlending,
    });
    const particleField = new THREE.Points(particleGeo, particleMat);
    nodeGroup.add(particleField);

    // Controls state
    let isDragging = false;
    let prevMousePos = { x: 0, y: 0 };
    let currentAutoOrbit = true;
    let targetRotation = { x: 0.05, y: -0.1 };

    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2(-1000, -1000);

    const onMouseDown = (e) => {
      isDragging = true;
      prevMousePos = { x: e.clientX, y: e.clientY };
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    const onMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      if (isDragging) {
        const deltaX = e.clientX - prevMousePos.x;
        const deltaY = e.clientY - prevMousePos.y;
        targetRotation.y += deltaX * 0.006;
        targetRotation.x += deltaY * 0.006;
        targetRotation.x = Math.max(-0.6, Math.min(0.6, targetRotation.x));
        prevMousePos = { x: e.clientX, y: e.clientY };
      }
    };

    const onMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
      setTooltip((prev) => ({ ...prev, visible: false }));
    };

    canvas.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('mouseleave', onMouseLeave);

    // Touch listeners
    const onTouchStart = (e) => {
      if (e.touches.length === 1) {
        isDragging = true;
        prevMousePos = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    };

    const onTouchMove = (e) => {
      if (isDragging && e.touches.length === 1) {
        const deltaX = e.touches[0].clientX - prevMousePos.x;
        const deltaY = e.touches[0].clientY - prevMousePos.y;
        targetRotation.y += deltaX * 0.006;
        targetRotation.x += deltaY * 0.006;
        prevMousePos = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    };

    const onTouchEnd = () => {
      isDragging = false;
    };

    canvas.addEventListener('touchstart', onTouchStart, { passive: true });
    canvas.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('touchend', onTouchEnd);

    // Trigger impulse function
    const triggerImpulseWave = () => {
      nodes.forEach((n) => {
        setTimeout(() => {
          n.pulseScale = 2.4;
          n.core.material.emissiveIntensity = 2.5;
        }, n.layer * 90 + Math.random() * 40);
      });

      photonPackets.forEach((p) => {
        p.speed = 0.04 + Math.random() * 0.03;
        setTimeout(() => {
          p.speed = 0.008 + Math.random() * 0.018;
        }, 1800);
      });
    };
    triggerImpulseRef.current = triggerImpulseWave;

    const topologyModes = [
      { name: 'TOPOLOGY: DEEP', scaleZ: 1.0, scaleY: 1.0 },
      { name: 'TOPOLOGY: LATENT CYLINDER', scaleZ: 2.2, scaleY: 0.8 },
      { name: 'TOPOLOGY: SPARSE CONV', scaleZ: 0.4, scaleY: 1.4 },
    ];

    const cycleTopology = (newIdx) => {
      const mode = topologyModes[newIdx];
      nodes.forEach((n) => {
        n.originalPos.z = Math.sin(n.index) * 25 * mode.scaleZ;
        n.originalPos.y = (n.originalPos.y / (n.group.position.y || 1)) * mode.scaleY * 16;
      });
      triggerImpulseWave();
    };
    cycleTopologyRef.current = cycleTopology;

    toggleAutoOrbitRef.current = () => {
      currentAutoOrbit = !currentAutoOrbit;
      setAutoOrbit(currentAutoOrbit);
    };

    const onResize = () => {
      if (!container || !renderer || !camera) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', onResize);

    const clock = new THREE.Clock();
    let impulseTimer = 0;
    let animationFrameId;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const delta = clock.getDelta();
      const time = clock.getElapsedTime();

      impulseTimer += delta;
      if (impulseTimer > 4.5) {
        triggerImpulseWave();
        impulseTimer = 0;
      }

      if (currentAutoOrbit && !isDragging) {
        targetRotation.y += 0.004;
      }
      nodeGroup.rotation.y += (targetRotation.y - nodeGroup.rotation.y) * 0.06;
      nodeGroup.rotation.x += (targetRotation.x - nodeGroup.rotation.x) * 0.06;

      nodes.forEach((n) => {
        const floatOffset = Math.sin(time * 2.2 + n.phase) * 1.8;
        n.group.position.y = n.originalPos.y + floatOffset;

        if (n.cage) {
          n.cage.rotation.x += 0.015;
          n.cage.rotation.y += 0.02;
        }
        if (n.ring) {
          n.ring.rotation.z += 0.025;
        }

        if (n.pulseScale > 1.0) {
          n.pulseScale += (1.0 - n.pulseScale) * 0.08;
          n.group.scale.setScalar(n.pulseScale);
          n.core.material.emissiveIntensity += (0.75 - n.core.material.emissiveIntensity) * 0.08;
        }
      });

      photonPackets.forEach((p) => {
        p.progress += p.speed;
        if (p.progress >= 1.0) {
          p.progress = 0;
          p.pair = synapsePairs[Math.floor(Math.random() * synapsePairs.length)];
        }
        const p1 = p.pair.from.group.position;
        const p2 = p.pair.to.group.position;
        p.mesh.position.lerpVectors(p1, p2, p.progress);
      });

      particleField.rotation.y = time * 0.03;
      particleField.rotation.x = Math.sin(time * 0.02) * 0.05;

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(nodes.map((n) => n.core));

      if (intersects.length > 0) {
        const hit = intersects[0];
        const nData = hit.object.userData.nodeData;

        const vector = nData.group.position.clone();
        vector.applyMatrix4(nodeGroup.matrixWorld);
        vector.project(camera);

        const x = (vector.x * 0.5 + 0.5) * container.clientWidth;
        const y = (-vector.y * 0.5 + 0.5) * container.clientHeight;

        setTooltip({
          visible: true,
          x: Math.max(90, Math.min(container.clientWidth - 90, x)),
          y: Math.max(60, Math.min(container.clientHeight - 80, y)),
          id: `NODE_${nData.id}`,
          layer: `LAYER ${nData.layer + 1}: ${nData.layerName}`,
          act: `${nData.act} (0.942)`,
          weight: `${nData.weight > 0 ? '+' : ''}${nData.weight}`,
        });

        nData.pulseScale = 1.4;
      } else {
        setTooltip((prev) => ({ ...prev, visible: false }));
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      canvas.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      canvas.removeEventListener('mousemove', onMouseMove);
      canvas.removeEventListener('mouseleave', onMouseLeave);
      canvas.removeEventListener('touchstart', onTouchStart);
      canvas.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);
      window.removeEventListener('resize', onResize);
      renderer.dispose();
    };
  }, []);

  const handleStimulate = () => {
    if (triggerImpulseRef.current) triggerImpulseRef.current();
  };

  const handleTopologyCycle = () => {
    const nextIdx = (topologyIndex + 1) % topologyNames.length;
    setTopologyIndex(nextIdx);
    if (cycleTopologyRef.current) cycleTopologyRef.current(nextIdx);
  };

  const handleAutoOrbitToggle = () => {
    if (toggleAutoOrbitRef.current) toggleAutoOrbitRef.current();
  };

  return (
    <div
      ref={containerRef}
      className="w-full h-[580px] lg:h-[640px] bg-[#0c0f14] border border-border-subtle rounded-2xl overflow-hidden relative shadow-[0_12px_40px_rgba(226,30,76,0.08)] flex flex-col justify-between p-4 sm:p-6 select-none group"
    >
      {/* Cybernetic HUD Corner Accents */}
      <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-primary/70 pointer-events-none z-20"></div>
      <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-primary/70 pointer-events-none z-20"></div>
      <div className="absolute bottom-2 left-2 w-3 h-2 border-b-2 border-l-2 border-primary/70 pointer-events-none z-20"></div>
      <div className="absolute bottom-2 right-2 w-3 h-2 border-b-2 border-r-2 border-primary/70 pointer-events-none z-20"></div>

      {/* Ambient Technical Scanline Effect */}
      <div className="absolute inset-0 pointer-events-none z-10 bg-[linear-gradient(rgba(18,24,38,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px] opacity-25"></div>

      {/* Top HUD Visualizer Bar */}
      <div className="relative z-20 flex flex-wrap items-center justify-between gap-2 bg-[#141822]/90 backdrop-blur-md border border-white/10 px-4 py-2 rounded-xl shadow-md">
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          <span className="font-mono text-[11px] sm:text-xs text-white font-bold tracking-wider">
            NEURAL_CORE // TENSOR_MESH_3D
          </span>
          <span className="hidden sm:inline-block font-mono text-[10px] text-primary bg-primary/10 border border-primary/30 px-1.5 py-0.5 rounded font-semibold">
            WEBGL 2.0
          </span>
          <span className="hidden md:inline-block font-mono text-[10px] text-gray-400 bg-white/5 border border-white/10 px-1.5 py-0.5 rounded">
            FP16 ACCELERATED
          </span>
        </div>

        {/* Quick Action HUD Controls */}
        <div className="flex items-center gap-1.5">
          <button
            onClick={handleStimulate}
            type="button"
            className="px-2.5 py-1 bg-primary hover:bg-primary-dark text-white font-mono text-[11px] font-bold rounded-lg flex items-center gap-1 transition-all active:scale-95 shadow-sm shadow-primary/20 cursor-pointer"
            title="Trigger Synaptic Voltage Spike"
          >
            <span className="material-symbols-outlined text-[14px]">bolt</span>
            <span>STIMULATE</span>
          </button>
          <button
            onClick={handleTopologyCycle}
            type="button"
            className="px-2.5 py-1 bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white font-mono text-[11px] rounded-lg transition-colors flex items-center gap-1 cursor-pointer"
            title="Cycle Topology Architecture"
          >
            <span className="material-symbols-outlined text-[14px]">hub</span>
            <span className="hidden sm:inline">{topologyNames[topologyIndex]}</span>
          </button>
          <button
            onClick={handleAutoOrbitToggle}
            type="button"
            className={`px-2 py-1 rounded-lg transition-colors font-mono text-[11px] cursor-pointer ${
              autoOrbit ? 'bg-primary/20 text-primary border border-primary/30' : 'bg-white/10 text-gray-300 hover:text-white'
            }`}
            title="Toggle Auto Rotation"
          >
            <span className="material-symbols-outlined text-[14px]">sync</span>
          </button>
        </div>
      </div>

      {/* WebGL Canvas */}
      <div className="absolute inset-0 z-0">
        <canvas ref={canvasRef} className="w-full h-full block cursor-grab active:cursor-grabbing" />
      </div>

      {/* Dynamic Hover Tooltip */}
      {tooltip.visible && (
        <div
          className="absolute z-30 pointer-events-none bg-[#141822]/95 backdrop-blur-md border border-primary/40 rounded-lg p-2.5 shadow-xl text-left font-mono text-[11px] text-gray-200 transition-opacity duration-150"
          style={{
            left: `${tooltip.x}px`,
            top: `${tooltip.y}px`,
            transform: 'translate(-50%, -120%)',
            minWidth: '170px',
          }}
        >
          <div className="flex items-center justify-between border-b border-white/10 pb-1 mb-1.5">
            <span className="text-primary font-bold">{tooltip.id}</span>
            <span className="text-gray-400 text-[10px]">{tooltip.layer}</span>
          </div>
          <div className="flex flex-col gap-0.5 text-[10px]">
            <div className="flex justify-between">
              <span className="text-gray-400">Activation:</span>
              <span className="text-white font-bold">{tooltip.act}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Tensor W:</span>
              <span className="text-emerald-400 font-bold">{tooltip.weight}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Synapses:</span>
              <span className="text-gray-300">14 Outbound</span>
            </div>
          </div>
        </div>
      )}

      {/* Weight Telemetry Floating Cards */}
      <div className="relative z-20 grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 pointer-events-none">
        <div className="bg-[#141822]/85 backdrop-blur-md p-2.5 rounded-xl border border-white/10 shadow-sm pointer-events-auto">
          <span className="font-mono text-[10px] text-gray-400 uppercase font-semibold block">Synaptic Bias</span>
          <span className="font-mono text-xs sm:text-sm text-primary font-bold">{telemetry.bias}</span>
          <span className="font-sans text-[10px] text-gray-400 block truncate">AdamW Clamped</span>
        </div>
        <div className="bg-[#141822]/85 backdrop-blur-md p-2.5 rounded-xl border border-white/10 shadow-sm pointer-events-auto">
          <span className="font-mono text-[10px] text-gray-400 uppercase font-semibold block">Loss Entropy</span>
          <span className="font-mono text-xs sm:text-sm text-emerald-400 font-bold">{telemetry.loss}</span>
          <span className="font-sans text-[10px] text-gray-400 block truncate">Converged</span>
        </div>
        <div className="bg-[#141822]/85 backdrop-blur-md p-2.5 rounded-xl border border-white/10 shadow-sm pointer-events-auto">
          <span className="font-mono text-[10px] text-gray-400 uppercase font-semibold block">Throughput</span>
          <span className="font-mono text-xs sm:text-sm text-white font-bold">{telemetry.thru}</span>
          <span className="font-sans text-[10px] text-gray-400 block truncate">16x GPU Ring</span>
        </div>
        <div className="bg-[#141822]/85 backdrop-blur-md p-2.5 rounded-xl border border-white/10 shadow-sm pointer-events-auto">
          <span className="font-mono text-[10px] text-gray-400 uppercase font-semibold block">Latency Loop</span>
          <span className="font-mono text-xs sm:text-sm text-primary font-bold">{telemetry.lat}</span>
          <span className="font-sans text-[10px] text-gray-400 block truncate">Zero-Jitter FP16</span>
        </div>
      </div>
    </div>
  );
}
