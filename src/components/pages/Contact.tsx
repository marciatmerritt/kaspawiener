import { component$ } from '@builder.io/qwik';
import { Headline } from '../ui/Headline';
import { PageWrapper } from '../common/PageWrapper';
import ContactForm from '../widgets/ContactForm';
import { ContentWrapper } from '../common/ContentWrapper';

export default component$(() => {
  return (
    <div>
      <PageWrapper>
        <Headline
          title={"Get in touch"}
          subtitle={"Reach out for a free consultation to bring your vision to life."}
          highlight={"Contact Us"}
        />
        {/* Page content goes here */}
      </PageWrapper>
      <ContentWrapper>
      <ContactForm/>
      </ContentWrapper>
      </div>
  );
});
