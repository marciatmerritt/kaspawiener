import { component$ } from '@builder.io/qwik';
import { Headline } from '../ui/Headline';
import { PageWrapper } from '../common/PageWrapper';
import { ContentWrapper } from '../common/ContentWrapper';

const reviews = [
  {
    title: "Great insights and generous heart",
    text: "Thanks Dave Andrews for your great insights, talent and generous heart!",
    name: "Carole Françoise Noel",
    position: "CTO at Open AI",
    image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png",

  },
  {
    title: "Collaboration between artist and printer",
    text: "It's always a collaboration between photographer and printer, and he is an artist from whom I learn so very much!",
    name: "Ruth Dick",
    position: "Software Engineer at Tesla",
    image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png",
   
  },
  {
    title: "Always high-caliber work",
    text: "Dave is an artist in his own right who shares his knowledge with his clients willingly. His work is beautiful and always of the same high caliber. I only use Dave!",
    name: "Joy Kardish",
    position: "CEO at Oracle",
    image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png",
   
  },
  {
    title: "Attention to detail",
    text: "Dave is the best! Great results & attention to detail from start to finish.",
    name: "Andrew Balfour",
    position: "CTO at Open AI",
    image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png",
   
  },
  {
    title: "Dedicated to the artists",
    text: "Dave invests himself in the work he prints for the artists he serves.",
    name: "Alan Mirabelli",
    position: "Software Engineer at Tesla",
    image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png",

  },
  {
    title: "Craftsmanship and love",
    text: "Dave’s attention to detail and love of the craft is evident in his prints.",
    name: "Beth Gordon",
    position: "CEO at Oracle",
    image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png",
    
  },
];

export default component$(() => {
  return (
    <div>
      <PageWrapper>
        <Headline
          title={"What Our Clients Say"}
          subtitle={"Discover the experiences and success stories from our clients."}
          highlight={"Reviews"}
        />

        
      </PageWrapper>

    <ContentWrapper>
   
    
            </ContentWrapper>
    
    </div>
  );
});
