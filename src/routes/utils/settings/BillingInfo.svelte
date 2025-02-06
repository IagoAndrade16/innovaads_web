<script lang="ts">
	import { SubscriptionsService } from "$lib/services/SubscriptionsService";
	import { onMount } from "svelte";
	import Card from "../widgets/Card.svelte";
	import type { GetSubscriptionSummaryResponseData } from "$lib/services/types/GetSubscriptionSummary";
	import { userAuthStore } from "$lib/stores/userAuthStore";
	import Engine from "$lib/core/Engine";
	import { Button, Heading, P, Spinner } from "flowbite-svelte";
	import PackageCard from "$lib/components/PackageCard.svelte";
	import { DialogService } from "$lib/services/DialogService";
  
  let subscriptionsService: SubscriptionsService;
  let userBillingSummary: GetSubscriptionSummaryResponseData | null;
  let loading = true;
  let cancelingSubscription = false;
  let hasPlan = false;

  const fetchUserBillingSummary = async () => {
    const response = await subscriptionsService.getSummary({
      bearerToken: $userAuthStore!.token,
    });

    switch (response.status) {
      case "SUCCESS":
        userBillingSummary = response.data;
        const subscriptionIsActive = userBillingSummary?.subscription?.status === 'active';
        if(subscriptionIsActive) {
          hasPlan = true;
        }

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
    const wantCancelSubscription = await DialogService.confirm({
      title: 'Tem certeza?',
      text: `
        Tem certeza que deseja cancelar o plano atual? 
        Você ainda poderá usar a plataforma até o dia ${userBillingSummary?.subscription?.nextBillingAt}.
      `,
    })

    if(!wantCancelSubscription) return;

    cancelingSubscription = true;

    const response = await subscriptionsService.cancelSubscription({
      bearerToken: $userAuthStore!.token,
    });

    cancelingSubscription = false;

    switch (response.status) {
      case "SUCCESS":
        hasPlan = false;
        DialogService.success({
          message: 'Plano cancelado com sucesso.',
          title: 'Sucesso!',
        })
        userBillingSummary!.subscription!.status = 'canceled';
        break;
      case "UNAUTHORIZED":
        Engine.logout('/login');
        break;

      default:
        DialogService.error({
          message: 'Houve um erro inesperado ao cancelar o plano. Por favor, tente novamente.',
          title: 'Ooops!',
        })
        break;
    }
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
    {#if hasPlan}
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
          <Button 
            color="red"
            class="w-fit float-end"
            outline
            bind:disabled={cancelingSubscription}
            on:click={handleCancelSubscription}
          >
            <Spinner class="w-5 h-5 mr-2 {cancelingSubscription ? '' : 'hidden'}" />
            {cancelingSubscription ? 'Cancelando...' : 'Cancelar plano'}
          </Button>
        </div>
      </Card>
    {:else}
      <Card title="Informações do plano atual" class="-mt-px max-w-none col-span-12 lg:col-span-6 xl:col-span-4">
        <div class="my-5">
          <P>Você não possui um plano ativo no momento.</P>
          {#if userBillingSummary?.subscription?.status === 'canceled'}
            <P>Acesso a plataforma até o dia: {userBillingSummary?.subscription?.nextBillingAt}.</P>
          {/if}
        </div>

        <div class="w-full my-5 flex space-x-2 justify-end">
          <Button 
            color="primary" 
            class="w-full"
            href="/home/pricing"
          >
            Ver planos
          </Button>
        </div>
      </Card>
    {/if}
  </div>
{/if}