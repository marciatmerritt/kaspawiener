import { component$ } from '@builder.io/qwik';
import { Anchor } from '../ui/Anchor';
import { siteContent } from '~/data/site';

export const TokenCTA = component$(() => {
  const { brand } = siteContent;
  return (
    <Anchor
      href={brand.tokenUrl}
      class='btn btn-primary px-5.5 py-2.5 text-sm font-semibold shadow-none'
    >
      {brand.tokenCTA}
    </Anchor>
  );
});
