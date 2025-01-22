import { component$ } from '@builder.io/qwik';
import { Headline } from '../ui/Headline';
import { PageWrapper } from '../common/PageWrapper';
import ServiceGrid from '../widgets/ServiceGrid';


export default component$(() => {
  return (
    <div>
    <PageWrapper>
      <Headline
        title={"What We Do"}
        subtitle={"Explore how our photography and videography services bring stories to life with creativity and precision."}
        highlight={"Services"}
      />
     <ServiceGrid/>
    </PageWrapper>
  
</div>
  );
});
