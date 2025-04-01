import type { SiteImage, SectionHeadline, ButtonItem, SocialLink, LinkItem} from '~/types/common';

export interface BrandInfo {
  description: string;
  name: string;
  token: string;
  tokenCTA: string;
  tokenUrl: string;
  logo: SiteImage;
}

export interface HeroHeadline extends Omit<SectionHeadline, 'title' | 'highlight'> {
  title: {
    pre: string;
    highlight: string;
    post: string;
  };
}


export interface HeroContent {
  headline: HeroHeadline;
  image: SiteImage;
  alert: {
    label: string;
    text: string;
    href: string;
  };
  buttons?: ButtonItem[];
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
  title: string;
  description: string;
  copyright: string;
  donation: {
    text: string;
    icon: string;
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

export interface SiteContent {
  brand: BrandInfo;
  hero: HeroContent;
  footer: FooterInfo;
  navigation: NavigationItem[];
  social: SocialLink[];
  contact: {
    email: LinkItem;
  };
}
