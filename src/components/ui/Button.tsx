import { component$, Slot, type QRL } from '@builder.io/qwik';

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset';
  class: string;
  onClick$?: QRL<() => void>;
}

export const Button = component$<ButtonProps>(
  ({ type = 'button', class: className = '', onClick$ }) => {
    return (
      <button type={type} class={className} onClick$={onClick$}>
        <Slot />
      </button>
    );
  }
);
