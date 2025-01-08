import { $, component$, useStore } from "@builder.io/qwik";
import IconMenu from "~/components/icons/IconMenu";

interface ItemProps {
  iconClass?: string;
}

export default component$((props: ItemProps) => {
  const { iconClass } = props;

  const store = useStore({
    isExpanded: false,
  });

  const toggleMenu = $(() => {
    store.isExpanded = !store.isExpanded;

    document.body.classList.toggle("overflow-hidden", store.isExpanded);
    document.getElementById("header")?.classList.toggle("h-screen", store.isExpanded);
    document.querySelector("#header nav")?.classList.toggle("hidden", !store.isExpanded);
  });

  return (
    <>
      <button
        type="button"
        class={`ml-1.5 text-gray-50 bg-primary-600 dark:text-black focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-md text-sm p-2.5 inline-flex items-center transition ${
          store.isExpanded ? "expanded" : ""
        }`}
        aria-label="Toggle Menu"
        onClick$={toggleMenu}
      >
        <IconMenu class={iconClass} />
      </button>

      <nav
        id="header"
        class={`fixed inset-0 bg-primary-600 text-white hidden transition-transform duration-300 ${
          store.isExpanded ? "block" : "hidden"
        }`}
      >
        <ul
          class="flex flex-col items-center justify-center h-screen space-y-4"
          onClick$={(event) => {
            const target = event.target as HTMLElement;
            if (target.tagName === "A") {
              toggleMenu(); // Close menu when a link is clicked
            }
          }}
        >
          <li>
            <a href="#roadmap" class="text-lg font-semibold">
              Roadmap
            </a>
          </li>
          <li>
            <a href="#tokenomics" class="text-lg font-semibold">
              Tokenomics
            </a>
          </li>
          <li>
            <a href="#team" class="text-lg font-semibold">
              Team
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
});
