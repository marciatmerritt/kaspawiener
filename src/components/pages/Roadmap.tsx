import { component$ } from '@builder.io/qwik';
import { PageWrapper } from '../common/PageWrapper';
import { RoadmapContent } from '../common/RoadmapContent';

export default component$(() => {
  return <RoadmapContent PageWrapperComponent={PageWrapper} />;
});
