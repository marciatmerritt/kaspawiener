
import { component$, Slot } from '@builder.io/qwik';

export const ContentWrapper = component$(() => {
  return (
    <section class="bg-white dark:bg-gray-900">
      <div class="pt-7 pb-10 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <Slot />
          </div>
          </section>
     
      

    
  );
});
