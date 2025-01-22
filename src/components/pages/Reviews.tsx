import { component$ } from '@builder.io/qwik';
import { Headline } from '../ui/Headline';
import { PageWrapper } from '../common/PageWrapper';
import ReviewGrid from '../widgets/ReviewGrid';



export default component$(() => {
  return (
    <div>
      <PageWrapper>
        <Headline
          title={"What Our Clients Say"}
          subtitle={"Discover the experiences and success stories from our clients."}
          highlight={"Reviews"}
        />
        <ReviewGrid/>
      </PageWrapper>

    {/* <ContentWrapper>
   
            <div class="grid gap-2 md:gap-4 lg:grid-cols-3">
              {reviews.map(({ title, text, name, position, image}, index) => (
                <figure
                  key={index}
                  class={`p-6 bg-gray-100 rounded dark:bg-gray-800 border-4 dark:border-gray-700 border-gray-200`}
                >
                  <blockquote class="text-sm text-gray-500 dark:text-gray-400">
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
                    <p class="my-4">{`"${text}"`}</p>
                  </blockquote>
                  <figcaption class="flex items-center space-x-3">
                    <img
                      class="w-9 h-9 rounded-full"
                      src={image}
                      alt={`${name} profile picture`}
                    />
                    <div class="space-y-0.5 font-medium dark:text-white">
                      <div>{name}</div>
                      <div class="text-sm font-light text-gray-500 dark:text-gray-400">
                        {position}
                      </div>
                    </div>
                  </figcaption>
                </figure>
              ))}
            </div>
            </ContentWrapper>
     */}
    </div>
  );
});
