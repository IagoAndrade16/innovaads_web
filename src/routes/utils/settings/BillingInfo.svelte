<script lang="ts">
	import { SubscriptionsService } from "$lib/services/SubscriptionsService";
	import { onMount } from "svelte";
	import Card from "../widgets/Card.svelte";
	import type { GetSubscriptionSummaryResponseData } from "$lib/services/types/GetSubscriptionSummary";
	import { userAuthStore } from "$lib/stores/userAuthStore";
	import Engine from "$lib/core/Engine";
	import { Button, Heading, P, Spinner } from "flowbite-svelte";
	import PackageCard from "$lib/components/PackageCard.svelte";
  
  let subscriptionsService: SubscriptionsService;
  let userBillingSummary: GetSubscriptionSummaryResponseData | null;
  let loading = true;

  const fetchUserBillingSummary = async () => {
    const response = await subscriptionsService.getSummary({
      bearerToken: $userAuthStore!.token,
    });

    switch (response.status) {
      case "SUCCESS":
        userBillingSummary = response.data;
        loading = false;
        break;
      case "UNAUTHORIZED":
        Engine.logout('/login');
        break;

      default:
        break;
    }
  };

  const handleCancelSubscription = async () => {
    console.log('cancel subscription'); // const response = await subscriptionsService.cancelSubscription({
    //   bearerToken: $userAuthStore!.token,
    // });

    // switch (response.status) {
    //   case "SUCCESS":
    //     Engine.logout('/login');
    //     break;
    //   case "UNAUTHORIZED":
    //     Engine.logout('/login');
    //     break;

    //   default:
    //     break;
    // }
  };

  onMount(async() => {
    subscriptionsService = new SubscriptionsService();

    await fetchUserBillingSummary();
  });

</script>
{#if loading}
  <div class="flex justify-center items-center h-64">
    <Spinner />
  </div>
{:else}
  <div class="grid grid-cols-12 gap-4">
    <Card title="Informações do plano atual" class="-mt-px max-w-none col-span-12 lg:col-span-6 xl:col-span-4">
      <div class="my-5">
        <P>Data da próxima cobrança: {userBillingSummary?.subscription?.nextBillingAt}</P>
      </div>
      <PackageCard 
        packageData={{
          name: userBillingSummary?.package?.name ?? '',
          description: userBillingSummary?.package?.description ?? '',
          details: userBillingSummary?.package?.details ?? [],
          id: userBillingSummary?.package?.id ?? '',
          price: userBillingSummary?.package?.price ?? 0,
        }}
        ctaButtonOnClick={() => {}}
        center={false}
      />

      <div class="w-full my-5 flex space-x-2 justify-end">
        <!-- <Button 
          color="primary" 
          class="w-fit float-end"
        >
          Alterar plano
        </Button> -->
        
        <Button 
          color="red"
          class="w-fit float-end"
          outline
          on:click={handleCancelSubscription}
        >
          Cancelar plano
        </Button>
      </div>
    </Card>
  </div>
{/if}