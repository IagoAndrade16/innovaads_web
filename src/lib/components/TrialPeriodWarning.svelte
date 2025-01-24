<script lang="ts">
	import Engine from "$lib/core/Engine";
	import { userStore } from "$lib/stores/userStore";


	import { Alert, Button } from "flowbite-svelte";
	import { InfoCircleSolid } from "flowbite-svelte-icons";

</script>
{#if $userStore?.isOnTrial}
  <div class="col-span-full">
    <Alert class="text-red-500 mx-5" dismissable>
      <InfoCircleSolid slot="icon" class="w-5 h-5" />
      Atenção! Restam {$userStore?.daysRemainingForTrial} dias antes do seu período de teste acabar. Depois disso não será possível acessar as funcionalidades da plataforma.
    </Alert>
  </div>
{:else}
  {#if !$userStore?.packageId}
    <div class="col-span-full">
      <Alert class="text-red-500 mx-5 lg:flex justify-between">
        <div class="flex mt-3">
          <InfoCircleSolid slot="icon" class="w-5 h-5" /> &nbsp
          Atenção! Seu período de testes acabou. Para continuar utilizando a plataforma, você precisa assinar um dos nossos planos.
        </div>

        <center>
          <Button 
            on:click={() => Engine.navigateTo('/home/pricing')}
            size="md"
            class="w-full md:w-1/2 lg:w-auto mt-4 lg:mt-0"
          >
            Continuar usando a plataforma
          </Button>
        </center>

        </Alert>
    </div>
  {/if}
{/if}