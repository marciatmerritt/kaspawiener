import { component$ } from '@builder.io/qwik';
import { siteContent } from '~/data/site';
import { Ul } from '../ui/Ul';
import { NavItem } from './NavItem';

export const Navigation = component$(() => {
  const { navigation } = siteContent;

  return (
    <nav
      class='text-default hidden w-full items-center overflow-y-auto overflow-x-hidden md:mx-5 md:flex md:w-auto md:overflow-x-auto md:overflow-y-visible'
      aria-label='Main navigation'
    >
      <Ul class='flex w-full flex-col text-xl font-medium tracking-[0.01rem] md:w-auto md:flex-row md:self-center md:text-[0.9375rem]'>
        {navigation.map((item, key) => (
          <NavItem key={key} {...item} />
        ))}
      </Ul>
    </nav>
  );
});
