import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <div class="w-screen overflow-hidden">
   <iframe
  src="/images/whitepaper.pdf"
  style="width: 100vw; max-width: 100%; height: 100vh; border: none;"
  title="Whitepaper"
></iframe>
    </div>
  );
});
