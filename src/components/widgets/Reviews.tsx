import { component$ } from '@builder.io/qwik';
import { Headline } from '../ui/Headline';
import { PageWrapper } from '../common/PageWrapper';

const reviews = [
  {
    title: 'Great insights and generous heart',
    text: '"Thanks Dave Andrews for your great insights, talent and generous heart!"',
    name: 'Carole Françoise Noel',
    position: 'CTO at Open AI',
    imgSrc: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png',
    border: false,
  },
  {
    title: 'Collaboration between artist and printer',
    text: '"It\'s always a collaboration between photographer and printer, and he is an artist from whom I learn so very much!"',
    name: 'Ruth Dick',
    position: 'Software Engineer at Tesla',
    imgSrc: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png',
    border: true,
  },
  {
    title: 'Always high-caliber work',
    text: '"Dave is an artist in his own right who shares his knowledge with his clients willingly. His work is beautiful and always of the same high caliber. I only use Dave!"',
    name: 'Joy Kardish',
    position: 'CEO at Oracle',
    imgSrc: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png',
    border: true,
  },
  {
    title: 'Attention to detail',
    text: '"Dave is the best! Great results & attention to detail from start to finish."',
    name: 'Andrew Balfour',
    position: 'CTO at Open AI',
    imgSrc: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png',
    border: false,
  },
  {
    title: 'Dedicated to the artists',
    text: '"Dave invests himself in the work he prints for the artists he serves."',
    name: 'Alan Mirabelli',
    position: 'Software Engineer at Tesla',
    imgSrc: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png',
    border: false,
  },
  {
    title: 'Craftsmanship and love',
    text: '"Dave’s attention to detail and love of the craft is evident in his prints."',
    name: 'Beth Gordon',
    position: 'CEO at Oracle',
    imgSrc: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png',
    border: false,
  },
];

export default component$(() => {
  return (
    <div>
      <PageWrapper>
        <Headline
          title={"Client Feedback"}
          subtitle={"Hear what our past clients have to say about past work."}
          highlight={"Reviews"}
        />
        {/* Page content goes here */}
      </PageWrapper>

      <section class="bg-white dark:bg-gray-900">
        <div class="mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div class="py-2 px-2 mx-auto bg-gray-200 dark:bg-gray-800 lg:py-16 lg:px-6">
            <div class="grid gap-8 lg:grid-cols-3">
              {reviews.map((review, index) => (
                <figure
                  key={index}
                  class={`p-6 bg-gray-50 rounded dark:bg-gray-800 ${review.border ? 'border-8 border-gray-100' : ''}`}
                >
                  <blockquote class="text-sm text-gray-500 dark:text-gray-400">
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">{review.title}</h3>
                    <p class="my-4">{review.text}</p>
                  </blockquote>
                  <figcaption class="flex items-center space-x-3">
                    <img
                      class="w-9 h-9 rounded-full"
                      src={review.imgSrc}
                      alt="profile picture"
                    />
                    <div class="space-y-0.5 font-medium dark:text-white">
                      <div>{review.name}</div>
                      <div class="text-sm font-light text-gray-500 dark:text-gray-400">
                        {review.position}
                      </div>
                    </div>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
});
