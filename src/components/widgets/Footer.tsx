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
              <Link
                class="inline-block font-bold text-primary-600 hover:text-primary text-xl"
                href={"/"}
              >
                Bailey the $WIENER
              </Link>
            </div>
  
            <div class="text-sm mb-2 text-gray-600 dark:text-gray-400">
            Join the fun with WIENER— the top dog on the Kaspa chain. Fast, fun, and ready for the next big trend.             
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
        
  
          <div class="text-sm text-gray-700 pb-2 pt-3 dark:text-slate-400 flex items-center justify-between md:justify-start">
            <span class="">© 2025 Bailey the $WIENER&nbsp;</span>
            <span class="hidden sm:block">&nbsp;· &nbsp;</span>
           
               <span class="hidden sm:block text-gray-900 dark:text-gray-200">  Donate <span class="text-primary mx-1">♥</span> kaspa:qr3ew0m3gp09utfmyz6arwa79s47x4vrper7e89mpd222jsgmj9sxgzptdvkv </span>
              <a class="btn py-1 text-xs px-2 dark:bg-primary-700 bg-primary-300" href="https://kas.fyi/address/kaspa:qr3ew0m3gp09utfmyz6arwa79s47x4vrper7e89mpd222jsgmj9sxgzptdvkv"> <span class="block sm:hidden text-gray-900 dark:text-gray-200">Donate<span class="text-primary mx-1">♥</span></span></a>

            
            
          </div>
        </div>
      </div>
    </footer>
  );
})  