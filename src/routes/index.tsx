import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Contact from "~/components/pages/Contact";
import Hero from "~/components/widgets/Hero";
import Steps from "~/components/widgets/Steps";
import { SITE } from "~/config.mjs";
import Services from "~/components/pages/Services";
import Reviews from "~/components/pages/Reviews";
import FAQmobile from "~/components/pages/FAQmobile";

// const IconBrandTailwind = qwikSerialized(() => import("../components/icons/IconBrandTailwind"));
// const IconApps = qwikSerialized(() => import("../components/icons/IconApps"));
// const IconRocket = qwikSerialized(() => import("../components/icons/IconRocket"));
// const IconBrandGoogle = qwikSerialized(() => import("../components/icons/IconBrandGoogle"));
// const IconBulb = qwikSerialized(() => import("../components/icons/IconBulb"));

export default component$(() => {
  return (
    <>
      <Hero />
     

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
