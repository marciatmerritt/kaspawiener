   import { component$ } from '@builder.io/qwik';
   import { Image } from "@unpic/qwik";
import { Headline } from '../ui/Headline';
   
   interface Item {
    title?: string;
    description?: string;
    icon?: any;
    classes?: Record<string, string>;
  }
  
  interface Props {
    id?: string;
    title?: any;
    subtitle?: any;
    highlight?: any;
    items: Array<Item>;
    isDark?: boolean;
    classes?: any;

  }

  export default component$((props: Props) => {
    const {  title = "", subtitle = "", highlight = "", classes = {}, isDark = false } = props;
   

     return (
        <div class="relative bg-white/80 dark:bg-gray-900/80 overflow-hidden flex items-center justify-center mx-1.5 mt-1 mb-2 rounded-md">

        <section class="relative rounded-md not-prose mx-1.5 my-1.5 bg-white/90 dark:bg-gray-900/90">
        
              <div class="absolute inset-0 pointer-events-none" aria-hidden="true"></div>
              <div class="relative max-w-7xl mx-auto px-4 sm:px-6">

        <Headline title={title} subtitle={subtitle} highlight={highlight} classes={classes?.headline} />


                </div>
                
   
       <Image
       src="/images/roadmap.jpg"
       layout="constrained"
       width={1920}
       height={1080}
       alt="Full-Width Hero Image"
       class="w-full h-auto object-cover rounded-sm"
       priority={true}
     />
   <div class="h-2 bg-white/90 dark:bg-gray-900/90"></div>
   <Image
        
        src="/images/ranks.jpg"
        layout="constrained"
        width={1920}
        height={1080}
        alt="Qwind Hero Image (Cool dog)"
        class="mx-auto w-full h-auto rounded-md"
        priority={true}
        breakpoints={[320, 480, 640, 768, 1024]}
      />
     
     </section>
     </div>
   
     );
   });
   
   
   
   
   
   
   
   
   
   
   
   
  