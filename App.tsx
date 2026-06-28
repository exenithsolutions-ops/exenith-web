import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Terminal,
  Layout,
  Smartphone,
  Cloud,
  Cpu,
  Zap,
  RefreshCw,
  ShieldCheck,
  Check,
  ArrowRight,
  ChevronRight,
  Code,
  Shield,
  Activity,
  Building,
  Clock,
  Globe,
  FileText,
  Users,
  Mail,
  Phone,
  MapPin,
  Share2,
  Award,
  ListFilter,
  Copy,
  HelpCircle,
  Briefcase,
  Sparkles,
  Send,
  CheckCircle2,
  MessageSquare,
  Factory,
  ShoppingBag,
  HeartPulse,
  GraduationCap,
  Truck,
  Coins,
  TrendingUp,
  LifeBuoy
} from 'lucide-react';

import { TabType, InquiryFormState, ProductItem, CaseStudy } from './types';
import { capabilitiesData, techStackData, lifecycleStepsData, specializationsData, caseStudiesData } from './data';

// @ts-ignore
import exenithLogoJpg from './assets/images/exenith_logo_1781417561974.jpg';
// @ts-ignore
import heroOfficeBg from './assets/images/hero_office_premium_1781421301475.jpg';
// @ts-ignore
import techSoftwareOffice from './assets/images/tech_software_office_1781423098977.jpg';

export default function App() {
  // Navigation State
  const [activeTab, setActiveTab] = useState<TabType>('home');
  
  // Interactive Showcase States
  const [selectedLifecycleStep, setSelectedLifecycleStep] = useState<number>(1);
  const [activeProductFilter, setActiveProductFilter] = useState<'all' | 'infrastructure' | 'analytics'>('all');
  const [copiedCode, setCopiedCode] = useState(false);
  
  // Custom Dynamic System Metrics (simulating live accuracy feed)
  const [systemAccuracy, setSystemAccuracy] = useState(99.98);
  useEffect(() => {
    const interval = setInterval(() => {
      // simulate realistic mild fluctuation representing high availability live metrics
      const fluctuation = (Math.random() * 0.02 - 0.01);
      setSystemAccuracy(parseFloat((99.98 + fluctuation).toFixed(3)));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Form Submission Success Model
  const [inquiryForm, setInquiryForm] = useState<InquiryFormState>({
    fullName: '',
    email: '',
    service: 'Custom Application Development',
    brief: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Connect / Contact Us Form State
  const [connectForm, setConnectForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });
  const [connectSubmitted, setConnectSubmitted] = useState(false);

  // Quote / Solution Configurator Sidebar (Get Started)
  const [isGetStartedOpen, setIsGetStartedOpen] = useState(false);
  const [estimatedMonths, setEstimatedMonths] = useState(4);
  const [estimatedComplexity, setEstimatedComplexity] = useState<'Standard' | 'Enterprise Plus' | 'Mission Critical'>('Enterprise Plus');
  const [calculatorService, setCalculatorService] = useState<string>('Custom Application Development');

  // Handle Form Change
  const handleFormInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setInquiryForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!inquiryForm.fullName || !inquiryForm.email) return;
    setFormSubmitted(true);
  };

  const resetForm = () => {
    setInquiryForm({
      fullName: '',
      email: '',
      service: 'Custom Application Development',
      brief: '',
    });
    setFormSubmitted(false);
  };

  // Mock JSON server details state
  const [infraConfig, setInfraConfig] = useState({
    infrastructure: "Kubernetes Engine",
    scaling: "Auto-elastic",
    security: {
      encryption: "AES-256-GCM",
      compliance: ["SOC2 Type II", "HIPAA", "GDPR"]
    },
    uptimeSLA: "99.999%",
    datacenter: "Multi-zone Cloud Run"
  });

  const handleCopyCode = () => {
    const codeString = JSON.stringify(infraConfig, null, 2);
    navigator.clipboard.writeText(codeString).then(() => {
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2000);
    });
  };

  // Dynamic estimated price calculation
  const getCalculatedPrice = () => {
    let baseRate = 18000; // base monthly cost
    if (calculatorService.includes('Claims')) baseRate = 24000;
    if (calculatorService.includes('Cloud')) baseRate = 20000;
    
    let multiplier = 1;
    if (estimatedComplexity === 'Standard') multiplier = 0.8;
    if (estimatedComplexity === 'Mission Critical') multiplier = 1.4;

    return (baseRate * estimatedMonths * multiplier).toLocaleString();
  };

  return (
    <div className="min-h-screen bg-brand-bg text-brand-primary flex flex-col selection:bg-brand-secondary/20 selection:text-brand-secondary">
      
      {/* HEADER SECTION --- EXACT MATCH BRANDING & STICKY BLUR */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md transition-shadow duration-300">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* Logo Brand */}
          <div 
            onClick={() => setActiveTab('home')} 
            className="cursor-pointer flex items-center"
            id="header-brand-logo"
          >
            <img 
              src={exenithLogoJpg} 
              className="h-14 md:h-16 w-auto object-contain py-1" 
              alt="Exenith IT Solution Logo" 
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Desktop Navigation Paths */}
          <nav className="hidden md:flex items-center gap-8 text-neutral-600 font-sans font-medium" id="header-nav-menu">
            <button
              onClick={() => setActiveTab('home')}
              className={`relative py-2 text-sm transition-colors hover:text-brand-primary ${
                activeTab === 'home' ? 'text-brand-primary font-semibold' : 'text-neutral-500'
              }`}
              id="nav-tab-home"
            >
              Home
              {activeTab === 'home' && (
                <motion.div layoutId="navUnderline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-secondary rounded" />
              )}
            </button>
            <button
              onClick={() => setActiveTab('expertise')}
              className={`relative py-2 text-sm transition-colors hover:text-brand-primary ${
                activeTab === 'expertise' ? 'text-brand-primary font-semibold' : 'text-neutral-500'
              }`}
              id="nav-tab-expertise"
            >
              Services
              {activeTab === 'expertise' && (
                <motion.div layoutId="navUnderline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-secondary rounded" />
              )}
            </button>
            <button
              onClick={() => setActiveTab('claims-products')}
              className={`relative py-2 text-sm transition-colors hover:text-brand-primary ${
                activeTab === 'claims-products' ? 'text-brand-primary font-semibold' : 'text-neutral-500'
              }`}
              id="nav-tab-claims-products"
            >
              Products
              {activeTab === 'claims-products' && (
                <motion.div layoutId="navUnderline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-secondary rounded" />
              )}
            </button>
            <button
              onClick={() => setActiveTab('about-us')}
              className={`relative py-2 text-sm transition-colors hover:text-brand-primary ${
                activeTab === 'about-us' ? 'text-brand-primary font-semibold' : 'text-neutral-500'
              }`}
              id="nav-tab-about-us"
            >
              About Us
              {activeTab === 'about-us' && (
                <motion.div layoutId="navUnderline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-secondary rounded" />
              )}
            </button>
            <button
              onClick={() => setActiveTab('connect')}
              className={`relative py-2 text-sm transition-colors hover:text-brand-primary ${
                activeTab === 'connect' ? 'text-brand-primary font-semibold' : 'text-neutral-500'
              }`}
              id="nav-tab-connect"
            >
              Connect
              {activeTab === 'connect' && (
                <motion.div layoutId="navUnderline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-secondary rounded" />
              )}
            </button>
          </nav>

          {/* Action CTA Block */}
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsGetStartedOpen(true)}
              className="bg-brand-secondary hover:bg-brand-accent text-white font-sans font-semibold px-5 py-2.5 rounded text-sm transition-all shadow-md active:scale-95 flex items-center gap-2"
              id="header-cta-get-started"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </header>

      {/* MOBILE FLOATING NAV BAR */}
      <div className="md:hidden fixed bottom-4 left-4 right-4 z-50 bg-white/95 backdrop-blur shadow-2xl border border-gray-100 p-2.5 rounded-xl flex justify-around items-center">
        <button
          onClick={() => setActiveTab('home')}
          className={`flex flex-col items-center gap-1 p-2 ${activeTab === 'home' ? 'text-brand-secondary' : 'text-neutral-500'}`}
        >
          <Globe className="w-5 h-5" />
          <span className="text-[10px] font-sans font-medium">Home</span>
        </button>
        <button
          onClick={() => setActiveTab('expertise')}
          className={`flex flex-col items-center gap-1 p-2 ${activeTab === 'expertise' ? 'text-brand-secondary' : 'text-neutral-500'}`}
        >
          <ShieldCheck className="w-5 h-5" />
          <span className="text-[10px] font-sans font-medium">Services</span>
        </button>
        <button
          onClick={() => setActiveTab('claims-products')}
          className={`flex flex-col items-center gap-1 p-2 ${activeTab === 'claims-products' ? 'text-brand-secondary' : 'text-neutral-500'}`}
        >
          <Cpu className="w-5 h-5" />
          <span className="text-[10px] font-sans font-medium">Products</span>
        </button>
        <button
          onClick={() => setActiveTab('about-us')}
          className={`flex flex-col items-center gap-1 p-2 ${activeTab === 'about-us' ? 'text-brand-secondary' : 'text-neutral-500'}`}
        >
          <Users className="w-5 h-5" />
          <span className="text-[10px] font-sans font-medium">About</span>
        </button>
        <button
          onClick={() => setActiveTab('connect')}
          className={`flex flex-col items-center gap-1 p-2 ${activeTab === 'connect' ? 'text-brand-secondary font-semibold' : 'text-neutral-500'}`}
        >
          <MessageSquare className="w-5 h-5" />
          <span className="text-[10px] font-sans font-medium">Connect</span>
        </button>
      </div>

      {/* MAIN SCREEN ROUTER */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          
          {/* ==================== SCREEN 0: HOME / LANDING SCREEN ==================== */}
          {activeTab === 'home' && (
            <motion.div
              key="home-view"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="pb-24 select-none bg-white"
              id="home-screen-roots"
            >
              {/* HERO CHAMPION BANNER */}
              <section className="relative min-h-[500px] md:min-h-[600px] flex items-center overflow-hidden px-6 md:px-12 bg-white" id="home-landing-hero">
                {/* Visual office background photo */}
                <div className="absolute inset-0 z-0">
                  <img 
                    src={heroOfficeBg} 
                    alt="Exenith Office Collaboration" 
                    className="w-full h-full object-cover object-center opacity-65 md:opacity-80 transition-opacity duration-300"
                    referrerPolicy="no-referrer"
                  />
                  {/* High fidelity white wash gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-white/15 md:to-transparent"></div>
                </div>

                <div className="max-w-7xl mx-auto w-full relative z-10 py-16 md:py-24 text-left">
                  <div className="max-w-3xl space-y-6">
                    <div className="space-y-2">
                      <p className="font-sans text-sm md:text-base text-[#0284c7] uppercase font-extrabold tracking-widest" id="hero-welcome-badge">
                        Welcome to Exenith IT Solutions
                      </p>
                      <h1 className="font-sans font-black tracking-tight text-[#0c1b33] text-4xl sm:text-5xl lg:text-6xl leading-[1.12]" id="hero-headline">
                        Transforming Ideas into <br className="hidden sm:inline" />
                        <span className="text-[#0284c7]">Digital Success</span>
                      </h1>
                    </div>

                    <p className="text-[#475569] font-sans text-base sm:text-lg leading-relaxed max-w-2xl" id="hero-subtext">
                      At Exenith IT Solutions, we help businesses leverage technology to grow, innovate, and stay ahead in a rapidly evolving digital world. From custom software development to cloud solutions, web applications, and IT consulting, we deliver reliable, scalable, and cost-effective technology solutions tailored to your business needs.
                    </p>

                    <p className="font-sans font-bold text-base sm:text-lg text-[#0c1b33] tracking-wide" id="hero-tagline">
                      Your Vision. Our Technology. Shared Success.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                      <button 
                        onClick={() => {
                          setActiveTab('expertise');
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="bg-[#005c91] hover:bg-[#00476e] text-white font-sans font-bold px-8 py-4 rounded transition-all text-center cursor-pointer shadow-md text-sm active:scale-98"
                        id="hero-expertise-cta"
                      >
                        Services
                      </button>
                    </div>
                  </div>
                </div>
              </section>

              {/* CORE CAPABILITIES SECTION */}
              <section className="py-20 md:py-28 bg-[#fdfefe] px-6 lg:px-12" id="home-landing-capabilities">
                <div className="max-w-7xl mx-auto text-center">
                  {/* Headers */}
                  <div className="space-y-3 mb-16" id="capabilities-meta-headers">
                    <p className="font-mono text-xs text-[#0284c7] font-black uppercase tracking-wider">
                      Core Capabilities
                    </p>
                    <h2 className="font-sans font-black text-3xl md:text-4xl text-[#0c1b33] tracking-tight">
                      Engineered for Accuracy
                    </h2>
                  </div>

                  {/* Three Cards Layout */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    
                    {/* Card 1: Custom Software Development */}
                    <div 
                      onClick={() => {
                        setActiveTab('expertise');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="group bg-white border border-gray-150 rounded-lg p-8 md:p-10 text-left transition-all hover:border-brand-secondary hover:shadow-xl hover:-translate-y-0.5 cursor-pointer flex flex-col justify-between"
                      id="cap-card-custom-software"
                    >
                      <div className="space-y-6">
                        <div className="w-12 h-12 rounded-lg bg-[#f0f9ff] border border-blue-100 flex items-center justify-center transition-colors group-hover:bg-[#0284c7]/10" id="cap-icon-box-1">
                          <Cpu className="w-6 h-6 text-[#0284c7]" />
                        </div>
                        <div className="space-y-3">
                          <h3 className="font-sans font-bold text-xl text-[#0c1b33] group-hover:text-[#0284c7] transition-colors">
                            Custom Software Development
                          </h3>
                          <p className="text-neutral-500 text-sm leading-relaxed">
                            Tailored solutions engineered for complex workflows. We build highly scalable architectures that integrate seamlessly with your existing stack.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Card 2: IT Consulting */}
                    <div 
                      onClick={() => {
                        setActiveTab('expertise');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="group bg-white border border-gray-150 rounded-lg p-8 md:p-10 text-left transition-all hover:border-brand-secondary hover:shadow-xl hover:-translate-y-0.5 cursor-pointer flex flex-col justify-between"
                      id="cap-card-claims-products"
                    >
                      <div className="space-y-6">
                        <div className="w-12 h-12 rounded-lg bg-[#f0f9ff] border border-blue-100 flex items-center justify-center transition-colors group-hover:bg-[#0284c7]/10" id="cap-icon-box-2">
                          <FileText className="w-6 h-6 text-[#0284c7]" />
                        </div>
                        <div className="space-y-3">
                          <h3 className="font-sans font-bold text-xl text-[#0c1b33] group-hover:text-[#0284c7] transition-colors">
                            IT Consulting
                          </h3>
                          <p className="text-neutral-500 text-sm leading-relaxed">
                            Expert guidance to help you make informed technology decisions and maximize your IT investments.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Card 3: Industry Expertise */}
                    <div 
                      onClick={() => {
                        setActiveTab('expertise');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="group bg-white border border-gray-150 rounded-lg p-8 md:p-10 text-left transition-all hover:border-brand-secondary hover:shadow-xl hover:-translate-y-0.5 cursor-pointer flex flex-col justify-between"
                      id="cap-card-industry-expertise"
                    >
                      <div className="space-y-6">
                        <div className="w-12 h-12 rounded-lg bg-[#f0f9ff] border border-blue-100 flex items-center justify-center transition-colors group-hover:bg-[#0284c7]/10" id="cap-icon-box-3">
                          <ShieldCheck className="w-6 h-6 text-[#0284c7]" />
                        </div>
                        <div className="space-y-3">
                          <h3 className="font-sans font-bold text-xl text-[#0c1b33] group-hover:text-[#0284c7] transition-colors">
                            Digital Transformation
                          </h3>
                          <p className="text-neutral-500 text-sm leading-relaxed">
                            Modernizing business processes through automation, analytics, and cutting-edge technologies.
                          </p>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </section>

              {/* FLAGSHIP PRODUCT: CLAIMCORE AI ENGINE */}
              <section className="py-20 bg-neutral-50/50 px-6 lg:px-12" id="home-flagship-product">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                  
                  {/* Left Column Text Details */}
                  <div className="space-y-6 text-left" id="flagship-details-column">
                    <div className="space-y-1">
                      <p className="font-mono text-xs text-[#0284c7] font-black tracking-wider" id="flagship-badge">
                        We Serve
                      </p>
                      <h2 className="font-sans font-bold text-2xl md:text-3xl text-[#0c1b33] tracking-tight" id="flagship-title">
                        Industries
                      </h2>
                    </div>

                    <p className="text-neutral-600 font-sans text-base leading-relaxed" id="flagship-description">
                      We deliver custom IT architectures, cloud modernizations, and advanced AI systems tailored to the core business structures of key global industries.
                    </p>

                    <ul className="space-y-3.5 pt-2 text-[#0c1b33] font-sans font-semibold text-sm" id="flagship-checklist">
                      <li className="flex items-center gap-3" id="flagship-bullet-1">
                        <div className="w-5 h-5 rounded-full bg-[#0284c7]/10 flex items-center justify-center shrink-0">
                          <Check className="w-3.5 h-3.5 text-[#0284c7] stroke-[3]" />
                        </div>
                        <span>Manufacturing</span>
                      </li>
                      <li className="flex items-center gap-3" id="flagship-bullet-2">
                        <div className="w-5 h-5 rounded-full bg-[#0284c7]/10 flex items-center justify-center shrink-0">
                          <Check className="w-3.5 h-3.5 text-[#0284c7] stroke-[3]" />
                        </div>
                        <span>Retail & E-Commerce</span>
                      </li>
                      <li className="flex items-center gap-3" id="flagship-bullet-3">
                        <div className="w-5 h-5 rounded-full bg-[#0284c7]/10 flex items-center justify-center shrink-0">
                          <Check className="w-3.5 h-3.5 text-[#0284c7] stroke-[3]" />
                        </div>
                        <span>Healthcare</span>
                      </li>
                      <li className="flex items-center gap-3" id="flagship-bullet-4">
                        <div className="w-5 h-5 rounded-full bg-[#0284c7]/10 flex items-center justify-center shrink-0">
                          <Check className="w-3.5 h-3.5 text-[#0284c7] stroke-[3]" />
                        </div>
                        <span>Education</span>
                      </li>
                      <li className="flex items-center gap-3" id="flagship-bullet-5">
                        <div className="w-5 h-5 rounded-full bg-[#0284c7]/10 flex items-center justify-center shrink-0">
                          <Check className="w-3.5 h-3.5 text-[#0284c7] stroke-[3]" />
                        </div>
                        <span>Logistics & Supply Chain</span>
                      </li>
                      <li className="flex items-center gap-3" id="flagship-bullet-6">
                        <div className="w-5 h-5 rounded-full bg-[#0284c7]/10 flex items-center justify-center shrink-0">
                          <Check className="w-3.5 h-3.5 text-[#0284c7] stroke-[3]" />
                        </div>
                        <span>Finance</span>
                      </li>
                      <li className="flex items-center gap-3" id="flagship-bullet-7">
                        <div className="w-5 h-5 rounded-full bg-[#0284c7]/10 flex items-center justify-center shrink-0">
                          <Check className="w-3.5 h-3.5 text-[#0284c7] stroke-[3]" />
                        </div>
                        <span>Startups & SMEs</span>
                      </li>
                    </ul>

                    <div className="pt-4">
                      <button 
                        onClick={() => {
                          setActiveTab('expertise');
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="bg-[#0c1b33] hover:bg-neutral-800 text-white font-sans font-black px-6 py-3.5 rounded transition-all text-xs uppercase tracking-wider shadow-md active:scale-97 cursor-pointer"
                        id="flagship-view-details-cta"
                      >
                        VIEW SERVICES
                      </button>
                    </div>
                  </div>

                  {/* Right Column: High Fidelity Industry Collage Simulation */}
                  <div className="relative w-full" id="flagship-graphics-column">
                    <div className="max-w-xl mx-auto bg-slate-950 rounded-2xl p-6 border-2 border-slate-800 shadow-[0_25px_60px_-15px_rgba(2,132,199,0.4)] relative overflow-hidden" id="imac-bezel-frame">
                      {/* Dark grid background pattern for contrast */}
                      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:24px_24px] opacity-35 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>
                      
                      <div className="relative space-y-4">
                        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                          <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse"></span>
                            <h4 className="font-mono text-xs uppercase font-extrabold text-[#f8fafc] tracking-wider">Industry Integrations</h4>
                          </div>
                          <span className="text-[10px] bg-sky-500/10 text-sky-400 border border-sky-500/20 font-mono px-2 py-0.5 rounded font-bold">Active Sectors</span>
                        </div>

                        {/* Collage Grid Layout representing our 7 industries */}
                        <div className="grid grid-cols-2 gap-3" id="industry-collage-grid">
                          
                          {/* Item 1: Finance */}
                          <div className="bg-[#0b1329] border border-emerald-900/50 p-4 rounded-xl shadow-sm transition-all duration-300 hover:scale-103 hover:-translate-y-1 hover:border-emerald-400 hover:shadow-[0_0_20px_-3px_rgba(52,211,153,0.25)] cursor-pointer flex flex-col justify-between h-28 group">
                            <div className="flex justify-between items-start">
                              <div className="p-2 bg-emerald-950/50 text-emerald-400 border border-emerald-900/30 rounded-lg group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
                                <Coins className="w-4 h-4" />
                              </div>
                              <span className="text-[8px] font-mono text-emerald-400 bg-emerald-950/80 border border-emerald-900 px-1.5 py-0.5 rounded-full font-bold">Finance</span>
                            </div>
                            <div className="text-left mt-2">
                              <p className="text-xs font-bold text-neutral-100">FinTech & Banking</p>
                              <span className="text-[10px] text-neutral-400 font-mono">Ledger modernizations</span>
                            </div>
                          </div>

                          {/* Item 2: Healthcare */}
                          <div className="bg-[#0b1329] border border-rose-900/50 p-4 rounded-xl shadow-sm transition-all duration-300 hover:scale-103 hover:-translate-y-1 hover:border-rose-400 hover:shadow-[0_0_20px_-3px_rgba(251,113,133,0.25)] cursor-pointer flex flex-col justify-between h-28 group">
                            <div className="flex justify-between items-start">
                              <div className="p-2 bg-rose-950/50 text-rose-400 border border-rose-900/30 rounded-lg group-hover:bg-rose-500 group-hover:text-white transition-all duration-300">
                                <HeartPulse className="w-4 h-4" />
                              </div>
                              <span className="text-[8px] font-mono text-rose-400 bg-rose-950/80 border border-rose-900 px-1.5 py-0.5 rounded-full font-bold">Healthcare</span>
                            </div>
                            <div className="text-left mt-2">
                              <p className="text-xs font-bold text-neutral-100">Medical Systems</p>
                              <span className="text-[10px] text-neutral-400 font-mono">HIPAA cloud pipelines</span>
                            </div>
                          </div>

                          {/* Item 3: Manufacturing */}
                          <div className="bg-[#0b1329] border border-blue-900/50 p-4 rounded-xl shadow-sm transition-all duration-300 hover:scale-103 hover:-translate-y-1 hover:border-blue-400 hover:shadow-[0_0_20px_-3px_rgba(96,165,250,0.25)] cursor-pointer flex flex-col justify-between h-28 group">
                            <div className="flex justify-between items-start">
                              <div className="p-2 bg-blue-950/50 text-blue-400 border border-blue-900/30 rounded-lg group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                                <Factory className="w-4 h-4" />
                              </div>
                              <span className="text-[8px] font-mono text-blue-400 bg-blue-950/80 border border-blue-900 px-1.5 py-0.5 rounded-full font-bold">Industry 4.0</span>
                            </div>
                            <div className="text-left mt-2">
                              <p className="text-xs font-bold text-neutral-100">Manufacturing</p>
                              <span className="text-[10px] text-neutral-400 font-mono">Automation telemetry</span>
                            </div>
                          </div>

                          {/* Item 4: Retail & E-Commerce */}
                          <div className="bg-[#0b1329] border border-amber-900/50 p-4 rounded-xl shadow-sm transition-all duration-300 hover:scale-103 hover:-translate-y-1 hover:border-amber-400 hover:shadow-[0_0_20px_-3px_rgba(251,191,36,0.25)] cursor-pointer flex flex-col justify-between h-28 group">
                            <div className="flex justify-between items-start">
                              <div className="p-2 bg-amber-950/50 text-amber-400 border border-amber-900/30 rounded-lg group-hover:bg-amber-500 group-hover:text-white transition-all duration-300">
                                <ShoppingBag className="w-4 h-4" />
                              </div>
                              <span className="text-[8px] font-mono text-amber-400 bg-amber-950/80 border border-amber-900 px-1.5 py-0.5 rounded-full font-bold">E-Commerce</span>
                            </div>
                            <div className="text-left mt-2">
                              <p className="text-xs font-bold text-neutral-100">Retail Systems</p>
                              <span className="text-[10px] text-neutral-400 font-mono">Omnichannel pipelines</span>
                            </div>
                          </div>

                          {/* Item 5: Education */}
                          <div className="bg-[#0b1329] border border-sky-900/50 p-4 rounded-xl shadow-sm transition-all duration-300 hover:scale-103 hover:-translate-y-1 hover:border-sky-400 hover:shadow-[0_0_20px_-3px_rgba(56,189,248,0.25)] cursor-pointer flex flex-col justify-between h-28 group">
                            <div className="flex justify-between items-start">
                              <div className="p-2 bg-sky-950/50 text-sky-400 border border-sky-900/30 rounded-lg group-hover:bg-sky-500 group-hover:text-white transition-all duration-300">
                                <GraduationCap className="w-4 h-4" />
                              </div>
                              <span className="text-[8px] font-mono text-sky-400 bg-sky-950/80 border border-sky-900 px-1.5 py-0.5 rounded-full font-bold">EdTech</span>
                            </div>
                            <div className="text-left mt-2">
                              <p className="text-xs font-bold text-neutral-100">Education</p>
                              <span className="text-[10px] text-neutral-400 font-mono">Next-gen learning</span>
                            </div>
                          </div>

                          {/* Item 6: Logistics & Supply Chain */}
                          <div className="bg-[#0b1329] border border-indigo-900/50 p-4 rounded-xl shadow-sm transition-all duration-300 hover:scale-103 hover:-translate-y-1 hover:border-indigo-400 hover:shadow-[0_0_20px_-3px_rgba(129,140,248,0.25)] cursor-pointer flex flex-col justify-between h-28 group">
                            <div className="flex justify-between items-start">
                              <div className="p-2 bg-indigo-950/50 text-indigo-400 border border-indigo-900/30 rounded-lg group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300">
                                <Truck className="w-4 h-4" />
                              </div>
                              <span className="text-[8px] font-mono text-indigo-400 bg-indigo-950/80 border border-indigo-900 px-1.5 py-0.5 rounded-full font-bold">Supply Chain</span>
                            </div>
                            <div className="text-left mt-2">
                              <p className="text-xs font-bold text-neutral-100">Logistics Systems</p>
                              <span className="text-[10px] text-neutral-400 font-mono">Live route maps</span>
                            </div>
                          </div>

                          {/* Item 7: Startups & SMEs - Span 2 Columns for symmetry */}
                          <div className="col-span-2 bg-gradient-to-r from-violet-950 to-fuchsia-950 border border-violet-900/80 p-4 rounded-xl shadow-sm transition-all duration-300 hover:scale-101 hover:-translate-y-0.5 hover:border-fuchsia-400 hover:shadow-[0_0_25px_-3px_rgba(217,70,239,0.3)] cursor-pointer flex justify-between items-center h-20 group">
                            <div className="flex items-center gap-3">
                              <div className="p-3 bg-violet-900/55 border border-violet-800/50 text-violet-300 rounded-lg group-hover:bg-violet-500 group-hover:text-white transition-all duration-300">
                                <TrendingUp className="w-5 h-5" />
                              </div>
                              <div className="text-left">
                                <p className="text-sm font-bold text-neutral-100">Startups & SMEs</p>
                                <span className="text-xs text-neutral-400 font-mono">SaaS frameworks & swift MVP deliveries</span>
                              </div>
                            </div>
                            <span className="text-[10px] font-mono text-violet-400 bg-violet-950/80 border border-violet-900 px-2.5 py-1 rounded-full font-bold">Scale-Up</span>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </section>

              {/* VOICES OF EXCELLENCE SECTION */}
              <section className="py-20 bg-white px-6 lg:px-12" id="home-voices-of-excellence">
                <div className="max-w-7xl mx-auto text-left space-y-12">
                  <h2 className="font-sans font-black text-3xl text-[#0c1b33] tracking-tight" id="testimonials-title">
                    Our Mission and Vision
                  </h2>

                  {/* Twin Quote Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="testimonials-grid">
                    
                    {/* Testimonial Card 1 */}
                    <div className="bg-[#f8fafc]/70 border border-gray-100 p-8 md:p-10 rounded-lg relative overflow-hidden flex flex-col justify-between" id="testimonial-card-1">
                      <div className="space-y-4 relative z-10 text-left">
                        <div className="space-y-1">
                          <p className="text-[#0284c7] text-[11px] font-mono uppercase font-bold tracking-wider">
                            Our Mission
                          </p>
                          <h3 className="font-sans font-bold text-2xl text-[#0c1b33]">
                            Drive Value & Growth
                          </h3>
                        </div>
                        <p className="text-neutral-600 font-sans text-base leading-relaxed">
                          To empower businesses with innovative, reliable, and future-ready technology solutions that create lasting value and sustainable growth.
                        </p>
                      </div>
                    </div>

                    {/* Testimonial Card 2 */}
                    <div className="bg-[#f8fafc]/70 border border-gray-100 p-8 md:p-10 rounded-lg relative overflow-hidden flex flex-col justify-between" id="testimonial-card-2">
                      <div className="space-y-4 relative z-10 text-left">
                        <div className="space-y-1">
                          <p className="text-[#0284c7] text-[11px] font-mono uppercase font-bold tracking-wider">
                            Our Vision
                          </p>
                          <h3 className="font-sans font-bold text-2xl text-[#0c1b33]">
                            Shape the Digital Future
                          </h3>
                        </div>
                        <p className="text-neutral-600 font-sans text-base leading-relaxed">
                          To be a premier global technology partner, leading the path of digital transformation and modernizing industries with trust and excellence.
                        </p>
                      </div>
                    </div>

                  </div>
                </div>
              </section>

              {/* FOOTER CALLOUT PROMPT */}
              <section className="bg-black text-white py-16 md:py-24 px-6 md:px-12 text-center" id="home-modernize-cta-banner">
                <div className="max-w-4xl mx-auto space-y-8">
                  <h3 className="font-sans font-black text-3xl sm:text-4xl text-white tracking-tight" id="cta-headline">
                    Ready to modernize your workflow?
                  </h3>
                  
                  <p className="text-neutral-400 font-sans text-sm md:text-base leading-relaxed max-w-2xl mx-auto" id="cta-paragraph">
                    Schedule a consultation with our senior architects and discover how precision-engineered software can transform your efficiency.
                  </p>

                  <div className="pt-2">
                    <button 
                      onClick={() => {
                        setActiveTab('connect');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="bg-[#0074b3] hover:bg-[#005e92] text-white font-sans font-bold px-8 py-4 rounded text-sm transition-all shadow-lg active:scale-98 cursor-pointer"
                      id="cta-bottom-button"
                    >
                      Contact Our Experts
                    </button>
                  </div>
                </div>
              </section>

            </motion.div>
          )}

          {/* ==================== SCREEN 1: CUSTOM SOFTWARE SCREEN ==================== */}
          {activeTab === 'custom-software' && (
            <motion.div
              key="custom-software-view"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="pb-24"
            >
              
              {/* HERO SECTION - SPLIT SCENE */}
              <section className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden px-6" id="home-hero">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                  
                  {/* Left Column Copywriting */}
                  <div className="lg:col-span-7 space-y-8 select-none text-left">
                    <div className="inline-flex items-center gap-2 bg-brand-secondary/10 text-brand-secondary px-3.5 py-1.5 rounded font-mono text-xs font-semibold">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>LEGACY RELIABILITY &bull; CLOUD INNOVATION</span>
                    </div>
                    <h1 className="font-sans font-extrabold tracking-tight text-brand-primary text-4xl sm:text-5xl lg:text-6xl leading-[1.1] max-w-2xl">
                      Custom Software <br />
                      Tailored for Insurance <span className="text-brand-secondary">Excellence</span>
                    </h1>
                    <p className="text-neutral-600 font-sans text-lg md:text-xl leading-relaxed max-w-xl">
                      Bridging the gap between legacy reliability and modern innovation. We build high-performance systems designed specifically for the complexities of the claims domain.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                      <button 
                        onClick={() => {
                          const contactSection = document.getElementById('ready-to-start-form');
                          if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="bg-brand-secondary hover:bg-brand-accent text-white font-sans font-semibold px-8 py-4 rounded transition-all shadow-lg text-center cursor-pointer"
                        id="hero-primary-cta"
                      >
                        Consult Our Experts
                      </button>
                      <button 
                        onClick={() => setIsGetStartedOpen(true)}
                        className="bg-white hover:bg-neutral-50 text-brand-primary border border-gray-200 font-sans font-semibold px-8 py-4 rounded transition-all text-center cursor-pointer shadow-sm"
                        id="hero-secondary-cta"
                      >
                        View Case Studies
                      </button>
                    </div>
                  </div>

                  {/* Right Column Modern Artful Architecture Image with custom styling */}
                  <div className="lg:col-span-5 relative" id="hero-artwork-frame">
                    <div className="relative z-10 w-full overflow-hidden rounded-2xl shadow-2xl transition-transform duration-500 hover:scale-[1.01] border border-gray-200">
                      <img 
                        src={techSoftwareOffice} 
                        alt="Exenith Modern Software Workspace" 
                        className="w-full aspect-4/3 object-cover brightness-[0.95]"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/40 via-transparent to-transparent"></div>
                      
                      {/* Interactive Float Tag inside image */}
                      <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur p-4 rounded-xl shadow-xl border border-gray-100 flex items-center justify-between">
                        <div>
                          <p className="font-mono text-[10px] text-brand-secondary tracking-widest font-semibold">INFRASTRUCTURE SPEC</p>
                          <p className="font-sans font-bold text-sm text-brand-primary mt-0.5">Automated Sizing Control</p>
                        </div>
                        <div className="bg-brand-secondary/10 px-3 py-1.5 rounded font-mono text-xs font-semibold text-brand-secondary">
                          Active Telemetry
                        </div>
                      </div>
                    </div>
                    {/* Artistic gradient mesh behind image */}
                    <div className="absolute -inset-4 bg-gradient-to-tr from-brand-secondary/20 to-teal-500/10 rounded-3xl blur-2xl opacity-70 -z-10"></div>
                  </div>

                </div>
              </section>

              {/* SECTION: OUR CAPABILITIES / STRATEGIC SOFTWARE SOLUTIONS */}
              <section className="py-24 bg-white px-6" id="capabilities-section">
                <div className="max-w-7xl mx-auto">
                  
                  {/* Title Layout */}
                  <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <p className="font-mono text-xs text-brand-secondary uppercase tracking-widest font-bold">
                      OUR CAPABILITIES
                    </p>
                    <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-brand-primary tracking-tight">
                      Strategic Software Solutions
                    </h2>
                    <p className="text-neutral-500 text-base sm:text-lg leading-relaxed">
                      We provide end-to-end engineering for the insurance industry, focusing on security, scalability, and seamless integration.
                    </p>
                  </div>

                  {/* 8 Custom Capability Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {capabilitiesData.map((cap) => {
                      // Dynamically assign icons
                      const renderIcon = (iconName: string) => {
                        const style = "w-5 h-5 text-brand-secondary stroke-[2.5]";
                        switch (iconName) {
                          case 'Terminal': return <Terminal className={style} />;
                          case 'Layout': return <Layout className={style} />;
                          case 'Smartphone': return <Smartphone className={style} />;
                          case 'Cloud': return <Cloud className={style} />;
                          case 'Cpu': return <Cpu className={style} />;
                          case 'Zap': return <Zap className={style} />;
                          case 'RefreshCw': return <RefreshCw className={style} />;
                          case 'ShieldCheck': return <ShieldCheck className={style} />;
                          default: return <Code className={style} />;
                        }
                      };

                      return (
                        <div 
                          key={cap.id}
                          className="bg-brand-bg rounded-lg p-6 border border-gray-150 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 relative group cursor-default"
                          id={`cap-card-${cap.id}`}
                        >
                          {/* Accent Tech Bar */}
                          <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-brand-secondary rounded-t-lg transition-colors"></div>
                          
                          <div className="w-10 h-10 bg-white rounded flex items-center justify-center shadow-sm border border-gray-100 mb-5">
                            {renderIcon(cap.icon)}
                          </div>
                          
                          <h3 className="font-sans font-bold text-lg text-brand-primary mb-3">
                            {cap.title}
                          </h3>
                          <p className="text-neutral-500 font-sans text-sm leading-relaxed mb-6">
                            {cap.description}
                          </p>
                          
                          {/* Mini Bullets */}
                          <div className="space-y-2 mt-auto">
                            {cap.bullets.map((bullet, i) => (
                              <div key={i} className="flex items-center gap-2 text-xs font-medium text-brand-secondary">
                                <Check className="w-3.5 h-3.5 shrink-0 text-brand-secondary" />
                                <span>{bullet}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                </div>
              </section>

              {/* SECTION: OUR TECHNOLOGY STACK */}
              <section className="py-20 bg-brand-bg px-6" id="tech-stack-section">
                <div className="max-w-7xl mx-auto">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    
                    {/* Left text */}
                    <div className="lg:col-span-5 space-y-6">
                      <p className="font-mono text-xs text-brand-secondary uppercase tracking-widest font-bold">
                        STACK & FRAMEWORKS
                      </p>
                      <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-brand-primary tracking-tight">
                        Our Technology Stack
                      </h2>
                      <p className="text-neutral-500 leading-relaxed text-base">
                        We utilize a hybrid of modern web frameworks and robust enterprise backends to deliver performance and reliability.
                      </p>
                      <div className="p-4 bg-white rounded-lg border border-gray-120 flex items-center gap-4">
                        <Award className="w-8 h-8 text-brand-secondary shrink-0" />
                        <div>
                          <p className="font-sans font-bold text-sm text-brand-primary">100% Client Audited Runtimes</p>
                          <p className="font-mono text-[11px] text-neutral-400">Mainframe / Cloud interoperability tested.</p>
                        </div>
                      </div>
                    </div>

                    {/* Right interactive tech tags */}
                    <div className="lg:col-span-7">
                      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3.5">
                        {techStackData.map((tech) => (
                          <div
                            key={tech.name}
                            className="bg-white border border-gray-150 p-4 rounded text-center shadow-xs transition-all hover:border-brand-secondary cursor-default flex flex-col items-center justify-center gap-1.5 group"
                          >
                            <span className="font-mono text-sm font-bold text-brand-primary tracking-wide transition-colors group-hover:text-brand-secondary">
                              {tech.name}
                            </span>
                            <span className="font-mono text-[9px] text-neutral-400 uppercase tracking-widest block font-medium">
                              {tech.category}
                            </span>
                          </div>
                        ))}
                      </div>
                      
                      {/* Tech context help */}
                      <p className="text-center lg:text-right font-mono text-[11px] text-neutral-400 mt-5">
                        * All platforms conform with ISO/IEC 27001 data container isolation.
                      </p>
                    </div>

                  </div>
                </div>
              </section>

              {/* SECTION: THE EXENITH ENGINEERING LIFECYCLE (DARK EXQUISITE SEGMENT) */}
              <section className="py-24 bg-[#0a1424] text-white px-6 relative" id="lifecycle-section">
                
                {/* Subtle digital grid pattern backplate */}
                <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                
                <div className="max-w-7xl mx-auto relative z-10">
                  
                  {/* Center titles */}
                  <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
                    <p className="font-mono text-xs text-brand-secondary uppercase tracking-widest font-bold">
                      OBSERVABLE PHASES
                    </p>
                    <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
                      The Exenith Engineering Lifecycle
                    </h2>
                    <p className="text-neutral-400 text-sm sm:text-base">
                      A systematic process engineered to keep technical risk close to absolute zero during complex system transitions.
                    </p>
                  </div>

                  {/* 5 Dynamic lifecycle bubbles / row steps */}
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-12">
                    {lifecycleStepsData.map((step) => {
                      const isActive = selectedLifecycleStep === step.step;
                      return (
                        <div
                          key={step.step}
                          onClick={() => setSelectedLifecycleStep(step.step)}
                          className={`cursor-pointer p-6 rounded-lg transition-all border text-left ${
                            isActive 
                              ? 'bg-brand-secondary border-brand-secondary shadow-lg shadow-brand-secondary/20' 
                              : 'bg-[#121c2c]/80 border-gray-800 hover:border-gray-700'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-4">
                            <span className={`w-8 h-8 rounded-full flex items-center justify-center font-mono font-black text-sm ${
                              isActive ? 'bg-white text-brand-secondary' : 'bg-brand-secondary/25 text-brand-secondary'
                            }`}>
                              {step.step}
                            </span>
                            {isActive && (
                              <span className="w-2 h-2 rounded-full bg-white animate-ping"></span>
                            )}
                          </div>
                          <h3 className="font-sans font-bold text-sm tracking-wider uppercase mb-1">{step.title}</h3>
                          <p className={`text-xs font-mono font-medium ${isActive ? 'text-white' : 'text-neutral-400'}`}>{step.subtitle}</p>
                        </div>
                      );
                    })}
                  </div>

                  {/* Interactive detailed view box */}
                  <div className="bg-[#121c2c] border border-gray-800 p-8 rounded-xl max-w-4xl mx-auto flex flex-col md:flex-row gap-8 items-center">
                    <div className="w-16 h-16 shrink-0 rounded-full bg-brand-secondary/15 flex items-center justify-center border border-brand-secondary/30">
                      <span className="font-mono font-black text-2xl text-brand-secondary">{selectedLifecycleStep}</span>
                    </div>
                    <div>
                      <div className="inline-block px-2 py-0.5 bg-brand-secondary/20 text-brand-secondary rounded font-mono text-[10px] tracking-wider font-bold uppercase mb-2">
                        Active Stage Details
                      </div>
                      <h4 className="text-xl font-sans font-extrabold text-white mb-2">
                        {lifecycleStepsData[selectedLifecycleStep - 1].title} &mdash; <span className="font-medium text-brand-secondary font-sans">{lifecycleStepsData[selectedLifecycleStep - 1].subtitle}</span>
                      </h4>
                      <p className="text-neutral-300 text-sm leading-relaxed font-sans">
                        {lifecycleStepsData[selectedLifecycleStep - 1].detailedDescription}
                      </p>
                    </div>
                  </div>

                </div>
              </section>

              {/* DELIVERY MODELS (Project-Based / Staff Augmentation / Dedicated Teams) */}
              <section className="py-24 bg-white px-6" id="delivery-models-section">
                <div className="max-w-7xl mx-auto">
                  
                  {/* Header titles */}
                  <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
                    <p className="font-mono text-xs text-brand-secondary uppercase tracking-widest font-bold">ENGAGEMENT ARCHITECTURES</p>
                    <h2 className="font-sans font-extrabold text-3xl text-brand-primary tracking-tight">Flexible Delivery Models</h2>
                    <p className="text-neutral-500 text-sm">Aligning your engineering timelines with structured budget and staffing goals.</p>
                  </div>

                  {/* 3 models matching visual blocks */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    
                    {/* Item 1 */}
                    <div className="p-8 rounded-lg bg-brand-bg border-l-4 border-brand-secondary shadow-xs hover:shadow-md transition-shadow">
                      <div className="w-10 h-10 rounded bg-[#eff3f7] flex items-center justify-center mb-6">
                        <Briefcase className="w-5 h-5 text-brand-secondary" />
                      </div>
                      <h3 className="font-sans font-bold text-xl text-brand-primary mb-3">Project-Based</h3>
                      <p className="text-neutral-600 font-sans text-sm leading-relaxed">
                        Defined scope and timeline for specific product initiatives, telemetry updates, or legacy migrations with guaranteed delivery.
                      </p>
                    </div>

                    {/* Item 2 */}
                    <div className="p-8 rounded-lg bg-brand-bg border-l-4 border-amber-500 shadow-xs hover:shadow-md transition-shadow">
                      <div className="w-10 h-10 rounded bg-[#eff3f7] flex items-center justify-center mb-6">
                        <Users className="w-5 h-5 text-amber-600" />
                      </div>
                      <h3 className="font-sans font-bold text-xl text-brand-primary mb-3">Staff Augmentation</h3>
                      <p className="text-neutral-600 font-sans text-sm leading-relaxed">
                        Expert senior software engineers integrated directly into your existing development lines to accelerate delivery and close skill gaps.
                      </p>
                    </div>

                    {/* Item 3 */}
                    <div className="p-8 rounded-lg bg-brand-bg border-l-4 border-teal-500 shadow-xs hover:shadow-md transition-shadow">
                      <div className="w-10 h-10 rounded bg-[#eff3f7] flex items-center justify-center mb-6">
                        <Terminal className="w-5 h-5 text-teal-600" />
                      </div>
                      <h3 className="font-sans font-bold text-xl text-brand-primary mb-3">Dedicated Teams</h3>
                      <p className="text-neutral-600 font-sans text-sm leading-relaxed">
                        Fully integrated, highly collaborative, cross-functional teams engineered to manage your product roadmap and core security architecture.
                      </p>
                    </div>

                  </div>

                </div>
              </section>

              {/* INQUIRY FORM PANEL: READY TO START */}
              <section className="py-20 bg-brand-bg px-6" id="ready-to-start-form">
                <div className="max-w-3xl mx-auto">
                  
                  {/* Card wrapper */}
                  <div className="bg-white rounded-xl shadow-xl border border-gray-150 p-8 sm:p-12 relative overflow-hidden" id="contact-form-container">
                    
                    {formSubmitted ? (
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center py-10 space-y-6"
                      >
                        <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-100">
                          <CheckCircle2 className="w-10 h-10" />
                        </div>
                        <h3 className="text-2xl font-sans font-extrabold text-brand-primary">
                          Inquiry Successfully Submitted!
                        </h3>
                        <p className="text-neutral-600 text-base max-w-md mx-auto">
                          Thank you for reaching out, <span className="font-bold text-brand-primary">{inquiryForm.fullName}</span>! A senior solutions architect from Exenith has queued your request and will communicate with you at <span className="text-brand-secondary font-medium font-mono">{inquiryForm.email}</span> within 2 hours.
                        </p>
                        
                        {/* Simulation metadata card */}
                        <div className="bg-brand-bg rounded-lg p-5 border border-gray-150 text-left max-w-md mx-auto space-y-2.5">
                          <p className="font-mono text-[10px] text-brand-secondary tracking-widest font-extrabold uppercase">TICKET DETAILS</p>
                          <div className="flex justify-between text-xs font-mono">
                            <span className="text-neutral-400">Target Area:</span>
                            <span className="text-brand-primary font-semibold">{inquiryForm.service}</span>
                          </div>
                          <div className="flex justify-between text-xs font-mono">
                            <span className="text-neutral-400">Ref Identifier:</span>
                            <span className="text-brand-primary font-bold">EX-{Math.floor(Math.random() * 90000 + 10000)}</span>
                          </div>
                          <div className="flex justify-between text-xs font-mono">
                            <span className="text-neutral-400 font-mono">Priority SLA:</span>
                            <span className="text-brand-secondary font-bold font-mono">Urgent &bull; Response &lt; 120m</span>
                          </div>
                        </div>

                        <button
                          onClick={resetForm}
                          className="bg-brand-secondary hover:bg-brand-accent text-white font-sans font-semibold px-6 py-2.5 rounded transition-all text-sm shadow-md"
                        >
                          Submit Another Inquiry
                        </button>
                      </motion.div>
                    ) : (
                      <form onSubmit={handleFormSubmit} className="space-y-8" id="lead-form">
                        
                        {/* Centered titles */}
                        <div className="text-center space-y-3">
                          <h3 className="font-sans font-extrabold text-2xl sm:text-3xl text-brand-primary">
                            Ready to Start?
                          </h3>
                          <p className="text-neutral-500 text-sm max-w-md mx-auto font-sans">
                            Discuss your software requirements with our senior software architects and receive a tailored deployment proposal.
                          </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                          
                          {/* Input Name */}
                          <div className="space-y-2">
                            <label className="block text-xs font-mono font-extrabold tracking-wider text-neutral-500 uppercase">
                              Full Name
                            </label>
                            <input
                              type="text"
                              name="fullName"
                              value={inquiryForm.fullName}
                              onChange={handleFormInputChange}
                              required
                              placeholder="e.g. John Smith"
                              className="w-full px-4 py-3 rounded border border-gray-200 focus:outline-none focus:border-brand-secondary focus:ring-1 focus:ring-brand-secondary transition-all placeholder:text-neutral-300 text-sm text-brand-primary bg-brand-bg/50"
                            />
                          </div>

                          {/* Input Email */}
                          <div className="space-y-2">
                            <label className="block text-xs font-mono font-extrabold tracking-wider text-neutral-500 uppercase">
                              Email Address
                            </label>
                            <input
                              type="email"
                              name="email"
                              value={inquiryForm.email}
                              onChange={handleFormInputChange}
                              required
                              placeholder="john@company.com"
                              className="w-full px-4 py-3 rounded border border-gray-200 focus:outline-none focus:border-brand-secondary focus:ring-1 focus:ring-brand-secondary transition-all placeholder:text-neutral-300 text-sm text-brand-primary bg-brand-bg/50"
                            />
                          </div>

                        </div>

                        {/* Select Service Dropdown */}
                        <div className="space-y-2">
                          <label className="block text-xs font-mono font-extrabold tracking-wider text-neutral-500 uppercase">
                            Service of Interest
                          </label>
                          <select
                            name="service"
                            value={inquiryForm.service}
                            onChange={handleFormInputChange}
                            className="w-full px-4 py-3 rounded border border-gray-200 focus:outline-none focus:border-brand-secondary focus:ring-1 focus:ring-brand-secondary transition-all text-sm text-brand-primary bg-brand-bg/50"
                          >
                            <option value="Custom Application Development">Custom Application Development</option>
                            <option value="Claims Management System">Claims Management System</option>
                            <option value="Workflow Automation Platform">Workflow Automation Platform</option>
                            <option value="Cloud Solutions & Security Integration">Cloud Solutions & Security Integration</option>
                            <option value="Legacy COBOL/Mainframe Modernization">Legacy COBOL/Mainframe Modernization</option>
                          </select>
                        </div>

                        {/* Brief Textarea */}
                        <div className="space-y-2">
                          <div className="flex justify-between items-center">
                            <label className="block text-xs font-mono font-extrabold tracking-wider text-neutral-500 uppercase">
                              Project Brief (Optional)
                            </label>
                            <span className="text-[10px] font-mono text-neutral-400">Max 500 characters</span>
                          </div>
                          <textarea
                            name="brief"
                            rows={4}
                            maxLength={500}
                            value={inquiryForm.brief}
                            onChange={handleFormInputChange}
                            placeholder="Tell us about your technical requirements, constraints, or legacy hardware..."
                            className="w-full px-4 py-3 rounded border border-gray-200 focus:outline-none focus:border-brand-secondary focus:ring-1 focus:ring-brand-secondary transition-all placeholder:text-neutral-300 text-sm text-brand-primary bg-brand-bg/50 resize-y"
                          />
                        </div>

                        {/* Submit */}
                        <button
                          type="submit"
                          className="w-full bg-brand-secondary hover:bg-brand-accent text-white font-sans font-bold py-3.5 px-6 rounded transition-all text-sm shadow-md active:scale-99"
                          id="submit-contact-form"
                        >
                          Submit Inquiry
                        </button>

                      </form>
                    )}

                  </div>
                </div>
              </section>

            </motion.div>
          )}

          {/* ==================== SCREEN 2: CLAIMS PRODUCTS SCREEN ==================== */}
          {activeTab === 'claims-products' && (
            <motion.div
              key="claims-products-view"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="pb-24 pt-12 px-6 flex items-center justify-center min-h-[60vh]"
            >
              <div className="max-w-xl w-full text-center bg-white p-8 sm:p-12 rounded-3xl border border-gray-150 shadow-sm space-y-6">
                <div className="w-16 h-16 bg-blue-50 text-brand-secondary rounded-full flex items-center justify-center mx-auto shadow-xs">
                  <Sparkles className="w-8 h-8" />
                </div>
                
                <div className="space-y-3">
                  <span className="font-mono text-xs text-brand-secondary font-bold uppercase tracking-widest block">
                    Product Suite Upgrades
                  </span>
                  <h1 className="font-sans font-extrabold text-3xl sm:text-4xl text-brand-primary tracking-tight">
                    Coming Soon
                  </h1>
                  <p className="text-neutral-500 font-sans text-sm sm:text-base leading-relaxed">
                    We are currently building and redesigning our full-featured product suite catalog.
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row gap-4 justify-between items-center text-xs text-neutral-400 font-sans">
                  <span>For immediate inquiries: <strong className="text-brand-primary font-medium">connect@exenith.com</strong></span>
                  <span className="font-mono text-brand-secondary font-bold tracking-widest uppercase">EXENITH IT</span>
                </div>
              </div>
            </motion.div>
          )}

          {/* ==================== SCREEN 3: EXPERTISE SCREEN ==================== */}
          {activeTab === 'expertise' && (
            <motion.div
              key="expertise-view"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="pb-24"
            >
              
              {/* HERO BANNER SECTION */}
              <section className="py-16 md:py-24 px-6 relative overflow-hidden" id="expertise-hero">
                
                {/* Visual grid backdrop */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px)] bg-[size:40px] opacity-40"></div>
                
                <div className="max-w-7xl mx-auto relative z-10 text-left">
                  
                  {/* Main Content */}
                  <div className="space-y-6">
                    <span className="bg-brand-secondary/15 text-brand-secondary font-mono text-[10px] tracking-wider uppercase px-2.5 py-1 rounded font-bold inline-block">
                      Our Services
                    </span>
                    <h1 className="font-sans font-extrabold text-3xl sm:text-4xl lg:text-5xl text-brand-primary leading-[1.15]">
                      Innovative IT Solutions for <br />
                      <span className="text-brand-secondary">Modern Businesses</span>
                    </h1>
                    <p className="text-neutral-600 font-sans text-sm sm:text-base leading-relaxed max-w-2xl">
                      At Exenith IT Solutions, we provide comprehensive technology services designed to help businesses improve efficiency, accelerate growth, and stay competitive in the digital era. Our team delivers customized solutions that align with your business objectives and drive measurable results.
                    </p>
                    
                    <div className="flex gap-4 pt-2">
                      <button 
                        onClick={() => {
                          setActiveTab('connect');
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="bg-brand-secondary hover:bg-brand-accent text-white font-sans font-semibold py-3 px-6 rounded text-sm transition"
                      >
                        Consult Our Specialists
                      </button>
                    </div>
                  </div>

                </div>
              </section>

              {/* VERTICAL SPECIALIZATION GRID SECTION */}
              <section className="py-24 bg-white px-6" id="vertical-specialization">
                <div className="max-w-7xl mx-auto">
                  
                  {/* Top center block */}
                  <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
                    <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-brand-primary tracking-tight">
                      Our Areas of Expertise
                    </h2>
                    <p className="text-neutral-500 font-sans text-sm leading-relaxed">
                      Our comprehensive IT services and digital transformation solutions are designed to address your unique business challenges, optimize operations, and drive reliable, long-term growth.
                    </p>
                  </div>

                  {/* 6 Category Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {specializationsData.map((spec) => {
                      const renderSpecIcon = (icon: string) => {
                        const style = "w-6 h-6 text-brand-secondary stroke-[2]";
                        if (icon === 'Shield') return <Shield className={style} />;
                        if (icon === 'Clock') return <Clock className={style} />;
                        if (icon === 'Activity') return <Activity className={style} />;
                        if (icon === 'Building') return <Building className={style} />;
                        if (icon === 'Cpu') return <Cpu className={style} />;
                        if (icon === 'Cloud') return <Cloud className={style} />;
                        if (icon === 'Briefcase') return <Briefcase className={style} />;
                        if (icon === 'CheckCircle2') return <CheckCircle2 className={style} />;
                        if (icon === 'LifeBuoy') return <LifeBuoy className={style} />;
                        return <Globe className={style} />;
                      };

                      return (
                        <div 
                          key={spec.id}
                          className="bg-brand-bg rounded-lg border border-gray-150 p-8 space-y-4 transition hover:shadow-lg hover:-translate-y-0.5"
                        >
                          <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-xs border border-gray-100">
                            {renderSpecIcon(spec.icon)}
                          </div>
                          <h3 className="font-sans font-extrabold text-lg text-brand-primary">
                            {spec.title}
                          </h3>
                          <p className="text-neutral-500 font-sans text-sm leading-relaxed whitespace-pre-line">
                            {spec.description}
                          </p>
                        </div>
                      );
                    })}
                  </div>

                </div>
              </section>

              {/* WHY DOMAIN EXPERTISE MATTERS SECTION */}
              <section className="py-24 bg-brand-bg px-6" id="why-expertise-matters">
                <div className="max-w-7xl mx-auto">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    
                    {/* Left image element */}
                    <div className="lg:col-span-5">
                      <div className="rounded-xl overflow-hidden shadow-2xl border border-gray-200">
                        <img 
                          src="https://images.unsplash.com/photo-1554774853-aae0a22c8aa4?auto=format&fit=crop&w=800&q=80" 
                          alt="Exenith glass interior office complex" 
                          className="w-full aspect-square object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    </div>

                    {/* Right point list */}
                    <div className="lg:col-span-7 space-y-8 text-left">
                      <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-brand-primary tracking-tight">
                        Why Partner with Exenith IT Solutions?
                      </h2>
                      <p className="text-neutral-500 leading-relaxed text-sm">
                        We deliver customized, reliable, and modern digital solutions designed to help your business achieve long-term growth and operational excellence.
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                        
                        {/* Point 1 */}
                        <div className="flex gap-3 items-start">
                          <div className="w-6 h-6 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-100 mt-0.5">
                            <span className="text-sm font-bold">✓</span>
                          </div>
                          <div>
                            <h4 className="font-sans font-semibold text-sm text-brand-primary">Customized Solutions</h4>
                            <p className="text-[#45464d] text-xs leading-relaxed mt-1">
                              Tailored applications built directly around your operational demands.
                            </p>
                          </div>
                        </div>

                        {/* Point 2 */}
                        <div className="flex gap-3 items-start">
                          <div className="w-6 h-6 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-100 mt-0.5">
                            <span className="text-sm font-bold">✓</span>
                          </div>
                          <div>
                            <h4 className="font-sans font-semibold text-sm text-brand-primary">Experienced Professionals</h4>
                            <p className="text-[#45464d] text-xs leading-relaxed mt-1">
                              Expert engineers ensuring the highest standards of system architecture.
                            </p>
                          </div>
                        </div>

                        {/* Point 3 */}
                        <div className="flex gap-3 items-start">
                          <div className="w-6 h-6 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-100 mt-0.5">
                            <span className="text-sm font-bold">✓</span>
                          </div>
                          <div>
                            <h4 className="font-sans font-semibold text-sm text-brand-primary">Innovative Technologies</h4>
                            <p className="text-[#45464d] text-xs leading-relaxed mt-1">
                              Modern, secure, and highly scalable technology stacks.
                            </p>
                          </div>
                        </div>

                        {/* Point 4 */}
                        <div className="flex gap-3 items-start">
                          <div className="w-6 h-6 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-100 mt-0.5">
                            <span className="text-sm font-bold">✓</span>
                          </div>
                          <div>
                            <h4 className="font-sans font-semibold text-sm text-brand-primary">Timely Project Delivery</h4>
                            <p className="text-[#45464d] text-xs leading-relaxed mt-1">
                              Agile development methodology ensuring milestones are met on track.
                            </p>
                          </div>
                        </div>

                        {/* Point 5 */}
                        <div className="flex gap-3 items-start">
                          <div className="w-6 h-6 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-100 mt-0.5">
                            <span className="text-sm font-bold">✓</span>
                          </div>
                          <div>
                            <h4 className="font-sans font-semibold text-sm text-brand-primary">Transparent Communication</h4>
                            <p className="text-[#45464d] text-xs leading-relaxed mt-1">
                              Regular progress updates and clear collaboration channels.
                            </p>
                          </div>
                        </div>

                        {/* Point 6 */}
                        <div className="flex gap-3 items-start">
                          <div className="w-6 h-6 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-100 mt-0.5">
                            <span className="text-sm font-bold">✓</span>
                          </div>
                          <div>
                            <h4 className="font-sans font-semibold text-sm text-brand-primary">Long-Term Support</h4>
                            <p className="text-[#45464d] text-xs leading-relaxed mt-1">
                              Ongoing patches, upgrades, and proactive maintenance assistance.
                            </p>
                          </div>
                        </div>

                      </div>
                    </div>

                  </div>
                </div>
              </section>

              {/* THE INFRASTRUCTURE OF TRUST - HIGH END DEEP CONTAINER BANNER */}
              <section className="py-12 bg-white px-6">
                <div className="max-w-7xl mx-auto rounded-2xl bg-brand-primary text-white p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
                  
                  {/* Backdrop artwork */}
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-secondary/40 via-transparent to-transparent -z-0"></div>
                  
                  <div className="space-y-4 max-w-xl z-10 text-left">
                    <h3 className="font-sans font-extrabold text-2xl sm:text-3xl">Empowering Your Digital Journey</h3>
                    <p className="text-neutral-300 text-sm leading-relaxed font-sans">
                      Exenith IT Solutions – Transforming Ideas into Digital Success.
                    </p>
                  </div>



                </div>
              </section>

              {/* CASE STUDIES CARDS & TRUST METRICS */}
              <section className="py-20 px-6 bg-brand-bg" id="case-studies-list animate-pulse">
                <div className="max-w-7xl mx-auto">
                  <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
                    <h3 className="font-sans font-extrabold text-3xl text-brand-primary tracking-tight">
                      Let's Build the Future Together
                    </h3>
                    <p className="text-neutral-500 text-xs sm:text-sm font-sans">
                      Whether you're a startup, small business, or large enterprise, Exenith IT Solutions is ready to help you achieve your digital transformation goals with reliable, scalable, and innovative technology solutions.
                    </p>
                  </div>

                  {caseStudiesData.length > 0 && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      {caseStudiesData.map((study) => (
                        <div key={study.id} className="bg-white border border-gray-150 rounded-lg p-6 shadow-xs flex flex-col justify-between">
                          <div className="space-y-4">
                            <div className="flex items-center justify-between">
                              <span className="font-mono text-[9px] uppercase tracking-wider text-brand-secondary font-bold">
                                {study.category}
                              </span>
                              <span className="font-sans font-extrabold text-xs text-neutral-400">Success Case</span>
                            </div>
                            <h4 className="font-sans font-bold text-lg text-brand-primary">
                              {study.client}
                            </h4>
                            <p className="text-sm font-sans font-semibold text-brand-primary block italic">
                              &ldquo;{study.title}&rdquo;
                            </p>
                            <p className="text-xs text-neutral-500 leading-relaxed font-sans mt-2">
                              {study.impact}
                            </p>
                          </div>
                          <div className="pt-6 border-t border-gray-100 mt-6 flex justify-between items-center">
                            <span className="font-mono text-[10px] text-brand-secondary font-extrabold tracking-wider">SECURE AUDIT APPLIED</span>
                            <Check className="w-4 h-4 text-[#39b8fd]" />
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                </div>
              </section>

              {/* DYNAMIC FOOTER CTA */}
              <section className="py-20 bg-white px-6">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                  <h3 className="font-sans font-extrabold text-3xl text-brand-primary tracking-tight leading-tight">
                    Ready to Modernize your Workflow?
                  </h3>
                  <p className="text-neutral-500 text-sm max-w-xl mx-auto">
                    Schedule a technical consultation with our team.
                  </p>
                  <div className="flex justify-center gap-4">
                    <button
                      onClick={() => {
                        setActiveTab('connect');
                        window.scrollTo(0, 0);
                      }}
                      className="bg-brand-secondary hover:bg-brand-accent text-white font-sans font-bold px-8 py-3.5 rounded text-sm transition transition-all shadow-md"
                    >
                      Contact Our Experts
                    </button>
                  </div>
                </div>
              </section>

            </motion.div>
          )}

          {/* ==================== SCREEN 4: ABOUT US SCREEN ==================== */}
          {activeTab === 'about-us' && (
            <motion.div
              key="about-us-view"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="pb-24 pt-12 px-6"
            >
              <div className="max-w-5xl mx-auto space-y-16">
                
                {/* Introduction block */}
                <div className="text-left space-y-4 max-w-3xl select-none">
                  <span className="font-mono text-xs text-brand-secondary font-bold uppercase tracking-widest block">
                    ABOUT THE FIRM
                  </span>
                  <h1 className="font-sans font-extrabold text-3xl sm:text-5xl text-brand-primary">
                    Empowering Businesses Through Technology
                  </h1>
                  <div className="space-y-4 text-neutral-600 font-sans text-base sm:text-lg leading-relaxed">
                    <p>
                      Exenith IT Solutions is a technology-driven company dedicated to helping businesses achieve growth, efficiency, and innovation through smart digital solutions. We specialize in delivering high-quality software development, web and mobile applications, cloud services, IT consulting, and digital transformation solutions tailored to the unique needs of our clients.
                    </p>
                    <p>
                      Founded with a vision to bridge the gap between business challenges and technological possibilities, Exenith IT Solutions combines industry expertise, creativity, and cutting-edge technology to create solutions that drive measurable results.
                    </p>
                  </div>
                </div>

                {/* Team / core principles column */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  
                  {/* Principles block */}
                  <div className="space-y-6 text-left">
                    <h3 className="font-sans font-extrabold text-2xl text-brand-primary">
                      Why Choose Exenith IT Solutions?
                    </h3>
                    
                    <div className="space-y-3">
                      {[
                        "Experienced and skilled technology professionals",
                        "Customized solutions tailored to your business goals",
                        "Commitment to quality and timely delivery",
                        "Scalable and secure technology solutions",
                        "Dedicated support and long-term partnership approach",
                        "Competitive and transparent pricing"
                      ].map((benefit, idx) => (
                        <div key={idx} className="flex items-start gap-3 bg-white p-3 rounded-lg border border-gray-150 shadow-2xs">
                          <CheckCircle2 className="w-5 h-5 text-[#0284c7] shrink-0 mt-0.5" />
                          <p className="text-neutral-700 font-sans text-sm font-medium leading-normal">
                            {benefit}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Team grid */}
                  <div className="space-y-6 text-left">
                    <h3 className="font-sans font-extrabold text-2xl text-brand-primary">
                      Who We Are
                    </h3>

                    <p className="bg-white border border-black p-5 rounded-xl shadow-xs text-neutral-600 font-sans text-sm leading-relaxed">
                      We are a team of passionate developers, designers, consultants, and technology enthusiasts committed to building reliable, scalable, and user-friendly digital solutions. Our focus is not just on developing software but on creating long-term value for our clients through innovation, quality, and exceptional service.
                    </p>
                  </div>

                </div>

                {/* Our Commitment section */}
                <div className="bg-gradient-to-br from-[#0c1b33] to-[#112240] text-white p-8 md:p-12 rounded-2xl text-left border border-blue-900/40 shadow-lg space-y-6">
                  <div className="space-y-2">
                    <span className="font-mono text-xs text-[#0284c7] font-bold uppercase tracking-widest block">
                      OUR PLEDGE
                    </span>
                    <h2 className="font-sans font-extrabold text-2xl sm:text-3xl text-white">
                      Our Commitment
                    </h2>
                  </div>
                  <div className="space-y-4 font-sans text-slate-300 text-sm sm:text-base leading-relaxed">
                    <p>
                      At Exenith IT Solutions, we believe technology should be a catalyst for growth, not a challenge. We work closely with our clients to understand their goals, identify opportunities, and deliver solutions that help them thrive in an increasingly digital world.
                    </p>
                    <p className="font-semibold text-white">
                      Together, let's transform ideas into innovative digital solutions and build a smarter future.
                    </p>
                  </div>
                </div>

              </div>
            </motion.div>
          )}

          {/* ==================== SCREEN 5: CONNECT / CONTACT SCREEN ==================== */}
          {activeTab === 'connect' && (
            <motion.div
              key="connect-view"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="pb-24 pt-12 px-6"
            >
              <div className="max-w-6xl mx-auto space-y-12">
                
                {/* Header message */}
                <div className="text-left space-y-4 max-w-3xl select-none">
                  <span className="font-mono text-xs text-brand-secondary font-bold uppercase tracking-widest block">
                    GET IN TOUCH
                  </span>
                  <h1 className="font-sans font-extrabold text-3xl sm:text-5xl text-brand-primary">
                    Connect with Exenith IT Solutions
                  </h1>
                  <p className="text-neutral-600 font-sans text-base sm:text-lg leading-relaxed">
                    Have an idea, project, or technical challenge? Reach out to our technology experts. We are here to help you design, build, and support high-quality digital solutions.
                  </p>
                </div>

                {/* 2-Column Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
                  
                  {/* Left Column: Contact Detail Cards */}
                  <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
                    <div className="space-y-6">
                      
                      {/* Physical Address Card */}
                      <div className="bg-white p-6 rounded-2xl border border-gray-150 shadow-2xs flex items-start gap-4">
                        <div className="p-3 bg-blue-50 text-brand-secondary rounded-xl shrink-0">
                          <MapPin className="w-6 h-6" />
                        </div>
                        <div className="space-y-1">
                          <h4 className="font-sans font-bold text-base text-brand-primary">Our Headquarters</h4>
                          <p className="text-neutral-600 font-sans text-sm leading-relaxed">
                            Exenith IT Solutions<br />
                            Flat 2, Prantik Apartment<br />
                            60/20 Andul 1st bye Lane<br />
                            Howrah 711109
                          </p>
                        </div>
                      </div>

                      {/* Email Addresses Card */}
                      <div className="bg-white p-6 rounded-2xl border border-gray-150 shadow-2xs flex items-start gap-4">
                        <div className="p-3 bg-amber-50 text-amber-600 rounded-xl shrink-0">
                          <Mail className="w-6 h-6" />
                        </div>
                        <div className="space-y-1">
                          <h4 className="font-sans font-bold text-base text-brand-primary">Electronic Mail</h4>
                          <p className="text-neutral-600 font-sans text-sm">
                            <strong className="text-brand-primary font-medium">Inquiries:</strong> connect@exenith.com
                          </p>
                          <p className="text-neutral-600 font-sans text-sm">
                            <strong className="text-brand-primary font-medium">Sales:</strong> sales@exenith.com
                          </p>
                          <p className="text-neutral-600 font-sans text-sm">
                            <strong className="text-brand-primary font-medium">Tech Desk:</strong> support@exenith.com
                          </p>
                        </div>
                      </div>

                    </div>

                  </div>

                  {/* Right Column: Custom interactive connect form */}
                  <div className="lg:col-span-7 bg-white rounded-3xl border border-gray-150 shadow-sm p-6 sm:p-10 flex flex-col justify-between">
                    {connectSubmitted ? (
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center py-16 px-4 space-y-6 my-auto"
                      >
                        <div className="w-16 h-16 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto shadow-sm">
                          <CheckCircle2 className="w-10 h-10" />
                        </div>
                        
                        <div className="space-y-2">
                          <h3 className="font-sans font-bold text-2xl text-brand-primary">Message Sent Successfully!</h3>
                          <p className="text-neutral-500 font-sans text-sm max-w-md mx-auto">
                            Thank you for connecting with us. Our technology consultants are digesting your requirements and will reach out to you within the next 2 hours.
                          </p>
                        </div>

                        <button
                          onClick={() => {
                            setConnectForm({ fullName: '', email: '', phone: '', company: '', message: '' });
                            setConnectSubmitted(false);
                          }}
                          className="bg-brand-primary hover:bg-[#112240] text-white font-sans text-xs font-semibold px-5 py-2.5 rounded transition-all inline-block cursor-pointer shadow-xs"
                        >
                          Submit Another Inquiry
                        </button>
                      </motion.div>
                    ) : (
                      <form 
                        onSubmit={(e) => {
                          e.preventDefault();
                          if (!connectForm.fullName || !connectForm.email || !connectForm.message) {
                            return;
                          }
                          setConnectSubmitted(true);
                        }}
                        className="space-y-6"
                      >
                        <div className="space-y-1">
                          <span className="font-mono text-[10px] text-brand-secondary font-bold tracking-widest block uppercase">
                            SOLUTIONS REQUEST
                          </span>
                          <h3 className="font-sans font-extrabold text-2xl text-brand-primary">
                            Begin Your Digital Project
                          </h3>
                          <p className="text-neutral-500 font-sans text-xs">
                            Tell us what you're tracking towards and we will propose an architectural roadmap.
                          </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="space-y-1">
                            <label className="block text-xs font-mono font-medium text-neutral-600">
                              Full Name <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="text"
                              required
                              value={connectForm.fullName}
                              onChange={(e) => setConnectForm({ ...connectForm, fullName: e.target.value })}
                              placeholder="Alex Mercer"
                              className="w-full px-4 py-3 rounded-lg border border-gray-200/80 focus:border-brand-secondary focus:outline-none focus:ring-1 focus:ring-brand-secondary text-sm font-sans placeholder-neutral-400 bg-neutral-25/50"
                            />
                          </div>
                          
                          <div className="space-y-1">
                            <label className="block text-xs font-mono font-medium text-neutral-600">
                              Email Address <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="email"
                              required
                              value={connectForm.email}
                              onChange={(e) => setConnectForm({ ...connectForm, email: e.target.value })}
                              placeholder="alex@company.com"
                              className="w-full px-4 py-3 rounded-lg border border-gray-200/80 focus:border-brand-secondary focus:outline-none focus:ring-1 focus:ring-brand-secondary text-sm font-sans placeholder-neutral-400 bg-neutral-25/50"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="space-y-1">
                            <label className="block text-xs font-mono font-medium text-neutral-600">
                              Phone Number <span className="text-neutral-400">(Optional)</span>
                            </label>
                            <input
                              type="tel"
                              value={connectForm.phone}
                              onChange={(e) => setConnectForm({ ...connectForm, phone: e.target.value })}
                              placeholder="+1 (555) 0199"
                              className="w-full px-4 py-3 rounded-lg border border-gray-200/80 focus:border-brand-secondary focus:outline-none focus:ring-1 focus:ring-brand-secondary text-sm font-sans placeholder-neutral-400 bg-neutral-25/50"
                            />
                          </div>

                          <div className="space-y-1">
                            <label className="block text-xs font-mono font-medium text-neutral-600">
                              Company / Organization <span className="text-neutral-400">(Optional)</span>
                            </label>
                            <input
                              type="text"
                              value={connectForm.company}
                              onChange={(e) => setConnectForm({ ...connectForm, company: e.target.value })}
                              placeholder="Acme Corporation"
                              className="w-full px-4 py-3 rounded-lg border border-gray-200/80 focus:border-brand-secondary focus:outline-none focus:ring-1 focus:ring-brand-secondary text-sm font-sans placeholder-neutral-400 bg-neutral-25/50"
                            />
                          </div>
                        </div>

                        <div className="space-y-1">
                          <label className="block text-xs font-mono font-medium text-neutral-600">
                            How Can We Assist? <span className="text-red-500">*</span>
                          </label>
                          <textarea
                            rows={4}
                            required
                            value={connectForm.message}
                            onChange={(e) => setConnectForm({ ...connectForm, message: e.target.value })}
                            placeholder="Please outline your custom software, web app, mobile app, cloud infrastructure, or tech strategy goals..."
                            className="w-full px-4 py-3 rounded-lg border border-gray-200/80 focus:border-brand-secondary focus:outline-none focus:ring-1 focus:ring-brand-secondary text-sm font-sans placeholder-neutral-400 bg-neutral-25/50 resize-none"
                          />
                        </div>

                        <button
                          type="submit"
                          className="w-full bg-brand-primary hover:bg-[#112240] text-white font-sans font-bold py-3.5 px-6 rounded-lg transition-all shadow-md active:scale-98 flex items-center justify-center gap-2 cursor-pointer text-sm"
                        >
                          <span>Send Connect Inquiry</span>
                          <Send className="w-4 h-4" />
                        </button>
                      </form>
                    )}
                  </div>

                </div>

              </div>
            </motion.div>
          )}

          {/* ==================== SCREEN 6: PRIVACY POLICY SCREEN ==================== */}
          {activeTab === 'privacy' && (
            <motion.div
              key="privacy-view"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="pb-24 pt-12 px-6 bg-slate-50/50"
            >
              <div className="max-w-4xl mx-auto space-y-10">
                {/* Header message */}
                <div className="text-left space-y-4 max-w-3xl select-none">
                  <span className="font-mono text-xs text-brand-secondary font-bold uppercase tracking-widest block">
                    TRUST & SAFETY
                  </span>
                  <h1 className="font-sans font-extrabold text-3xl sm:text-5xl text-brand-primary">
                    Privacy Policy
                  </h1>
                  <p className="text-neutral-500 font-sans text-xs">
                    Last Updated: June 23, 2026
                  </p>
                  <p className="text-neutral-600 font-sans text-base leading-relaxed">
                    Welcome to Exenith IT Solutions. We value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                    <br /><br />
                    By accessing our website or engaging with our services, you agree to the practices described in this Privacy Policy.
                  </p>
                </div>

                {/* Privacy content card 1: Collected Information */}
                <div className="bg-white rounded-3xl border border-gray-150 shadow-sm p-8 sm:p-12 space-y-10 text-left">
                  
                  {/* Information we Collect */}
                  <div className="space-y-6">
                    <h3 className="font-sans font-bold text-xl text-brand-primary flex items-start gap-3">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-50 text-brand-secondary font-mono text-xs font-bold shrink-0 mt-0.5">1</span>
                      <span>We may collect the following types of information:</span>
                    </h3>
                    
                    <div className="pl-11 space-y-8">
                      {/* Personal Information Subsection */}
                      <div className="space-y-3">
                        <h4 className="font-sans font-bold text-lg text-brand-primary border-b border-gray-100 pb-1">
                          Personal Information
                        </h4>
                        <div className="text-neutral-600 text-sm leading-relaxed space-y-1.5 mt-2">
                          <p className="font-medium text-neutral-700">Information collected directly from you includes:</p>
                          <ul className="list-disc pl-5 space-y-1 mt-1 text-neutral-600">
                            <li>Name</li>
                            <li>Email Address</li>
                            <li>Phone Number</li>
                            <li>Company Name</li>
                            <li>Job Title</li>
                            <li>Any information you voluntarily provide through contact forms, inquiries, or service requests</li>
                          </ul>
                        </div>
                      </div>

                      {/* Technical Information Subsection */}
                      <div className="space-y-3">
                        <h4 className="font-sans font-bold text-lg text-brand-primary border-b border-gray-100 pb-1">
                          Technical Information
                        </h4>
                        <div className="text-neutral-600 text-sm leading-relaxed space-y-1.5 mt-2">
                          <p className="font-medium text-neutral-700">Information collected automatically when you use our services includes:</p>
                          <ul className="list-disc pl-5 space-y-1 mt-1 text-neutral-600">
                            <li>IP Address</li>
                            <li>Browser Type and Version</li>
                            <li>Device Information</li>
                            <li>Operating System</li>
                            <li>Website Usage Data</li>
                            <li>Cookies and Similar Tracking Technologies</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Privacy content card 2: Usage, Sharing & Data Practices */}
                <div className="bg-white rounded-3xl border border-gray-150 shadow-sm p-8 sm:p-12 space-y-10 text-left">

                  {/* How We Use Your Information */}
                  <div className="space-y-4">
                    <h3 className="font-sans font-bold text-xl text-brand-primary flex items-center gap-3">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-50 text-brand-secondary font-mono text-xs font-bold">2</span>
                      How We Use Your Information
                    </h3>
                    <div className="text-neutral-600 text-sm leading-relaxed pl-11 space-y-1.5 mt-2">
                       <p className="font-medium text-neutral-700">We use the information we collect to:</p>
                       <ul className="list-disc pl-5 space-y-1 mt-1 text-neutral-600">
                        <li>Provide and manage our services</li>
                        <li>Respond to inquiries and support requests</li>
                        <li>Improve our website, products, and services</li>
                        <li>Communicate important updates and notifications</li>
                        <li>Analyze website performance and user behavior</li>
                        <li>Maintain website security and prevent fraudulent activities</li>
                        <li>Comply with legal obligations</li>
                      </ul>
                    </div>
                  </div>

                  {/* Cookies and Tracking Technologies */}
                  <div className="space-y-4">
                    <h3 className="font-sans font-bold text-xl text-brand-primary flex items-center gap-3">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-50 text-brand-secondary font-mono text-xs font-bold">3</span>
                      Cookies and Tracking Technologies
                    </h3>
                    <p className="text-neutral-600 text-sm leading-relaxed pl-11">
                      Our website may use cookies and similar technologies to enhance user experience, analyze traffic, and improve website functionality.
                      <br /><br />
                      You can choose to disable cookies through your browser settings; however, some features of the website may not function properly.
                    </p>
                  </div>

                  {/* Information Sharing and Disclosure */}
                  <div className="space-y-4">
                    <h3 className="font-sans font-bold text-xl text-brand-primary flex items-center gap-3">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-50 text-brand-secondary font-mono text-xs font-bold">4</span>
                      Information Sharing and Disclosure
                    </h3>
                    <div className="text-neutral-600 text-sm leading-relaxed pl-11 space-y-1.5 mt-2">
                      <p className="text-neutral-600">
                        Exenith IT Solutions does not sell, rent, or trade your personal information to third parties.
                      </p>
                      <p className="font-medium text-neutral-700 mt-2">We may share information only in the following circumstances:</p>
                      <ul className="list-disc pl-5 space-y-1 mt-1 text-neutral-600">
                        <li>With trusted service providers who assist in operating our business</li>
                        <li>When required by law or legal process</li>
                        <li>To protect our rights, security, and property</li>
                        <li>During a business merger, acquisition, or restructuring</li>
                      </ul>
                    </div>
                  </div>

                  {/* Data Security */}
                  <div className="space-y-4">
                    <h3 className="font-sans font-bold text-xl text-brand-primary flex items-center gap-3">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-50 text-brand-secondary font-mono text-xs font-bold">5</span>
                      Data Security
                    </h3>
                    <p className="text-neutral-600 text-sm leading-relaxed pl-11">
                      We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                      <br /><br />
                      While we strive to protect your information, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security.
                    </p>
                  </div>

                  {/* Data Retention */}
                  <div className="space-y-4">
                    <h3 className="font-sans font-bold text-xl text-brand-primary flex items-center gap-3">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-50 text-brand-secondary font-mono text-xs font-bold">6</span>
                      Data Retention
                    </h3>
                    <p className="text-neutral-600 text-sm leading-relaxed pl-11">
                      We retain personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy or as required by applicable laws and regulations.
                    </p>
                  </div>

                  {/* Third-Party Links */}
                  <div className="space-y-4">
                    <h3 className="font-sans font-bold text-xl text-brand-primary flex items-center gap-3">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-50 text-brand-secondary font-mono text-xs font-bold">7</span>
                      Third-Party Links
                    </h3>
                    <p className="text-neutral-600 text-sm leading-relaxed pl-11">
                      Our website may contain links to third-party websites. We are not responsible for the privacy practices, policies, or content of external websites. We encourage users to review the privacy policies of those websites before providing personal information.
                    </p>
                  </div>

                  {/* Your Rights */}
                  <div className="space-y-4">
                    <h3 className="font-sans font-bold text-xl text-brand-primary flex items-center gap-3">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-50 text-brand-secondary font-mono text-xs font-bold">8</span>
                      Your Rights
                    </h3>
                    <div className="text-neutral-600 text-sm leading-relaxed pl-11 space-y-1.5 mt-2">
                      <p className="font-medium text-neutral-700">Depending on applicable laws, you may have the right to:</p>
                      <ul className="list-disc pl-5 space-y-1 mt-1 text-neutral-600">
                        <li>Access your personal information</li>
                        <li>Request correction of inaccurate information</li>
                        <li>Request deletion of your personal information</li>
                        <li>Object to or restrict certain processing activities</li>
                        <li>Withdraw consent where applicable</li>
                      </ul>
                      <p className="text-neutral-500 mt-2 text-xs">
                        To exercise these rights, please contact us using the details below.
                      </p>
                    </div>
                  </div>

                  {/* Children's Privacy */}
                  <div className="space-y-4">
                    <h3 className="font-sans font-bold text-xl text-brand-primary flex items-center gap-3">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-50 text-brand-secondary font-mono text-xs font-bold">9</span>
                      Children's Privacy
                    </h3>
                    <p className="text-neutral-600 text-sm leading-relaxed pl-11">
                      Our services are not directed toward individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware of such collection, we will take appropriate steps to remove the information.
                    </p>
                  </div>

                  {/* Changes to This Privacy Policy */}
                  <div className="space-y-4">
                    <h3 className="font-sans font-bold text-xl text-brand-primary flex items-center gap-3">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-50 text-brand-secondary font-mono text-xs font-bold">10</span>
                      Changes to This Privacy Policy
                    </h3>
                    <p className="text-neutral-600 text-sm leading-relaxed pl-11">
                      We may update this Privacy Policy periodically to reflect changes in our practices, legal requirements, or services. Updates will be posted on this page with the revised effective date.
                    </p>
                  </div>

                  {/* Contact Us */}
                  <div className="space-y-4">
                    <h3 className="font-sans font-bold text-xl text-brand-primary flex items-center gap-3">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-50 text-brand-secondary font-mono text-xs font-bold">11</span>
                      Contact Us
                    </h3>
                    <div className="text-neutral-600 text-sm leading-relaxed pl-11 space-y-3 mt-2">
                      <p>If you have any questions regarding this Privacy Policy or how your information is handled, please contact us:</p>
                      <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4 sm:p-6 inline-block space-y-1">
                        <h4 className="font-semibold text-brand-primary text-base">Exenith IT Solutions</h4>
                        <p className="text-slate-500">Email: <a href="mailto:connect@exenith.com" className="text-[#0284c7] hover:underline font-semibold">connect@exenith.com</a></p>
                      </div>
                    </div>
                  </div>

                  {/* Commitment Statement */}
                  <div className="pt-8 border-t border-gray-100 mt-8">
                    <p className="text-neutral-500 text-sm italic leading-relaxed pl-11">
                      Exenith IT Solutions is committed to protecting your privacy and maintaining the trust of our clients, partners, and website visitors.
                    </p>
                  </div>



                </div>
              </div>
            </motion.div>
          )}

          {/* ==================== SCREEN 7: TERMS OF SERVICE SCREEN ==================== */}
          {activeTab === 'terms' && (
            <motion.div
              key="terms-view"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="pb-24 pt-12 px-6 bg-slate-50/50"
            >
              <div className="max-w-4xl mx-auto space-y-10">
                {/* Header message */}
                <div className="text-left space-y-4 max-w-3xl select-none">
                  <span className="font-mono text-xs text-brand-secondary font-bold uppercase tracking-widest block">
                    GOVERNANCE & AGREEMENTS
                  </span>
                  <h1 className="font-sans font-extrabold text-3xl sm:text-5xl text-brand-primary">
                    Terms of Service
                  </h1>
                  <p className="text-neutral-500 font-sans text-xs">
                    Last Updated: June 23, 2026
                  </p>
                  <p className="text-neutral-600 font-sans text-base leading-relaxed">
                    Welcome to Exenith IT Solutions. These Terms of Service ("Terms") govern your access to and use of our website, products, and services. By accessing our website or engaging our services, you agree to be bound by these Terms.
                    <br /><br />
                    If you do not agree with any part of these Terms, please refrain from using our website and services.
                  </p>
                </div>

                {/* Terms content cards */}
                <div className="bg-white rounded-3xl border border-gray-150 shadow-sm p-8 sm:p-12 space-y-10 text-left">
                  
                  {/* 1. Definitions */}
                  <div className="space-y-4">
                    <h3 className="font-sans font-bold text-xl text-brand-primary flex items-start gap-3">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-50 text-brand-secondary font-mono text-xs font-bold shrink-0 mt-0.5">1</span>
                      <span>Definitions</span>
                    </h3>
                    <div className="text-neutral-600 text-sm leading-relaxed pl-11 space-y-2.5">
                      <p>
                        <strong className="text-neutral-800">"Company", "We", "Us", or "Our"</strong> refers to Exenith IT Solutions.
                      </p>
                      <p>
                        <strong className="text-neutral-800">"User", "Client", or "You"</strong> refers to any individual or organization accessing our website or using our services.
                      </p>
                      <p>
                        <strong className="text-neutral-800">"Services"</strong> refers to all software development, consulting, web development, cloud services, and related offerings provided by Exenith IT Solutions.
                      </p>
                    </div>
                  </div>

                  {/* 2. Use of Services */}
                  <div className="space-y-4">
                    <h3 className="font-sans font-bold text-xl text-brand-primary flex items-start gap-3">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-50 text-brand-secondary font-mono text-xs font-bold shrink-0 mt-0.5">2</span>
                      <span>Use of Services</span>
                    </h3>
                    <div className="text-neutral-600 text-sm leading-relaxed pl-11 space-y-2.5">
                      <p>You agree to use our services only for lawful purposes and in compliance with all applicable laws and regulations.</p>
                      <p className="font-medium text-neutral-700 mt-2">You shall not:</p>
                      <ul className="list-disc pl-5 space-y-1 mt-1 text-neutral-600">
                        <li>Use our services for illegal or fraudulent activities.</li>
                        <li>Attempt to gain unauthorized access to our systems or networks.</li>
                        <li>Distribute malicious software, viruses, or harmful code.</li>
                        <li>Interfere with the operation or security of our services.</li>
                      </ul>
                    </div>
                  </div>

                  {/* 3. Intellectual Property Rights */}
                  <div className="space-y-4">
                    <h3 className="font-sans font-bold text-xl text-brand-primary flex items-start gap-3">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-50 text-brand-secondary font-mono text-xs font-bold shrink-0 mt-0.5">3</span>
                      <span>Intellectual Property Rights</span>
                    </h3>
                    <div className="text-neutral-600 text-sm leading-relaxed pl-11 space-y-2.5">
                      <p>All content on this website, including text, graphics, logos, software, designs, and other materials, is the property of Exenith IT Solutions unless otherwise stated.</p>
                      <p>You may not reproduce, distribute, modify, or use any content without prior written permission from Exenith IT Solutions.</p>
                    </div>
                  </div>

                  {/* 4. Client Responsibilities */}
                  <div className="space-y-4">
                    <h3 className="font-sans font-bold text-xl text-brand-primary flex items-start gap-3">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-50 text-brand-secondary font-mono text-xs font-bold shrink-0 mt-0.5">4</span>
                      <span>Client Responsibilities</span>
                    </h3>
                    <div className="text-neutral-600 text-sm leading-relaxed pl-11 space-y-2.5">
                      <p className="font-medium text-neutral-700">Clients agree to:</p>
                      <ul className="list-disc pl-5 space-y-1 mt-1 text-neutral-600">
                        <li>Provide accurate and complete project requirements.</li>
                        <li>Supply necessary information and materials in a timely manner.</li>
                        <li>Review and approve deliverables within agreed timelines.</li>
                        <li>Make payments according to agreed contractual terms.</li>
                      </ul>
                      <p className="text-neutral-500 italic text-xs mt-2">Delays caused by the client may affect project schedules and delivery dates.</p>
                    </div>
                  </div>

                  {/* 5. Payments and Fees */}
                  <div className="space-y-4">
                    <h3 className="font-sans font-bold text-xl text-brand-primary flex items-start gap-3">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-50 text-brand-secondary font-mono text-xs font-bold shrink-0 mt-0.5">5</span>
                      <span>Payments and Fees</span>
                    </h3>
                    <div className="text-neutral-600 text-sm leading-relaxed pl-11 space-y-2.5">
                      <p>All fees and payment terms will be specified in project proposals, contracts, or invoices.</p>
                      <p className="font-medium text-neutral-700 mt-2">Unless otherwise agreed:</p>
                      <ul className="list-disc pl-5 space-y-1 mt-1 text-neutral-600">
                        <li>Payments are due within the specified invoice period.</li>
                        <li>Late payments may incur additional charges.</li>
                        <li>Exenith IT Solutions reserves the right to suspend services for overdue accounts.</li>
                      </ul>
                    </div>
                  </div>

                  {/* 6. Confidentiality */}
                  <div className="space-y-4">
                    <h3 className="font-sans font-bold text-xl text-brand-primary flex items-start gap-3">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-50 text-brand-secondary font-mono text-xs font-bold shrink-0 mt-0.5">6</span>
                      <span>Confidentiality</span>
                    </h3>
                    <div className="text-neutral-600 text-sm leading-relaxed pl-11 space-y-2.5">
                      <p>Both parties agree to maintain the confidentiality of proprietary, business, technical, and financial information shared during the course of a project.</p>
                      <p>Confidential information shall not be disclosed to third parties without prior consent, except where required by law.</p>
                    </div>
                  </div>

                  {/* 7. Limitation of Liability */}
                  <div className="space-y-4">
                    <h3 className="font-sans font-bold text-xl text-brand-primary flex items-start gap-3">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-50 text-brand-secondary font-mono text-xs font-bold shrink-0 mt-0.5">7</span>
                      <span>Limitation of Liability</span>
                    </h3>
                    <div className="text-neutral-600 text-sm leading-relaxed pl-11 space-y-2.5">
                      <p className="font-medium text-neutral-700">To the maximum extent permitted by law, Exenith IT Solutions shall not be liable for:</p>
                      <ul className="list-disc pl-5 space-y-1 mt-1 text-neutral-600">
                        <li>Indirect, incidental, or consequential damages.</li>
                        <li>Loss of profits, revenue, or business opportunities.</li>
                        <li>Data loss or service interruptions caused by third-party providers.</li>
                        <li>Damages arising from unauthorized access or cyber incidents beyond our reasonable control.</li>
                      </ul>
                      <p className="text-neutral-705 font-medium mt-1">Our total liability shall not exceed the amount paid by the client for the specific service giving rise to the claim.</p>
                    </div>
                  </div>

                  {/* 8. Service Availability */}
                  <div className="space-y-4">
                    <h3 className="font-sans font-bold text-xl text-brand-primary flex items-start gap-3">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-50 text-brand-secondary font-mono text-xs font-bold shrink-0 mt-0.5">8</span>
                      <span>Service Availability</span>
                    </h3>
                    <div className="text-neutral-600 text-sm leading-relaxed pl-11 space-y-2.5">
                      <p>We strive to provide reliable and uninterrupted services; however, we do not guarantee that our website or services will always be available without interruption, errors, or delays.</p>
                      <p>Maintenance, upgrades, and unforeseen technical issues may occasionally affect service availability.</p>
                    </div>
                  </div>

                  {/* 9. Third-Party Services */}
                  <div className="space-y-4">
                    <h3 className="font-sans font-bold text-xl text-brand-primary flex items-start gap-3">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-50 text-brand-secondary font-mono text-xs font-bold shrink-0 mt-0.5">9</span>
                      <span>Third-Party Services</span>
                    </h3>
                    <div className="text-neutral-600 text-sm leading-relaxed pl-11 space-y-2.5">
                      <p>Our solutions may integrate with third-party products, platforms, or services.</p>
                      <p>Exenith IT Solutions is not responsible for the performance, availability, or policies of third-party providers.</p>
                    </div>
                  </div>

                  {/* 10. Termination */}
                  <div className="space-y-4">
                    <h3 className="font-sans font-bold text-xl text-brand-primary flex items-start gap-3">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-50 text-brand-secondary font-mono text-xs font-bold shrink-0 mt-0.5">10</span>
                      <span>Termination</span>
                    </h3>
                    <div className="text-neutral-600 text-sm leading-relaxed pl-11 space-y-2.5">
                      <p className="font-medium text-neutral-700">We reserve the right to suspend or terminate access to our services if:</p>
                      <ul className="list-disc pl-5 space-y-1 mt-1 text-neutral-600">
                        <li>These Terms are violated.</li>
                        <li>Payment obligations are not fulfilled.</li>
                        <li>The user engages in unlawful or harmful activities.</li>
                      </ul>
                      <p>Termination does not relieve either party of obligations accrued before termination.</p>
                    </div>
                  </div>

                  {/* 11. Indemnification */}
                  <div className="space-y-4">
                    <h3 className="font-sans font-bold text-xl text-brand-primary flex items-start gap-3">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-50 text-brand-secondary font-mono text-xs font-bold shrink-0 mt-0.5">11</span>
                      <span>Indemnification</span>
                    </h3>
                    <div className="text-neutral-600 text-sm leading-relaxed pl-11 space-y-2.5">
                      <p>You agree to indemnify and hold harmless Exenith IT Solutions, its employees, partners, and affiliates from any claims, damages, liabilities, costs, or expenses arising from your use of our services or violation of these Terms.</p>
                    </div>
                  </div>

                  {/* 12. Changes to Terms */}
                  <div className="space-y-4">
                    <h3 className="font-sans font-bold text-xl text-brand-primary flex items-start gap-3">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-50 text-brand-secondary font-mono text-xs font-bold shrink-0 mt-0.5">12</span>
                      <span>Changes to Terms</span>
                    </h3>
                    <div className="text-neutral-600 text-sm leading-relaxed pl-11 space-y-2.5">
                      <p>We may update these Terms from time to time. Revised versions will be posted on this page with an updated effective date.</p>
                      <p>Continued use of our website or services after changes are posted constitutes acceptance of the updated Terms.</p>
                    </div>
                  </div>

                  {/* 13. Governing Law */}
                  <div className="space-y-4">
                    <h3 className="font-sans font-bold text-xl text-brand-primary flex items-start gap-3">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-50 text-brand-secondary font-mono text-xs font-bold shrink-0 mt-0.5">13</span>
                      <span>Governing Law</span>
                    </h3>
                    <div className="text-neutral-600 text-sm leading-relaxed pl-11 space-y-2.5">
                      <p>These Terms shall be governed by and interpreted in accordance with the laws of India. Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the courts having jurisdiction over the Company's principal place of business.</p>
                    </div>
                  </div>

                  {/* 14. Contact Us */}
                  <div className="space-y-4">
                    <h3 className="font-sans font-bold text-xl text-brand-primary flex items-start gap-3">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-50 text-brand-secondary font-mono text-xs font-bold shrink-0 mt-0.5">14</span>
                      <span>Contact Us</span>
                    </h3>
                    <div className="text-neutral-600 text-sm leading-relaxed pl-11 space-y-3 mt-2">
                      <p>For any questions regarding these Terms of Service, please contact us:</p>
                      <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4 sm:p-6 inline-block space-y-1">
                        <h4 className="font-semibold text-brand-primary text-base">Exenith IT Solutions</h4>
                        <p className="text-slate-500">Email: <a href="mailto:connect@exenith.com" className="text-[#0284c7] hover:underline font-semibold">connect@exenith.com</a></p>
                      </div>
                    </div>
                  </div>

                  {/* Acknowledgment line at the bottom */}
                  <div className="pt-8 border-t border-gray-100 mt-8">
                    <p className="text-neutral-500 text-sm italic leading-relaxed pl-11">
                      By using our website and services, you acknowledge that you have read, understood, and agreed to these Terms of Service.
                    </p>
                  </div>

                </div>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </main>

      {/* COMPREHENSIVE BRANDED FOOTER SECTION --- EXACT REPLICA OF THE HOME SCREEN FOOTER */}
      <footer className="bg-[#eceef0] pt-16 pb-24 md:pb-12 text-left" id="master-footer">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Logo and brief company summary */}
          <div className="md:col-span-3 space-y-4">
            <div className="flex items-center gap-3.5 cursor-pointer" onClick={() => { setActiveTab('home'); window.scrollTo({top:0, behavior:'smooth'}); }}>
              <img 
                src={exenithLogoJpg} 
                className="h-14 md:h-16 w-auto object-contain" 
                alt="Exenith IT Solutions Logo" 
                referrerPolicy="no-referrer"
              />
              <div className="flex flex-col select-none">
                <span className="font-sans font-black tracking-tight text-[#0c1b33] text-base leading-none">
                  Exenith IT Solutions
                </span>
              </div>
            </div>
            <p className="text-[#4b5563] font-sans text-sm leading-relaxed pt-2">
              Innovating Today. Empowering Tomorrow.
            </p>
          </div>

          {/* Directory Links: "Solutions" */}
          <div className="md:col-span-3 space-y-4 md:pl-6">
            <h4 className="font-sans font-extrabold text-[#0c1b33] text-sm md:text-base">
              Solutions
            </h4>
            <ul className="space-y-3 text-sm text-neutral-800 font-sans">
              <li>
                <button 
                  onClick={() => { setActiveTab('expertise'); window.scrollTo({top:0, behavior:'smooth'}); }} 
                  className="underline hover:text-[#0284c7] transition-colors cursor-pointer text-left font-medium block whitespace-nowrap"
                >
                  Custom Software
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { setActiveTab('expertise'); window.scrollTo({top:0, behavior:'smooth'}); }} 
                  className="underline hover:text-[#0284c7] transition-colors cursor-pointer text-left font-medium block whitespace-nowrap"
                >
                  IT Consulting
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { setActiveTab('expertise'); window.scrollTo({top:0, behavior:'smooth'}); }} 
                  className="underline hover:text-[#0284c7] transition-colors cursor-pointer text-left font-medium block whitespace-nowrap"
                >
                  AI Solutions
                </button>
              </li>
            </ul>
          </div>

          {/* Directory Links: "Company" */}
          <div className="md:col-span-3 space-y-4 md:pl-6">
            <h4 className="font-sans font-extrabold text-[#0c1b33] text-sm md:text-base">
              Company
            </h4>
            <ul className="space-y-3 text-sm text-neutral-800 font-sans">
              <li>
                <button 
                  onClick={() => { setActiveTab('expertise'); window.scrollTo({top:0, behavior:'smooth'}); }} 
                  className="underline hover:text-[#0284c7] transition-colors cursor-pointer text-left font-medium block whitespace-nowrap"
                >
                  Technical Expertise
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { setActiveTab('privacy'); window.scrollTo({top:0, behavior:'smooth'}); }} 
                  className="underline hover:text-[#0284c7] transition-colors cursor-pointer text-left font-medium block whitespace-nowrap"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { setActiveTab('terms'); window.scrollTo({top:0, behavior:'smooth'}); }} 
                  className="underline hover:text-[#0284c7] transition-colors cursor-pointer text-left font-medium block whitespace-nowrap"
                >
                  Terms of Service
                </button>
              </li>
            </ul>
          </div>

          {/* Directory Links: "Contact Points" */}
          <div className="md:col-span-3 space-y-4 md:pl-6">
            <h4 className="font-sans font-extrabold text-[#0c1b33] text-sm md:text-base">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-neutral-800 font-sans">
              <li>
                <button 
                  onClick={() => {
                    setActiveTab('connect');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }} 
                  className="underline hover:text-[#0284c7] transition-colors cursor-pointer text-left font-medium block whitespace-nowrap"
                >
                  Contact Us
                </button>
              </li>
              <li className="text-neutral-700 font-sans whitespace-nowrap">
                connect@exenith.com
              </li>
              <li className="text-neutral-700 font-sans whitespace-nowrap">
                support@exenith.com
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="max-w-7xl mx-auto px-6 border-t border-neutral-300/30 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500 select-none">
          <p>&copy; 2026 Exenith IT Solutions. All rights reserved. Professional Claims Software Solutions.</p>
          <div className="flex items-center gap-6">
            <button 
              onClick={() => alert("Exenith codebases are hosted across isolated regional repositories for carrier safety. Contact support for direct checkout links.")}
              className="hover:text-brand-secondary flex items-center gap-1 font-sans font-semibold transition"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>Share Application</span>
            </button>
            <span className="font-mono text-[10px]">VER: 4.12.0</span>
          </div>
        </div>
      </footer>

      {/* GET STARTED SLIDE-OUT DRAWER --- INTERACTIVE SOLUTION COST ESTIMATOR */}
      <AnimatePresence>
        {isGetStartedOpen && (
          <div className="relative z-50">
            
            {/* Backdrop layer */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsGetStartedOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            />

            {/* Content drawer container */}
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-lg bg-white shadow-2xl p-6 sm:p-8 overflow-y-auto flex flex-col justify-between"
            >
              
              <div className="space-y-6">
                
                {/* Header title */}
                <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                  <div>
                    <h3 className="font-sans font-extrabold text-xl text-brand-primary">Exenith Solution Estimator</h3>
                    <p className="text-neutral-400 font-sans text-xs mt-0.5">Receive an active timeline & budget estimation immediately</p>
                  </div>
                  <button 
                    onClick={() => setIsGetStartedOpen(false)}
                    className="p-1 px-2.5 rounded hover:bg-neutral-100 font-sans font-bold text-neutral-500 transition-colors"
                  >
                    Close
                  </button>
                </div>

                {/* Form fields in estimator */}
                <div className="space-y-6">
                  
                  {/* Select System Target */}
                  <div className="space-y-2 text-left">
                    <label className="block text-xs font-mono font-extrabold text-neutral-400 uppercase tracking-wide">
                      Target Software Class
                    </label>
                    <select
                      value={calculatorService}
                      onChange={(e) => setCalculatorService(e.target.value)}
                      className="w-full px-3 py-2 text-sm rounded border border-gray-200 focus:outline-none"
                    >
                      <option value="Custom Application Development">Bespoke Custom App Development</option>
                      <option value="Claims Management core">Claims Management Ecosystem Core</option>
                      <option value="AI-Powered Automation pipeline">AI Workflow & Fraud Automation</option>
                      <option value="Mainframe Modernization transition">Mainframe legacy COBOL modernization</option>
                    </select>
                  </div>

                  {/* Estimated months slider */}
                  <div className="space-y-2 text-left">
                    <div className="flex justify-between items-baseline">
                      <label className="block text-xs font-mono font-extrabold text-neutral-400 uppercase tracking-wide">
                        Estimated Scope Duration
                      </label>
                      <span className="font-sans font-black text-sm text-brand-secondary">{estimatedMonths} Months</span>
                    </div>
                    <input
                      type="range"
                      min={2}
                      max={12}
                      value={estimatedMonths}
                      onChange={(e) => setEstimatedMonths(parseInt(e.target.value))}
                      className="w-full accent-brand-secondary"
                    />
                    <div className="flex justify-between font-mono text-[9px] text-neutral-400">
                      <span>2 Months (MVP core)</span>
                      <span>12 Months (Comprehensive enterprise)</span>
                    </div>
                  </div>

                  {/* Level of complexity / security SLA */}
                  <div className="space-y-2 text-left">
                    <label className="block text-xs font-mono font-extrabold text-neutral-400 uppercase tracking-wide">
                      Compliance & Continuity Level
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {(['Standard', 'Enterprise Plus', 'Mission Critical'] as const).map((lvl) => (
                        <button
                          key={lvl}
                          onClick={() => setEstimatedComplexity(lvl)}
                          className={`font-sans font-bold text-xs p-2.5 rounded border text-center transition-all ${
                            estimatedComplexity === lvl 
                              ? 'bg-brand-secondary border-brand-secondary text-white' 
                              : 'bg-neutral-50 text-neutral-500 border-gray-200 hover:bg-neutral-100'
                          }`}
                        >
                          {lvl}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Real-time calculated quote projection card */}
                  <div className="bg-[#121c2c] text-white p-5 rounded-lg space-y-3 relative overflow-hidden">
                    
                    {/* Glow backdrop artifact */}
                    <div className="absolute top-0 right-0 w-16 h-16 bg-brand-secondary/40 blur-xl"></div>
                    
                    <span className="font-mono text-[9px] text-[#39b8fd] font-extrabold tracking-widest uppercase block">ESTIMATED PROPOSAL</span>
                    <div className="flex justify-between items-baseline">
                      <span className="font-sans font-black text-2xl">${getCalculatedPrice()}</span>
                      <span className="font-mono text-[9px] text-neutral-400 uppercase">Est total budget</span>
                    </div>
                    
                    <div className="pt-2.5 border-t border-gray-800 space-y-1.5 font-mono text-[10px] text-neutral-300">
                      <div className="flex justify-between">&bull; Included engineering staff: <span>3x Senior devs, 1x Solutions architect</span></div>
                      <div className="flex justify-between">&bull; Code handover terms: <span>Full IP & ISO isolated repository</span></div>
                      <div className="flex justify-between">&bull; Live systems testing rig: <span>Standard included</span></div>
                    </div>
                  </div>

                </div>

              </div>

              {/* Drawer footer CTA */}
              <div className="space-y-3.5 pt-6 border-t border-gray-100">
                <button
                  onClick={() => {
                    alert("Estimation profile locked. Our solutions director will call your company with this exact setup sheet.");
                    setIsGetStartedOpen(false);
                  }}
                  className="w-full bg-brand-secondary hover:bg-brand-accent text-white font-sans font-bold py-3 text-sm rounded shadow-md transition-all active:scale-98"
                >
                  Proceed / Guarantee Configuration & Price
                </button>
                <p className="text-center font-mono text-[10px] text-neutral-400">
                  * Price quote reflects standardized regional tech cost modeling. Non-binding.
                </p>
              </div>

            </motion.div>

          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
