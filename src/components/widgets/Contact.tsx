import { component$ } from '@builder.io/qwik';
import { Headline } from '../ui/Headline';
import { PageWrapper } from '../common/PageWrapper';
import { Input } from '../ui/Input';

export default component$(() => {
  return (
    <div>
    <PageWrapper>
      <Headline
        title={"Get in touch"}
        subtitle={"Contact us for a free consultation, we're passionate about learning about your business!"}
        highlight={"Contact Us"}
      />
      {/* Page content goes here */}
    </PageWrapper>

<section class="bg-white dark:bg-gray-900">
<div class="py-3 px-3 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
<Input type="email" placeholder="Email" />

</div>
</section>
</div>
  );
});
