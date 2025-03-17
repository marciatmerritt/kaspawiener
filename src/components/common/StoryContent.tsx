import { component$ } from '@builder.io/qwik';
import { Headline2 } from '../ui/Headline2';
import { Headline } from '../ui/Headline';
import { Image } from '@unpic/qwik';
import storyContent from '../../data/story/content.json';

export const StoryContent = component$(
  ({
    PageWrapperComponent,
    storyId,
  }: {
    PageWrapperComponent: any;
    storyId?: string;
  }) => {
    let stories = storyContent.stories;
    if (storyId) {
      // Filter for a single story if `storyId` is provided
      stories = stories.filter((story) => story.id === storyId);
    }

    return (
      <PageWrapperComponent>
        {stories.map((story) => {
          const { title, subtitle, highlight, image } = story;
          const localSrc = `/images/${image.fileName}`;
          const cdnSrc = `cdnUrl` in image ? image.cdnUrl : '';
          const imageSrc = image.provider === 'local' ? localSrc : cdnSrc;
          return (
            <div
              key={story.id}
              class='flex flex-col items-center gap-6 p-4 md:flex-row md:items-start md:justify-between md:gap-8 md:p-8'
            >
              {/* Text Container */}
              <div class='order-1 flex w-full flex-col justify-center md:order-2 md:w-1/2'>
                <div class='hidden sm:block'>
                  <Headline2
                    title={title}
                    subtitle={subtitle}
                    highlight={highlight}
                  />
                </div>
                <div class='block sm:hidden'>
                  <Headline
                    title={title}
                    subtitle={subtitle}
                    highlight={highlight}
                  />
                </div>
              </div>

              {/* Image Container */}
              <div class='order-2 w-full md:order-1 md:w-1/2'>
                <Image
                  src={imageSrc}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  layout='constrained'
                  class='h-auto w-full rounded-lg shadow-md'
                />
              </div>
            </div>
          );
        })}
      </PageWrapperComponent>
    );
  }
);
