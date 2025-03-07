<script lang="ts">
	import { Button, Spinner } from "flowbite-svelte";

  export let text: string;
  export let onClick: () => void = () => {};
  export let classes: string = "";
  export let loading: boolean = false;
  export let loadingText: string = "Carregando...";
</script>

<Button disabled={loading} on:click={() => onClick()} class={classes}>
  {loading ? loadingText : text}

  {#if loading}
    <Spinner 
      class="ml-2"
      color="primary"
    />
  {/if}
</Button>