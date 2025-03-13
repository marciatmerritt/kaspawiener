import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';

export default component$(() => {
  const links = [
    {
      title: 'About',
      items: [
        { title: 'Story', href: '/story' },
        { title: 'Roadmap', href: '/roadmap' },
        { title: 'Tokenomics', href: '/tokenomics' },
      ],
    },

    {
      title: 'Resources',
      items: [
        { title: 'Kas.fyi', href: 'https://kas.fyi/token/krc20/wiener' },
        { title: 'KRC-20', href: 'https://kasplex.org/' },
      ],
    },
    {
      title: 'Trade',
      items: [
        { title: 'KSPR Bot', href: 'https://t.me/kspr_home_bot?start=WdRcvw' },
        { title: 'Chainge (coming soon)', href: '/' },
      ],
    },

    {
      title: 'Kaspa',
      items: [
        { title: 'Docs', href: 'https://kaspa.org/' },
        {
          title: 'Explorer',
          href: 'https://explorer.kaspa.org/?_gl=1*zucsjw*_ga*MTU0NTUwNzk2NC4xNzM0MTE4NTEw*_ga_YSMK4G52CC*MTczNjQwNzQ0Ny4yMi4xLjE3MzY0MDc4NjEuMC4wLjA.',
        },
      ],
    },
  ];

  return (
    <footer class='bg-gradient-to-r from-primary-600 via-primary to-primary-600 p-2'>
      <div class='max-w-8xl mx-auto rounded-lg bg-white/90 px-4 shadow-lg dark:bg-gray-900/90 sm:px-6'>
        <div class='grid grid-cols-12 gap-4 pb-2 pt-6 sm:gap-8 md:pt-8'>
          <div class='col-span-12 pr-8 lg:col-span-4'>
            <div class='mb-3 flex items-center'>
              <Link
                class='inline-block text-xl font-bold text-primary-600 hover:text-primary'
                href={'/'}
              >
                Bailey the $WIENER
              </Link>
            </div>

            <div class='mb-2 text-sm text-gray-600 dark:text-gray-400'>
              Join the fun with WIENER— the top dog on the Kaspa chain. Fast,
              fun, and ready for the next big trend.
            </div>
          </div>

          {links.map(({ title, items }, index) => (
            <div key={index} class='col-span-6 md:col-span-3 lg:col-span-2'>
              <div class='mb-3 font-medium text-gray-800 dark:text-gray-300'>
                {title}
              </div>
              {Array.isArray(items) && items.length > 0 && (
                <ul class='text-sm'>
                  {items.map(({ title, href }, index2) => (
                    <li key={index2} class='mb-1'>
                      <Link
                        class='text-gray-600 transition duration-150 ease-in-out hover:text-primary hover:underline dark:text-gray-400'
                        href={href}
                      >
                        {title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <div class='pb-3 md:flex md:items-center md:justify-between md:pb-2 md:pt-8'>
          <div class='flex items-center justify-between pb-2 pt-3 text-sm text-gray-700 dark:text-slate-400 md:justify-start'>
            <span class=''>© 2025 Bailey the $WIENER&nbsp;</span>
            <span class='hidden sm:block'>&nbsp;· &nbsp;</span>

            <span class='hidden text-gray-900 dark:text-gray-200 sm:block'>
              {' '}
              Donate <span class='mx-1 text-primary'>♥</span>{' '}
              kaspa:qqdz0j2zmsyehnfd8yd2hlhk6fjsr36x44zwnphcfa2ld7x4z2tysw48ck8yg
            </span>
            <a
              class='btn block bg-primary-300 px-2 py-1 text-xs dark:bg-primary-700 sm:hidden'
              href='https://kas.fyi/address/kaspa:qqdz0j2zmsyehnfd8yd2hlhk6fjsr36x44zwnphcfa2ld7x4z2tysw48ck8yg'
            >
              {' '}
              <span class='block text-gray-900 dark:text-gray-200 sm:hidden'>
                Donate<span class='mx-1 text-primary'>♥</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
});
