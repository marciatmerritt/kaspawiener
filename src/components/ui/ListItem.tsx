import { component$, Slot } from '@builder.io/qwik';

interface ListItemProps {
  class?: string;
}

export const ListItem = component$<ListItemProps>(({ class: className }) => {
  return (
    <li class={className}>
      <Slot />
    </li>
  );
});
