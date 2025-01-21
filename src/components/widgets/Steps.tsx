import { component$ } from "@builder.io/qwik";
import { Image } from "@unpic/qwik";
import IconStar from "~/components/icons/IconStar";


export default component$(() => {
  const stepsData = {
    title: "Our Process: From Vision to Reality",
    items: [
      {
        title: "Step 1: Free Consultation",
        description:
          "Start with a free consultation where we learn about your goals, challenges, and vision for your website. This is where your ideas take shape, and we establish the foundation for success.",
        icon: IconStar,
      },
      {
        title: "Step 2: Tailored Design",
        description:
          "Our team crafts a custom design that aligns with your brand and captivates your audience. Every detail is carefully planned to ensure a seamless and stunning user experience.",
        icon: IconStar,
      },
      {
        title: "Step 3: Development Excellence",
        description:
          "We bring your design to life with clean, efficient, and scalable code. Our developers ensure your website is fast, responsive, and ready to perform across all devices.",
        icon: IconStar,
      },
      {
        title: "Step 4: Testing & Launch",
        description:
          "Before going live, we rigorously test your website to ensure it meets the highest quality standards. Once perfected, we launch your site, setting you up for digital success.",
        icon: IconStar,
      },
    ],
    image: {
      src: "/assets/images/steps.webp",
      alt: "Steps to success image",
    },
  };
  
  const { title, items, image } = stepsData;

  return (
    <section class="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20 bg-gray-100 dark:bg-gray-800">
      <div class="row-gap-10 grid gap-6 md:grid-cols-2">
        <div class="mb-4 md:mb-0 md:py-4 md:pr-16">
          {title && <h2 class="font-heading mb-8 text-3xl font-bold lg:text-4xl">{title}</h2>}
          {Array.isArray(items) &&
            items.length &&
            items.map(({ title, description, icon: Icon }, index) => (
              <div key={`item-steps-${index}`} class="flex">
                <div class="mr-4 flex flex-col items-center">
                  <div>
                    {index !== items.length - 1 ? (
                      <div class="flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary-900">
                        {typeof Icon !== "undefined" ? (
                          <Icon class="h-6 w-6 text-primary-800 dark:text-slate-200" />
                        ) : (
                          <IconStar class="h-6 w-6 text-primary-800 dark:text-slate-200" />
                        )}
                      </div>
                    ) : (
                      <div class="flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary-900 bg-primary-900">
                        {typeof Icon !== "undefined" ? (
                          <Icon class="h-6 w-6 text-white dark:text-slate-200" />
                        ) : (
                          <IconStar class="h-6 w-6 text-white dark:text-slate-200" />
                        )}
                      </div>
                    )}
                  </div>
                  {index !== items.length - 1 && <div class="h-full w-px bg-gray-300 dark:bg-slate-500"></div>}
                </div>
                <div class={`pt-1 ${index !== items.length - 1 ? "pb-8" : ""}`}>
                  {title && <p class="mb-2 text-xl font-bold text-gray-900 dark:text-slate-300">{title}</p>}
                  {description && <p class="text-gray-600 dark:text-slate-400">{description}</p>}
                </div>
              </div>
            ))}
        </div>
        <div class="relative">
          {typeof image !== "undefined" && (
            <Image
              layout="constrained"
              src="/images/steps.webp"
              width={532}
              height={704}
              alt={image.alt}
              class="inset-0 w-full rounded-md bg-gray-500 object-cover object-top shadow-lg dark:bg-slate-700 md:absolute md:h-full"
              breakpoints={[320, 480, 640, 1024]}
            />
          )}
        </div>
      </div>
    </section>
  );
});