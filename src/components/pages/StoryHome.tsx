import { component$ } from '@builder.io/qwik';
import { PageWrapper3 } from '../common/PageWrapper3';
import { StoryContent } from '../common/StoryContent';

export default component$(() => {
  return <StoryContent PageWrapperComponent={PageWrapper3} storyId='bailey' />;
});
