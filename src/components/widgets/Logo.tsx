import { component$ } from '@builder.io/qwik';
import { Image } from '@unpic/qwik';
import { siteContent } from '~/data/site';
import { getImageSrc } from '~/utils/getImageSrc';

export default component$(() => {
  const { brand } = siteContent;

  return (
    <>
      <Image
        src={getImageSrc(brand.logo)}
        alt={brand.logo.alt}
        width={brand.logo.width}
        height={brand.logo.height}
        layout='constrained'
        class='rounded-full'
      />{' '}
      <span class='ml-1 flex items-center self-center whitespace-nowrap text-3xl font-bold text-primary hover:text-primary-300 sm:ml-2 md:text-2xl'>
        {brand.name}
      </span>
    </>
  );
});
