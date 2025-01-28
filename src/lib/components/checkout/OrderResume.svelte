<script lang="ts">
	import { Button } from "flowbite-svelte";
	import Card from "../../../routes/utils/widgets/Card.svelte";

  export let steps: number;
  export let buttonClass = steps > 0 ? 'w-24' : 'w-full';
  export let onClick: (() => void) | null = null;

</script>

<div>
  <Card title="" class="lg:w-96 w-full mb-5">
    <h1 class="font-bold text-3xl text-center text-black border-b-4 pb-4 mb-6">Resumo do Pedido</h1>
    <div class="space-y-6">
      <div class="flex justify-between text-gray-700">
        <p class="font-semibold text-lg">Produto:</p>
        <p class="text-gray-800 text-lg">Nome do Produto</p>
      </div>
      <div class="flex justify-between text-gray-700">
        <p class="font-semibold text-lg">Quantidade:</p>
        <p class="text-gray-800 text-lg">1</p>
      </div>
      <div class="flex justify-between text-gray-700">
        <p class="font-semibold text-lg">Preço:</p>
        <p class="text-gray-800 text-lg font-medium">R$ 100,00</p>
      </div>
      <div class="flex justify-between gap-3">
        <Button class="bg-gray-500 hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 {steps === 0 ? 'hidden' : ''}" on:click={() => steps--}>Voltar</Button>
        <Button class={buttonClass} on:click={onClick}>
          {steps === 2 ? 'Finalizar Pedido' : 'Continuar para Pagamento'}
        </Button>
      </div>
    </div>
  </Card>
</div>

