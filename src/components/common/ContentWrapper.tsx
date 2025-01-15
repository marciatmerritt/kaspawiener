
import { component$, Slot } from '@builder.io/qwik';

export const ContentWrapper = component$(() => {
  return (
    <section class="mx-auto max-w-7xl lg:py-16 lg:px-6">
          <div class="py-3 px-2 mx-auto bg-gray-200 dark:bg-gray-800 lg:py-16 lg:px-6">
          <Slot />
          </div>
          </section>
     
      

    
  );
});
