import { useVisibleTask$ } from '@builder.io/qwik';
import type { QRL } from '@builder.io/qwik';

export const useScrollListener = (
  onScroll$: QRL<(scrollY: number) => void>,
  debounceMs = 100
) => {
  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(() => {
    let timeoutId: number | undefined;

    const handler = () => {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = window.setTimeout(() => {
        onScroll$(window.scrollY);
      }, debounceMs);
    };

    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  });
};
