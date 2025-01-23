import { component$ } from "@builder.io/qwik";
import { Headline2 } from "../ui/Headline2";
import { Headline } from "../ui/Headline";
import { PageWrapper3 } from "../common/PageWrapper3";

export default component$(() => {
    return (
        <PageWrapper3>
            <div class="flex flex-col md:flex-row items-center md:items-start md:justify-between gap-6 md:gap-8 p-4 md:p-8">
                {/* Text Container */}
                <div class="w-full md:w-1/2 flex flex-col justify-center order-1 md:order-2">
                    <div class="hidden sm:block">
                        <Headline2
                            title={"Bailey the $WIENER on Kaspa"}
                            subtitle={"Bailey is the first $WIENER and the origin story. The genesis. Many other wieners will come after Bailey but she started this rocket ship for all the other dogs."}
                            highlight={"Story"}
                        />
                    </div>
                    <div class="block sm:hidden">
                        <Headline
                            title={"Bailey the $WIENER"}
                            subtitle={"Bailey is the first $WIENER and the origin story. The genesis. Many other wieners will come after Bailey but she started this rocket ship for all the other dogs."}
                            highlight={"Story"}
                        />
                    </div>
                </div>

                {/* Image Container */}
                <div class="w-full md:w-1/2 order-2 md:order-1">
                    <img
                        height={767}
                        width={767}
                        src="/images/bailey2.jpg"
                        alt="Sample Image"
                        class="w-full h-auto rounded-lg shadow-md"
                    />
                </div>
            </div>
        </PageWrapper3>
    );
});
