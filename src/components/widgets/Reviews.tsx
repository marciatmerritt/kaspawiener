import { component$ } from '@builder.io/qwik';
import { Headline } from '../ui/Headline';
import { PageWrapper } from '../common/PageWrapper';

export default component$(() => {
  return (
    <div>
    <PageWrapper>
      <Headline
        title={"Feedback from Clients"}
        subtitle={"Hear what some of our past clients have to say about the work we've done"}
        highlight={"Reviews"}
      />
      {/* Page content goes here */}
    </PageWrapper>

<section class="bg-white dark:bg-gray-900">
<div class=" mx-auto max-w-screen-xl lg:py-16 lg:px-6">
<div class="py-5 px-3 mx-auto bg-gray-200 dark:bg-gray-900  lg:py-16 lg:px-6">
 
  <div class="grid gap-8 lg:grid-cols-3">
    <div class="space-y-4">
      <figure class="p-6 bg-gray-50 rounded dark:bg-gray-800">
  <blockquote class="text-sm text-gray-500 dark:text-gray-400">
    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Great insights and generous heart</h3>
    <p class="my-4">"Thanks Dave Andrews for your great insights, talent and generous heart!"</p>
  </blockquote>
  <figcaption class="flex items-center space-x-3">
    <img class="w-9 h-9 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="profile picture" />
    <div class="space-y-0.5 font-medium dark:text-white">
      <div>Carole Françoise Noel</div>
      <div class="text-sm font-light text-gray-500 dark:text-gray-400">CTO at Open AI</div>
    </div>
  </figcaption>
</figure>

<figure class="p-6 bg-gray-50 rounded dark:bg-gray-800">
  <blockquote class="text-sm text-gray-500 dark:text-gray-400">
    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Collaboration between artist and printer</h3>
    <p class="my-4">"It's always a collaboration between photographer and printer, and he is an artist from whom I learn so very much!"</p>
  </blockquote>
  <figcaption class="flex items-center space-x-3">
    <img class="w-9 h-9 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" alt="profile picture" />
    <div class="space-y-0.5 font-medium dark:text-white">
      <div>Ruth Dick</div>
      <div class="text-sm font-light text-gray-500 dark:text-gray-400">Software Engineer at Tesla</div>
    </div>
  </figcaption>
</figure>

<figure class="p-6 bg-gray-50 rounded dark:bg-gray-800">
  <blockquote class="text-sm text-gray-500 dark:text-gray-400">
    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Always high-caliber work</h3>
    <p class="my-4">"Dave is an artist in his own right who shares his knowledge with his clients willingly. His work is beautiful and always of the same high caliber. I only use Dave!"</p>
  </blockquote>
  <figcaption class="flex items-center space-x-3">
    <img class="w-9 h-9 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="profile picture" />
    <div class="space-y-0.5 font-medium dark:text-white">
      <div>Joy Kardish</div>
      <div class="text-sm font-light text-gray-500 dark:text-gray-400">CEO at Oracle</div>
    </div>
  </figcaption>
</figure>

<figure class="p-6 bg-gray-50 rounded dark:bg-gray-800">
  <blockquote class="text-sm text-gray-500 dark:text-gray-400">
    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Attention to detail</h3>
    <p class="my-4">"Dave is the best! Great results & attention to detail from start to finish."</p>
  </blockquote>
  <figcaption class="flex items-center space-x-3">
    <img class="w-9 h-9 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="profile picture" />
    <div class="space-y-0.5 font-medium dark:text-white">
      <div>Andrew Balfour</div>
      <div class="text-sm font-light text-gray-500 dark:text-gray-400">CTO at Open AI</div>
    </div>
  </figcaption>
</figure>

<figure class="p-6 bg-gray-50 rounded dark:bg-gray-800">
  <blockquote class="text-sm text-gray-500 dark:text-gray-400">
    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Dedicated to the artists</h3>
    <p class="my-4">"Dave invests himself in the work he prints for the artists he serves."</p>
  </blockquote>
  <figcaption class="flex items-center space-x-3">
    <img class="w-9 h-9 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" alt="profile picture" />
    <div class="space-y-0.5 font-medium dark:text-white">
      <div>Alan Mirabelli</div>
      <div class="text-sm font-light text-gray-500 dark:text-gray-400">Software Engineer at Tesla</div>
    </div>
  </figcaption>
</figure>

<figure class="p-6 bg-gray-50 rounded dark:bg-gray-800">
  <blockquote class="text-sm text-gray-500 dark:text-gray-400">
    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Craftsmanship and love</h3>
    <p class="my-4">"Dave’s attention to detail and love of the craft is evident in his prints."</p>
  </blockquote>
  <figcaption class="flex items-center space-x-3">
    <img class="w-9 h-9 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="profile picture" />
    <div class="space-y-0.5 font-medium dark:text-white">
      <div>Beth Gordon</div>
      <div class="text-sm font-light text-gray-500 dark:text-gray-400">CEO at Oracle</div>
    </div>
  </figcaption>
</figure>

    </div>
 

  </div>
</div>
</div>
</section>
</div>
  );
});
