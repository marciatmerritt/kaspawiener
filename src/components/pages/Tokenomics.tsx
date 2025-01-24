import { component$ } from "@builder.io/qwik";
import { Headline2 } from "../ui/Headline2";
import { PageWrapper } from "../common/PageWrapper";
import { Headline } from "../ui/Headline";

export default component$(() => {
    return (
        <PageWrapper>
            <div class="flex flex-col md:flex-row items-center md:items-start md:justify-between gap-6 md:gap-8 -mt-2 pb-4 md:p-8">
                {/* Left Side: Headline + Stats */}
                <div class="w-full md:w-1/2 flex flex-col gap-6 order-1 md:order-2">
                    {/* Headline */}
                    <div>
                    <div class="hidden sm:block">
                        <Headline2
                            title={"$WIENER Token Statistics"}
                            subtitle={
                                "WIENER launched fairly with a strong community from the beginning during mint."
                            }
                            highlight={"Tokenomics"}
                        />
                        </div>
                    </div>
                       <div class="block sm:hidden">
                                            <Headline
                                                title={"Token Statistics"}
                                                subtitle={"WIENER launched fairly with a strong community from the beginning during mint."}
                                                highlight={"Tokenomics"}
                                            />
                                        </div>
                    
                    {/* Stats Grid */}
                    <div class="grid grid-cols-2 -mt-4 sm:-mt-8 gap-6 md:grid-cols-2 md:gap-8">
                        <div class="text-center md:border-r dark:md:border-slate-500 mb-10 md:mb-0">
                            <div class="text-4xl font-bold lg:text-5xl xl:text-6xl text-primary-600 font-heading">
                                100%
                            </div>
                            <p class="text-sm font-medium tracking-widest text-gray-800 dark:text-slate-400 uppercase lg:text-base">
                                Fair Launch
                            </p>
                        </div>
                        <div class="text-center dark:md:border-slate-500 mb-10 md:mb-0">
                            <div class="text-4xl font-bold lg:text-5xl xl:text-6xl text-primary-600 font-heading">
                                1 Billion
                            </div>
                            <p class="text-sm font-medium tracking-widest text-gray-800 dark:text-slate-400 uppercase lg:text-base">
                                Total Supply
                            </p>
                        </div>
                        <div class="text-center md:border-r dark:md:border-slate-500 font-heading">
                            <div class="text-4xl font-bold lg:text-5xl xl:text-6xl text-primary-600">
                                0.1%
                            </div>
                            <p class="text-sm font-medium tracking-widest text-gray-800 dark:text-slate-400 uppercase lg:text-base">
                                Team Allocation
                            </p>
                        </div>
                        <div class="text-center">
                            <div class="text-4xl font-bold lg:text-5xl xl:text-6xl text-primary-600 font-heading">
                                100+
                            </div>
                            <p class="text-sm font-medium tracking-widest text-gray-800 dark:text-slate-400 uppercase lg:text-base">
                                Community Members
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right Side: Image */}
                <div class="w-full md:w-1/2 order-2 md:order-1">
                    <img
                        height={767}
                        width={767}
                        src="/images/tokenomics.jpg"
                        alt="Sample Image"
                        class="w-full h-auto rounded-lg shadow-md"
                    />
                </div>
            </div>
        </PageWrapper>
    );
});
