import { component$ } from '@builder.io/qwik';
import { Headline } from '../ui/Headline';
import { Image } from '@unpic/qwik';
import { tradeData } from '../../data/trade';
import { getImageSrc } from '../../utils/getImageSrc';

/**
 * TradeContent component.
 *
 * Displays a section with external trading platform links and images.
 * Includes a headline and a responsive grid of logo cards that link to supported exchanges or tools.
 *
 * @component
 * @param {{ PageWrapperComponent: any }} props - Layout wrapper component used to apply consistent page structure.
 * @returns {JSX.Element} Rendered trade section with platform links.
 */
export const TradeContent = component$(
  ({ PageWrapperComponent }: { PageWrapperComponent: any }) => {
    const { images, title, subtitle, highlight } = tradeData;
    return (
      <PageWrapperComponent>
        <div class='h-4'></div>
        <Headline title={title} subtitle={subtitle} highlight={highlight} />
        <div class='grid grid-cols-1 gap-5 p-4 md:grid-cols-3'>
          {images.map((image) => {
            return (
              <a key={image.id} href={image.link} target='_blank'>
                <Image
                  src={getImageSrc(image)}
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
