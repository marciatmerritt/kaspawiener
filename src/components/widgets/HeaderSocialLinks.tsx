import { component$ } from '@builder.io/qwik';
import { siteContent } from '~/data/site';
import { Anchor } from '../ui/Anchor';
import { iconMap } from '../icons/iconMap';

export default component$(() => {
  const { social } = siteContent;

  return (
    <>
      {social.map(({ id, title, url, icon }) => {
        const Icon = iconMap[icon];

        return (
          <Anchor
            key={id}
            class='inline-flex items-center rounded-lg p-2.5 text-sm text-gray-500 hover:bg-primary hover:text-white focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:focus:ring-gray-700'
            aria-label={title}
            title={title}
            href={url}
          >
            {Icon && <Icon />}
          </Anchor>
        );
      })}
    </>
  );
});
