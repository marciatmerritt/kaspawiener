import { component$, useStore } from '@builder.io/qwik';
import ToggleMenu from '~/components/common/ToggleMenu';
import IconChevronDown from '../icons/IconChevronDown';
import { useContent } from '@builder.io/qwik-city';

import ToggleTheme from '../common/ToggleTheme';
import IconTelegram from '../icons/IconTelegram';
import IconTwitter from '../icons/IconTwitter';

export default component$(() => {
  const store = useStore({
    isScrolling: false,
  });

  const { menu } = useContent();

  return (
    <header
      id='header'
      class={`sticky top-0 z-40 mx-auto w-full flex-none border-b border-gray-50/0 transition-opacity ease-in-out ${
        store.isScrolling
          ? 'bg-white dark:bg-slate-900 md:bg-white/90 md:backdrop-blur-sm dark:md:bg-slate-900/90'
          : ''
      }`}
      window:onScroll$={() => {
        if (!store.isScrolling && window.scrollY >= 10) {
          store.isScrolling = true;
        } else if (store.isScrolling && window.scrollY < 10) {
          store.isScrolling = false;
        }
      }}
    >
      <div class='absolute inset-0 bg-white/90 dark:bg-gray-900/90'></div>
      <div class='text-default relative mx-auto w-full max-w-7xl p-2.5 md:flex md:justify-between md:px-6'>
        <div class='mr-auto flex justify-between rtl:ml-auto rtl:mr-0'>
          <a class='flex items-center' href={'/'}>
            <img
              class='rounded-full'
              src='/images/logo.svg'
              height={50}
              width={50}
            ></img>{' '}
            <span class='ml-1 flex items-center self-center whitespace-nowrap text-3xl font-bold text-primary hover:text-primary-300 sm:ml-2 md:text-2xl'>
              WIENER
            </span>
          </a>
          <div class='flex items-center md:hidden'>
            <ToggleTheme />
            <a
              class='inline-flex items-center rounded-lg p-2.5 text-sm text-gray-500 hover:bg-primary hover:text-white focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:focus:ring-gray-700'
              aria-label={'Telegram'}
              title={'Telegram'}
              href={'https://t.me/+Civ_RQYiZH03Y2I5'}
            >
              <IconTelegram />
            </a>
            <a
              class='inline-flex items-center rounded-lg p-2.5 text-sm text-gray-500 hover:bg-primary hover:text-white focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:focus:ring-gray-700'
              aria-label={'Telegram'}
              title={'Telegram'}
              href={'https://x.com/wienerKRC20'}
            >
              <IconTwitter />
            </a>
            <ToggleMenu />
          </div>
        </div>
        <nav
          class='text-default hidden w-full items-center overflow-y-auto overflow-x-hidden md:mx-5 md:flex md:w-auto md:overflow-x-auto md:overflow-y-visible'
          aria-label='Main navigation'
        >
          {menu && menu.items ? (
            <ul class='flex w-full flex-col text-xl font-medium tracking-[0.01rem] md:w-auto md:flex-row md:self-center md:text-[0.9375rem]'>
              {menu.items.map(({ text, href, items }, key) => (
                <li key={key} class={items?.length ? 'dropdown' : ''}>
                  {items?.length ? (
                    <>
                      <button class='flex items-center px-4 py-3 hover:text-primary'>
                        {text}{' '}
                        <IconChevronDown class='ml-0.5 hidden size-3.5 md:inline rtl:ml-0 rtl:mr-0.5' />
                      </button>
                      <ul class='dropdown-menu rounded pl-4 font-medium drop-shadow-xl md:absolute md:hidden md:min-w-[200px] md:bg-white/90 md:pl-0 md:backdrop-blur-md dark:md:bg-slate-800'>
                        {items.map(({ text: text2, href: href2 }, key2) => (
                          <li key={key2}>
                            <a
                              class='whitespace-no-wrap block px-5 py-2 first:rounded-t last:rounded-b hover:text-primary dark:hover:bg-gray-700 md:hover:bg-gray-100'
                              href={href2}
                            >
                              {text2}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <a
                      class='items-centers flex px-4 py-3 hover:text-primary'
                      href={href}
                    >
                      {text}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          ) : null}
        </nav>
        <div class='fixed bottom-0 left-0 hidden w-full items-center justify-end p-3 md:static md:mb-0 md:flex md:w-auto md:self-center md:p-0 rtl:left-auto rtl:right-0'>
          <div class='flex w-full items-center justify-between md:w-auto'>
            <div class='flex'>
              <a
                class='inline-flex items-center rounded-lg p-2.5 text-sm text-gray-500 hover:bg-primary-300 hover:text-white focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:focus:ring-gray-700'
                aria-label={'Telegram'}
                title={'Telegram'}
                href={'/'}
              >
                <IconTelegram />
              </a>
              <a
                class='inline-flex items-center rounded-lg p-2.5 text-sm text-gray-500 hover:bg-primary-300 hover:text-white focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:focus:ring-gray-700'
                aria-label={'Telegram'}
                title={'Telegram'}
                href={'/'}
              >
                <IconTwitter />
              </a>

              <ToggleTheme />
            </div>
            <span class='ml-4 rtl:ml-0 rtl:mr-4'>
              <a
                href='https://kas.fyi/token/krc20/WIENER'
                class='btn btn-primary px-5.5 ml-2 w-auto py-2.5 text-sm font-semibold shadow-none md:px-6'
              >
                Mint $WIENER
              </a>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
});
