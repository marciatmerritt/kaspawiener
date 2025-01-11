import { component$ } from '@builder.io/qwik';
import { Headline } from '../ui/Headline';
import { PageWrapper } from '../common/PageWrapper';
import { Input } from '../ui/Input';

export default component$(() => {
  return (
    <div>
      <PageWrapper>
        <Headline
          title={"Get in touch"}
          subtitle={"Contact us for a free consultation, we're passionate about learning about your business!"}
          highlight={"Contact Us"}
        />
        {/* Page content goes here */}
      </PageWrapper>

   
        <div class="py-3 px-2 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <Input type="email" placeholder="Email" />
         
          <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required/>

        </div>
      </div>

   

  );
});
