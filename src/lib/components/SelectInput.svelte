<script lang="ts">
  import { Select, Label } from 'flowbite-svelte';
	import type { SelectOptionType } from '../../template/types';
	import ErrorText from './ErrorText.svelte';

  export let label = '';
  export let options: SelectOptionType<string>[] = [];
  export let selected = '';
  export let placeholder = 'Selecione uma opção';
  export let error: any;

</script>

<Label class="dark:text-white">
  {label}
  <Select 
    placeholder={placeholder}
    class="mt-2" 
    items={options} bind:value={selected} 
  />
  
  {#if error}
    <ErrorText error={error} />
  {/if}
</Label>