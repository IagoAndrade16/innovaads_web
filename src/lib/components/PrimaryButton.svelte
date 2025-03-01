<script lang="ts">
	import { Button } from "flowbite-svelte";

  export let text: string;
  export let onClick: () => void = () => {};
  export let classes: string = "";
</script>

<Button on:click={() => onClick()} class={classes}>
  {text}
</Button>