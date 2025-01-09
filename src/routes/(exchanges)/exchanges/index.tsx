import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Features from "~/components/widgets/Features";

export default component$(() => {
  return (
    <Features id="Exchanges"
        highlight="Exchanges"
        title="Where to Buy KOIN"
        subtitle="We're currently listed on Chainge, Kaspiano and KSPR Bot with more exchanges coming soon."
        items={[
        
        ]}
      />

  );
});

export const head: DocumentHead = {
  title: "Exchanges",
};
