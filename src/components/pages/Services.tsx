import { component$ } from '@builder.io/qwik';
import { Headline } from '../ui/Headline';
import { PageWrapper } from '../common/PageWrapper';
import ServiceList from '../widgets/ServiceList';
import { ContentWrapper } from '../common/ContentWrapper';

export default component$(() => {
  return (
    <div>
    <PageWrapper>
      <Headline
        title={"What We Do"}
        subtitle={"Explore how our photography and videography services bring stories to life with creativity and precision."}
        highlight={"Services"}
      />
     <ServiceList/>
    </PageWrapper>
  
</div>
  );
});
