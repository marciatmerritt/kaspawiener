export interface BrandInfo {
  name: string;
  tokenUrl: string;
  logo: {
    fileName: string;
    width: number;
    height: number;
    cdnUrl?: string;
  };
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

export interface SiteContent {
  brand: BrandInfo;
  footer: FooterInfo;
  navigation: NavigationItem[];
}
