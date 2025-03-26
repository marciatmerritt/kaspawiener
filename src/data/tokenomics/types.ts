export interface TokenStat {
  value: string;
  label: string;
}

export interface TokenomicsImage {
  id: number;
  src: string;
  fileName: string;
  alt: string;
  width: number;
  height: number;
  provider: 'local' | 'cdn';
}

export interface TokenomicsContent {
  title: string;
  subtitle: string;
  highlight: string;
  image: TokenomicsImage;
  stats: TokenStat[];
}
