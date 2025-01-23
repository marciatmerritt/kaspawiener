import { component$ } from '@builder.io/qwik';
import { PageWrapper } from '../common/PageWrapper';
import { Headline } from '../ui/Headline';
import FAQAccordion from '../widgets/FAQAccordion';


export default component$(() => {

  return (
<PageWrapper>
  <Headline
                                title={"Frequently Asked Questions"}
                                subtitle={"Explore how our photography and videography services bring stories to life with creativity and precision."}
                                highlight={"FAQs"}
                              />
   <FAQAccordion/>
      </PageWrapper>
  );
});