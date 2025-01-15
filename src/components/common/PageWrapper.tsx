// src/components/PageWrapper.tsx
import { component$, Slot } from '@builder.io/qwik';

export const PageWrapper = component$(() => {
  return (
    <div class="relative bg-white/80 dark:bg-gray-900/80 overflow-hidden flex items-center justify-center mx-2 mt-1.5 mb-1.5 border-radius-dot-25 rounded-lg">
      <div class="relative w-full max-w-7xl mx-auto px-1.5 py-1.5 lg:px-8">
        <div class="w-full bg-white/95 dark:bg-slate-900/95 rounded-lg pt-6 p-3 border-radius-dot-25">
          <Slot />
        </div>
      </div>
    </div>
  );
});
