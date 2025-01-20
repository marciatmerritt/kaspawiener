import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

import IconTwitter from "~/components/icons/IconTwitter"
import IconTelegram from "../icons/IconTelegram";
import ToggleTheme from "../common/ToggleTheme";

export default component$(() => {
  const links = [
    {
      title: "About",
      items: [
        { title: "Our Team", href: "#team" },
        { title: "Our Process", href: "#process" },
        { title: "Testimonials", href: "#testimonials" },
      ],
    },
    {
      title: "Services",
      items: [
        { title: "Photography", href: "#photography" },
        { title: "Videography", href: "#videography" },
        { title: "Editing", href: "#editing" },
      ],
    },
    {
      title: "Portfolio",
      items: [
        { title: "Photography Projects", href: "#photo-projects" },
        { title: "Video Projects", href: "#video-projects" },
      ],
    },

    {
      title: "Contact",
      items: [
        { title: "Get in Touch", href: "#contact" },
        { title: "Request a Quote", href: "#quote" },
      ],
    },
  ];

  const social = [
    { label: "Twitter", icon: IconTwitter, href: "https://x.com/koinonkas" },
    { label: "Telegram", icon: IconTelegram, href: "https://t.me/+Zhe2fvsS1WQyNTA0" },

  ];

  return (
    <footer class="py-2 px-2 bg-gradient-to-r from-primary-600 via-primary to-primary-600">
      <div class="max-w-8xl mx-auto px-4 sm:px-6 bg-white/90 dark:bg-gray-900/90 shadow-lg rounded-lg">
        <div class="grid grid-cols-12 gap-4 gap-y-4 sm:gap-8 pt-6 md:pt-8 pb-2">
          <div class="col-span-12 lg:col-span-4 pr-8">
            <div class="flex items-center mb-3">
              <Link
                class="inline-block font-bold text-primary-600 hover:text-primary text-xl"
                href={"/"}
              >
                MLB Media
              </Link>
            </div>

            <div class="text-sm mb-2 text-gray-600 dark:text-gray-400">
            Elevate your brand with our professional photography and videography services. We specialize in creating stunning visuals that capture your story and leave a lasting impression.







</div>
          </div>
          {links.map(({ title, items }, index) => (
            <div key={index} class="col-span-6 md:col-span-3 lg:col-span-2">
              <div class="text-gray-800 dark:text-gray-300 font-medium mb-3">{title}</div>
              {Array.isArray(items) && items.length > 0 && (
                <ul class="text-sm">
                  {items.map(({ title, href }, index2) => (
                    <li key={index2} class="mb-1">
                      <Link
                        class="text-gray-600 hover:text-primary hover:underline dark:text-gray-400 transition duration-150 ease-in-out"
                        href={href}
                      >
                        {title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

        </div>
        <div class="md:flex md:items-center md:justify-between pb-3 md:pt-8 md:pb-2">
          <ul class="flex md:order-1 -ml-2 md:ml-4 md:mb-0 justify-end">
            {social.map(({ label, href, icon: Icon }, index) => (
              <li key={index}>
                <Link
                  class="text-gray-500 dark:text-gray-400 hover:bg-primary hover:text-white focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 inline-flex items-center"
                  aria-label={label}
                  title={label}
                  href={href}
                >
                  {typeof Icon !== "undefined" && <Icon />}
                </Link>
              </li>
            ))}
            <ToggleTheme />
          </ul>

          <div class="text-sm text-gray-700 mr-4 pb-2 dark:text-slate-400 flex items-center">
            {/* Replace favicon span with your Logo component */}
            {/* © 2025 Webdev.ca */}
            Designed & Developed {" "} by&nbsp;
            <a class="text-gray-900 underline dark:text-gray-200" href="#">
              Webdev.ca
            </a>{" "} 
            {/* &nbsp;&&nbsp;
            <a class="text-gray-900 underline dark:text-gray-200" href="#">
              nft.cx
            </a> */}
            {/* <span class="hidden md:inline"> · All rights reserved.</span> */}
          </div>
        </div>
      </div>
    </footer>
  );
});