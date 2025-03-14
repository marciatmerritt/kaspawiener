import { component$ } from '@builder.io/qwik';
import { PageWrapper } from '../common/PageWrapper';
import { StoryContent } from '../common/StoryContent';

export default component$(() => {
  return <StoryContent PageWrapperComponent={PageWrapper} />;
});
