<script lang="ts">import { Heading, P } from "flowbite-svelte";
import CtaButton from "./CtaButton.svelte";
</script>

<div class="grid grid-cols-2 gap-4 my-40 lg:my-48" id="about">
  <div class="flex flex-col col-span-full lg:col-span-1 justify-center">
    <Heading tag="h1" class="mb-4" customSize="text-3xl font-bold text-start">
      Desvende as Estratégias dos Anúncios Mais Lucrativos
    </Heading>

    <P class="dark:text-gray-400 text-xl">
      Otimize suas campanhas com palavras-chave validadas e de alto desempenho
    </P>

    <div class="mt-6">
      <CtaButton />
    </div>
  </div>

  <div class="flex flex-col col-span-full lg:col-span-1 items-center">
    <img class="w-full dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup.svg" alt="dashboard" />
    <img class="w-full hidden dark:block" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup-dark.svg" alt="dashboard" />
  </div>
</div>

<div class="grid grid-cols-2 gap-4 my-40 lg:my-48">
  <div class="flex flex-col col-span-full lg:col-span-1 mb-10 items-center">
    <img class="w-full" src="/svg/online-ad.svg" alt="dashboard" />
  </div>
  
  <div class="flex flex-col col-span-full lg:col-span-1 justify-center">
    <Heading tag="h1" class="mb-4" customSize="text-3xl font-bold text-start">
      Encontre os criativos vencedores no Facebook e Google Ads
    </Heading>

    <P class="dark:text-gray-400 text-xl">
      Descubra os elementos que mais impulsionam as vendas e mantenha-se sempre à frente dos seus concorrentes
    </P>

    <div class="mt-6">
      <CtaButton />
    </div>
  </div>
</div>