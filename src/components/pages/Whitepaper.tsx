import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <div class="w-screen overflow-hidden">
    <embed src="/images/whitepaper.pdf" type="application/pdf" class="w-full h-screen" />

    </div>
  );
});
