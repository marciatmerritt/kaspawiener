import { component$ } from "@builder.io/qwik";
import { Headline2 } from "../ui/Headline2";
import { PageWrapper } from "../common/PageWrapper";

export default component$(() => {
    return (
        <PageWrapper>
            <div class="flex flex-col md:flex-row items-center md:items-start md:justify-between gap-6 md:gap-8 p-4 md:p-8">
                {/* Text Container */}
                <div class="w-full md:w-1/2 flex flex-col justify-center order-1 md:order-1">
                    <Headline2
                        title={"$WIENER Roadmap"}
                        subtitle={"Bailey is the first $WIENER and the origin story. The genesis. Many other wieners will come after Bailey but she started this rocket ship for all the other dogs."}
                        highlight={"Roadmap"}
                    />
                </div>

                {/* Image Container */}
                <div class="w-full md:w-1/2 order-2 md:order-2">
                    <img
                        height={767}
                        width={767}
                        src="/images/background.jpg"
                        alt="Sample Image"
                        class="w-full h-auto rounded-lg shadow-md"
                    />
                </div>
            </div>
        </PageWrapper>
    );
});
