import { component$ } from '@builder.io/qwik';
import { Headline } from '../ui/Headline';
import { PageWrapper } from '../common/PageWrapper';
import { ContentWrapper } from '../common/ContentWrapper';
import ReviewCarousel from '../widgets/ReviewCarousel';



export default component$(() => {
  return (
    <div>
      <PageWrapper>
        <Headline
          title={"What Our Clients Say"}
          subtitle={"Discover the experiences and success stories from our clients."}
          highlight={"Reviews"}
        />
      </PageWrapper>

    <ContentWrapper>
   <ReviewCarousel/>
            </ContentWrapper>
    
    </div>
  );
});
