import { component$ } from '@builder.io/qwik';
import { Headline2 } from '../ui/Headline2';
import { PageWrapper3 } from '../common/PageWrapper3';
import { Headline } from '../ui/Headline';

export default component$(() => {
  return (
    <PageWrapper3>
      <div class='-mt-2 flex flex-col items-center gap-6 pb-2 md:flex-row md:items-start md:justify-between md:gap-8 md:p-8'>
        {/* Left Side: Headline + Stats */}
        <div class='order-1 flex w-full flex-col gap-6 md:order-2 md:w-1/2'>
          {/* Headline */}
          <div>
            <div class='hidden sm:block'>
              <Headline2
                title={'Token Statistics'}
                subtitle={
                  'WIENER launched fairly with a strong community from the beginning during mint.'
                }
                highlight={'Tokenomics'}
              />
            </div>
          </div>
          <div class='block sm:hidden'>
            <Headline
              title={'Token Statistics'}
              subtitle={
                'WIENER launched fairly with a strong community from the beginning during mint.'
              }
              highlight={'Tokenomics'}
            />
          </div>

          {/* Stats Grid */}
          <div class='-mt-4 grid grid-cols-2 gap-6 sm:-mt-8 md:grid-cols-2 md:gap-8'>
            <div class='mb-10 text-center md:mb-0 md:border-r dark:md:border-slate-500'>
              <div class='font-heading text-4xl font-bold text-primary-600 lg:text-5xl xl:text-6xl'>
                100%
              </div>
              <p class='text-sm font-medium uppercase tracking-widest text-gray-800 dark:text-slate-400 lg:text-base'>
                Fair Launch
              </p>
            </div>
            <div class='mb-10 text-center md:mb-0 dark:md:border-slate-500'>
              <div class='font-heading text-4xl font-bold text-primary-600 lg:text-5xl xl:text-6xl'>
                1 Billion
              </div>
              <p class='text-sm font-medium uppercase tracking-widest text-gray-800 dark:text-slate-400 lg:text-base'>
                Total Supply
              </p>
            </div>
            <div class='font-heading text-center md:border-r dark:md:border-slate-500'>
              <div class='text-4xl font-bold text-primary-600 lg:text-5xl xl:text-6xl'>
                0.1%
              </div>
              <p class='text-sm font-medium uppercase tracking-widest text-gray-800 dark:text-slate-400 lg:text-base'>
                Team Allocation
              </p>
            </div>
            <div class='text-center'>
              <div class='font-heading text-4xl font-bold text-primary-600 lg:text-5xl xl:text-6xl'>
                100+
              </div>
              <p class='text-sm font-medium uppercase tracking-widest text-gray-800 dark:text-slate-400 lg:text-base'>
                Community Members
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: Image */}
        <div class='order-2 w-full px-2 md:order-1 md:w-1/2'>
          <img
            height={767}
            width={767}
            src='/images/tokenomics.jpg'
            alt='Sample Image'
            class='h-auto w-full rounded-lg shadow-md'
          />
        </div>
      </div>
    </PageWrapper3>
  );
});
