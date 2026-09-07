import React from 'react';
import {
  HandCodingSvg,
  ConnectedWorldSvg,
  DataExtractionCuateSvg,
  ServerAmicoSvg,
  SearchEnginesBroSvg,
  SearchEnginesAmicoSvg,
  WebinarSvg,
  OnlineTestSvg,
  ServerRafikiSvg,
} from '../../assets';

export default function ServicesGrid() {
  return (
    <section className="w-full px-4 sm:px-8 xl:px-12 py-16 bg-[#F8F9FA] border-t border-border-subtle">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-12">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-light border border-primary/20 text-primary shadow-xs">
            <span className="w-2 h-2 rounded-full bg-primary animate-ping"></span>
            <span className="font-mono text-xs uppercase font-bold tracking-wider">
              ENTERPRISE CAPABILITY MATRIX
            </span>
          </div>
          <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1C1C1C] tracking-tight">
            Comprehensive Technology Ecosystem
          </h2>
          <p className="font-sans text-sm sm:text-base text-text-muted leading-relaxed">
            Full-spectrum architectural engineering, reactive user interfaces, intelligent backend microservices, and autonomous cloud infrastructure.
          </p>
        </div>

        {/* Alternating 2-3 Grid Layout Container */}
        <div className="service-matrix-grid">

          {/* Card 1 (Row 1 - Spans 3 cols): UI Design Technology */}
          <div className="service-card group">
            <div className="illustration-wrapper">
              <img src={HandCodingSvg} alt="UI Design Technology Illustration" className="w-full h-full object-contain" />
            </div>

            <div className="card-header-group">
              <span className="cluster-badge">TECH_CLUSTER // 01</span>
              <h2 className="card-title font-headline">UI Design Technology</h2>
            </div>

            <div className="card-description">
              <p>
                We engineer <strong>modern reactive user interfaces</strong> and responsive web applications delivering lightning-fast rendering speeds, seamless component interactivity, and 100% Core Web Vitals optimization.
              </p>
              <p>
                Specializing in semantic <strong>HTML5/CSS3 architecture</strong>, modular JSX component systems, dynamic CMS themes, and scalable frontend state management across enterprise web ecosystems.
              </p>
            </div>

            <div className="flex flex-col gap-2 pt-1">
              <span className="font-sans text-xs text-[#767676] uppercase tracking-wider font-semibold">Technologies &amp; Frameworks</span>
              <div className="flex flex-wrap gap-2">
                {[
                  { name: 'HTML, CSS', url: 'https://qcodesinfotech.com/html-css', highlight: true },
                  { name: 'XML, JSX', url: 'https://qcodesinfotech.com/xml-jsx' },
                  { name: 'Angular JS', url: 'https://qcodesinfotech.com/angular-js' },
                  { name: 'JQuery', url: 'https://qcodesinfotech.com/jquery' },
                  { name: 'Drupal', url: 'https://qcodesinfotech.com/drupal' },
                  { name: 'WordPress', url: 'https://qcodesinfotech.com/word-press' },
                ].map((item) => (
                  <a
                    key={item.name}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`px-3 py-1 rounded-lg font-mono text-[11.5px] transition-all inline-flex items-center gap-1 ${
                      item.highlight
                        ? 'bg-[#FFF0F2] hover:bg-primary hover:text-white text-primary border border-primary/20 font-semibold'
                        : 'bg-[#F8F9FA] hover:bg-primary hover:text-white text-[#1C1C1C] border border-[#E8ECF2] font-medium'
                    }`}
                  >
                    <span>{item.name}</span>
                    <span className="material-symbols-outlined text-[12px]">north_east</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="card-footer">
              <a href="https://qcodesinfotech.com/html-css" target="_blank" rel="noopener noreferrer" className="footer-link">
                <span>Explore UI &amp; Web Technologies</span>
                <span className="material-symbols-outlined">arrow_forward</span>
              </a>
            </div>
          </div>

          {/* Card 2 (Row 1 - Spans 3 cols): Latest Thinking */}
          <div className="service-card group">
            <div className="illustration-wrapper">
              <img src={ConnectedWorldSvg} alt="Latest Thinking Illustration" className="w-full h-full object-contain" />
            </div>

            <div className="card-header-group">
              <span className="cluster-badge">TECH_CLUSTER // 02</span>
              <h2 className="card-title font-headline">Latest Thinking</h2>
            </div>

            <div className="card-description">
              <p>
                Pioneering <strong>frontier deep-tech systems</strong> including decentralized smart contracts, predictive machine learning pipelines, edge IoT telemetry meshes, and automated cloud computing infrastructure.
              </p>
              <p>
                Transforming complex enterprise datasets into <strong>real-time actionable intelligence</strong> with sub-second ML model inference, zero-trust cryptographic models, and multi-channel digital growth engines.
              </p>
            </div>

            <div className="flex flex-col gap-2 pt-1">
              <span className="font-sans text-xs text-[#767676] uppercase tracking-wider font-semibold">Specialized Disciplines</span>
              <div className="flex flex-wrap gap-2">
                {[
                  { name: 'Blockchain', url: 'https://qcodesinfotech.com/blockchain', highlight: true },
                  { name: 'Ai & ML', url: 'https://qcodesinfotech.com/aiml', highlight: true },
                  { name: 'Internet of Things', url: 'https://qcodesinfotech.com/iot' },
                  { name: 'Data Analytics', url: 'https://qcodesinfotech.com/data' },
                  { name: 'Cloud Computing', url: 'https://qcodesinfotech.com/cloud' },
                  { name: 'Digital Marketing', url: 'https://qcodesinfotech.com/digital' },
                  { name: 'Technical Support', url: 'https://qcodesinfotech.com/technical' },
                ].map((item) => (
                  <a
                    key={item.name}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`px-3 py-1 rounded-lg font-mono text-[11.5px] transition-all inline-flex items-center gap-1 ${
                      item.highlight
                        ? 'bg-[#FFF0F2] hover:bg-primary hover:text-white text-primary border border-primary/20 font-semibold'
                        : 'bg-[#F8F9FA] hover:bg-primary hover:text-white text-[#1C1C1C] border border-[#E8ECF2] font-medium'
                    }`}
                  >
                    <span>{item.name}</span>
                    <span className="material-symbols-outlined text-[12px]">north_east</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="card-footer">
              <a href="https://qcodesinfotech.com/aiml" target="_blank" rel="noopener noreferrer" className="footer-link">
                <span>Explore Emerging Technologies</span>
                <span className="material-symbols-outlined">arrow_forward</span>
              </a>
            </div>
          </div>

          {/* Card 3 (Row 2 - Spans 2 cols): Data Mining & Analytics */}
          <div className="service-card group">
            <div className="illustration-wrapper">
              <img src={DataExtractionCuateSvg} alt="Data Mining Illustration" className="w-full h-full object-contain" />
            </div>

            <div className="card-header-group">
              <span className="cluster-badge">TECH_CLUSTER // 03</span>
              <h2 className="card-title font-headline">Data Mining &amp; Analytics</h2>
            </div>

            <div className="card-description">
              <p>
                Architecting <strong>high-throughput database platforms</strong>, distributed document stores, and in-memory Redis caching layers with sub-millisecond query latency.
              </p>
              <p>
                Enterprise data warehousing with <strong>ACID compliance</strong>, automated ETL streaming pipelines, and fault-tolerant cloud cluster replication.
              </p>
            </div>

            <div className="flex flex-col gap-2 pt-1">
              <span className="font-sans text-xs text-[#767676] uppercase tracking-wider font-semibold">Data Technologies</span>
              <div className="flex flex-wrap gap-2">
                {[
                  { name: 'Oracle', url: 'https://qcodesinfotech.com/oracle', highlight: true },
                  { name: 'SQL Database', url: 'https://qcodesinfotech.com/sql-database' },
                  { name: 'Redis', url: 'https://qcodesinfotech.com/redis' },
                  { name: 'MongoDB', url: 'https://qcodesinfotech.com/mongodb' },
                  { name: 'AWS Dev', url: 'https://qcodesinfotech.com/aws-development' },
                ].map((item) => (
                  <a
                    key={item.name}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`px-2.5 py-1 rounded-lg font-mono text-[11px] transition-all inline-flex items-center gap-1 ${
                      item.highlight
                        ? 'bg-[#FFF0F2] hover:bg-primary hover:text-white text-primary border border-primary/20 font-semibold'
                        : 'bg-[#F8F9FA] hover:bg-primary hover:text-white text-[#1C1C1C] border border-[#E8ECF2] font-medium'
                    }`}
                  >
                    <span>{item.name}</span>
                    <span className="material-symbols-outlined text-[11px]">north_east</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="card-footer">
              <a href="https://qcodesinfotech.com/data" target="_blank" rel="noopener noreferrer" className="footer-link">
                <span>View Database Solutions</span>
                <span className="material-symbols-outlined">arrow_forward</span>
              </a>
            </div>
          </div>

          {/* Card 4 (Row 2 - Spans 2 cols): Server Side Scripting */}
          <div className="service-card group">
            <div className="illustration-wrapper">
              <img src={ServerAmicoSvg} alt="Server Side Scripting Illustration" className="w-full h-full object-contain" />
            </div>

            <div className="card-header-group">
              <span className="cluster-badge">TECH_CLUSTER // 04</span>
              <h2 className="card-title font-headline">Server Side Scripting</h2>
            </div>

            <div className="card-description">
              <p>
                Building <strong>scalable asynchronous backend microservices</strong> capable of arbitrating 100K+ concurrent requests per second with rock-solid stability.
              </p>
              <p>
                Polyglot server development spanning <strong>Python/Django, Node.js, Spring Boot Java, .NET C#</strong>, and high-velocity REST/GraphQL API gateways.
              </p>
            </div>

            <div className="flex flex-col gap-2 pt-1">
              <span className="font-sans text-xs text-[#767676] uppercase tracking-wider font-semibold">Backend Toolchains</span>
              <div className="flex flex-wrap gap-2">
                {[
                  { name: 'Python, Django', url: 'https://qcodesinfotech.com/python-django', highlight: true },
                  { name: 'Node / Next', url: 'https://qcodesinfotech.com/node-js-next-js', highlight: true },
                  { name: 'Spring, Java', url: 'https://qcodesinfotech.com/spring-java' },
                  { name: 'ApacheCXF', url: 'https://qcodesinfotech.com/apache-cxf' },
                  { name: 'PHP, Laravel', url: 'https://qcodesinfotech.com/php-laravel-codeigniter' },
                  { name: '.NET, C#', url: 'https://qcodesinfotech.com/dotnet-c-sharp' },
                ].map((item) => (
                  <a
                    key={item.name}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`px-2.5 py-1 rounded-lg font-mono text-[11px] transition-all inline-flex items-center gap-1 ${
                      item.highlight
                        ? 'bg-[#FFF0F2] hover:bg-primary hover:text-white text-primary border border-primary/20 font-semibold'
                        : 'bg-[#F8F9FA] hover:bg-primary hover:text-white text-[#1C1C1C] border border-[#E8ECF2] font-medium'
                    }`}
                  >
                    <span>{item.name}</span>
                    <span className="material-symbols-outlined text-[11px]">north_east</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="card-footer">
              <a href="https://qcodesinfotech.com/python-django" target="_blank" rel="noopener noreferrer" className="footer-link">
                <span>View Backend Architectures</span>
                <span className="material-symbols-outlined">arrow_forward</span>
              </a>
            </div>
          </div>

          {/* Card 5 (Row 2 - Spans 2 cols): Software Systems */}
          <div className="service-card group">
            <div className="illustration-wrapper">
              <svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="100" cy="60" r="50" fill="rgba(226, 30, 76, 0.03)" />
                <circle cx="100" cy="60" r="38" fill="rgba(226, 30, 76, 0.05)" />
                <rect x="78" y="42" width="44" height="36" rx="8" fill="#e21e4c" fillOpacity="0.10" stroke="#e21e4c" strokeWidth="1.8" />
                <rect x="84" y="48" width="32" height="5" rx="2.5" fill="#e21e4c" fillOpacity="0.4" />
                <rect x="84" y="57" width="32" height="5" rx="2.5" fill="#e21e4c" fillOpacity="0.25" />
                <rect x="84" y="66" width="20" height="5" rx="2.5" fill="#e21e4c" fillOpacity="0.15" />
                <circle cx="52" cy="60" r="16" fill="rgba(226, 30, 76, 0.06)" stroke="#e21e4c" strokeWidth="1.4" />
                <circle cx="52" cy="60" r="7" fill="#e21e4c" fillOpacity="0.25" />
                <circle cx="148" cy="60" r="16" fill="rgba(226, 30, 76, 0.06)" stroke="#e21e4c" strokeWidth="1.4" />
                <circle cx="148" cy="60" r="7" fill="#e21e4c" fillOpacity="0.25" />
                <path d="M68 58 L78 54" stroke="#e21e4c" strokeWidth="1.4" strokeOpacity="0.25" strokeDasharray="4 4" />
                <path d="M68 62 L78 66" stroke="#e21e4c" strokeWidth="1.4" strokeOpacity="0.25" strokeDasharray="4 4" />
                <path d="M132 54 L122 54" stroke="#e21e4c" strokeWidth="1.4" strokeOpacity="0.25" strokeDasharray="4 4" />
                <path d="M132 66 L122 66" stroke="#e21e4c" strokeWidth="1.4" strokeOpacity="0.25" strokeDasharray="4 4" />
                <circle cx="42" cy="80" r="12" fill="rgba(226, 30, 76, 0.04)" stroke="#e21e4c" strokeWidth="1" strokeOpacity="0.25" />
                <circle cx="42" cy="78" r="4" fill="#e21e4c" fillOpacity="0.25" />
                <circle cx="158" cy="80" r="12" fill="rgba(226, 30, 76, 0.04)" stroke="#e21e4c" strokeWidth="1" strokeOpacity="0.25" />
                <circle cx="158" cy="78" r="4" fill="#e21e4c" fillOpacity="0.25" />
              </svg>
            </div>

            <div className="card-header-group">
              <span className="cluster-badge">TECH_CLUSTER // 05</span>
              <h2 className="card-title font-headline">Software Systems</h2>
            </div>

            <div className="card-description">
              <p>
                We architect and deploy <strong>end-to-end enterprise software solutions</strong> engineered for high performance, continuous reliability, and long-term business scalability.
              </p>
              <p>
                Our services encompass fully customized <strong>ERP platform development</strong>, automated HR &amp; workforce payroll engines, real-time inventory management, and intelligent customer lifecycle CRM systems.
              </p>
            </div>

            <div className="flex flex-col gap-2 pt-1">
              <span className="font-sans text-xs text-[#767676] uppercase tracking-wider font-semibold">Enterprise Suites</span>
              <div className="flex flex-wrap gap-2">
                {[
                  { name: 'HR & Payroll', url: 'https://qcodesinfotech.com/hr-and-payroll-management-software', highlight: true },
                  { name: 'CRM Software', url: 'https://qcodesinfotech.com/crm-software-developmet' },
                  { name: 'Inventory Mgmt', url: 'https://qcodesinfotech.com/inventory-management-system' },
                  { name: 'School Mgmt', url: 'https://qcodesinfotech.com/school-management-system' },
                ].map((item) => (
                  <a
                    key={item.name}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`px-2.5 py-1 rounded-lg font-mono text-[11px] transition-all inline-flex items-center gap-1 ${
                      item.highlight
                        ? 'bg-[#FFF0F2] hover:bg-primary hover:text-white text-primary border border-primary/20 font-semibold'
                        : 'bg-[#F8F9FA] hover:bg-primary hover:text-white text-[#1C1C1C] border border-[#E8ECF2] font-medium'
                    }`}
                  >
                    <span>{item.name}</span>
                    <span className="material-symbols-outlined text-[11px]">north_east</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="card-footer">
              <a href="https://qcodesinfotech.com/crm-software-developmet" target="_blank" rel="noopener noreferrer" className="footer-link">
                <span>View all enterprise solutions</span>
                <span className="material-symbols-outlined">arrow_forward</span>
              </a>
            </div>
          </div>

          {/* Card 6 (Row 3 - Spans 3 cols): Mobile Application */}
          <div className="service-card group">
            <div className="illustration-wrapper">
              <img src={SearchEnginesBroSvg} alt="Mobile App Illustration" className="w-full h-full object-contain" />
            </div>

            <div className="card-header-group">
              <span className="cluster-badge">TECH_CLUSTER // 06</span>
              <h2 className="card-title font-headline">Mobile Application</h2>
            </div>

            <div className="card-description">
              <p>
                Full-cycle <strong>iOS and Android mobile engineering</strong> engineered for high-velocity user retention, offline SQLite synchronization, biometric security, and zero frame-drops.
              </p>
              <p>
                Delivering fluid <strong>native and cross-platform architectures</strong> with pixel-perfect responsive layouts, background task schedulers, and sub-100ms API response hydration.
              </p>
            </div>

            <div className="flex flex-col gap-2 pt-1">
              <span className="font-sans text-xs text-[#767676] uppercase tracking-wider font-semibold">Application Modalities</span>
              <div className="flex flex-wrap gap-2">
                {[
                  { name: 'Mobile App Development', url: 'https://qcodesinfotech.com/mobile-app-development', highlight: true },
                  { name: 'Native App Development', url: 'https://qcodesinfotech.com/native-app-development' },
                  { name: 'Cross Platform Development', url: 'https://qcodesinfotech.com/cross-platform-development' },
                ].map((item) => (
                  <a
                    key={item.name}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`px-3 py-1 rounded-lg font-mono text-[11.5px] transition-all inline-flex items-center gap-1 ${
                      item.highlight
                        ? 'bg-[#FFF0F2] hover:bg-primary hover:text-white text-primary border border-primary/20 font-semibold'
                        : 'bg-[#F8F9FA] hover:bg-primary hover:text-white text-[#1C1C1C] border border-[#E8ECF2] font-medium'
                    }`}
                  >
                    <span>{item.name}</span>
                    <span className="material-symbols-outlined text-[12px]">north_east</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="card-footer">
              <a href="https://qcodesinfotech.com/mobile-app-development" target="_blank" rel="noopener noreferrer" className="footer-link">
                <span>Discover Mobile Solutions</span>
                <span className="material-symbols-outlined">arrow_forward</span>
              </a>
            </div>
          </div>

          {/* Card 7 (Row 3 - Spans 3 cols): Mobile Technology */}
          <div className="service-card group">
            <div className="illustration-wrapper">
              <img src={SearchEnginesAmicoSvg} alt="Mobile Technology Illustration" className="w-full h-full object-contain" />
            </div>

            <div className="card-header-group">
              <span className="cluster-badge">TECH_CLUSTER // 07</span>
              <h2 className="card-title font-headline">Mobile Technology</h2>
            </div>

            <div className="card-description">
              <p>
                Harnessing <strong>industry-leading native and cross-platform runtimes</strong> including Kotlin Compose, Swift, Flutter/Dart, and React Native for extreme battery efficiency and hardware acceleration.
              </p>
              <p>
                Implementing <strong>native bridge optimization</strong>, secure enclaves, CoreAudio/CoreBluetooth integration, and automated multi-device CI/CD deployment pipelines.
              </p>
            </div>

            <div className="flex flex-col gap-2 pt-1">
              <span className="font-sans text-xs text-[#767676] uppercase tracking-wider font-semibold">Languages &amp; Runtimes</span>
              <div className="flex flex-wrap gap-2">
                {[
                  { name: 'Kotlin', url: 'https://qcodesinfotech.com/kotlin', highlight: true },
                  { name: 'Java', url: 'https://qcodesinfotech.com/java' },
                  { name: 'Dart', url: 'https://qcodesinfotech.com/dart' },
                  { name: 'Swift', url: 'https://qcodesinfotech.com/swift', highlight: true },
                  { name: 'React Native', url: 'https://qcodesinfotech.com/react-native' },
                ].map((item) => (
                  <a
                    key={item.name}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`px-3 py-1 rounded-lg font-mono text-[11.5px] transition-all inline-flex items-center gap-1 ${
                      item.highlight
                        ? 'bg-[#FFF0F2] hover:bg-primary hover:text-white text-primary border border-primary/20 font-semibold'
                        : 'bg-[#F8F9FA] hover:bg-primary hover:text-white text-[#1C1C1C] border border-[#E8ECF2] font-medium'
                    }`}
                  >
                    <span>{item.name}</span>
                    <span className="material-symbols-outlined text-[12px]">north_east</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="card-footer">
              <a href="https://qcodesinfotech.com/kotlin" target="_blank" rel="noopener noreferrer" className="footer-link">
                <span>Explore Mobile Toolchains</span>
                <span className="material-symbols-outlined">arrow_forward</span>
              </a>
            </div>
          </div>

          {/* Card 8 (Row 4 - Spans 2 cols): Creative Design */}
          <div className="service-card group">
            <div className="illustration-wrapper">
              <img src={WebinarSvg} alt="Creative Design Illustration" className="w-full h-full object-contain" />
            </div>

            <div className="card-header-group">
              <span className="cluster-badge">TECH_CLUSTER // 08</span>
              <h2 className="card-title font-headline">Creative Design</h2>
            </div>

            <div className="card-description">
              <p>
                Human-centered <strong>UI/UX digital experience design</strong>, cohesive brand identity design, multi-platform token architectures, and cinema-grade interactive animations.
              </p>
              <p>
                Crafting <strong>accessible WCAG 2.1 AAA design systems</strong> that bridge user empathy with high-conversion business objectives.
              </p>
            </div>

            <div className="flex flex-col gap-2 pt-1">
              <span className="font-sans text-xs text-[#767676] uppercase tracking-wider font-semibold">Creative Disciplines</span>
              <div className="flex flex-wrap gap-2">
                {[
                  { name: 'UI/UX Design', url: 'https://qcodesinfotech.com/ui-ux-design', highlight: true },
                  { name: 'Logo Design', url: 'https://qcodesinfotech.com/logo-design' },
                  { name: 'Brochure', url: 'https://qcodesinfotech.com/brochure-design' },
                  { name: 'Video Animation', url: 'https://qcodesinfotech.com/video-animating-design' },
                ].map((item) => (
                  <a
                    key={item.name}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`px-2.5 py-1 rounded-lg font-mono text-[11px] transition-all inline-flex items-center gap-1 ${
                      item.highlight
                        ? 'bg-[#FFF0F2] hover:bg-primary hover:text-white text-primary border border-primary/20 font-semibold'
                        : 'bg-[#F8F9FA] hover:bg-primary hover:text-white text-[#1C1C1C] border border-[#E8ECF2] font-medium'
                    }`}
                  >
                    <span>{item.name}</span>
                    <span className="material-symbols-outlined text-[11px]">north_east</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="card-footer">
              <a href="https://qcodesinfotech.com/ui-ux-design" target="_blank" rel="noopener noreferrer" className="footer-link">
                <span>View Creative Showcase</span>
                <span className="material-symbols-outlined">arrow_forward</span>
              </a>
            </div>
          </div>

          {/* Card 9 (Row 4 - Spans 2 cols): Testing */}
          <div className="service-card group">
            <div className="illustration-wrapper">
              <img src={OnlineTestSvg} alt="Software Testing Illustration" className="w-full h-full object-contain" />
            </div>

            <div className="card-header-group">
              <span className="cluster-badge">TECH_CLUSTER // 09</span>
              <h2 className="card-title font-headline">Testing &amp; QA</h2>
            </div>

            <div className="card-description">
              <p>
                End-to-end <strong>automated testing &amp; quality assurance</strong> ensuring zero-defect release cycles across enterprise web, mobile, and cloud environments.
              </p>
              <p>
                Continuous <strong>security vulnerability fuzzing</strong>, SOC2 audits, stress load profiling, and chaos engineering for mission-critical reliability.
              </p>
            </div>

            <div className="flex flex-col gap-2 pt-1">
              <span className="font-sans text-xs text-[#767676] uppercase tracking-wider font-semibold">Quality Engineering</span>
              <div className="flex flex-wrap gap-2">
                {[
                  { name: 'Software Testing', url: 'https://qcodesinfotech.com/software-testing', highlight: true },
                  { name: 'Security Testing', url: 'https://qcodesinfotech.com/security-testing', highlight: true },
                  { name: 'Performance Testing', url: 'https://qcodesinfotech.com/performance-testing' },
                ].map((item) => (
                  <a
                    key={item.name}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`px-2.5 py-1 rounded-lg font-mono text-[11px] transition-all inline-flex items-center gap-1 ${
                      item.highlight
                        ? 'bg-[#FFF0F2] hover:bg-primary hover:text-white text-primary border border-primary/20 font-semibold'
                        : 'bg-[#F8F9FA] hover:bg-primary hover:text-white text-[#1C1C1C] border border-[#E8ECF2] font-medium'
                    }`}
                  >
                    <span>{item.name}</span>
                    <span className="material-symbols-outlined text-[11px]">north_east</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="card-footer">
              <a href="https://qcodesinfotech.com/software-testing" target="_blank" rel="noopener noreferrer" className="footer-link">
                <span>Inspect QA Frameworks</span>
                <span className="material-symbols-outlined">arrow_forward</span>
              </a>
            </div>
          </div>

          {/* Card 10 (Row 4 - Spans 2 cols): Cloud Infrastructure & Ops */}
          <div className="service-card group">
            <div className="illustration-wrapper">
              <img src={ServerRafikiSvg} alt="Cloud and Support Illustration" className="w-full h-full object-contain" />
            </div>

            <div className="card-header-group">
              <span className="cluster-badge">TECH_CLUSTER // 10</span>
              <h2 className="card-title font-headline">Cloud &amp; Support Ops</h2>
            </div>

            <div className="card-description">
              <p>
                Hyperscale <strong>cloud infrastructure engineering</strong>, multi-region AWS/GCP deployments, and automated zero-downtime Kubernetes CI/CD pipelines.
              </p>
              <p>
                24/7 <strong>Site Reliability Engineering (SRE)</strong> and technical operations ensuring 99.995% uptime SLA guarantees and sub-second incident mitigations.
              </p>
            </div>

            <div className="flex flex-col gap-2 pt-1">
              <span className="font-sans text-xs text-[#767676] uppercase tracking-wider font-semibold">Cloud &amp; Operations</span>
              <div className="flex flex-wrap gap-2">
                {[
                  { name: 'Cloud Computing', url: 'https://qcodesinfotech.com/cloud', highlight: true },
                  { name: 'AWS Dev', url: 'https://qcodesinfotech.com/aws-development' },
                  { name: 'Linux', url: 'https://qcodesinfotech.com/linux' },
                  { name: 'Docker', url: 'https://qcodesinfotech.com/docker' },
                  { name: 'CI/CD', url: 'https://qcodesinfotech.com/ci-cd' },
                ].map((item) => (
                  <a
                    key={item.name}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`px-2.5 py-1 rounded-lg font-mono text-[11px] transition-all inline-flex items-center gap-1 ${
                      item.highlight
                        ? 'bg-[#FFF0F2] hover:bg-primary hover:text-white text-primary border border-primary/20 font-semibold'
                        : 'bg-[#F8F9FA] hover:bg-primary hover:text-white text-[#1C1C1C] border border-[#E8ECF2] font-medium'
                    }`}
                  >
                    <span>{item.name}</span>
                    <span className="material-symbols-outlined text-[11px]">north_east</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="card-footer">
              <a href="https://qcodesinfotech.com/cloud" target="_blank" rel="noopener noreferrer" className="footer-link">
                <span>View Cloud &amp; SRE Infrastructure</span>
                <span className="material-symbols-outlined">arrow_forward</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
