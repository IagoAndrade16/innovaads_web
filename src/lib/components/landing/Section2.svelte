<script lang="ts">import { Heading, P } from "flowbite-svelte";
import CtaButton from "./CtaButton.svelte";
</script>

<div class="grid grid-cols-2 gap-4 my-48" id="about">
  <div class="flex flex-col col-span-full lg:col-span-1 justify-center">
    <Heading tag="h1" class="mb-4" customSize="text-2xl font-bold text-start">
      Alinhe isso com uma análise de criativos performantes no Facebook ADS de acordo com o seu público.
    </Heading>

    <P class=" dark:text-gray-400">
      Descubra o perfil do seu público-alvo e direcione suas campanhas de marketing para as pessoas certas.
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

<div class="grid grid-cols-2 gap-4 my-48">
  <div class="flex flex-col col-span-full lg:col-span-1 mb-10 items-center">
    <img class="w-full" src="/svg/online-ad.svg" alt="dashboard" />
  </div>
  
  <div class="flex flex-col col-span-full lg:col-span-1 justify-center">
    <Heading tag="h1" class="mb-4" customSize="text-2xl font-bold text-start">
      Alinhe isso com uma análise de criativos performantes no Facebook ADS de acordo com o seu público.
    </Heading>

    <P class=" dark:text-gray-400">
      Descubra o perfil do seu público-alvo e direcione suas campanhas de marketing para as pessoas certas.
    </P>

    <div class="mt-6">
      <CtaButton />
    </div>
  </div>
</div>