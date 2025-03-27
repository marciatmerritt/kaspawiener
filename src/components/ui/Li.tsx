import { component$, Slot } from '@builder.io/qwik';

interface LiProps {
  class?: string;
}

export const Li = component$<LiProps>(({ class: className }) => {
  return (
    <li class={className}>
      <Slot />
    </li>
  );
});
