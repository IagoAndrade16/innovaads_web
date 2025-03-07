<script lang="ts">
	import { Button } from "flowbite-svelte";

  export let text: string;
  export let onClick: () => void = () => {};

</script>
<Button 
  on:click={onClick}
  color="alternative"
  class="transition duration-300 ease-in-out bg-white hover:bg-gray-100 text-gray-800 hover:text-gray-900 border border-gray-200"
>
  {text}
</Button>