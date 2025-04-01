export interface BaseContentItem {
  id: string;
  title: string;
  description?: string;
  icon?: string;
  image?: SiteImage;
}

export interface ButtonItem {
  label: string;
  href: string;
  style?: string;
  icon?: string;
  fileName?: string;
}

export interface LinkItem {
  icon?: string;
  title: string;
  href: string;
}

export interface SectionHeadline {
  title: string;
  subtitle?: string;
  highlight?: string;
  description?: string;
}

export interface SiteImage {
  src: string;
  fileName: string;
  alt: string;
  width: number;
  height: number;
  provider: 'local' | 'cdn';
  cdnUrl?: string;
  layout?: 'fixed' | 'constrained' | 'fullWidth';
  priority?: boolean;
  breakpoints?: number[];
}

export interface SocialLink {
  id: string;
  icon: string;
  title: string;
  subtitle?: string;
  href: string;
  meta?: Record<string, any>;
}