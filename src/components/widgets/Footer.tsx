import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  const links = [
    {
      title: "About",
      items: [
        { title: "Story", href: "/story" },
        { title: "Roadmap", href: "/roadmap" },
        { title: "Tokenomics", href: "/tokenomics" },

      ],
    },
    
    {
      title: "Resources",
      items: [
        { title: "Whitepaper", href: "/whitepaper" },
        { title: "Kas.fyi", href: "https://kas.fyi/token/krc20/wiener" },
        { title: "KRC-20", href: "https://kasplex.org/" },


      ],
    },
    {
      title: "Trade",
      items: [
     
        { title: "KSPR Bot", href: "https://t.me/kspr_home_bot?start=WdRcvw" },
        { title: "Chainge (coming soon)", href: "/" },

      ],
    },

    {
      title: "Kaspa",
      items: [
        { title: "Docs", href: "https://kaspa.org/" },
        { title: "Explorer", href: "https://explorer.kaspa.org/?_gl=1*zucsjw*_ga*MTU0NTUwNzk2NC4xNzM0MTE4NTEw*_ga_YSMK4G52CC*MTczNjQwNzQ0Ny4yMi4xLjE3MzY0MDc4NjEuMC4wLjA." },


      ],
    },

  ];



  return (
    <footer class="py-2 px-2 bg-gradient-to-r from-primary-600 via-primary to-primary-600">
      <div class="max-w-8xl mx-auto px-4 sm:px-6 bg-white/90 dark:bg-gray-900/90 shadow-lg rounded-lg">
        <div class="grid grid-cols-12 gap-4 gap-y-4 sm:gap-8 pt-6 md:pt-8 pb-2">
          <div class="col-span-12 lg:col-span-4 pr-8">
            <div class="flex items-center mb-3">
              <img class="rounded-full" height={25} width={25} src="/images/logo.jpg"></img>
              <Link
                class="inline-block font-bold pl-1 text-primary-600 hover:text-primary text-xl"
                href={"/"}
              >
                Bailey the $WIENER
              </Link>
            </div>
  
            <div class="text-sm mb-2 text-gray-600 dark:text-gray-400">
              Elevate your brand with our professional photography and videography services. We specialize in creating stunning visuals that capture your story and leave a lasting impression.
            </div>
  
            {/* Action Button */}
            {/* <div class="mt-4 ">
              <a href="/contact">
              <button
                class="px-6 py-2 bg-primary-600 text-white font-semibold rounded-lg shadow-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition"
              >
                Request a Quote
              </button>
              </a>
            </div> */}
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
          {/* <ul class="flex md:order-1 -ml-2 md:ml-4 md:mb-0 justify-start">
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
          </ul> */}
  
          <div class="text-sm text-gray-700 pb-2 pt-3 dark:text-slate-400 flex items-center justify-between md:justify-start">
            <span class="hidden sm:block">© 2025 Bailey the $WIENER&nbsp;</span>
            <span class="hidden sm:block">&nbsp;· &nbsp;</span>
            <a class="text-gray-900 dark:text-gray-200" href="#">
              Donate <span class="text-primary mx-1">♥</span> kaspa:asdiasdoiajsodiaosjd
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
})  