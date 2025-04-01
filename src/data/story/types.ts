import type { BaseContentItem } from "~/types/common";

export interface StoryEntry extends BaseContentItem {
  subtitle: string;
  highlight: string;
}

export interface StoryContent {
  stories: StoryEntry[];
}
