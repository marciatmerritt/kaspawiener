import { component$ } from '@builder.io/qwik';
import { Headline } from '../ui/Headline';
import { PageWrapper } from '../common/PageWrapper';

export default component$(() => {
  return (
    <div>
    <PageWrapper>
      <Headline
        title={"Feedback from our Clients"}
        subtitle={"Hear what some of our past clients have to say about the work we've done"}
        highlight={"Reviews"}
      />
      {/* Page content goes here */}
    </PageWrapper>

<section class="bg-white dark:bg-gray-900">
<div class="py-3 px-3 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
 
  <div class="grid gap-8 lg:grid-cols-3">
    <div class="space-y-6">
      <figure class="p-6 bg-gray-50 rounded dark:bg-gray-800">
        <blockquote class="text-sm text-gray-500 dark:text-gray-400">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Solid foundation for any project</h3>
          <p class="my-4">"This is a very complex and beautiful set of elements. Under the hood it comes with the best things from 2 different worlds: Figma and Tailwind.”</p>
        </blockquote>
        <figcaption class="flex items-center space-x-3">
          <img class="w-9 h-9 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="profile picture" />
          <div class="space-y-0.5 font-medium dark:text-white">
            <div>Bonnie Green</div>
            <div class="text-sm font-light text-gray-500 dark:text-gray-400">CTO at Open AI</div>
          </div>
        </figcaption>
      </figure>
      
      <figure class="p-6 bg-gray-50 rounded dark:bg-gray-800">
        <blockquote class="text-sm text-gray-500 dark:text-gray-400">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">A must-have for designers</h3>
          <p class="my-4">"This is a very complex and beautiful set of elements. Under the hood it comes with the best things from 2 different worlds: Figma and Tailwind.”</p>
        </blockquote>
        <figcaption class="flex items-center space-x-3">
          <img class="w-9 h-9 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" alt="profile picture" />
          <div class="space-y-0.5 font-medium dark:text-white">
            <div>Lana Byrd</div>
            <div class="text-sm font-light text-gray-500 dark:text-gray-400">Software Engineer at Tesla</div>
          </div>
        </figcaption>
      </figure>
      <figure class="p-6 bg-gray-50 rounded dark:bg-gray-800">
        <blockquote class="text-sm text-gray-500 dark:text-gray-400">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Speechless with how easy this was to integrate</h3>
          <p class="my-4">"I recently got my hands on Flowbite Pro, and holy crap, I'm speechless with how easy this was to integrate within my application. Most templates are a pain, code is scattered, and near impossible to theme."</p>
        </blockquote>
        <figcaption class="flex items-center space-x-3">
          <img class="w-9 h-9 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="profile picture" />
          <div class="space-y-0.5 font-medium dark:text-white">
            <div>Jese Leos</div>
            <div class="text-sm font-light text-gray-500 dark:text-gray-400">CEO at Oracle</div>
          </div>
        </figcaption>
      </figure>
    </div>
 

  </div>
</div>
</section>
</div>
  );
});
