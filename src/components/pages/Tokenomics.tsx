import { component$ } from '@builder.io/qwik';
import { PageWrapper } from '../common/PageWrapper';
import { TokenomicsContent } from '../common/TokenomicsContent';

export default component$(() => {
  return <TokenomicsContent PageWrapperComponent={PageWrapper} />;
});
