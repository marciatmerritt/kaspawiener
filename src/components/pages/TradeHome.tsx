import { component$ } from "@builder.io/qwik";
import { Headline } from "../ui/Headline";
import { PageWrapper3 } from "../common/PageWrapper3";

export default component$(() => {
    return (
        <PageWrapper3>
                 <Headline
                title={"Trade WIENER"}
                subtitle={"$WIENER can be traded on KaspaCom and KSPR Bot, stay tuned for more exchanges coming soon!"}
                highlight={"Exchanges"}
            />
            <div class="grid grid-cols-1 gap-5 md:grid-cols-3 pt-4 p-4">
                <a href="https://t.me/kspr_home_bot?start=WdRcvw" target="_blank">
                    <img width="720" height="332" src="/images/ksprbot.png" alt="KSPR Bot" class="w-full h-48 object-cover rounded-md hover:opacity-80" />
                </a>
               
                <a href="https://www.kaspa.com/marketplace/token/wiener?ref=wiener" target="_blank">
                    <img width="540" height="540" src="/images/kaspacom.jpg" alt="Kaspiano" class="w-full h-48 object-cover rounded-md hover:opacity-80" />
                </a>

                {/* <a href="https://dapp.chainge.finance/?fromChain=KAS&toChain=KAS&fromToken=KAS&toToken=KOIN_krc20" target="_blank">
                    <img width="2400" height="1260" src="/images/chainge.png" alt="Chainge" class="w-full h-48 object-cover rounded-md hover:opacity-80" />
                </a> */}
              

            </div>
        </PageWrapper3>
    );
});
