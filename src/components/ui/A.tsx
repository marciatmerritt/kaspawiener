import { component$, Slot } from '@builder.io/qwik';

interface AProps {
  href: string;
  class?: string;
  target?: string;
  rel?: string;
  'aria-label'?: string;
  title?: string;
}

export const A = component$<AProps>(
  ({ href, class: className, target, rel, ...rest }) => {
    return (
      <a
        href={href}
        class={className}
        target={target}
        rel={rel ?? (target === '_blank' ? 'noopener noreferrer' : undefined)}
        {...rest}
      >
        <Slot />
      </a>
    );
  }
);
