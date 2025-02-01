<script lang="ts">import { Section, PricingBodyHead, PricingCard, PricingItemWrapper, PricingHead, PricingItem } from "flowbite-svelte-blocks";
  import { Button } from "flowbite-svelte";
	import { PackagesService } from "$lib/services/PackagesService";
	import { onMount } from "svelte";
	import type { Package } from "$lib/types/IPackage";
	import Utils from "$lib/core/Utils";
	import { ArrowRightOutline } from "flowbite-svelte-icons";
	import Engine from "$lib/core/Engine";

  let packagesService: PackagesService;
  let packages: Package[] = [];

  onMount(async () => {
    packagesService = new PackagesService();
    const listPackagesRes = await packagesService.listPackages();

    if(listPackagesRes.status !== 'SUCCESS') {
      return;
    }
    
    packages = listPackagesRes.data!.packages;
  })
</script>
  
  <Section name="pricing">
    <PricingHead>
      <svelte:fragment slot="h2">Preços e planos</svelte:fragment>
      <svelte:fragment slot="paragraph">Para continuar usando a plataforma depois do período grátis, é necessário fazer a assinatura mensal.</svelte:fragment>
    </PricingHead>
    <div class="space-y-8 lg:grid lg:grid-cols-1 sm:gap-6 xl:gap-10 lg:space-y-0">
      {#each packages as possiblePackage}
      <PricingCard>
        <PricingBodyHead>
          <svelte:fragment slot="h3">{possiblePackage.name}</svelte:fragment>
          <svelte:fragment slot="paragraph">{possiblePackage.description}</svelte:fragment>
          <svelte:fragment slot="price">
            <span class="mr-2 text-5xl font-extrabold">{Utils.formatToBRL(possiblePackage.price)}</span>
            <span class="text-gray-500 dark:text-gray-400">/mês</span>
          </svelte:fragment>
        </PricingBodyHead>
        <PricingItemWrapper>
          {#each possiblePackage.details as detail}
            <PricingItem class="text-green-500 dark:text-green-400">
              <span>{detail.description}</span>
            </PricingItem>
          {/each}
          <svelte:fragment slot="btn">
            <Button color="red" on:click={() => Engine.navigateTo('/create-account')}>
              Começar agora &nbsp
              <ArrowRightOutline />
            </Button>
          </svelte:fragment>
        </PricingItemWrapper>
      </PricingCard>
      {/each}
    </div>
  </Section>