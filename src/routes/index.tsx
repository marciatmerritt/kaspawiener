import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Contact from "~/components/pages/Contact";
import Hero from "~/components/widgets/Hero";
import Roadmap from "~/components/pages/Roadmap";
import Story from "~/components/pages/Story";
import { SITE } from "~/config.mjs";
import Tokenomics from "~/components/pages/Tokenomics";
import RoadmapHome from "~/components/pages/RoadmapHome";
import StoryHome from "~/components/pages/StoryHome";
import TokenomicsHome from "~/components/pages/TokenomicsHome";


// const IconBrandTailwind = qwikSerialized(() => import("../components/icons/IconBrandTailwind"));
// const IconApps = qwikSerialized(() => import("../components/icons/IconApps"));
// const IconRocket = qwikSerialized(() => import("../components/icons/IconRocket"));
// const IconBrandGoogle = qwikSerialized(() => import("../components/icons/IconBrandGoogle"));
// const IconBulb = qwikSerialized(() => import("../components/icons/IconBulb"));

export default component$(() => {
  return (
    <>
      <Hero />
     <StoryHome/>
     <RoadmapHome/>
<TokenomicsHome/>



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
