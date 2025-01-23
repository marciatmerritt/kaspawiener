import { component$ } from '@builder.io/qwik';
import { PageWrapper } from '~/components/common/PageWrapper';
import { Headline } from '~/components/ui/Headline';
import FAQAccordion from '~/components/widgets/FAQAccordion';



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