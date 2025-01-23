import { component$ } from '@builder.io/qwik';
import { Headline } from '../ui/Headline';
import Stats from '../widgets/Stats';
import { PageWrapper3 } from '../common/PageWrapper3';

export default component$(() => {
  return (
    <div>
    <PageWrapper3>
        <div class="h-5"></div>
      <Headline
        title={"$WIENER Tokenomics"}
        subtitle={"Choose a one-time payment or pay it off over a longer period"}
        highlight={"Tokenomics"}
      />
      <Stats/>
    </PageWrapper3>

   

    </div>
  );
});










