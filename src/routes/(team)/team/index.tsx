import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Team from "~/components/widgets/Team";

export default component$(() => {
  return (
<Team/>

  );
});

export const head: DocumentHead = {
  title: "Team",
};
