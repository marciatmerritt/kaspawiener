import { component$ } from "@builder.io/qwik";
import { Image } from "@unpic/qwik";

const coverImage =
  "/images/koin.png";

export default component$(() => {
  return (
    <div class="relative sm:bg-white/85 bg-white/95 sm:dark:bg-gray-900/90 dark:bg-gray-900/95 overflow-hidden flex items-center justify-center mx-2 mt-1.5 mb-2 rounded-md">

    <section class="relative not-prose">
      <div class="absolute inset-0 pointer-events-none" aria-hidden="true"></div>
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div class="pt-0 pointer-events-none"></div>
        <div class="py-8 md:py-20 lg:py-0 lg:flex lg:items-center lg:h-screen lg:gap-8">
          <div class="basis-1/2 text-center lg:text-left pb-10 md:pb-16 mx-auto">
         
         
          <a href="https://twitter.com/intent/retweet?tweet_id=1874968926096171242" class="inline-flex hidden sm:block justify-between items-center py-1 px-1 pr-4 mb-6 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700" role="alert">
                <span class="text-xs bg-primary rounded-full text-white px-4 py-1.5 mr-3">New</span> <span class="text-sm font-medium">Chainge listing coming soon!</span>
                <svg class="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
              </a>
         
          <h1 class="text-5xl md:text-7xl font-bold leading-tighter tracking-tighter text-primary mb-4 font-heading dark:text-gray-200">

<span class="text-primary-600">KOIN on Kaspa</span>
</h1>
            <div class="max-w-3xl mx-auto lg:max-w-none">
            <p class="text-xl mb-6 dark:text-slate-300">
                  Everyone needs some <span class="font-semibold">KOIN</span> in their wallet.
                </p>

              <div class="max-w-xs sm:max-w-md m-auto flex flex-nowrap flex-col sm:flex-row sm:justify-center gap-4 lg:justify-start lg:m-0 lg:max-w-7xl">
                <div class="flex w-full sm:w-auto">
                  <a
                    class="btn btn-primary sm:mb-0 w-full"
                    href="https://github.com/onwidget/qwind"
                    target="_blank"
                    rel="noopener"
                  >
                    Buy $KOIN
                  </a>
                  
                </div>
                <div class="flex w-full sm:w-auto">
                  <button class="btn btn-primary w-full bg-primary/60 dark:bg-transparent">Join Telegram</button>
                </div>
              </div>
            </div>
          </div>
          <div class="basis-1/2">
            <Image
              src={coverImage}
              layout="constrained"
              width={493}
              height={616}
              alt="Qwind Hero Image (Cool dog)"
              class="mx-auto lg:mr-0 w-full drop-shadow-2xl rounded-md"
              priority={true}
              breakpoints={[320, 480, 640, 768, 1024]}
            />
          </div>
        </div>
      </div>
    </section>
    </div>
  );
});
