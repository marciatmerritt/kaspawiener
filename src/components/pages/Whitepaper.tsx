import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <div class="w-screen overflow-hidden">
      <iframe
        src="/images/whitepaper.pdf"
        class="w-full h-screen md:h-[90vh]"
        style="border: none;"
        title="Whitepaper"
      ></iframe>
    </div>
  );
});
