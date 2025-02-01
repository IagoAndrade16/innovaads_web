<script lang="ts">
	import { Button, P } from "flowbite-svelte";
	import Card from "../../../routes/utils/widgets/Card.svelte";

  export let steps: number;
  export let buttonClass = steps > 0 ? 'w-24' : 'w-full';
  export let onClick: (() => void) | null = null;

</script>

<div>
  <Card title="" class="lg:w-96 w-full mb-5">
    <h1 class="font-bold text-3xl text-center text-gray-900 dark:text-white border-b-4 pb-4 mb-6">Resumo do Pedido</h1>
    <div class="space-y-6">
      <div class="flex justify-between text-gray-900 dark:text-white">
        <P class="font-semibold text-lg text-gray-900 dark:text-white">Produto:</P>
        <P class="text-gray-800 text-lg text-gray-900 dark:text-white">Nome do Produto</P>
      </div>
      <div class="flex justify-between text-gray-900 dark:text-white">
        <P class="font-semibold text-lg text-gray-900 dark:text-white">Quantidade:</P>
        <P class="text-gray-800 text-lg text-gray-900 dark:text-white">1</P>
      </div>
      <div class="flex justify-between text-gray-900 dark:text-white">
        <P class="font-semibold text-lg text-gray-900 dark:text-white">Preço:</P>
        <P class="text-gray-800 text-lg font-medium text-gray-900 dark:text-white">R$ 100,00</P>
      </div>
      <div class="flex justify-between gap-3">
        <Button 
          class="dark:bg-white bg-gray-500 dark:text-black text-white  hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 
          {steps === 0 ? 'hidden' : ''}" 
          on:click={() => steps--}>
          Voltar
        </Button>
        <Button class={buttonClass} on:click={onClick}>
          {steps === 2 ? 'Finalizar Pedido' : 'Continuar para Pagamento'}
        </Button>
      </div>
    </div>
  </Card>
</div>

