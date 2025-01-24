import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <div class="w-full overflow-hidden">
      <iframe
        src="/images/whitepaper.pdf"
        class="w-full max-w-full h-screen md:h-[90vh] rounded-lg"
        style="border: none;"
        title="Whitepaper"
      ></iframe>
    </div>
  );
});
