export interface TradeImage {
  id: number;
  src: string;
  fileName: string;
  alt: string;
  width: number;
  height: number;
  provider: 'local' | 'cdn';
  link: string;
}

export interface TradeContent {
  title: string;
  subtitle: string;
  highlight: string;
  images: TradeImage[];
}
