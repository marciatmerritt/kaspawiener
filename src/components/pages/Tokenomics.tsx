import { component$ } from '@builder.io/qwik';
import { Headline } from '../ui/Headline';
import { PageWrapper } from '../common/PageWrapper';
import Stats from '../widgets/Stats';

export default component$(() => {
  return (
    <div>
    <PageWrapper>
    <div class="h-2"></div>
      <Headline
        title={"$WIENER Tokenomics"}
        subtitle={"Choose a one-time payment or pay it off over a longer period"}
        highlight={"Tokenomics"}
      />
      <Stats/>
    </PageWrapper>

   

    </div>
  );
});










