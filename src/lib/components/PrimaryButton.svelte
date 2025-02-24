<script lang="ts">
	import { Button } from "flowbite-svelte";

  export let text: string;
  export let onClick: () => void = () => {};
</script>
<Button on:click={onClick}>
  {text}
</Button>