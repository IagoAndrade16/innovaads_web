<script lang="ts">
	import Utils from "$lib/core/Utils";
	import { Button } from "flowbite-svelte";
	import { PricingBodyHead, PricingCard, PricingItem, PricingItemWrapper } from "flowbite-svelte-blocks";
	import { ArrowRightOutline } from "flowbite-svelte-icons";
	import type { Package } from "$lib/types/IPackage";

  export let packageData: Package;
  export let ctaButtonOnClick: () => void;
  export let ctaButtonText: string | null = null;
  export let center: boolean = true;

</script>

<PricingCard 
  divClass="flex flex-col p-6 {center ? 'mx-auto' : ''} max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white"
>
  <PricingBodyHead>
    <svelte:fragment slot="h3">{packageData.name}</svelte:fragment>
    <svelte:fragment slot="paragraph">{packageData.description}</svelte:fragment>
    <svelte:fragment slot="price">
      <span class="mr-2 text-5xl font-extrabold">{Utils.formatToBRL(packageData.price)}</span>
      <span class="text-gray-500 dark:text-gray-400">/mês</span>
    </svelte:fragment>
  </PricingBodyHead>
  <PricingItemWrapper>
    {#each packageData.details as detail}
      <PricingItem class="text-green-500 dark:text-green-400">
        <span>{detail.description}</span>
      </PricingItem>
    {/each}
    <svelte:fragment slot="btn">
      <Button 
        class="{ctaButtonText ? '' : 'hidden'}" 
        color="primary" 
        on:click={ctaButtonOnClick}
      >
        {ctaButtonText}
        <ArrowRightOutline />
      </Button>
    </svelte:fragment>
  </PricingItemWrapper>
</PricingCard>