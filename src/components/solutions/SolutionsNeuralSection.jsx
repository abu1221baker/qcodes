import React from 'react';
import NeuralMeshCanvas from '../three/NeuralMeshCanvas';

export default function SolutionsNeuralSection() {
  return (
    <section className="w-full px-4 sm:px-8 xl:px-12 py-16 relative bg-white border-t border-border-subtle flex flex-col justify-between" id="section-neural">
      {/* Section Headline Header */}
      <div className="max-w-7xl mx-auto w-full mb-8 flex flex-col gap-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-light border border-primary/20 text-primary self-start">
          <span className="w-2 h-2 rounded-full bg-primary animate-ping"></span>
          <span className="font-mono text-xs uppercase font-bold tracking-wider">
            SUBSTRATE 01 // ARTIFICIAL INTELLIGENCE
          </span>
        </div>
        <h2 className="font-headline text-2xl sm:text-3xl lg:text-4xl font-extrabold text-text-main tracking-tight">
          Intelligence Built Into Your Products.
        </h2>
        <p className="font-sans text-sm lg:text-base text-text-muted max-w-3xl leading-relaxed">
          Dynamic self-adapting neural mesh streaming real-time synaptic inference weights. Edge-quantized matrix transformations optimized for zero-latency execution loops.
        </p>
      </div>

      {/* Full-Width 3D Visualizer Simulator Viewport Stage */}
      <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col gap-3">
        <NeuralMeshCanvas />

        {/* Footer Technical Marker Banner */}
        <div className="flex items-center justify-between text-text-muted font-mono text-xs px-2 pt-2">
          <div className="flex items-center gap-2">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary"></span>
            <span className="text-text-main font-semibold">
              INTERACTIVE 3D NEURAL TOPOLOGY [29 NODES • 142 SYNAPSES]
            </span>
          </div>
          <span className="text-text-muted hidden sm:inline">
            DRAG TO ORBIT // CLICK TO STIMULATE // HOVER FOR TENSOR INSPECTION
          </span>
        </div>
      </div>
    </section>
  );
}
