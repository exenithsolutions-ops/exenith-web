import { CapabilityItem, Technology, LifecycleStep, ProductItem, CaseStudy } from './types';

export const COMPILATION_DATE = 'June 2026';

export const capabilitiesData: CapabilityItem[] = [
  {
    id: 'cap-1',
    title: 'Custom Application Development',
    description: 'Bespoke software engineered from the ground up to address unique operational bottle-necks in key claims lifecycles.',
    bullets: ['Scalable Architecture', 'Domain-Specific Logic'],
    icon: 'Terminal',
  },
  {
    id: 'cap-2',
    title: 'Web Application Development',
    description: 'High-density portals and administrative consoles optimized for complex data visualization and transactional processing.',
    bullets: ['Multi-tenant Support', 'Real-time Dashboards'],
    icon: 'Layout',
  },
  {
    id: 'cap-3',
    title: 'Mobile App Development',
    description: 'Field adjuster tools and claimant self-service apps with robust offline capabilities, secure biometric auth, and native performance.',
    bullets: ['Cross-platform Efficiency', 'Biometric Security'],
    icon: 'Smartphone',
  },
  {
    id: 'cap-4',
    title: 'Cloud Solutions',
    description: 'Transitioning mission-critical workloads to elastic and highly secure public or private hybrid clouds for lasting disaster resilience.',
    bullets: ['Cost Optimization', 'Universal Compliance'],
    icon: 'Cloud',
  },
  {
    id: 'cap-5',
    title: 'API Integration',
    description: 'Seamlessly connecting internal software assets with third-party telematics, salvage yards, payment routes, and DMV assets.',
    bullets: ['Low-latency Sync', 'Secure Data Pipelines'],
    icon: 'Cpu',
  },
  {
    id: 'cap-6',
    title: 'Claims Process Automation',
    description: 'Leveraging intelligence models to automate routine triage, sorting, and metadata enrichment, securing optimal response speeds.',
    bullets: ['Faster TPA Response', 'Reduced Leakage'],
    icon: 'Zap',
  },
  {
    id: 'cap-7',
    title: 'Legacy Modernization',
    description: 'Carefully refactoring and migrating legacy mainframe arrays, COBOL structures, and ASP.NET solutions into flexible microservices.',
    bullets: ['Zero Downtime Migration', 'Future-proofed Core'],
    icon: 'RefreshCw',
  },
  {
    id: 'cap-8',
    title: 'Support & Maintenance',
    description: 'Continuous monitoring, routine performance auditing, defensive patch deploy, and rapid response live support for continuous runtimes.',
    bullets: ['24/7 Monitoring', 'Rapid Issue Resolution'],
    icon: 'ShieldCheck',
  },
];

export const techStackData: Technology[] = [
  { name: 'AWS', category: 'cloud' },
  { name: 'REACT', category: 'frontend' },
  { name: 'NODE.JS', category: 'backend' },
  { name: 'AZURE', category: 'cloud' },
  { name: 'PYTHON', category: 'backend' },
  { name: 'KUBERNETES', category: 'devops' },
  { name: 'POSTGRES', category: 'database' },
  { name: 'MAINFRAME', category: 'legacy' },
  { name: 'DOTNET', category: 'backend' },
  { name: 'DOCKER', category: 'devops' },
];

export const lifecycleStepsData: LifecycleStep[] = [
  {
    step: 1,
    title: 'CONSULTATION',
    subtitle: 'Deep domain immersion',
    detailedDescription: 'Our senior solutions architects immerse themselves in your specific operational constraints, examining claim cycle bottlenecks and legacy dependencies to lay a bedrock of high-trust system planning.',
  },
  {
    step: 2,
    title: 'STRATEGY',
    subtitle: 'Roadmap & architecture',
    detailedDescription: 'We translate raw business requirements into precise technical blueprints, selecting high-performance data patterns and cloud infrastructures tailored to prevent catastrophe loads and compliance errors.',
  },
  {
    step: 3,
    title: 'DEVELOPMENT',
    subtitle: 'Agile sprint cycles',
    detailedDescription: 'Our software engineering core builds in structured, observable sprints. We utilize extreme defensive coding policies and automated quality assurance to maintain perfect alignment with user intent.',
  },
  {
    step: 4,
    title: 'DEPLOYMENT',
    subtitle: 'Secure cloud rollout',
    detailedDescription: 'Deployments utilize progressive, zero-downtime Blue/Green release flows, ensuring that high-throughput live claims traffic transitions seamlessly into the updated cloud environment without a millisecond of lag.',
  },
  {
    step: 5,
    title: 'SUPPORT',
    subtitle: 'Ongoing optimization',
    detailedDescription: 'Post-deployment features meticulous, telemetry-guided monitoring, security patching, and scaling. Our live support team remains online 24/7/365 to preserve complete reliability for your carrier services.',
  },
];

export const specializationsData = [
  {
    id: 'spec-1',
    title: 'Software Development',
    description: `Transform your ideas into powerful software solutions.

We develop custom software applications tailored to your business requirements, helping you streamline operations, automate processes, and improve productivity.

Services Include:
• Custom Software Development
• Enterprise Applications
• CRM & ERP Solutions
• Business Process Automation
• Software Maintenance & Support`,
    icon: 'Shield',
  },
  {
    id: 'spec-2',
    title: 'Web Development',
    description: `Build a strong online presence with modern and responsive websites.

Our web development team creates visually appealing, fast, secure, and user-friendly websites that enhance customer engagement and business growth.

Services Include:
• Corporate Websites
• E-Commerce Websites
• Web Portals
• CMS Development
• Website Maintenance`,
    icon: 'Globe',
  },
  {
    id: 'spec-3',
    title: 'Cloud Solutions',
    description: `Enable scalability, flexibility, and security with cloud technology.

Our cloud services help businesses modernize their infrastructure, reduce costs, and improve operational efficiency.

Services Include:
• Cloud Migration
• Cloud Infrastructure Management
• Cloud Security Solutions
• Backup & Disaster Recovery
• Cloud Consulting`,
    icon: 'Cloud',
  },
  {
    id: 'spec-4',
    title: 'IT Consulting',
    description: `Strategic technology guidance for smarter business decisions.

Our consultants help organizations identify opportunities, optimize processes, and implement the right technology solutions for sustainable growth.

Services Include:
• IT Strategy & Planning
• Technology Assessment
• Digital Transformation Consulting
• Infrastructure Optimization
• Project Management`,
    icon: 'Briefcase',
  },
  {
    id: 'spec-5',
    title: 'Quality Assurance & Testing',
    description: `Deliver reliable and bug-free applications.

We ensure the quality, performance, and security of your software through comprehensive testing and quality assurance processes.

Services Include:
• Functional Testing
• Performance Testing
• Security Testing
• Automation Testing
• User Acceptance Testing`,
    icon: 'CheckCircle2',
  },
  {
    id: 'spec-6',
    title: 'Digital Transformation',
    description: `Accelerate business growth through innovation.

We help organizations embrace digital technologies to improve customer experiences, streamline operations, and gain competitive advantages.

Services Include:
• Business Process Automation
• Workflow Digitization
• Data Analytics Solutions
• Digital Strategy Development
• Technology Modernization`,
    icon: 'Cpu',
  },
  {
    id: 'spec-7',
    title: 'Support & Maintenance',
    description: `Keeping your systems running smoothly.

Our dedicated support team provides ongoing maintenance and technical assistance to ensure your technology continues to perform at its best.

Services Include:
• Application Support
• Software Updates
• Performance Monitoring
• Security Patches
• Technical Assistance`,
    icon: 'LifeBuoy',
  },
];

export const caseStudiesData: CaseStudy[] = [
  {
    id: 'cs-1',
    client: 'Beacon Mutual Alliance',
    title: 'Auto-Adjudication Leap',
    impact: 'Accelerated auto claims throughput by 64% using real-time policy rules evaluation.',
    category: 'Claims Products',
  },
  {
    id: 'cs-2',
    client: 'Summit Assurance Group',
    title: 'Legacy COBOL Modernization',
    impact: 'Migrated a 30-year-old mainframe core to a high-capacity secure AWS cluster with 0 hours of downtime.',
    category: 'Custom Software',
  },
  {
    id: 'cs-3',
    client: 'Aegis Life & Health',
    title: 'OCR Extraction Engine',
    impact: 'Implemented a high-fidelity HIPAA-compliant paperless pipeline parsing over 120,000 document sheets daily.',
    category: 'Expertise',
  }
];
