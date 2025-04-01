import type { SiteImage, SectionHeadline } from '~/types/common';

export interface TokenStat {
  value: string;
  label: string;
}

export interface TokenomicsContent {
  headline: SectionHeadline;
  image: SiteImage;
  stats: TokenStat[];
}
