import { component$ } from '@builder.io/qwik';
import { Image } from '@unpic/qwik';

export default component$(() => {
  return (
    <div class='border-radius-dot-25 relative mx-1.5 mb-2 mt-1 flex items-center justify-center overflow-hidden rounded-lg bg-white/80 dark:bg-gray-900/80'>
      <section class='not-prose border-radius-dot-25 relative m-1.5 rounded-lg bg-white/70 dark:bg-gray-900/75 md:-mt-[76px]'>
        <div class='relative mx-auto max-w-7xl px-4 sm:px-10'>
          <div class='pointer-events-none pt-0 md:pt-[60px]'></div>
          <div class='pt-6 md:py-20 lg:flex lg:h-screen lg:items-center lg:gap-8 lg:py-0'>
            <div class='mx-auto basis-1/2 pb-8 text-center md:pb-16 lg:text-left'>
              <a
                href='https://kaspamarket.io/token/WIENER'
                class='mb-4 inline-flex items-center justify-between rounded-full bg-gray-100 p-1 pr-4 text-sm text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700'
                role='alert'
              >
                <span class='mr-3 rounded-full bg-primary-400 px-4 py-1.5 text-xs text-white'>
                  New
                </span>{' '}
                <span class='text-sm font-medium'>
                  $WIENER live on KaspaMarket!
                </span>
                <svg
                  class='ml-2 size-5'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fill-rule='evenodd'
                    d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                    clip-rule='evenodd'
                  ></path>
                </svg>
              </a>
              <h1 class='leading-tighter font-heading mb-4 text-5xl font-bold tracking-tighter text-primary dark:text-gray-200 md:text-7xl'>
                <span class='text-primary'>
                  Bailey <span class='text-primary-300'>the Kaspian</span>{' '}
                  WIENER
                </span>
              </h1>
              <div class='mx-auto max-w-3xl lg:max-w-none'>
                <p class='mb-6 text-xl dark:text-slate-300'>
                  Join the fun with $WIENER— the top dog on the Kaspa chain.
                  Fast, fun, and ready for the next big trend.{' '}
                </p>

                <div class='border-radius-dot-25 m-auto grid grid-cols-2 gap-3 sm:max-w-md sm:grid-cols-2 lg:max-w-7xl lg:grid-cols-2'>
                  <a href='https://x.com/wienerKRC20'>
                    <div class='flex w-full'>
                      <button class='btn w-full rounded-md bg-primary-300 py-2 dark:bg-primary-700'>
                        Follow on X
                      </button>
                    </div>
                  </a>
                  <a href='https://t.me/+Civ_RQYiZH03Y2I5'>
                    <div class='flex w-full'>
                      <button class='btn w-full rounded-md bg-primary-200 py-2 dark:bg-primary-600'>
                        Join Telegram
                      </button>
                    </div>
                  </a>
                  <a
                    href='/images/WIENER-WHITEPAPER.pdf'
                    download='WIENER-WHITEPAPER.pdf'
                  >
                    <div class='flex w-full'>
                      <button class='btn w-full rounded-md bg-primary-100 py-2 dark:bg-primary-500'>
                        Whitepaper
                      </button>
                    </div>
                  </a>
                  <a href='https://kas.fyi/token/krc20/WIENER'>
                    <div class='flex w-full'>
                      <button class='btn w-full rounded-md bg-primary-400 py-2'>
                        Mint $WIENER
                      </button>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div class='basis-1/2 pb-10'>
              <Image
                src='/images/logo.jpg'
                layout='constrained'
                width={500}
                height={500}
                alt='Qwind Hero Image (Cools dog)'
                class='object-fit mx-auto w-full rounded-md drop-shadow-2xl lg:mr-0'
                priority={true}
                breakpoints={[320, 480, 640, 768, 1024]}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
});
