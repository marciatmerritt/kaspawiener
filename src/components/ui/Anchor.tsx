import { component$, Slot } from '@builder.io/qwik';

/**
 * Props for the `Anchor` component.
 * A wrapper around the native <a> element that supports common link attributes
 * and automatically applies `rel="noopener noreferrer"` for external links.
 */
interface AnchorProps {
  href: string;
  class?: string;
  target?: string;
  rel?: string;
  'aria-label'?: string;
  title?: string;
}

/**
 * A customizable anchor link component with accessibility and security defaults.
 * Accepts children via `<Slot />` and passes all common anchor attributes.
 *
 * Automatically adds `rel="noopener noreferrer"` if `target="_blank"` and `rel` is not provided.
 */
export const Anchor = component$<AnchorProps>(
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
