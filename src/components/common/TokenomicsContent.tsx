import { component$ } from '@builder.io/qwik';
import { Headline2 } from '../ui/Headline2';
import { Headline } from '../ui/Headline';
import content from '../../data/tokenomics/content.json';
import { Image } from '@unpic/qwik';
import { TokenomicsStats } from '../widgets/TokenomicsStats';

export const TokenomicsContent = component$(
  ({ PageWrapperComponent }: { PageWrapperComponent: any }) => {
    const localSrc = `/images/${content.image.fileName}`;
    const cdnSrc = `cdnUrl` in content.image ? content.image.cdnUrl : '';
    const imageSrc = content.image.provider === 'local' ? localSrc : cdnSrc;
    return (
      <PageWrapperComponent>
        <div class='-mt-2 flex flex-col items-center gap-6 pb-2 md:flex-row md:items-start md:justify-between md:gap-8 md:p-8'>
          {/* Left Side: Headline + Stats */}
          <div class='order-1 flex w-full flex-col gap-6 md:order-2 md:w-1/2'>
            {/* Headline */}
            <div>
              <div class='hidden sm:block'>
                <Headline2
                  title={content.title}
                  subtitle={content.subtitle}
                  highlight={content.highlight}
                />
              </div>
            </div>
            <div class='block sm:hidden'>
              <Headline
                title={content.title}
                subtitle={content.subtitle}
                highlight={content.highlight}
              />
            </div>
            {/* Stats Grid */}
            <TokenomicsStats />
          </div>

          {/* Right Side: Image */}
          <div class='order-2 w-full px-2 md:order-1 md:w-1/2'>
            <Image
              src={imageSrc}
              alt={content.image.alt}
              width={content.image.width}
              height={content.image.height}
              layout='constrained'
              class='h-auto w-full rounded-lg shadow-md'
            />
          </div>
        </div>
      </PageWrapperComponent>
    );
  }
);
