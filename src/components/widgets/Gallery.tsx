import { component$ } from '@builder.io/qwik';
import { Headline } from '../ui/Headline';
import { PageWrapper } from '../common/PageWrapper';


export default component$(() => {
  return (
    <div>
    <PageWrapper>
      <Headline
        title={"Our Past Work"}
        subtitle={"Choose a one-time payment or pay it off over a longer period"}
        highlight={"Gallery"}
      />
      {/* Page content goes here */}
    </PageWrapper>

   
    </div>
  );
});










