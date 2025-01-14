<script lang="ts">
	import type { HtmlInputTypes } from "$lib/types/html/html-types";


	import { Input, Label } from "flowbite-svelte";
	import Error from "../../routes/+error.svelte";
	import ErrorText from "./ErrorText.svelte";

  export let label: string;
  export let value = '';
  export let inputType: HtmlInputTypes = 'text';
  export let name: string;
  export let placeholder: string;
  export let required: boolean = true;
  export let error: unknown = '';
  
	const labelClass = 'space-y-2 dark:text-white';

</script>
<div>
  <Label class={labelClass}>
    <span>{label}</span>
    <Input
      bind:value
      type="{inputType}"
      name="{name}}"
      placeholder="{placeholder}"
      bind:required
      class="border outline-none dark:border-gray-600 dark:bg-gray-700"
    />
  </Label>
  <ErrorText error={String(error ?? '')}/>
</div>