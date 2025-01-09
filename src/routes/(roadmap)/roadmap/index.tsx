import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Roadmap from "~/components/widgets/Roadmap";

export default component$(() => {
  return (
    
<Roadmap/>

  );
});

export const head: DocumentHead = {
  title: "Roadmap",
};
