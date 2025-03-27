import { component$ } from '@builder.io/qwik';
import ToggleTheme from '../common/ToggleTheme';
import HeaderSocialLinks from './HeaderSocialLinks';
import ToggleMenu from '../common/ToggleMenu';

export const MobileMenu = component$(() => {
  return (
    <div class='flex items-center md:hidden'>
      <ToggleTheme />
      <HeaderSocialLinks />
      <ToggleMenu />
    </div>
  );
});
