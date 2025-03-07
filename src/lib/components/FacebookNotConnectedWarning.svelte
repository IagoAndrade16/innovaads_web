<script lang="ts">
	import { userStore } from "$lib/stores/userStore";


	import { Alert } from "flowbite-svelte";
	import { InfoCircleSolid } from "flowbite-svelte-icons";
	import PrimaryButton from "./PrimaryButton.svelte";
	import Engine from "$lib/core/Engine";

  let showWarning = $userStore?.facebookAccount === null;

</script>

{#if showWarning}
  <div class="col-span-full">
    <Alert class="text-red-500 mx-5 lg:flex justify-between">
      <div class="flex mt-3">
        <InfoCircleSolid slot="icon" class="w-5 h-5" /> &nbsp
        Atenção! Você não está conectado com o Facebook. Conecte agora para conseguir utilizar todas as funcionalidades do sistema.
      </div>

      <center>
        <PrimaryButton 
          on:click={() => Engine.navigateTo('/home/profile')}
          classes="w-full md:w-1/2 lg:w-auto mt-4 lg:mt-0"
          text="Conectar com Facebook"
        />
      </center>

      </Alert>
  </div>
{/if}