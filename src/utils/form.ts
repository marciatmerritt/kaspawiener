export const getColSpanClass = (colSpan?: 'full' | 'half'): string =>
  colSpan === 'full' ? 'sm:col-span-2' : '';
