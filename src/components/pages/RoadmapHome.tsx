import { component$ } from '@builder.io/qwik';
import { Headline2 } from '../ui/Headline2';
import { PageWrapper3 } from '../common/PageWrapper3';
import IconStar from '../icons/IconStar';

const stepsData = {
  title: 'Our Process: From Idea to Finished Print',
  items: [
    {
      title: '2025 Q1: Token Launch and Online Presence',
      description:
        'Deploy $WIENER token, mint initial supplies, and secure our first exchange listings. Grow the project with active community outreach to build awareness.',
      icon: IconStar,
    },
    {
      title: '2025 Q2: Community Engagement',
      description:
        'Focus on community voting and launch the Content Creator Support Initiative to amplify outreach.',
      icon: IconStar,
    },
    {
      title: '2025 Q3: NFT Launch and Partnerships',
      description:
        'Roll out NFTs using the KRC721 standard. Build strategic partnerships and identify talent to scale the project further.',
      icon: IconStar,
    },
    {
      title: '2025 Q4: Community Rewards and Year Review',
      description:
        "Host the Economic Mission Contest and the 'Make The World A Better Place' showcase. Wrap up the year with a review and celebrate progress with the community.",
      icon: IconStar,
    },
    {
      title: '2026: Global Impact and Future Planning',
      description:
        'Research global opportunity gaps, form partnerships with organizations like the United Nations and World Economic Forum, and host the Meme of the Year Rewards. Reevaluate the project and plan for the next phase.',
      icon: IconStar,
    },
  ],

  image: {
    src: '/assets/images/print-steps.webp',
    alt: 'Steps to professional printing success',
  },
};

const { items } = stepsData;

export default component$(() => {
  return (
    <PageWrapper3>
      <div class='flex flex-col items-center gap-6 p-4 md:flex-row md:items-start md:justify-between md:gap-8 md:p-8'>
        {/* Text Container */}
        <div class='order-1 flex w-full flex-col justify-center md:order-1 md:w-1/2'>
          <Headline2 title={'$WIENER Roadmap'} highlight={'Roadmap'} />

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
          <img
            height={767}
            width={767}
            src='/images/roadmap2.jpg'
            alt='Sample Image'
            class='h-auto w-full rounded-lg shadow-md'
          />
        </div>
      </div>
    </PageWrapper3>
  );
});
