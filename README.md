# 🌌 Qcodes Infotech — 3D Digital Universe & Enterprise Technology Portal

[![React Version](https://img.shields.io/badge/React-19.2.8-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Vite Version](https://img.shields.io/badge/Vite-8.2.2-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Three.js](https://img.shields.io/badge/Three.js-0.185.1-000000?logo=threedotjs&logoColor=white)](https://threejs.org/)
[![GSAP](https://img.shields.io/badge/GSAP-3.15.0-88CE02?logo=greensock&logoColor=white)](https://greensock.com/gsap/)
[![React Router](https://img.shields.io/badge/React_Router-7.18.3-CA4245?logo=reactrouter&logoColor=white)](https://reactrouter.com/)
[![Lottie](https://img.shields.io/badge/Lottie_Web-5.13.0-00DDB3?logo=lottie&logoColor=white)](https://airbnb.io/lottie/)
[![License](https://img.shields.io/badge/License-Proprietary-blue.svg)](#)

A high-performance, futuristic enterprise web portal built for **Qcodes Infotech**. The application fuses cutting-edge **WebGL 3D graphics (Three.js)**, **fluid motion design (GSAP)**, **rich vector animations (Lottie)**, and an **interactive AI Copilot** within a glassmorphism and cyberpunk-inspired design system.

---

## 📑 Table of Contents

- [✨ Project Overview](#-project-overview)
- [🚀 Key Features & Capabilities](#-key-features--capabilities)
- [🛠️ Technology Stack](#️-technology-stack)
- [🏛️ Application Architecture & Pages](#️-application-architecture--pages)
- [🌐 3D WebGL & Animation Systems](#-3d-webgl--animation-systems)
- [🤖 AI Copilot Assistant](#-ai-copilot-assistant)
- [📁 Directory Structure](#-directory-structure)
- [⚡ Getting Started](#-getting-started)
- [📜 Available Scripts](#-available-scripts)
- [🎨 Design System & Aesthetics](#-design-system--aesthetics)
- [🛡️ Performance & Best Practices](#️-performance--best-practices)

---

## ✨ Project Overview

**Qcodes Infotech** is an enterprise technology powerhouse specializing in AI/ML engineering, multi-cloud architecture, Web3/blockchain infrastructure, cyber security, and large-scale data systems.

This portal showcases Qcodes's technical prowess through:
- **Interactive 3D Environments**: Real-time WebGL canvases including quantum core particles, orbiting service satellites, 3D holographic client ID cards, and an interactive 3D Earth globe.
- **Micro-Interactions & Parallax**: Scroll-triggered GSAP animations, 3D card tilts, holographic shimmer effects, and seamless page transitions.
- **Embedded AI Assistant**: A real-time AI Agent modal capable of simulating consultations, exploring domain services, and answering technical questions.
- **Cyberpunk / Glassmorphism UI**: Glowing HUD elements, telemetry feeds, reactive cards, and dark-mode-first aesthetic.

---

## 🚀 Key Features & Capabilities

### 1. 🏠 Home Page (`/`)
- **Quantum Hero Canvas (`HeroCoreCanvas`)**: Interactive Three.js particle core with multi-ring orbital particle swarms, glowing energy vertices, and responsive mouse-tracking rotation.
- **Fan Card Deck (`FanCardDeck`)**: Dynamic interactive deck displaying core organizational pillars with spring physics and GSAP hover expansion.
- **Matrix Call-to-Action (`CtaSection`)**: Futuristic conversion section with real-time status pings and consultation triggers.

### 2. 🧬 About Page (`/about`)
- **Telemetry About Banner (`AboutBanner`)**: Company introduction displaying system metrics and core mission overview.
- **Parallax Scroll Journey (`ParallaxJourney`)**: Multi-layered SVG vector journey illustrating technical evolution and engineering milestones.
- **Foundations Carousel (`FoundationsCarousel`)**: Smooth multi-card carousel detailing company values, architecture standards, and research initiatives.
- **Action Portal (`AboutCta`)**: Gateway to collaborate with the engineering team.

### 3. ⚙️ Services Page (`/services`)
- **Services Orbit Matrix (`ServicesOrbitMatrix` & `ServicesOrbitCanvas`)**: Three.js WebGL scene with rotating planetary service satellites (AI/ML, Cloud, Web3, Security, DevOps, Enterprise Software).
- **Service Domain Cards (`ServicesGrid`)**: Detailed breakdowns with capability checklists, architecture highlights, and technology stack badges.
- **Interactive Tech Pills**: Quick-filter pills highlighting stack proficiencies (Python, PyTorch, Kubernetes, Rust, React, AWS, etc.).

### 4. 💡 Solutions Page (`/solutions`)
- **Live System Status HUD (`SolutionsStatusHud`)**: Real-time mock telemetry and uptime indicators.
- **Cloud Infrastructure Section (`SolutionsCloudSection`)**: Interactive multi-cloud orchestration topologies, serverless pipelines, and reliability benchmarks.
- **Neural & AI Engineering Section (`SolutionsNeuralSection`)**: Deep neural network architecture, LLM agent workflows, and automated ETL pipelines.
- **Decentralized Ledger Section (`SolutionsBlockchainSection`)**: Smart contract security, cryptographic validation, and Web3 protocol implementations.
- **Data Engineering Section (`SolutionsDataSection`)**: High-throughput streaming, analytical schemas, and low-latency storage engines.

### 5. 🎨 Gallery / Portfolio Page (`/gallery`)
- **Dynamic Category Filter Dock (`GalleryFilterDock`)**: Real-time filtering by category (`All`, `AI/ML`, `Cloud & DevOps`, `Web3 & Blockchain`, `Mobile & Web`, `Fintech`, `Enterprise`).
- **Project Cards (`GalleryCard`)**: Visual project cards featuring **Lottie Web vector animations**, glow indicators, and metric tags.
- **Deep-Dive Project Modal (`GalleryDetailModal`)**: In-depth modal with problem statement, architecture solution, tech stack chips, and impact metrics.
- **3D Clients ID Card Canvas (`ClientsIDCardCanvas` & `GalleryClientsSection`)**: Interactive 3D holographic badges that react to cursor movement and viewport lighting.

### 6. 📡 Contact Page (`/contact`)
- **Interactive 3D Globe Canvas (`ContactGlobeCanvas` & `ContactGlobeDeck`)**: 3D globe with geographic coordinate nodes, atmospheric particle cloud, orbital rings, and mouse drag rotation.
- **Cyberpunk Contact Form (`ContactCyberForm`)**: Form with live field validation, inquiry category selector, terminal status simulator, and feedback messages.
- **Interactive FAQ Accordion (`ContactFaq`)**: Animated collapsible FAQ addressing enterprise consultations and partnership models.
- **Direct Telemetry Endpoints**: Direct channels for encrypted inquiries, communication frequencies, and global coordinates.

### 7. 🤖 Embedded AI Copilot (`AiAgentModal`)
- **Floating Dock Trigger**: Accessible globally from the bottom dock controls.
- **Intelligent Prompt Simulator**: Interactive quick-prompt chips (e.g. *"Cloud Migration Roadmap"*, *"AI Agent Development"*, *"Enterprise Security Audit"*).
- **Typing Engine**: Realistic simulated streaming output tailored to Qcodes services and solutions.

---

## 🛠️ Technology Stack

| Layer | Technology | Version | Description |
|---|---|---|---|
| **Core Framework** | [React](https://react.dev/) | `^19.2.8` | Modern declarative UI component library (React 19) |
| **DOM Renderer** | [React DOM](https://react.dev/) | `^19.2.8` | React DOM rendering engine |
| **Build & Dev Tool** | [Vite](https://vitejs.dev/) | `^8.2.2` | Ultra-fast next-generation frontend tooling and HMR |
| **Client-Side Routing** | [React Router](https://reactrouter.com/) | `^7.18.3` | SPA routing with path matching and location listeners |
| **3D Graphics / WebGL** | [Three.js](https://threejs.org/) | `^0.185.1` | WebGL 3D scene graph, custom shaders, geometry & particle engines |
| **Animation Engine** | [GSAP](https://greensock.com/gsap/) | `^3.15.0` | High-performance timeline animations, tweens, and parallax |
| **Vector Animation** | [Lottie Web](https://airbnb.io/lottie/) | `^5.13.0` | High-fidelity JSON vector graphics and micro-interactions |
| **Styling & Theme** | Vanilla CSS3 / CSS Modules | Custom | Glassmorphism, CSS Custom Properties, HSL color tokens, Cyber HUD |
| **Linting & Quality** | [ESLint](https://eslint.org/) | `^10.9.0` | Code quality, React Hooks rules, and Refresh validation |

---

## 🏛️ Application Architecture & Pages

The application follows a **modular, component-driven architecture** organized into dedicated domain directories:

```
src/
├── components/          # Reusable UI & Domain-specific feature modules
│   ├── about/           # About page components (Parallax, Foundation Carousel, Banner)
│   ├── ai-copilot/      # Global AI Assistant modal & prompt simulator
│   ├── contact/         # Contact Cyber Form, 3D Globe Deck, FAQ Accordion
│   ├── gallery/         # Portfolio cards, Lottie loaders, Filter dock, Detail modal
│   ├── home/            # Hero section, Fan Card Deck, Matrix CTA
│   ├── layout/          # Global Navbar, Footer, Dock Controls, Layout wrapper
│   ├── services/        # Service Grid, Orbit Matrix, Hero headers
│   ├── solutions/       # Cloud, Neural, Blockchain, and Data engineering sections
│   ├── three/           # Dedicated Three.js WebGL canvas implementations
│   └── ui/              # Atom/molecule UI building blocks
├── pages/               # Top-level route pages (HomePage, AboutPage, ServicesPage, etc.)
├── styles/              # Dedicated CSS styling modules for complex animations and HUDs
├── hooks/               # Custom React hooks
├── context/             # React Context providers
├── utils/               # Math, animation helpers, and formatters
├── assets/              # Static assets, SVG icons, and media
├── App.jsx              # Main router provider & ScrollToTop listener
├── main.jsx             # React DOM root mounting entry point
└── index.css            # Base stylesheet with design tokens & reset
```

---

## 🌐 3D WebGL & Animation Systems

### Three.js Canvases (`src/components/three/`)

1. **`HeroCoreCanvas.jsx`**:
   - Procedural geometry with orbiting particle nodes and dynamic line connections.
   - Dynamic cursor tracking and dampening for fluid 3D orientation.
   - Memory management with explicit geometry and material disposal on unmount.

2. **`ContactGlobeCanvas.jsx`**:
   - 3D sphere with geographic texture coordinates, glowing atmosphere halo, and orbital line tracks.
   - Interactive orbit rotation and inertial damping.

3. **`ServicesOrbitCanvas.jsx`**:
   - Concentric orbital rings with rotating technological satellite nodes.
   - Real-time raycasting for node hover detection and interactive highlight states.

4. **`ClientsIDCardCanvas.jsx`**:
   - Holographic 3D client identity badges with dynamic light reflection, metallic specular highlights, and tilt physics.

5. **`NeuralMeshCanvas.jsx`**:
   - Connected neural mesh simulating synapse pulses and multi-dimensional node clusters.

### GSAP & Motion Design
- Custom GSAP timelines for entry reveals and card staggered fades.
- Smooth transition sequences when switching filters in the portfolio gallery.
- Interactive card fans with hover physics and z-index redistribution.

---

## 🤖 AI Copilot Assistant

The **AI Copilot** (`src/components/ai-copilot/AiAgentModal.jsx`) provides an embedded assistant experience:
- **Instant Launcher**: Triggered via the floating dock at any time.
- **Preconfigured Knowledge Domains**: Covers technical competencies in AI/ML, Cloud native infrastructure, Web3 architecture, and enterprise cybersecurity.
- **Interactive Suggestions**: One-click prompt chips to simulate consultation flows.
- **Cyber Terminal UI**: Matrix/HUD-styled terminal interface with typing animations and real-time response generation.

---

## 📁 Directory Structure

```plaintext
project/
├── public/                 # Static assets served directly
├── src/
│   ├── assets/             # Local images, icons, and media
│   ├── components/
│   │   ├── about/          # AboutBanner, AboutCta, FoundationsCarousel, ParallaxJourney
│   │   ├── ai-copilot/     # AiAgentModal
│   │   ├── contact/        # ContactCyberForm, ContactFaq, ContactGlobeDeck, ContactHero, ContactStatusHud
│   │   ├── gallery/        # CardLottieLoader, GalleryCard, GalleryClientsSection, GalleryDetailModal, GalleryFilterDock, GalleryGrid, GalleryHero, GalleryVision, galleryData.js
│   │   ├── home/           # CtaSection, FanCardDeck, HeroSection
│   │   ├── layout/         # DockControls, Footer, Layout, Navbar
│   │   ├── services/       # ServicesCta, ServicesGrid, ServicesHero, ServicesOrbitMatrix
│   │   ├── solutions/      # SolutionsBlockchainSection, SolutionsCloudSection, SolutionsCta, SolutionsDataSection, SolutionsHero, SolutionsNeuralSection, SolutionsStatusHud
│   │   ├── three/          # ClientsIDCardCanvas, ContactGlobeCanvas, HeroCoreCanvas, NeuralMeshCanvas, ServicesOrbitCanvas
│   │   └── ui/             # Reusable UI elements
│   ├── pages/
│   │   ├── AboutPage.jsx     # /about route
│   │   ├── ContactPage.jsx   # /contact route
│   │   ├── GalleryPage.jsx   # /gallery route
│   │   ├── HomePage.jsx      # / route
│   │   ├── ServicesPage.jsx  # /services route
│   │   └── SolutionsPage.jsx # /solutions route
│   ├── styles/
│   │   ├── ai-agent-modal.css
│   │   ├── contact-page.css
│   │   ├── fan-cards.css
│   │   ├── gallery-page.css
│   │   ├── parallax-about.css
│   │   └── services-page.css
│   ├── App.css
│   ├── App.jsx             # React Router configuration
│   ├── index.css           # Global CSS tokens, reset, typography
│   └── main.jsx            # React root mount
├── eslint.config.js        # ESLint flat config
├── index.html              # HTML5 entry template with viewport & Google Fonts
├── package.json            # Project dependencies and npm scripts
└── vite.config.js          # Vite configuration with React plugin
```

---

## ⚡ Getting Started

### Prerequisites

Ensure you have the following installed on your machine:
- **Node.js**: `v18.0.0` or higher (Node.js 20+ recommended)
- **npm**: `v9.0.0` or higher (or `yarn` / `pnpm`)

### Installation

1. Clone the repository or navigate to the project directory:
   ```bash
   cd project
   ```

2. Install project dependencies:
   ```bash
   npm install
   ```

3. Launch the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:5173
   ```

---

## 📜 Available Scripts

In the project root, you can run:

| Command | Description |
|---|---|
| `npm run dev` | Starts the Vite development server with Hot Module Replacement (HMR). |
| `npm run dev -- --host` | Starts the development server and exposes it on the local network. |
| `npm run build` | Compiles and bundles production-ready static assets into the `dist/` directory. |
| `npm run preview` | Locally previews the production build created in `dist/`. |
| `npm run lint` | Runs ESLint across all `.js` and `.jsx` files to check code quality. |

---

## 🎨 Design System & Aesthetics

- **Color Palette**: Dark-mode primary (`#050811`, `#090D1A`), electric cyber blue (`#00f0ff`), neon violet (`#7928ca`), matrix emerald (`#00ff88`), and amber accent (`#ffaa00`).
- **Glassmorphism**: Layered backdrop filters (`backdrop-filter: blur(16px)`), semi-transparent borders (`rgba(255, 255, 255, 0.08)`), and subtle ambient glows.
- **Futuristic Typography**: High-legibility modern sans-serif typefaces with monospaced accents for telemetry and HUD readouts.
- **Adaptive Responsiveness**: Optimized for high-resolution desktop displays, tablets, and mobile smartphones.

---

## 🛡️ Performance & Best Practices

- **WebGL Resource Cleanup**: All Three.js canvases implement comprehensive cleanup inside `useEffect` return functions, ensuring geometries, textures, materials, and animation frames (`cancelAnimationFrame`) are purged when components unmount.
- **Scroll Optimization**: Uses passive event listeners and `ScrollToTop` router triggers for rapid page transitions.
- **Zero Heavy CSS Framework Overhead**: Custom-tailored CSS avoids runtime CSS-in-JS overhead or massive unused utility bundles, delivering lightning-fast frame rates.

---

<p align="center">
  <sub>Built with precision for <strong>Qcodes Infotech</strong>. Powering the next generation of 3D enterprise technology.</sub>
</p>
