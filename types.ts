export type TabType = 'home' | 'custom-software' | 'claims-products' | 'expertise' | 'about-us' | 'connect' | 'privacy' | 'terms';

export interface CapabilityItem {
  id: string;
  title: string;
  description: string;
  bullets: string[];
  icon: string;
}

export interface Technology {
  name: string;
  category: 'cloud' | 'frontend' | 'backend' | 'database' | 'devops' | 'legacy';
}

export interface LifecycleStep {
  step: number;
  title: string;
  subtitle: string;
  detailedDescription: string;
}

export interface InquiryFormState {
  fullName: string;
  email: string;
  service: string;
  brief: string;
}

export interface ProductItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  bullets: string[];
  insights?: string;
  metric?: string;
  metricLabel?: string;
  buttonText: string;
}

export interface CaseStudy {
  id: string;
  client: string;
  title: string;
  impact: string;
  category: string;
}
