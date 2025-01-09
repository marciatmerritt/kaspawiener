import { component$ } from '@builder.io/qwik';
import { Image } from "@unpic/qwik";
import Stats from './Stats';


export default component$(() => {
  return (
    <div class="relative bg-white/80 dark:bg-gray-900/80 overflow-hidden flex items-center justify-center mx-1.5 mt-1 mb-2 rounded-md">
    <section class="relative rounded-md not-prose mx-1 my-1 bg-white/75 dark:bg-gray-900/90">

    <Image
    src="/images/roadmap.jpg"
    layout="constrained"
    width={1920}
    height={1080}
    alt="Full-Width Hero Image"
    class="w-full h-auto object-cover rounded-sm"
    priority={true}
  />
<div class="h-2 bg-gray-50 dark:bg-gray-900"></div>
<Image
     
     src="/images/ranks.jpg"
     layout="constrained"
     width={1920}
     height={1080}
     alt="Qwind Hero Image (Cool dog)"
     class="mx-auto w-full h-auto rounded-md"
     priority={true}
     breakpoints={[320, 480, 640, 768, 1024]}
   />
  
  </section>
  </div>

  );
});
