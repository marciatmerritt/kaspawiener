import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Image } from "@unpic/qwik";
import Features from "~/components/widgets/Features";

import Hero from "~/components/widgets/Hero";
import Stats from "~/components/widgets/Stats";

import { SITE } from "~/config.mjs";

export default component$(() => {
  return (
    <>
      <Hero />
 
      {/* <Features id="Exchanges"
        highlight="Exchanges"
        title="Where to Buy KOIN"
        subtitle="We're currently listed on Chainge, Kaspiano and KSPR Bot with more exchanges coming soon."
        items={[
        
        ]}
      /> */}


   

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
