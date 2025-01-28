<script lang="ts">
	import { Heading, P } from "flowbite-svelte";
	import CtaButton from "./CtaButton.svelte";
</script>

<div class="w-full items-center align-middle dark:bg-light-gray py-12 bg-white">
  <Heading tag="h1" class="mb-4" customSize="text-3xl font-bold text-center">
    Comece seu teste grátis
  </Heading>

  <P class=" dark:text-gray-400 text-center">
    Teste a plataforma por 7 dias. Não precisa de cartão de crédito.
  </P>

  <div class="place-self-center mt-6">
    <CtaButton />
  </div>
</div>