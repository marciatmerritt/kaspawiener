import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Contact from "~/components/widgets/Contact";
import FAQs from "~/components/widgets/FAQs";

import Features from "~/components/widgets/Features";


import Hero from "~/components/widgets/Hero";
import Pricing from "~/components/widgets/Pricing";
import Reviews from "~/components/widgets/Reviews";

import Steps from "~/components/widgets/Steps";

import { SITE } from "~/config.mjs";
import { qwikSerialized } from "~/utils/qwikSerialized";

const IconBrandTailwind = qwikSerialized(() => import("../components/icons/IconBrandTailwind"));
const IconApps = qwikSerialized(() => import("../components/icons/IconApps"));
const IconRocket = qwikSerialized(() => import("../components/icons/IconRocket"));
const IconBrandGoogle = qwikSerialized(() => import("../components/icons/IconBrandGoogle"));
const IconBulb = qwikSerialized(() => import("../components/icons/IconBulb"));

export default component$(() => {
  return (
    <>
      <Hero />

      <Features
        highlight="Features"
        title="What you get with Qwind"
        subtitle="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque rem aperiam, eaque ipsa quae."
        items={[
          {
            title: "Qwik + Tailwind CSS Integration",
            description:
              "A seamless integration between two great frameworks that offer high productivity, performance and versatility.",
            icon: IconBrandTailwind,
          },
          {
            title: "Ready-to-use Components",
            description:
              "Widgets made with Tailwind CSS ready to be used in Marketing Websites, SaaS, Blogs, Personal Profiles, Small Business...",
            icon: IconApps,
          },
          {
            title: "Best Practices",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mi risus tempus nulla.",
          },
          {
            title: "Excellent Page Speed",
            description:
              "Having a good page speed impacts organic search ranking, improves user experience (UI/UX) and increase conversion rates.",
            icon: IconRocket,
          },
          {
            title: "Search Engine Optimization (SEO)",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mi risus tempus nulla.",
            icon: IconBrandGoogle,
          },
          {
            title: "Open to new ideas and contributions",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mi risus tempus nulla.",
            icon: IconBulb
          },
        ]}
      />

<Steps/>
<Reviews/>
<Pricing/>



<Contact/>
   

    </>
  );
});

export const head: DocumentHead = {
  title: SITE.title,
  meta: [
    {
      name: "description",
      content: SITE.description,
    },
  ],
};
