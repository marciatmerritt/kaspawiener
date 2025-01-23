import { component$ } from '@builder.io/qwik';
import { Headline } from '../ui/Headline';
import { PageWrapper } from '../common/PageWrapper';
import { ContentWrapper } from '../common/ContentWrapper';
import PricingTab from '../widgets/PricingTab';

export default component$(() => {
  return (
    <div>
    <PageWrapper>
      <Headline
        title={"Flexible Pricing Options"}
        subtitle={"Choose a one-time payment or pay it off over a longer period"}
        highlight={"Pricing"}
      />
      <PricingTab/>
    </PageWrapper>

   

    </div>
  );
});










