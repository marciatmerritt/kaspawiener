import { component$, Slot } from "@builder.io/qwik";

export const ContentWrapper = component$(() => {
  return (
    <section class="bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-6 sm:py-10 lg:py-16">
        <Slot />
      </div>
    </section>
  );
});
