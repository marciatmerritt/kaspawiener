import { component$ } from '@builder.io/qwik';
import { Headline } from '../ui/Headline';
import { PageWrapper } from '../common/PageWrapper';

export default component$(() => {
  return (
    <div>
    <PageWrapper>
      <Headline
        title={"What We Do"}
        subtitle={"Hear what some of our past clients have to say about the work we've done"}
        highlight={"Services"}
      />
      {/* Page content goes here */}
    </PageWrapper>

<section class="bg-white dark:bg-gray-900">
<div class=" mx-auto max-w-screen-xl lg:py-16 lg:px-6">
<div class="py-2 px-2 mx-auto bg-gray-200 dark:bg-gray-900  lg:py-16 lg:px-6">
<div class="py-3 px-3 mx-auto bg-gray-100 dark:bg-gray-800  lg:py-16 lg:px-6">
 
<div class="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

  <div class="group relative overflow-hidden  shadow-md">
    <img width={700} height={400}
      src="/images/exhibit.jpg"
      alt="Service 1"
      class="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
    />
    <div class="absolute inset-0 bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
      <p class="text-white text-center px-4">More details about Service 1 go here. Explain what makes it unique and useful.</p>
    </div>
    <div class="p-4 bg-gray-100 dark:bg-gray-800">
      <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Service 1</h3>
      <p class="text-sm text-gray-600 dark:text-gray-400">Brief description of Service 1.</p>
    </div>
  </div>

 
  <div class="group relative overflow-hidden rounded-lg shadow-md">
    <img width={700} height={400}
      src="/images/reproduction.jpg"
      alt="Service 2"
      class="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
    />
    <div class="absolute inset-0 bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
      <p class="text-white text-center px-4">More details about Service 2 go here. Explain what makes it unique and useful.</p>
    </div>
    <div class="p-4 bg-gray-100 dark:bg-gray-800">
      <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Service 2</h3>
      <p class="text-sm text-gray-600 dark:text-gray-400">Brief description of Service 2.</p>
    </div>
  </div>


  <div class="group relative overflow-hidden rounded-lg shadow-md">
    <img width={700} height={400}
      src="/images/fineart.jpg"
      alt="Service 3"
      class="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
    />
    <div class="absolute inset-0 bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
      <p class="text-white text-center px-4">More details about Service 3 go here. Explain what makes it unique and useful.</p>
    </div>
    <div class="p-4 bg-gray-100 dark:bg-gray-800">
      <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Service 3</h3>
      <p class="text-sm text-gray-600 dark:text-gray-400">Brief description of Service 3.</p>
    </div>
  </div>

  <div class="group relative overflow-hidden rounded-lg shadow-md">
    <img width={700} height={400}
      src="/images/digitization.jpg"
      alt="Service 3"
      class="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
    />
    <div class="absolute inset-0 bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
      <p class="text-white text-center px-4">More details about Service 3 go here. Explain what makes it unique and useful.</p>
    </div>
    <div class="p-4 bg-gray-100 dark:bg-gray-800">
      <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Service 3</h3>
      <p class="text-sm text-gray-600 dark:text-gray-400">Brief description of Service 3.</p>
    </div>
  </div>

  <div class="group relative overflow-hidden rounded-lg shadow-md">
    <img width={700} height={400}
      src="/images/iphone.jpg"
      alt="Service 3"
      class="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
    />
    <div class="absolute inset-0 bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
      <p class="text-white text-center px-4">More details about Service 3 go here. Explain what makes it unique and useful.</p>
    </div>
    <div class="p-4 bg-gray-100 dark:bg-gray-800">
      <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Service 3</h3>
      <p class="text-sm text-gray-600 dark:text-gray-400">Brief description of Service 3.</p>
    </div>
  </div>

  <div class="group relative overflow-hidden rounded-lg shadow-md">
    <img width={700} height={400}
      src="/images/photography.jpg"
      alt="Service 3"
      class="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
    />
    <div class="absolute inset-0 bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
      <p class="text-white text-center px-4">More details about Service 3 go here. Explain what makes it unique and useful.</p>
    </div>
    <div class="p-4 bg-gray-100 dark:bg-gray-800">
      <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Service 3</h3>
      <p class="text-sm text-gray-600 dark:text-gray-400">Brief description of Service 3.</p>
    </div>
  </div>


</div>
</div>

 
</div>
</div>
</section>
</div>
  );
});
