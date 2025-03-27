import { component$ } from '@builder.io/qwik';
import ToggleTheme from '../common/ToggleTheme';
import HeaderSocialLinks from './HeaderSocialLinks';
import { TokenCTA } from './TokenCTA';

export const DesktopMenu = component$(() => {
  return (
    <div class='hidden w-full items-center justify-end p-3 md:static md:mb-0 md:flex md:w-auto md:self-center md:p-0 rtl:left-auto rtl:right-0'>
      <div class='flex w-full items-center justify-between md:w-auto'>
        <div class='flex'>
          <HeaderSocialLinks />
          <ToggleTheme />
        </div>
        <span class='ml-4 rtl:ml-0 rtl:mr-4'>
          <TokenCTA />
        </span>
      </div>
    </div>
  );
});
