import { component$, Slot } from '@builder.io/qwik';

interface ListProps {
  class?: string;
}

export const List = component$<ListProps>(({ class: className }) => {
  return (
    <ul class={className}>
      <Slot />
    </ul>
  );
});
