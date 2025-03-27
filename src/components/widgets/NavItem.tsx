import { component$ } from '@builder.io/qwik';
import { A } from '../ui/A';
import { Button } from '../ui/Button';
import { Ul } from '../ui/Ul';
import { Li } from '../ui/Li';
import { iconMap } from '../icons/iconMap';
import type { NavigationItem } from '~/data/site/types';

export const NavItem = component$<NavigationItem>(
  ({ text, href, icon, items }) => {
    const ChevronIcon = iconMap['chevronDown'];
    const Icon = icon ? iconMap[icon] : null;

    return (
      <Li class={items?.length ? 'dropdown' : ''}>
        {items?.length ? (
          <>
            <Button class='flex items-center gap-1 px-4 py-3 hover:text-primary'>
              {Icon && <Icon class='size-4' />}
              {text}
              {ChevronIcon && (
                <ChevronIcon class='ml-0.5 hidden size-3.5 md:inline rtl:ml-0 rtl:mr-0.5' />
              )}
            </Button>
            <Ul class='dropdown-menu rounded pl-4 font-medium drop-shadow-xl md:absolute md:hidden md:min-w-[200px] md:bg-white/90 md:pl-0 md:backdrop-blur-md dark:md:bg-slate-800'>
              {items.map(({ text: subText, href: subHref }, index) => (
                <Li key={index}>
                  <A
                    href={subHref}
                    class='whitespace-no-wrap block px-5 py-2 first:rounded-t last:rounded-b hover:text-primary dark:hover:bg-gray-700 md:hover:bg-gray-100'
                  >
                    {subText}
                  </A>
                </Li>
              ))}
            </Ul>
          </>
        ) : href ? (
          <A
            class='flex items-center gap-1 px-4 py-3 hover:text-primary'
            href={href}
          >
            {Icon && <Icon class='size-4' />}
            {text}
          </A>
        ) : null}
      </Li>
    );
  }
);
