import { component$ } from '@builder.io/qwik';
import { Accordion } from '../ui/Accordion';

export default component$(() => {
  return (
    <Accordion.Root class="w-full dark:text-gray-50  ">
      {/* Services Section */}
      <Accordion.Item class="dark:border-gray-700">
        <Accordion.Trigger class="text-xl flex trigger-text justify-between hover:text-primary items-center py-3 border-b border-gray-300 dark:border-gray-700">
          <span>How many questions are in this FAQ accordion?</span>
        </Accordion.Trigger>
        <Accordion.Content class="">
          {/* Service Links with Highlight and Divider */}
          <div class="hover:bg-primary/35 transition border-b border-gray-300 dark:border-gray-700 last:border-none">
            <a href="/" class="block text-lg py-3 px-2">There are 5 questions and answers in this FAQ accordion.</a>
          </div>
    
        </Accordion.Content>
      </Accordion.Item>

      <Accordion.Item class="dark:border-gray-700">
        <Accordion.Trigger class="text-xl flex trigger-text justify-between hover:text-primary items-center py-3 border-b border-gray-300 dark:border-gray-700">
          <span>Roadmap</span>
        </Accordion.Trigger>
        <Accordion.Content class="">
          {/* Service Links with Highlight and Divider */}
          <div class="hover:bg-primary/35 transition border-b border-gray-300 dark:border-gray-700 last:border-none">
            <a href="/" class="block text-lg py-3 px-2">Web Design</a>
          </div>

        </Accordion.Content>
      </Accordion.Item>


      <Accordion.Item class="dark:border-gray-700">
        <Accordion.Trigger class="text-xl flex trigger-text justify-between hover:text-primary items-center py-3 border-b border-gray-300 dark:border-gray-700">
          <span>Games</span>
        </Accordion.Trigger>
        <Accordion.Content class="">
          {/* Service Links with Highlight and Divider */}
          <div class="hover:bg-primary/35 transition border-b border-gray-300 dark:border-gray-700 last:border-none">
            <a href="/" class="block text-lg py-3 px-2">Web Design</a>
          </div>
      
        </Accordion.Content>
      </Accordion.Item>

      <Accordion.Item class="dark:border-gray-700">
        <Accordion.Trigger class="text-xl flex trigger-text justify-between hover:text-primary items-center py-3 border-b border-gray-300 dark:border-gray-700">
          <span>Community</span>
        </Accordion.Trigger>
        <Accordion.Content class="">
          {/* Service Links with Highlight and Divider */}
          <div class="hover:bg-primary/35 transition border-b border-gray-300 dark:border-gray-700 last:border-none">
            <a href="/" class="block text-lg py-3 px-2">Web Design</a>
          </div>
   
        </Accordion.Content>
      </Accordion.Item>

      
      <Accordion.Item class="dark:border-gray-700">
        <Accordion.Trigger class="text-xl flex trigger-text justify-between hover:text-primary items-center py-3 border-b border-gray-300 dark:border-gray-700">
          <span>Merch</span>
        </Accordion.Trigger>
        <Accordion.Content class="">
          {/* Service Links with Highlight and Divider */}
          <div class="hover:bg-primary/35 transition border-b border-gray-300 dark:border-gray-700 last:border-none">
            <a href="/" class="block text-lg py-3 px-2">Web Design</a>
          </div>
      
        </Accordion.Content>
      </Accordion.Item>


 

    </Accordion.Root>
  );
});