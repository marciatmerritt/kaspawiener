import { component$, Slot } from '@builder.io/qwik';

interface UlProps {
  class?: string;
}

export const Ul = component$<UlProps>(({ class: className }) => {
  return (
    <ul class={className}>
      <Slot />
    </ul>
  );
});
