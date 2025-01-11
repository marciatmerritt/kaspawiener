import { component$ } from "@builder.io/qwik";
import Pricing from "~/components/widgets/Pricing";





export default component$(() => {
  return (
    <>
      <Pricing highlight="Pricing"
        title="Flexible Pricing Options"
        subtitle="Choose a one-time payment or pay it off over time."
         items={[ {

          },
        ]}
      />


      
    </>
  );
});
