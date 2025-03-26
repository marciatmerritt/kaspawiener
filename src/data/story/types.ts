export interface StoryImage {
  src: string;
  fileName: string;
  alt: string;
  width: number;
  height: number;
  provider: 'local' | 'cdn';
  cdnUrl?: string;
}

export interface StoryEntry {
  id: string;
  title: string;
  subtitle: string;
  highlight: string;
  image: StoryImage;
}

export interface StoryContent {
  stories: StoryEntry[];
}
