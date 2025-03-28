export interface BrandInfo {
  default: string;
  name: string;
  token: string;
  tokenCTA: string;
  tokenUrl: string;
  logo: SiteImage;
}

export interface FooterLinkItem {
  title: string;
  href: string;
}

export interface FooterLinkSection {
  title: string;
  items: FooterLinkItem[];
}

export interface FooterInfo {
  description: string;
  copyright: string;
  donation: {
    text: string;
    address: string;
    link: string;
  };
  links: FooterLinkSection[];
}

export interface NavigationItem {
  text: string;
  href?: string;
  icon?: string;
  items?: NavigationSubItem[];
}

export interface NavigationSubItem {
  text: string;
  href: string;
  icon?: string;
}

export interface SocialLink {
  id: string;
  icon: string;
  title: string;
  url: string;
  meta?: Record<string, any>;
}

export interface ContactLink {
  icon: string;
  title: string;
  url: string;
}

export interface SiteImage {
  src: string;
  fileName: string;
  alt: string;
  width: number;
  height: number;
  provider: 'local' | 'cdn';
  cdnUrl?: string;
}

export interface SiteContent {
  brand: BrandInfo;
  footer: FooterInfo;
  navigation: NavigationItem[];
  social: SocialLink[];
  contact: {
    email: ContactLink;
  };
}
