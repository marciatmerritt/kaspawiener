import { component$ } from '@builder.io/qwik';
import { Image } from "@unpic/qwik";


export default component$(() => {
  return (
    <div class="relative bg-white/80 dark:bg-gray-900/80 overflow-hidden flex items-center justify-center mx-1.5 mt-1 mb-2 rounded-md">
    <section class="relative rounded-md not-prose mx-1 my-1 bg-white/75 dark:bg-gray-900/90">

    <Image
    src="/images/team.jpg"
    layout="constrained"
    width={1920}
    height={1080}
    alt="Full-Width Hero Image"
    class="w-full h-auto object-cover rounded-sm pb-1.5"
    priority={true}
  />
  
  </section>
  </div>

  );
});
