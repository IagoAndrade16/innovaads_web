<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  import ToolbarButton from './ToolbarButton.svelte';

  export let name: string = 'Close';
</script>

<ToolbarButton on:click {name} {...$$restProps} class={twMerge('ms-auto', $$props.class)} let:svgSize>
  <svg class={svgSize} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
  </svg>
</ToolbarButton>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let name: string = 'Close';
-->