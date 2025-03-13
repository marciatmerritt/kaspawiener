import { component$ } from '@builder.io/qwik';
import { Headline2 } from '../ui/Headline2';
import { PageWrapper } from '../common/PageWrapper';
import { Headline } from '../ui/Headline';

export default component$(() => {
  return (
    <PageWrapper>
      <div class='flex flex-col items-center gap-6 p-4 md:flex-row md:items-start md:justify-between md:gap-8 md:p-8'>
        {/* Text Container */}
        <div class='order-1 flex w-full flex-col justify-center md:order-2 md:w-1/2'>
          <div class='hidden sm:block'>
            <Headline2
              title={'Bailey the $WIENER on Kaspa'}
              subtitle={
                'Bailey is the first $WIENER and the origin story. The genesis. Many other wieners will come after Bailey but she started this rocket ship for all the other dogs.'
              }
              highlight={'Story'}
            />
          </div>
          <div class='block sm:hidden'>
            <Headline
              title={'Bailey the $WIENER'}
              subtitle={
                'Bailey is the first $WIENER and the origin story. The genesis. Many other wieners will come after Bailey but she started this rocket ship for all the other dogs.'
              }
              highlight={'Story'}
            />
          </div>
        </div>

        {/* Image Container */}
        <div class='order-2 w-full md:order-1 md:w-1/2'>
          <img
            height={767}
            width={767}
            src='/images/bailey2.jpg'
            alt='Sample Image'
            class='h-auto w-full rounded-lg shadow-md'
          />
        </div>
      </div>
    </PageWrapper>
  );
});
