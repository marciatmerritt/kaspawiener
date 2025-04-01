import type { SiteImage, SectionHeadline, BaseContentItem } from '~/types/common';

export type RoadmapItem = BaseContentItem;

export interface RoadmapContent {
  headline: SectionHeadline;
  itemTitle: string;
  items: RoadmapItem[];
  image: SiteImage;
}
