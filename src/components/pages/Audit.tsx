import { component$ } from '@builder.io/qwik';
import { PageWrapper } from '../common/PageWrapper';
import { Headline } from '../ui/Headline';


export default component$(() => {

  return (
<PageWrapper>
  <Headline
                                title={"Generate a free website audit and SEO report"}
                                subtitle={"Explore how our photography and videography services bring stories to life with creativity and precision."}
                                highlight={"Website Audit"}
                              />
          <form action="#" class="grid max-w-screen-md pt-2 grid-cols-1 mx-auto gap-x-8 gap-y-4 sm:grid-cols-2">
              <div>
                <label for="first-name" class="block mb-1.5 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Website URL
                </label>
                <input type="text" id="first-name"
                  class="block w-full p-2.5 text-md text-gray-900 border border-gray-300 rounded-lg shadow-sm bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="webdev.ca" required />
              </div>
             
              <div>
                <label for="email" class="block mb-1.5 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Email
                </label>
                <input type="email" id="email"
                  class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="james@webdev.ca" required />
              </div>


              <button type="submit"
                class="px-5 py-3 text-sm font-medium text-center text-white rounded-lg bg-primary sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                Generate Website Audit</button>
            </form>
      </PageWrapper>
  );
});