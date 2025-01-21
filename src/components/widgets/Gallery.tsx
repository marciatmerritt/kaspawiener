import { component$ } from '@builder.io/qwik';
import { Headline } from '../ui/Headline';
import { PageWrapper } from '../common/PageWrapper';


export default component$(() => {
  return (
    <div>
    <PageWrapper>
      <Headline
        title={"Our Gallery of Past Work"}
        subtitle={"Choose a one-time payment or pay it off over a longer period"}
        highlight={"Pricing"}
      />
      {/* Page content goes here */}
    </PageWrapper>

   
    </div>
  );
});










