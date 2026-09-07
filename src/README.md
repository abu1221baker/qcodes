# Qcodes Infotech — React Application Architecture

This directory contains the modernized React implementation of the Qcodes Infotech 3D Digital Universe & Enterprise Technology portal.

## 📁 Directory Structure

```
project/src/
├── components/          # Reusable UI & Feature components
│   ├── layout/          # Navbar, Footer, DockControls, HeaderTelemetry
│   ├── three/           # Three.js 3D WebGL canvases (HeroCoreCanvas, GlobeCanvas)
│   ├── home/            # HeroSection, FanCardDeck, CtaMatrixSection
│   ├── about/           # ParallaxJourney, FoundationsCarousel, MissionGrid
│   ├── services/        # ServicesMatrixGrid, ServiceCard, TechPills
│   ├── solutions/       # DeliveryLifecycle, SolutionsGrid, AgileSteps
│   ├── gallery/         # GalleryFilterDock, ProjectCard, ProjectModal
│   ├── contact/         # ContactCyberForm, DirectEndpoints, FaqAccordion
│   ├── ai-copilot/      # AiAgentModal, AiPromptSimulator, SuggestionChips
│   └── ui/              # Buttons, Badges, Cards, TelemetryPills, StatusDots
├── pages/               # Top-level Page Views
│   ├── HomePage.jsx
│   ├── AboutPage.jsx
│   ├── ServicesPage.jsx
│   ├── SolutionsPage.jsx
│   ├── GalleryPage.jsx
│   └── ContactPage.jsx
├── context/             # Global React Contexts (AiCopilotContext, TelemetryContext)
├── hooks/               # Custom React Hooks (useThree, useGsap, useTelemetry)
├── data/                # Structured Data (servicesData, projectsData, foundationsData, faqData)
├── utils/               # Math, animation helpers, string formatters
├── styles/              # Dedicated CSS files for advanced GSAP/3D animations
└── assets/              # Local React asset imports
```
