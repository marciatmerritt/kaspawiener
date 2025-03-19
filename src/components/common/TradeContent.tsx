import { component$ } from '@builder.io/qwik';
import { Headline } from '../ui/Headline';
import { Image } from '@unpic/qwik';
import tradeContent from '../../data/trade/content.json';
import { getImageSrc } from '../../utils/getImageSrc';

/**
 * TradeContent component.
 *
 * - Displays trade-related content, including a headline and a grid of images.
 * - Accepts a `PageWrapperComponent` prop to allow flexible wrapping in different layouts.
 * - Loads content from `trade/content.json` and dynamically generates image links.
 *
 * @component
 * @param {Object} props - Component properties.
 * @param {React.ElementType} props.PageWrapperComponent - A wrapper component that provides layout structure.
 * @returns {JSX.Element} The rendered trade content.
 */
export const TradeContent = component$(
  ({ PageWrapperComponent }: { PageWrapperComponent: any }) => {
    return (
      <PageWrapperComponent>
        <div class='h-4'></div>
        <Headline
          title={tradeContent.title}
          subtitle={tradeContent.subtitle}
          highlight={tradeContent.highlight}
        />
        <div class='grid grid-cols-1 gap-5 p-4 md:grid-cols-3'>
          {tradeContent.images.map((image) => {
            const imageSrc = getImageSrc(image);
            return (
              <a key={image.id} href={image.link} target='_blank'>
                <Image
                  src={imageSrc}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  layout='constrained'
                  class='h-48 w-full rounded-md object-cover hover:opacity-80'
                />
              </a>
            );
          })}
        </div>
      </PageWrapperComponent>
    );
  }
);
