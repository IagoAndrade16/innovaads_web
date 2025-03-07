<script>
	import Engine from "$lib/core/Engine";

	import { Button } from "flowbite-svelte";
	import { ArrowLeftToBracketOutline } from "flowbite-svelte-icons";

</script>
<Button class="font-extrabold" on:click={() => Engine.navigateTo('/create-account')}>
  TESTAR GRÁTIS
  <ArrowLeftToBracketOutline /> 
</Button>