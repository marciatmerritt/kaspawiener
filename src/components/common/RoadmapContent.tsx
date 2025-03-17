import { component$ } from '@builder.io/qwik';
import { Headline2 } from '../ui/Headline2';
import IconStar from '../icons/IconStar';
import { stepsData } from '../../data/roadmap/content';
import ImgRoadmap from '~/media/images/roadmap2.jpg?w=767&jsx';

export const RoadmapContent = component$(
  ({ PageWrapperComponent }: { PageWrapperComponent: any }) => {
    const { highlight, title, items } = stepsData;

    return (
      <PageWrapperComponent>
        <div class='flex flex-col items-center gap-6 p-4 md:flex-row md:items-start md:justify-between md:gap-8 md:p-8'>
          {/* Text Container */}
          <div class='order-1 flex w-full flex-col justify-center md:order-1 md:w-1/2'>
            <Headline2 title={title} highlight={highlight} />

            <div class='mb-4 mt-2 md:mb-0 md:py-4 md:pr-16'>
              {Array.isArray(items) &&
                items.length &&
                items.map(({ title, description, icon: Icon }, index) => (
                  <div key={`item-steps-${index}`} class='flex'>
                    <div class='mr-4 flex flex-col items-center'>
                      <div>
                        {index !== items.length - 1 ? (
                          <div class='flex size-10 items-center justify-center rounded-full border-2 border-primary-900'>
                            {typeof Icon !== 'undefined' ? (
                              <Icon class='size-6 text-primary-800 dark:text-slate-200' />
                            ) : (
                              <IconStar class='size-6 text-primary-800 dark:text-slate-200' />
                            )}
                          </div>
                        ) : (
                          <div class='flex size-10 items-center justify-center rounded-full border-2 border-primary-900 bg-primary-900'>
                            {typeof Icon !== 'undefined' ? (
                              <Icon class='size-6 text-white dark:text-slate-200' />
                            ) : (
                              <IconStar class='size-6 text-white dark:text-slate-200' />
                            )}
                          </div>
                        )}
                      </div>
                      {index !== items.length - 1 && (
                        <div class='h-full w-px bg-gray-300 dark:bg-slate-500'></div>
                      )}
                    </div>
                    <div
                      class={`pt-1 ${index !== items.length - 1 ? 'pb-8' : ''}`}
                    >
                      {title && (
                        <p class='mb-2 text-xl font-bold text-gray-900 dark:text-slate-300'>
                          {title}
                        </p>
                      )}
                      {description && (
                        <p class='text-gray-600 dark:text-slate-400'>
                          {description}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* Image Container */}
          <div class='order-2 w-full md:order-2 md:w-1/2'>
            <ImgRoadmap class='h-auto w-full rounded-lg shadow-md' />
          </div>
        </div>
      </PageWrapperComponent>
    );
  }
);
