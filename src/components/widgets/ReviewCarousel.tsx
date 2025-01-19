import { component$, useSignal } from '@builder.io/qwik';
import { Carousel } from '@qwik-ui/headless';


export default component$(() => {

  const testimonials = [
    {
      text: "Gravida quam mi erat tortor neque molestie. Auctor aliquet at porttitor a enim nunc suscipit tincidunt nunc. Et non lorem tortor posuere. Nunc eu scelerisque interdum eget tellus non nibh scelerisque bibendum.",
      name: "Judith Black",
      role: "CEO of Workcation",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80",
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. In consequat, urna et pharetra sollicitudin, sapien eros volutpat eros, sit amet euismod risus metus id elit.",
      name: "Michael Scott",
      role: "Regional Manager",
      image: "/images/chainge.png",
    },
    {
      text: "Nulla facilisi. Phasellus non felis eros. Integer vel turpis blandit, vestibulum risus nec, consequat neque. Nam sit amet ante nec purus aliquam hendrerit sed sit amet elit.",
      name: "Sarah Connor",
      role: "Founder of FutureTech",
      image: "/images/kaspacom.jpg",
    },
  ];

  const isPlaying = useSignal<boolean>(false);


  return (
   <div class="-mt-10">
      <Carousel.Root class="carousel-root" gap={30} draggable={false} autoPlayIntervalMs={3500}
        bind:autoplay={isPlaying}>

        <Carousel.Scroller class="carousel-scroller">
          {testimonials.map((testimonial, index) => (
            <Carousel.Slide key={index} class="carousel-slide">
              <div class="bg-white pt-12 pb-16 sm:pt-32 sm:pb-24 xl:pb-32">
                <div class="bg-gray-900 pb-20 sm:pb-24 xl:pb-0">
                  <div class="mx-auto flex max-w-7xl flex-col items-center gap-x-8 gap-y-10 px-6 sm:gap-y-8 lg:px-8 xl:flex-row xl:items-stretch">
                    <div class="-mt-8 w-full max-w-2xl xl:-mb-8 xl:w-96 xl:flex-none">
                      <div class="relative aspect-2/1 h-64 sm:h-72 md:h-full md:-mx-8 xl:mx-0 xl:aspect-auto">
                        <img
                          class="absolute inset-0 w-full h-[50%] rounded-2xl bg-gray-800 object-cover shadow-2xl"
                          src={testimonial.image}
                          alt={`${testimonial.name} testimonial`}
                        />
                      </div>

                    </div>
                    <div class="w-full max-w-2xl xl:max-w-none xl:flex-auto xl:px-16 xl:py-24">
                      <figure class="relative isolate pt-6 sm:pt-12">
                        <blockquote class="text-xl/8 font-semibold text-white sm:text-2xl/9">
                          <p>{testimonial.text}</p>
                        </blockquote>
                        <figcaption class="mt-8 text-base">
                          <div class="font-semibold text-white">{testimonial.name}</div>
                          <div class="mt-1 text-gray-400">{testimonial.role}</div>
                        </figcaption>
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            </Carousel.Slide>
          ))}
        </Carousel.Scroller>
        <div class="carousel-buttons">
          <Carousel.Previous>Prev</Carousel.Previous>
          <Carousel.Next>Next</Carousel.Next>
        </div>
      </Carousel.Root>
      <p>isPlaying: {isPlaying.value.toString()}</p>
      <button onClick$={() => (isPlaying.value = !isPlaying.value)}>
        Toggle autoplay
      </button>
      </div>
   
  );
});
