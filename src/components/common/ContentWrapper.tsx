
import { component$, Slot } from '@builder.io/qwik';

export const ContentWrapper = component$(() => {
  return (
    <section class="bg-gray-50 dark:bg-gray-900">
<div class=" mx-auto max-w-screen-xl px-2 py-2 lg:py-16 lg:px-6">
          <Slot />
          </div>
          </section>
     
      

    
  );
});
