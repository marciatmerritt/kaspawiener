export interface RoadmapItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface RoadmapImage {
  src: string;
  fileName: string;
  alt: string;
  width: number;
  height: number;
  provider: 'local' | 'cdn';
  cdnUrl?: string;
}

export interface RoadmapContent {
  title: string;
  highlight: string;
  itemTitle: string;
  items: RoadmapItem[];
  image: RoadmapImage;
}
