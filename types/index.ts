export interface Ecosystem {
  id: string;
  name: string;
  description: string;
  color: string;
  technologies: string[];
  projects: string[];
  icon: string;
}

export interface Technology {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  category: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  industry: string;
  technologies: string[];
  status: 'Active' | 'Research' | 'Planning';
  impact: string;
  image: string;
}

export interface Metric {
  label: string;
  value: number;
  unit: string;
  prefix?: string;
  suffix?: string;
}

export interface ContactFormData {
  name: string;
  company: string;
  email: string;
  projectObjective: string;
}
