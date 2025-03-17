import { component$ } from '@builder.io/qwik';
import { PageWrapper3 } from '../common/PageWrapper3';
import { TokenomicsContent } from '../common/TokenomicsContent';

export default component$(() => {
  return <TokenomicsContent PageWrapperComponent={PageWrapper3} />;
});
