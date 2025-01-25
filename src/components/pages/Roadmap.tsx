import { component$ } from "@builder.io/qwik";
import { Headline2 } from "../ui/Headline2";
import { PageWrapper } from "../common/PageWrapper";
import IconStar from "../icons/IconStar";

const stepsData = {
    title: "Our Process: From Idea to Finished Print",
    items: [
        {
            title: "2025 Q1: Token Launch and Online Presence",
            description:
                "Deploy the token, mint initial supplies, and establish an online presence. Kickstart the project with active shilling to build awareness.",
            icon: IconStar,
        },
        {
            title: "2025 Q2: Community Engagement",
            description:
                "Focus on community voting, secure a few exchange listings, and launch the Content Creator Support Initiative to amplify outreach.",
            icon: IconStar,
        },
        {
            title: "2025 Q3: NFT Launch and Partnerships",
            description:
                "Roll out NFTs using the KRC721 standard. Build strategic partnerships and identify talent to scale the project further.",
            icon: IconStar,
        },
        {
            title: "2025 Q4: Community Rewards and Year Review",
            description:
                "Host the Economic Mission Contest and the 'Make The World A Better Place' showcase. Wrap up the year with a review and celebrate progress with the community.",
            icon: IconStar,
        },
        {
            title: "2026: Global Impact and Future Planning",
            description:
                "Research global opportunity gaps, form partnerships with organizations like the United Nations and World Economic Forum, and host the Meme of the Year Rewards. Reevaluate the project and plan for the next phase.",
            icon: IconStar,
        },
    ],


    image: {
        src: "/assets/images/print-steps.webp",
        alt: "Steps to professional printing success",
    },
};


const { items } = stepsData;

export default component$(() => {
    return (
        <PageWrapper>
            <div class="flex flex-col md:flex-row items-center md:items-start md:justify-between gap-6 md:gap-8 p-4 md:p-8">
                {/* Text Container */}
                <div class="w-full md:w-1/2 flex flex-col justify-center order-1 md:order-1">

                    <Headline2
                        title={"$WIENER Roadmap"}
                        highlight={"Roadmap"}
                    />

                    <div class="mb-4 mt-2 md:mb-0 md:py-4 md:pr-16">
                        {Array.isArray(items) &&
                            items.length &&
                            items.map(({ title, description, icon: Icon }, index) => (
                                <div key={`item-steps-${index}`} class="flex">
                                    <div class="mr-4 flex flex-col items-center">
                                        <div>
                                            {index !== items.length - 1 ? (
                                                <div class="flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary-900">
                                                    {typeof Icon !== "undefined" ? (
                                                        <Icon class="h-6 w-6 text-primary-800 dark:text-slate-200" />
                                                    ) : (
                                                        <IconStar class="h-6 w-6 text-primary-800 dark:text-slate-200" />
                                                    )}
                                                </div>
                                            ) : (
                                                <div class="flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary-900 bg-primary-900">
                                                    {typeof Icon !== "undefined" ? (
                                                        <Icon class="h-6 w-6 text-white dark:text-slate-200" />
                                                    ) : (
                                                        <IconStar class="h-6 w-6 text-white dark:text-slate-200" />
                                                    )}
                                                </div>
                                            )}
                                        </div>
                                        {index !== items.length - 1 && <div class="h-full w-px bg-gray-300 dark:bg-slate-500"></div>}
                                    </div>
                                    <div class={`pt-1 ${index !== items.length - 1 ? "pb-8" : ""}`}>
                                        {title && <p class="mb-2 text-xl font-bold text-gray-900 dark:text-slate-300">{title}</p>}
                                        {description && <p class="text-gray-600 dark:text-slate-400">{description}</p>}
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>

                {/* Image Container */}
                <div class="w-full md:w-1/2 order-2 md:order-2">

                    <img
                        height={767}
                        width={767}
                        src="/images/roadmap2.jpg"
                        alt="Sample Image"
                        class="w-full h-auto rounded-lg shadow-md"
                    />
                </div>

            </div>
        </PageWrapper>
    );
});
