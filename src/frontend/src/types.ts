export interface PricingTier {
  id: string;
  name: string;
  subtitle: string;
  monthlyPrice: number;
  annualPrice: number;
  features: string[];
  cta: string;
  highlighted?: boolean;
  segment: "startup" | "sme" | "enterprise";
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
  benefit: string;
}

export interface Testimonial {
  id: string;
  name: string;
  title: string;
  company: string;
  quote: string;
  avatar: string;
  metric?: string;
}

export interface Objective {
  id: string;
  label: string;
  description: string;
  icon: string;
}

export interface Segment {
  id: string;
  name: string;
  description: string;
  icon: string;
  benefits: string[];
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface ROIMetric {
  value: string;
  label: string;
  icon: string;
}
