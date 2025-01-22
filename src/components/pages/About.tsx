import { component$ } from '@builder.io/qwik';
import { PageWrapper2 } from '../common/PageWrapper2';
import ContactForm from '../widgets/ContactForm';

export default component$(() => {
  return (
    <PageWrapper2>
   <ContactForm/>
</PageWrapper2>
  );
});
