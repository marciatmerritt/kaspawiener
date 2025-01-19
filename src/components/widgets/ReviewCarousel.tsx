import { component$ } from '@builder.io/qwik';
import { Carousel } from '@qwik-ui/headless';
import { ContentWrapper } from '../common/ContentWrapper';

export default component$(() => {
  const items = [
    {
      imgSrc: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80',
      quote: 'Gravida quam mi erat tortor neque molestie. Auctor aliquet at porttitor a enim nunc suscipit tincidunt nunc. Et non lorem tortor posuere. Nunc eu scelerisque interdum eget tellus non nibh scelerisque bibendum.',
      author: 'Judith Black',
      role: 'CEO of Workcation',
    },
    {
      imgSrc: 'https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80',
      quote: 'Nullam scelerisque, leo id accumsan fermentum, arcu orci gravida felis, sit amet gravida ligula elit eget turpis.',
      author: 'John Doe',
      role: 'CTO of InnovateTech',
    },
    {
      imgSrc: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80',
      quote: 'Aliquam euismod nisl quis sapien congue, vitae mattis elit facilisis. Vivamus vulputate nisl id libero ultrices tincidunt.',
      author: 'Alice Johnson',
      role: 'Founder of BrightIdeas',
    },
  ];

  return (
    <ContentWrapper>
      <Carousel.Root class="carousel-root" gap={30} draggable={false}>
        <div class="carousel-buttons">
          <Carousel.Previous>Prev</Carousel.Previous>
          <Carousel.Next>Next</Carousel.Next>
        </div>
        <Carousel.Scroller class="carousel-scroller">
          {items.map((item, index) => (
            <div
              key={index}
              class="carousel-slide flex-shrink-0 w-full max-w-full"
            >
              <div class="bg-gray-900 pb-20 sm:pb-24 xl:pb-0">
                <div class="mx-auto flex max-w-7xl flex-col items-center gap-x-8 gap-y-10 px-6 sm:gap-y-8 lg:px-8 xl:flex-row xl:items-stretch">
                  <div class="-mt-8 w-full max-w-2xl xl:-mb-8 xl:w-96 xl:flex-none">
                    <div class="relative aspect-2/1 h-full md:-mx-8 xl:mx-0 xl:aspect-auto">
                      <img
                        class="absolute inset-0 size-full rounded-2xl bg-gray-800 object-cover shadow-2xl"
                        src={item.imgSrc}
                        alt=""
                      />
                    </div>
                  </div>
                  <div class="w-full max-w-2xl xl:max-w-none xl:flex-auto xl:px-16 xl:py-24">
                    <figure class="relative isolate pt-6 sm:pt-12">
                      <blockquote class="text-xl/8 font-semibold text-white sm:text-2xl/9">
                        <p>{item.quote}</p>
                      </blockquote>
                      <figcaption class="mt-8 text-base">
                        <div class="font-semibold text-white">
                          {item.author}
                        </div>
                        <div class="mt-1 text-gray-400">{item.role}</div>
                      </figcaption>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Carousel.Scroller>
      </Carousel.Root>
    </ContentWrapper>
  );
});
