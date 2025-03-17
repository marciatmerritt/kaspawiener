import { component$ } from '@builder.io/qwik';
import { PageWrapper3 } from '../common/PageWrapper3';
import { RoadmapContent } from '../common/RoadmapContent';

export default component$(() => {
  return <RoadmapContent PageWrapperComponent={PageWrapper3} />;
});
