<script lang="ts">
	import type { HtmlButtonTypes } from "$lib/types/html/html-types";


	import { Button, Spinner } from "flowbite-svelte";

  export let text: string;
  export let classes: string;
  export let type: HtmlButtonTypes = "submit";
  export let isLoading: boolean = false;
  export let loadingText: string = "Carregando...";

</script>

<Button type="{type}" class="{classes}" disabled={isLoading}>
  {#if isLoading}
    <Spinner class="me-3" size="4" />{loadingText}
  {:else}
    {text}
  {/if}
</Button>
