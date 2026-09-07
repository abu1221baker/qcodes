import React from 'react';
import Layout from '../components/layout/Layout';
import SolutionsStatusHud from '../components/solutions/SolutionsStatusHud';
import SolutionsHero from '../components/solutions/SolutionsHero';
import SolutionsNeuralSection from '../components/solutions/SolutionsNeuralSection';
import SolutionsCloudSection from '../components/solutions/SolutionsCloudSection';
import SolutionsDataSection from '../components/solutions/SolutionsDataSection';
import SolutionsCta from '../components/solutions/SolutionsCta';

export default function SolutionsPage() {
  return (
    <Layout>
      <div className="flex flex-col w-full">
        {/* Top Telemetric Status HUD Bar */}
        <SolutionsStatusHud />

        {/* Hero Section: Delivery Lifecycle & Methodology with solutions.svg */}
        <SolutionsHero />

        {/* Substrate 01: Interactive 3D WebGL Neural Tensor Mesh Visualizer */}
        <SolutionsNeuralSection />

        {/* Substrate 02: Cloud Computing Infrastructure Flow & 3D Backbone */}
        <SolutionsCloudSection />

        {/* Substrate 03: Data Analytics & Workload Spectrum */}
        <SolutionsDataSection />

        {/* Bottom Autonomous Deployment CTA */}
        <SolutionsCta />
      </div>
    </Layout>
  );
}
