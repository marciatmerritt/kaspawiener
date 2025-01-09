import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Tokenomics from "~/components/widgets/Tokenomics";

export default component$(() => {
  return (
<Tokenomics/>

  );
});

export const head: DocumentHead = {
  title: "Tokenomics",
};
