import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <div class="w-screen overflow-hidden">
      <div class="relative w-full aspect-[16/9]">
        <iframe
          src="/images/whitepaper.pdf"
          class="absolute top-0 left-0 w-full h-full"
          style="border: none;"
          title="Whitepaper"
        ></iframe>
      </div>
    </div>
  );
});
